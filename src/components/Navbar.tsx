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
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();

  useMotionValueEvent(scrollY, "change", (latest) => {
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

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      <motion.nav 
        initial={{ y: -150, opacity: 0 }}
        animate={{ 
          y: 0,
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
              priority
              className="logo-img"
              style={{ 
                width: 'auto', 
                height: '100%', 
                objectFit: 'contain',
                transform: 'scale(2.2)',
                transformOrigin: 'left center',
                display: 'block',
                transition: 'filter 0.4s ease, transform 0.3s ease'
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

            <Link 
              href="/enroll" 
              className="enroll-btn-wrapper"
            >
              <button className="premium-glass-btn primary">
                <span>Enroll Now</span>
                <ArrowRight size={18} className="arrow-icon" />
              </button>
            </Link>
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
        .logo-img {
          filter: drop-shadow(0 0 8px rgba(0,0,0,0.05));
        }

        :global([data-theme='dark']) .logo-img {
          filter: brightness(1.2) drop-shadow(0 0 12px rgba(255, 255, 255, 0.4));
        }

        .premium-glass-btn {
          position: relative;
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          color: white;
          padding: 10px 26px;
          border-radius: 50px;
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          box-shadow: 0 8px 32px rgba(255, 165, 0, 0.15), inset 0 1px 0 rgba(255,255,255,0.3);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
          z-index: 1;
        }

        .premium-glass-btn.primary {
          background: rgba(var(--accent-rgb), 0.2);
          border: 1px solid rgba(var(--accent-rgb), 0.3);
          box-shadow: 0 8px 32px rgba(var(--accent-rgb), 0.2), inset 0 1px 0 rgba(255,255,255,0.3);
        }

        .premium-glass-btn:hover {
          background: rgba(0, 0, 0, 0.4);
          transform: translateY(-2px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255,255,255,0.1);
          border-color: rgba(255, 255, 255, 0.4);
        }

        .premium-glass-btn.primary:hover {
          background: #06455d;
          box-shadow: 0 12px 40px rgba(var(--accent-rgb), 0.3), inset 0 1px 0 rgba(255,255,255,0.2);
          border-color: var(--accent);
        }

        .premium-glass-btn :global(.arrow-icon) {
          transition: transform 0.3s ease;
        }

        .premium-glass-btn:hover :global(.arrow-icon) {
          transform: translateX(4px);
        }

        :global([data-theme='light']) .premium-glass-btn:not(.primary) {
          background: rgba(var(--accent-rgb), 0.1);
          border: 1px solid rgba(var(--accent-rgb), 0.2);
          color: var(--accent);
          box-shadow: 0 8px 24px rgba(var(--accent-rgb), 0.12), inset 0 1px 0 rgba(255,255,255,0.5);
        }

        :global([data-theme='light']) .premium-glass-btn.primary {
          background: rgba(var(--accent-rgb), 0.2);
          border: 1px solid rgba(var(--accent-rgb), 0.3);
          color: #0b4d66;
          box-shadow: 0 8px 24px rgba(var(--accent-rgb), 0.15), inset 0 1px 0 rgba(255,255,255,0.5);
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

        .enroll-btn-wrapper {
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
          <>
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                backdropFilter: 'blur(4px)',
                zIndex: 9998,
              }}
            />

            {/* Top Sheet */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0 }}
              style={{
                position: 'fixed',
                left: 0,
                right: 0,
                top: 0,
                backgroundColor: 'var(--bg-page)',
                zIndex: 9999,
                padding: '20px 24px 32px', // Slightly reduced top padding
                borderBottomLeftRadius: '32px',
                borderBottomRightRadius: '32px',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
                maxHeight: '90vh',
                overflowY: 'hidden'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <Link href="/" onClick={() => setIsOpen(false)} style={{ display: 'flex', alignItems: 'center', height: '32px', width: '120px' }}>
                  <Image 
                    src="/images/logo/zeequeplus-logo.png" 
                    alt="ZeeQuePlus Logo" 
                    width={100} 
                    height={30}
                    className="logo-img"
                    style={{ 
                      width: 'auto', 
                      height: '100%', 
                      objectFit: 'contain',
                      transform: 'scale(1.8)',
                      transformOrigin: 'left center',
                      display: 'block'
                    }}
                  />
                </Link>
                <button 
                  onClick={() => setIsOpen(false)}
                  style={{
                    background: 'var(--glass-bg)',
                    border: '1px solid var(--glass-border)',
                    color: 'var(--text-primary)',
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                  }}
                  aria-label="Close Menu"
                >
                  <X size={20} />
                </button>
              </div>

              {navLinks.map((link) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    style={{
                      fontSize: '16px',
                      fontWeight: 600,
                      color: activeLink === link.name ? 'var(--accent)' : 'var(--text-primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '12px 16px',
                      backgroundColor: 'rgba(var(--accent-rgb), 0.03)',
                      borderRadius: '12px',
                      border: `1px solid ${activeLink === link.name ? 'rgba(var(--accent-rgb), 0.3)' : 'var(--glass-border)'}`,
                      transition: 'all 0.3s ease'
                    }}
                  >
                    {link.name}
                    {activeLink === link.name && (
                      <div
                        style={{
                          width: '6px',
                          height: '6px',
                          borderRadius: '50%',
                          backgroundColor: 'var(--accent)'
                        }}
                      />
                    )}
                  </Link>
                </motion.div>
              ))}

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0 }}
                style={{ 
                  marginTop: '12px', 
                  borderTop: '1px solid var(--glass-border)', 
                  paddingTop: '20px', 
                  display: 'flex', 
                  gap: '12px',
                  alignItems: 'center'
                }}
              >
                <button 
                  onClick={toggleTheme}
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '14px',
                    background: 'rgba(var(--accent-rgb), 0.08)',
                    border: '1px solid rgba(var(--accent-rgb), 0.2)',
                    color: 'var(--accent)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    flexShrink: 0,
                    transition: 'all 0.3s ease'
                  }}
                  aria-label="Toggle Theme"
                >
                  {theme === 'light' ? <Moon size={22} /> : <Sun size={22} />}
                </button>
                
                <Link href="/enroll" onClick={() => setIsOpen(false)} style={{ flex: 1, display: 'block' }}>
                  <button 
                    className="premium-glass-btn primary liquid-glass"
                    style={{
                      width: '100%',
                      padding: '14px',
                      fontSize: '16px',
                      fontWeight: 700,
                      borderRadius: '16px',
                      margin: 0,
                      background: 'linear-gradient(135deg, rgba(var(--accent-rgb), 0.5) 0%, rgba(var(--accent-rgb), 0.2) 100%)',
                      backdropFilter: 'blur(16px)',
                      border: '1px solid rgba(255, 255, 255, 0.4)',
                      boxShadow: '0 8px 32px rgba(var(--accent-rgb), 0.3), inset 0 0 12px rgba(255, 255, 255, 0.2)',
                      color: 'var(--text-primary)',
                      position: 'relative',
                      overflow: 'hidden',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '10px'
                    }}
                  >
                    <span style={{ position: 'relative', zIndex: 2, lineHeight: 1 }}>Enroll Now</span>
                    <ArrowRight size={18} className="arrow-icon" style={{ position: 'relative', zIndex: 2, color: 'var(--text-primary)' }} />
                  </button>
                </Link>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
