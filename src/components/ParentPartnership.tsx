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
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 80px' }}>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            style={{
              display: 'inline-block',
              padding: '8px 20px',
              backgroundColor: 'rgba(var(--accent-rgb), 0.1)',
              borderRadius: '100px',
              fontSize: '14px',
              fontWeight: 700,
              color: 'var(--accent)',
              marginBottom: '24px',
              letterSpacing: '1px',
              border: '1px solid rgba(var(--accent-rgb), 0.2)'
            }}
          >
            Primary Partners
          </motion.div>

          <h2 style={{
            fontSize: '56px',
            fontWeight: 800,
            color: 'var(--text-primary)',
            lineHeight: 1.1,
            marginBottom: '32px',
            fontFamily: 'var(--font-heading)'
          }}>
            Nurturing Growth <span style={{ color: 'var(--accent)' }}>Together</span>.
          </h2>

          <p style={{
            fontSize: '20px',
            color: 'var(--text-secondary)',
            lineHeight: 1.7,
            opacity: 0.8
          }}>
            At ZeeQue Plus, we believe parents are the foundation of a child's learning. We keep you connected at every step of their spiritual and academic journey.
          </p>
        </div>

        {/* Desktop Milestone Trail (Hidden on Mobile) */}
        <div className="desktop-timeline" style={{ position: 'relative', maxWidth: '1000px', margin: '0 auto', padding: '40px 0' }}>
          {/* Central Line */}
          <div 
            className="timeline-line"
            style={{
              position: 'absolute',
              left: '50%',
              top: 0,
              bottom: 0,
              width: '2px',
              background: 'linear-gradient(to bottom, transparent, var(--glass-border) 10%, var(--glass-border) 90%, transparent)',
              transform: 'translateX(-50%)',
              zIndex: 0
            }} 
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '60px', position: 'relative' }}>
            {partnershipPoints.map((point, idx) => (
              <div 
                key={idx} 
                className="timeline-item"
                style={{ 
                  display: 'flex', 
                  width: '100%', 
                  justifyContent: idx % 2 === 0 ? 'flex-start' : 'flex-end',
                  alignItems: 'center',
                  position: 'relative'
                }}
              >
                {/* Visual Node on Line */}
                <motion.div
                  className="timeline-node"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: idx * 0.2, type: 'spring', stiffness: 200 }}
                  viewport={{ once: true }}
                  style={{
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    width: '20px',
                    height: '20px',
                    backgroundColor: 'var(--bg-page)',
                    border: `4px solid ${point.color}`,
                    borderRadius: '50%',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 2,
                    boxShadow: `0 0 15px ${point.color}50`
                  }}
                />

                {/* Content Card */}
                <motion.div
                  className="timeline-card"
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  style={{
                    width: 'calc(50% - 60px)',
                    padding: '40px',
                    backgroundColor: 'var(--glass-bg)',
                    backdropFilter: 'blur(16px)',
                    borderRadius: '32px',
                    border: '1px solid var(--glass-border)',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.3s ease'
                  }}
                  whileHover={{ 
                    y: -10, 
                    borderColor: point.color,
                    boxShadow: `0 30px 60px ${point.color}15`
                  }}
                >
                  {/* Subtle Background Glow */}
                  <div style={{
                    position: 'absolute',
                    top: '-50%',
                    left: '-50%',
                    width: '200%',
                    height: '200%',
                    background: `radial-gradient(circle, ${point.color}08 0%, transparent 70%)`,
                    pointerEvents: 'none',
                    zIndex: 0
                  }} />

                  <div 
                    className="card-content"
                    style={{ 
                      position: 'relative', 
                      zIndex: 1, 
                      display: 'flex', 
                      flexDirection: 'column', 
                      alignItems: idx % 2 === 0 ? 'flex-end' : 'flex-start', 
                      textAlign: idx % 2 === 0 ? 'right' : 'left', 
                      gap: '20px' 
                    }}
                  >
                    <div style={{
                      width: '64px',
                      height: '64px',
                      backgroundColor: `${point.color}15`,
                      borderRadius: '20px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: point.color,
                      flexShrink: 0
                    }}>
                      {point.icon}
                    </div>
                    <div>
                      <h4 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '12px' }}>
                        {point.title}
                      </h4>
                      <p style={{ fontSize: '16px', color: 'var(--text-secondary)', lineHeight: 1.6, opacity: 0.9 }}>
                        {point.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Vertical Stack */}
        <div className="mobile-milestones" style={{ display: 'none', padding: '0 20px 40px' }}>
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column',
            gap: '24px'
          }}>
            {partnershipPoints.map((point, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                style={{
                  width: '100%',
                  padding: '40px 30px',
                  backgroundColor: 'var(--glass-bg)',
                  backdropFilter: 'blur(16px)',
                  borderRadius: '32px',
                  border: '1px solid var(--glass-border)',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  gap: '24px',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                 <div style={{
                    position: 'absolute',
                    top: '-50%',
                    left: '-50%',
                    width: '200%',
                    height: '200%',
                    background: `radial-gradient(circle, ${point.color}15 0%, transparent 70%)`,
                    pointerEvents: 'none',
                    zIndex: 0
                  }} />

                <div style={{
                  width: '64px',
                  height: '64px',
                  backgroundColor: `${point.color}15`,
                  borderRadius: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: point.color,
                  position: 'relative',
                  zIndex: 1
                }}>
                  {point.icon}
                </div>
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <h4 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '12px' }}>
                    {point.title}
                  </h4>
                  <p style={{ fontSize: '16px', color: 'var(--text-secondary)', lineHeight: 1.6, opacity: 0.9 }}>
                    {point.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 992px) {
          h2 { font-size: 42px !important; }
          .container > div:first-child { 
            margin-bottom: 60px !important; 
          }
        }
        @media (max-width: 768px) {
          .desktop-timeline {
            display: none !important;
          }
          .mobile-milestones {
            display: block !important;
          }
        }
        @media (max-width: 576px) {
          .parent-partnership { padding: 60px 0 !important; }
          h2 { font-size: 32px !important; }
          .mobile-milestones > div > div {
            padding: 32px 24px !important;
            border-radius: 24px !important;
          }
        }
      `}</style>
    </section>
  );
}
