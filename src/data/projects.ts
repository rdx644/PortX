export type Project = {
  slug: string;
  number: string;
  title: string;
  category: string;
  summary: string;
  repo: string;
  demo?: string;
  stack: string[];
  kind: 'commerce' | 'patch' | 'cursor' | 'security' | 'cloud' | 'agent';
  problem: string;
  objectives: string[];
  flow: string[];
  details: string[];
  decisions: { title: string; text: string }[];
  challenges: string;
  security: string;
  result: string;
  scope: string;
};
export const projects: Project[] = [
  {
    slug: 'agentic-commerce',
    number: '01',
    title: 'Agentic Commerce',
    category: 'AGENTIC SYSTEMS / BACKEND',
    kind: 'commerce',
    summary:
      'Intelligent checkout. Deterministic authorization. A clear boundary between reasoning and moving money.',
    repo: 'Agentic-Commerce-',
    demo: 'https://agentic-commerce-zyoy.onrender.com/dashboard',
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'Docker'],
    problem:
      'An agent can interpret a purchase request. Spending money requires a separate, auditable permission boundary.',
    objectives: [
      'Constrain spending to an explicit capability.',
      'Keep budget and payment state consistent.',
      'Make authorization inspectable.',
    ],
    flow: [
      'Buyer intent',
      'Agent proposal',
      'Capability gate',
      'Budget ledger',
      'Payment state',
      'Audit event',
    ],
    details: [
      'Capability tokens bound permitted actions.',
      'Catalog snapshots preserve the decision context.',
      'An atomic ledger and payment state machine coordinate checkout.',
    ],
    decisions: [
      {
        title: 'Separate intent from authority',
        text: 'The agent proposes. Deterministic checks authorize.',
      },
      {
        title: 'Make transitions explicit',
        text: 'A central state machine guards payment ordering.',
      },
    ],
    challenges:
      'Retries, stale catalogs, and concurrent purchases make transaction boundaries critical.',
    security:
      'Capability checks, webhook verification, and atomic budget updates support the authorization boundary.',
    result:
      'Source code and a linked audit dashboard demonstrate the checkout lifecycle. No throughput or conversion claims are presented.',
    scope: 'Controlled single-merchant demonstration; linked deployment availability may vary.',
  },
  {
    slug: 'zeropatch',
    number: '02',
    title: 'ZeroPatch CI',
    category: 'DEVSECOPS / SUPPLY CHAIN',
    kind: 'patch',
    summary:
      'From risky workflows to reviewable fixes. Evidence-first remediation for GitHub Actions.',
    repo: 'ZeroPatch-CI',
    stack: ['Python', 'YAML', 'GitHub Actions', 'Docker'],
    problem:
      'Finding a risky workflow is only useful when the proposed fix is understandable and safely constrained.',
    objectives: [
      'Detect high-confidence controls.',
      'Limit remediation to supported edits.',
      'Return reviewable evidence.',
    ],
    flow: [
      'Workflow YAML',
      'Structural parser',
      'Control scan',
      'Bounded patch',
      'Revalidation',
      'Human review',
    ],
    details: [
      'YAML structure drives finding detection.',
      'Checks cover pinning, permissions, triggers, runners, and artifact execution.',
      'Candidate patches must parse and remove the selected findings.',
    ],
    decisions: [
      { title: 'Draft-only output', text: 'No workflow execution or merge authority.' },
      { title: 'Reject ambiguity', text: 'Unsupported changes remain review-only.' },
    ],
    challenges:
      'Workflow semantics need more than text matching. Conservative rejection keeps transformations predictable.',
    security:
      'Optional model rationale is disabled by default. Public deployment needs authentication and rate limits.',
    result:
      'Scanner, bounded transformations, validation tests, and an Action integration are available in the repository.',
    scope: 'Static validation evidence does not prove runtime workflow safety.',
  },
  {
    slug: 'multiplayer-cursor',
    number: '03',
    title: 'Multiplayer Cursor',
    category: 'DISTRIBUTED SYSTEMS / REAL-TIME',
    kind: 'cursor',
    summary:
      'One shared space. Explicit state synchronization, from pointer input to the remote canvas.',
    repo: 'Real-Time-Multiplayer-Cursor-State-Sync',
    demo: 'https://multiplayer-cursor-frontend.onrender.com/',
    stack: ['TypeScript', 'WebSockets', 'Node.js', 'Canvas'],
    problem:
      'Pointer movement is frequent. Network delivery is irregular. Naive broadcasting makes movement expensive and uneven.',
    objectives: [
      'Synchronize current room state.',
      'Validate messages at runtime.',
      'Restore presence after disconnection.',
    ],
    flow: [
      'Pointer input',
      'Latest-value throttle',
      'Typed protocol',
      'Room manager',
      'Interpolation',
      'Canvas render',
    ],
    details: [
      'The throttler sends the newest position.',
      'Room state tracks participants and canonical events.',
      'Interpolation smooths incoming samples; heartbeats and backoff manage reconnects.',
    ],
    decisions: [
      { title: 'Ephemeral state', text: 'Keep current positions, not durable movement history.' },
      { title: 'Native WebSockets', text: 'Make protocol guarantees explicit.' },
    ],
    challenges:
      'Stale updates, uneven delivery, and duplicate presence need distinct recovery rules.',
    security: 'Messages have size and coordinate bounds. Resume tokens are not authentication.',
    result:
      'Public source includes protocol, interpolation, and reconnect tests. Try the local illustration below or open the linked deployment.',
    scope:
      'Single-process rooms. The portfolio demo is a local simulation, not a live multi-user session.',
  },
  {
    slug: 'cybershield',
    number: '04',
    title: 'CyberShield AI',
    category: 'CYBERSECURITY / MACHINE LEARNING',
    kind: 'security',
    summary:
      'Multiple threat signals, one explicit policy decision. An exploration of intelligent Zero Trust security.',
    repo: 'CyberShield-AI',
    stack: ['Python', 'FastAPI', 'Scikit-learn', 'WebSockets'],
    problem:
      'Email, network, behavior, and document signals describe different aspects of risk. A shared policy layer makes them actionable.',
    objectives: [
      'Combine complementary detectors.',
      'Explain the path from signal to decision.',
      'Present events through a dashboard.',
    ],
    flow: [
      'Input event',
      'Feature extraction',
      'Four detectors',
      'Risk aggregation',
      'Policy engine',
      'Dashboard',
    ],
    details: [
      'TF-IDF and logistic regression classify phishing.',
      'Isolation Forest and K-Means explore anomalies.',
      'Random Forest evaluates document structure.',
    ],
    decisions: [
      { title: 'Separate detection and policy', text: 'Model outputs feed explicit access rules.' },
      {
        title: 'Reproducible demonstration',
        text: 'Synthetic datasets and simulated events drive the prototype.',
      },
    ],
    challenges:
      'Synthetic examples demonstrate integration but cannot establish real-world detection quality.',
    security:
      'Untrusted document processing would need deployment isolation and further validation.',
    result:
      'Four model pipelines, weighted risk scoring, and a monitoring interface are documented.',
    scope: 'Educational prototype. No independently verified detection accuracy is claimed.',
  },
  {
    slug: 'wellify-ai',
    number: '05',
    title: 'Chronic Disease Prediction',
    category: 'CLOUD ENGINEERING / ML',
    kind: 'cloud',
    summary:
      'A serverless path from data ingestion to model inference, designed around AWS services.',
    repo: 'Chronic-Disease-Risk-Prediction',
    stack: ['AWS', 'Python', 'PySpark', 'SageMaker'],
    problem:
      'A model needs validated inputs, repeatable data preparation, and a serving path beyond its training notebook.',
    objectives: [
      'Connect ingestion to prediction.',
      'Prepare data for model training.',
      'Expose results through a simple interface.',
    ],
    flow: ['API Gateway', 'Lambda', 'DynamoDB', 'S3 / Parquet', 'Glue / PySpark', 'SageMaker'],
    details: [
      'Training and prediction notebooks are available.',
      'A Glue ETL script describes preprocessing.',
      'Lambda ZIP artifacts and HTML interfaces accompany sample output.',
    ],
    decisions: [
      {
        title: 'Separate stages',
        text: 'Ingestion, transformation, training, and serving have distinct responsibilities.',
      },
      { title: 'Columnar handoff', text: 'Parquet connects storage and processing.' },
    ],
    challenges: 'Source artifacts and an operating cloud deployment require different evidence.',
    security:
      'The intended architecture uses IAM and controlled access. The portfolio collects no health information.',
    result:
      'Notebooks, ETL code, Lambda artifacts, and frontend files are public. An operating AWS deployment is not verified.',
    scope: 'Documented architecture and educational source artifacts. Not clinically validated.',
  },
  {
    slug: 'haveloc-agent',
    number: '06',
    title: 'Haveloc Placement Agent',
    category: 'AUTOMATION / WORKFLOWS',
    kind: 'agent',
    summary:
      'Application workflows with verification at every consequential step. Preparation before authorization.',
    repo: 'Haveloc-Platform-Assistant-',
    stack: ['Python', 'FastAPI', 'Chrome Extension', 'SQLAlchemy'],
    problem:
      'Eligibility, deadlines, documents, and submission must be coordinated. A generated draft is not authorization to submit.',
    objectives: [
      'Validate eligibility and deadlines.',
      'Keep sessions in the local browser.',
      'Require verification and confirmation.',
    ],
    flow: [
      'Discover',
      'Check eligibility',
      'Prepare draft',
      'Verify fields',
      'Authorize',
      'Confirm receipt',
    ],
    details: [
      'A Manifest V3 extension handles browser interactions.',
      'Backend services separate eligibility, deadlines, and resume selection.',
      'Verification binds normalized answers to an integrity hash.',
    ],
    decisions: [
      { title: 'Confirmation over assumption', text: 'A receipt is required before completion.' },
      { title: 'Human verification', text: 'CAPTCHA challenges pause automation.' },
    ],
    challenges:
      'Stale fields and ambiguous responses need read-back validation and careful retry rules.',
    security:
      'Portal credentials remain in the browser. Single-use authorization is separate from drafting.',
    result: 'Extension source, backend services, lifecycle tests, and a mock portal are available.',
    scope: 'Mock-portal workflow. Successful external portal submissions are not claimed.',
  },
];
export const repositoryUrl = (project: Project) => `https://github.com/rdx644/${project.repo}`;
