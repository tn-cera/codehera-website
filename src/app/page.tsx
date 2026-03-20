'use client';

import { motion } from 'framer-motion';
import {
  Sparkles, ArrowRight, Rocket, Shield, Zap, BarChart3,
  Layers, Globe2, Briefcase, Code2, Star
} from 'lucide-react';
import styles from './page.module.css';
import Link from 'next/link';

const fadeUp: any = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'circOut' } }
};

const staggerContainer: any = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const stats = [
  { icon: Briefcase, value: '20+', label: 'Projects Delivered' },
  { icon: Code2, value: '15+', label: 'Technologies' },
  { icon: Star, value: '98%', label: 'Client Satisfaction' },
];

const features = [
  { icon: Rocket, title: 'Cutting-Edge Technology', desc: 'Work with the latest frameworks, tools, and industry-standard technologies used by top companies.' },
  { icon: Layers, title: 'Full-Stack Solutions', desc: 'End-to-end development expertise from frontend to backend and cloud infrastructure.' },
  { icon: Zap, title: 'Agile Development', desc: 'Modern development methodologies and best practices for scalable solutions.' },
  { icon: BarChart3, title: 'Data-Driven Approach', desc: 'Leverage analytics and insights to build intelligent, performance-optimized applications.' },
  { icon: Shield, title: 'Enterprise Security', desc: 'Industry-leading security practices and compliance standards for robust applications.' },
  { icon: Globe2, title: 'Scalable Architecture', desc: 'Build cloud-native, scalable systems that grow with your business needs.' }
];

export default function Home() {
  return (
    <main className={styles.main}>
      {/* Ambient blobs */}
      <div className={`${styles.blob} ${styles.blob1}`} />
      <div className={`${styles.blob} ${styles.blob2}`} />
      <div className={`${styles.blob} ${styles.blob3}`} />

      {/* ── Hero ─────────────────────────────────────── */}
      <section className={`${styles.section} ${styles.sectionHero}`}>
        <motion.div
          className={styles.heroContent}
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div variants={fadeUp} className={styles.badge}>
            <Sparkles size={16} style={{ marginRight: '0.5rem' }} />
            Enterprise Technology & Full-Stack Solutions
          </motion.div>

          <motion.h1 variants={fadeUp} className={styles.heroTitle}>
            Building Tomorrow's<br />
            <span className="text-gradient">Technology Solutions</span>
          </motion.h1>

          <motion.p variants={fadeUp} className={styles.heroDescription}>
            CodeHera delivers cutting-edge software development, cloud infrastructure, and AI solutions.
            We build robust, scalable systems that grow with your business needs.
          </motion.p>

          <motion.div variants={fadeUp} className={styles.heroButtons}>
            <Link href="/contact" className="btn btn-primary">
              Start Your Journey <ArrowRight size={18} style={{ marginLeft: '0.5rem' }} />
            </Link>
            <Link href="/services" className="btn glass">
              Our Services
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* ── Stats ────────────────────────────────────── */}
      <section className={styles.statsSection}>
        <div className={styles.statsInner}>
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className={styles.statCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className={styles.statIcon}>
                <stat.icon size={22} />
              </div>
              <span className={styles.statValue}>{stat.value}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Why CodeHera ─────────────────────────────── */}
      <section className={styles.section} style={{ paddingBottom: '2rem' }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUp}
        >
          <h2 className={styles.sectionTitle}>Why Choose CodeHera?</h2>
          <p className={styles.sectionDescription}>
            We deliver cutting-edge technology solutions and empower the next generation of developers.
          </p>
        </motion.div>

        <motion.div
          className={styles.grid3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
        >
          {features.map((feature, i) => (
            <motion.div key={i} variants={fadeUp} className={`glass-card ${styles.card}`}>
              <div className={styles.cardIcon}>
                <feature.icon size={22} />
              </div>
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{feature.title}</h3>
                <p className={styles.cardDesc}>{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── How We Work ──────────────────────────────── */}
      <section className={styles.section} style={{ paddingTop: '2rem', paddingBottom: '6rem' }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUp}
        >
          <h2 className={styles.sectionTitle}>How We Work</h2>
          <p className={styles.sectionDescription}>
            A simple, proven process that takes you from idea to production-ready product.
          </p>
        </motion.div>

        <motion.div
          className={styles.processGrid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer}
        >
          {[
            { step: '01', title: 'Discovery', desc: 'We understand your goals, audience, and technical requirements through in-depth consultation and analysis.' },
            { step: '02', title: 'Development', desc: 'Our engineers build robust, scalable solutions using modern frameworks and battle-tested best practices.' },
            { step: '03', title: 'Delivery', desc: 'We deploy to production, monitor performance, and provide ongoing support to ensure long-term success.' },
          ].map((item, i) => (
            <motion.div key={i} variants={fadeUp} className={styles.processCard}>
              <span className={styles.processStep}>{item.step}</span>
              <h3 className={styles.processTitle}>{item.title}</h3>
              <p className={styles.processDesc}>{item.desc}</p>
              {i < 2 && <div className={styles.processConnector} />}
            </motion.div>
          ))}
        </motion.div>
      </section>
    </main>
  );
}
