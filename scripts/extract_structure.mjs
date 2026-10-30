// Resolve aliases and TSX references with the same compiler configuration as the application.
import fs from 'node:fs';
import path from 'node:path';
import ts from 'typescript';

const root = process.cwd();
const files = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));
const config = ts.readConfigFile('tsconfig.json', ts.sys.readFile);
const options = ts.parseJsonConfigFileContent(config.config, ts.sys, root).options;
const nodes = new Map();
const edges = [];
const relative = file => path.relative(root, file).split(path.sep).join('/');
const location = (source, node) => `${relative(source.fileName)}:${source.getLineAndCharacterOfPosition(node.getStart(source)).line + 1}`;
const fileId = file => `file:${file}`;
const symbolId = (file, name) => `symbol:${file}#${name}`;
const sources = new Map();
const declarations = new Map();
function addNode(id, label, source_file, source_location, extra = {}) {
  nodes.set(id, {id, label, file_type:'code', source_file, source_location, ...extra});
}
function edge(source, target, relation, file, loc) {
  edges.push({source,target,relation,confidence:'EXTRACTED',confidence_score:1,source_file:file,source_location:loc,weight:1});
}
function declaredName(statement) {
  return statement.name && ts.isIdentifier(statement.name) ? statement.name.text : null;
}
for (const file of files.filter(file => /\.(?:tsx?|[cm]?js)$/.test(file))) {
  const source = ts.createSourceFile(path.resolve(file), fs.readFileSync(file,'utf8'), ts.ScriptTarget.Latest, true);
  sources.set(file, source);
  const names = new Set();
  for (const statement of source.statements) {
    const definitions = ts.isVariableStatement(statement) ? statement.declarationList.declarations : [statement];
    for (const definition of definitions) {
      const name = declaredName(definition);
      if (!name) continue;
      names.add(name);
      const id = symbolId(file,name);
      addNode(id,name,file,location(source,definition), {kind:ts.SyntaxKind[definition.kind]});
      edge(fileId(file),id,'declares',file,location(source,definition));
    }
  }
  declarations.set(file,names);
}
for (const [file, source] of sources) {
  const bindings = new Map();
  function resolve(specifier) {
    if (specifier.startsWith('.')) {
      const direct=path.resolve(path.dirname(source.fileName),specifier);
      if(fs.existsSync(direct) && fs.statSync(direct).isFile()) return {file:relative(direct),id:fileId(relative(direct))};
    }
    const result = ts.resolveModuleName(specifier, source.fileName, options, ts.sys).resolvedModule;
    if (result && !result.isExternalLibraryImport) return {file:relative(result.resolvedFileName), id:fileId(relative(result.resolvedFileName))};
    const name = specifier.startsWith('node:') ? specifier : specifier.startsWith('@') ? specifier.split('/').slice(0,2).join('/') : specifier.split('/')[0];
    const id=`package:${name}`;
    addNode(id,name,'package.json',null,{kind:name.startsWith('node:')?'builtin':'dependency'});
    return {id};
  }
  for (const statement of source.statements) {
    if (!ts.isImportDeclaration(statement) || !ts.isStringLiteral(statement.moduleSpecifier)) continue;
    const target=resolve(statement.moduleSpecifier.text);
    edge(fileId(file),target.id,'imports',file,location(source,statement));
    const clause=statement.importClause;
    if (clause?.name) {
      let name='default';
      if(target.file) {
        const other=sources.get(target.file);
        const declaration=other?.statements.find(s => s.modifiers?.some(m=>m.kind===ts.SyntaxKind.DefaultKeyword));
        name=declaration?.name?.text || 'default';
      }
      bindings.set(clause.name.text,{...target,name});
    }
    if(clause?.namedBindings && ts.isNamedImports(clause.namedBindings)) {
      for(const binding of clause.namedBindings.elements) bindings.set(binding.name.text,{...target,name:binding.propertyName?.text || binding.name.text});
    }
  }
  function targetId(binding) {
    return binding.file && declarations.get(binding.file)?.has(binding.name) ? symbolId(binding.file,binding.name) : binding.id;
  }
  function visit(node, owner=fileId(file)) {
    if ((ts.isFunctionDeclaration(node)||ts.isClassDeclaration(node)||ts.isVariableDeclaration(node)) && node.name && ts.isIdentifier(node.name) && declarations.get(file)?.has(node.name.text)) owner=symbolId(file,node.name.text);
    if(ts.isCallExpression(node) && node.expression.kind===ts.SyntaxKind.ImportKeyword && node.arguments[0] && ts.isStringLiteral(node.arguments[0])) {
      edge(owner,resolve(node.arguments[0].text).id,'lazy_imports',file,location(source,node));
    }
    if(ts.isCallExpression(node) && ts.isIdentifier(node.expression)) {
      const name=node.expression.text;
      if(bindings.has(name)) edge(owner,targetId(bindings.get(name)),'calls',file,location(source,node));
      else if(declarations.get(file)?.has(name) && symbolId(file,name)!==owner) edge(owner,symbolId(file,name),'calls',file,location(source,node));
    }
    if((ts.isJsxOpeningElement(node)||ts.isJsxSelfClosingElement(node)) && ts.isIdentifier(node.tagName)) {
      const name=node.tagName.text;
      if(bindings.has(name)) edge(owner,targetId(bindings.get(name)),'renders',file,location(source,node));
      else if(declarations.get(file)?.has(name)) edge(owner,symbolId(file,name),'renders',file,location(source,node));
    }
    ts.forEachChild(node,child=>visit(child,owner));
  }
  visit(source);
}
process.stdout.write(JSON.stringify({nodes:[...nodes.values()],edges}));
