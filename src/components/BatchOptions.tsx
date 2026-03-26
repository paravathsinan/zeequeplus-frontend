"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {  } from "lucide-react";

const batchPoints = [
  {
    title: "Flexible Timings",
    description: "Multiple timing options tailored to suit various school schedules across different time zones."
  },
  {
    title: "Class Segregation",
    description: "Separate batches optimized for different age groups and academic levels (Classes 1–10)."
  },
  {
    title: "Progressive Slots",
    description: "Regularly updated schedules to ensure students can progress to higher levels seamlessly."
  }
];

export default function BatchOptions() {
  return (
    <section className="batch-options" style={{
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
            Batch Options
          </div>

          <h2 style={{
            fontSize: '48px',
            fontWeight: 800,
            color: 'var(--text-primary)',
            lineHeight: 1.2,
            maxWidth: '800px',
            margin: '0 auto 32px'
          }}>
            Learning that <span style={{ color: 'var(--accent)' }}>Fits Your Life</span>.
          </h2>

          <p style={{
            fontSize: '19px',
            color: 'var(--text-secondary)',
            lineHeight: 1.7,
            maxWidth: '700px',
            margin: '0 auto'
          }}>
            We understand the demands of modern schooling. Our batch system is built for flexibility, ensuring that Quran learning remains a joyful part of your child's daily routine.
          </p>
        </motion.div>

        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '80px', alignItems: 'center'
        }}>
          {/* Illustration Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: -30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ position: 'relative' }}
          >
            {/* Same illustration code */}
            <div style={{
              position: 'relative',
              borderRadius: '40px',
              overflow: 'hidden',
              boxShadow: '0 30px 60px rgba(0,0,0,0.1)',
              border: '1px solid var(--glass-border)',
              background: 'var(--glass-bg)'
            }}>
              <Image
                src="/images/experience/batch-options.png"
                alt="Batch Options Illustration"
                width={700}
                height={700}
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
            
            {/* Visual glow */}
            <div style={{
              position: 'absolute',
              bottom: '-10%',
              left: '-10%',
              width: '100%',
              height: '100%',
              background: 'radial-gradient(circle, rgba(var(--accent-rgb), 0.08) 0%, transparent 70%)',
              filter: 'blur(40px)',
              zIndex: -1
            }} />
          </motion.div>

          {/* Content Side (Points only) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div style={{ display: 'grid', gap: '32px' }}>

              {batchPoints.map((point, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h4 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '8px' }}>
                    {point.title}
                  </h4>
                  <p style={{ fontSize: '16px', color: 'var(--text-secondary)', lineHeight: 1.6, opacity: 0.8 }}>
                    {point.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          .batch-options .container > div:last-child {
            grid-template-columns: 1fr !important;
            gap: 60px !important;
            text-align: center;
          }
          .batch-options div[style*="display: inline-block"] {
            margin: 0 auto 32px;
          }
           .batch-options div[style*="display: flex"] {
            justify-content: center;
          }
          h2 { font-size: 36px !important; }
        }
        @media (max-width: 767px) {
          .batch-options {
            padding: 50px 0 !important;
          }
          .batch-options .container > div:last-child {
            gap: 40px !important;
          }
          h2 {
            font-size: 32px !important;
            line-height: 1.2 !important;
          }
          .batch-options div[style*="gap: 24px"] {
             flex-direction: column !important;
             text-align: center !important;
             align-items: center !important;
             gap: 16px !important;
          }
          .batch-options h4 {
            font-size: 18px !important;
          }
          .batch-options p {
            font-size: 15px !important;
          }
        }
      `}</style>
    </section>
  );
}
