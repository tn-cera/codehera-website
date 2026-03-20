import { posts, type BlogPost } from '../posts';
import type { Metadata } from 'next';
import Link from 'next/link';

type ArticleSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

function buildArticle(post: BlogPost): ArticleSection[] {
  const baseOverview = [
    `“${post.title}” explores a practical engineering idea: ${post.excerpt}`,
    `In most real projects, the hard part isn’t discovering concepts—it’s turning them into dependable work that teams can ship, measure, and maintain. This article frames the problem clearly and shows how to approach it step by step.`,
  ];

  const howItWorks: Record<string, { bullets: string[]; bullets2: string[] }> = {
    'AI Research': {
      bullets: [
        'Define the real-world goal (what success looks like) before designing the model',
        'Choose an evaluation strategy that matches production behavior',
        'Plan MLOps early: data, training, deployment, monitoring, and iteration',
      ],
      bullets2: [
        'Start with a constrained prototype, then expand based on measured results',
        'Integrate the AI behavior with your app’s workflows and controls',
        'Continuously test for quality drift and edge cases',
      ],
    },
    Engineering: {
      bullets: [
        'Model the system boundaries: what changes together and what must stay isolated',
        'Optimize for repeatable delivery: architecture + automation + verification',
        'Design performance and reliability as first-class requirements',
      ],
      bullets2: [
        'Use small, safe iterations to reduce delivery risk',
        'Standardize patterns so new work doesn’t start from scratch',
        'Instrument everything: visibility is the foundation of improvement',
      ],
    },
    Cloud: {
      bullets: [
        'Design for scale by default: resilience, deployment strategy, and autoscaling',
        'Treat observability as a requirement (logs, metrics, traces)',
        'Control cost through budgets, quotas, and workload-aware tuning',
      ],
      bullets2: [
        'Move workloads using proven migration steps and rollback plans',
        'Prioritize reliability improvements over “quick wins”',
        'Validate with load tests and operational runbooks',
      ],
    },
    Security: {
      bullets: [
        'Start with threat modeling and map risks to concrete controls',
        'Implement secure-by-design patterns during development, not after release',
        'Verify with testing: scanning, penetration-style checks, and validation',
      ],
      bullets2: [
        'Manage secrets safely and minimize privileges across services',
        'Create security feedback loops so issues are detected early',
        'Document trade-offs clearly so teams can move fast with confidence',
      ],
    },
    Design: {
      bullets: [
        'Design for real user constraints: speed, clarity, and accessibility',
        'Use patterns that reduce cognitive load and guide attention',
        'Validate with feedback loops: testing beats assumptions',
      ],
      bullets2: [
        'Maintain consistency across components and states',
        'Optimize micro-interactions for feedback, not decoration',
        'Treat accessibility as part of quality—not an afterthought',
      ],
    },
  };

  const category = post.category in howItWorks ? post.category : 'Engineering';
  const tailored = howItWorks[category as keyof typeof howItWorks];

  return [
    {
      heading: 'Overview',
      paragraphs: baseOverview,
    },
    {
      heading: 'What’s changing (and why it matters)',
      paragraphs: [
        `Modern teams are moving from isolated features to systems thinking: the way components interact is what determines reliability and long-term success.`,
        `When you adopt this approach, you can reduce rework, improve developer confidence, and keep delivery predictable—even as requirements evolve.`,
      ],
      bullets: tailored.bullets,
    },
    {
      heading: 'A practical way to implement it',
      paragraphs: [
        'To keep this work manageable, break implementation into small phases and validate assumptions early.',
      ],
      bullets: [
        ...(tailored.bullets2 ?? []),
        'Create a quick feedback loop: measure, learn, and iterate with your stakeholders.',
      ],
    },
    {
      heading: 'Common pitfalls to avoid',
      paragraphs: [
        `Most delivery failures come from skipping verification, unclear ownership, or treating quality as something you “add later.”`,
      ],
      bullets: [
        'Building without clear success metrics',
        'Ignoring operational concerns (monitoring, rollback, and supportability)',
        'Over-optimizing too early instead of validating with real data and load',
      ],
    },
    {
      heading: 'How CodeHera helps',
      paragraphs: [
        `CodeHera supports teams with consulting-led engineering—so ${post.title.toLowerCase()} ideas turn into production-ready delivery.`,
        'We help you plan architecture, implement safely, and improve continuously across software engineering, cloud & DevOps, security, and data. If you need additional capacity, our IT staffing (staff augmentation) can also accelerate timelines.',
      ],
      bullets: [
        'Discovery → implementation planning that fits your constraints',
        'Engineering execution with quality gates (tests, reviews, validation)',
        'Ongoing improvements driven by metrics and operational feedback',
      ],
    },
  ];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const post = posts.find((p) => p.id === Number(id));

  return {
    title: post ? `${post.title} | CodeHera Insights` : 'Blog Post | CodeHera Insights',
    description: post ? post.excerpt : 'CodeHera Insights',
    alternates: {
      canonical: post ? `/blogs/${post.id}` : '/blogs',
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = posts.find((p) => p.id === Number(id));

  if (!post) {
    return (
      <div className="container py-24 min-h-screen pt-40">
        <div className="glass-card" style={{ padding: '2rem', textAlign: 'center' }}>
          Article not found.
        </div>
      </div>
    );
  }

  return (
    <div className="container py-24 min-h-screen pt-40">
      <div style={{ marginBottom: '2rem' }}>
        <Link href="/blogs" className="text-gradient" style={{ fontWeight: 800 }}>
          Back to Blogs
        </Link>
      </div>

      <div className="glass-card" style={{ overflow: 'hidden', padding: 0 }}>
        <div
          style={{
            width: '100%',
            height: 320,
            overflow: 'hidden',
            borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
            background: 'rgba(255,255,255,0.03)',
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={post.image}
            alt={post.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        </div>

        <div style={{ padding: '2rem' }}>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
            <span
              className="badge-primary"
              style={{
                padding: '0.35rem 0.75rem',
                borderRadius: 9999,
                background: 'rgba(0,174,239,0.12)',
                color: 'var(--accent-secondary)',
                border: '1px solid rgba(0,174,239,0.25)',
              }}
            >
              {post.category}
            </span>
            <span className="text-muted" style={{ fontSize: '0.95rem', display: 'flex', alignItems: 'center' }}>
              {post.date}
            </span>
          </div>

          <h1 style={{ fontSize: '2.4rem', fontWeight: 950, marginBottom: '1rem', letterSpacing: '-0.02em' }}>
            {post.title}
          </h1>

          <p className="text-muted" style={{ fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '2rem' }}>
            {post.excerpt}
          </p>

          <article style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {buildArticle(post).map((section) => (
              <section key={section.heading}>
                <h2 style={{ fontSize: '1.4rem', fontWeight: 900, marginBottom: '0.8rem' }}>{section.heading}</h2>

                {section.paragraphs.map((p, idx) => (
                  <p key={`${section.heading}-p-${idx}`} className="text-muted" style={{ fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '0.9rem' }}>
                    {p}
                  </p>
                ))}

                {section.bullets && (
                  <ul className="text-muted" style={{ fontSize: '1.05rem', lineHeight: 1.9, paddingLeft: '1.2rem', marginBottom: '0.5rem' }}>
                    {section.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            <div style={{ marginTop: '0.35rem' }}>
              <Link href="/contact" className="btn btn-primary">
                Discuss this topic <span style={{ marginLeft: '0.5rem' }}>→</span>
              </Link>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}

