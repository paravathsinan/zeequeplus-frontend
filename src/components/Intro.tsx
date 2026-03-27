"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, Users, Award, BookOpen } from 'lucide-react';

export default function Intro() {
  return (
    <section className="intro" style={{ 
      padding: '60px 0',
      backgroundColor: 'var(--bg-page)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decorative background elements */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '-5%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(var(--accent-rgb), 0.05) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(40px)',
        zIndex: 0
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="intro-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'center'
        }}>
          {/* Left Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="intro-content"
          >
            <div style={{
              padding: '8px 20px',
              backgroundColor: 'rgba(var(--accent-rgb), 0.1)',
              borderRadius: '100px',
              color: 'var(--accent)',
              fontSize: '13px',
              fontWeight: 800,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '24px',
              letterSpacing: '1px'
            }}>
              <BookOpen size={16} />
              Who We Are
            </div>
            
            <h2 style={{
              fontSize: '52px',
              fontWeight: 800,
              color: 'var(--text-primary)',
              lineHeight: 1.1,
              marginBottom: '28px',
              fontFamily: 'var(--font-heading)'
            }}>
              Nurturing <span style={{ color: 'var(--accent)' }}>Hearts</span> with Divine <span className="handwritten">Wisdom</span>
            </h2>

            <p style={{
              fontSize: '19px',
              color: 'var(--text-secondary)',
              lineHeight: 1.7,
              marginBottom: '36px',
              fontWeight: 400
            }}>
              We provide a structured and engaging environment for students of all ages 
              to learn Quran recitation, memorization, and Arabic. Our mission is to 
              foster a deep, lifelong connection with the holy words through 
              personalized mentorship and modern teaching techniques.
            </p>

            <div className="intro-list" style={{ 
              display: 'grid', 
              gridTemplateColumns: '1fr 1fr', 
              gap: '20px', 
              marginBottom: '44px' 
            }}>
              {[
                "Personalized Mentorship",
                "Experienced Tutors",
                "Flexible Scheduling",
                "Comprehensive Curriculum"
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * idx }}
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '12px',
                    color: 'var(--text-primary)',
                    fontWeight: 600,
                    fontSize: '16px'
                  }}
                >
                  <div style={{ 
                    width: '28px', 
                    height: '28px', 
                    borderRadius: '50%', 
                    backgroundColor: 'rgba(var(--accent-rgb), 0.1)', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    color: 'var(--accent)',
                    flexShrink: 0
                  }}>
                    <CheckCircle2 size={16} />
                  </div>
                  {item}
                </motion.div>
              ))}
            </div>

            <Link href="/about">
              <button className="btn btn-primary" style={{ padding: '18px 40px', borderRadius: '100px', fontSize: '18px', boxShadow: '0 10px 30px rgba(var(--accent-rgb), 0.2)' }}>
                Learn More
              </button>
            </Link>
          </motion.div>

          {/* Right Side: Visuals */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="intro-visual"
            style={{ position: 'relative' }}
          >
            <div style={{
              position: 'relative',
              width: '100%',
              aspectRatio: '4/5',
              borderRadius: '40px',
              overflow: 'hidden',
              boxShadow: '0 30px 60px rgba(0,0,0,0.15)',
              border: '2px solid var(--glass-border)'
            }}>
              <Image 
                src="/images/site/intro-img.png" 
                alt="Who We Are - ZeeQue Plus" 
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(11, 77, 102, 0.4), transparent 50%)'
              }} />
            </div>

            {/* Floating Stats Card */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="glass-card"
              style={{
                position: 'absolute',
                top: '15%',
                right: '-40px',
                padding: '20px',
                borderRadius: '24px',
                display: 'flex',
                alignItems: 'center',
                gap: '15px',
                zIndex: 2,
                backgroundColor: 'rgba(15, 15, 15, 0.4)',
                backdropFilter: 'blur(30px) saturate(180%)',
                WebkitBackdropFilter: 'blur(30px) saturate(180%)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 12px 40px rgba(0, 0, 0, 0.4)',
                color: 'white'
              }}
            >
              <div style={{
                width: '50px',
                height: '50px',
                borderRadius: '15px',
                backgroundColor: 'rgba(var(--accent-rgb), 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent)'
              }}>
                <Users size={24} />
              </div>
              <div>
                <div style={{ fontSize: '20px', fontWeight: 800, color: '#fff' }}>10K+</div>
                <div style={{ fontSize: '13px', fontWeight: 600, color: 'rgba(255,255,255,0.8)' }}>Happy Students</div>
              </div>
            </motion.div>

            {/* Floating Experience Card */}
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="glass-card"
              style={{
                position: 'absolute',
                bottom: '10%',
                left: '-20px',
                padding: '16px 24px',
                borderRadius: '24px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                zIndex: 2,
                backgroundColor: 'rgba(15, 15, 15, 0.4)',
                backdropFilter: 'blur(30px) saturate(180%)',
                WebkitBackdropFilter: 'blur(30px) saturate(180%)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 12px 40px rgba(0, 0, 0, 0.4)',
                color: 'white'
              }}
            >
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '12px',
                backgroundColor: 'rgba(var(--accent-rgb), 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent)'
              }}>
                <Award size={22} />
              </div>
              <div style={{ fontSize: '15px', fontWeight: 700, color: '#fff' }}>10+ Years Experience</div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1100px) {
          .intro-grid {
            gap: 40px !important;
          }
          h2 {
            fontSize: 42px !important;
          }
        }
        @media (max-width: 992px) {
          .intro {
            padding: 80px 0 !important;
          }
          .intro-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
            gap: 50px !important;
          }
          .intro-visual {
            max-width: 500px;
            margin: 0 auto;
            order: -1; /* Image on top on mobile */
          }
          .intro-content {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .intro-list {
            justify-items: center;
            max-width: 600px;
          }
          .glass-card {
            display: none !important;
          }
        }
        @media (max-width: 576px) {
          h2 {
            font-size: 36px !important;
          }
          .intro-list {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
        }
      `}</style>
    </section>
  );
}
