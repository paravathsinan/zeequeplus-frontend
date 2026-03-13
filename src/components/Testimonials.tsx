"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const testimonials = [
  {
    text: "Alhamdulillah, my daughter's recitation has improved significantly. The teachers are very patient and the classes are perfectly scheduled around her school timings.",
    name: "Ryan Almeida",
    time: "1 day ago",
    avatar: "/images/testimonials/avatar-1.png",
    rating: 5
  },
  {
    text: "The structured levels make it so easy for my son to track his progress. He actually looks forward to his Quran lessons now, which was rare before!",
    name: "Blossom Menezes",
    time: "3 days ago",
    avatar: "/images/testimonials/avatar-2.png",
    rating: 5
  },
  {
    text: "Highly recommend for working parents. The systematic approach to Tajweed and Adkar ensures a holistic learning experience even in a busy schedule.",
    name: "Jason Smith", // Using Jason Smith as placeholder for the 3rd one in image
    time: "1 week ago",
    avatar: "/images/testimonials/avatar-3.png",
    rating: 5
  }
];

export default function Testimonials() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const { scrollLeft, clientWidth, scrollWidth } = containerRef.current;
      let scrollTo;
      
      if (direction === 'left') {
        scrollTo = scrollLeft - clientWidth / 2;
        if (scrollTo < 0) scrollTo = scrollWidth - clientWidth; // Wrap to end
      } else {
        scrollTo = scrollLeft + clientWidth / 2;
        if (scrollTo + clientWidth >= scrollWidth) scrollTo = 0; // Wrap to start
      }
      
      containerRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };


  return (
    <section className="testimonials" style={{
      padding: '120px 0',
      backgroundColor: 'var(--bg-page)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="container" style={{
        display: 'grid',
        gridTemplateColumns: '350px 1fr',
        gap: '60px',
        alignItems: 'flex-start'
      }}>
        {/* Left Side: Header & Nav */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Quote size={80} style={{ color: 'rgba(var(--accent-rgb, 128, 128, 128), 0.2)', marginBottom: '20px' }} />
          <h2 style={{
            fontSize: '44px',
            fontWeight: 800,
            color: 'var(--text-primary)',
            marginBottom: '24px',
            lineHeight: 1.1
          }}>
            What our customers are saying
          </h2>
          
          <div style={{
            fontSize: '16px',
            color: 'var(--text-secondary)',
            lineHeight: 1.6,
            marginBottom: '40px',
            maxWidth: '300px'
          }}>
            <strong style={{ color: 'var(--text-primary)', display: 'block', marginBottom: '8px' }}>Trust & Continuity</strong>
            Built on the experience of ZeeQue Preschool & Quran programs, ZeeQue Plus continues the same philosophy – now available for Classes 1–10.
          </div>

          {/* Navigation */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <button 
              onClick={() => scroll('left')}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--text-secondary)',
                cursor: 'pointer',
                opacity: 0.5,
                transition: 'opacity 0.3s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '0.5'}
            >
              <ChevronLeft size={32} />
            </button>
            <div style={{
              width: '120px',
              height: '3px',
              backgroundColor: 'var(--glass-border)',
              position: 'relative'
            }}>
              <motion.div 
                style={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  height: '100%',
                  width: '30%',
                  backgroundColor: 'var(--text-primary)'
                }}
              />
            </div>
            <button 
              onClick={() => scroll('right')}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--text-secondary)',
                cursor: 'pointer',
                opacity: 0.5,
                transition: 'opacity 0.3s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '0.5'}
            >
              <ChevronRight size={32} />
            </button>
          </div>
        </motion.div>

        {/* Right Side: Cards */}
        <div 
          ref={containerRef}
          style={{
            display: 'flex',
            gap: '30px',
            overflowX: 'auto',
            paddingBottom: '40px',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            alignItems: 'stretch' // Ensure all cards have equal height
          }}
        >
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              style={{
                flex: '0 0 auto', // Allow width to grow auto
                minWidth: '350px',
                maxWidth: '500px', // Prevent extreme width
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              {/* Speech Bubble */}
              <div style={{
                backgroundColor: 'var(--card-bg)',
                padding: '40px 32px',
                borderRadius: '30px',
                position: 'relative',
                marginBottom: '30px',
                border: '1px solid var(--glass-border)',
                boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                height: '240px', // Fixed length (height)
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}>
                <p style={{
                  fontSize: '15px',
                  lineHeight: 1.7,
                  color: 'var(--text-primary)',
                  marginBottom: '20px',
                  overflowY: 'auto', // Handle overflow within fixed height if necessary
                  paddingRight: '5px'
                }}>
                  {item.text}
                </p>
                
                <div style={{ display: 'flex', gap: '4px' }}>
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="#00c896" stroke="#00c896" />
                  ))}
                </div>

                {/* Tail */}
                <div style={{
                  position: 'absolute',
                  bottom: '-12px',
                  left: '40px',
                  width: '24px',
                  height: '24px',
                  backgroundColor: 'inherit', // Match parent card-bg
                  borderRight: '1px solid var(--glass-border)',
                  borderBottom: '1px solid var(--glass-border)',
                  transform: 'rotate(45deg)',
                  zIndex: 0
                }} />
              </div>

              {/* User Info - Pinned to bottom */}
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '15px', 
                paddingLeft: '10px',
                marginTop: 'auto' // Push profile to match bottom alignment
              }}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: '2px solid var(--accent)'
                }}>
                  <Image 
                    src={item.avatar} 
                    alt={item.name} 
                    width={56} 
                    height={56} 
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div>
                  <div style={{ fontWeight: 700, color: 'var(--text-primary)', fontSize: '16px' }}>{item.name}</div>
                  <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>{item.time}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          .container {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
            text-align: center;
          }
          .container > div:first-child div[style*="max-width"] {
            margin: 0 auto 32px !important;
          }
          .container > div:first-child div[style*="display: flex"] {
            justify-content: center;
          }
          h2 {
            font-size: 36px !important;
          }
        }
        @media (max-width: 576px) {
          .testimonials {
            padding: 60px 0 !important;
          }
          h2 {
            font-size: 30px !important;
            padding: 0 20px;
          }
          .container {
            padding: 0 !important;
            max-width: 100vw !important;
            overflow: hidden;
          }
          .container > div:first-child {
            padding: 0 20px;
            margin-bottom: 30px !important;
          }
          .container div[ref] {
            padding: 0 20px 40px !important;
            gap: 20px !important;
            scroll-snap-type: x mandatory;
            scroll-padding: 20px;
          }
          .container div[ref] > div {
            scroll-snap-align: center;
            min-width: 280px !important;
            max-width: 320px !important;
          }
          .container div[ref] div[style*="height: 240px"] {
             height: auto !important;
             min-height: 200px;
             padding: 24px !important;
          }
        }
        ::-webkit-scrollbar {
          display: none;
        }
  }
      `}</style>
    </section>
  );
}
