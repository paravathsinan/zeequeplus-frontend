"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from 'lucide-react';

export default function Intro() {
  return (
    <section className="intro" style={{ 
      padding: '100px 0',
      backgroundColor: 'var(--bg-page)',
      overflow: 'hidden'
    }}>
      <div className="container">
        <div className="intro-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '60px',
          alignItems: 'center'
        }}>


          {/* Right Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="intro-content"
          >
            <div style={{
              padding: '8px 16px',
              backgroundColor: 'rgba(var(--accent-rgb), 0.1)',
              borderRadius: '100px',
              color: 'var(--accent)',
              fontSize: '12px',
              fontWeight: 800,
              display: 'inline-block',
              marginBottom: '16px'
            }}>
              WHO WE ARE
            </div>
            
            <h2 style={{
              fontSize: '48px',
              fontWeight: 800,
              color: 'var(--text-primary)',
              lineHeight: 1.2,
              marginBottom: '24px',
              fontFamily: 'var(--font-heading)'
            }}>
              Nurturing Hearts with the Divine Wisdom of the <span className="handwritten">Quran</span>
            </h2>

            <p style={{
              fontSize: '18px',
              color: 'var(--text-secondary)',
              lineHeight: 1.6,
              marginBottom: '32px'
            }}>
              We provide a structured and engaging environment for students of all ages 
               to learn Quran recitation, memorization, and Arabic. Our mission is to 
               foster a deep, lifelong connection with the holy words through 
               personalized mentorship and modern teaching techniques.
            </p>

            <ul style={{ marginBottom: '40px' }} className="intro-list">
              {[
                "Personalized 1-on-1 Mentorship",
                "Certified and Experienced Tutors",
                "Flexible Scheduling to Fit Your Life",
                "Comprehensive Curriculum for All Ages"
              ].map((item, idx) => (
                <li key={idx} style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '12px',
                  marginBottom: '12px',
                  color: 'var(--text-primary)',
                  fontWeight: 600
                }}>
                  <div style={{ color: 'var(--accent)' }}>
                    <CheckCircle2 size={20} />
                  </div>
                  {item}
                </li>
              ))}
            </ul>

            <button className="btn btn-primary" style={{ padding: '14px 28px', borderRadius: '100px' }}>
              Learn More About Us
            </button>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 992px) {
          .intro-grid {
            grid-template-columns: 1fr !important;
            gap: 60px !important;
          }
          .intro-content {
            text-align: center;
          }
          .intro-list {
            display: inline-block;
            text-align: left;
          }
        }
        @media (max-width: 576px) {
          h2 {
            font-size: 32px !important;
          }
          .intro-badge {
            transform: scale(0.8);
            right: 0 !important;
          }
        }
      `}</style>
    </section>
  );
}
