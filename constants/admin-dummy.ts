import { Job, Industry, Service, StaffMember, RolePermissions, ContactQuery, SystemSettings, Project } from "@/features/admin/types";

export const INITIAL_JOBS: Job[] = [
  {
    id: "job-1",
    title: "Senior Full Stack Engineer (Next.js & NestJS)",
    department: "Engineering",
    location: "San Francisco, CA",
    locationType: "Hybrid",
    type: "Full-time",
    salaryRange: "$130,000 - $160,000",
    description: "We are looking for a Senior Full Stack Engineer to lead development on our core web applications using Next.js and NestJS. You will be responsible for defining technical layouts, optimizing load times, and ensuring high security standards.",
    requirements: [
      "5+ years of experience with React/Next.js and Node.js/NestJS",
      "Strong understanding of database design (Prisma, PostgreSQL)",
      "Experience setting up CI/CD pipelines and Docker containers",
      "Excellent communication and collaboration skills"
    ],
    benefits: [
      "Competitive salary and equity packages",
      "Flexible hybrid working options",
      "Premium health, dental, and vision coverages",
      "Learning and development stipend of $2,00,000/year"
    ],
    status: "Active",
    createdAt: "2026-05-10T10:00:00Z"
  },
  {
    id: "job-2",
    title: "AI & Machine Learning Engineer",
    department: "AI Research",
    location: "Remote (US/Europe)",
    locationType: "Remote",
    type: "Full-time",
    salaryRange: "$140,000 - $180,000",
    description: "Help build the next generation of generative AI products and integrations. You will work on fine-tuning large language models, developing agent architectures, and integrating models into production web applications.",
    requirements: [
      "Deep understanding of Transformer models, LLM architectures, and RAG pipelines",
      "Python mastery, experience with PyTorch, LangChain, or LlamaIndex",
      "Experience deploying AI models to cloud platforms (AWS, GCP)",
      "MS or PhD in Computer Science, Mathematics, or related field is a plus"
    ],
    benefits: [
      "Work from anywhere in the world",
      "Unlimited PTO",
      "Latest Apple equipment budget",
      "Annual company retreats"
    ],
    status: "Active",
    createdAt: "2026-06-01T09:30:00Z"
  },
  {
    id: "job-3",
    title: "Junior Backend Developer",
    department: "Engineering",
    location: "Noida, India",
    locationType: "Onsite",
    type: "Full-time",
    salaryRange: "₹8,00,000 - ₹12,00,000",
    description: "Join our backend engineering team to help maintain and scale API microservices. You will work closely with senior engineers to design RESTful endpoints, improve query optimization, and write automated tests.",
    requirements: [
      "1-3 years of backend development experience with TypeScript or Go",
      "Familiarity with SQL and NoSQL databases",
      "Basic understanding of Git and containerization",
      "Proactive attitude and eager to learn"
    ],
    benefits: [
      "Mentorship from senior engineers",
      "Free catered daily lunch",
      "Comprehensive health insurance",
      "Performance-based bonuses"
    ],
    status: "Draft",
    createdAt: "2026-06-10T14:00:00Z"
  }
];

export const INITIAL_INDUSTRIES: Industry[] = [
  {
    id: "ind-1",
    name: "Fintech & Digital Banking",
    slug: "fintech-digital-banking",
    description: "High-security banking solutions, payment gateways, ledger systems, and automated reconciliation software compliant with PCI-DSS.",
    icon: "CreditCard",
    status: "Active",
    createdAt: "2026-01-15T08:00:00Z"
  },
  {
    id: "ind-2",
    name: "Healthcare & Medtech",
    slug: "healthcare-medtech",
    description: "Secure, HIPAA-compliant patient management portals, electronic health records integrations, and telemedicine appointment schedules.",
    icon: "Activity",
    status: "Active",
    createdAt: "2026-02-20T11:30:00Z"
  },
  {
    id: "ind-3",
    name: "E-Commerce & Logistics",
    slug: "ecommerce-logistics",
    description: "Multi-vendor marketplaces, dynamic pricing engines, inventory automation, and real-time package delivery tracking portals.",
    icon: "ShoppingBag",
    status: "Active",
    createdAt: "2026-03-05T15:45:00Z"
  }
];

