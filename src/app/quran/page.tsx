"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import { BookOpen, Star, Shield, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function QuranPage() {
  const features = [
    {
      title: "Interactive Tajweed",
      description: "Master the rules of Quranic recitation with our step-by-step interactive methodology.",
      icon: <Star className="text-[var(--accent)]" size={32} />
    },
    {
      title: "Structured Hifz",
      description: "A comprehensive memorization program designed for students of all levels.",
      icon: <BookOpen className="text-[var(--accent)]" size={32} />
    },
    {
      title: "Character Building",
      description: "Integrating Quranic values into daily life through practical moral education.",
      icon: <Shield className="text-[var(--accent)]" size={32} />
    }
  ];

  return (
    <main>
      <Navbar />
      
      {/* Hero Section */}
      <section className="quran-hero" style={{
        padding: "160px 0 100px",
        background: "radial-gradient(circle at top right, rgba(63, 183, 229, 0.1), transparent), radial-gradient(circle at bottom left, rgba(63, 183, 229, 0.05), transparent)",
        minHeight: "80vh",
        display: "flex",
        alignItems: "center"
      }}>
        <div className="container">
          <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="handwritten" style={{ 
                fontSize: "clamp(48px, 8vw, 84px)", 
                marginBottom: "24px",
                color: "var(--text-primary)"
              }}>
                Zeeque Plus Quran
              </h1>
              <p style={{ 
                fontSize: "20px", 
                color: "var(--text-secondary)", 
                marginBottom: "40px",
                lineHeight: "1.6" 
              }}>
                Embark on a transformative journey with the Book of Allah. Our structured program focuses on excellence in Tajweed, Hifz, and practical implementation of Quranic values.
              </p>
              <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
                <Link href="/enroll">
                  <button className="premium-glass-btn primary" style={{ padding: "14px 32px", fontSize: "16px" }}>
                    Start Learning Now
                    <ArrowRight size={20} className="arrow-icon" style={{ marginLeft: "8px" }} />
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section style={{ padding: "100px 0", backgroundColor: "rgba(var(--accent-rgb), 0.02)" }}>
        <div className="container">
          <div className="grid-3" style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", 
            gap: "40px" 
          }}>
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{
                  padding: "40px",
                  borderRadius: "24px",
                  background: "var(--glass-bg)",
                  border: "1px solid var(--glass-border)",
                  backdropFilter: "blur(12px)",
                  textAlign: "center"
                }}
              >
                <div style={{ 
                  width: "64px", 
                  height: "64px", 
                  borderRadius: "16px", 
                  background: "rgba(var(--accent-rgb), 0.1)", 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "center", 
                  margin: "0 auto 24px" 
                }}>
                  {feature.icon}
                </div>
                <h3 style={{ fontSize: "24px", marginBottom: "16px", color: "var(--text-primary)" }}>{feature.title}</h3>
                <p style={{ color: "var(--text-secondary)", lineHeight: "1.6" }}>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section style={{ padding: "100px 0" }}>
        <div className="container">
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
            gap: "80px",
            alignItems: "center"
          }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="handwritten" style={{ fontSize: "48px", marginBottom: "32px", color: "var(--text-primary)" }}>
                Our Quranic Approach
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                {[
                  "Step-by-step progress from Norani Qaida to Advanced Tajweed",
                  "Personalized Hifz plans tailored to student's pace",
                  "Deep focus on understanding Quranic vocabulary",
                  "Integrated character development (Akhlaq) modules",
                  "Regular assessments and progress tracking"
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: "16px", alignItems: "center" }}>
                    <CheckCircle2 size={24} className="text-[var(--accent)]" />
                    <span style={{ fontSize: "18px", color: "var(--text-secondary)" }}>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              style={{
                position: "relative",
                aspectRatio: "1",
                borderRadius: "32px",
                overflow: "hidden",
                background: "linear-gradient(45deg, var(--accent), #0b4d66)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                padding: "60px",
                textAlign: "center",
                boxShadow: "0 20px 50px rgba(var(--accent-rgb), 0.3)"
              }}
            >
               <div style={{ zIndex: 1 }}>
                  <BookOpen size={120} style={{ marginBottom: "32px", opacity: 0.9 }} />
                  <h3 style={{ fontSize: "32px", fontWeight: "bold" }}>Nurturing Hearts with the Word of Allah</h3>
               </div>
               <div style={{
                 position: "absolute",
                 top: 0,
                 left: 0,
                 right: 0,
                 bottom: 0,
                 background: "url('https://www.transparenttextures.com/patterns/carbon-fibre.png')",
                 opacity: 0.1
               }} />
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />

      <style jsx>{`
        .premium-glass-btn {
          position: relative;
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          color: white;
          padding: 10px 26px;
          border-radius: 50px;
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
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
          transform: translateY(-2px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255,255,255,0.1);
          border-color: rgba(255, 255, 255, 0.4);
        }

        .premium-glass-btn.primary:hover {
          background: #06455d;
          box-shadow: 0 12px 40px rgba(var(--accent-rgb), 0.3), inset 0 1px 0 rgba(255,255,255,0.2);
          border-color: var(--accent);
        }

        .arrow-icon {
          transition: transform 0.3s ease;
        }

        .premium-glass-btn:hover .arrow-icon {
          transform: translateX(4px);
        }

        @media (max-width: 768px) {
          .grid-3 {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </main>
  );
}
