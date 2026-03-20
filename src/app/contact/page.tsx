'use client';

import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';
import { FormEvent, useState } from 'react';
import { submitViaWeb3Forms } from '@/lib/web3forms';
import styles from './contact.module.css';

export default function ContactPage() {
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
        type: 'contact',
        name,
        email,
        message,
      });
      if (!result.ok) {
        setStatusMessage(result.error ?? 'Unable to send your message right now.');
        return;
      }

      setName('');
      setEmail('');
      setMessage('');
      setStatusMessage('Thanks! Your message was sent successfully.');
    } catch {
      setStatusMessage('Unable to send your message right now.');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="container py-24 min-h-screen pt-40">
      <div className={styles.grid}>
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-gradient" style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-0.02em' }}>
            Get in Touch
          </h1>
          <p className="text-muted" style={{ fontSize: '1.2rem', maxWidth: '500px', marginBottom: '3rem' }}>
            Ready to architect the future? Connect with our engineering teams to discuss how CodeHera can scale your systems to the next level.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <div className={styles.iconWrapper}>
                <Mail size={24} color="var(--accent-secondary)" />
              </div>
              <div>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>Contact Email</h4>
                <p className="text-muted">contact@codehera.in</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card" style={{ padding: '3rem' }}
        >
          <form className={styles.form} onSubmit={onSubmit}>
            <div className={styles.inputGroup}>
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                placeholder="John Doe"
                className={styles.input}
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            
            <div className={styles.inputGroup}>
              <label htmlFor="email">Work Email</label>
              <input
                type="email"
                id="email"
                placeholder="john@company.com"
                className={styles.input}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="message">How can we help?</label>
              <textarea
                id="message"
                rows={4}
                placeholder="Tell us about your architectural needs..."
                className={styles.input}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>

            {statusMessage && (
              <p className="text-muted" style={{ marginTop: '0.5rem' }}>
                {statusMessage}
              </p>
            )}

            <button
              type="submit"
              className="btn btn-primary"
              style={{ width: '100%', marginTop: '1rem', padding: '1rem' }}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'} <Send size={18} style={{ marginLeft: '0.5rem' }} />
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
