"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Star, ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="hero" style={{ 
      padding: '120px 0 40px',
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
            <div className="premium-badge" style={{ marginBottom: '24px' }}>
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
              <Link href="/enroll">
                <button className="premium-glass-btn primary">
                  <span>Enroll Now</span>
                  <ArrowRight size={20} className="arrow-icon" />
                </button>
              </Link>
              <a 
                href="https://operations.zeequeplus.com/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <button className="premium-glass-btn">
                  <span>Login</span>
                  <ArrowRight size={20} className="arrow-icon" />
                </button>
              </a>
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
                src="/images/site/hero-boy.png" 
                alt="Boy learning Quran" 
                fill
                priority
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
                <Image src="/images/site/quran-open.png" alt="Open Quran" width={60} height={40} sizes="60px" style={{ borderRadius: '4px' }} />
              </div>
            </motion.div>


          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .glass-card {
          background: rgba(15, 15, 15, 0.4) !important;
          backdrop-filter: blur(30px) saturate(180%) !important;
          -webkit-backdrop-filter: blur(30px) saturate(180%) !important;
          border: 1px solid rgba(255, 255, 255, 0.1) !important;
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4) !important;
          border-radius: 24px !important;
          transition: all 0.3s ease;
          color: white !important;
        }

        :global([data-theme='light']) .glass-card {
          background: rgba(255, 255, 255, 0.6) !important;
          border: 1px solid rgba(255, 255, 255, 0.8) !important;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08) !important;
          color: #0b4d66 !important;
        }

        .premium-glass-btn {
          position: relative;
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          color: white;
          padding: 16px 36px;
          border-radius: 50px;
          font-size: 18px;
          font-weight: 700;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          box-shadow: 0 8px 32px rgba(255, 165, 0, 0.15), inset 0 1px 0 rgba(255,255,255,0.3);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
          z-index: 1;
        }

        .premium-glass-btn.primary {
          background: rgba(var(--accent-rgb), 0.2);
          border: 1px solid rgba(var(--accent-rgb), 0.3);
          box-shadow: 0 8px 32px rgba(var(--accent-rgb), 0.2), inset 0 1px 0 rgba(255,255,255,0.3);
        }

        .premium-glass-btn:hover {
          background: rgba(0, 0, 0, 0.4);
          transform: translateY(-3px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255,255,255,0.1);
          border-color: rgba(255, 255, 255, 0.4);
        }

        .premium-glass-btn.primary:hover {
          background: #06455d; /* Darker version of accent */
          box-shadow: 0 12px 40px rgba(var(--accent-rgb), 0.3), inset 0 1px 0 rgba(255,255,255,0.2);
          border-color: var(--accent);
        }

        .premium-glass-btn :global(.arrow-icon) {
          transition: transform 0.3s ease;
        }

        .premium-glass-btn:hover :global(.arrow-icon) {
          transform: translateX(6px);
        }

        :global([data-theme='light']) .premium-glass-btn:not(.primary) {
          background: rgba(var(--accent-rgb), 0.1);
          border: 1px solid rgba(var(--accent-rgb), 0.2);
          color: var(--accent);
          box-shadow: 0 8px 24px rgba(var(--accent-rgb), 0.12), inset 0 1px 0 rgba(255,255,255,0.5);
        }

        :global([data-theme='light']) .premium-glass-btn.primary {
          background: rgba(var(--accent-rgb), 0.2);
          border: 1px solid rgba(var(--accent-rgb), 0.3);
          color: #0b4d66; /* Dark color for visibility */
          box-shadow: 0 8px 24px rgba(var(--accent-rgb), 0.15), inset 0 1px 0 rgba(255,255,255,0.5);
        }

        .premium-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 8px 16px;
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 100px;
          font-size: 14px;
          font-weight: 600;
        }

        :global([data-theme='light']) .premium-badge {
          background: rgba(var(--accent-rgb), 0.1);
          border: 1px solid rgba(var(--accent-rgb), 0.15);
        }

        @media (max-width: 992px) {
          .hero {
            padding: 120px 0 60px !important;
          }
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
            font-size: 18px !important;
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
          .hero {
            padding: 100px 0 40px !important;
          }
          h1 {
            font-size: 32px !important;
          }
          p {
            font-size: 16px !important;
            margin-bottom: 24px !important;
          }
          .hero-btns {
            flex-direction: column;
            width: 100%;
          }
          .hero-btns button {
            width: 100%;
            justify-content: center;
          }
          .premium-glass-btn {
            padding: 14px 24px !important;
            font-size: 16px !important;
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
