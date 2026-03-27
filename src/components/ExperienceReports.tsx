"use client";

import { motion } from "framer-motion";
import { BarChart3, CheckCircle2, MessageSquare } from "lucide-react";

export default function ExperienceReports() {
  const reportItems = [
    {
      icon: <BarChart3 size={24} />,
      title: "Monthly Progress Updates",
      desc: "Receive comprehensive monthly summaries of your child's curriculum coverage, recitation quality, and engagement levels.",
      accent: "radial-gradient(circle at top right, rgba(var(--accent-rgb), 0.15), transparent 60%)"
    },
    {
      icon: <CheckCircle2 size={24} />,
      title: "Attendance Reports",
      desc: "Track consistency via our dashboard or receive reports on request. Regularity is the key to memorisation.",
      accent: "radial-gradient(circle at bottom left, rgba(14, 165, 233, 0.1), transparent 60%)"
    },
    {
      icon: <MessageSquare size={24} />,
      title: "Parent-Teacher Interaction",
      desc: "Schedule meetings to discuss your child's spiritual and academic growth, review goals and adjust learning pace.",
      accent: "radial-gradient(circle at center, rgba(236, 72, 153, 0.08), transparent 70%)"
    }
  ];

  return (
    <section className="experience-reports">
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
          <h2
            className="experience-reports-title"
            style={{
              fontSize: '56px',
              fontWeight: 800,
              color: 'var(--text-primary)',
              lineHeight: 1.1,
              margin: 0,
              letterSpacing: '-2px'
            }}
          >
            Parent Communication <span style={{ color: 'var(--accent)' }}>& Reports</span>
          </h2>
        </div>

        <div className="report-items-grid">
          {reportItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="report-item-card"
            >
              <div className="card-accent" style={{ background: item.accent }}></div>
              <div className="icon-wrapper">
                {item.icon}
                <div className="icon-glow"></div>
              </div>
              <div className="card-content">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .experience-reports {
          padding: 50px 0;
          background-color: var(--bg-page);
          position: relative;
          overflow: hidden;
          margin: 0 24px;
          border-radius: 80px;
        }
        .report-items-grid {
          display: flex;
          flex-direction: column;
          gap: 28px;
          max-width: 600px;
          margin: 0 auto;
        }
        .report-item-card {
          background: rgba(var(--bg-card-rgb), 0.4);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 40px;
          padding: 48px 32px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 24px;
          transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
          position: relative;
          overflow: hidden;
        }
        .card-accent {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
          z-index: 0;
        }
        .report-item-card:hover {
          transform: translateY(-12px);
          background: rgba(var(--bg-card-rgb), 0.6);
          border-color: rgba(var(--accent-rgb), 0.4);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2);
        }
        .icon-wrapper {
          width: 72px;
          height: 72px;
          background: linear-gradient(135deg, rgba(var(--accent-rgb), 0.2), rgba(var(--accent-rgb), 0.05));
          border: 1px solid rgba(var(--accent-rgb), 0.2);
          border-radius: 24px;
          color: var(--accent);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          z-index: 1;
          margin: 0 auto;
        }
        .icon-glow {
          position: absolute;
          width: 100%;
          height: 100%;
          background: var(--accent);
          filter: blur(20px);
          opacity: 0.15;
          z-index: -1;
        }
        .card-content {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          gap: 12px;
          align-items: center;
        }
        h3 {
          font-size: 26px;
          font-weight: 800;
          color: var(--text-primary);
          margin: 0;
          letter-spacing: -0.5px;
        }
        p {
          font-size: 17px;
          color: var(--text-secondary);
          line-height: 1.7;
          margin: 0;
          max-width: 440px;
        }

        @media (min-width: 1024px) {
          .report-items-grid {
            flex-direction: row;
            max-width: 1240px;
            align-items: stretch;
            gap: 32px;
          }
          .report-item-card {
            flex: 1;
            padding: 60px 40px;
          }
        }

        @media (max-width: 768px) {
          .experience-reports {
            padding: 60px 0 !important;
            margin: 0 16px;
            border-radius: 48px;
          }
          .experience-reports-title {
            font-size: 36px !important;
            letter-spacing: -1px !important;
          }
          .report-item-card {
            padding: 48px 24px;
            border-radius: 32px;
            gap: 20px;
          }
          h3 {
            font-size: 22px;
          }
          p {
            font-size: 15px;
          }
          .icon-wrapper {
            width: 64px;
            height: 64px;
          }
        }
      `}</style>
    </section>
  );
}
