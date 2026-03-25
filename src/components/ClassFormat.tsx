"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Monitor, Users, Home } from "lucide-react";

const formatPoints = [
  {
    title: "Live Online Classes",
    description: "Conducted through secure online platforms, in small batches for better attention.",
    icon: <Monitor size={24} />,
    color: "#4FD1C5"
  },
  {
    title: "Interactive Sessions",
    description: "Students recite individually, get corrections, and participate in Q&A.",
    icon: <Users size={24} />,
    color: "#63B3ED"
  },
  {
    title: "Home Practice",
    description: "Simple daily practice tasks are given for revision between classes.",
    icon: <Home size={24} />,
    color: "#F6AD55"
  }
];

export default function ClassFormat() {
  return (
    <section className="class-format" style={{
      padding: '80px 0',
      backgroundColor: 'var(--bg-page)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="container">
        {/* Centered Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '60px' }}
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
            letterSpacing: '1px'
          }}>
            Class Format
          </div>

          <h2 style={{
            fontSize: '48px',
            fontWeight: 800,
            color: 'var(--text-primary)',
            lineHeight: 1.2,
            maxWidth: '800px',
            margin: '0 auto 32px'
          }}>
            A Dynamic <span style={{ color: 'var(--accent)' }}>Virtual Classroom</span> Environment.
          </h2>

          <p style={{
            fontSize: '19px',
            color: 'var(--text-secondary)',
            lineHeight: 1.7,
            maxWidth: '700px',
            margin: '0 auto'
          }}>
            We’ve designed our class format to be as effective and engaging as physical learning, using modern technology to bring the Qur’an to your home.
          </p>
        </motion.div>

        <div style={{
          display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '80px', alignItems: 'center'
        }}>
          {/* Content Side (Points only) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div style={{ display: 'grid', gap: '32px' }}>

              {formatPoints.map((point, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  style={{
                    display: 'flex',
                    gap: '24px',
                    alignItems: 'flex-start'
                  }}
                >
                  <div style={{
                    width: '52px',
                    height: '52px',
                    backgroundColor: 'var(--glass-bg)',
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: point.color,
                    border: '1px solid var(--glass-border)',
                    flexShrink: 0
                  }}>
                    {point.icon}
                  </div>
                  <div>
                    <h4 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '8px' }}>
                      {point.title}
                    </h4>
                    <p style={{ fontSize: '16px', color: 'var(--text-secondary)', lineHeight: 1.6, opacity: 0.8 }}>
                      {point.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Illustration Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ position: 'relative' }}
          >
            <div style={{
              position: 'relative',
              borderRadius: '40px',
              overflow: 'hidden',
              boxShadow: '0 30px 60px rgba(0,0,0,0.15)',
              border: '1px solid var(--glass-border)',
              background: 'var(--glass-bg)'
            }}>
              <Image
                src="/images/experience/class-format.png"
                alt="Class Format Illustration"
                width={700}
                height={700}
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>

            {/* Soft decorative light */}
            <div style={{
              position: 'absolute',
              top: '-10%',
              right: '-10%',
              width: '100%',
              height: '100%',
              background: 'radial-gradient(circle, rgba(var(--accent-rgb), 0.1) 0%, transparent 70%)',
              filter: 'blur(50px)',
              zIndex: -1
            }} />
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          .class-format .container > div:last-child {
            grid-template-columns: 1fr !important;
            gap: 60px !important;
            text-align: center;
          }
          .class-format div[style*="display: inline-block"] {
            margin: 0 auto 32px;
          }
           .class-format div[style*="display: flex"] {
            justify-content: center;
          }
          h2 { font-size: 36px !important; }
        }
        @media (max-width: 767px) {
          .class-format {
            padding: 50px 0 !important;
          }
          .class-format .container > div:last-child {
            gap: 40px !important;
          }
          h2 {
            font-size: 32px !important;
            line-height: 1.2 !important;
          }
          .class-format div[style*="gap: 24px"] {
             flex-direction: column !important;
             text-align: center !important;
             align-items: center !important;
             gap: 16px !important;
          }
          .class-format h4 {
            font-size: 18px !important;
          }
          .class-format p {
            font-size: 15px !important;
          }
        }
      `}</style>
    </section>
  );
}
