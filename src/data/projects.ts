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
    slug: 'raft-kv',
    title: 'raft-kv',
    year: 'July 2026',
    shortDescription:
      'Distributed key-value store built from scratch in Python, implementing the Raft consensus algorithm for leader election and fault-tolerant log replication.',
    longDescription: `⚙️ raft-kv is a distributed key-value store implementing the Raft consensus algorithm from scratch, built to understand consensus deeply enough to defend it in an interview, not just get a demo working.

Each node runs as an independent OS process with no shared memory, communicating exclusively over HTTP. It implements leader election with randomized timeouts and the Raft log-freshness check on vote granting, plus log replication with AppendEntries-style heartbeats, nextIndex backtracking on log mismatch, and the §5.4.2 safety rule for committing only current-term entries via majority.

Verified live end-to-end, including killing the leader process mid-session and confirming the cluster recovers with zero data loss. Persistence, dynamic membership, snapshotting, and linearizable reads are explicitly scoped out and documented rather than left unstated.`,
    techStack: ['Python', 'FastAPI', 'Raft', 'Distributed Systems', 'HTTP/RPC'],
    role: 'Backend Engineer',
    githubUrl: 'https://github.com/divijaiwanth/raft-kv',
    coverImage: '/images/speedtube-cover.svg', // Add this image
    images: [],
    featured: true,
  },
  {
    slug: 'yaka',
    title: 'Yaka',
    year: 'September 2026',
    shortDescription:
      'MCP server enforcing an unbypassable spend-limit policy gate in front of every Razorpay payment operation an LLM agent can call, with concurrency-safe idempotency and a full audit trail.',
    longDescription: `🔒 Yaka is a safety layer for agentic payments that an LLM cannot talk its way around — an MCP server that puts a single, unbypassable policy gate in front of every Razorpay operation that moves money.

The core design decision: safety checks are not a tool the agent is supposed to call before charging a payment, they're unconditional middleware running inside every gated tool's own handler, before a single line of Razorpay-calling code executes. charge_payment, capture_payment, create_refund, and create_instant_settlement all route through the same shared pipeline and the same daily spend cap, checked in order (velocity limit, per-transaction amount cap, distinct-payee sprawl limit) — an agent can't dodge a limit by moving money through a different tool call, because there's no tool call that skips the gate.

The gate itself is deterministic, unit-testable TypeScript, not a probabilistic LLM judgment call — the agent decides what to attempt, the code decides what's allowed. Idempotency is verified under actual concurrent duplicate calls (not just sequential retries), and every decision, blocked or allowed, is written to a queryable audit log from the first tool call.

Built against real Razorpay test-mode APIs rather than mocks, and documented the account-level limitations that are Razorpay's, not the code's — instant settlements can't complete in test mode, some emandate flows need account activation — rather than hiding what doesn't fully close the loop.`,
    techStack: ['TypeScript', 'Node.js', 'MCP', 'Razorpay API', 'SQLite', 'Zod'],
    role: 'Backend / AI Systems Engineer',
    githubUrl: 'https://github.com/divijaiwanth/YAKA',
    coverImage: '/images/yaka-cover.svg', // Add this image
    images: [],
    featured: true,
  },
  {
    slug: 'multi-client-chat-server',
    title: 'multi-client-chat-server',
    year: 'August 2026',
    shortDescription:
      'Multi-client TCP chat server built from scratch in C using raw BSD sockets and POSIX threads, with a mutex-synchronized shared client list and graceful disconnect handling.',
    longDescription: `💬 multi-client-chat-server is a from-scratch TCP chat server and client in C, built to work through the concurrency and synchronization problems that only show up once more than one client connects at a time.

The server's main thread does nothing but accept() connections; each client gets its own detached pthread for its entire lifecycle — reading its name, reading chat lines, and broadcasting them — with no work handed back to the main thread. The single shared piece of state, a linked list of connected clients, is guarded by one mutex so adds, removes, and broadcasts can never race or dereference a half-freed pointer.

Chose TCP over UDP for in-order, exactly-once delivery, and thread-per-connection over epoll for simplicity at a bounded scale (up to ~64 clients), while documenting exactly where that tradeoff stops scaling and what the epoll-based fix would look like. Verified locally with 3 concurrent clients, including a mid-session disconnect broadcasting correctly to the rest of the room with no leaked threads. No encryption or authentication are explicitly scoped out and documented as known limitations.`,
    techStack: ['C', 'POSIX Threads', 'BSD Sockets', 'TCP', 'Concurrency'],
    role: 'Systems Engineer',
    githubUrl: 'https://github.com/divijaiwanth/multi-client-chat-server',
    coverImage: '/images/speedtube-cover.svg', // Add this image
    images: [],
    featured: true,
  },
  {
    slug: 'speedtube',
    title: 'SpeedTube',
    year: 'June 2026',
    shortDescription:
      'Advanced YouTube RAG system with hybrid search (FAISS + BM25), HyDE, cross-encoder reranking, and production guardrails (Redis, rate limiting, circuit breaker).',
    longDescription: `⚡ SpeedTube is a production-grade Retrieval-Augmented Generation system that lets users ask anything about any YouTube video using its transcript.

It features advanced techniques like parent-child chunking, hybrid retrieval (semantic + keyword), Reciprocal Rank Fusion, HyDE, and cross-encoder reranking. Built with FastAPI backend, React frontend, Redis caching, rate limiting, input guardrails, and circuit breakers for reliability.

Includes comprehensive evaluation with RAGAS + MLflow.`,
    techStack: ['FastAPI', 'React', 'LangChain', 'FAISS', 'Groq', 'Redis', 'HyDE', 'RAG'],
    role: 'ML Engineer',
    githubUrl: 'https://github.com/divijaiwanth/SpeedTube',
    coverImage: '/images/speedtube-cover.svg', // Add this image
    images: [],
    featured: true,
  },
  {
    slug: 'recon',
    title: 'Recon',
    year: 'June 2026',
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
    year: 'May 2026',
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
    year: 'April 2026',
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
    year: 'May 2026',
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
    slug: 'ai-qr-generator',
    title: 'AI QR Generator',
    year: 'July 2026',
    shortDescription:
      'Production-grade AI-styled QR code generator using Stable Diffusion + ControlNet. Generates scannable branded QR codes in under 30 seconds with memory-efficient GPU inference.',
    longDescription: `A production-grade pipeline that transforms plain QR codes into stunning, brand-aligned visual assets using Stable Diffusion and ControlNet. Instead of generic black-and-white squares, clients get scannable QR codes that look like actual artwork — koi ponds, cityscapes, abstract patterns — generated in under 30 seconds via a single API call.

Built with a focus on real engineering constraints: memory-efficient GPU inference on consumer hardware (8GB VRAM), async concurrent request handling, and persistent cloud storage via Supabase.`,
    techStack: ['Stable Diffusion', 'ControlNet', 'FastAPI', 'React', 'Vite', 'Supabase', 'PyTorch'],
    role: 'ML Engineer',
    githubUrl: 'https://github.com/divijaiwanth/AI-QR-Generator',
    coverImage: '/images/placement-portal-cover.svg',
    images: [],
    featured: true,
  },
  {
    slug: 'sql-agent',
    title: 'SQL Agent',
    year: 'July 2026',
    shortDescription:
      'Local-first conversational SQL agent powered by LangChain + Ollama. Zero-shot natural language to SQL with full offline inference and schema exploration.',
    longDescription: `SQL-agent is a local-first conversational agent for SQL databases. Built with LangChain and powered by offline Ollama models, it takes natural language questions, explores the database schema on its own, constructs and validates SQL queries, and returns accurate answers — all without sending any data over the internet.

It uses a ReAct loop for intelligent reasoning, schema discovery, query validation, and result synthesis. Includes systematic evaluation on the Chinook database.`,
    techStack: ['LangChain', 'Ollama', 'Python', 'SQLite', 'LangSmith'],
    role: 'AI Engineer',
    githubUrl: 'https://github.com/divijaiwanth/SQL-agent',
    coverImage: '/images/placement-portal-cover.svg',
    images: [],
    featured: false,
  },
  {
    slug: 'placement-portal',
    title: 'Placement Portal',
    year: 'Dec 2025',
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
