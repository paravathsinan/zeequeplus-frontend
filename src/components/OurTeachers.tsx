"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { GraduationCap, Award, Users } from "lucide-react";

const teachers = [
  {
    name: "Sheikh Abdullah Mansour",
    qualification: "Masters in Islamic Studies, Al-Azhar University",
    bio: "Specializing in Tajweed and Qira'at with over 12 years of experience in youth guidance.",
    image: "/images/teachers/teacher-1.png"
  },
  {
    name: "Ustadha Fatima Zahra",
    qualification: "Hafiza & Certified Tajweed Instructor",
    bio: "Passionate about creating joyful learning environments for primary school children.",
    image: "/images/teachers/teacher-2.png"
  }
];

const features = [
  {
    icon: <GraduationCap size={24} />,
    text: "Qualified in Qur’an, Tajweed and Islamic studies."
  },
  {
    icon: <Users size={24} />,
    text: "Trained in online teaching tools and child handling."
  },
  {
    icon: <Award size={24} />,
    text: "Regularly evaluated for pronunciation accuracy and classroom management."
  }
];

export default function OurTeachers() {
  return (
    <section className="our-teachers" style={{
      padding: '60px 0',
      backgroundColor: 'var(--bg-page)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'center'
        }}>
          {/* Left Side: Content & Selection Rigour */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
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
              Expert Faculty
            </div>
            
            <h2 style={{
              fontSize: '48px',
              fontWeight: 800,
              color: 'var(--text-primary)',
              lineHeight: 1.2,
              marginBottom: '32px'
            }}>
              Guided by the <span style={{ color: 'var(--accent)' }}>Best Minds</span> in Quranic Education.
            </h2>
            
            <p style={{
              fontSize: '18px',
              color: 'var(--text-secondary)',
              lineHeight: 1.7,
              marginBottom: '48px'
            }}>
              Our teachers are more than just instructors; they are mentors who nurture both the mind and the soul.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '20px'
                  }}
                >
                  <div style={{
                    width: '48px',
                    height: '48px',
                    backgroundColor: 'var(--glass-bg)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent)',
                    border: '1px solid var(--glass-border)',
                    flexShrink: 0
                  }}>
                    {feature.icon}
                  </div>
                  <p style={{
                    fontSize: '16px',
                    color: 'var(--text-primary)',
                    fontWeight: 500,
                    lineHeight: 1.5,
                    paddingTop: '8px'
                  }}>
                    {feature.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Sample Profiles */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '32px',
            position: 'relative'
          }}>
            {teachers.map((teacher, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9, x: idx % 2 === 0 ? 30 : -30 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                style={{
                  padding: '32px',
                  backgroundColor: 'var(--glass-bg)',
                  borderRadius: '32px',
                  border: '1px solid var(--glass-border)',
                  display: 'flex',
                  gap: '24px',
                  alignItems: 'center',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
                  alignSelf: idx % 2 === 0 ? 'flex-end' : 'flex-start',
                  maxWidth: '500px'
                }}
              >
                <div style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  flexShrink: 0,
                  border: '2px solid var(--accent)'
                }}>
                  <Image
                    src={teacher.image}
                    alt={teacher.name}
                    width={100}
                    height={100}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div>
                  <h4 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '4px' }}>
                    {teacher.name}
                  </h4>
                  <p style={{
                    fontSize: '13px',
                    fontWeight: 700,
                    color: 'var(--accent)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    marginBottom: '12px'
                  }}>
                    {teacher.qualification}
                  </p>
                  <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.5, fontStyle: 'italic' }}>
                    "{teacher.bio}"
                  </p>
                </div>
              </motion.div>
            ))}
            
            {/* Minimal Background Element */}
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '120%',
              height: '120%',
              background: 'radial-gradient(circle, rgba(var(--accent-rgb), 0.03) 0%, transparent 70%)',
              zIndex: -1,
              pointerEvents: 'none'
            }} />
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
          .our-teachers div[style*="align-self"] {
            align-self: center !important;
            max-width: 100% !important;
          }
          .our-teachers div[style*="display: flex"] {
            justify-content: center;
            text-align: left;
          }
          h2 {
            font-size: 36px !important;
          }
        }
        @media (max-width: 576px) {
          .our-teachers {
            padding: 40px 0 !important;
          }
          h2 {
            font-size: 32px !important;
          }
          .our-teachers div[style*="padding: 32px"] {
             padding: 20px !important;
             flex-direction: column !important;
             text-align: center !important;
          }
        }
      `}</style>
    </section>
  );
}
