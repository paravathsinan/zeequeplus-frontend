"use client";

import { motion } from "framer-motion";
import { Sparkles, Layers, Volume2, Heart } from "lucide-react";

const approachItems = [
  {
    number: "01",
    title: "Child-Centered Teaching",
    description: "We use age-appropriate examples, repetition, and encouragement to keep children engaged.",
    icon: <Sparkles size={20} />,
    color: "var(--accent)"
  },
  {
    number: "02",
    title: "Step-by-Step Levels",
    description: "Each class has defined goals: letters → words → sentences → full-page recitation → selected Surahs, etc.",
    icon: <Layers size={20} />,
    color: "var(--accent)"
  },
  {
    number: "03",
    title: "Tajweed Made Simple",
    description: "Basics of makhārij, stretching, qalqala and other rules are taught in simple language children understand.",
    icon: <Volume2 size={20} />,
    color: "var(--accent)"
  },
  {
    number: "04",
    title: "Integrated Values",
    description: "Along with Qur’an, children learn Akhlaq, Adab, Islamic habits and daily duas.",
    icon: <Heart size={20} />,
    color: "var(--accent)"
  }
];

export default function OurApproach() {
  return (
    <section className="our-approach-minimal" style={{
      padding: '80px 0',
      backgroundColor: 'var(--bg-page)',
      position: 'relative'
    }}>
      <div className="container">
        {/* Minimal Header */}
        <div style={{ marginBottom: '100px', maxWidth: '800px' }}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{
              fontSize: '14px',
              fontWeight: 700,
              color: 'var(--accent)',
              textTransform: 'uppercase',
              letterSpacing: '3px',
              marginBottom: '24px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px'
            }}
          >
            <div style={{ width: '30px', height: '1px', backgroundColor: 'var(--accent)' }} />
            The Methodology
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{
              fontSize: '56px',
              fontWeight: 800,
              color: 'var(--text-primary)',
              lineHeight: 1.1,
              letterSpacing: '-1px'
            }}
          >
            Our Approach to <span style={{ color: 'var(--accent)' }}>Excellence.</span>
          </motion.h2>
        </div>

        {/* Minimal Grid */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          border: '1px solid var(--glass-border)',
          borderRadius: '32px',
          overflow: 'hidden',
          backgroundColor: 'var(--glass-border)',
          gap: '1px'
        }}>
          {approachItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ backgroundColor: 'rgba(var(--accent-rgb, 249, 204, 11), 0.05)' }}
              style={{
                padding: '60px 40px',
                backgroundColor: 'var(--bg-page)',
                display: 'flex',
                flexDirection: 'column',
                gap: '32px',
                transition: 'background-color 0.4s ease',
                position: 'relative',
                flex: '1 1 350px',
                minWidth: '300px'
              }}
            >
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start'
              }}>
                <span style={{
                  fontSize: '40px',
                  fontWeight: 900,
                  color: 'rgba(var(--text-primary-rgb), 0.05)',
                  lineHeight: 1,
                  fontFamily: 'serif'
                }}>
                  {item.number}
                </span>
                <div style={{
                  color: 'var(--accent)',
                  opacity: 0.7
                }}>
                  {item.icon}
                </div>
              </div>

              <div>
                <h3 style={{
                  fontSize: '24px',
                  fontWeight: 800,
                  color: 'var(--text-primary)',
                  marginBottom: '16px',
                  letterSpacing: '-0.5px'
                }}>
                  {item.title}
                </h3>
                <p style={{
                  fontSize: '16px',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.7,
                  opacity: 0.8
                }}>
                  {item.description}
                </p>
              </div>

              {/* Hover effect: simple line at bottom */}
              <motion.div
                initial={{ width: 0 }}
                whileHover={{ width: '40px' }}
                style={{
                  height: '2px',
                  backgroundColor: 'var(--accent)',
                  position: 'absolute',
                  bottom: '40px',
                  left: '40px'
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom Minimal CTA or Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          style={{
            marginTop: '80px',
            textAlign: 'center'
          }}
        >
          <p style={{
            fontSize: '18px',
            color: 'var(--text-secondary)',
            fontWeight: 500,
            opacity: 0.6
          }}>
            Focused on clarity, progress, and spiritual connection.
          </p>
        </motion.div>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          h2 {
            font-size: 40px !important;
          }
          .our-approach-minimal .container > div:first-child {
            max-width: 100% !important;
            text-align: center;
          }
           .our-approach-minimal .container > div:first-child div[style*="display: flex"] {
            justify-content: center;
          }
        }
        @media (max-width: 576px) {
          .our-approach-minimal {
            padding: 40px 0 !important;
          }
          h2 {
            font-size: 32px !important;
          }
          .our-approach-minimal div[style*="padding: 60px"] {
             padding: 30px 20px !important;
          }
        }
      `}</style>
    </section>
  );
}
