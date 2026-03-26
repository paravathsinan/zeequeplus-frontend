"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Users } from "lucide-react";

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
    title: "Expert Qualifications",
    text: "Qualified in Qur’an, Tajweed and Islamic studies with deep academic foundations."
  },
  {
    title: "Specialized Training",
    text: "Trained in modern online teaching tools and child psychology for effective handling."
  },
  {
    title: "Quality Assurance",
    text: "Regularly evaluated for pronunciation accuracy and innovative classroom management."
  }
];

export default function OurTeachers() {
  return (
    <section className="our-teachers" style={{
      padding: '120px 0',
      backgroundColor: 'var(--bg-page)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Premium Background Elements */}
      <div style={{
        position: 'absolute',
        top: '10%',
        right: '-5%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(var(--accent-rgb), 0.08) 0%, transparent 70%)',
        borderRadius: '50%',
        zIndex: 0,
        filter: 'blur(60px)'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '10%',
        left: '-5%',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(var(--accent-rgb), 0.05) 0%, transparent 70%)',
        borderRadius: '50%',
        zIndex: 0,
        filter: 'blur(50px)'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Centered Header */}
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '10px 24px',
              backgroundColor: 'rgba(var(--accent-rgb), 0.1)',
              borderRadius: '100px',
              fontSize: '14px',
              fontWeight: 800,
              color: 'var(--accent)',
              marginBottom: '24px',
              textTransform: 'uppercase',
              letterSpacing: '1.5px',
              border: '1px solid rgba(var(--accent-rgb), 0.2)'
            }}
          >
            <Users size={16} />
            Expert Faculty
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            style={{
              fontSize: '56px',
              fontWeight: 800,
              color: 'var(--text-primary)',
              lineHeight: 1.1,
              marginBottom: '24px',
              fontFamily: 'var(--font-heading)',
              maxWidth: '900px',
              margin: '0 auto 24px'
            }}
          >
            Guided by the <span style={{ color: 'var(--accent)' }}>Best Minds</span> in Quranic Education.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            style={{
              fontSize: '20px',
              color: 'var(--text-secondary)',
              lineHeight: 1.7,
              maxWidth: '800px',
              margin: '0 auto'
            }}
          >
            Our teachers are more than just instructors; they are mentors who nurture both the mind and the soul, dedicated to excellence in every lesson.
          </motion.p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '100px',
          alignItems: 'center'
        }}>
          {/* Left Side: Selection Rigour & Features */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    gap: '24px',
                    padding: '40px 32px',
                    backgroundColor: 'var(--glass-bg)',
                    borderRadius: '32px',
                    border: '1px solid var(--glass-border)',
                    boxShadow: '0 10px 40px rgba(0,0,0,0.03)',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                  whileHover={{ 
                    scale: 1.02, 
                    borderColor: 'var(--accent)',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)'
                  }}
                >
                  {/* Decorative Background Number */}
                  <span style={{
                    position: 'absolute',
                    top: '-10px',
                    right: '10px',
                    fontSize: '80px',
                    fontWeight: 900,
                    color: 'rgba(var(--accent-rgb), 0.03)',
                    lineHeight: 1,
                    pointerEvents: 'none',
                    userSelect: 'none',
                    fontFamily: 'serif'
                  }}>
                    0{idx + 1}
                  </span>

                  {/* Content Container */}
                  <div style={{ position: 'relative', zIndex: 1 }}>
                    <h4 style={{ 
                      fontSize: '20px', 
                      fontWeight: 800, 
                      color: 'var(--text-primary)', 
                      marginBottom: '8px',
                      fontFamily: 'var(--font-heading)'
                    }}>
                      {feature.title}
                    </h4>
                    <p style={{
                      fontSize: '15.5px',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.6,
                      opacity: 0.85
                    }}>
                      {feature.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Sample Profiles */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '40px',
            position: 'relative'
          }}>
            {teachers.map((teacher, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                viewport={{ once: true }}
                style={{
                  alignSelf: idx % 2 === 0 ? 'flex-start' : 'flex-end',
                  maxWidth: '400px',
                  width: '100%',
                  position: 'relative',
                  marginTop: idx === 0 ? '0' : '40px',
                  perspective: '1000px'
                }}
              >
                {/* Visual Glow behind card */}
                <div style={{
                  position: 'absolute',
                  top: '20%',
                  left: '10%',
                  right: '10%',
                  bottom: '10%',
                  background: 'rgba(var(--accent-rgb), 0.15)',
                  filter: 'blur(40px)',
                  borderRadius: '40px',
                  zIndex: -1
                }} />

                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: idx * 1.5
                  }}
                  whileHover={{ 
                    rotateY: idx % 2 === 0 ? 5 : -5,
                    rotateX: 5,
                    scale: 1.02
                  }}
                  style={{
                    padding: '60px 32px 40px',
                    backgroundColor: 'rgba(15, 15, 15, 0.3)',
                    backdropFilter: 'blur(30px) saturate(180%)',
                    WebkitBackdropFilter: 'blur(30px) saturate(180%)',
                    borderRadius: '40px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    boxShadow: '0 25px 50px rgba(0,0,0,0.3)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    position: 'relative'
                  }}
                >
                  {/* Floating Portrait with Squircle Frame */}
                  <div style={{
                    position: 'absolute',
                    top: '-60px',
                    width: '120px',
                    height: '120px',
                    padding: '8px',
                    background: 'linear-gradient(135deg, var(--accent), #fff)',
                    borderRadius: '40px',
                    boxShadow: '0 15px 30px rgba(var(--accent-rgb), 0.3)',
                    transform: 'rotate(-5deg)'
                  }}>
                    <div style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: '32px',
                      overflow: 'hidden',
                      border: '2px solid rgba(255,255,255,0.5)'
                    }}>
                      <Image
                        src={teacher.image}
                        alt={teacher.name}
                        width={120}
                        height={120}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div style={{ marginTop: '20px' }}>
                    <h4 style={{ 
                      fontSize: '24px', 
                      fontWeight: 800, 
                      color: 'var(--text-primary)', 
                      marginBottom: '10px',
                      fontFamily: 'var(--font-heading)'
                    }}>
                      {teacher.name}
                    </h4>
                    
                    <div style={{
                      fontSize: '11px',
                      fontWeight: 800,
                      color: 'var(--accent)',
                      textTransform: 'uppercase',
                      letterSpacing: '1.5px',
                      marginBottom: '20px',
                      backgroundColor: 'rgba(var(--accent-rgb), 0.1)',
                      display: 'inline-flex',
                      padding: '6px 16px',
                      borderRadius: '100px',
                      border: '1px solid rgba(var(--accent-rgb), 0.1)'
                    }}>
                      {teacher.qualification}
                    </div>

                    <div style={{ position: 'relative' }}>
                      <span style={{
                        position: 'absolute',
                        top: '-10px',
                        left: '-10px',
                        fontSize: '40px',
                        color: 'rgba(var(--accent-rgb), 0.2)',
                        fontFamily: 'serif',
                        lineHeight: 1
                      }}>“</span>
                      <p style={{ 
                        fontSize: '16px', 
                        color: 'var(--text-secondary)', 
                        lineHeight: 1.6, 
                        fontStyle: 'italic', 
                        opacity: 0.9,
                        padding: '0 10px'
                      }}>
                        {teacher.bio}
                      </p>
                      <span style={{
                        position: 'absolute',
                        bottom: '-20px',
                        right: '-10px',
                        fontSize: '40px',
                        color: 'rgba(var(--accent-rgb), 0.2)',
                        fontFamily: 'serif',
                        lineHeight: 1
                      }}>”</span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
            
            {/* Visual connector/bubble element */}
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '100%',
                height: '100%',
                background: 'radial-gradient(circle, rgba(var(--accent-rgb), 0.05) 0%, transparent 60%)',
                zIndex: -1,
                pointerEvents: 'none'
              }} 
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          .our-teachers {
            padding: 100px 0 !important;
          }
          .our-teachers .container > div:last-child {
            grid-template-columns: 1fr !important;
            gap: 80px !important;
            text-align: center;
          }
          .our-teachers div[style*="align-self"] {
            align-self: center !important;
            max-width: 500px !important;
            margin: 0 auto !important;
          }
          .our-teachers div[style*="display: flex"] {
            justify-content: center;
          }
          h2 {
            font-size: 42px !important;
          }
          p {
            margin-left: auto;
            margin-right: auto;
          }
        }
        @media (max-width: 767px) {
          .our-teachers {
            padding: 60px 0 !important;
          }
          .our-teachers .container > div:last-child {
            gap: 60px !important;
          }
          h2 {
            font-size: 32px !important;
            line-height: 1.2 !important;
          }
          .our-teachers div[style*="padding: 32px"] {
             padding: 30px 20px !important;
             flex-direction: column !important;
             text-align: center !important;
             align-items: center !important;
             border-radius: 24px !important;
          }
          .our-teachers div[style*="padding: 60px 32px 40px"] {
             padding: 60px 24px 30px !important;
             border-radius: 32px !important;
             margin-top: 60px !important;
          }
           .our-teachers div[style*="top: -60px"] {
             width: 110px !important;
             height: 110px !important;
             top: -55px !important;
          }
        }
      `}</style>
    </section>
  );
}
