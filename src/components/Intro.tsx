"use client";

import { motion } from "framer-motion";
import Image from "next/image";
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
          gridTemplateColumns: '1fr 1fr',
          gap: '60px',
          alignItems: 'center'
        }}>
          {/* Left Side: Premium Image Container */}
          <div className="intro-visual" style={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            {/* Background Glows */}
            <div style={{
              position: 'absolute',
              width: '140%',
              height: '140%',
              background: 'radial-gradient(circle, rgba(var(--accent-rgb), 0.1) 0%, transparent 70%)',
              zIndex: 0,
              pointerEvents: 'none'
            }} />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '520px',
                zIndex: 5 // Lower than navbar's 1000+
              }}
            >
              <div style={{
                position: 'relative',
                borderRadius: '60px 20px 60px 20px',
                overflow: 'hidden',
                aspectRatio: '0.9',
                boxShadow: '0 40px 100px rgba(0,0,0,0.2)',
                border: '12px solid var(--glass-bg)',
                backdropFilter: 'blur(10px)'
              }}>
                <Image 
                  src="/images/intro-img.png" 
                  alt="Premium Learning Experience" 
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </motion.div>
          </div>

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
          .intro-visual {
            max-width: 600px;
            margin: 0 auto;
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
