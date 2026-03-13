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
      <div className="container" style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1.2fr',
        gap: '100px',
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
          
          {/* Decorative floating element */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            style={{
              position: 'absolute',
              bottom: '-30px',
              right: '-30px',
              padding: '24px',
              backgroundColor: 'var(--card-bg)',
              backdropFilter: 'blur(10px)',
              borderRadius: '24px',
              border: '1px solid var(--glass-border)',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              zIndex: 2
            }}
          >
            <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--accent)', marginBottom: '8px' }}>Dream big</div>
            <p style={{ fontSize: '12px', color: 'var(--text-secondary)', maxWidth: '140px' }}>Nurturing children in the light of the Qur’an.</p>
          </motion.div>
        </motion.div>

        {/* Right Side: Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div style={{
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
          }}>
            Our Story
          </div>
          
          <h2 style={{
            fontSize: '56px',
            fontWeight: 800,
            color: 'var(--text-primary)',
            marginBottom: '32px',
            lineHeight: 1.1
          }}>
            ZeeQue started with a <span className="handwritten" style={{ color: 'var(--accent)' }}>simple dream</span>
          </h2>

          <div style={{
            fontSize: '19px',
            color: 'var(--text-secondary)',
            lineHeight: 1.8,
            marginBottom: '40px'
          }}>
            <p style={{ marginBottom: '24px' }}>
              To nurture children in the light of the Qur’an.
            </p>
            <p>
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
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{
                    color: 'var(--accent)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <CheckCircle2 size={24} />
                  </div>
                  <span style={{ fontSize: '17px', color: 'var(--text-primary)', fontWeight: 500 }}>{point}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          .container {
            grid-template-columns: 1fr !important;
            gap: 60px !important;
            text-align: center;
          }
          h2 {
            font-size: 40px !important;
          }
           .about-story div[style*="display: flex"] {
            justify-content: center;
          }
          p {
            margin-left: auto;
            margin-right: auto;
          }
        }
        @media (max-width: 576px) {
          .about-story {
            padding: 60px 0 !important;
          }
          h2 {
            font-size: 32px !important;
          }
          .about-story div[style*="padding: 40px"] {
            padding: 24px !important;
          }
          .about-story div[style*="bottom: -30px"] {
             display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
