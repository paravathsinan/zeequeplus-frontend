"use client";

import { useState, useMemo } from "react";
import BlogHero from "../../components/Blogs/BlogHero";
import BlogHighlights from "../../components/Blogs/BlogHighlights";
import FeaturedBlogs from "../../components/Blogs/FeaturedBlogs";
import BlogSearchFilter from "../../components/Blogs/BlogSearchFilter";
import BlogGrid from "../../components/Blogs/BlogGrid";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogs } from "@/data/blogs";

export default function BlogsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Filter logic
  const filteredBlogs = useMemo(() => {
    return blogs.filter(blog => {
      const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           blog.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = activeCategory === "All" || blog.category === activeCategory || (activeCategory === "Featured" && blog.category === "Featured");
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, activeCategory]);

  // Pagination logic
  const totalPages = Math.ceil(filteredBlogs.length / itemsPerPage);
  const paginatedBlogs = filteredBlogs.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    setCurrentPage(1); // Reset to first page
  };

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setCurrentPage(1); // Reset to first page
  };

  return (
    <main style={{ backgroundColor: 'var(--bg-page)', minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>
      <Navbar />
      <div style={{ paddingTop: '100px', position: 'relative', zIndex: 1 }}>
        <BlogHero />
        <BlogHighlights />
        <FeaturedBlogs />
        <BlogSearchFilter 
          searchTerm={searchTerm} 
          onSearch={handleSearch}
          activeCategory={activeCategory}
          onCategoryChange={handleCategoryChange}
        />
        <BlogGrid 
          blogs={paginatedBlogs} 
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      </div>

      {/* Liquid Glass Background Elements */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '-5%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(var(--accent-rgb), 0.08) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(80px)',
        zIndex: 0,
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute',
        top: '40%',
        right: '-10%',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(var(--accent-rgb), 0.05) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(100px)',
        zIndex: 0,
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '10%',
        left: '10%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(var(--accent-rgb), 0.03) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(70px)',
        zIndex: 0,
        pointerEvents: 'none'
      }} />

      <Footer />
    </main>
  );
}