export const INITIAL_SERVICES: Service[] = [
  {
    id: "srv-1",
    name: "Custom Enterprise Portal Development",
    description: "Bespoke internal dashboards, CRM platforms, and customer-facing interfaces engineered with robust RBAC policies and state management.",
    features: [
      "Multi-tenant architectures",
      "Custom role-based permissions (RBAC)",
      "High-fidelity responsive UI with TailwindCSS",
      "Real-time websocket dashboards"
    ],
    technologies: ["Next.js", "NestJS", "PostgreSQL", "TailwindCSS", "Prisma"],
    status: "Active",
    createdAt: "2026-01-10T09:00:00Z"
  },
  {
    id: "srv-2",
    name: "AI & Large Language Model Integrations",
    description: "Embed agentic AI agents, semantic search tools, and automatic customer assistance systems directly into your existing business pipelines.",
    features: [
      "Custom RAG (Retrieval-Augmented Generation) pipelines",
      "Automated document summarization & categorization",
      "Conversational AI chatbots",
      "Data vectorization & semantic search indices"
    ],
    technologies: ["Python", "LangChain", "OpenAI API", "Qdrant", "FastAPI"],
    status: "Active",
    createdAt: "2026-03-01T10:00:00Z"
  },
  {
    id: "srv-3",
    name: "Cloud Systems Consulting & Security Auditing",
    description: "Review your application hosting infrastructure for security loopholes, optimize cloud spending, and automate deployments.",
    features: [
      "Zero-downtime Blue/Green deployments",
      "Terraform Infrastructure-as-Code setups",
      "Penetration testing & OWASP threat scans",
      "Database read-replica optimization"
    ],
    technologies: ["AWS", "Docker", "Kubernetes", "Terraform", "GitHub Actions"],
    status: "Active",
    createdAt: "2026-04-12T16:20:00Z"
  }
];

export const INITIAL_STAFF: StaffMember[] = [
  {
    id: "staff-1",
    name: "Aditya Vardhan",
    email: "aditya@lioncode.com",
    role: "Super Admin",
    status: "Active",
    joinedDate: "2024-01-10"
  },
  {
    id: "staff-2",
    name: "Neha Sharma",
    email: "neha.s@lioncode.com",
    role: "Editor",
    status: "Active",
    joinedDate: "2025-03-15"
  },
  {
    id: "staff-3",
    name: "Shardul Kumar",
    email: "shardul@lioncode.com",
    role: "Super Admin",
    status: "Active",
    joinedDate: "2024-06-20"
  },
  {
    id: "staff-4",
    name: "Rohan Verma",
    email: "rohan.v@lioncode.com",
    role: "Recruiter",
    status: "Active",
    joinedDate: "2025-11-01"
  }
];

export const INITIAL_ROLES: RolePermissions[] = [
  {
    role: "Super Admin",
    permissions: {
      jobs: { read: true, write: true, delete: true },
      industries: { read: true, write: true, delete: true },
      services: { read: true, write: true, delete: true },
      staff: { read: true, write: true, delete: true },
      queries: { read: true, write: true, delete: true },
      settings: { read: true, write: true, delete: true }
    }
  },
  {
    role: "Editor",
    permissions: {
      jobs: { read: true, write: true, delete: false },
      industries: { read: true, write: true, delete: false },
      services: { read: true, write: true, delete: false },
      staff: { read: true, write: false, delete: false },
      queries: { read: true, write: true, delete: false },
      settings: { read: true, write: false, delete: false }
    }
  },
  {
    role: "Recruiter",
    permissions: {
      jobs: { read: true, write: true, delete: false },
      industries: { read: true, write: false, delete: false },
      services: { read: true, write: false, delete: false },
      staff: { read: false, write: false, delete: false },
      queries: { read: false, write: false, delete: false },
      settings: { read: false, write: false, delete: false }
    }
  }
];

