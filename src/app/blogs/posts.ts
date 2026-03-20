export type BlogPost = {
  id: number;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  image: string;
  featured?: boolean;
};

export const posts: BlogPost[] = [
  {
    id: 1,
    title: 'Year of the Agents: Scaling AI Workforces in 2026',
    category: 'AI Research',
    date: 'Jan 15, 2026',
    excerpt:
      'As we enter 2026, the focus shifts from chat-based AI to autonomous agents that can execute complex multi-step workflows with minimal supervision. We explore the architectural shifts required to support agentic swarms.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
    featured: true,
  },
  {
    id: 2,
    title: 'The Next Wave of Web Frameworks: What to Watch in 2026',
    category: 'Engineering',
    date: 'Mar 10, 2026',
    excerpt:
      'Exploring the shift towards zero-bundle-size components and the resurgence of hyper-optimized server-side rendering. Why 2026 is becoming the year of "Less is More" in web development.',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 3,
    title: 'Modern Infrastructure: Moving from Monoliths to Micro-frontends',
    category: 'Cloud',
    date: 'Feb 22, 2026',
    excerpt:
      'How leading tech companies are breaking down their frontend monoliths to improve deployment frequency and team autonomy without sacrificing user experience.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 4,
    title: 'Accessibility for Everyone: Building Inclusive Digital Experiences',
    category: 'Design',
    date: 'Dec 05, 2025',
    excerpt:
      'Beyond ARIA labels: A deep dive into cognitive accessibility and how to design interfaces that work for everyone, regardless of their ability.',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 5,
    title: 'Building Real-time Applications with WebSockets and Serverless',
    category: 'Engineering',
    date: 'Oct 18, 2025',
    excerpt:
      'Maintaining persistent connections in a transient world. We look at the best patterns for implementing real-time features on serverless infrastructure.',
    image: 'https://images.unsplash.com/photo-1508179846671-714307e3bc09?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 6,
    title: 'The State of TypeScript in 2025: Beyond the Basics',
    category: 'Engineering',
    date: 'Sep 30, 2025',
    excerpt:
      'Advanced utility types, template literal types, and how to leverage the latest TypeScript features to create bulletproof type systems.',
    image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 7,
    title: 'AI-First Development: How LLMs are Changing the Dev Workflow',
    category: 'AI Research',
    date: 'Aug 12, 2025',
    excerpt:
      'From Copilot to fully autonomous coding agents. How developers are integrating LLMs into every stage of the software development lifecycle.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 8,
    title: 'Designing for Delight: The Psychology of Micro-animations',
    category: 'Design',
    date: 'Jul 25, 2025',
    excerpt:
      'Small movements, big impact. How subtle animations can guide user attention, provide feedback, and create a truly premium experience.',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 9,
    title: 'React Server Components: 2 Years in Production',
    category: 'Engineering',
    date: 'Jun 14, 2025',
    excerpt:
      'Lessons learned from migrating a large-scale project to React Server Components. What worked, what didn\'t, and what we\'d do differently.',
    image: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 10,
    title: 'Securing the Modular Web: A Guide to Modern Authentication',
    category: 'Security',
    date: 'May 08, 2025',
    excerpt:
      'Passkeys, WebAuthn, and the death of the password. How to implement the latest authentication standards for a more secure and seamless user experience.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 11,
    title: 'The Future of DevOps: Platform Engineering as a Service',
    category: 'Engineering',
    date: 'Apr 20, 2025',
    excerpt:
      'Why the focus is shifting from "You build it, you run it" to internal developer platforms that empower teams with self-service infrastructure.',
    image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 12,
    title: 'Modern CSS: Mastering Container Queries and Layers',
    category: 'Design',
    date: 'Mar 15, 2025',
    excerpt:
      'Stop relying on viewport units. Learn how container queries and CSS layers are revolutionizing how we build truly responsive components.',
    image: 'https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 13,
    title: 'Rethinking Web Performance: Edge Computing at Scale',
    category: 'Cloud',
    date: 'Feb 10, 2025',
    excerpt:
      'Moving logic closer to the user. How edge functions and globally distributed KV stores are rewriting the rules of the request-response cycle.',
    image: 'https://images.unsplash.com/photo-1632910121591-29e2484c0259?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 14,
    title: 'The Rise of Agentic AI: Why 2025 is the Year of Autonomy',
    category: 'AI Research',
    date: 'Jan 05, 2025',
    excerpt:
      'An overview of the emerging agentic ecosystem and how autonomous AI agents are beginning to disrupt traditional software workflows.',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800',
  },
];

