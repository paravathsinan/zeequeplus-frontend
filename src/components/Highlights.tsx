"use client";

import { motion } from "framer-motion";
import { BookOpen, GraduationCap, Users, Heart, ArrowRight } from "lucide-react";
import Link from "next/link";

const highlights = [
  {
    title: "From Basics to Fluency",
    description: "Starting with Arabic letters and makhārij, progressing to fluent recitation with Tajweed.",
    icon: BookOpen,
  },
  {
    title: "Class 1–10 Structured Levels",
    description: "Age-appropriate syllabus for each class: gradual, clear milestones and completion targets.",
    icon: GraduationCap,
  },
  {
    title: "Certified & Trained Teachers",
    description: "Handpicked male and female teachers experienced in teaching children online.",
    icon: Users,
  },
  {
    title: "Balanced Approach",
    description: "Qur’an recitation, memorisation, Adkār, manners and value-based life lessons.",
    icon: Heart,
  },
];

export default function Highlights() {
  return (
    <section id="highlights" style={{ 
      padding: '100px 0', 
      backgroundColor: 'var(--bg-page)',
      borderBottomLeftRadius: '50% 60px',
      borderBottomRightRadius: '50% 60px',
      overflow: 'hidden'
    }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
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
            WHY CHOOSE US
          </div>
          <h2 style={{
            fontSize: '48px',
            fontWeight: 800,
            color: 'var(--text-primary)',
            marginBottom: '20px',
            fontFamily: 'var(--font-heading)'
          }}>
            Our Key Highlights
          </h2>
          <p style={{
            color: 'var(--text-secondary)',
            fontSize: '18px',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            We blend traditional wisdom with modern convenience to provide the best learning experience.
          </p>
        </div>

        <div className="highlights-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '30px'
        }}>
          {highlights.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              style={{
                padding: '40px 48px',
                borderRadius: '50px',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                boxShadow: 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: '24px',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                position: 'relative',
                overflow: 'hidden'
              }}
              className="highlight-card"
            >
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '16px',
                backgroundColor: 'rgba(var(--accent-rgb), 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent)',
                position: 'relative',
                zIndex: 2
              }} className="highlight-icon">
                <item.icon size={32} />
              </div>

              <div style={{ position: 'relative', zIndex: 2 }}>
                <h3 style={{
                  fontSize: '24px',
                  fontWeight: 800,
                  color: 'var(--text-primary)',
                  marginBottom: '12px',
                  fontFamily: 'var(--font-heading)',
                  transition: 'color 0.3s ease'
                }}>
                  {item.title}
                </h3>
                <p style={{
                  color: 'var(--text-secondary)',
                  lineHeight: 1.6,
                  fontSize: '16px',
                  transition: 'color 0.3s ease'
                }}>
                  {item.description}
                </p>
              </div>

              <div style={{ marginTop: 'auto', position: 'relative', zIndex: 2 }}>
                <Link href="/experience" style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: 'var(--accent)',
                  fontWeight: 700,
                  fontSize: '14px'
                }}>
                  Learn More <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '60px' }}>
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.5 }}
          >
            <Link href="/experience" className="btn btn-primary" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              padding: '16px 40px',
              fontSize: '18px',
              fontWeight: 700,
              borderRadius: '100px'
            }}>
              View Curriculum
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .highlight-card {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .highlight-card:hover {
          background-color: rgba(255, 255, 255, 0.2) !important;
          box-shadow: none !important;
          border-color: rgba(255, 255, 255, 0.5) !important;
        }

        :global([data-theme='light']) .highlight-card {
          background-color: rgba(11, 77, 102, 0.04) !important;
          border-color: rgba(11, 77, 102, 0.1) !important;
          box-shadow: none !important;
        }

        :global([data-theme='light']) .highlight-card:hover {
          background-color: rgba(11, 77, 102, 0.08) !important;
          border-color: var(--accent) !important;
        }

        @media (max-width: 1200px) {
          .highlights-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 768px) {
          .highlights-grid {
            grid-template-columns: 1fr !important;
          }
          .highlight-card {
            padding: 40px 30px !important;
            border-radius: 40px !important;
          }
          h2 {
            font-size: 32px !important;
          }
        }
      `}</style>
    </section>
  );
}
