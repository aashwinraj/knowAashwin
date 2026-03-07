import { Component } from '@angular/core';

interface NavLink {
  label: string;
  href: string;
}

interface SocialLink {
  label: string;
  value: string;
  href: string;
}

interface Stat {
  value: string;
  label: string;
}

interface Skill {
  name: string;
  proficiency: number;
}

interface SkillGroup {
  title: string;
  skills: Skill[];
}

interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
  tags: string[];
}

interface Project {
  title: string;
  description: string;
  highlights: string[];
  tech: string[];
  link: string;
}

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  readonly profile = {
    name: 'Aashwin Raj',
    role: 'Software Engineer and AI/ML Engineer',
    location: 'India',
    email: 'aashwinraj0257@gmail.com',
    phone: '+91 7424961792'
  };

  contactButtonText = 'Contact Me';

  readonly navLinks: NavLink[] = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' }
  ];

  readonly socials: SocialLink[] = [
    { label: 'LinkedIn', value: 'linkedin', href: 'https://www.linkedin.com/in/aashwin-raj-539910219/' },
    { label: 'GitHub', value: 'github', href: 'https://github.com/aashwinraj' },
    { label: 'LeetCode', value: 'leetcode', href: 'https://leetcode.com/u/aashwinraj0257/' }
  ];

  readonly quickStats: Stat[] = [
    { value: '2.9 years', label: 'of Software engineering at GEP.' },
    { value: '30+', label: 'Clients using the systems I help build.' },
    { value: '70+', label: 'Features developed and delivered.' }
  ];

  readonly aboutLead =
    'I have experience in building software, building ML models, fine-tuning, GPU Programming, implementing research papers and designing scalable solutions.';

  readonly aboutParagraphs: string[] = [
    'I have hands-on experience delivering enterprise Angular and C# solutions, from ticket workflows to high-throughput import/export systems used by real teams.',
    'On the AI side, I work with deep learning, transformers, LLM fine-tuning (LoRA, QLoRA, DPO, GRPO), and CUDA research implementations to turn advanced ideas into reliable products.'
  ];

  readonly skillGroups: SkillGroup[] = [
    {
      title: 'AI and Machine Learning',
      skills: [
        { name: 'Machine Learning and Deep Learning', proficiency: 93 },
        { name: 'Transformers and LLM Fine-Tuning', proficiency: 90 },
        { name: 'Computer Vision and NLP', proficiency: 88 },
        { name: 'PyTorch and Scikit-learn', proficiency: 92 },
        {name:'Reinforcement Learning',proficiency:70}
      ]
    },
    {
      title: 'Backend and APIs',
      skills: [
        { name: 'Python, FastAPI, Django', proficiency: 92 },
        { name: 'JAVA, C++', proficiency: 92 },
        { name: 'C#, REST APIs, gRPC', proficiency: 99 },
        { name: 'SQL and MongoDB', proficiency: 87 },
        { name: 'Redis and Elasticsearch', proficiency: 86 }
      ]
    },
    {
      title: 'Frontend and Platform',
      skills: [
        { name: 'Angular and TypeScript', proficiency: 90 },
        { name: 'AWS and Docker', proficiency: 70 },
        { name: 'Kubernetes and Linux', proficiency: 79 },
        { name: 'Git and Cypress', proficiency: 85 }
      ]
    }
  ];

  readonly experiences: Experience[] = [
    {
      role: 'Software Engineer',
      company: 'GEP',
      location: 'Mumbai, India',
      period: 'Jan 2023 - Oct 2025',
      highlights: [
        'Designed and built a multi-source ticket management system using C# and Angular, integrating email ingestion, task workflows, comments, notifications, and approval pipelines, SLA management and several other features.',
'Wrote multiple critical APIs in C# and developed several Angular components using Typescript.',
'Implemented ML-based language translation and spam detection for inbound emails, improving ticket qualityand reducing manual triage effort.',
'Integrated Microsoft Graph APIs to support in-tool email reply/forward with attachments, contributing directly to enterprise adoption and product revenue.',
'Optimized the ticket creation UI and API that reduced the creation time by 60%.',
'Developed Low Code-Co Code solution for product managers to make their custom APIs for client requrirements.',
'Optimized backend APIs by analyzing request paths and microservice interactions, reducing response latency through caching (Redis) and elimination of redundant internal calls.',
'Developed high-throughput data import/export (Impex) pipelines using Elasticsearch, enabling bidirectional tabular data exchange at scale.',
'Maintained the product on production by giving quick bug support to more than 20 Clients.',
'Built Excel-based bulk upload workflows that reduced new client on boarding time from weeks to a few hours.',
'Managed the Sprint cycles and planned task distribution for teams before starting of new Sprints.'

      ],
      tags: ['Angular', 'C#', 'Redis', 'Elasticsearch', 'Microsoft Graph']
    }
  ];

  readonly projects: Project[] = [
    {
      title: 'Vision Transformer for Gaussian Image Denoising',
      description:
        'Built an encoder-decoder Vision Transformer denoiser inspired by Pureformer with a complete training and inference workflow.',
      highlights: [
        'Implemented patch-based training, skip connections, and synthetic Gaussian noise generation in Python and PyTorch.',
        'Created an inference and visualization pipeline to compare clean, noisy, and denoised outputs.',
        'Used PSNR-based evaluation to measure quality improvements across test samples.'
      ],
      tech: ['Python', 'PyTorch', 'FastAPI', 'Computer Vision'],
      link: 'https://github.com/aashwinraj/Transformer-Denoizer'
    },
    {
      title: 'Causal FlashAttention (CUDA Research Implementation)',
      description:
        'Implemented FlashAttention Algorithm 1 from first principles in CUDA, then extended it for causal masking support.',
      highlights: [
        'Implemented blocked query/key traversal with shared-memory reuse and numerically stable online softmax.',
        'Added causal autoregressive masking for transformer language model compatibility.',
        'Verified correctness against an FP32 CPU reference with very low numerical error.'
      ],
      tech: ['CUDA', 'C++', 'Attention', 'LLM Systems'],
      link: 'https://github.com/aashwinraj/Cuda-Kernels'
    },
    {
      title: 'Multimodal Product Search Engine (Image + Text)',
      description:
        'Developed a CLIP-based multimodal search system for fashion products with real-time image and text retrieval.',
      highlights: [
        'Indexed 15,000 products using FAISS for text-to-image and image-to-image search use cases.',
        'Embedded images and textual metadata into a shared representation space for robust matching.',
        'Improved retrieval quality via contrastive embeddings and structured metadata enrichment.'
      ],
      tech: ['Python', 'CLIP', 'FAISS', 'FastAPI'],
      link: 'https://github.com/aashwinraj/Multi-Modal-AI-search'
    }
  ];
  async onContactClick(event: MouseEvent): Promise<void> {
    event.preventDefault();

    const email = this.profile.email;
    let copied = false;

    try {
      await navigator.clipboard.writeText(email);
      copied = true;
    } catch {
      copied = false;
    }

    window.location.href = `mailto:${email}`;
    this.contactButtonText = copied ? 'Email Copied' : 'Open Email App';

    setTimeout(() => {
      this.contactButtonText = 'Contact Me';
    }, 1800);
  }
}

