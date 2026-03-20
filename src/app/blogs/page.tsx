'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Search, Calendar, Tag } from 'lucide-react';
import styles from './blogs.module.css';
import Link from 'next/link';
import { posts } from './posts';

const categories = ['All', 'AI Research', 'Engineering', 'Security', 'Design', 'Cloud'];

// Blog post data is kept in a separate module so server routes can import it.

export default function BlogsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = posts.find(p => p.featured);
  const remainingPosts = filteredPosts.filter(p => p.id !== featuredPost?.id);

  return (
    <div className="container py-24 min-h-screen pt-40">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ textAlign: 'center', marginBottom: '4rem' }}
      >
        <span className="badge" style={{ marginBottom: '1.5rem' }}>Our Journal</span>
        <h1 className="text-gradient" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, marginBottom: '1.5rem', letterSpacing: '-0.03em' }}>
          CodeHera Insights
        </h1>
        <p className="text-muted" style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
          Exploring the frontiers of engineering, AI research, and high-performance system design.
        </p>
      </motion.div>

      {/* Featured Post */}
      {!searchQuery && activeCategory === 'All' && featuredPost && (
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          className={`glass-card ${styles.featured}`}
        >
          <div className={styles.featuredImageWrapper}>
             {/* eslint-disable-next-line @next/next/no-img-element */}
             <img src={featuredPost.image} alt={featuredPost.title} className={styles.featuredImage} />
          </div>
          <div className={styles.featuredContent}>
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
              <span className="badge-primary">{featuredPost.category}</span>
              <span className="text-muted" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem' }}>
                <Calendar size={14} /> {featuredPost.date}
              </span>
            </div>
            <h2 style={{ fontSize: '2.2rem', marginBottom: '1.5rem', lineHeight: 1.2 }}>{featuredPost.title}</h2>
            <p className="text-muted" style={{ fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '2rem' }}>
              {featuredPost.excerpt}
            </p>
            <Link href={`/blogs/${featuredPost.id}`} className={styles.readMore} style={{ fontSize: '1.1rem' }}>
              Read Full Article <ArrowRight size={20} />
            </Link>
          </div>
        </motion.div>
      )}

      {/* Controls */}
      <div className={styles.controls}>
        <div className={styles.searchWrapper}>
          <Search size={18} className={styles.searchIcon} />
          <input 
            type="text" 
            placeholder="Search articles..." 
            className={styles.searchInput}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className={styles.categories}>
          {categories.map(cat => (
            <button
              key={cat}
              className={`${styles.categoryBtn} ${activeCategory === cat ? styles.categoryBtnActive : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className={styles.grid}>
        <AnimatePresence mode="popLayout">
          {remainingPosts.map((post, idx) => (
            <motion.div
              key={post.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className={`glass-card ${styles.card}`}
            >
              <div className={styles.imageWrapper}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={post.image} alt={post.title} className={styles.image} />
              </div>
              <div className={styles.content}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--accent-primary)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {post.category}
                  </span>
                  <span className="text-muted" style={{ fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    <Calendar size={12} /> {post.date}
                  </span>
                </div>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', lineHeight: 1.4, height: '3.9rem', overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
                  {post.title}
                </h3>
                <p className="text-muted" style={{ lineHeight: 1.6, flex: 1, fontSize: '0.95rem' }}>
                  {post.excerpt}
                </p>
                
                <Link href={`/blogs/${post.id}`} className={styles.readMore}>
                  Read Full Article <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {remainingPosts.length === 0 && (
        <div style={{ textAlign: 'center', padding: '4rem 0' }}>
          <Tag size={48} style={{ color: 'var(--accent-primary)', marginBottom: '1rem', opacity: 0.5 }} />
          <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>No articles found</h3>
          <p className="text-muted">Try adjusting your search or category filters.</p>
        </div>
      )}
    </div>
  );
}
