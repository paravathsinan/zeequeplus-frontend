"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube, CheckCircle2, X, Linkedin } from "lucide-react";
import { useState } from "react";

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
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
      color: "#007A3D",
    },
    {
      label: "Email Address:",
      value: "zqnetwork@zeeque.in",
      href: "mailto:zqnetwork@zeeque.in",
      icon: <Mail size={24} />,
      color: "#007A3D",
    },
    {
      label: "Location:",
      value: "Zahra Park, Koduvally, Kozhikode, Kerala",
      href: "https://www.google.com/maps?q=Zahra+Park,+Koduvally,+Kozhikode,+Kerala&output=embed",
      icon: <MapPin size={24} />,
      color: "#007A3D",
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
    if (!formData.fullName.trim()) newErrors.fullName = "Please enter your full name.";
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email format.";
    }
    if (!formData.phone.trim()) newErrors.phone = "Please enter your phone number.";
    if (!formData.message.trim()) newErrors.message = "Please enter your message.";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Logic for sending message would go here
      setIsSubmitted(true);
      setFormData({ fullName: "", email: "", phone: "", city: "", message: "" });
      setErrors({});
    }
  };

  return (
    <section style={{ padding: '100px 0', backgroundColor: 'var(--bg-page)', position: 'relative' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 4L28 12V28H4V12L16 4Z" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16 4V28" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <p style={{ 
            fontSize: '14px', 
            fontWeight: 700, 
            color: 'var(--accent)', 
            textTransform: 'uppercase', 
            letterSpacing: '2px',
            marginBottom: '12px'
          }}>
            Help and Guide You.
          </p>
          <h2 style={{ 
            fontSize: '48px', 
            fontWeight: 800, 
            color: 'var(--text-primary)', 
            lineHeight: 1.2,
            fontFamily: 'var(--font-heading)'
          }}>
            Dont Be a Stranger Just <br /> Say Hello.
          </h2>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1.5fr 1fr', 
          gap: '40px',
          alignItems: 'start'
        }} className="contact-main-grid">
          
          {/* Left: Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{
              backgroundColor: '#fffbeb',
              padding: '40px',
              borderRadius: '24px',
              border: '1px solid #fef3c7',
              position: 'relative'
            }}
          >
            <p style={{ fontSize: '15px', color: '#92400e', marginBottom: '30px', fontWeight: 500 }}>
              Have questions or want to chat? <span style={{ color: 'var(--accent)', borderBottom: '2px solid' }}>Fill out our contact form.</span>
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }} className="contact-form">
              <div style={inputContainer}>
                <input 
                  type="text" 
                  placeholder="Full Name" 
                  value={formData.fullName}
                  onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                  style={{...inputStyle, borderColor: errors.fullName ? '#ef4444' : '#fde68a'}} 
                />
                {errors.fullName && <span style={errorText}>{errors.fullName}</span>}
              </div>

              <div style={inputContainer}>
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  style={{...inputStyle, borderColor: errors.email ? '#ef4444' : '#fde68a'}} 
                />
                {errors.email && <span style={errorText}>{errors.email}</span>}
              </div>

              <div style={inputContainer}>
                <input 
                  type="text" 
                  placeholder="Phone No" 
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  style={{...inputStyle, borderColor: errors.phone ? '#ef4444' : '#fde68a'}} 
                />
                {errors.phone && <span style={errorText}>{errors.phone}</span>}
              </div>

              <div style={inputContainer}>
                <input 
                  type="text" 
                  placeholder="City" 
                  value={formData.city}
                  onChange={(e) => setFormData({...formData, city: e.target.value})}
                  style={inputStyle} 
                />
              </div>

              <div style={{ ...inputContainer, gridColumn: 'span 2' }}>
                <textarea 
                  placeholder="Your Message" 
                  rows={5} 
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  style={{ ...inputStyle, borderRadius: '16px', borderColor: errors.message ? '#ef4444' : '#fde68a' }} 
                />
                {errors.message && <span style={errorText}>{errors.message}</span>}
              </div>

              <button type="submit" style={{
                gridColumn: 'span 2',
                backgroundColor: 'var(--accent)',
                color: '#000',
                border: 'none',
                padding: '16px 32px',
                borderRadius: '100px',
                fontWeight: 700,
                fontSize: '16px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                width: 'fit-content'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Right: Info Cards & Social */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {infoCards.map((info, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                style={{
                  backgroundColor: info.color,
                  padding: '30px',
                  borderRadius: '100px 30px 30px 100px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '24px',
                  color: '#fff',
                  boxShadow: '0 10px 30px rgba(0, 122, 61, 0.2)'
                }}
              >
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--accent)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#000',
                  flexShrink: 0
                }}>
                  {info.icon}
                </div>
                <div>
                  <h4 style={{ fontSize: '18px', fontWeight: 800, marginBottom: '6px' }}>{info.label}</h4>
                  {info.href ? (
                    <a
                      href={info.href}
                      target={info.label === "Location:" ? "_blank" : undefined}
                      rel={info.label === "Location:" ? "noopener noreferrer" : undefined}
                      style={{
                        fontSize: '15px',
                        opacity: 0.9,
                        lineHeight: 1.4,
                        color: '#fff',
                        textDecoration: 'none',
                      }}
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p style={{ fontSize: '15px', opacity: 0.9, lineHeight: 1.4 }}>{info.value}</p>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Social Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{
                backgroundColor: 'rgba(var(--accent-rgb), 0.05)',
                padding: '30px',
                borderRadius: '30px',
                border: '1px solid rgba(var(--accent-rgb), 0.1)',
                marginTop: '10px'
              }}
            >
              <h4 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '16px' }}>Follow Us</h4>
              <div style={{ display: 'flex', gap: '12px' }}>
                {socialLinks.map((social, i) => (
                  <a 
                    key={i} 
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    title={social.label}
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--accent)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#000',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Success Popup */}
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
              backgroundColor: 'rgba(0,0,0,0.6)',
              backdropFilter: 'blur(5px)',
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
                backgroundColor: '#ffffff',
                padding: '40px',
                borderRadius: '32px',
                textAlign: 'center',
                maxWidth: '400px',
                width: '100%',
                boxShadow: '0 20px 60px rgba(0,0,0,0.2)',
                position: 'relative'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setIsSubmitted(false)}
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  background: 'none',
                  border: 'none',
                  color: 'var(--text-secondary)',
                  cursor: 'pointer'
                }}
              >
                <X size={20} />
              </button>
              <div style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                backgroundColor: 'rgba(0, 122, 61, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#007A3D',
                margin: '0 auto 24px'
              }}>
                <CheckCircle2 size={48} />
              </div>
              <h3 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '12px' }}>Message Sent!</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '32px' }}>
                Thank you for reaching out. We have received your message and will get back to you shortly.
              </p>
              <button 
                onClick={() => setIsSubmitted(false)}
                style={{
                  backgroundColor: 'var(--accent)',
                  color: '#000',
                  border: 'none',
                  padding: '14px 40px',
                  borderRadius: '100px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  width: '100%'
                }}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        @media (max-width: 1024px) {
          .contact-main-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 640px) {
          .contact-form {
            grid-template-columns: 1fr !important;
          }
          .contact-form textarea, .contact-form button {
            grid-column: span 1 !important;
          }
          h2 {
            font-size: 32px !important;
          }
          div[style*="border-radius: 100px 30px 30px 100px"] {
             border-radius: 30px !important;
             padding: 20px !important;
             flex-direction: column;
             text-align: center;
          }
        }
      `}</style>
    </section>
  );
}

const inputContainer = {
  display: 'flex',
  flexDirection: 'column' as const,
  gap: '8px'
};

const inputStyle = {
  width: '100%',
  padding: '16px 24px',
  backgroundColor: '#fff',
  border: '1px solid #fde68a',
  borderRadius: '100px',
  fontSize: '15px',
  color: '#000',
  outline: 'none',
  transition: 'all 0.3s ease'
};

const errorText = {
  fontSize: '12px',
  color: '#ef4444',
  fontWeight: 600,
  paddingLeft: '16px'
};
