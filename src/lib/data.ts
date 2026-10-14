export const profile = {
  name: "Pranshu Sharma",
  initials: "PS",
  role: "Software Engineer",
  jobTitle: "SAP Analyst",
  company: "Deloitte",
  tagline:
    "AI-enabled automation · Full-stack · End-to-end ownership",
  bio: "Software Engineer with hands-on experience building AI-enabled automation, data pipelines, validation workflows, APIs, dashboards, and business process solutions using Python, JavaScript, TypeScript, and Node.js. I develop LLM-powered applications and integrate AI components into multi-stage automation workflows — translating ambiguous requirements into reliable, production-ready solutions.",
  location: "India",
  availability: "Open to opportunities",
  email: "pranshusharmaabpl1@gmail.com",
  phone: "+91 9936404000",
  resumePath: "/Pranshu_Sharma_Resume.pdf",
  social: {
    github: "https://github.com/sheldor33",
    linkedin: "https://www.linkedin.com/in/pranshu-sharma33",
  },
  stats: [
    { label: "Experience", value: "1.5+ years" },
    { label: "Accuracy", value: "96%" },
    { label: "Effort Saved", value: "75%" },
    { label: "GPA", value: "8.68" },
  ],
  focus: [
    "Python",
    "TypeScript",
    "Node.js",
    "React",
    "LangChain",
    "LLMs",
    "Automation",
  ],
  stack: ["Python", "LangChain", "Claude", "Node.js", "React", "TypeScript"],
};

export const lookingFor = {
  status: "Open to opportunities",
  roles: [
    "Software Engineer",
    "Full-Stack Engineer",
    "Backend Engineer",
    "AI/ML Engineer",
    "Automation Engineer",
  ],
  interests: [
    "AI-enabled automation",
    "LLM applications & workflows",
    "Full-stack & backend systems",
    "Data pipelines & validation",
    "APIs & dashboards",
  ],
  preferred: ["Full-time", "Remote / Hybrid"],
};

export const experience = [
  {
    id: "deloitte-analyst",
    company: "Deloitte",
    role: "SAP Analyst",
    period: "Jan 2025 – Present",
    current: true,
    summary:
      "Designing Python automation pipelines and AI-powered workflows from scratch — integrating data extraction, validation, APIs, dashboards, and LLM stages for enterprise business processes.",
    highlights: [
      "Built multiple Python automation pipelines from scratch for enterprise business processes",
      "AI-powered workflows with LangChain and Claude across pipeline stages for efficiency and decision quality",
      "End-to-end solutions combining APIs, data-processing logic, automation, and interactive dashboards",
      "Dashboards and reporting interfaces for process health, validation results, defects, and remediation",
      "Test cases and automated validation checks — catching inconsistencies and edge cases before release",
      "Requirements gathering, technical specifications, and alignment with global stakeholders",
      "Root-cause troubleshooting of automation and data-processing issues to improve reliability",
    ],
    impact: [
      "LangChain + Claude AI pipeline integration",
      "End-to-end workflow ownership",
      "Reduced manual operational effort",
    ],
    tech: [
      "Python",
      "LangChain",
      "Claude",
      "REST APIs",
      "Tableau",
      "BDD",
      "Automation",
    ],
  },
  {
    id: "deloitte-intern",
    company: "Deloitte",
    role: "SAP Intern",
    period: "Jul 2024 – Jan 2025",
    current: false,
    summary:
      "Automated reporting and validation across SAP CRM, SPC, and CRT — building dashboards and data quality workflows.",
    highlights: [
      "Python automated reporting module integrating SAP CRM, SPC, and CRT data",
      "Automated data validation workflows to identify inconsistencies and defects",
      "Standardized dashboards and automated reporting for operational monitoring",
      "Translated operational requirements into technical solutions and test specifications",
      "Cross-team troubleshooting and validation of delivered solutions",
    ],
    impact: ["↓ 75% manual reporting effort", "↓ 30% reporting errors"],
    tech: ["Python", "SAP CRM", "SAP SPC", "SAP CRT", "Power BI", "Automation"],
  },
];

