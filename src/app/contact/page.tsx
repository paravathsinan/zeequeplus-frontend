"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactFormSection from "@/components/Contact/ContactFormSection";
import ContactMap from "@/components/Contact/ContactMap";

export default function ContactPage() {
  return (
    <main style={{ backgroundColor: 'var(--bg-page)', minHeight: '100vh' }}>
      <Navbar />
      <ContactFormSection />
      <ContactMap />
      <Footer />
    </main>
  );
}
