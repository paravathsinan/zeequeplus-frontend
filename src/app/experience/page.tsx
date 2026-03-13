"use client";

import Navbar from "@/components/Navbar";
import ClassFormat from "@/components/ClassFormat";
import BatchOptions from "@/components/BatchOptions";
import ExperienceReports from "@/components/ExperienceReports";
import TechRequirements from "@/components/TechRequirements";
import ExperienceFAQs from "@/components/ExperienceFAQs";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function ExperiencePage() {
  return (
    <main>
      <Navbar />
      
      {/* Page Header / Hero for Learning Experience */}
      <section style={{ 
        padding: '80px 0 30px', 
        backgroundColor: 'var(--bg-page)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
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
              letterSpacing: '2px'
            }}>
              Learning Experience
            </div>
            <h1 style={{ 
              fontSize: '64px', 
              fontWeight: 800, 
              color: 'var(--text-primary)', 
              marginBottom: '20px' 
            }}>
              How <span style={{ color: 'var(--accent)' }}>ZeeQue Plus</span> Works
            </h1>
            <p style={{ 
              fontSize: '20px', 
              color: 'var(--text-secondary)', 
              maxWidth: '800px', 
              margin: '0 auto' 
            }}>
              Step into a systematic and joyful journey of Quranic discovery designed for the modern student.
            </p>
          </motion.div>
        </div>
        
        {/* Background blobs */}
        <div style={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(99, 179, 237, 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          zIndex: 1
        }} />
      </section>

      <ClassFormat />
      <BatchOptions />
      <ExperienceReports />
      <TechRequirements />
      <ExperienceFAQs />
      
      <Footer />
    </main>
  );
}