export const projects = [
  {
    id: "labgenie",
    title: "LabGenie",
    period: "Feb 2024",
    category: "AI / ML",
    featured: true,
    description:
      "Streamlit + LangChain app that turns medical lab PDFs into plain-language explanations — built for accuracy, consistency, and interpretability.",
    impact: [
      "96% prediction accuracy across diverse health inputs",
      "PDF ingest → chunking → keyword/definition layer for report Q&A",
      "Live demo for recruiters and interview walkthroughs",
    ],
    tech: ["Python", "Streamlit", "LangChain", "PyPDF2"],
    skills: ["python", "llm", "ml"],
    gradient: "from-cyan-500/20 to-emerald-500/20",
    github: "https://github.com/sheldor33/LabGenie",
    live: "https://labgenies.streamlit.app/",
    caseStudy: {
      problem:
        "Lab reports are dense and jargon-heavy. Patients and interviewers alike need plain-language definitions of markers without replacing clinical advice.",
      approach: [
        "Ingest PDF lab reports and extract text per page",
        "Tokenize and filter keywords against medical stopwords",
        "Use an LLM to define health-related terms, ranges, and balance tips",
        "Expose an interactive chat for follow-up questions on the report",
      ],
      decisions: [
        "Streamlit for fastest path to a live demo recruiters can click",
        "LangChain + OpenAI for definition quality with a clear secrets model",
        "Keep the pipeline explainable: keywords first, then LLM synthesis",
      ],
      challenges: [
        "Cloud Python version / dependency wheels (Pillow) on Streamlit Community Cloud",
        "Graceful handling of missing API quota so demos fail cleanly",
        "Avoiding over-claim: educational explanations, not diagnosis",
      ],
      results: [
        "Live public demo used in interview walkthroughs",
        "~96% accuracy on curated health-term prediction checks",
        "Reusable pattern for PDF → keywords → LLM Q&A apps",
      ],
    },
  },
  {
    id: "buildyourpassword",
    title: "BuildYourPassword",
    period: "May 2024",
    category: "AI / ML",
    featured: false,
    description:
      "Flask password-strength app combining rule scoring, breach detection, and four scikit-learn classifiers with exported joblib models.",
    impact: [
      "4 ML models compared — DT, Logistic Regression, Naive Bayes, Neural Net",
      "Rule engine + exposure checks + ML scoring in one pipeline",
      "Interview-ready model artifacts and evaluation notebooks",
    ],
    tech: ["Python", "Flask", "Scikit-learn", "Joblib"],
    skills: ["python", "ml", "dsa"],
    gradient: "from-violet-500/20 to-fuchsia-500/20",
    github: "https://github.com/sheldor33/BuildYourPassword",
    caseStudy: {
      problem:
        "Password strength UX usually stops at simple rules. Recruiters and users benefit from a system that combines heuristics, breach signals, and trained classifiers.",
      approach: [
        "Rule-based scoring for length, complexity, and common patterns",
        "Optional breach / exposure checks via external API",
        "Train and compare four classic ML classifiers on labeled features",
        "Export models with joblib for reproducible inference demos",
      ],
      decisions: [
        "Flask for a thin API + UI suitable for ML model serving demos",
        "Keep multiple models side-by-side to discuss tradeoffs in interviews",
        "Separate notebooks for evaluation from the serving path",
      ],
      challenges: [
        "Balancing latency vs model ensemble size for interactive use",
        "Hardened secrets handling before any public deploy",
        "Serverful Python (gunicorn + sklearn) needs a host beyond Vercel",
      ],
      results: [
        "Clear comparison story across four model families",
        "End-to-end pipeline from features → train → serve",
        "Strong talking points for ML + backend interviews",
      ],
    },
  },
  {
    id: "leafy-delight",
    title: "Leafy Delight",
    period: "May 2023",
    category: "Full-Stack",
    featured: true,
    description:
      "Full-stack salad commerce app — product catalog, cart, orders, and PayPal checkout on Next.js with Redux and MongoDB.",
    impact: [
      "End-to-end storefront: catalog → cart → order persistence",
      "PayPal checkout + admin/product flows",
      "Deployed storefront for live walkthroughs",
    ],
    tech: ["Next.js", "React", "Redux", "MongoDB", "PayPal"],
    skills: ["react", "nodejs", "javascript"],
    gradient: "from-lime-500/20 to-emerald-500/20",
    github: "https://github.com/sheldor33/Leafy-Delight",
    live: "https://leafy-delight-topaz.vercel.app",
    caseStudy: {
      problem:
        "Demonstrate full-stack ownership of a commerce flow: browse → cart → checkout → persisted orders, not a static marketing page.",
      approach: [
        "Next.js storefront with product catalog and cart state (Redux)",
        "MongoDB for products and order persistence",
        "PayPal integration for checkout handoff",
        "Admin/product flows for managing catalog data",
      ],
      decisions: [
        "Redux for predictable cart/order state across pages",
        "PayPal sandbox-friendly checkout for safe public demos",
        "Deploy on Vercel with Atlas as the database",
      ],
      challenges: [
        "Keeping checkout env vars and DB credentials out of the client",
        "Handling cart persistence across refreshes",
        "Clear demo vs production payment posture on Hobby hosting",
      ],
      results: [
        "Live storefront URL for recruiter click-throughs",
        "End-to-end narrative from UI to payments to persistence",
        "Reusable full-stack template for commerce demos",
      ],
    },
  },
  {
    id: "cross-system-pipeline",
    title: "Cross-System Data Pipeline",
    period: "Jan 2025 – Present",
    category: "Automation",
    featured: false,
    description:
      "Automated Python pipelines orchestrating data flow between enterprise systems — extraction, transformation, validation, and AI-enabled processing stages.",
    impact: [
      "SAP CRM, SPC & CRT data integrated into unified downstream flows",
      "↓ 75% reduction in manual data transfer and reporting effort",
      "LangChain + Claude stages for intelligent decision support in pipeline",
    ],
    tech: ["Python", "SAP", "REST APIs", "LangChain", "Automation"],
    skills: ["python", "automation", "llm"],
    gradient: "from-emerald-500/20 to-teal-500/20",
    caseStudy: {
      problem:
        "Enterprise teams moved data between systems manually — slow, error-prone, and hard to audit when business processes span SAP and related tools.",
      approach: [
        "Design Python pipelines for extract → transform → validate → load",
        "Integrate multiple enterprise sources into unified downstream flows",
        "Add AI-assisted stages (LangChain + Claude) for decision support",
        "Instrument validation and remediation feedback for operators",
      ],
      decisions: [
        "Own the workflow end-to-end rather than one-off scripts",
        "Prefer validation gates before downstream writes",
        "Use LLMs where judgment helps; keep deterministic checks for compliance-critical fields",
      ],
      challenges: [
        "Ambiguous stakeholder requirements across global teams",
        "Edge cases in source data quality and schema drift",
        "Balancing automation speed with auditability (details stay internal)",
      ],
      results: [
        "~75% less manual transfer/reporting effort on targeted processes",
        "Measurable drop in reporting inconsistencies",
        "Reusable automation patterns for similar enterprise flows",
      ],
    },
  },
  {
    id: "ops-dashboard",
    title: "Business Operations Dashboard",
    period: "Jul 2024 – Present",
    category: "Frontend",
    featured: false,
    description:
      "Interactive reporting dashboards for business stakeholders — monitoring process health, validation results, defects, and remediation progress across enterprise operations.",
    impact: [
      "Real-time visibility for global business & compliance teams",
      "React + Tableau/Power BI interfaces replacing manual report distribution",
      "Drill-down views designed for non-technical decision makers",
    ],
    tech: ["React", "TypeScript", "Tableau", "Power BI", "Python"],
    skills: ["react", "typescript", "python"],
    gradient: "from-blue-500/20 to-indigo-500/20",
    caseStudy: {
      problem:
        "Stakeholders depended on static spreadsheets and emailed reports. They needed live visibility into process health, defects, and remediation without engineering gatekeeping.",
      approach: [
        "Build interactive views for process health and validation outcomes",
        "Combine React surfaces with Tableau / Power BI where analysts live",
        "Surface drill-downs for non-technical decision makers",
        "Align metrics with the upstream automation and validation pipelines",
      ],
      decisions: [
        "Meet users in their BI tools while owning custom React views where needed",
        "Prioritize clarity over chart density for compliance audiences",
        "Tie dashboard KPIs to pipeline outputs so numbers stay trustworthy",
      ],
      challenges: [
        "Different audiences need different grain of detail",
        "Keeping definitions of 'defect' and 'remediation' consistent",
        "Enterprise access constraints — public repo not available",
      ],
      results: [
        "Faster stakeholder decisions without waiting on manual report packs",
        "Shared operational picture across global teams",
        "Strong interview story for frontend + analytics ownership",
      ],
    },
  },
];

