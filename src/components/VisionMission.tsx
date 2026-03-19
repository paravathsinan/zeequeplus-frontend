"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Compass, Target, ShieldCheck, TrendingUp, Heart } from "lucide-react";

const missionPoints = [
  {
    title: "Clear Pathway",
    description: "To provide a clear, class-wise Qur’an learning pathway from Class 1 to Class 10.",
    icon: <TrendingUp size={28} />
  },
  {
    title: "Holistic Integration",
    description: "To integrate recitation, Tajweed, memorisation and character-building in one program.",
    icon: <ShieldCheck size={28} />
  },
  {
    title: "Parental Support",
    description: "To support parents with transparent reports and regular communication.",
    icon: <Compass size={28} />
  }
];

export default function VisionMission() {
  return (
    <section className="vision-mission" style={{
      padding: '60px 0',
      backgroundColor: 'var(--bg-page)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="container">
        {/* Centered Vision Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              padding: '8px 20px',
              backgroundColor: 'rgba(var(--accent-rgb), 0.1)',
              borderRadius: '100px',
              fontSize: '14px',
              fontWeight: 700,
              color: 'var(--accent)',
              marginBottom: '24px',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}
          >
            <Target size={18} />
            Our Vision
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            style={{
              fontSize: '44px',
              fontWeight: 800,
              color: 'var(--text-primary)',
              lineHeight: 1.2,
              marginBottom: '24px',
              maxWidth: '800px',
              margin: '0 auto'
            }}
          >
            To see our students <span style={{ color: 'var(--accent)' }}>read correctly</span>, love deeply, and live the Qur’an.
          </motion.h2>
          
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            style={{
              height: '4px',
              width: '80px',
              backgroundColor: 'var(--accent)',
              borderRadius: '2px',
              margin: '0 auto'
            }}
          />
        </div>

        {/* Vision Content Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 1fr',
          gap: '80px',
          alignItems: 'center',
          marginBottom: '100px'
        }}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p style={{
              fontSize: '20px',
              lineHeight: 1.7,
              color: 'var(--text-secondary)',
              marginBottom: '40px'
            }}>
              Our vision is to nurture a generation that doesn't just recite the Qur’an, but understands its essence and carries its light into every aspect of their lives. We believe that true learning happens when the heart is engaged alongside the mind.
            </p>

            {/* New Vision Pillars */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              {[
                { icon: <Heart size={20} />, title: 'Heart-Centered', desc: 'Fostering a deep spiritual love for Allah and His words.' },
                { icon: <TrendingUp size={20} />, title: 'Growth Mindset', desc: 'Encouraging continuous self-improvement and wisdom.' },
                { icon: <ShieldCheck size={20} />, title: 'Rooted Character', desc: 'Building strong ethical foundations for daily life.' }
              ].map((pillar, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + (i * 0.1) }}
                  viewport={{ once: true }}
                  style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}
                >
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(var(--accent-rgb), 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent)',
                    flexShrink: 0,
                    marginTop: '2px'
                  }}>
                    {pillar.icon}
                  </div>
                  <div>
                    <h4 style={{ 
                      fontSize: '18px', 
                      fontWeight: 700, 
                      color: 'var(--text-primary)', 
                      marginBottom: '6px' 
                    }}>
                      {pillar.title}
                    </h4>
                    <p style={{ 
                      fontSize: '15.5px', 
                      color: 'var(--text-secondary)', 
                      lineHeight: 1.5,
                      opacity: 0.85 
                    }}>
                      {pillar.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            style={{ position: 'relative' }}
          >
            <div style={{
              position: 'relative',
              borderRadius: '40px',
              overflow: 'hidden',
              boxShadow: '0 25px 50px rgba(0,0,0,0.15)',
              border: '1px solid var(--glass-border)'
            }}>
              <Image
                src="/images/about/vision-mission.png"
                alt="Vision Illustration"
                width={600}
                height={600}
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block'
                }}
              />
            </div>
          </motion.div>
        </div>

        {/* Mission Section */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '80px' }}
          >
            <h2 style={{ fontSize: '48px', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '16px' }}>Our Mission</h2>
            <p style={{ fontSize: '18px', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
              We are dedicated to creating a comprehensive and transparent learning environment for children and parents alike.
            </p>
          </motion.div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '32px'
          }}>
            {missionPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                style={{
                  padding: '48px 40px',
                  backgroundColor: 'var(--glass-bg)',
                  borderRadius: '32px',
                  border: '1px solid var(--glass-border)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '24px',
                  transition: 'all 0.3s ease'
                }}
              >
                <div style={{
                  width: '64px',
                  height: '64px',
                  backgroundColor: 'rgba(var(--accent-rgb), 0.1)',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent)'
                }}>
                  {point.icon}
                </div>
                <div>
                  <h3 style={{ fontSize: '22px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '12px' }}>
                    {point.title}
                  </h3>
                  <p style={{ fontSize: '16px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    {point.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          .container > div:first-child {
            grid-template-columns: 1fr !important;
            gap: 60px !important;
            text-align: center;
          }
          .container > div:first-child div[style*="height: 4px"] {
            margin: 0 auto;
          }
          h2 {
            font-size: 36px !important;
          }
        }
        @media (max-width: 576px) {
          .vision-mission {
            padding: 40px 0 !important;
          }
          h2 {
            font-size: 32px !important;
          }
          .container > div:last-child div[style*="display: grid"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
