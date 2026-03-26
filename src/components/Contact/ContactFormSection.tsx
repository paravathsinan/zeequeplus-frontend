"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube, CheckCircle2, X, Linkedin, SendHorizontal } from "lucide-react";
import { useState } from "react";

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: ""
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const infoCards = [
    {
      label: "Phone No:",
      value: "+91 9072 500 435",
      href: "tel:+919072500435",
      icon: <Phone size={24} />,
      gradient: "linear-gradient(135deg, #007A3D 0%, #00a050 100%)",
    },
    {
      label: "Email Address:",
      value: "info@zeequeplus.com",
      href: "mailto:info@zeequeplus.com",
      icon: <Mail size={24} />,
      gradient: "linear-gradient(135deg, #4FD1C5 0%, #38B2AC 100%)",
    },
    {
      label: "Location:",
      value: "Zahra Park, Koduvally, Kozhikode, Kerala",
      href: "https://www.google.com/maps?q=Zahra+Park,+Koduvally,+Kozhikode,+Kerala&output=embed",
      icon: <MapPin size={24} />,
      gradient: "linear-gradient(135deg, #63B3ED 0%, #4299E1 100%)",
    },
  ];

  const socialLinks = [
    { icon: <Facebook size={20} />, href: "https://facebook.com/zeequepreschool", label: "Facebook" },
    { icon: <Instagram size={20} />, href: "https://instagram.com/zeeque_preschool", label: "Instagram" },
    { icon: <Twitter size={20} />, href: "https://twitter.com/markazonline", label: "Twitter" },
    { icon: <Linkedin size={20} />, href: "https://linkedin.com/company/zeeque-preschool-network", label: "LinkedIn" },
    { icon: <Youtube size={20} />, href: "https://youtube.com/zeequepreschool", label: "Youtube" }
  ];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name required";
    if (!formData.email.trim()) {
      newErrors.email = "Email address required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Valid email required";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject required";
    if (!formData.message.trim()) newErrors.message = "Message required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitted(true);
      setFormData({ fullName: "", email: "", subject: "", message: "" });
      setErrors({});
    }
  };

  return (
    <section style={{ padding: '120px 0', backgroundColor: 'var(--bg-page)', position: 'relative' }}>
      <div className="container">
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr 1.2fr', 
          gap: '80px',
          alignItems: 'center'
        }} className="contact-main-grid">
          
          {/* Left: Contact Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              style={{ marginBottom: '48px' }}
            >
              <div style={{
                display: 'inline-block',
                padding: '8px 20px',
                backgroundColor: 'rgba(var(--accent-rgb), 0.1)',
                borderRadius: '100px',
                color: 'var(--accent)',
                fontSize: '14px',
                fontWeight: 700,
                marginBottom: '24px'
              }}>
                CONTACT US
              </div>
              <h2 style={{ 
                fontSize: '56px', 
                fontWeight: 800, 
                color: 'var(--text-primary)', 
                lineHeight: 1.1,
                fontFamily: 'var(--font-heading)',
                marginBottom: '24px'
              }}>
                Ready to take the <span style={{ color: 'var(--accent)' }}>First Step?</span>
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '18px', lineHeight: 1.6, maxWidth: '500px' }}>
                We're here to help you find the perfect educational journey for your child. Reach out today for a consultation.
              </p>
            </motion.div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {infoCards.map((info, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ x: 10 }}
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    padding: '24px',
                    borderRadius: '24px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '20px',
                    border: '1px solid var(--glass-border)',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <div style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '18px',
                    background: info.gradient,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    flexShrink: 0,
                    boxShadow: '0 10px 20px -5px rgba(0,0,0,0.2)'
                  }}>
                    {info.icon}
                  </div>
                  <div>
                    <h4 style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '4px' }}>{info.label}</h4>
                    <a
                      href={info.href}
                      target={info.label === "Location:" ? "_blank" : undefined}
                      rel={info.label === "Location:" ? "noopener noreferrer" : undefined}
                      style={{
                        fontSize: '17px',
                        fontWeight: 700,
                        color: 'var(--text-primary)',
                        textDecoration: 'none',
                        transition: 'color 0.2s'
                      }}
                    >
                      {info.value}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            <div style={{ marginTop: '40px', display: 'flex', gap: '16px', alignItems: 'center' }}>
              <span style={{ fontSize: '15px', fontWeight: 700, color: 'var(--text-secondary)' }}>Follow Us:</span>
              <div style={{ display: 'flex', gap: '10px' }}>
                {socialLinks.map((social, i) => (
                  <a 
                    key={i} 
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(var(--accent-rgb), 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent)',
                      transition: 'all 0.3s ease'
                    }}
                    className="social-hover"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right: Modern Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              backgroundColor: 'var(--bg-card)',
              padding: '60px',
              borderRadius: '40px',
              border: '1px solid var(--glass-border)',
              boxShadow: '0 40px 100px -20px rgba(0,0,0,0.08)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >

            <div style={{ position: 'relative', zIndex: 1 }}>
              <p style={{ fontSize: '24px', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '8px' }}>
                Send us a message
              </p>
              <p style={{ fontSize: '15px', color: 'var(--text-secondary)', marginBottom: '40px' }}>
                We'll respond to your inquiry within 24 hours.
              </p>

              <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '24px' }}>
                <div style={inputContainer}>
                  <label style={labelStyle}>Full Name</label>
                  <input 
                    type="text" 
                    placeholder="Your name" 
                    value={formData.fullName}
                    onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                    style={{...inputStyle, borderColor: errors.fullName ? '#ef4444' : 'var(--glass-border)'}} 
                  />
                  {errors.fullName && <span style={errorText}>{errors.fullName}</span>}
                </div>

                <div style={inputContainer}>
                  <label style={labelStyle}>Email Address</label>
                  <input 
                    type="email" 
                    placeholder="your.email@example.com" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    style={{...inputStyle, borderColor: errors.email ? '#ef4444' : 'var(--glass-border)'}} 
                  />
                  {errors.email && <span style={errorText}>{errors.email}</span>}
                </div>

                <div style={inputContainer}>
                  <label style={labelStyle}>Subject</label>
                  <input 
                    type="text" 
                    placeholder="what is this regarding" 
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    style={{...inputStyle, borderColor: errors.subject ? '#ef4444' : 'var(--glass-border)'}} 
                  />
                  {errors.subject && <span style={errorText}>{errors.subject}</span>}
                </div>

                <div style={inputContainer}>
                  <label style={labelStyle}>Message</label>
                  <textarea 
                    placeholder="Tell us more about your inquiry..." 
                    rows={4} 
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    style={{ ...inputStyle, borderRadius: '24px', borderColor: errors.message ? '#ef4444' : 'var(--glass-border)' }} 
                  />
                  {errors.message && <span style={errorText}>{errors.message}</span>}
                </div>

                <motion.button 
                  type="submit" 
                  whileHover={{ scale: 1.02, boxShadow: '0 10px 30px rgba(var(--accent-rgb), 0.3)' }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    backgroundColor: 'var(--accent)',
                    color: '#fff',
                    border: 'none',
                    padding: '14px 28px',
                    borderRadius: '16px',
                    fontWeight: 700,
                    fontSize: '16px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    marginTop: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    width: 'fit-content'
                  }}
                >
                  <span>Send Message</span>
                  <SendHorizontal size={18} style={{ transform: 'rotate(-45deg) translateY(0.5px)' }} />
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {isSubmitted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0,0,0,0.8)',
              backdropFilter: 'blur(10px)',
              zIndex: 10000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '24px'
            }}
            onClick={() => setIsSubmitted(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              style={{
                backgroundColor: 'var(--bg-card)',
                padding: '50px',
                borderRadius: '40px',
                textAlign: 'center',
                maxWidth: '450px',
                width: '100%',
                boxShadow: '0 30px 60px rgba(0,0,0,0.4)',
                position: 'relative',
                border: '1px solid var(--glass-border)'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div style={{
                width: '100px',
                height: '100px',
                borderRadius: '35px',
                backgroundColor: 'rgba(var(--accent-rgb), 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent)',
                margin: '0 auto 30px'
              }}>
                <CheckCircle2 size={56} />
              </div>
              <h3 style={{ fontSize: '32px', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '16px', fontFamily: 'var(--font-heading)' }}>Success!</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '16px', lineHeight: 1.6, marginBottom: '40px' }}>
                Your message has been received. Our team will lead the way and reach back to you shortly.
              </p>
              <button 
                onClick={() => setIsSubmitted(false)}
                style={{
                  backgroundColor: 'var(--accent)',
                  color: '#fff',
                  border: 'none',
                  padding: '18px 40px',
                  borderRadius: '18px',
                  fontWeight: 800,
                  fontSize: '16px',
                  cursor: 'pointer',
                  width: '100%',
                  boxShadow: '0 10px 25px rgba(var(--accent-rgb), 0.2)'
                }}
              >
                Return to Site
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .social-hover:hover {
          background-color: var(--accent) !important;
          color: #fff !important;
          transform: translateY(-3px);
        }
        @media (max-width: 1024px) {
          .contact-main-grid {
            grid-template-columns: 1fr !important;
            gap: 60px !important;
          }
          h2 { font-size: 44px !important; }
        }
        @media (max-width: 768px) {
          section { padding: 80px 0 !important; }
          .contact-main-grid > div:first-child { text-align: center; }
          h2 { font-size: 36px !important; }
          p { margin: 0 auto 24px !important; }
          div[style*="justify-content: center"], .contact-main-grid div[style*="align-items: center"] {
            justify-content: center !important;
          }
          div[style*="padding: 60px"] { padding: 40px 24px !important; }
          .contact-main-grid form div[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

const inputContainer = {
  display: 'flex',
  flexDirection: 'column' as const,
  gap: '10px'
};

const labelStyle = {
  fontSize: '14px',
  fontWeight: 700,
  color: 'var(--text-primary)',
  paddingLeft: '4px'
};

const inputStyle = {
  width: '100%',
  padding: '18px 24px',
  backgroundColor: 'rgba(var(--text-primary-rgb), 0.03)',
  border: '2px solid transparent',
  borderRadius: '18px',
  fontSize: '16px',
  color: 'var(--text-primary)',
  outline: 'none',
  transition: 'all 0.3s ease'
};

const errorText = {
  fontSize: '12px',
  color: '#ef4444',
  fontWeight: 700,
  paddingLeft: '4px',
  marginTop: '-4px'
};
