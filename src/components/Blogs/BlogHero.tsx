"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function BlogHero() {
  return (
    <section className="blog-hero" style={{
      padding: '100px 0 60px',
      backgroundColor: 'var(--bg-page)',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div style={{
            display: 'inline-block',
            padding: '8px 20px',
            backgroundColor: 'rgba(var(--accent-rgb), 0.1)',
            borderRadius: '100px',
            fontSize: '14px',
            fontWeight: 700,
            color: 'var(--accent)',
            marginBottom: '24px',
            textTransform: 'uppercase',
            letterSpacing: '2px'
          }}>
            Blogs & Insights
          </div>
          <h1 style={{
            fontSize: '64px',
            fontWeight: 800,
            color: 'var(--text-primary)',
            marginBottom: '20px',
            fontFamily: 'var(--font-heading)',
            lineHeight: 1.1
          }}>
            Educational <span style={{ color: 'var(--accent)' }}>Articles</span> & Resources
          </h1>
          <p style={{
            fontSize: '20px',
            color: 'var(--text-secondary)',
            maxWidth: '800px',
            margin: '0 auto',
            lineHeight: 1.7
          }}>
            Explore our collection of articles designed to support parents, teachers, and students in their spiritual and educational journey.
          </p>
        </motion.div>
      </div>

      <style jsx>{`
        @media (max-width: 767px) {
          .blog-hero {
            padding: 80px 0 40px !important;
          }
          .blog-hero div[style*="display: inline-block"] {
            margin: 0 auto 20px !important;
          }
        }
        @media (max-width: 576px) {
          .blog-hero { padding: 60px 0 30px !important; }
          .blog-hero h1 { font-size: 30px !important; }
          .blog-hero p { font-size: 15px !important; }
          .blog-hero .container { gap: 30px !important; }
        }
      `}</style>
    </section>
  );
}