export type Project = (typeof projects)[number];

export function getProject(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}

export function getProjectIds(): string[] {
  return projects.map((p) => p.id);
}

export const skillCategories = [
  {
    title: "Languages",
    items: ["Python", "JavaScript", "TypeScript", "C++", "SQL"],
  },
  {
    title: "Full-Stack Development",
    items: [
      "Node.js",
      "React",
      "REST APIs",
      "API Integration",
      "Backend Development",
      "Data Processing",
      "Web Applications",
    ],
  },
  {
    title: "AI / LLM",
    items: [
      "LLM Applications",
      "Generative AI",
      "LangChain",
      "RAG",
      "Prompt Engineering",
      "AI Workflow Design",
      "Machine Learning",
      "Scikit-learn",
      "Neural Networks",
      "Model Evaluation",
    ],
  },
  {
    title: "Automation & Data",
    items: [
      "Python Automation",
      "Data Pipelines",
      "Data Validation",
      "Process Automation",
      "Test Automation",
      "API Testing",
      "BDD (behave)",
      "Debugging",
      "Defect Analysis",
    ],
  },
  {
    title: "Frontend / Analytics",
    items: [
      "React",
      "JavaScript",
      "TypeScript",
      "Tableau",
      "Power BI",
      "Pandas",
      "NumPy",
      "Matplotlib",
    ],
  },
  {
    title: "Engineering Tools",
    items: [
      "Linux",
      "Git",
      "GitHub",
      "Jupyter",
      "VS Code",
      "CI/CD Fundamentals",
      "Tornado",
    ],
  },
];

