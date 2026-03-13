"use client";

import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { useState } from "react";

const categories = [
  "All",
  "Parents",
  "Learning tips",
  "Islamic",
  "Tuitions",
  "Academics"
];

interface BlogSearchFilterProps {
  searchTerm: string;
  onSearch: (term: string) => void;
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function BlogSearchFilter({
  searchTerm,
  onSearch,
  activeCategory,
  onCategoryChange
}: BlogSearchFilterProps) {
  return (
    <section className="blog-filter" style={{ padding: '60px 0 40px' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <div style={{
          padding: '8px 16px',
          backgroundColor: 'rgba(var(--accent-rgb), 0.1)',
          borderRadius: '100px',
          color: 'var(--accent)',
          fontSize: '12px',
          fontWeight: 800,
          display: 'inline-block',
          marginBottom: '16px'
        }}>
          BRAIN BOOST
        </div>
        <h2 style={{
          fontSize: '48px',
          fontWeight: 800,
          color: 'var(--text-primary)',
          marginBottom: '40px',
          fontFamily: 'var(--font-heading)'
        }}>
          Explore Our Educational Articles
        </h2>

        {/* Search Bar */}
        <div style={{
          maxWidth: '800px',
          margin: '0 auto 40px',
          position: 'relative'
        }}>
          <input 
            type="text" 
            placeholder="Search our learning resources..."
            value={searchTerm}
            onChange={(e) => onSearch(e.target.value)}
            style={{
              width: '100%',
              padding: '24px 30px 24px 70px',
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--glass-border)',
              borderRadius: '100px',
              fontSize: '18px',
              color: 'var(--text-primary)',
              outline: 'none',
              boxShadow: '0 10px 40px rgba(0,0,0,0.05)',
              transition: 'all 0.3s ease'
            }}
            className="search-input"
          />
          <div style={{
            position: 'absolute',
            left: '30px',
            top: '50%',
            transform: 'translateY(-50%)',
            color: 'var(--accent)'
          }}>
            <Search size={24} />
          </div>
        </div>

        {/* Categories Chips */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '12px'
        }}>
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => onCategoryChange(cat)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: '12px 24px',
                borderRadius: '100px',
                fontSize: '15px',
                fontWeight: 600,
                border: '1px solid var(--glass-border)',
                backgroundColor: activeCategory === cat ? 'var(--accent)' : 'var(--bg-card)',
                color: activeCategory === cat ? '#fff' : 'var(--text-secondary)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: activeCategory === cat ? '0 8px 20px rgba(var(--accent-rgb), 0.3)' : 'none'
              }}
            >
              {cat}
            </motion.button>
          ))}
        </div>
      </div>

      <style jsx>{`
        .search-input:focus {
          border-color: var(--accent);
          box-shadow: 0 10px 40px rgba(var(--accent-rgb), 0.15);
        }
        @media (max-width: 1024px) {
          h2 { font-size: 36px !important; }
        }
        @media (max-width: 640px) {
          .blog-filter { padding: 40px 0 !important; }
          h2 { font-size: 28px !important; }
          .search-input { 
            padding: 16px 20px 16px 50px !important; 
            font-size: 16px !important;
          }
          div[style*="left: 30px"] {
             left: 20px !important;
          }
           div[style*="gap: 12px"] {
             gap: 8px !important;
          }
        }
      `}</style>
    </section>
  );
}
