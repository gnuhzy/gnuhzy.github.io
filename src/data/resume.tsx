import { Icons } from "@/components/icons";
import { BriefcaseBusiness, Code2, HomeIcon } from "lucide-react";

export const DATA = {
  name: "Zhenyu “Gary” Huang",
  preferredName: "Gary",
  initials: "GH",
  url: "https://gnuhzy.github.io",
  location: "Pittsburgh, PA",
  locationLink: "https://www.google.com/maps/place/Pittsburgh,+PA",
  description:
    "Software Engineer focused on AI systems, ML infrastructure, and reliable LLM products. MISM-BIDA @ Carnegie Mellon · Graduating Dec 2027 · Seeking Summer 2027 internships.",
  summary:
    "I build performance-sensitive AI systems and production-style LLM features, from **FP32 CSR SpMV kernels on Ascend 910B3** to multi-agent retrieval and evaluation workflows. My work sits at the intersection of systems, machine learning, and data-intensive software, with an emphasis on measurable performance and reliable behavior.",
  avatarUrl: "https://avatars.githubusercontent.com/u/53935456?v=4",
  resumeUrl: "",
  linkedinUrl: "",
  highlights: [
    {
      value: "2.09×",
      label: "SpMV speedup",
      detail: "Across 58 real LP/MPS matrices",
    },
    {
      value: "+32%",
      label: "Evaluation improvement",
      detail: "Multi-agent GraphRAG planner",
    },
    {
      value: "32",
      label: "Files changed",
      detail: "Two end-to-end Zulip LLM features",
    },
  ],
  skills: [
    "Python",
    "C++",
    "SQL",
    "TypeScript",
    "Django",
    "FastAPI",
    "Vue",
    "LLM Agents",
    "GraphRAG",
    "Neo4j",
    "Docker",
    "Linux",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/#work", icon: BriefcaseBusiness, label: "Experience" },
    { href: "/#projects", icon: Code2, label: "Projects" },
  ],
  contact: {
    email: "garyhuang671@gmail.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/gnuhzy",
        icon: Icons.github,
        navbar: true,
      },
      email: {
        name: "Email",
        url: "mailto:garyhuang671@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },
  work: [
    {
      company: "Shenzhen Research Institute of Big Data",
      href: "",
      initials: "SR",
      location: "Shenzhen, China",
      title: "AI Systems Research & Engineering Intern",
      logoUrl: "",
      start: "May 2026",
      end: "Aug 2026",
      description: [
        "Built an adaptive FP32 CSR SpMV operator for Ascend 910B3, reducing geometric-mean latency across 58 real matrices from 3,489.62 μs to 1,671.69 μs (2.09×).",
        "Built an LLM-driven AutoResearch loop for hypothesis generation, code modification, benchmarking, profiling, adversarial testing, and version governance.",
      ],
    },
    {
      company: "Orient Securities",
      href: "",
      initials: "OS",
      location: "Shanghai, China",
      title: "Quantitative Strategy Research Assistant",
      logoUrl: "",
      start: "Jul 2024",
      end: "Aug 2024",
      description: [
        "Migrated a large-cap/small-cap rotation strategy from AlgoQI to RQData and replaced looped data requests with batched, vectorized pipelines.",
        "Reproduced a multi-factor government-bond futures strategy; saved notebook results recorded 6.5% annualized return, 3.0% maximum drawdown, and a 2.058 Sharpe ratio.",
      ],
    },
    {
      company: "Ping An Bank",
      href: "",
      initials: "PA",
      location: "Shenzhen, China",
      title: "Data Engineering Intern",
      logoUrl: "",
      start: "Jul 2023",
      end: "Aug 2023",
      description: [
        "Used Hive SQL to clean, standardize, and load multi-source data for an internal enterprise knowledge graph.",
        "Supported entity–relationship modeling and data-quality validation across customers, accounts, transactions, and other business objects.",
      ],
    },
  ],
  projects: [
    {
      title: "Zulip LLM Product Features",
      href: "https://youtu.be/LWTSaEBxtBI",
      dates: "Aug 2026 – Sep 2026",
      description:
        "Built two end-to-end LLM features in the mature Zulip codebase, modifying **32 files** across APIs, workers, event schemas, caching, frontend interactions, and tests. Added long-context summarization, validated citations, asynchronous jobs, authorization checks, quotas, and prompt-injection defenses.",
      technologies: [
        "Python",
        "Django",
        "TypeScript",
        "LLM APIs",
        "Worker Queues",
        "Memcached",
      ],
      links: [
        {
          type: "Recap Demo",
          href: "https://youtu.be/LWTSaEBxtBI",
          icon: <Icons.youtube className="size-3" />,
        },
        {
          type: "Title Demo",
          href: "https://youtu.be/cgr-1SM_GQ4",
          icon: <Icons.youtube className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Narrative Planner",
      href: "https://github.com/gnuhzy/Narrative-Planner",
      dates: "Dec 2025 – May 2026",
      description:
        "Led a multi-agent GraphRAG planner for memoir interviews, combining Neo4j, FAISS, structured extraction, topic ranking, simulated users, and LLM-as-a-Judge. Offline simulation improved the overall evaluation score from **0.358 to 0.473 (+32%)**.",
      technologies: [
        "Python",
        "Multi-agent Systems",
        "GraphRAG",
        "Neo4j",
        "FAISS",
        "LLM Evaluation",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/gnuhzy/Narrative-Planner",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "PawTrack",
      href: "https://github.com/gnuhzy/pet-database",
      dates: "Feb 2026 – Apr 2026",
      description:
        "Led a full-stack pet adoption management system with ten core entities, 12 reviewed operational queries, analytics, and natural-language querying. Built a constrained Text-to-SQL gateway with read-only connections, SQL validation, SQLite Authorizer, and result limits.",
      technologies: [
        "Python",
        "FastAPI",
        "Vue",
        "SQLite",
        "Text-to-SQL",
        "Tool Calling",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/gnuhzy/pet-database",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
  education: [
    {
      school: "Carnegie Mellon University",
      href: "https://www.cmu.edu/",
      initials: "CMU",
      degree: "MISM — Business Intelligence & Data Analytics · Expected Dec 2027",
      logoUrl: "",
      start: "Aug 2026",
      end: "Dec 2027",
    },
    {
      school: "The Chinese University of Hong Kong, Shenzhen",
      href: "https://www.cuhk.edu.cn/en",
      initials: "CUHK",
      degree: "B.S. in Statistics · GPA 3.43/4.00",
      logoUrl: "",
      start: "Sep 2022",
      end: "Jun 2026",
    },
    {
      school: "University of California, Berkeley",
      href: "https://www.berkeley.edu/",
      initials: "UCB",
      degree: "Berkeley Global Access Program · Exchange Student",
      logoUrl: "",
      start: "Aug 2024",
      end: "Dec 2024",
    },
  ],
  awards: [
    "Second Prize, National Olympiad in Informatics in Provinces — Zhejiang Division (2019)",
    "Bowen Scholarship (2022–2023)",
  ],
} as const;