export const skills = [
  {
    id: "python",
    name: "Python",
    level: "Production",
    category: "Language",
    color: "#3776ab",
    description: "Automation pipelines, APIs, ML, enterprise workflows",
  },
  {
    id: "javascript",
    name: "JavaScript",
    level: "Strong",
    category: "Language",
    color: "#f7df1e",
    description: "Full-stack scripting, API layers, web apps",
  },
  {
    id: "typescript",
    name: "TypeScript",
    level: "Strong",
    category: "Language",
    color: "#3178c6",
    description: "Type-safe APIs, React apps, this portfolio",
  },
  {
    id: "cpp",
    name: "C++",
    level: "Strong",
    category: "Language",
    color: "#00599c",
    description: "DSA, OOP, performance-oriented problem solving",
  },
  {
    id: "sql",
    name: "SQL",
    level: "Strong",
    category: "Language",
    color: "#f59e0b",
    description: "Data validation, queries, analytics",
  },
  {
    id: "node",
    name: "Node.js",
    level: "Strong",
    category: "Full-Stack",
    color: "#68a063",
    description: "Backend services, REST APIs, data processing",
  },
  {
    id: "react",
    name: "React",
    level: "Strong",
    category: "Full-Stack",
    color: "#61dafb",
    description: "Dashboards, reporting interfaces, web apps",
  },
  {
    id: "rest",
    name: "REST APIs",
    level: "Production",
    category: "Full-Stack",
    color: "#10b981",
    description: "API design, integration, backend endpoints",
  },
  {
    id: "langchain",
    name: "LangChain",
    level: "Production",
    category: "AI / LLM",
    color: "#22d3ee",
    description: "Claude integration, multi-stage AI workflows",
  },
  {
    id: "llm",
    name: "LLM Applications",
    level: "Production",
    category: "AI / LLM",
    color: "#06b6d4",
    description: "Generative AI, prompt engineering, LabGenie",
  },
  {
    id: "rag",
    name: "RAG",
    level: "Strong",
    category: "AI / LLM",
    color: "#0891b2",
    description: "Retrieval-augmented generation pipelines",
  },
  {
    id: "ml",
    name: "Machine Learning",
    level: "Strong",
    category: "AI / LLM",
    color: "#a855f7",
    description: "Classification, model evaluation, Scikit-learn",
  },
  {
    id: "sklearn",
    name: "Scikit-learn",
    level: "Strong",
    category: "AI / LLM",
    color: "#f97316",
    description: "DT, Logistic Regression, Naive Bayes, Neural Nets",
  },
  {
    id: "neural",
    name: "Neural Networks",
    level: "Strong",
    category: "AI / LLM",
    color: "#ec4899",
    description: "Deep learning, Coursera certified",
  },
  {
    id: "automation",
    name: "Python Automation",
    level: "Production",
    category: "Automation",
    color: "#10b981",
    description: "Enterprise pipelines, process automation",
  },
  {
    id: "pipelines",
    name: "Data Pipelines",
    level: "Production",
    category: "Automation",
    color: "#14b8a6",
    description: "Extraction, validation, reporting workflows",
  },
  {
    id: "bdd",
    name: "BDD (behave)",
    level: "Strong",
    category: "Automation",
    color: "#84cc16",
    description: "Test automation, behavior-driven testing",
  },
  {
    id: "testing",
    name: "API Testing",
    level: "Strong",
    category: "Automation",
    color: "#eab308",
    description: "Validation, edge cases, defect analysis",
  },
  {
    id: "pandas",
    name: "Pandas",
    level: "Strong",
    category: "Analytics",
    color: "#150458",
    description: "Data processing, analysis, transformation",
  },
  {
    id: "numpy",
    name: "NumPy",
    level: "Strong",
    category: "Analytics",
    color: "#4dabcf",
    description: "Numerical computing, ML prep",
  },
  {
    id: "tableau",
    name: "Tableau",
    level: "Strong",
    category: "Analytics",
    color: "#e97627",
    description: "Dashboards, stakeholder reporting",
  },
  {
    id: "powerbi",
    name: "Power BI",
    level: "Strong",
    category: "Analytics",
    color: "#f2c811",
    description: "Operational monitoring, business analytics",
  },
  {
    id: "matplotlib",
    name: "Matplotlib",
    level: "Comfortable",
    category: "Analytics",
    color: "#11557c",
    description: "Data visualization, model output charts",
  },
  {
    id: "linux",
    name: "Linux",
    level: "Strong",
    category: "Tools",
    color: "#fcc624",
    description: "Development environment, deployment",
  },
  {
    id: "git",
    name: "Git & GitHub",
    level: "Production",
    category: "Tools",
    color: "#f05032",
    description: "Version control, collaboration",
  },
  {
    id: "jupyter",
    name: "Jupyter",
    level: "Strong",
    category: "Tools",
    color: "#f37626",
    description: "ML experiments, data exploration",
  },
  {
    id: "cicd",
    name: "CI/CD",
    level: "Building",
    category: "Tools",
    color: "#6366f1",
    description: "Pipeline fundamentals, release readiness",
  },
  {
    id: "tornado",
    name: "Tornado",
    level: "Comfortable",
    category: "Tools",
    color: "#00d4aa",
    description: "Python async web framework",
  },
  {
    id: "dsa",
    name: "DSA",
    level: "Strong",
    category: "Core",
    color: "#ef4444",
    description: "Algorithms, structures, complexity analysis",
  },
  {
    id: "oop",
    name: "OOP",
    level: "Strong",
    category: "Core",
    color: "#8b5cf6",
    description: "Object-oriented design, clean architecture",
  },
];

