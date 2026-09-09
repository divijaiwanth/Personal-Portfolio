export const site = {
  brand: 'Divi',
  name: 'Divi Jaiwanth',
  tagline: 'Software Engineer. Distributed systems. Applied AI.',
  email: 'divijaiwanth@gmail.com',
  phone: '+91 8374802689',
  location: 'Bengaluru, India',
  role: 'Software Engineer',
  github: 'https://github.com/divijaiwanth',
  linkedin: 'https://www.linkedin.com/in/divi-jaiwanth-959556251/',
  bio: {
    lead: 'I build backends that stay fast when things break. Distributed consensus from scratch, hybrid retrieval under 100ms, AI pipelines in production.',
    detail:
      'Final-year CS and Data Science engineer at MIT Bengaluru and IIT Madras. At Rewardsy I shipped a Stable Diffusion pipeline that collapsed hours of manual design work into a 30-second API call, running in production against real client traffic.',
  },
  aboutStats: [
    { label: 'Education', value: 'MIT Bengaluru × IIT Madras' },
    { label: 'Location', value: 'Bengaluru, India' },
    { label: 'Focus', value: 'Distributed systems · Retrieval · Applied AI' },
  ],
  skills: [
    {
      category: 'Core CS',
      items:
        'Data Structures & Algorithms, System Design, Operating Systems, Computer Networks, DBMS, Concurrency',
    },
    {
      category: 'Languages',
      items: 'Python, Java, JavaScript, C, SQL',
    },
    {
      category: 'Backend & Systems',
      items:
        'FastAPI, Redis, ElasticSearch, Pydantic, REST APIs, Event-Driven Design, Raft Consensus, Pub/Sub, React',
    },
    {
      category: 'AI & Retrieval',
      items:
        'LLMs, RAG, Hybrid Retrieval (FAISS + BM25), Cross-Encoder Reranking, HyDE, RAGAS, LangChain, MCP, Ollama, PyTorch, HuggingFace',
    },
    {
      category: 'Vision & Generative',
      items: 'Stable Diffusion, ControlNet, RetinaFace, ArcFace, OpenCV, MLflow',
    },
    {
      category: 'Cloud & DevOps',
      items:
        'AWS (Bedrock, S3, Lambda, ECR, API Gateway), Firebase, Supabase, Docker, Kubernetes, CI/CD, Git',
    },
  ],
  experience: [
    {
      company: 'Rewardsy',
      role: 'Software / ML Engineer Intern',
      dates: 'May 2025 - July 2025',
      description:
        'Shipped a Stable Diffusion ControlNet pipeline generating branded QR codes with 100% scan fidelity across three readers, eliminating manual design work for every client asset. Served via FastAPI and Firebase with concurrent request handling and memory-efficient inference, cutting asset turnaround from hours to under 30 seconds per item.',
    },
  ],
  education: [
    {
      school: 'Manipal Institute of Technology',
      location: 'Bengaluru, India',
      degree: 'B.Tech in Computer Science and Engineering',
      detail: 'CGPA: 8.32 / 10.00',
      dates: 'June 2023 - July 2027',
    },
    {
      school: 'Indian Institute of Technology Madras (Online)',
      location: 'Chennai, India',
      degree: 'B.S. in Data Science and Programming',
      detail: 'CGPA: 7.08 / 10.00',
      dates: 'May 2023 - July 2027',
    },
  ],
  certifications: [
    {
      name: 'Build Basic Generative Adversarial Networks (GANs)',
      issuer: 'DeepLearning.AI',
      year: '2024',
    },
    {
      name: 'Generative AI Fundamentals',
      issuer: 'Google',
      year: '2023',
    },
    {
      name: 'Machine Learning with Python',
      issuer: 'IBM',
      year: '2023',
    },
  ],
  aboutExtended: {
    interests: [
      'Distributed consensus',
      'Retrieval-augmented generation',
      'Zero-shot computer vision',
      'Event-driven systems',
      'Local LLM inference',
    ],
    learning:
      'Going deeper on distributed systems: consensus, replication, and the failure modes you only find by breaking things on purpose.',
  },
} as const
