"use client";

import { motion } from "framer-motion";
import Image from "next/image";
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
    <section id="audience" style={{ padding: '100px 0', backgroundColor: 'var(--stats-bg)', overflow: 'hidden' }}>
      <div className="container">
        <div className="audience-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '60px',
          alignItems: 'center'
        }}>
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="audience-content"
          >
            <div style={{
              padding: '8px 16px',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '100px',
              color: 'var(--accent)',
              fontSize: '12px',
              fontWeight: 800,
              display: 'inline-block',
              marginBottom: '16px'
            }}>
              FOR EVERYONE
            </div>
            <h2 style={{
              fontSize: '48px',
              fontWeight: 800,
              marginBottom: '24px',
              lineHeight: 1.2,
              fontFamily: 'var(--font-heading)'
            }}>
              Who is this journey <span className="handwritten" style={{ color: 'var(--accent)' }}>intended</span> for?
            </h2>
            <p style={{
              fontSize: '18px',
              color: 'var(--text-secondary)',
              lineHeight: '1.6',
              marginBottom: '40px'
            }}>
              The Quran is a guide for all of humanity. Our platform is designed to accommodate 
              learners at every stage of their spiritual and linguistic development.
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '24px'
            }} className="audience-items">
              {targetAudience.map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ x: 10 }}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '16px'
                  }}
                >
                  <div style={{
                    minWidth: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(var(--accent-rgb), 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent)'
                  }}>
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '4px' }}>{item.title}</h4>
                    <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
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
                src="/images/audience-img.png" 
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
          }
        }
        @media (max-width: 576px) {
          h2 {
            font-size: 32px !important;
          }
          .audience-items {
            grid-template-columns: 1fr !important;
          }
          .glass-card {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
