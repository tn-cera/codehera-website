'use client';

import { motion } from 'framer-motion';
import { 
  Target, 
  Eye, 
  Zap, 
  Shield, 
  Cpu, 
  Globe, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import styles from './about.module.css';
import Link from 'next/link';

const fadeUp: any = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'circOut' } }
};

const staggerContainer: any = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const values = [
  { icon: Zap, title: 'Practical Innovation', desc: 'Turning modern technology into measurable business outcomes, not just prototypes.' },
  { icon: Shield, title: 'Security-First Engineering', desc: 'Building reliable systems with secure-by-design practices and resilient delivery.' },
  { icon: Cpu, title: 'Engineering Excellence', desc: 'Consulting-led architecture, clean implementation, and performance-focused delivery.' },
  { icon: Globe, title: 'Scalable Global Delivery', desc: 'Supporting clients worldwide with delivery that adapts across time zones and growth.' },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* ── Hero Section ─────────────────────────────── */}
      <section className={`${styles.section} pt-40`}>
        <div className="container">
          <motion.div 
            className={styles.header}
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeUp} className="badge" style={{ marginBottom: '1.5rem' }}>
              <Sparkles size={16} style={{ marginRight: '0.5rem' }} /> IT Services + Consulting Since 2022
            </motion.div>
            
            <motion.h1 variants={fadeUp} className="text-gradient" style={{ fontSize: 'clamp(3rem, 8vw, 4.5rem)', fontWeight: 800, marginBottom: '1.5rem', letterSpacing: '-0.03em' }}>
              About <br /> CodeHera
            </motion.h1>
            
            <motion.p variants={fadeUp} className="text-muted" style={{ fontSize: '1.2rem', maxWidth: '800px', lineHeight: 1.8 }}>
              CodeHera is an IT services and consulting company built for organizations that need reliable software,
              scalable infrastructure, and consulting that translates strategy into execution. Based in India and
              delivering globally, we help organizations modernize with confidence, from architecture to deployment.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── Mission & Vision ─────────────────────────── */}
      <section className={styles.section} style={{ padding: '2rem 0 6rem' }}>
        <div className="container">
          <motion.div 
            className={styles.missionGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUp} className={`glass-card ${styles.missionCard}`}>
              <div className={styles.cardIcon}>
                <Target size={28} />
              </div>
              <h2 className={styles.missionTitle}>Our Mission</h2>
              <p className="text-muted" style={{ lineHeight: 1.8 }}>
                Provide consulting-led IT services that solve real business problems. We deliver full-cycle support
                across application development, cloud and DevOps, data and analytics, and security engineering.
                When speed matters, our IT staffing (staff augmentation) helps organizations scale with the right senior
                expertise to keep delivery on track.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className={`glass-card ${styles.missionCard}`}>
              <div className={styles.cardIcon} style={{ color: 'var(--accent-secondary)', borderColor: 'rgba(0,174,239,0.3)' }}>
                <Eye size={28} />
              </div>
              <h2 className={styles.missionTitle}>Our Vision</h2>
              <p className="text-muted" style={{ lineHeight: 1.8 }}>
                Be the trusted IT consulting partner for global organizations building dependable products and modern platforms.
                We aim to make infrastructure dependable, performance predictable, and modernization practical, so
                organizations can grow without trading off quality, security, or maintainability.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Core Values ──────────────────────────────── */}
      <section className={styles.section} style={{ background: 'rgba(255,255,255,0.01)' }}>
        <div className="container">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            style={{ textAlign: 'center', marginBottom: '4rem' }}
          >
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800 }}>Core Values</h2>
            <p className="text-muted">The principles behind how we deliver IT services and consulting.</p>
          </motion.div>

          <motion.div 
            className={styles.valuesGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {values.map((v, i) => (
              <motion.div key={i} variants={fadeUp} className={`glass-card ${styles.valueCard}`}>
                <v.icon size={32} className={styles.valueIcon} />
                <h3 className={styles.valueTitle}>{v.title}</h3>
                <p className={styles.valueDesc}>{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Our Story Section ────────────────────────── */}
      <section className={`${styles.section} ${styles.storyOuter}`}>
        <div className="container">
          <div className={styles.storySection}>
            <motion.div 
              className={styles.storyContent}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className={styles.storyTitle}>Our <span className="text-gradient">Story</span></h2>
              <p className={styles.storyText}>
                CodeHera started in 2022 with a clear goal: help organizations get dependable IT outcomes without guesswork.
                We saw that many organizations struggle to connect strategy, architecture, and delivery into one consistent execution model.
                So we built CodeHera as a consulting-first IT services partner that brings engineering discipline, practical
                technology decisions, and measurable results.
              </p>

              <p className={styles.storyText}>
                Today, we support clients across India and around the world with application development, cloud and DevOps,
                data and security engineering. And when a project needs immediate additional capacity, our IT staffing offering
                helps organizations onboard senior talent to accelerate delivery while maintaining quality.
                Our work is designed to scale with you, from launch to ongoing evolution.
              </p>
              <div style={{ marginTop: '1.5rem' }}>
                <Link href="/contact" className="btn btn-primary">
                  Work With Us <ArrowRight size={18} style={{ marginLeft: '0.5rem' }} />
                </Link>
              </div>
            </motion.div>

            <motion.div 
              className={styles.storyVisual}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className={styles.storyVisualGlow} />
              {/* Unsplash image: cloud/DevOps style infrastructure visual */}
              <img
                className={styles.storyVisualImage}
                src="https://images.unsplash.com/photo-1563996319492-53d4fc5cc702?auto=format&fit=crop&w=2000&q=90"
                alt="Cloud and infrastructure engineering"
                loading="eager"
                decoding="async"
                width={2000}
                height={1125}
              />
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
