'use client';

import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { FormEvent, useState } from 'react';
import { submitViaWeb3Forms } from '@/lib/web3forms';
import styles from './careers.module.css';

export default function CareersPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage('');

    try {
      const result = await submitViaWeb3Forms({
        type: 'internship',
        name,
        email,
        message,
      });
      if (!result.ok) {
        setStatusMessage(result.error ?? 'Unable to send your application right now.');
        return;
      }

      setName('');
      setEmail('');
      setMessage('');
      setStatusMessage('Thanks! Your application was sent to HR.');
    } catch {
      setStatusMessage('Unable to send your application right now.');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="container py-24 min-h-screen pt-40">
      <motion.section
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={styles.hero}
      >
        <h1 className="text-gradient" style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-0.02em' }}>
          Careers at CodeHera
        </h1>
        <p className="text-muted" style={{ fontSize: '1.15rem', maxWidth: '700px', margin: '0 auto' }}>
          We review applications continuously. If you are interested in internships, submit your details below.
        </p>
      </motion.section>

      <section className={styles.internships}>
        <div className={`glass-card ${styles.internshipCard}`}>
          <h2 className={styles.sectionTitle}>Internships</h2>
          <p className="text-muted" style={{ fontSize: '1.05rem', lineHeight: 1.8, maxWidth: 740, marginBottom: '1.5rem' }}>
            Internship opportunities are reviewed periodically. If you are interested, share your profile and message below. Our HR team will review and respond.
          </p>

          <form className={styles.form} onSubmit={onSubmit}>
            <div className={styles.inputGrid}>
              <label className={styles.label}>
                Name
                <input
                  className={styles.input}
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                required
                />
              </label>

              <label className={styles.label}>
                Email
                <input
                  className={styles.input}
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                />
              </label>
            </div>

            <label className={styles.label}>
              Message
              <textarea
                className={styles.textarea}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="What would you like to work on during your internship?"
                rows={5}
                required
              />
            </label>

            {statusMessage && (
              <p className="text-muted" style={{ marginTop: '-0.25rem' }}>
                {statusMessage}
              </p>
            )}

            <div className={styles.formActions}>
              <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send to HR'} <Mail size={16} style={{ marginLeft: '0.5rem' }} />
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
