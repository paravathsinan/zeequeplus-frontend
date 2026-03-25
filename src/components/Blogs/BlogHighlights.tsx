"use client";

import { motion } from "framer-motion";

export default function BlogHighlights() {
  return (
    <section className="blog-highlights" style={{ padding: '40px 0' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.03)',
            backdropFilter: 'blur(30px) saturate(180%)',
            WebkitBackdropFilter: 'blur(30px) saturate(180%)',
            padding: '60px 40px',
            borderRadius: '40px',
            textAlign: 'center',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 20px 50px rgba(0,0,0,0.2)'
          }}
        >
          <div style={{
            fontSize: '14px',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '2px',
            color: 'var(--accent)',
            marginBottom: '16px'
          }}>
            Knowledge for All
          </div>
          <h2 style={{
            fontSize: '42px',
            fontWeight: 800,
            color: 'var(--text-primary)',
            marginBottom: '20px',
            fontFamily: 'var(--font-heading)'
          }}>
            Educational Articles <br />
            <span style={{ color: 'rgba(var(--text-primary-rgb), 0.7)' }}>for Parents, Students & Educators</span>
          </h2>
          <p style={{
            fontSize: '18px',
            color: 'var(--text-secondary)',
            maxWidth: '800px',
            margin: '0 auto',
            lineHeight: 1.6
          }}>
            Unlock practical insights and evidence-based strategies from our curated collection of expert articles, 
            designed to make home-learning easier and more effective for every child.
          </p>

          {/* Decorative Glow */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '100%',
            height: '100%',
            background: 'radial-gradient(circle at center, rgba(var(--accent-rgb), 0.05) 0%, transparent 70%)',
            zIndex: -1
          }} />
        </motion.div>
      </div>
      <style jsx>{`
        .blog-highlights div[style*="background-color"] {
          box-shadow: 0 20px 50px rgba(0,0,0,0.3) !important;
        }
        :global([data-theme='light']) .blog-highlights div[style*="background-color"] {
          background-color: rgba(255, 255, 255, 0.6) !important;
          border: 1px solid rgba(255, 255, 255, 0.8) !important;
          box-shadow: 0 20px 50px rgba(0,0,0,0.05) !important;
        }
        @media (max-width: 1024px) {
          h2 { font-size: 36px !important; }
        }
        @media (max-width: 576px) {
          .blog-highlights div[style*="padding: 60px"] {
             padding: 30px 20px !important;
          }
           h2 { font-size: 28px !important; }
           p { font-size: 16px !important; }
        }
      `}</style>
    </section>
  );
}
