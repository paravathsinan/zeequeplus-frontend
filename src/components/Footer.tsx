"use client";

import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Twitter, Youtube, Phone, Mail } from "lucide-react";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "FAQs", href: "#faqs" },
  { name: "Enroll Now", href: "#enroll" },
];

const targetGroups = [
  { name: "Foundation (Classes 1-3)", href: "#foundation" },
  { name: "Intermediate (Classes 4-7)", href: "#intermediate" },
  { name: "Advanced (Classes 8-10)", href: "#advanced" },
  { name: "Vacation Specials", href: "#vacation" },
];

export default function Footer() {
  return (
    <footer style={{
      backgroundColor: '#051e29',
      padding: '100px 0 40px',
      color: '#ffffff',
      borderTop: '1px solid rgba(255, 255, 255, 0.05)'
    }}>
      <div className="container" style={{
        display: 'grid',
        gridTemplateColumns: '1.2fr 0.8fr 1fr 1fr',
        gap: '60px',
        marginBottom: '80px'
      }}>
        {/* Brand Column */}
        <div>
          <Link href="/" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            fontSize: '32px',
            fontWeight: 800,
            marginBottom: '32px'
          }}>
            <Image 
              src="/images/logo/logo-new.png" 
              alt="ZeeQuePlus Logo" 
              width={48} 
              height={48} 
              style={{ filter: 'brightness(1.5)' }}
            />
            <span>
              ZeeQue <span style={{ color: 'var(--accent)' }}>Plus</span>
            </span>
          </Link>
          <p style={{
            color: 'rgba(255,255,255,0.7)',
            lineHeight: 1.7,
            fontSize: '15px',
            marginBottom: '40px',
            maxWidth: '300px'
          }}>
            Empowering the next generation with a structured, step-by-step Qur'anic journey. Excellence in Tajweed, Hifz, and Character.
          </p>
          <div style={{ display: 'flex', gap: '16px' }}>
            {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
              <a 
                key={i} 
                href="#" 
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  transition: 'all 0.3s ease',
                  border: '1px solid rgba(255,255,255,0.1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--accent)';
                  e.currentTarget.style.color = '#000';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)';
                  e.currentTarget.style.color = '#ffffff';
                }}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links Column */}
        <div>
          <h4 className="handwritten" style={{ fontSize: '28px', color: '#ffffff', marginBottom: '32px' }}>Quick Links</h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {quickLinks.map((link) => (
              <li key={link.name} style={{ marginBottom: '16px' }}>
                <Link 
                  href={link.href} 
                  style={{ 
                    color: 'rgba(255,255,255,0.7)', 
                    textDecoration: 'none',
                    fontSize: '15px',
                    transition: 'color 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}
                >
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--accent)' }} />
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Target Groups Column */}
        <div>
          <h4 className="handwritten" style={{ fontSize: '28px', color: '#ffffff', marginBottom: '32px' }}>Target Groups</h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {targetGroups.map((group) => (
              <li key={group.name} style={{ marginBottom: '16px' }}>
                <Link 
                  href={group.href} 
                  style={{ 
                    color: 'rgba(255,255,255,0.7)', 
                    textDecoration: 'none',
                    fontSize: '15px',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}
                >
                  {group.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Connect Column */}
        <div>
          <h4 className="handwritten" style={{ fontSize: '28px', color: '#ffffff', marginBottom: '32px' }}>Connect</h4>
          
          {/* Phone */}
          <div style={{ display: 'flex', gap: '20px', marginBottom: '32px' }}>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '12px',
              backgroundColor: 'rgba(255,255,255,0.05)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid rgba(255,255,255,0.1)'
            }}>
              <Phone size={20} style={{ color: 'var(--accent)' }} />
            </div>
            <div>
              <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>Call Us</div>
              <div style={{ fontSize: '16px', fontWeight: 700 }}>+91 1800-419-ZEE</div>
            </div>
          </div>

          {/* Email */}
          <div style={{ display: 'flex', gap: '20px' }}>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '12px',
              backgroundColor: 'rgba(255,255,255,0.05)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid rgba(255,255,255,0.1)'
            }}>
              <Mail size={20} style={{ color: 'var(--accent)' }} />
            </div>
            <div>
              <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>Email</div>
              <div style={{ fontSize: '16px', fontWeight: 700 }}>LEARN@ZEEQUEPLUS.COM</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.05)', paddingTop: '40px' }}>
        <div className="container" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: '13px',
          color: 'rgba(255,255,255,0.5)',
          textTransform: 'uppercase',
          letterSpacing: '1px'
        }}>
          <div>© 2026 ZeeQue Plus. All rights reserved.</div>
          <div style={{ display: 'flex', gap: '40px' }}>
            <Link href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Privacy Policy</Link>
            <Link href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Terms of Use</Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          footer .container:first-child {
            grid-template-columns: 1fr 1fr !important;
            gap: 40px !important;
          }
        }
        @media (max-width: 640px) {
          footer .container:first-child {
            grid-template-columns: 1fr !important;
          }
          footer .container:last-child {
            flex-direction: column !important;
            gap: 20px !important;
            text-align: center;
          }
          .handwritten {
            margin-bottom: 20px !important;
          }
        }
      `}</style>
    </footer>
  );
}
