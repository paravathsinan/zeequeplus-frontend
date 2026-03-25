"use client";

import Navbar from "@/components/Navbar";
import AboutStory from "@/components/AboutStory";
import VisionMission from "@/components/VisionMission";
import OurApproach from "@/components/OurApproach";
import OurTeachers from "@/components/OurTeachers";
import ParentPartnership from "@/components/ParentPartnership";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      
      {/* Page Header / Hero for About Page */}
      <section className="about-hero" style={{ 
        padding: '160px 0 30px', 
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
            <h1 style={{ 
              fontSize: '64px', 
              fontWeight: 800, 
              color: 'var(--text-primary)', 
              marginBottom: '20px' 
            }}>
              About <span style={{ color: 'var(--accent)' }}>ZeeQue Plus</span>
            </h1>
            <p style={{ 
              fontSize: '20px', 
              color: 'var(--text-secondary)', 
              maxWidth: '800px', 
              margin: '0 auto' 
            }}>
              Discover our mission to provide the most systematic and joyful Qur’an learning experience for the next generation.
            </p>
          </motion.div>
        </div>
      </section>

      <style jsx>{`
        @media (max-width: 767px) {
          .about-hero {
            padding: 120px 0 30px !important;
          }
          h1 {
            font-size: 38px !important;
            line-height: 1.2 !important;
          }
          p {
            font-size: 16px !important;
            padding: 0 20px;
          }
        }
      `}</style>

      <AboutStory />
      <VisionMission />
      <OurApproach />
      <OurTeachers />
      <ParentPartnership />
      <Footer />
    </main>
  );
}
