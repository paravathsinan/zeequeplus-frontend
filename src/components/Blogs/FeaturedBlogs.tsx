"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star, Clock } from "lucide-react";
import { blogs } from "@/data/blogs";
import BlogCard from "./BlogCard";

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

        <div className="featured-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '40px'
        }}>
          {featuredArticles.map((article, idx) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              style={{ height: '100%' }}
            >
              <BlogCard article={article} />
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 1025px) {
          .featured-grid {
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 30px !important;
          }
        }
        @media (max-width: 1024px) {
          .featured-blogs {
            padding: 40px 0 80px !important;
          }
        }
        @media (max-width: 576px) {
          .featured-blogs div[style*="display: flex"] {
            flex-wrap: wrap;
            justify-content: center !important;
            gap: 8px !important;
          }
        }
      `}</style>
    </section>
  );
}
