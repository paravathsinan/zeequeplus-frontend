"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { Smartphone, Headphones, Coffee, Check } from "lucide-react";

const requirements = [
  {
    id: "01",
    title: "Essential Hardware",
    points: [
      "Smartphone, Tablet, or Laptop",
      "Stable High-speed Internet",
      "Functional Web Camera"
    ],
    icon: <Smartphone size={24} />,
    color: "var(--accent)"
  },
  {
    id: "02",
    title: "Audio Performance",
    points: [
      "Professional-grade Headphones",
      "Noise-cancelling Microphone",
      "Distraction-free Audio Environment"
    ],
    icon: <Headphones size={24} />,
    color: "#4FD1C5"
  },
  {
    id: "03",
    title: "The Quiet Corner",
    points: [
      "Dedicated Peaceful Space",
      "Clutter-free Surface",
      "Spiritual Readiness Area"
    ],
    icon: <Coffee size={24} />,
    color: "#F6AD55"
  }
];

export default function TechRequirements() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section 
      ref={containerRef}
      className="tech-requirements" 
      style={{
        padding: '100px 0',
        backgroundColor: 'var(--bg-page)',
        position: 'relative'
      }}
    >
      <div className="container" style={{
        display: 'grid',
        gridTemplateColumns: 'minmax(300px, 1fr) 1.5fr',
        gap: '100px',
        alignItems: 'flex-start'
      }}>
        
        {/* Sticky Left Side */}
        <div style={{ position: 'sticky', top: '150px' }}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
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
              letterSpacing: '2px'
            }}>
              Technical Readiness
            </div>
            
            <h2 style={{
              fontSize: '56px',
              fontWeight: 900,
              color: 'var(--text-primary)',
              lineHeight: 1.1,
              marginBottom: '32px',
              fontFamily: 'var(--font-heading)'
            }}>
              Equipping Your <br />
              <span style={{ color: 'var(--accent)', fontStyle: 'italic', fontFamily: 'serif' }}>Digital Madrasa.</span>
            </h2>

            <p style={{
              fontSize: '19px',
              color: 'var(--text-secondary)',
              maxWidth: '380px',
              lineHeight: 1.7,
              opacity: 0.8
            }}>
              We’ve simplified the technical side so your child can focus entirely on their spiritual journey.
            </p>
          </motion.div>
        </div>

        {/* Scrolling Right Side with Animated Path */}
        <div style={{ position: 'relative', paddingLeft: '40px' }}>
          {/* Animated SVG Path */}
          <div style={{
            position: 'absolute',
            left: '0',
            top: '20px',
            bottom: '20px',
            width: '2px',
            backgroundColor: 'rgba(var(--text-primary-rgb), 0.05)',
            zIndex: 1
          }}>
            <motion.div style={{
              width: '100%',
              height: '100%',
              backgroundColor: 'var(--accent)',
              scaleY: pathLength,
              transformOrigin: 'top',
              boxShadow: '0 0 15px var(--accent)'
            }} />
          </div>

          <div style={{ display: 'grid', gap: '140px' }}>
            {requirements.map((req, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
                style={{ position: 'relative' }}
              >
                {/* Massive Background ID */}
                <span style={{
                  position: 'absolute',
                  top: '-40px',
                  right: '0',
                  fontSize: '140px',
                  fontWeight: 900,
                  color: 'rgba(var(--text-primary-rgb), 0.03)',
                  lineHeight: 1,
                  fontFamily: 'serif',
                  pointerEvents: 'none'
                }}>
                  {req.id}
                </span>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '24px',
                  marginBottom: '32px'
                }}>
                  <div style={{
                    width: '64px',
                    height: '64px',
                    backgroundColor: 'var(--bg-card)',
                    borderRadius: '20px',
                    border: '1px solid var(--glass-border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: req.color,
                    boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
                  }}>
                    {req.icon}
                  </div>
                  <h3 style={{ fontSize: '32px', fontWeight: 800, color: 'var(--text-primary)' }}>
                    {req.title}
                  </h3>
                </div>

                <div style={{ display: 'grid', gap: '16px' }}>
                  {req.points.map((point, pIdx) => (
                    <motion.div
                      key={pIdx}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + (pIdx * 0.1) }}
                      viewport={{ once: true }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        fontSize: '18px',
                        color: 'var(--text-secondary)',
                        fontWeight: 500
                      }}
                    >
                      <Check size={18} style={{ color: req.color }} />
                      {point}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          .container {
            grid-template-columns: 1fr !important;
            gap: 60px !important;
          }
          div[style*="position: sticky"] {
            position: relative !important;
            top: 0 !important;
            text-align: center;
          }
          div[style*="position: sticky"] div[style*="display: inline-block"] {
            margin: 0 auto 32px;
          }
          p { margin: 0 auto 40px !important; }
          h2 { font-size: 42px !important; }
          .tech-requirements div[style*="padding-left: 40px"] {
            padding-left: 0 !important;
          }
          .tech-requirements div[style*="position: absolute; left: 0"] {
             display: none !important;
          }
          .tech-requirements div[style*="gap: 140px"] {
             gap: 80px !important;
          }
        }
        @media (max-width: 576px) {
          .tech-requirements {
             padding: 60px 0 !important;
          }
          h2 { font-size: 32px !important; }
          .tech-requirements span[style*="font-size: 140px"] {
             font-size: 80px !important;
             top: -20px !important;
          }
           .tech-requirements div[style*="display: flex; align-items: center; gap: 24px"] {
             flex-direction: column !important;
             text-align: center !important;
          }
        }
      `}</style>
    </section>
  );
}
