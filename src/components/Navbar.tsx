"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, Sun, Moon, ArrowRight } from 'lucide-react';
import { useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/#home" },
  { name: "About Us", href: "/about" },
  { name: "Learning Experience", href: "/experience" },
  { name: "Blogs", href: "/blogs" },
  { name: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [activeLink, setActiveLink] = useState<string>("Home");
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    setIsScrolled(latest > 50);
  });

  useEffect(() => {
    const currentTheme = document.documentElement.getAttribute('data-theme') as 'light' | 'dark' || 'dark';
    setTheme(currentTheme);

    // Handle main pages and their subpaths
    const mainPage = navLinks.find(link => {
      if (link.href === '/') return pathname === '/';
      if (link.href.startsWith('/#')) return pathname === '/';
      return pathname.startsWith(link.href);
    });

    if (mainPage) {
      setActiveLink(mainPage.name);
      return;
    }



    // Active Section Detection (only on home)
    if (pathname === '/') {
      const sections = navLinks
        .filter(l => l.href.includes('#'))
        .map(link => link.href.split('#')[1]);
      
      const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -70% 0px',
        threshold: 0
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            const link = navLinks.find(l => l.href.endsWith(`#${sectionId}`));
            if (link) setActiveLink(link.name);
          }
        });
      }, observerOptions);

      sections.forEach(id => {
        const element = document.getElementById(id);
        if (element) observer.observe(element);
      });

      return () => observer.disconnect();
    }
  }, [pathname]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <>
      <motion.nav 
        initial={{ y: -150, opacity: 0 }}
        animate={{ 
          y: isVisible ? 0 : -150,
          opacity: 1,
          backgroundColor: isScrolled ? 'var(--glass-bg)' : 'rgba(255, 255, 255, 0)',
          backdropFilter: isScrolled ? 'blur(12px)' : 'blur(0px)'
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="navbar" 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 9999,
          padding: isScrolled ? '14px 0 10px' : '20px 0 12px',
          transition: 'padding 0.3s ease'
        }}
      >
        <div className="container" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          {/* Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', height: '40px', width: '200px' }}>
            <Image 
              src="/images/logo/zeequeplus-logo.png" 
              alt="ZeeQuePlus Logo" 
              width={200} 
              height={60}
              style={{ 
                width: 'auto', 
                height: '100%', 
                objectFit: 'contain',
                transform: 'scale(2.2)',
                transformOrigin: 'left center',
                display: 'block'
              }}
            />
          </Link>

          {/* Desktop Menu & Theme Toggle */}
          <div style={{
            display: 'flex',
            gap: '32px',
            alignItems: 'center'
          }} className="desktop-menu">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.href}
                onMouseEnter={() => setHoveredLink(link.name)}
                onMouseLeave={() => setHoveredLink(null)}
                style={{ 
                  fontWeight: 600,
                  position: 'relative',
                  padding: '8px 0',
                  color: (activeLink === link.name || hoveredLink === link.name) ? 'var(--accent)' : 'var(--text-primary)',
                  transition: 'color 0.3s ease',
                  fontSize: '15px'
                }}
              >
                {link.name}
                {hoveredLink === link.name && (
                  <motion.div
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ scaleX: 1, opacity: 1 }}
                    exit={{ scaleX: 0, opacity: 0 }}
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: '2.5px',
                      background: 'var(--accent)',
                      borderRadius: '2px',
                      boxShadow: '0 2px 10px rgba(var(--accent-rgb), 0.3)',
                      transformOrigin: 'center'
                    }}
                    transition={{
                      duration: 0.3,
                      ease: "easeOut"
                    }}
                  />
                )}
              </Link>
            ))}

            <button 
              onClick={toggleTheme}
              className="premium-toggle-btn"
              aria-label="Toggle Theme"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>

            <a 
              href="https://operations.zeequeplus.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="login-btn-wrapper"
            >
              <button 
                className="premium-login-btn"
              >
                <span>Login</span>
                <ArrowRight size={18} className="arrow-icon" />
              </button>
            </a>
          </div>

            {/* Mobile Toggle - Only show Menu when closed, X is handled inside overlay */}
          {!isOpen && (
            <div 
              className="mobile-toggle" 
              style={{ 
                display: 'none', 
                color: 'var(--text-primary)',
                cursor: 'pointer',
                padding: '8px',
                borderRadius: '50%',
                backgroundColor: 'var(--glass-bg)',
                zIndex: 10001
              }} 
              onClick={() => setIsOpen(true)}
            >
              <Menu size={24} />
            </div>
          )}
        </div>

        <style jsx>{`
          .premium-login-btn {
          position: relative;
          background: var(--theme-mode, 'light') === 'dark' 
            ? rgba(255, 255, 255, 0.15) 
            : rgba(var(--accent-rgb), 0.1);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid var(--theme-mode, 'light') === 'dark'
            ? rgba(255, 255, 255, 0.3)
            : rgba(var(--accent-rgb), 0.2);
          color: var(--theme-mode, 'light') === 'dark' ? 'white' : 'var(--accent)';
          padding: 10px 26px;
          border-radius: 50px;
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 10px;
          box-shadow: var(--theme-mode, 'light') === 'dark'
            ? '0 8px 32px rgba(255, 165, 0, 0.2), inset 0 1px 0 rgba(255,255,255,0.3)'
            : '0 8px 24px rgba(var(--accent-rgb), 0.15), inset 0 1px 0 rgba(255,255,255,0.5)';
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
          z-index: 1;
        }

        /* Using CSS variables for theme-specific styles is cleaner for styled-jsx */
        :global([data-theme='light']) .premium-login-btn {
          background: rgba(var(--accent-rgb), 0.1);
          border: 1px solid rgba(var(--accent-rgb), 0.2);
          color: var(--accent);
          box-shadow: 0 8px 24px rgba(var(--accent-rgb), 0.12), inset 0 1px 0 rgba(255,255,255,0.5);
        }

        :global([data-theme='dark']) .premium-login-btn {
          background: rgba(255, 255, 255, 0.15);
          border: 1px solid rgba(255, 255, 255, 0.3);
          color: white;
          box-shadow: 0 8px 32px rgba(255, 165, 0, 0.2), inset 0 1px 0 rgba(255,255,255,0.3);
        }

        .premium-login-btn:hover {
          background: rgba(255, 255, 255, 0.25);
          transform: translateY(-2px);
          box-shadow: 0 12px 40px rgba(255, 165, 0, 0.3), inset 0 1px 0 rgba(255,255,255,0.4);
        }

        .premium-login-btn :global(.arrow-icon) {
          transition: transform 0.3s ease;
        }

        .premium-login-btn:hover :global(.arrow-icon) {
          transform: translateX(4px);
        }

        .premium-toggle-btn {
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          color: white;
          padding: 10px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255,255,255,0.2);
          transition: all 0.3s ease;
          margin-right: 8px;
        }

        :global([data-theme='light']) .premium-toggle-btn {
          background: rgba(var(--accent-rgb), 0.1);
          border: 1px solid rgba(var(--accent-rgb), 0.2);
          color: var(--accent);
          box-shadow: 0 4px 12px rgba(var(--accent-rgb), 0.05), inset 0 1px 0 rgba(255,255,255,0.5);
        }

        .premium-toggle-btn:hover {
          background: rgba(255, 255, 255, 0.25);
          transform: translateY(-1px) scale(1.05);
        }

        :global([data-theme='light']) .premium-toggle-btn:hover {
          background: rgba(var(--accent-rgb), 0.15);
        }

        .login-btn-wrapper {
          text-decoration: none;
        }

          @media (max-width: 768px) {
            .desktop-menu {
              display: none !important;
            }
            .mobile-toggle {
              display: flex !important;
              align-items: center;
              justify-content: center;
            }
          }
        `}</style>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'var(--bg-page)',
              zIndex: 9999,
              padding: '140px 24px 60px', // Increased top/bottom padding
              display: 'flex',
              flexDirection: 'column',
              gap: '24px', // Space between links
              overflowY: 'auto'
            }}
          >
            {/* Dedicated Close Button */}
            <button 
              onClick={() => setIsOpen(false)}
              style={{
                position: 'absolute',
                top: '32px',
                right: '24px',
                background: 'var(--glass-bg)',
                border: '1px solid var(--glass-border)',
                color: 'var(--text-primary)',
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                zIndex: 10000,
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
              }}
              aria-label="Close Menu"
            >
              <X size={28} />
            </button>
            {navLinks.map((link) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  style={{
                    fontSize: '22px', // Slightly larger
                    fontWeight: 700,
                    color: activeLink === link.name ? 'var(--accent)' : 'var(--text-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '20px 24px', // Increased inner padding
                    backgroundColor: 'rgba(var(--accent-rgb), 0.05)',
                    borderRadius: '20px',
                    border: `1px solid ${activeLink === link.name ? 'rgba(var(--accent-rgb), 0.3)' : 'var(--glass-border)'}`,
                    transition: 'all 0.3s ease'
                  }}
                >
                  {link.name}
                  {activeLink === link.name && (
                    <div
                      style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--accent)'
                      }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}

            <div style={{ 
              marginTop: '40px', // More space before appearance toggle
              borderTop: '1px solid var(--glass-border)', 
              paddingTop: '32px', 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center'
            }}>
              <span style={{ fontSize: '18px', fontWeight: 600, color: 'var(--text-secondary)' }}>Appearance</span>
              <button 
                onClick={toggleTheme}
                className="premium-toggle-btn"
                style={{ padding: '12px', marginRight: 0 }}
              >
                {theme === 'light' ? <Moon size={24} /> : <Sun size={24} />}
              </button>
            </div>

            {/* Mobile Login Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              style={{ marginTop: '24px' }}
            >
              <a 
                href="https://operations.zeequeplus.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
              >
                <button 
                  className="btn btn-primary"
                  style={{
                    width: '100%',
                    padding: '18px',
                    fontSize: '18px',
                    fontWeight: 700,
                    borderRadius: '20px',
                    boxShadow: '0 10px 25px rgba(var(--accent-rgb), 0.2)'
                  }}
                >
                  Login to Portal
                </button>
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
