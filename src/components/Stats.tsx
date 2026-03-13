"use client";

import { motion, animate } from "framer-motion";
import { useState, useEffect } from "react";

import { Users, BookOpen, GraduationCap } from "lucide-react";

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const controls = animate(0, value, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (latest) => setDisplayValue(Math.round(latest))
    });
    return controls.stop;
  }, [value]);

  return (
    <span>
      {displayValue}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const stats = [
    { value: 20000, suffix: "+", label: "Worldwide Learners", icon: Users },
    { value: 400, suffix: "+", label: "Live & Recorded Sessions", icon: BookOpen },
    { value: 50, suffix: "+", label: "Certified Instructors", icon: GraduationCap },
  ];

  return (
    <section className="stats" style={{ 
      padding: '40px 0',
      backgroundColor: 'var(--stats-bg)',
      color: 'white',
      position: 'relative',
      zIndex: 5
    }}>
      <div className="container">
        <div className="stats-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '30px'
        }}>
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              style={{
                textAlign: 'center',
                padding: '24px',
                borderRadius: '20px',
                backgroundColor: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)'
              }}
              className="stat-item"
            >
              <div style={{ 
                color: 'var(--accent)', 
                marginBottom: '16px',
                display: 'flex',
                justifyContent: 'center'
              }}>
                <stat.icon size={32} />
              </div>
              <div style={{ 
                fontSize: '40px', 
                fontWeight: 800, 
                marginBottom: '8px',
                fontFamily: 'var(--font-heading)'
              }} className="stat-number">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <div style={{ 
                fontSize: '16px', 
                opacity: 0.8,
                fontWeight: 500
              }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 992px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 480px) {
          .stats-grid {
            grid-template-columns: 1fr !important;
          }
          .stat-item {
            padding: 20px !important;
          }
          .stat-number {
            font-size: 32px !important;
          }
        }
      `}</style>
    </section>
  );
}