export const INITIAL_QUERIES: ContactQuery[] = [
  {
    id: "query-1",
    name: "Rajesh Khandelwal",
    email: "rajesh@khandelwalretail.in",
    phone: "+91 98765 43210",
    company: "Khandelwal Retail Group",
    serviceInterest: "Custom Enterprise Portal Development",
    message: "Hello team, we are looking to replace our legacy inventory tracking spreadsheet with a modern internal portal. It needs to support role permissions for warehouse staff vs managers. Can you provide a cost estimate?",
    status: "New",
    createdAt: "2026-06-11T09:15:00Z"
  },
  {
    id: "query-2",
    name: "Sarah Jenkins",
    email: "s.jenkins@healthcarecorp.com",
    phone: "+1 (555) 019-2834",
    company: "Global Healthcare Corp",
    serviceInterest: "AI & Large Language Model Integrations",
    message: "We need to set up a secure RAG search engine inside our local network to search through patient treatment manuals. HIPAA compliance is an absolute requirement. Let's schedule a call this Friday.",
    status: "Replied",
    replyMessage: "Hi Sarah, thank you for reaching out. Yes, we are highly experienced with HIPAA-compliant setups. Let's schedule a Zoom call this Friday. I'll send an invite.",
    createdAt: "2026-06-10T16:40:00Z"
  },
  {
    id: "query-3",
    name: "Vikram Malhotra",
    email: "vikram@fintechventures.io",
    company: "Fintech Ventures",
    serviceInterest: "Cloud Systems Consulting & Security Auditing",
    message: "We are preparing for a Series A audit next month. We need an external audit on our AWS infrastructure, security groups, and encryption-at-rest policies.",
    status: "Resolved",
    replyMessage: "Hi Vikram, we can help audit your AWS environment and provide a remediation plan within 5 business days. Let's hop on a call to review your current configuration.",
    createdAt: "2026-06-08T11:22:00Z"
  }
];

export const INITIAL_SETTINGS: SystemSettings = {
  siteName: "LionCode Technologies Portal",
  siteEmail: "admin@lioncode.com",
  contactPhone: "+91 98765 43210",
  address: "Sector 62, Noida, Uttar Pradesh, India",
  maintenanceMode: false,
  allowPublicApplications: true,
  maxUploadSizeMb: 15
};

export const INITIAL_PROJECTS: Project[] = [
  {
    id: "project-1",
    title: "Justravels Booking Engine",
    category: "Web Apps",
    desc: "A highly-scalable Nest.js and Next.js booking infrastructure built for rapid seat allocation and automated platform dues calculations.",
    longDesc: "Justravels required a complete modernization of their central booking system. We re-engineered their booking pipeline using a microservices-based Nest.js architecture, caching high-volume lookups with Redis, and integrating real-time ledger accounting.",
    stats: "2.5M+ requests/day",
    techStack: ["Next.js", "Nest.js", "Redis", "PostgreSQL", "Docker"],
    color: "from-blue-500 to-indigo-500",
    createdAt: "2026-04-01T12:00:00Z"
  },
  {
    id: "project-2",
    title: "Aegis AI Agent",
    category: "AI/ML",
    desc: "A context-aware developer assistant capable of scanning directory contexts and suggesting secure edits via structured tool calls.",
    longDesc: "Aegis AI scans large-scale codebases to automatically fix syntax warnings, resolve type mismatches, and format output. It executes actions in sandboxed environments with precise feedback loops.",
    stats: "99.8% precision",
    techStack: ["TypeScript", "Python", "OpenAI API", "LangChain", "VectorDB"],
    color: "from-purple-500 to-pink-500",
    createdAt: "2026-05-15T09:30:00Z"
  },
  {
    id: "project-3",
    title: "Vatsalya Portal",
    category: "Web Apps",
    desc: "A secure state welfare portal ensuring reliable distribution workflows, supporting encrypted PDF/TIFF uploads and strict compliance audits.",
    longDesc: "Vatsalya provides a unified portal for citizen benefits distribution. We implemented robust verification checkpoints, secure cloud storage with pre-signed URLs, and high-performance server side rendering.",
    stats: "500k+ active users",
    techStack: ["React", "Express.js", "AWS S3", "Tailwind CSS", "Jest"],
    color: "from-emerald-500 to-teal-500",
    createdAt: "2026-06-01T14:15:00Z"
  },
  {
    id: "project-4",
    title: "LionStream Edge Cache",
    category: "Cloud API",
    desc: "Custom edge routing middleware designed to optimize dynamic API requests and reduce database stress under extreme load spikes.",
    longDesc: "Built for dynamic e-commerce catalog API loads, LionStream caches complex database query results at the network edge, ensuring sub-15ms response latencies and seamless auto-scaling.",
    stats: "15ms avg latency",
    techStack: ["Go", "Cloudflare Workers", "gRPC", "Redis Enterprise"],
    color: "from-amber-500 to-orange-500",
    createdAt: "2026-06-10T10:00:00Z"
  }
];
