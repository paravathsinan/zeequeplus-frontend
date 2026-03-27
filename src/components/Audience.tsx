"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Users, GraduationCap, Heart, BookOpen } from "lucide-react";

const targetAudience = [
  {
    title: "School Students",
    desc: "Designed for Class 1-10 students to balance school and Quranic studies.",
    icon: GraduationCap
  },
  {
    title: "Guided Learning",
    desc: "Ideal for parents seeking consistent, systematic Quranic education.",
    icon: Users
  },
  {
    title: "Life Skills",
    desc: "Focus on Islamic manners, daily Adkar, and value-based lessons.",
    icon: Heart
  },
  {
    title: "All Skill Levels",
    desc: "From Arabic basics to advanced Tajweed and Hifz.",
    icon: BookOpen
  }
];

export default function Audience() {
  return (
    <section id="audience" style={{ 
      padding: '50px 0', 
      backgroundColor: 'var(--stats-bg)', 
      overflow: 'hidden',
      borderBottomLeftRadius: '50% 40px',
      borderBottomRightRadius: '50% 40px'
    }}>
      <div className="container">
        {/* Centered Header */}
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              padding: '8px 20px',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '100px',
              color: 'var(--accent)',
              fontSize: '13px',
              fontWeight: 800,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '24px',
              letterSpacing: '1px'
            }}
          >
            For Everyone
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              fontSize: '52px',
              fontWeight: 800,
              marginBottom: '24px',
              lineHeight: 1.1,
              fontFamily: 'var(--font-heading)',
              color: 'var(--text-primary)'
            }}
          >
            Who is this journey <span className="handwritten" style={{ color: 'var(--accent)' }}>intended</span> for?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontSize: '19px',
              color: 'var(--text-secondary)',
              lineHeight: '1.7',
              maxWidth: '800px',
              margin: '0 auto'
            }}
          >
            The Quran is a guide for all of humanity. Our platform is designed to accommodate 
            learners at every stage of their spiritual and linguistic development.
          </motion.p>
        </div>

        <div className="audience-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'center'
        }}>
          {/* Left: Items */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="audience-content"
          >
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '32px',
              marginBottom: '40px'
            }} className="audience-items">
              {targetAudience.map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -5 }}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    gap: '16px',
                    padding: '24px',
                    backgroundColor: 'var(--card-bg)',
                    borderRadius: '24px',
                    border: '1px solid var(--glass-border)',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '14px',
                    backgroundColor: 'rgba(var(--accent-rgb), 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent)',
                    border: '1px solid rgba(var(--accent-rgb), 0.2)'
                  }}>
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '18px', fontWeight: 800, marginBottom: '8px', color: 'var(--text-primary)' }}>{item.title}</h4>
                    <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Link href="/about">
              <button className="btn btn-primary" style={{ padding: '16px 36px', borderRadius: '100px', fontSize: '17px', fontWeight: 700 }}>
                Learn More
              </button>
            </Link>
          </motion.div>

          {/* Right: Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ position: 'relative' }}
            className="audience-image"
          >
            {/* 3D-like Shape Backdrop */}
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '120%',
              height: '120%',
              background: 'radial-gradient(circle, rgba(var(--accent-rgb), 0.15) 0%, transparent 70%)',
              zIndex: -1
            }} />
            
            <div style={{
              position: 'relative',
              borderRadius: '40px',
              overflow: 'hidden',
              boxShadow: '0 30px 60px rgba(0,0,0,0.3)',
              border: '1px solid rgba(255,255,255,0.1)'
            }}>
              <Image 
                src="/images/site/audience-img.png" 
                alt="Diverse people learning" 
                width={800}
                height={600}
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>

            {/* Floating Decorative Element */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              style={{
                position: 'absolute',
                top: '-20px',
                right: '-20px',
                padding: '20px',
                borderRadius: '20px',
                background: 'rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                boxShadow: '0 15px 30px rgba(0,0,0,0.2)'
              }}
              className="glass-card"
            >
              <Users size={32} color="var(--accent)" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 992px) {
          .audience-grid {
            grid-template-columns: 1fr !important;
            gap: 60px !important;
          }
          .audience-content {
            text-align: center;
          }
          .audience-items {
            text-align: left;
            max-width: 600px;
            margin: 0 auto;
          }
          .audience-image {
            max-width: 600px;
            margin: 0 auto;
            order: -1; /* Image on top on mobile */
          }
        }
        @media (max-width: 576px) {
          h2 {
            font-size: 32px !important;
            line-height: 1.2 !important;
          }
          .audience-items {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
          .glass-card {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
