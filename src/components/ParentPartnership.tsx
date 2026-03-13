"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ClipboardCheck, TrendingUp, HeartPulse, Award } from "lucide-react";

const partnershipPoints = [
  {
    title: "Attendance & Consistency",
    description: "Monitoring regularity to ensure your child stays on track with their learning goals.",
    icon: <ClipboardCheck size={24} />,
    color: "#4FD1C5"
  },
  {
    title: "Lesson Progress",
    description: "Detailed tracking of every lesson completed, from single letters to full Surahs.",
    icon: <TrendingUp size={24} />,
    color: "#63B3ED"
  },
  {
    title: "Growth & Feedback",
    description: "Highlighting strengths and specific areas to improve for a tailormade experience.",
    icon: <HeartPulse size={24} />,
    color: "#F687B3"
  },
  {
    title: "Assessments & Certifications",
    description: "Regular evaluations and course completion certificates to celebrate and validate achievements.",
    icon: <Award size={24} />,
    color: "#F6AD55"
  }
];

export default function ParentPartnership() {
  return (
    <section 
      className="parent-partnership" 
      style={{
        padding: '120px 0',
        backgroundColor: 'var(--bg-page)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div className="container">
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '80px', alignItems: 'center'
        }}>
          {/* Illustration Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ position: 'relative' }}
          >
            <div style={{
              position: 'relative',
              borderRadius: '40px',
              overflow: 'hidden',
              boxShadow: '0 30px 60px rgba(0,0,0,0.15)',
              border: '1px solid var(--glass-border)'
            }}>
              <Image
                src="/images/about/parent-partnership.png"
                alt="Parent Partnership"
                width={800}
                height={600}
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
            
            {/* Minimal Dashboard Card Preview */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: true }}
              style={{
                position: 'absolute',
                bottom: '-40px',
                right: '-40px',
                padding: '24px 32px',
                backgroundColor: 'var(--glass-bg)',
                backdropFilter: 'blur(16px)',
                borderRadius: '24px',
                border: '1px solid var(--glass-border)',
                boxShadow: '0 15px 35px rgba(0,0,0,0.1)',
                zIndex: 2,
                maxWidth: '240px'
              }}
            >
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '12px' }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#4FD1C5' }} />
                <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-primary)' }}>Progress Report</span>
              </div>
              <div style={{ height: '8px', width: '100%', backgroundColor: 'rgba(var(--accent-rgb), 0.1)', borderRadius: '4px', overflow: 'hidden' }}>
                <div style={{ height: '100%', width: '85%', backgroundColor: 'var(--accent)' }} />
              </div>
              <p style={{ fontSize: '11px', color: 'var(--text-secondary)', marginTop: '8px', opacity: 0.7 }}>
                Last updated: Just now
              </p>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div style={{
              display: 'inline-block',
              padding: '8px 20px',
              backgroundColor: 'rgba(var(--accent-rgb), 0.1)',
              borderRadius: '100px',
              fontSize: '14px',
              fontWeight: 700,
              color: 'var(--accent)',
              marginBottom: '32px',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}>
              Primary Partners
            </div>

            <h2 style={{
              fontSize: '48px',
              fontWeight: 800,
              color: 'var(--text-primary)',
              lineHeight: 1.2,
              marginBottom: '32px'
            }}>
              Nurturing Growth <span style={{ color: 'var(--accent)' }}>Together</span>.
            </h2>

            <p style={{
              fontSize: '19px',
              color: 'var(--text-secondary)',
              lineHeight: 1.7,
              marginBottom: '48px'
            }}>
              At ZeeQue Plus, we believe parents are the foundation of a child's learning. We keep you connected at every step of their spiritual and academic journey.
            </p>

            <div style={{ display: 'grid', gap: '24px' }}>
              {partnershipPoints.map((point, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  style={{
                    padding: '28px',
                    backgroundColor: 'var(--glass-bg)',
                    borderRadius: '24px',
                    border: '1px solid var(--glass-border)',
                    display: 'flex',
                    gap: '20px',
                    alignItems: 'center'
                  }}
                >
                  <div style={{
                    width: '52px',
                    height: '52px',
                    backgroundColor: `${point.color}15`,
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: point.color,
                    flexShrink: 0
                  }}>
                    {point.icon}
                  </div>
                  <div>
                    <h4 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '4px' }}>
                      {point.title}
                    </h4>
                    <p style={{ fontSize: '15px', color: 'var(--text-secondary)', opacity: 0.8 }}>
                      {point.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          .container > div:first-child {
            grid-template-columns: 1fr !important;
            gap: 60px !important;
            text-align: center;
          }
          h2 { font-size: 38px !important; }
          .parent-partnership div[style*="display: inline-block"] {
            margin: 0 auto 32px;
          }
        }
        @media (max-width: 576px) {
          .parent-partnership {
            padding: 40px 0 !important;
          }
          h2 {
            font-size: 32px !important;
          }
          .parent-partnership div[style*="bottom: -40px"] {
             display: none !important;
          }
          .parent-partnership div[style*="padding: 28px"] {
             padding: 20px !important;
             flex-direction: column !important;
             text-align: center !important;
          }
        }
      `}</style>
    </section>
  );
}
