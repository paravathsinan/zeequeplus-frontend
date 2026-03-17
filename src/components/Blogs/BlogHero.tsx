"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function BlogHero() {
  return (
    <section className="blog-hero" style={{
      padding: '100px 0 60px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="container" style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '60px',
        alignItems: 'center'
      }}>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div style={{
            display: 'inline-block',
            padding: '8px 20px',
            backgroundColor: 'var(--accent)',
            borderRadius: '100px',
            color: '#fff',
            fontSize: '14px',
            fontWeight: 700,
            marginBottom: '24px',
            boxShadow: '0 4px 15px rgba(var(--accent-rgb), 0.3)'
          }}>
            LEARNING HUB
          </div>
          <h1 style={{
            fontSize: '56px',
            fontWeight: 800,
            lineHeight: 1.1,
            color: 'var(--text-primary)',
            marginBottom: '24px',
            fontFamily: 'var(--font-heading)'
          }}>
            Educational <span style={{ color: 'var(--accent)' }}>Articles</span> & Learning Resources
          </h1>
          <p style={{
            fontSize: '19px',
            color: 'var(--text-secondary)',
            lineHeight: 1.8,
            maxWidth: '540px'
          }}>
            A comprehensive, modular collection of articles that target key areas of learning. 
            Practical content to support parents, teachers, and students in their educational journey.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ position: 'relative' }}
        >
          <div style={{
            position: 'relative',
            borderRadius: '40px',
            overflow: 'hidden',
            boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
            border: '8px solid var(--glass-bg)',
            backdropFilter: 'blur(10px)'
          }}>
            <Image 
              src="/images/blog-hero.png" 
              alt="Student Learning" 
              width={600} 
              height={400} 
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
          {/* Decorative elements */}
          <div style={{
            position: 'absolute',
            top: '-20px',
            right: '-20px',
            width: '100px',
            height: '100px',
            background: 'var(--accent)',
            borderRadius: '50%',
            opacity: 0.1,
            filter: 'blur(40px)',
            zIndex: -1
          }} />
        </motion.div>
      </div>

      <style jsx>{`
        @media (max-width: 991px) {
          .blog-hero {
            padding: 80px 0 40px !important;
          }
          .blog-hero .container {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
            text-align: center !important;
          }
          .blog-hero h1 { 
            font-size: 38px !important; 
            margin-bottom: 20px !important;
          }
          .blog-hero p { 
            margin: 0 auto !important; 
            font-size: 17px !important;
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
