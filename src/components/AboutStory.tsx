"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const storyPoints = [
  "Regular online Qur’an classes",
  "Qualified teachers",
  "A syllabus designed specifically for Classes 1–10"
];

export default function AboutStory() {
  return (
    <section className="about-story" style={{
      padding: '70px 0',
      backgroundColor: 'var(--bg-page)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="container">
        {/* Centered Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{
              display: 'inline-block',
              padding: '8px 16px',
              backgroundColor: 'rgba(var(--accent-rgb, 249, 204, 11), 0.1)',
              borderRadius: '100px',
              fontSize: '14px',
              fontWeight: 700,
              color: 'var(--accent)',
              marginBottom: '24px',
              letterSpacing: '1px',
              textTransform: 'uppercase'
            }}
          >
            Our Story
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            style={{
              fontSize: '56px',
              fontWeight: 800,
              color: 'var(--text-primary)',
              lineHeight: 1.1,
              maxWidth: '900px',
              margin: '0 auto'
            }}
          >
            ZeeQue started with a <span className="handwritten" style={{ color: 'var(--accent)' }}>simple dream</span>
          </motion.h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.2fr',
          gap: '80px',
          alignItems: 'center'
        }}>
          {/* Left Side: Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: -30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ position: 'relative' }}
          >
            <div style={{
              position: 'relative',
              borderRadius: '50px',
              overflow: 'hidden',
              boxShadow: '0 30px 60px rgba(0,0,0,0.15)',
              border: '1px solid var(--glass-border)',
              background: 'var(--glass-bg)'
            }}>
              <Image
                src="/images/about/story-dream.png"
                alt="Our Story - Dream Illustration"
                width={700}
                height={700}
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  objectFit: 'cover',
                  transform: 'scale(1.02)'
                }}
                priority
              />
            </div>
          </motion.div>

          {/* Right Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div style={{
              color: 'var(--text-secondary)',
              lineHeight: 1.7,
              marginBottom: '48px'
            }}>
              <p style={{ 
                marginBottom: '20px', 
                fontSize: '22px', 
                fontWeight: 600, 
                color: 'var(--text-primary)',
                opacity: 0.9 
              }}>
                To nurture children in the light of the Qur’an.
              </p>
              <p style={{ fontSize: '18px', opacity: 0.85 }}>
                From preschool initiatives like Zahratul Qur’an to today’s structured online programs, we’ve always believed that Qur’an learning should begin early, be systematic, joyful, and value-centered.
              </p>
            </div>

            <div style={{
              backgroundColor: 'var(--glass-bg)',
              padding: '40px',
              borderRadius: '32px',
              border: '1px solid var(--glass-border)'
            }}>
              <h4 style={{ 
                fontSize: '18px', 
                fontWeight: 700, 
                marginBottom: '24px',
                color: 'var(--text-primary)'
              }}>
                ZeeQue Plus is our answer to the needs of today’s busy, school-going children:
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {storyPoints.map((point, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                    <div style={{
                      color: 'var(--accent)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      marginTop: '2px'
                    }}>
                      <CheckCircle2 size={24} />
                    </div>
                    <span style={{ fontSize: '17px', color: 'var(--text-primary)', fontWeight: 500, lineHeight: 1.5 }}>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          .about-story .container > div:last-of-type {
            grid-template-columns: 1fr !important;
            gap: 60px !important;
            text-align: center;
          }
          h2 {
            font-size: 40px !important;
          }
          .about-story div[style*="flex-direction: column"] {
            align-items: center;
          }
          .about-story div[style*="flex-direction: column"] > div {
            text-align: left;
            width: 100%;
            max-width: 500px;
          }
          p {
            margin-left: auto;
            margin-right: auto;
          }
        }
        @media (max-width: 767px) {
          .about-story {
            padding: 50px 0 !important;
          }
          .about-story .container > div:last-of-type {
            gap: 40px !important;
          }
          h2 {
            font-size: 32px !important;
            line-height: 1.2 !important;
          }
          .about-story div[style*="padding: 40px"] {
            padding: 30px 20px !important;
            border-radius: 24px !important;
          }
          .about-story h4 {
            font-size: 17px !important;
            line-height: 1.4 !important;
          }
        }
      `}</style>
    </section>
  );
}
