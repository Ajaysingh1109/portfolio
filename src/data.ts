type Link = {
  label: string;
  href: string;
};

type SkillGroup = {
  id: string;
  title: string;
  color: string;
  description: string;
  skills: readonly string[];
};

type Metric = {
  label: string;
  value: string;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  problem: string;
  architecture: string;
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
    links: readonly (Link & { description: string })[];
  };
};

type Education = {
  program: string;
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
  brand: "SAARTHI - ONE",
  headline: "AI / ML Engineer | GenAI & Agentic Systems | Data Analytics",
  location: "Jabalpur, India",
  phone: "+91-7587939392",
  email: "ajaysingh1103as@gmail.com",
  linkedin: "https://www.linkedin.com/in/ajaysingh1103as/",
  github: "https://github.com/Ajaysingh1109",
  portfolioRepository: "https://github.com/Ajaysingh1109/portfolio",
  portraitPath: "/profile.jpg",
  resumePath: "/Ajay-Singh-Resume.pdf",
  summary:
    "I build LLM-powered assistants, multi-agent RAG workflows, applied machine-learning systems, and operational dashboards. I use Python, FastAPI, React/TypeScript and AI integrations for practical automation.",
};

export const training = {
  course: "Data Scientist course",
  focus: "Artificial Intelligence",
};

export const skillGroups: readonly SkillGroup[] = [
  {
    id: "python",
    title: "Python",
    color: "#f26e75",
    description: "Data analysis, automation and reporting.",
    skills: ["Python", "Pandas", "NumPy", "openpyxl", "Excel", "Power BI"],
  },
  {
    id: "sql",
    title: "SQL",
    color: "#ff9f56",
    description: "Structured data, relational queries and app persistence.",
    skills: ["SQL", "SQLite", "PostgreSQL", "SQLAlchemy"],
  },
  {
    id: "ml",
    title: "Machine Learning",
    color: "#f6d46d",
    description: "Preprocessing, classification and held-out model evaluation.",
    skills: ["scikit-learn", "Logistic Regression", "Joblib"],
  },
  {
    id: "genai",
    title: "Generative AI & RAG",
    color: "#75e6aa",
    description: "Multi-agent orchestration and document-grounded retrieval.",
    skills: ["Gemini API", "LangGraph", "LangChain", "RAG", "ChromaDB", "Pinecone"],
  },
  {
    id: "vision",
    title: "Computer Vision",
    color: "#70baff",
    description: "Experimental camera-based hand gestures and 3D interaction.",
    skills: ["MediaPipe", "Three.js"],
  },
  {
    id: "apps",
    title: "Backend & Apps",
    color: "#bba0ff",
    description: "APIs and interfaces for web, desktop and mobile.",
    skills: [
      "FastAPI", "Flask", "REST APIs", "WebSockets", "TypeScript", "JavaScript", "React", "React Native",
      "Electron", "Capacitor", "Streamlit", "Vosk", "Git", "Docker",
    ],
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
        description: "Mobile recording with an offline queue, AI-assisted complaint extraction, dashboard review and Excel export.",
      },
      {
        label: "Hospital Feedback V2 on GitHub",
        href: "https://github.com/Ajaysingh1109/hospital-feedback-v2",
        description: "An offline-first bedside web app with multilingual audio capture and a web dashboard for reviewing and reporting structured feedback.",
      },
    ],
  },
};

export const projects: readonly Project[] = [
  {
    id: "saarthi-one-v2",
    title: "SAARTHI-ONE V2",
    description: "Windows-first personal AI assistant",
    problem: "Bring voice interaction and reviewable task drafting into one Windows desktop workspace.",
    architecture: "A React and TypeScript interface runs in Electron and connects to FastAPI over REST and WebSockets. The project includes SQLite, Vosk and Capacitor companion source, with experimental MediaPipe and Three.js gesture controls.",
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
    problem: "Answer operational questions that require working across documents, ticket data and web research.",
    architecture: "A LangGraph supervisor coordinates retrieval, read-only SQL and web research. Gemini embeddings support vector search with ChromaDB or Pinecone. SQLite, FastAPI and Streamlit support the data, API and interface layers.",
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
    problem: "Estimate whether a telecom customer is likely to leave so retention teams can prioritize outreach.",
    architecture: "A scikit-learn pipeline combines imputation, scaling and one-hot encoding with class-weighted Logistic Regression. Joblib packages the fitted pipeline for Flask prediction and metrics endpoints.",
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
  program: "B.Tech studies in Computer Science & Engineering",
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
