"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star, ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="hero" style={{ 
      padding: '160px 0 80px',
      background: 'var(--hero-bg)',
      color: 'var(--text-primary)',
      overflow: 'hidden'
    }}>
      <div className="container">
        <div className="hero-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '60px',
          alignItems: 'center'
        }}>
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-content"
          >
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '8px 16px',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '100px',
              border: '1px solid var(--glass-border)',
              marginBottom: '24px',
              fontSize: '14px',
              fontWeight: 600
            }}>
              <span style={{ color: 'var(--accent)' }}>Trusted by 20,000+ Students</span>
            </div>

            <h1 style={{ 
              fontSize: '64px',
              fontWeight: 800,
              lineHeight: 1.1,
              marginBottom: '24px',
              fontFamily: 'var(--font-heading)'
            }}>
              ZeeQue Plus – Online <span className="handwritten-underline" style={{ color: 'var(--accent)' }}>Qur’an</span> School for Classes 1–10
            </h1>

            <p style={{ 
              fontSize: '20px', 
              color: 'var(--text-secondary)',
              marginBottom: '40px',
              lineHeight: 1.6,
              maxWidth: '600px'
            }}>
              Join our interactive online platform designed for children and adults. 
              Experience personalized Tajweed, Hifz, and Arabic classes from the comfort of your home.
            </p>

            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }} className="hero-btns">
              <button className="btn btn-primary" style={{ padding: '16px 32px', borderRadius: '100px', fontSize: '18px' }}>
                Enroll Now
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  <ArrowRight size={20} />
                </motion.span>
              </button>
              <button className="btn btn-outline" style={{ padding: '16px 32px', borderRadius: '100px', fontSize: '18px', backgroundColor: 'var(--accent)', color: 'var(--primary)', borderColor: 'var(--accent)' }}>
                Prospectus
              </button>
            </div>
          </motion.div>

          {/* Right Image Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ position: 'relative' }}
            className="hero-image-container"
          >
            <div style={{
              position: 'relative',
              width: '100%',
              aspectRatio: '1',
              borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
              border: '8px solid var(--glass-border)'
            }}>
              <Image 
                src="/images/hero-boy.png" 
                alt="Boy learning Quran" 
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
              />
            </div>

            {/* Floating Rating Card */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="glass-card"
              style={{
                position: 'absolute',
                top: '10%',
                left: '-10%',
                padding: '16px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}
            >
              <div style={{ backgroundColor: 'var(--accent)', padding: '8px', borderRadius: '10px', color: 'var(--primary)' }}>
                <Star fill="var(--primary)" size={20} />
              </div>
              <div>
                <div style={{ fontWeight: 800, fontSize: '18px' }}>4.9/5</div>
                <div style={{ fontSize: '12px', opacity: 0.8 }}>Average Rating</div>
              </div>
            </motion.div>

            {/* Floating Info Card */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="glass-card"
              style={{
                position: 'absolute',
                bottom: '20%',
                right: '-10%',
                padding: '20px',
                width: '260px',
                display: 'flex',
                gap: '12px',
                alignItems: 'center',
                zIndex: 2
              }}
            >
              <div>
                <div style={{ fontSize: '14px', fontWeight: 700, marginBottom: '4px' }}>Pure, guided Quran education</div>
                <p style={{ fontSize: '11px', opacity: 0.7 }}>Helping children connect with the Word of Allah</p>
              </div>
              <div style={{ flexShrink: 0 }}>
                <Image src="/images/quran-open.png" alt="Open Quran" width={60} height={40} sizes="60px" style={{ borderRadius: '4px' }} />
              </div>
            </motion.div>


          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 992px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
            gap: 40px !important;
          }
          .hero-content {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          h1 {
            font-size: 48px !important;
          }
          p {
            max-width: 100% !important;
          }
          .hero-btns {
            justify-content: center;
          }
          .hero-image-container {
            max-width: 500px;
            margin: 0 auto;
          }
          .glass-card {
            display: none !important;
          }
        }
        @media (max-width: 576px) {
          h1 {
            font-size: 36px !important;
          }
          .hero-btns {
            flex-direction: column;
            width: 100%;
          }
          .hero-btns button {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
