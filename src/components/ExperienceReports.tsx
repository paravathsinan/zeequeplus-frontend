"use client";

import { motion } from "framer-motion";
import { Calendar, BarChart3, MessageSquare, CheckCircle2, Clock } from "lucide-react";

export default function ExperienceReports() {
  return (
    <section className="experience-reports" style={{
      padding: '80px 0',
      backgroundColor: 'var(--bg-page)',
      position: 'relative'
    }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div style={{
            display: 'inline-block',
            padding: '8px 20px',
            backgroundColor: 'rgba(var(--accent-rgb), 0.1)',
            borderRadius: '100px',
            fontSize: '14px',
            fontWeight: 700,
            color: 'var(--accent)',
            marginBottom: '24px',
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}>
            Transparency & Feedback
          </div>
          <h2 style={{
            fontSize: '48px',
            fontWeight: 800,
            color: 'var(--text-primary)',
            lineHeight: 1.2
          }}>
            Parent Communication <span style={{ color: 'var(--accent)' }}>& Reports</span>
          </h2>
        </div>

        {/* Bento Grid Layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gridAutoRows: 'minmax(200px, auto)',
          gap: '24px'
        }}>
          
          {/* Progress Updates Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{
              gridColumn: 'span 8',
              gridRow: 'span 2',
              backgroundColor: 'var(--glass-bg)',
              borderRadius: '32px',
              border: '1px solid var(--glass-border)',
              padding: '40px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <div style={{ padding: '12px', backgroundColor: 'rgba(var(--accent-rgb), 0.1)', borderRadius: '16px', color: 'var(--accent)' }}>
                  <BarChart3 size={24} />
                </div>
                <h3 style={{ fontSize: '24px', fontWeight: 700, color: 'var(--text-primary)' }}>Monthly Progress Updates</h3>
              </div>
              <p style={{ fontSize: '17px', color: 'var(--text-secondary)', lineHeight: 1.6, maxWidth: '500px' }}>
                Receive comprehensive monthly summaries of your child's curriculum coverage, recitation quality, and engagement levels.
              </p>
            </div>

            {/* Visual: Mini Bar Chart */}
            <div style={{ 
              marginTop: '40px', 
              display: 'flex', 
              alignItems: 'flex-end', 
              gap: '12px', 
              height: '120px',
              padding: '0 20px'
            }}>
              {[40, 65, 55, 90, 75, 85].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${h}%` }}
                  transition={{ delay: 0.3 + (i * 0.1), duration: 0.8 }}
                  viewport={{ once: true }}
                  style={{
                    flex: 1,
                    backgroundColor: i === 3 ? 'var(--accent)' : 'rgba(var(--accent-rgb), 0.2)',
                    borderRadius: '8px 8px 4px 4px'
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* Attendance Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            style={{
              gridColumn: 'span 4',
              gridRow: 'span 1',
              backgroundColor: 'var(--bg-card)',
              borderRadius: '32px',
              border: '1px solid var(--glass-border)',
              padding: '32px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ padding: '10px', backgroundColor: 'rgba(10, 180, 150, 0.1)', borderRadius: '14px', color: '#0ab496' }}>
                <CheckCircle2 size={20} />
              </div>
              <span style={{ fontSize: '12px', fontWeight: 800, color: '#0ab496', textTransform: 'uppercase' }}>Systematic</span>
            </div>
            <h4 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--text-primary)' }}>Attendance Reports</h4>
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
              Track consistency via our dashboard or receive reports on request. Regularity is the key to memorisation.
            </p>
            <div style={{ marginTop: 'auto', fontSize: '13px', fontWeight: 600, color: 'var(--accent)' }}>
              98.4% Average Consistency
            </div>
          </motion.div>

          {/* Interaction Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            style={{
              gridColumn: 'span 4',
              gridRow: 'span 1',
              backgroundColor: 'var(--glass-bg)',
              borderRadius: '32px',
              border: '1px solid var(--glass-border)',
              padding: '32px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ padding: '10px', backgroundColor: 'rgba(246, 173, 85, 0.1)', borderRadius: '14px', color: '#F6AD55' }}>
                <MessageSquare size={20} />
              </div>
              <h4 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--text-primary)' }}>Direct Interaction</h4>
            </div>
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
              Schedule Parent-Teacher meetings to discuss your child’s spiritual and academic growth.
            </p>
            
            {/* Visual: Floating "Book" UI */}
            <div style={{
              marginTop: '10px',
              display: 'flex',
              gap: '8px'
            }}>
              {[1, 2].map(i => (
                <div key={i} style={{
                  padding: '6px 12px',
                  borderRadius: '100px',
                  border: '1px solid var(--glass-border)',
                  fontSize: '11px',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}>
                  <Clock size={12} /> {i === 1 ? '4:30 PM' : '5:00 PM'}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          .experience-reports div[style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
          }
          .experience-reports div[style*="grid-column"] {
            grid-column: span 1 !important;
          }
          h2 { font-size: 36px !important; }
          .experience-reports .container > div:first-child {
            text-align: center;
          }
        }
        @media (max-width: 576px) {
          .experience-reports {
            padding: 60px 0 !important;
          }
          h2 { font-size: 32px !important; }
          .experience-reports div[style*="padding: 40px"] {
             padding: 24px !important;
          }
           .experience-reports div[style*="padding: 32px"] {
             padding: 24px !important;
          }
        }
      `}</style>
    </section>
  );
}
