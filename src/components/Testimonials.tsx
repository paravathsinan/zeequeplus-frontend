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
      padding: '30px 0',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Hide scrollbar globally for this section */}
      <div className="container" style={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: '40px',
        alignItems: 'center',
        overflow: 'hidden',
        maxWidth: '100%'
      }}>
        {/* Header */}
        <motion.div
          className="testimonials-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{
            textAlign: 'center',
            marginBottom: '20px',
            display: 'flex',
            flexDirection: 'column' as const,
            alignItems: 'center'
          }}
        >
          <Quote size={60} style={{ color: 'rgba(var(--accent-rgb), 0.1)', marginBottom: '10px', display: 'block' }} />
          <h2 className="testimonials-heading" style={{
            fontSize: '44px',
            fontWeight: 800,
            color: 'var(--text-primary)',
            marginBottom: '16px',
            lineHeight: 1.1,
            textAlign: 'center',
            width: '100%'
          }}>
            What our parents are saying
          </h2>
          <p className="testimonials-subtitle" style={{
            fontSize: '16px',
            color: 'var(--text-secondary)',
            maxWidth: '600px',
            textAlign: 'center',
            padding: '0 16px'
          }}>
            Built on the experience of ZeeQue Preschool & Quran programs, ZeeQue Plus continues the same philosophy – now available for Classes 1–10.
          </p>
        </motion.div>

        {/* Slider Container */}
        <div style={{ position: 'relative', width: '100%', maxWidth: '800px', margin: '0 auto', overflow: 'hidden' }}>
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
                <div className="testimonial-card" style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  padding: '40px',
                  borderRadius: '32px',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  boxShadow: 'none',
                  position: 'relative',
                  marginBottom: '32px',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  overflow: 'hidden'
                }}>
                  <div style={{ display: 'flex', gap: '4px', marginBottom: '20px', position: 'relative', zIndex: 2 }}>
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} size={18} fill="var(--accent)" stroke="var(--accent)" />
                    ))}
                  </div>
                  <p className="testimonial-text" style={{
                    fontSize: '18px',
                    lineHeight: 1.7,
                    color: 'var(--text-primary)',
                    fontStyle: 'italic',
                    position: 'relative',
                    zIndex: 2
                  }}>
                    "{item.text}"
                  </p>
                  
                  {/* Tail removed */}

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
        .testimonial-card {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .testimonial-card:hover {
          background-color: rgba(255, 255, 255, 0.2) !important;
          box-shadow: none !important;
          border-color: rgba(255, 255, 255, 0.5) !important;
        }

        :global([data-theme='light']) .testimonial-card {
          background-color: rgba(11, 77, 102, 0.04) !important;
          border-color: rgba(11, 77, 102, 0.1) !important;
          box-shadow: none !important;
        }

        :global([data-theme='light']) .testimonial-card:hover {
          background-color: rgba(11, 77, 102, 0.08) !important;
          border-color: var(--accent) !important;
        }

        ::-webkit-scrollbar {
          display: none;
        }
        @media (max-width: 768px) {
          .testimonials {
            padding: 40px 0 !important;
          }
          .testimonials-heading {
            font-size: 32px !important;
            padding: 0 16px;
            text-align: center !important;
          }
          .testimonials-subtitle {
            font-size: 15px !important;
          }
          .testimonial-card {
            padding: 32px 24px !important;
            border-radius: 24px !important;
          }
          .testimonial-text {
            font-size: 16px !important;
            line-height: 1.6 !important;
          }
        }
        @media (max-width: 480px) {
          .testimonials-heading {
            font-size: 28px !important;
          }
        }
      `}</style>
    </section>
  );
}
