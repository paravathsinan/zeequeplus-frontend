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
        transition: 'all 0.4s ease'
      }}
      className="blog-card"
    >
      <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute',
          top: '16px',
          left: '16px',
          backgroundColor: 'rgba(var(--bg-card-rgb), 0.8)',
          backdropFilter: 'blur(10px)',
          color: 'var(--accent)',
          padding: '4px 12px',
          borderRadius: '8px',
          fontSize: '11px',
          fontWeight: 700,
          zIndex: 2,
          border: '1px solid var(--glass-border)'
        }}>
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
             justifyContent: 'center'
           }}>
             <Image 
               src={article.image} 
               alt={article.title} 
               fill 
               style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }}
               className="card-image"
             />
           </div>
        </div>
      </div>

      <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          color: 'var(--text-secondary)',
          fontSize: '12px',
          marginBottom: '12px'
        }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Clock size={14} /> {article.readTime}
          </span>
          <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'var(--glass-border)' }} />
          <span>{article.date}</span>
        </div>

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

        <p style={{
          fontSize: '15px',
          color: 'var(--text-secondary)',
          lineHeight: 1.6,
          marginBottom: '20px',
          display: '-webkit-box',
          WebkitLineClamp: 3,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden'
        }}>
          {article.excerpt}
        </p>

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
            Read More <ArrowUpRight size={18} />
          </motion.button>
        </div>
      </div>

      <style jsx>{`
        .blog-card:hover .card-image {
          transform: scale(1.1);
        }
      `}</style>
    </motion.div>
  );
}
