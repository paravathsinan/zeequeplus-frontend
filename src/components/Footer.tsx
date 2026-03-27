"use client";

import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Twitter, Youtube, Phone, Mail, Linkedin, MapPin } from "lucide-react";

const socialLinks = [
  { Icon: Facebook, href: "https://facebook.com/zeequepreschool" },
  { Icon: Instagram, href: "https://instagram.com/zeeque_preschool" },
  { Icon: Twitter, href: "https://twitter.com/markazonline" },
  { Icon: Linkedin, href: "https://linkedin.com/company/zeeque-preschool-network" },
  { Icon: Youtube, href: "https://youtube.com/zeequepreschool" },
];

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Learning Experience", href: "/experience" },
  { name: "Blogs", href: "/blogs" },
  { name: "Contact Us", href: "/contact" },
];

const programLinks = [
  { name: "Zeeque Plus Quran", href: "/quran" },
];

export default function Footer() {
  return (
    <footer style={{
      backgroundColor: 'var(--footer-bg, #051e29)',
      padding: '50px 0 20px',
      color: 'var(--footer-text, #ffffff)',
      borderTop: '1px solid var(--footer-border, rgba(255, 255, 255, 0.05))'
    }} className="site-footer">
      <div className="container" style={{
        display: 'grid',
        gridTemplateColumns: '1fr 0.8fr 0.8fr 1.4fr',
        gap: '60px',
        marginBottom: '80px'
      }}>
        {/* Brand Column */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Link href="/" style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '32px'
          }}>
            <div style={{ width: '100%', maxWidth: '160px' }}>
              <Image 
                src="/images/logo/zeequeplus-logo.png" 
                alt="ZeeQuePlus Logo" 
                width={500} 
                height={500} 
                style={{ 
                  filter: 'var(--footer-logo-filter, brightness(1.5))', 
                  width: '100%', 
                  height: 'auto',
                  display: 'block'
                }}
              />
            </div>

          </Link>
          <p style={{
            color: 'var(--footer-text-secondary, rgba(255,255,255,0.7))',
            lineHeight: 1.7,
            fontSize: '15px',
            marginBottom: '40px',
            maxWidth: '300px'
          }}>
            Empowering the next generation with a structured, step-by-step Qur'anic journey. Excellence in Tajweed, Hifz, and Character.
          </p>
          <div style={{ flex: 1 }} />
          <div style={{ display: 'flex', gap: '16px' }}>
            {socialLinks.map(({ Icon, href }, i) => (
              <a 
                key={i} 
                href={href} 
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--footer-social-bg, rgba(255,255,255,0.05))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--footer-text, #ffffff)',
                  transition: 'all 0.3s ease',
                  border: '1px solid var(--footer-border, rgba(255,255,255,0.1))'
                }}
                className="footer-social-link"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links Column */}
        <div>
          <h4 className="handwritten" style={{ fontSize: '28px', color: 'var(--footer-text, #ffffff)', marginBottom: '32px' }}>Quick Links</h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {quickLinks.map((link) => (
              <li key={link.name} style={{ marginBottom: '16px' }}>
                  <Link 
                    href={link.href} 
                    style={{ 
                      color: 'var(--footer-text-secondary, rgba(255,255,255,0.7))', 
                      textDecoration: 'none',
                      fontSize: '15px',
                      transition: 'color 0.3s ease',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px'
                    }}
                    className="footer-link"
                  >
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--accent)' }} />
                    {link.name}
                  </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Programs Column */}
        <div>
          <h4 className="handwritten" style={{ fontSize: '28px', color: 'var(--footer-text, #ffffff)', marginBottom: '32px' }}>Programs</h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {programLinks.map((group) => (
              <li key={group.name} style={{ marginBottom: '16px' }}>
                <Link 
                  href={group.href} 
                  style={{ 
                    color: 'var(--footer-text-secondary, rgba(255,255,255,0.7))', 
                    textDecoration: 'none',
                    fontSize: '15px',
                    transition: 'color 0.3s ease'
                  }}
                  className="footer-link"
                >
                  {group.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Connect Column */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <h4 className="handwritten" style={{ fontSize: '28px', color: 'var(--footer-text, #ffffff)', marginBottom: '32px' }}>Connect</h4>
          
          {/* Phone */}
          <div style={{ display: 'flex', gap: '20px', marginBottom: '32px', alignItems: 'flex-start' }}>
            <div style={{
              width: '48px',
              height: '48px',
              flexShrink: 0,
              borderRadius: '12px',
              backgroundColor: 'var(--footer-social-bg, rgba(255,255,255,0.05))',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid var(--footer-border, rgba(255,255,255,0.1))'
            }}>
              <Phone size={22} style={{ color: 'var(--accent)' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <div style={{ fontSize: '13px', color: 'var(--footer-text-secondary, rgba(255,255,255,0.5))', textTransform: 'uppercase', letterSpacing: '1px' }}>Call Us</div>
              <a
                href="tel:+919072500435"
                style={{ fontSize: '16px', fontWeight: 700, color: 'var(--footer-text, #ffffff)', textDecoration: 'none' }}
              >
                +91 9072 500 435
              </a>
            </div>
          </div>

          {/* Email */}
          <div style={{ display: 'flex', gap: '20px', marginBottom: '32px', alignItems: 'flex-start' }}>
            <div style={{
              width: '48px',
              height: '48px',
              flexShrink: 0,
              borderRadius: '12px',
              backgroundColor: 'var(--footer-social-bg, rgba(255,255,255,0.05))',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid var(--footer-border, rgba(255,255,255,0.1))'
            }}>
              <Mail size={22} style={{ color: 'var(--accent)' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <div style={{ fontSize: '13px', color: 'var(--footer-text-secondary, rgba(255,255,255,0.5))', textTransform: 'uppercase', letterSpacing: '1px' }}>Email</div>
              <a
                href="mailto:info@zeequeplus.com"
                style={{ fontSize: '16px', fontWeight: 700, color: 'var(--footer-text, #ffffff)', textDecoration: 'none', textTransform: 'lowercase' }}
              >
                info@zeequeplus.com
              </a>
            </div>
          </div>

          <div style={{ flex: 1 }} />
          
          {/* Location */}
          <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
            <div style={{
              width: '48px',
              height: '48px',
              flexShrink: 0,
              borderRadius: '12px',
              backgroundColor: 'var(--footer-social-bg, rgba(255,255,255,0.05))',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid var(--footer-border, rgba(255,255,255,0.1))'
            }}>
              <MapPin size={22} strokeWidth={2.5} style={{ color: 'var(--accent)' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <div style={{ fontSize: '13px', color: 'var(--footer-text-secondary, rgba(255,255,255,0.5))', textTransform: 'uppercase', letterSpacing: '1px' }}>Location</div>
              <a
                href="https://www.google.com/maps?q=Zahra+Park,+Koduvally,+Kozhikode,+Kerala"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: '16px', fontWeight: 700, color: 'var(--footer-text, #ffffff)', textDecoration: 'none' }}
              >
                Zahra Park, Koduvally, Kozhikode, Kerala
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ borderTop: '1px solid var(--footer-border, rgba(255, 255, 255, 0.05))', paddingTop: '40px' }}>
        <div className="container" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: '13px',
          color: 'var(--footer-text-secondary, rgba(255,255,255,0.5))',
          textTransform: 'uppercase',
          letterSpacing: '1px'
        }}>
          <div>© 2026 ZeeQue Plus. All rights reserved.</div>
          <div style={{ display: 'flex', gap: '40px' }}>
            <Link href="/privacy-policy" style={{ color: 'inherit', textDecoration: 'none' }}>Privacy Policy</Link>
            <Link href="/terms-of-use" style={{ color: 'inherit', textDecoration: 'none' }}>Terms of Use</Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .site-footer {
          --footer-bg: #051e29;
          --footer-text: #ffffff;
          --footer-text-secondary: rgba(255, 255, 255, 0.7);
          --footer-border: rgba(255, 255, 255, 0.05);
          --footer-social-bg: rgba(255, 255, 255, 0.05);
          --footer-logo-filter: brightness(1.5);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        :global([data-theme='light']) .site-footer {
          --footer-bg: #f8fafc;
          --footer-text: var(--text-primary);
          --footer-text-secondary: var(--text-secondary);
          --footer-border: rgba(0, 0, 0, 0.06);
          --footer-social-bg: rgba(0, 0, 0, 0.03);
          --footer-logo-filter: none;
        }

        .footer-link {
          transition: color 0.3s ease !important;
        }

        .footer-link:hover {
          color: var(--accent) !important;
        }

        .footer-social-link:hover {
          background-color: var(--accent) !important;
          color: #000 !important;
          transform: translateY(-3px);
        }

        @media (max-width: 1024px) {
          footer .container:first-child {
            grid-template-columns: 1fr 1fr !important;
            gap: 40px !important;
          }
        }
        @media (max-width: 640px) {
          footer .container:first-child {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          footer .container:last-child {
            flex-direction: column !important;
            gap: 20px !important;
            text-align: center;
          }
          .handwritten {
            margin-bottom: 24px !important;
            font-size: 24px !important;
          }
        }
      `}</style>
    </footer>
  );
}
