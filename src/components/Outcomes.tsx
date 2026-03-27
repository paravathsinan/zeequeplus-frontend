"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle, ShieldCheck, Stars, Heart, Zap } from "lucide-react";

const outcomes = [
  {
    title: "Tajweed Basics",
    description: "Read the Qur’an correctly with foundational Tajweed rules and clear Makhārij.",
    icon: <ShieldCheck size={28} />,
  },
  {
    title: "Memorisation",
    description: "Memorise selected Surahs and important passages tailored to each student's level.",
    icon: <Stars size={28} />,
  },
  {
    title: "Islamic Etiquette",
    description: "Learn essential daily duas, Adkār, and the beautiful manners (Akhlaq) of Islam.",
    icon: <Zap size={28} />,
  },
  {
    title: "Pure Connection",
    description: "Build a deep, personal connection with the Qur’an and a genuine love for Deen.",
    icon: <Heart size={28} />,
  },
  {
    title: "Discipline & Focus",
    description: "Develop responsibility and focus through regular classes and systematic assessments.",
    icon: <CheckCircle size={28} />,
  },
];

export default function Outcomes() {
  return (
    <section className="outcomes" style={{
      padding: '60px 0',
      backgroundColor: 'var(--bg-page)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <div style={{
            display: 'inline-block',
            padding: '8px 16px',
            backgroundColor: 'var(--glass-bg)',
            borderRadius: '100px',
            fontSize: '14px',
            fontWeight: 600,
            color: 'var(--accent)',
            marginBottom: '16px',
            border: '1px solid var(--glass-border)'
          }}>
            Success Outcomes
          </div>
          <h2 style={{
            fontSize: '48px',
            fontWeight: 800,
            color: 'var(--text-primary)',
            marginBottom: '20px',
            lineHeight: 1.2
          }}>
            What Your Child Will Gain
          </h2>
          <p style={{
            fontSize: '18px',
            color: 'var(--text-secondary)',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: 1.6
          }}>
            By the end of their journey with ZeeQue Plus, your child will have built a strong foundation in Quranic studies and Islamic values.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '60px',
          alignItems: 'center'
        }}>
          {/* Left Side: Illustration */}
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
              border: '1px solid var(--glass-border)',
              backgroundColor: 'var(--glass-bg)'
            }}>
              <Image
                src="/images/site/outcomes-img.png"
                alt="Student Success Illustration"
                width={600}
                height={600}
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  objectFit: 'cover'
                }}
              />
            </div>
            
            {/* Floating Achievement Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="glass-card"
              style={{
                position: 'absolute',
                bottom: '20px',
                right: '-20px',
                padding: '16px 24px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                backgroundColor: 'rgba(255, 215, 0, 0.1)',
                border: '1px solid rgba(255, 215, 0, 0.3)',
                backdropFilter: 'blur(10px)',
                zIndex: 2
              }}
            >
              <div style={{ 
                width: '40px', 
                height: '40px', 
                borderRadius: '50%', 
                backgroundColor: 'gold', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                color: '#fff'
              }}>
                <Stars size={20} />
              </div>
              <div>
                <div style={{ fontWeight: 800, fontSize: '14px', color: 'var(--text-primary)' }}>Level Completed</div>
                <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>Certificate Earned</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side: List of Outcomes */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {outcomes.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  x: 10, 
                  backgroundColor: 'var(--glass-bg-hover)',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.08)'
                }}
                className="outcome-card"
                style={{
                  padding: '24px',
                  display: 'flex',
                  gap: '24px',
                  alignItems: 'center',
                  backgroundColor: 'var(--card-bg)',
                  borderRadius: '24px',
                  border: '1px solid var(--glass-border)',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Decorative Accent Glow */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '4px',
                  height: '100%',
                  backgroundColor: 'var(--accent)',
                  opacity: 0.5
                }} />

                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '18px',
                  background: 'linear-gradient(135deg, var(--glass-bg) 0%, rgba(var(--accent-rgb), 0.1) 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent)',
                  flexShrink: 0,
                  border: '1px solid var(--glass-border)',
                  boxShadow: '0 8px 16px rgba(0,0,0,0.05)'
                }}>
                  {item.icon}
                </div>
                <div>
                  <h3 style={{
                    fontSize: '20px',
                    fontWeight: 800,
                    color: 'var(--text-primary)',
                    marginBottom: '6px',
                    letterSpacing: '-0.2px'
                  }}>
                    {item.title}
                  </h3>
                  <p style={{
                    fontSize: '15px',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6,
                    fontWeight: 500
                  }}>
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          .container > div:last-child {
            grid-template-columns: 1fr !important;
            gap: 60px !important;
          }
          .container > div:last-child > div:first-child {
            margin: 0 auto;
            max-width: 600px;
          }
          h2 {
            font-size: 36px !important;
          }
        }
        @media (max-width: 576px) {
          .outcomes {
            padding: 80px 0 !important;
          }
          h2 {
            font-size: 32px !important;
          }
          .glass-card {
            padding: 16px !important;
            gap: 12px !important;
            bottom: 10px !important;
            right: 10px !important;
          }
          .outcome-card {
             padding: 20px !important;
             gap: 16px !important;
          }
           .container > div:last-child {
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}
