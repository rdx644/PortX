"""Refresh local architecture context. Run from any directory; no model/API credentials needed.

Documentation semantics are retained only when their source hashes still match.
For refreshed semantic interpretation, use the graphify skill then run this script.
"""
from __future__ import annotations

import argparse
from collections import Counter
from datetime import datetime, timezone
import hashlib
import json
import re
from pathlib import Path
import subprocess
import sys

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / 'graphify-out'
sys.stdout.reconfigure(encoding='utf-8')

def read_json(path, default=None):
    return json.loads(path.read_text(encoding='utf-8-sig')) if path.exists() else default

def write_json(path, data):
    path.write_text(json.dumps(data, indent=2, ensure_ascii=False), encoding='utf-8')

def digest(path):
    return hashlib.sha256(path.read_bytes()).hexdigest()

def inventory():
    result = subprocess.run(['git','ls-files','--cached','--others','--exclude-standard','-z'], cwd=ROOT, capture_output=True, check=True)
    paths = sorted(set(result.stdout.decode('utf-8').strip('\0').split('\0')))
    return {name:digest(ROOT/name) for name in paths if name and (ROOT/name).is_file() and not name.startswith(('graphify-out/','.graphify_'))}

def node_id(path):
    return 'file:' + path

def main():
    parser=argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--check',action='store_true',help='Report changed inputs without rebuilding')
    args=parser.parse_args()
    current=inventory()
    previous=read_json(OUT/'source-manifest.json',{}).get('sha256',{})
    changed=sorted(name for name in set(current)|set(previous) if current.get(name)!=previous.get(name))
    if args.check:
        print(json.dumps({'fresh':not changed,'changed_files':changed},indent=2))
        return 0 if not changed else 1

    from graphify.detect import detect, save_manifest
    from graphify.extract import extract
    from graphify.build import build_from_json
    from graphify.cluster import cluster, score_all
    from graphify.analyze import god_nodes, surprising_connections, suggest_questions
    from graphify.export import to_json, to_html
    from graphify.report import generate

    OUT.mkdir(exist_ok=True)
    detection=detect(ROOT)
    if detection['total_files']>200 or detection['total_words']>2_000_000:
        raise SystemExit('Corpus exceeds graphify review threshold; select a smaller scope before rebuilding.')
    code_paths=[Path(f) for f in detection['files']['code']]
    raw=extract(code_paths)
    # Compiler extraction supplements the generic parser with TSX and @/* alias resolution.
    relative_code=[path.relative_to(ROOT).as_posix() if path.is_absolute() else path.as_posix() for path in code_paths]
    compiler_input=OUT/'.graphify_compiler_inputs.json'
    write_json(compiler_input,relative_code)
    compiled=subprocess.run(['node','scripts/extract_structure.mjs',str(compiler_input)],cwd=ROOT,capture_output=True,check=True,encoding='utf-8')
    compiler=json.loads(compiled.stdout)
    nodes={}
    edges=[]
    coverage=[]
    for name,sha in current.items():
        suffix=Path(name).suffix.lower()
        mode='metadata only' if name=='package-lock.json' or suffix=='.pdf' else 'structural source' if name in relative_code else 'document/configuration'
        coverage.append({'path':name,'sha256':sha,'mode':mode})
        nodes[node_id(name)]={'id':node_id(name),'label':name,'file_type':'code' if name in relative_code else 'document','source_file':name,'source_location':f'{name}:1','kind':'file','coverage':mode}
    nodes.update({n['id']:n for n in compiler['nodes']})
    edges.extend(compiler['edges'])
    css_path='src/app/globals.css'
    if css_path in current:
        css=(ROOT/css_path).read_text(encoding='utf-8')
        for match in re.finditer(r'(--[\w-]+)\s*:\s*([^;{}]+);',css):
            line=css[:match.start()].count('\n')+1
            identity=f'css:{match.group(1)}@L{line}'
            nodes[identity]={'id':identity,'label':f'{match.group(1)} = {match.group(2).strip()}','file_type':'code','source_file':css_path,'source_location':f'{css_path}:{line}','kind':'design token'}
            edges.append({'source':node_id(css_path),'target':identity,'relation':'defines_token','confidence':'EXTRACTED','confidence_score':1,'source_file':css_path,'source_location':f'{css_path}:{line}','weight':1})
    # Filesystem containment provides navigation for configuration and metadata-only assets.
    root_id='directory:.'
    nodes[root_id]={'id':root_id,'label':'Shubham portfolio checkout','file_type':'document','source_file':'','kind':'directory'}
    for name in current:
        parent=Path(name).parent.as_posix()
        child=node_id(name)
        while True:
            parent_id='directory:'+parent
            nodes.setdefault(parent_id,{'id':parent_id,'label':parent if parent!='.' else 'Shubham portfolio checkout','file_type':'document','source_file':'','kind':'directory'})
            edges.append({'source':parent_id,'target':child,'relation':'contains','confidence':'EXTRACTED','confidence_score':1,'source_file':name,'source_location':None,'weight':1})
            if parent=='.': break
            child=parent_id
            parent=Path(parent).parent.as_posix()
    # Explicit path references in documents bridge decisions to implementation.
    for name in current:
        if not name.endswith('.md'): continue
        content=(ROOT/name).read_text(encoding='utf-8')
        for target in current:
            if target!=name and target in content:
                line=content[:content.index(target)].count('\n')+1
                edges.append({'source':node_id(name),'target':node_id(target),'relation':'references','confidence':'EXTRACTED','confidence_score':1,'source_file':name,'source_location':f'{name}:{line}','weight':1})

    # Retain additional parser-discovered nested functions, with normalized source paths.
    mapping={}
    for node in raw['nodes']:
        name=Path(node.get('source_file','').replace('\\','/'))
        source=name.relative_to(ROOT).as_posix() if name.is_absolute() else name.as_posix()
        label=node.get('label','')
        identity=node_id(source) if label==Path(source).name else f"symbol:{source}#{label.removesuffix('()')}"
        mapping[node['id']]=identity
        if identity not in nodes:
            loc=node.get('source_location','L1').lstrip('L')
            nodes[identity]={**node,'id':identity,'source_file':source,'source_location':f'{source}:{loc}'}
    for edge in raw['edges']:
        if edge['relation']=='imports_from':
            continue  # Compiler-resolved imports replace filename-only parser guesses.
        source=mapping.get(edge['source']); target=mapping.get(edge['target'])
        if source in nodes and target in nodes:
            edges.append({**edge,'source':source,'target':target,'confidence_score':edge.get('confidence_score',1 if edge.get('confidence')=='EXTRACTED' else .8),'source_file':nodes[source].get('source_file')})

    semantic=read_json(OUT/'semantic.json',{'nodes':[],'edges':[],'hyperedges':[],'source_hashes':{}})
    stale=sorted(name for name,sha in semantic.get('source_hashes',{}).items() if current.get(name)!=sha)
    usable_nodes=[n for n in semantic['nodes'] if n.get('source_file') not in stale]
    nodes.update({n['id']:n for n in usable_nodes})
    allowed={n['id'] for n in usable_nodes}
    edges.extend(e for e in semantic['edges'] if e['source'] in allowed and e['target'] in allowed and e.get('source_file') not in stale)
    hyperedges=[h for h in semantic.get('hyperedges',[]) if set(h['nodes'])<=allowed and h.get('source_file') not in stale]
    for node in usable_nodes:
        source=node.get('source_file')
        if source in current:
            edges.append({'source':node_id(source),'target':node['id'],'relation':'documents','confidence':'EXTRACTED','confidence_score':1,'source_file':source,'source_location':node.get('source_location'),'weight':1})
    # Dependencies declared in package.json remain visible even when no source import uses them.
    package=read_json(ROOT/'package.json',{})
    for kind in ['dependencies','devDependencies']:
        for name,version in package.get(kind,{}).items():
            identity='package:'+name
            nodes.setdefault(identity,{'id':identity,'label':name,'file_type':'code','source_file':'package.json','source_location':'package.json:1','kind':'dependency','version':version})
            edges.append({'source':node_id('package.json'),'target':identity,'relation':kind,'confidence':'EXTRACTED','confidence_score':1,'source_file':'package.json','source_location':'package.json:1','weight':1})

    unique={}
    for edge in edges:
        if edge['source'] in nodes and edge['target'] in nodes and edge['source']!=edge['target']:
            key=(edge['source'],edge['target'],edge['relation'])
            if key not in unique or edge.get('confidence_score',0)>unique[key].get('confidence_score',0): unique[key]=edge
    extraction={'nodes':list(nodes.values()),'edges':list(unique.values()),'hyperedges':hyperedges,'input_tokens':0,'output_tokens':0}
    graph=build_from_json(extraction)
    communities=cluster(graph)
    cohesion=score_all(graph,communities)
    labels=read_json(OUT/'community-labels.json',{})
    # Prefer stable source-oriented labels; an explicit labels file can override them.
    themes={'hero':'Hero and graphics','three':'Hero and graphics','projects':'Project case studies','sections':'Homepage sections','github':'GitHub data boundary','profile':'Profile and credentials','script':'Graph maintenance','docs':'Project decisions','navigation':'Navigation and accessibility'}
    named={}
    for cid,members in communities.items():
        counts=Counter()
        for identity in members:
            text=(nodes.get(identity,{}).get('source_file','')+' '+nodes.get(identity,{}).get('label','')).lower()
            for key,label in themes.items():
                if key in text: counts[label]+=1
        if len(members)<=2:
            fallback=nodes.get(members[0],{}).get('label','Application foundation')
        elif any(identity=='file:package.json' for identity in members): fallback='Dependencies and build tools'
        else: fallback=counts.most_common(1)[0][0] if counts else 'Application foundation'
        named[cid]=next((label for anchor,label in labels.items() if anchor in members),None) or fallback
    repeated=Counter(named.values())
    named={cid:(f'{name} {cid}' if repeated[name]>1 else name) for cid,name in named.items()}
    gods=god_nodes(graph); surprises=surprising_connections(graph,communities)
    questions=suggest_questions(graph,communities,named)
    questions=[
        {'type':'project_trace','question':'How does src/data/projects.ts feed homepage previews and generated case studies?','why':'The content model is imported by both presentation paths.'},
        {'type':'project_trace','question':'How do reduced-motion, no-JavaScript, and GitHub fallbacks preserve usable homepage content?','why':'This connects optional motion, data validation, and the documented initial-content requirement.'},
    ]+questions[:3]
    report=generate(graph,communities,cohesion,named,gods,surprises,detection,{'input':0,'output':0},str(ROOT),suggested_questions=questions)
    report=report.replace('- Token cost: 0 input · 0 output','- Token cost: unavailable (in-session extraction-agent counters were not exposed)')
    report+='\n## Extraction audit\n\n'
    report+=f'- Full source inventory: {len(current)} files with SHA-256 hashes; parser corpus: {detection["total_files"]} supported files.\n'
    report+='- Generic graphify AST plus TypeScript compiler resolution of local imports, TSX render references, and static call references. References describe source structure, not proof of runtime execution.\n'
    report+='- Semantic fragments were authored by graphify extraction agents. Exact model token usage was unavailable; zeros in the standard token fields mean unavailable, not zero cost.\n'
    report+='- Graphify exports an undirected analysis graph; original edge directions and parallel relations are preserved in extraction.json.\n'
    report+='- Community cohesion and suggested refactoring questions are graph heuristics, not findings that the application needs refactoring.\n'
    report+='- Dependencies, builds, browser traces and private environment files are outside the corpus. The resume and dependency lockfile are represented by metadata/hash only.\n'
    report+=f'- Stale semantic sources omitted: {", ".join(stale) if stale else "none"}.\n'
    write_json(OUT/'extraction.json',extraction)
    write_json(OUT/'coverage.json',{'files':coverage,'excluded':['node_modules/','.next/','.git/','output/','.playwright-cli/','graphify-out/','private environment files'],'semantic_stale':stale})
    write_json(OUT/'analysis.json',{'communities':communities,'cohesion':cohesion,'labels':named,'gods':gods,'surprises':surprises,'questions':questions})
    to_json(graph,communities,str(OUT/'graph.json'))
    if len(nodes)<=5000:
        to_html(graph,communities,str(OUT/'graph.html'),community_labels=named)
        if (OUT/'vendor/vis-network.min.js').exists():
            html=(OUT/'graph.html').read_text(encoding='utf-8')
            html=html.replace('https://unpkg.com/vis-network/standalone/umd/vis-network.min.js','vendor/vis-network.min.js')
            html=html.replace('<head>','<head>\n<link rel="icon" href="data:,">',1)
            (OUT/'graph.html').write_text(html,encoding='utf-8')
    else: print('More than 5,000 nodes: HTML skipped; use graph.json.')
    (OUT/'GRAPH_REPORT.md').write_text(report,encoding='utf-8')
    save_manifest(detection['files'],str(OUT/'manifest.json'))
    write_json(OUT/'source-manifest.json',{'generated_at':datetime.now(timezone.utc).isoformat(),'sha256':current})
    write_json(OUT/'detection.json',detection)
    cost=read_json(OUT/'cost.json',{'runs':[],'total_input_tokens':0,'total_output_tokens':0,'token_accounting':'unavailable for in-session extraction agents; zero is not a cost claim'})
    cost['runs'].append({'date':datetime.now(timezone.utc).isoformat(),'files':len(current),'input_tokens':0,'output_tokens':0,'semantic_reused':True})
    write_json(OUT/'cost.json',cost)
    print(json.dumps({'nodes':graph.number_of_nodes(),'edges':graph.number_of_edges(),'communities':len(communities),'inventory_files':len(current),'stale_semantic_sources':stale}))
    return 0

if __name__=='__main__':
    raise SystemExit(main())
