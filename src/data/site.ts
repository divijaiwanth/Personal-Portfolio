export const site = {
  brand: 'Divi',
  name: 'Divi Jaiwanth',
  tagline: 'ML Engineer. Builder. Systems thinker.',
  email: 'divijaiwanth@gmail.com',
  phone: '+91 8374802689',
  location: 'Bengaluru, India',
  role: 'Computer Science Student · ML Engineer',
  github: 'https://github.com/divijaiwanth',
  linkedin: 'https://www.linkedin.com/in/divi-jaiwanth-959556251/',
  bio: {
    lead: 'I build production-grade ML systems — from zero-shot computer vision pipelines to fully local LLM agents — with an emphasis on reliability, latency, and deployable software.',
    detail:
      'B.Tech in Computer Science at Manipal Institute of Technology (Bengaluru) and B.S. in Data Science from IIT Madras (online). Recently interned as an ML Engineer at Rewardsy, shipping generative QR tooling with PyTorch, FastAPI, and Firebase.',
  },
  aboutStats: [
    { label: 'Education', value: 'B.Tech CSE · MIT Bengaluru' },
    { label: 'Location', value: 'Bengaluru, India' },
    { label: 'Focus', value: 'AI/ML · Cybersecurity · Full Stack · UI/UX' },
  ],
  skills: [
    {
      category: 'Languages',
      items: 'Python, C, Java, SQL, JavaScript',
    },
    {
      category: 'AI / ML',
      items:
        'Computer Vision, Face Recognition, Generative AI, RAG, Stable Diffusion, LLMs, PyTorch, TensorFlow, Keras',
    },
    {
      category: 'Cloud & Infrastructure',
      items: 'AWS S3, AWS Bedrock, AWS Lambda, Firebase, REST APIs, CI/CD',
    },
    {
      category: 'Frameworks & Tools',
      items:
        'FastAPI, LangChain, Streamlit, Node.js, Git, FAISS, Ollama, Vector Databases, OpenCV, HuggingFace Transformers',
    },
  ],
  experience: [
    {
      company: 'Rewardsy',
      role: 'ML Engineer Intern',
      dates: 'May 2025 — July 2025',
      description:
        'Built a custom QR code generator with Stable Diffusion ControlNet and PyTorch, cutting generation time by 30%. Deployed via FastAPI with Firebase storage (25% faster retrieval) and hardened error handling for 40% fewer failures at peak load.',
    },
  ],
  education: [
    {
      school: 'Manipal Institute of Technology',
      location: 'Bengaluru, India',
      degree: 'B.Tech in Computer Science and Engineering',
      detail: 'CGPA: 8.32 / 10.00',
      dates: 'June 2023 — July 2027',
    },
    {
      school: 'Indian Institute of Technology Madras (Online)',
      location: 'Chennai, India',
      degree: 'B.S. in Data Science and Programming',
      detail: 'CGPA: 7.08 / 10.00',
      dates: 'May 2023 — July 2027',
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
      'Computer vision',
      'Retrieval-augmented generation',
      'Local LLM inference',
      'Generative AI',
    ],
    learning:
      'Deepening production ML deployment patterns and large-scale vector search for multimodal applications.',
  },
} as const
