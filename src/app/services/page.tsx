'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Cpu, Globe, Cloud, Shield, Zap, Database, Users } from 'lucide-react';
import Link from 'next/link';
import styles from './services.module.css';

const services = [
  {
    id: 'ai-development',
    icon: <Cpu size={32} color="var(--accent-primary)" />,
    title: 'AI Development',
    shortDescription: 'AI features that work with your real data.',
    deliverables: [
      'Model design and deployment for practical AI use-cases',
      'MLOps-ready workflows for continuous improvement',
      'Integrations that fit your product and infrastructure'
    ],
    description:
      'We design and deliver AI capabilities—from prototypes to production—so your engineering teams can automate decisions, improve experiences, and scale with confidence.'
  },
  {
    id: 'web-platforms',
    icon: <Globe size={32} color="var(--accent-secondary)" />,
    title: 'Web Platforms',
    shortDescription: 'Fast, reliable web apps built for growth.',
    deliverables: [
      'Modern front-end + back-end engineering',
      'Performance tuning and scalability planning',
      'Clean architecture for long-term maintainability'
    ],
    description:
      'From landing pages to platform-grade apps, we build web solutions that stay quick, stable, and easy to evolve.',
  },
  {
    id: 'cloud-engineering',
    icon: <Cloud size={32} color="var(--accent-primary)" />,
    title: 'Cloud Engineering',
    shortDescription: 'Cloud systems designed for reliability.',
    deliverables: [
      'Cloud architecture and infrastructure setup',
      'DevOps pipelines for smooth releases',
      'Monitoring, resilience, and cost-conscious scaling'
    ],
    description:
      'We help you move to cloud with confidence—designing infrastructure that supports dependable delivery and long-term growth.',
  },
  {
    id: 'cybersecurity',
    icon: <Shield size={32} color="var(--accent-primary)" />,
    title: 'Cybersecurity',
    shortDescription: 'Security practices built into delivery.',
    deliverables: [
      'Threat modeling and secure implementation',
      'Security testing and hardening workflows',
      'Practical security documentation for teams'
    ],
    description:
      'We bring security engineering into your development process so vulnerabilities are managed early—not after release.',
  },
  {
    id: 'performance-tuning',
    icon: <Zap size={32} color="var(--accent-secondary)" />,
    title: 'Performance Tuning',
    shortDescription: 'Make your system faster and steadier.',
    deliverables: [
      'Latency reduction and throughput improvements',
      'Profiling, bottleneck removal, and tuning',
      'Monitoring to keep performance stable over time'
    ],
    description:
      'We optimize existing systems—so your users feel the improvement and your engineering team stays confident under load.',
  },
  {
    id: 'big-data',
    icon: <Database size={32} color="var(--accent-primary)" />,
    title: 'Big Data Architecture',
    shortDescription: 'Analytics pipelines that scale with you.',
    deliverables: [
      'Data architecture and pipeline design',
      'Real-time processing and quality controls',
      'Workflows that keep data usable across teams'
    ],
    description:
      'We design big data systems for dependable, real-time insights—so analytics supports decisions, not delays.'
  },
  {
    id: 'it-staffing',
    icon: <Users size={32} color="var(--accent-secondary)" />,
    title: 'IT Staffing (Staff Augmentation)',
    shortDescription: 'Add senior engineers when timelines get tight.',
    deliverables: [
      'Rapid onboarding for needed roles and expertise',
      'Augment engineering and IT delivery with senior specialists',
      'Quality-first collaboration and clear progress reporting'
    ],
    description:
      'When you need extra capacity, CodeHera provides senior talent through staff augmentation—so your delivery stays on track without compromising quality.'
  }
];

export default function ServicesPage() {
  const [openId, setOpenId] = useState<string | null>(services[0].id);

  useEffect(() => {
    const applyHash = () => {
      const hash = typeof window !== 'undefined' ? window.location.hash.replace(/^#/, '') : '';
      if (!hash) return;
      const match = services.find((s) => s.id === hash);
      if (!match) return;
      setOpenId(hash);
      requestAnimationFrame(() => {
        const el = document.getElementById(hash);
        el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    };
    applyHash();
    window.addEventListener('hashchange', applyHash);
    return () => window.removeEventListener('hashchange', applyHash);
  }, []);

  return (
    <div className="container py-24 min-h-screen pt-40">
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={styles.hero}
      >
        <h1
          className="text-gradient"
          style={{ fontSize: '3.1rem', fontWeight: 800, marginBottom: '0.9rem', letterSpacing: '-0.02em' }}
        >
          IT Services & Consulting
        </h1>
        <p className="text-muted" style={{ fontSize: '1.05rem', maxWidth: '720px', margin: '0 auto' }}>
          Practical engineering support for development, cloud & DevOps, security, data, and IT staffing (staff
          augmentation) when you need extra capacity.
        </p>
        <div className={styles.heroCTA}>
          <Link href="/contact" className="btn btn-primary">
            Talk to CodeHera
          </Link>
        </div>
      </motion.div>

      <div className={styles.grid} role="list">
        {services.map((service, idx) => {
          const isOpen = openId === service.id;
          return (
            <motion.div
              key={service.id}
              id={service.id}
              role="listitem"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: idx * 0.06 }}
              className={`glass-card ${styles.card} ${isOpen ? styles.cardOpen : ''}`}
              tabIndex={0}
              aria-expanded={isOpen}
              onClick={() => setOpenId((prev) => (prev === service.id ? null : service.id))}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setOpenId((prev) => (prev === service.id ? null : service.id));
                }
              }}
            >
              <div className={styles.cardHeader}>
                <div className={styles.iconWrapper}>{service.icon}</div>
                <div className={styles.cardHeaderText}>
                  <h3 className={styles.cardTitle}>{service.title}</h3>
                  <p className={styles.cardDesc}>{service.shortDescription}</p>
                </div>
                <div className={styles.cardToggle} aria-hidden="true">
                  {isOpen ? '-' : '+'}
                </div>
              </div>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key={`content-${service.id}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28 }}
                    className={styles.cardBody}
                  >
                    <p className={styles.bodyLead}>{service.description}</p>

                    <div className={styles.bodySection}>
                      <h4 className={styles.bodySubTitle}>What we deliver</h4>
                      <ul className={styles.bodyList}>
                        {service.deliverables.map((t, i) => (
                          <li key={`${service.id}-d-${i}`}>{t}</li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className={`glass-card ${styles.bottomCTA}`}
      >
        <h2 className={styles.bottomTitle}>Not sure which service fits your needs?</h2>
        <p className={styles.bottomLead}>Send your requirements and we’ll recommend a practical delivery approach.</p>
        <div className={styles.bottomCTAButtons}>
          <Link href="/contact" className="btn btn-primary">
            Contact us
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
