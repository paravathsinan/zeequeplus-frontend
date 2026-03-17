"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Clock, ArrowUpRight } from "lucide-react";

interface BlogCardProps {
  article: {
    title: string;
    excerpt: string;
    category: string;
    image: string;
    date: string;
    readTime: string;
    author: string;
  };
}

export default function BlogCard({ article }: BlogCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      style={{
        backgroundColor: 'var(--bg-card)',
        borderRadius: '24px',
        overflow: 'hidden',
        border: '1px solid var(--glass-border)',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'all 0.4s ease',
        boxShadow: '0 10px 30px -10px rgba(0,0,0,0.1)'
      }}
      className="blog-card"
    >
      {/* Top: Image */}
      <div className="image-wrapper" style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute',
          top: '16px',
          left: '16px',
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(10px)',
          color: 'var(--accent)',
          padding: '4px 12px',
          borderRadius: '8px',
          fontSize: '11px',
          fontWeight: 700,
          zIndex: 2,
          border: '1px solid var(--glass-border)'
        }} className="desktop-badge">
          {article.category}
        </div>
        <div style={{ width: '100%', height: '100%', backgroundColor: '#f5f5f5' }}>
           {/* Placeholder for latest article images */}
           <div style={{ 
             width: '100%', 
             height: '100%', 
             backgroundColor: 'rgba(var(--accent-rgb), 0.05)',
             display: 'flex',
             alignItems: 'center',
              justifyContent: 'center',
              position: 'relative'
           }}>
             <Image 
               src={article.image} 
               alt={article.title} 
               fill 
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }}
               className="card-image"
             />
           </div>
        </div>
      </div>

      <div className="card-content-wrapper" style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
        {/* Category Badge Below Image (Mobile Only) */}
        <div className="mobile-badge" style={{ marginBottom: '16px', display: 'none' }}>
          <span style={{
            backgroundColor: 'rgba(var(--accent-rgb), 0.1)',
            color: 'var(--accent)',
            padding: '4px 12px',
            borderRadius: '100px',
            fontSize: '11px',
            fontWeight: 800,
            textTransform: 'uppercase',
            letterSpacing: '0.05em'
          }}>
            {article.category}
          </span>
        </div>

        {/* Blog Title */}
        <h3 style={{
          fontSize: '20px',
          fontWeight: 700,
          lineHeight: 1.4,
          color: 'var(--text-primary)',
          marginBottom: '12px',
          fontFamily: 'var(--font-heading)'
        }}>
          {article.title}
        </h3>

        {/* Short Description (2 lines max) */}
        <p style={{
          fontSize: '15px',
          color: 'var(--text-secondary)',
          lineHeight: 1.6,
          marginBottom: '20px',
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden'
        }}>
          {article.excerpt}
        </p>

        {/* Author + Reading Time */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          color: 'var(--text-secondary)',
          fontSize: '13px',
          marginBottom: '20px',
          paddingTop: '16px',
          borderTop: '1px solid var(--glass-border)'
        }}>
          <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{article.author}</span>
          <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'var(--glass-border)' }} />
          <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Clock size={14} /> {article.readTime} reading
          </span>
        </div>

        {/* Read Article Link */}
        <div style={{ marginTop: 'auto' }}>
          <motion.button
            whileHover={{ x: 5 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              color: 'var(--accent)',
              fontSize: '15px',
              fontWeight: 700,
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 0
            }}
          >
            Read Article <ArrowUpRight size={18} />
          </motion.button>
        </div>
      </div>

      <style jsx>{`
        .blog-card {
          box-shadow: 0 10px 30px -15px rgba(0,0,0,0.1);
        }
        .blog-card:hover .card-image {
          transform: scale(1.05);
        }
        @media (max-width: 768px) {
          .card-content-wrapper {
            padding: 30px 24px !important;
          }
          .image-wrapper {
            height: 240px !important;
          }
          h3 { font-size: 24px !important; }
        }
      `}</style>
    </motion.div>
  );
}