export const education = {
  school: "Kalinga Institute of Industrial Technology",
  location: "Bhubaneswar",
  degree: "Bachelor of Technology in Computer Science and Engineering",
  period: "Oct 2020 – Jul 2024",
  gpa: "8.68",
};

export const certifications = [
  {
    title: "Neural Networks and Deep Learning",
    issuer: "Coursera",
  },
  {
    title: "Introduction to Networks",
    issuer: "Cisco Networking Academy",
  },
  {
    title: "Cybersecurity Essentials",
    issuer: "Cisco Networking Academy",
  },
];

export const publication = {
  title:
    "Comparative Analysis of Breast Cancer Diagnosis using Smart IoT-based Approach",
  venue: "IEEE Publication",
  year: "2023",
  url: "https://ieeexplore.ieee.org/document/10158450",
};

export const whyHireMe = [
  {
    icon: "engineering",
    title: "Full-Stack Engineering",
    text: "Python, Node.js, React, and TypeScript — building APIs, dashboards, data pipelines, and web interfaces end-to-end.",
  },
  {
    icon: "brain",
    title: "AI & LLM Integration",
    text: "LangChain + Claude in production workflows; LabGenie LLM app at 96% accuracy; ML classifiers in BuildYourPassword.",
  },
  {
    icon: "rocket",
    title: "End-to-End Ownership",
    text: "From ambiguous requirements to deployed automation — pipelines, validation, testing, dashboards, and troubleshooting.",
  },
  {
    icon: "chart",
    title: "Measurable Impact",
    text: "75% manual effort reduction, 30% fewer reporting errors, 96% prediction accuracy — backed by data, not claims.",
  },
];

