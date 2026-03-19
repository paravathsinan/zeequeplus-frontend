"use client";

import { motion, AnimatePresence } from "framer-motion";
import BlogCard from "./BlogCard";
import { BlogPost } from "@/data/blogs";

interface BlogGridProps {
  blogs: BlogPost[];
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export default function BlogGrid({
  blogs,
  totalPages,
  currentPage,
  onPageChange
}: BlogGridProps) {
  return (
    <section className="blog-grid" style={{ padding: '40px 0 100px' }}>
      <div className="container">
        <AnimatePresence mode="wait">
          {blogs.length > 0 ? (
            <motion.div
              key={currentPage + (blogs[0]?.id || 0)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="blog-grid-content"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                gap: '32px'
              }}

            >
              {blogs.map((article, idx) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <BlogCard article={article} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{ textAlign: 'center', padding: '100px 0' }}
            >
              <h3 style={{ fontSize: '24px', color: 'var(--text-secondary)' }}>No articles found matching your criteria.</h3>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pagination */}
        {totalPages > 1 && (
          <div style={{
            marginTop: '60px',
            display: 'flex',
            justifyContent: 'center',
            gap: '10px'
          }}>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
              <button
                key={p}
                onClick={() => onPageChange(p)}
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  border: '1px solid var(--glass-border)',
                  backgroundColor: p === currentPage ? 'var(--accent)' : 'var(--bg-card)',
                  color: p === currentPage ? '#fff' : 'var(--text-secondary)',
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'all 0.3s'
                }}
              >
                {p}
              </button>
            ))}
            {currentPage < totalPages && (
              <button 
                onClick={() => onPageChange(currentPage + 1)}
                style={{
                  padding: '0 24px',
                  borderRadius: '12px',
                  border: '1px solid var(--glass-border)',
                  backgroundColor: 'var(--bg-card)',
                  color: 'var(--text-secondary)',
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'all 0.3s'
                }}
              >
                Next
              </button>
            )}
          </div>
        )}
      <style jsx>{`
        @media (max-width: 1024px) {
          .blog-grid {
            padding: 40px 0 80px !important;
          }
        }

        @media (max-width: 576px) {
           .blog-grid div[style*="display: flex"] {
            flex-wrap: wrap;
            justify-content: center !important;
            gap: 8px !important;
          }
        }
      `}</style>
      </div>
    </section>
  );
}
