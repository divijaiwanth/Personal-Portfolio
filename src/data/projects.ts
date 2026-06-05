export interface Project {
  slug: string
  title: string
  year: string
  shortDescription: string
  longDescription: string
  techStack: string[]
  role: string
  liveUrl?: string
  githubUrl?: string
  coverImage: string
  images: string[]
  featured: boolean
}

const github = 'https://github.com/divijaiwanth'

export const projects: Project[] = [
  {
    slug: 'recon',
    title: 'Recon',
    year: '2026',
    shortDescription:
      'AI-powered job intelligence pipeline — local LLMs, autonomous company scraping, and interview aggregation for zero-cost, privacy-first interview prep.',
    longDescription: `Recon is an automated intelligence pipeline built for deep interview preparation and company research. No cloud AI costs or data exposure — everything runs locally via Ollama.
  The system autonomously discovers company sitemaps, scrapes high-signal pages (About, Careers, Products), and feeds stripped HTML into a locally hosted LLM bound by strict Pydantic schemas for structured extraction.
  A candidate alignment engine parses resumes and JDs to compute match scores and flag skill gaps. Simultaneously, Recon queries Reddit, Glassdoor, and LeetCode via Serper and deep-scrapes threads using Firecrawl to aggregate historically repeated DSA and System Design questions for the target role.
  All outputs are synthesized into human-readable Markdown reports and structured JSON dumps inside a \`reports/\` directory.`,
    techStack: ['Python', 'Ollama', 'Pydantic', 'BeautifulSoup4', 'Firecrawl', 'Serper API'],
    role: 'ML Engineer',
    githubUrl: 'https://github.com/divijaiwanth/Recon-Job_Enumeration_Tool',
    coverImage: '/images/lumora-cover.svg',
    images: [],
    featured: true,
  },
  {
    slug: 'lumora',
    title: 'Lumora',
    year: '2026',
    shortDescription:
      'Zero-shot event face recognition — RetinaFace, ArcFace, and FAISS for sub-second search across thousands of photos.',
    longDescription: `Lumora is a production-grade zero-shot face recognition pipeline built for dense event photography. No per-event training data is required.

The system uses RetinaFace detection, 5-point affine alignment, and 512-dimensional ArcFace embeddings. Embeddings are indexed in FAISS (IndexFlatIP) for sub-second cosine similarity search across large event libraries.

A Streamlit application enables selfie-based photo retrieval with bounding box overlays on full-resolution event images — making the pipeline usable by non-technical operators.`,
    techStack: ['RetinaFace', 'ArcFace', 'FAISS', 'OpenCV', 'Streamlit', 'Python'],
    role: 'ML Engineer',
    githubUrl: 'https://github.com/divijaiwanth/Lumora---Zero-Shot-Event-Face-Recognition-Pipeline',
    coverImage: '/images/lumora-cover.svg',
    images: [],
    featured: true,
  },
  {
    slug: 'marot',
    title: 'Marot',
    year: '2026',
    shortDescription:
      'Autonomous Discord marketing agent with dual-layer memory, custom RAG, and fully local Mistral inference.',
    longDescription: `Marot is a dual-layer AI agent that separates persistent user memory (Mem0) from a keyword-optimized RAG knowledge base — maintaining domain accuracy and reducing hallucinations in live Discord conversations.

I replaced LangChain with a custom async orchestrator over Ollama's Python API, cutting inference latency and removing framework overhead. The stack runs fully local (Mistral via Ollama) with zero external API calls, achieving cost-free inference at production scale.`,
    techStack: ['Python', 'Mistral', 'Ollama', 'Mem0', 'RAG', 'discord.py'],
    role: 'ML / AI Engineer',
    githubUrl: 'https://github.com/divijaiwanth/Marot-Discord-Marketing-Agent',
    coverImage: '/images/marot-cover.svg',
    images: [],
    featured: true,
  },
  {
    slug: 'ragtube',
    title: 'RAGTube',
    year: '2026',
    shortDescription:
      'YouTube RAG system — ingest transcripts, embed with HuggingFace, query locally via Ollama and Streamlit.',
    longDescription: `RAGTube is an end-to-end retrieval-augmented generation pipeline for long-form YouTube content. Transcripts are ingested, chunked, and embedded with HuggingFace sentence-transformers, then stored in FAISS for semantic Q&A.

Inference runs fully local via Ollama (Mistral) with zero API dependency — demonstrating practical experience with embedding models, vector stores, and RAG orchestration.

A Streamlit interface supports URL-based ingestion and natural language querying without CLI usage.`,
    techStack: ['Python', 'LangChain', 'FAISS', 'HuggingFace', 'Ollama', 'Streamlit'],
    role: 'ML Engineer',
    githubUrl: 'https://github.com/divijaiwanth/RAGTube-Youtube-URL-Based-RAG',
    coverImage: '/images/ragtube-cover.svg',
    images: [],
    featured: true,
  },
  {
    slug: 'placement-portal',
    title: 'Placement Portal',
    year: '2025',
    shortDescription:
      'Full-stack campus placement management system with multi-role authentication (Admin, Company, Student) built using Flask and SQLAlchemy.',
    longDescription: `A comprehensive full-stack web application designed to streamline campus recruitment drives. The platform supports three distinct user roles — Admin, Company, and Student — with secure role-based access control.

    Key features include:
    - Admin dashboard for managing users, approving companies, and overseeing all placement activities.
    - Companies can create and manage placement drives, view applications, and track recruitment.
    - Students can register, browse active drives, and apply with resume upload functionality.
    - Robust session-based authentication and authorization system.
    - Responsive UI built with Bootstrap and Jinja2 templating.

    The application demonstrates strong backend development skills, database modeling with ORM, and clean separation of concerns in a production-like full-stack environment.`,
        techStack: ['Flask', 'Python', 'SQLAlchemy', 'SQLite', 'Jinja2', 'Bootstrap', 'HTML/CSS'],
        role: 'Full Stack Developer',
        githubUrl: 'https://github.com/divijaiwanth/Full-Stack-Placement-Portal',
        coverImage: '/images/placement-portal-cover.svg',   // Update this path as needed
        images: [],
        featured: true,
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export function getAdjacentProjects(slug: string): {
  prev?: Project
  next?: Project
} {
  const index = projects.findIndex((p) => p.slug === slug)
  if (index === -1) return {}
  return {
    prev: index > 0 ? projects[index - 1] : undefined,
    next: index < projects.length - 1 ? projects[index + 1] : undefined,
  }
}
