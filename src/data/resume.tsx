import { Icons } from "@/components/icons";
import { BriefcaseBusiness, Code2, HomeIcon } from "lucide-react";

export const DATA = {
  name: "Zhenyu(Gary) Huang",
  preferredName: "Gary",
  initials: "GH",
  url: "https://gnuhzy.github.io",
  location: "Pittsburgh, PA",
  locationLink: "https://www.google.com/maps/place/Pittsburgh,+PA",
  description:
    "Software Engineer focused on AI systems, ML infrastructure, and reliable LLM products. MISM-BIDA @ Carnegie Mellon · Graduating Dec 2027 · Seeking Summer 2027 internships.",
  summary:
    "I build software that turns AI capabilities into reliable workflows. My work spans **agent-driven performance optimization**, **LLM features in existing applications**, and **data-backed agent systems**. I connect implementation with automated testing, evaluation, and profiling so that improvements are measurable and model outputs stay within clear permission boundaries.",
  avatarUrl: "/gary-huang.jpg",
  resumeUrl: "",
  linkedinUrl: "https://www.linkedin.com/in/zhenyu-huang-0a06a7404/",
  highlights: [
    {
      value: "2.09×",
      label: "Agent-driven kernel optimization",
      detail: "21 promoted versions, 58 failed or non-promoted attempts, and 78 recorded lessons. Achieved 2.09× geometric-mean speedup across 58 matrices on the repeated compute path, excluding host preparation.",
    },
    {
      value: "+32%",
      label: "Better interview planning",
      detail: "A multi-agent GraphRAG planner improved the offline simulation score from 0.358 to 0.473, using simulated interviewees and automated evaluation.",
    },
    {
      value: "User-controlled AI",
      label: "Reliable LLM integration",
      detail: "Zulip recaps with validated message citations and topic-title suggestions that require user approval. Background workers, permission checks, and caching keep inference outside message sending.",
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
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/zhenyu-huang-0a06a7404/",
        icon: Icons.linkedin,
        navbar: true,
      },
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
      href: "https://www.sribd.cn/",
      initials: "SR",
      location: "Shenzhen, China",
      title: "AI Systems Research & Engineering Intern",
      logoUrl: "/logos/sribd.png",
      start: "May 2026",
      end: "Aug 2026",
      description: [
        "Built an agent workflow for kernel optimization, connecting hypotheses, code changes, correctness checks, benchmarking, profiling, and knowledge feedback. Tracked 21 promoted versions, 58 failed or non-promoted attempts, and 78 version lessons.",
        "Reduced geometric-mean kernel runtime from 3,489.62 μs to 1,671.69 μs (2.09×) on a 58-matrix benchmark of the repeated compute path, excluding host preparation; 49 cases improved, eight regressed, and one was neutral.",
        "Generalized the process into OpFlow with nine role-specific permission sets, isolated worktrees, frozen evaluation gates, and a deterministic judge. An independent accuracy runner checked five representative versions across 58 matrices and 15 repeatability stress scenarios.",
      ],
    },
    {
      company: "Orient Securities",
      href: "https://www.dfzq.com.cn/",
      initials: "OS",
      location: "Shanghai, China",
      title: "Quantitative Strategy Research Assistant",
      logoUrl: "/logos/orient-securities.png",
      start: "Jul 2024",
      end: "Aug 2024",
      description: [
        "Migrated a large-cap/small-cap rotation strategy from AlgoQI to RQData and replaced looped data requests with batched, vectorized pipelines.",
        "Reproduced a multi-factor government-bond futures strategy; saved notebook results recorded 6.5% annualized return, 3.0% maximum drawdown, and a 2.058 Sharpe ratio.",
      ],
    },
    {
      company: "Ping An Bank",
      href: "https://bank.pingan.com/",
      initials: "PA",
      location: "Shenzhen, China",
      title: "Data Engineering Intern",
      logoUrl: "/logos/ping-an-bank.svg",
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
        "Independently implemented **Unread Message Recap** and **Topic Title Improver** in Zulip as a CMU course project. Built batched and hierarchical summarization, server-validated citations, background workers, and content-hash caching. Rechecked permissions in APIs and workers, handled duplicate jobs and stale results, and required user approval before renaming topics. Added Python and TypeScript tests for failure paths, access control, and asynchronous behavior.",
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
      logoUrl: "/cmu-logo.png",
      start: "Aug 2026",
      end: "Dec 2027",
    },
    {
      school: "The Chinese University of Hong Kong, Shenzhen",
      href: "https://www.cuhk.edu.cn/en",
      initials: "CUHK",
      degree: "B.S. in Statistics",
      logoUrl: "/logos/cuhk-shenzhen.png",
      start: "Sep 2022",
      end: "Jun 2026",
    },
    {
      school: "University of California, Berkeley",
      href: "https://www.berkeley.edu/",
      initials: "UCB",
      degree: "Berkeley Global Access Program · Exchange Student",
      logoUrl: "/logos/berkeley.svg",
      start: "Aug 2024",
      end: "Dec 2024",
    },
  ],
  awards: [
    "Second Prize, National Olympiad in Informatics in Provinces — Zhejiang Division (2019)",
    "Bowen Scholarship (2022–2023)",
  ],
} as const;
