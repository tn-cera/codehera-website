'use client';

import Link from 'next/link';
import { Mail, Linkedin, Instagram, Twitter } from 'lucide-react';
import { useEffect, useState } from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  // Avoid hydration mismatches caused by rendering time-dependent values on the server.
  const [year, setYear] = useState<string>('');

  useEffect(() => {
    setYear(String(new Date().getFullYear()));
  }, []);

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Careers', path: '/careers' },
    { name: 'Blogs', path: '/blogs' },
    { name: 'Contact', path: '/contact' },
  ];

  /** Labels map to service section anchors on /services */
  const services: { label: string; href: string }[] = [
    { label: 'Web Development', href: '/services#web-platforms' },
    { label: 'Data Science', href: '/services#big-data' },
    { label: 'Machine Learning', href: '/services#ai-development' },
    { label: 'Cloud Computing', href: '/services#cloud-engineering' },
    { label: 'Cybersecurity', href: '/services#cybersecurity' },
    { label: 'Mobile Development', href: '/services#web-platforms' },
  ];

  const socials = [
    { icon: Linkedin, href: 'https://www.linkedin.com/company/code-hera', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/codehera', label: 'Instagram' },
    { icon: Twitter, href: 'https://twitter.com/codehera', label: 'Twitter' },
  ];

  return (
    <footer className={styles.footer}>
      {/* Top accent line */}
      <div className={styles.topAccent} />

      <div className={styles.container}>
        {/* Main grid */}
        <div className={styles.grid}>
          {/* Brand column */}
          <div className={styles.brandCol}>
            <Link href="/" className={styles.logoLink}>
              <img
                src="/codehera-logo.png"
                alt="CodeHera"
                className={styles.footerLogo}
              />
            </Link>
            <p className={styles.brandDesc}>
              Engineering the future, one solution at a time. CodeHera combines cutting-edge technology with human expertise.
            </p>
            {/* Social links */}
            <div className={styles.socials}>
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialIcon}
                  aria-label={s.label}
                >
                  <s.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className={styles.linksCol}>
            <h4 className={styles.colHeading}>Quick Links</h4>
            <ul className={styles.linkList}>
              {quickLinks.map((l) => (
                <li key={l.path}>
                  <Link href={l.path} className={styles.footerLink}>{l.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className={styles.linksCol}>
            <h4 className={styles.colHeading}>Services</h4>
            <ul className={styles.linkList}>
              {services.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className={styles.footerLink}>
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className={styles.linksCol}>
            <h4 className={styles.colHeading}>Get In Touch</h4>
            <div className={styles.contactItem}>
              <Mail size={16} color="var(--accent-primary)" />
              <a href="mailto:contact@codehera.in" className={styles.footerLink}>contact@codehera.in</a>
            </div>
            <div className={styles.newsletter}>
              <p className={styles.newsletterText}>Stay updated with the latest in tech</p>
              <div className={styles.newsletterForm}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className={styles.newsletterInput}
                />
                <button className={styles.newsletterBtn}>Subscribe</button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            © {year || '—'} CodeHera Technologies. All rights reserved.
          </p>
          <div className={styles.legalLinks}>
            <span className={styles.footerText}>Privacy Policy</span>
            <span className={styles.divider}>·</span>
            <span className={styles.footerText}>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
