type Link = {
  label: string;
  href: string;
};

type SkillGroup = {
  id: string;
  title: string;
  skills: readonly string[];
};

type Metric = {
  label: string;
  value: string;
};

type Project = {
  id: string;
  title: string;
  description: string;
  technologies: readonly string[];
  highlights: readonly string[];
  metrics?: readonly Metric[];
  links: readonly Link[];
  deploymentNote?: string;
};

type Experience = {
  role: string;
  department: string;
  company: string;
  location: string;
  period: string;
  work: {
    title: string;
    highlights: readonly string[];
    links: readonly Link[];
  };
};

type Education = {
  degree: string;
  institution: string;
  location: string;
  period: string;
  cgpa: string;
};

type Certification = {
  title: string;
  issuer?: string;
  year: number;
};

export const personal = {
  name: "Ajay Singh",
  initials: "AS",
  headline: "AI / ML Engineer | GenAI & Agentic Systems | Data Analytics",
  location: "Jabalpur, India",
  phone: "+91-7587939392",
  email: "ajaysingh1103as@gmail.com",
  linkedin: "https://www.linkedin.com/in/ajaysingh1103as/",
  github: "https://github.com/Ajaysingh1109",
  githubHandle: "Ajaysingh1109",
  portfolioRepository: "https://github.com/Ajaysingh1109/portfolio",
  portraitPath: "/profile.jpg",
  resumePath: "/Ajay-Singh-Resume.pdf",
  summary:
    "Computer Science graduate (2026) building LLM-powered assistants, multi-agent RAG workflows, applied machine-learning systems, and operational dashboards. Skilled in Python, FastAPI, React/TypeScript and AI integrations, with a focus on practical automation and measurable outputs.",
};

export const skillGroups: readonly SkillGroup[] = [
  {
    id: "languages",
    title: "Languages & Analytics",
    skills: ["Python", "SQL", "TypeScript", "JavaScript", "Pandas", "NumPy", "Excel", "Power BI"],
  },
  {
    id: "ai",
    title: "AI / Machine Learning",
    skills: ["Gemini API", "LangGraph", "LangChain", "RAG", "ChromaDB", "Pinecone", "scikit-learn", "Vosk"],
  },
  {
    id: "backend",
    title: "Backend & Databases",
    skills: ["FastAPI", "Flask", "REST APIs", "WebSockets", "SQLAlchemy", "SQLite", "PostgreSQL", "openpyxl"],
  },
  {
    id: "frontend",
    title: "Frontend & Developer Tools",
    skills: ["React", "React Native", "Electron", "Capacitor", "Three.js", "MediaPipe", "Streamlit", "Git", "Docker"],
  },
];

export const experience: Experience = {
  role: "Developer, Healthcare Operations",
  department: "Feedback Department",
  company: "Apollo Hospital",
  location: personal.location,
  period: "Sep – Dec 2026",
  work: {
    title: "Hospital Feedback Automation",
    highlights: [
      "Analyzed patient, attendant and staff feedback by department and issue status to identify recurring healthcare operational concerns.",
      "Developed AI-assisted multilingual feedback workflows and Excel/Power BI reports for complaint review, validation and operational insights.",
    ],
    links: [
      {
        label: "Hospital Feedback Automation on GitHub",
        href: "https://github.com/Ajaysingh1109/hospital-feedback-automation",
      },
      {
        label: "Hospital Feedback V2 on GitHub",
        href: "https://github.com/Ajaysingh1109/hospital-feedback-v2",
      },
    ],
  },
};

export const projects: readonly Project[] = [
  {
    id: "saarthi-one-v2",
    title: "SAARTHI-ONE V2",
    description: "Windows-first personal AI assistant",
    technologies: ["React", "TypeScript", "Electron", "FastAPI", "SQLite", "Capacitor", "Three.js", "MediaPipe", "Vosk"],
    highlights: [
      "Developed a Windows-first AI assistant with RAAM/SEETA voice personas, Hindi wake phrases, double-clap activation and review-before-send task-drafting workflows. Linked the Electron UI to FastAPI REST and WebSocket services.",
      "Added Android companion source and prototyped camera-based hand-gesture controls using MediaPipe and Three.js. Mobile and device flows and gesture features remain experimental.",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/Ajaysingh1109/saarthi-one-v2" },
      { label: "Web Demo", href: "https://saarthi-one-v2.vercel.app/" },
    ],
    deploymentNote: "The web demo showcases the browser frontend. The full Windows experience uses the local desktop app and its supporting services.",
  },
  {
    id: "saarthi-opsmind",
    title: "Saarthi OpsMind",
    description: "Multi-Agent RAG Assistant",
    technologies: ["LangGraph", "LangChain", "Gemini", "ChromaDB", "Pinecone", "SQLite", "FastAPI", "Streamlit"],
    highlights: [
      "Orchestrated supervisor, retrieval, SQL and web-research agents for document-grounded answers, ticket queries and multi-step task execution using Gemini embeddings, vector search and external APIs.",
      "Added read-only SQL safeguards, citation checks, conversation memory and run tracing.",
    ],
    metrics: [{ label: "Project benchmark task completions", value: "25/25" }],
    links: [
      { label: "GitHub", href: "https://github.com/Ajaysingh1109/saarthi-opsmind-agent" },
      { label: "Architecture Showcase", href: "https://saarthi-opsmind-agent-site.vercel.app/" },
    ],
    deploymentNote: "The deployed site presents the project architecture and workflows.",
  },
  {
    id: "customer-churn-prediction",
    title: "Customer Churn Prediction",
    description: "ML Web Application",
    technologies: ["Pandas", "NumPy", "scikit-learn", "Logistic Regression", "Joblib", "Flask"],
    highlights: [
      "Trained a churn-risk classifier with imputation, scaling, one-hot encoding and class-weighted Logistic Regression. Packaged preprocessing and the model in a reusable scikit-learn pipeline.",
      "Served prediction and model-metrics endpoints via Flask. The metrics shown are from the held-out test set.",
    ],
    metrics: [
      { label: "ROC-AUC", value: "84.15%" },
      { label: "Recall", value: "78.34%" },
      { label: "Accuracy", value: "73.81%" },
    ],
    links: [
      { label: "GitHub", href: "https://github.com/Ajaysingh1109/customer-churn-prediction" },
      { label: "Live App", href: "https://customer-churn-prediction-x7we.onrender.com" },
    ],
  },
];

export const education: Education = {
  degree: "B.Tech, Computer Science & Engineering",
  institution: "Shri Ram Institute of Science and Technology",
  location: "Jabalpur",
  period: "2022 – 2026",
  cgpa: "7.0/10",
};

export const certifications: readonly Certification[] = [
  { title: "Artificial Intelligence", issuer: "YHills", year: 2025 },
  { title: "Tata Data Analytics Job Simulation", issuer: "Forage", year: 2025 },
  { title: "Google Analytics", year: 2023 },
];
