"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  color: string;
}

const faqs: FAQItem[] = [
  {
    id: 1,
    question: "My child doesn't know any Arabic yet. Can they join?",
    answer: "Yes. Beginners are most welcome. We place students in levels based on a short evaluation to ensure they start at the right pace.",
    color: "#4FD1C5" // Teal
  },
  {
    id: 2,
    question: "If we miss a class, what happens?",
    answer: "Teachers give revision points and practice tasks so the child can catch up. In some cases, a brief extra support slot may be arranged as per policy.",
    color: "#63B3ED" // Blue
  },
  {
    id: 3,
    question: "How many days a week are classes?",
    answer: "Classes are conducted on fixed days per week as per batch. Details will be shared in the admission communication.",
    color: "#F6AD55" // Orange
  },
  {
    id: 4,
    question: "Do students get a certificate?",
    answer: "Yes. On completing the yearly syllabus and assessments, students receive a ZeeQue Plus level completion certificate.",
    color: "#FC8181" // Coral/Red
  }
];

export default function ExperienceFAQs() {
  const [openId, setOpenId] = useState<number | null>(1);

  return (
    <section className="experience-faqs" style={{ padding: '120px 0', backgroundColor: 'var(--bg-page)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              display: 'inline-block',
              padding: '8px 20px',
              backgroundColor: 'rgba(var(--accent-rgb), 0.1)',
              borderRadius: '100px',
              fontSize: '14px',
              fontWeight: 700,
              color: 'var(--accent)',
              marginBottom: '24px',
              textTransform: 'uppercase',
              letterSpacing: '2px'
            }}
          >
            Support & Clarity
          </motion.div>
          <h2 style={{
            fontSize: '56px',
            fontWeight: 800,
            color: 'var(--text-primary)',
            lineHeight: 1.1,
            marginBottom: '24px'
          }}>
            Frequently <span style={{ color: 'var(--accent)' }}>Asked Questions</span>
          </h2>
          <p style={{
            fontSize: '19px',
            color: 'var(--text-secondary)',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: 1.6
          }}>
            Got questions? We've got answers. Everything you need to know about starting your child's journey.
          </p>
        </div>

      <div style={{ maxWidth: '800px', margin: '0 auto', display: 'grid', gap: '20px' }}>
          {faqs.map((faq) => (
            <motion.div
              key={faq.id}
              onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
              style={{
                backgroundColor: 'var(--bg-card)',
                borderRadius: '24px',
                border: '1px solid var(--glass-border)',
                borderColor: openId === faq.id ? `${faq.color}66` : 'var(--glass-border)',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: openId === faq.id ? `0 15px 40px ${faq.color}15` : 'none',
                transform: openId === faq.id ? 'scale(1.01)' : 'scale(1)'
              }}
              whileHover={{ 
                borderColor: `${faq.color}aa`,
                boxShadow: `0 10px 30px ${faq.color}10`
              }}
            >
              <div style={{
                padding: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '20px'
              }} className="faq-header">
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                  <div className="faq-glass-icon" style={{
                    '--faq-color': faq.color,
                    '--is-open': openId === faq.id ? '1' : '0'
                  } as any}>
                    <HelpCircle size={20} />
                  </div>
                  <h3 style={{
                    fontSize: '22px',
                    fontWeight: 700,
                    color: openId === faq.id ? faq.color : 'var(--text-primary)',
                    transition: 'all 0.3s ease',
                    fontFamily: 'var(--font-heading)'
                  }}>
                    {faq.question}
                  </h3>
                </div>
                <motion.div
                  animate={{ rotate: openId === faq.id ? 180 : 0, color: openId === faq.id ? faq.color : 'var(--text-secondary)' }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  className="faq-chevron"
                >
                  <ChevronDown size={24} />
                </motion.div>
              </div>

              <AnimatePresence initial={false}>
                {openId === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                  >
                    <div style={{ 
                      padding: '0 32px 32px 92px',
                      fontSize: '18px',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.7,
                      opacity: 0.9
                    }} className="faq-content">
                      <div style={{
                        width: '30px',
                        height: '2.5px',
                        backgroundColor: `${faq.color}44`,
                        marginBottom: '20px',
                        borderRadius: '2px'
                      }} />
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          h2 { font-size: 42px !important; }
        }
        @media (max-width: 640px) {
          .experience-faqs { padding: 60px 0 !important; }
          h2 { font-size: 32px !important; }
          p { font-size: 16px !important; }
          .faq-header { padding: 20px !important; }
          h3 { font-size: 18px !important; }
          .faq-content { padding: 0 20px 20px 20px !important; }
           .faq-glass-icon { width: 36px !important; height: 36px !important; flex-shrink: 0; }
        }
        .faq-glass-icon {
          width: 44px;
          height: 44px;
          background: rgba(var(--bg-card-rgb), 0.4);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--faq-color);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05), inset 0 0 10px rgba(var(--faq-color-rgb), 0.1);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          position: relative;
          overflow: hidden;
        }
        .faq-glass-icon::after {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.3s;
        }
        .faq-glass-icon[style*="--is-open: 1"] {
          background: var(--faq-color);
          color: #fff;
          border-color: var(--faq-color);
          box-shadow: 0 10px 25px rgba(var(--faq-color-rgb), 0.3), inset 0 0 15px rgba(255,255,255,0.2);
          transform: scale(1.1);
        }
        .faq-glass-icon[style*="--is-open: 0"]:hover {
          transform: scale(1.1) rotate(5deg);
          border-color: var(--faq-color);
          background: rgba(var(--bg-card-rgb), 0.6);
        }
        .faq-glass-icon:hover::after {
          opacity: 1;
        }
      `}</style>

      {/* Decorative Blur */}
      <div style={{
        position: 'absolute',
        bottom: '0',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '60%',
        height: '400px',
        background: 'radial-gradient(circle, rgba(var(--accent-rgb), 0.05) 0%, transparent 70%)',
        filter: 'blur(100px)',
        zIndex: 0,
        pointerEvents: 'none'
      }} />
    </section>
  );
}
