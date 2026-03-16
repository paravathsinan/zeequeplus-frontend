"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star, Clock } from "lucide-react";
import { blogs } from "@/data/blogs";

const featuredArticles = blogs.slice(0, 3);

export default function FeaturedBlogs() {
  return (
    <section className="featured-blogs" style={{ padding: '80px 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <div style={{
            padding: '8px 16px',
            backgroundColor: 'rgba(255, 170, 0, 0.1)',
            borderRadius: '100px',
            color: '#FFAA00',
            fontSize: '12px',
            fontWeight: 800,
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            marginBottom: '16px'
          }}>
            <Star size={14} fill="currentColor" /> FEATURED
          </div>
          <h2 style={{
            fontSize: '48px',
            fontWeight: 800,
            color: 'var(--text-primary)',
            fontFamily: 'var(--font-heading)'
          }}>
            Featured Educational Articles
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '18px', maxWidth: '600px', margin: '10px auto' }}>
            Hand-picked resources that every parent and student should read.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '30px'
        }}>
          {featuredArticles.map((article, idx) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              style={{
                backgroundColor: 'var(--bg-card)',
                borderRadius: '32px',
                overflow: 'hidden',
                border: '1px solid var(--glass-border)',
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                cursor: 'pointer'
              }}
            >
              <div style={{ position: 'relative', height: '240px' }}>
                <div style={{
                  position: 'absolute',
                  top: '20px',
                  left: '20px',
                  backgroundColor: article.color,
                  color: '#fff',
                  padding: '6px 16px',
                  borderRadius: '100px',
                  fontSize: '12px',
                  fontWeight: 700,
                  zIndex: 2,
                  boxShadow: `0 4px 15px ${article.color}55`
                }}>
                  {article.category}
                </div>
                <div style={{ width: '100%', height: '100%', backgroundColor: '#eee' }}>
                  {/* Placeholder until high-end assets are generated */}
                  <div style={{ 
                    width: '100%', 
                    height: '100%', 
                    background: `linear-gradient(135deg, ${article.color}22 0%, ${article.color}44 100%)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative'
                  }}>
                    <Image 
                      src={article.image} 
                      alt={article.title} 
                      fill 
                      sizes="(max-width: 768px) 100vw, 33vw"
                      style={{ objectFit: 'cover', opacity: 0.9 }}
                    />
                  </div>
                </div>
              </div>
              
              <div style={{ padding: '30px' }}>
                <h3 style={{
                  fontSize: '22px',
                  fontWeight: 700,
                  lineHeight: 1.4,
                  color: 'var(--text-primary)',
                  marginBottom: '16px',
                  fontFamily: 'var(--font-heading)'
                }}>
                  {article.title}
                </h3>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '20px',
                  color: 'var(--text-secondary)',
                  fontSize: '14px'
                }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Clock size={16} /> {article.readTime}
                  </span>
                  <span>{article.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          .featured-blogs div[style*="grid-template-columns"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          h2 { font-size: 36px !important; }
        }
        @media (max-width: 640px) {
          .featured-blogs div[style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
          }
          .featured-blogs { padding: 40px 0 !important; }
          h2 { font-size: 32px !important; }
          p { font-size: 16px !important; }
        }
      `}</style>
    </section>
  );
}