export const impactMarquee = [
  "96% LLM Accuracy",
  "75% Effort Reduced",
  "30% Fewer Errors",
  "LangChain + Claude",
  "Python Pipelines",
  "REST APIs",
  "IEEE Published",
  "Neural Networks",
  "BDD Test Automation",
  "Node.js · React",
  "End-to-End Ownership",
];

export const roleTracks = [
  {
    id: "backend",
    label: "Backend",
    title: "Backend & Platform Engineer",
    tagline: "APIs · Pipelines · Automation · Reliability",
    color: "#68a063",
    headline: "I build backend systems that process, validate, and ship data reliably.",
    proof: [
      "Python automation pipelines from scratch at Deloitte — extraction, validation, reporting",
      "REST APIs + data-processing logic integrated into multi-stage workflows",
      "Automated validation catching edge cases and defects before release",
      "Node.js & TypeScript for full-stack backend and API layers",
    ],
    metrics: ["75% manual effort ↓", "30% errors ↓", "1.5+ yrs production"],
    projects: [
      "Deloitte Automation Pipelines",
      "Leafy Delight",
      "SAP Validation Module",
    ],
    tech: ["Python", "Node.js", "REST APIs", "SQL", "BDD", "Linux"],
  },
  {
    id: "ai",
    label: "AI / LLM",
    title: "AI Implementation Engineer",
    tagline: "LLMs · LangChain · ML · Production AI Workflows",
    color: "#22d3ee",
    headline: "I integrate AI into real workflows — not demos that never ship.",
    proof: [
      "LangChain + Claude integrated across enterprise pipeline stages at Deloitte",
      "LabGenie: LLM health-report analyzer with 96% prediction accuracy",
      "BuildYourPassword: 4 ML models compared — DT, Logistic Regression, Naive Bayes, Neural Net",
      "RAG, prompt engineering, and AI workflow design in production contexts",
    ],
    metrics: ["96% accuracy", "4 ML models", "IEEE published"],
    projects: ["LabGenie", "BuildYourPassword", "Deloitte AI Workflows"],
    tech: ["LangChain", "Claude", "Python", "Scikit-learn", "RAG", "LLMs"],
  },
  {
    id: "dsa",
    label: "DSA",
    title: "Problem Solver & Algorithm Engineer",
    tagline: "Data Structures · Algorithms · C++ · Rigorous Testing",
    color: "#a855f7",
    headline: "I approach problems with structure — design, implement, test, optimize.",
    proof: [
      "C++ & Python foundation with CS degree (GPA 8.68) from KIIT",
      "Edge-case driven test design across automation, ML, and LLM projects",
      "BuildYourPassword: rule engines + ML classifiers with systematic evaluation",
      "Root-cause debugging and defect analysis in production workflows",
    ],
    metrics: ["GPA 8.68", "B.Tech CSE", "Edge-case testing"],
    projects: ["BuildYourPassword", "Automation Test Suites"],
    tech: ["C++", "Python", "DSA", "OOP", "System Design", "Debugging"],
  },
];
