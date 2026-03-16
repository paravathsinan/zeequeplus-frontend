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
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Sync active index with scroll position
  const handleScroll = () => {
    if (containerRef.current) {
      const { scrollLeft, clientWidth } = containerRef.current;
      // Calculate the index based on the scroll position and client width
      // We divide by clientWidth to get the number of "widths" scrolled
      // and round to the nearest integer to get the current slide index.
      const newIndex = Math.round(scrollLeft / clientWidth);
      if (newIndex !== activeIndex && newIndex < testimonials.length) {
        setActiveIndex(newIndex);
      }
    }
  };

  const goToSlide = (index: number) => {
    if (containerRef.current) {
      const { clientWidth } = containerRef.current;
      containerRef.current.scrollTo({
        left: index * clientWidth,
        behavior: 'smooth'
      });
      setActiveIndex(index);
    }
  };

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (activeIndex + 1) % testimonials.length;
      goToSlide(nextIndex);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Cleanup on component unmount or activeIndex change
  }, [activeIndex]); // Re-run effect when activeIndex changes to reset the timer

  return (
    <section className="testimonials" style={{
      padding: '60px 0',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="container" style={{
        display: 'grid',
        gridTemplateColumns: '1fr', // Simplified for better slider focus
        gap: '40px',
        alignItems: 'center'
      }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '20px' }}
        >
          <Quote size={60} style={{ color: 'rgba(var(--accent-rgb), 0.1)', marginBottom: '10px' }} />
          <h2 style={{
            fontSize: '44px',
            fontWeight: 800,
            color: 'var(--text-primary)',
            marginBottom: '16px',
            lineHeight: 1.1
          }}>
            What our parents are saying
          </h2>
          <p style={{
            fontSize: '16px',
            color: 'var(--text-secondary)',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Built on the experience of ZeeQue Preschool & Quran programs, ZeeQue Plus continues the same philosophy – now available for Classes 1–10.
          </p>
        </motion.div>

        {/* Slider Container */}
        <div style={{ position: 'relative', width: '100%', maxWidth: '800px', margin: '0 auto' }}>
          <div 
            ref={containerRef}
            onScroll={handleScroll}
            style={{
              display: 'flex',
              overflowX: 'auto',
              scrollbarWidth: 'none', // For Firefox
              msOverflowStyle: 'none', // For IE/Edge
              scrollSnapType: 'x mandatory',
              gap: '0', // Cards will take full width of parent
              cursor: 'grab'
            }}
          >
            {testimonials.map((item, index) => (
              <motion.div
                key={index}
                style={{
                  flex: '0 0 100%', // Each card takes full width of the container
                  scrollSnapAlign: 'center',
                  padding: '10px' // Add some padding around the card
                }}
              >
                {/* Speech Bubble Card */}
                <div style={{
                  backgroundColor: 'var(--card-bg)',
                  padding: '40px',
                  borderRadius: '32px',
                  border: '1px solid var(--glass-border)',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
                  position: 'relative',
                  marginBottom: '32px'
                }}>
                  <div style={{ display: 'flex', gap: '4px', marginBottom: '20px' }}>
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} size={18} fill="var(--accent)" stroke="var(--accent)" />
                    ))}
                  </div>
                  <p style={{
                    fontSize: '18px',
                    lineHeight: 1.7,
                    color: 'var(--text-primary)',
                    fontStyle: 'italic'
                  }}>
                    "{item.text}"
                  </p>
                  
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

                {/* User Info */}
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '15px', 
                  paddingLeft: '20px'
                }}>
                  <div style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    border: '3px solid var(--accent)'
                  }}>
                    <Image 
                      src={item.avatar} 
                      alt={item.name} 
                      width={60} 
                      height={60} 
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div>
                    <div style={{ fontWeight: 800, color: 'var(--text-primary)', fontSize: '18px' }}>{item.name}</div>
                    <div style={{ fontSize: '14px', color: 'var(--text-muted)' }}>{item.time}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Navigation Dots */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '12px',
          marginTop: '20px'
        }}>
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              style={{
                width: activeIndex === index ? '32px' : '12px',
                height: '12px',
                borderRadius: '6px',
                backgroundColor: activeIndex === index ? 'var(--accent)' : 'var(--glass-border)',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                padding: 0
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        ::-webkit-scrollbar {
          display: none;
        }
        @media (max-width: 768px) {
          h2 {
            font-size: 32px !important;
          }
          div[style*="padding: 40px"] {
            padding: 24px !important;
          }
          p[style*="font-size: 18px"] {
            font-size: 16px !important;
          }
        }
      `}</style>
    </section>
  );
}
