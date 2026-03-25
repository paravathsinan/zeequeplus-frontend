"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CTASection() {
  return (
    <section style={{ 
      padding: '80px 0',
      backgroundColor: 'var(--bg-page)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{
            background: 'linear-gradient(135deg, #06394d 0%, #0b4d66 100%)',
            borderRadius: '24px',
            padding: '40px 60px',
            position: 'relative',
            overflow: 'hidden',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            textAlign: 'left',
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '40px'
          }}
          className="cta-card"
        >
          <div className="cta-content" style={{ flex: 1 }}>
            <h2 style={{
              fontSize: '32px',
              fontWeight: 800,
              color: '#ffffff',
              marginBottom: '12px',
              lineHeight: 1.2,
            }}>
              Give Your Child the <span style={{ color: 'var(--accent)' }}>Light of the Quran</span>
            </h2>

            <p style={{
              fontSize: '16px',
              color: 'rgba(255, 255, 255, 0.8)',
              maxWidth: '700px',
              lineHeight: 1.5,
              margin: 0
            }}>
              "The best among you are those who learn the Quran and teach it." 
              Provide your children with a foundation of faith, wisdom, and character that will guide them for a lifetime.
            </p>

            {/* Mobile-only Enroll Button */}
            <div className="mobile-cta-btn" style={{ marginTop: '24px' }}>
              <Link href="/enroll">
                <button className="premium-glass-btn primary" style={{ 
                  padding: '16px 40px', 
                  fontSize: '18px',
                  borderRadius: '100px',
                  whiteSpace: 'nowrap'
                }}>
                  <span>Enroll Now</span>
                  <ArrowRight className="arrow-icon" size={22} />
                </button>
              </Link>
            </div>
          </div>

          <div className="cta-action desktop-cta-btn" style={{ flexShrink: 0 }}>
            <Link href="/enroll">
              <button className="premium-glass-btn primary" style={{ 
                padding: '16px 40px', 
                fontSize: '18px',
                borderRadius: '100px',
                whiteSpace: 'nowrap'
              }}>
                <span>Enroll Now</span>
                <ArrowRight className="arrow-icon" size={22} />
              </button>
            </Link>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .premium-glass-btn {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 12px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          color: white;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
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
          background: #06455d;
          box-shadow: 0 12px 40px rgba(var(--accent-rgb), 0.3), inset 0 1px 0 rgba(255,255,255,0.2);
          border-color: var(--accent);
        }

        .premium-glass-btn :global(.arrow-icon) {
          transition: transform 0.3s ease;
        }

        .premium-glass-btn:hover :global(.arrow-icon) {
          transform: translateX(6px);
        }

        .mobile-cta-btn {
          display: none;
        }

        @media (max-width: 767px) {
          .desktop-cta-btn {
            display: none !important;
          }

          .mobile-cta-btn {
            display: block !important;
          }

          .cta-card {
            flex-direction: column !important;
            align-items: flex-start !important;
            padding: 32px 24px !important;
            gap: 24px !important;
            margin: 0 16px !important;
            width: auto !important;
            box-sizing: border-box !important;
          }

          .cta-content, .cta-action {
            width: 100% !important;
            flex: none !important;
          }

          .cta-card h2 { 
            font-size: 26px !important;
            line-height: 1.2 !important;
          }

          .cta-card p { 
            font-size: 15px !important; 
          }

          .premium-glass-btn {
            width: 100% !important;
            justify-content: center !important;
          }
        }
      `}</style>
    </section>
  );
}
