"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EnrollmentForm from "@/components/Enrollment/EnrollmentForm";

export default function EnrollPage() {
  return (
    <main style={{ backgroundColor: '#F0F9FF', minHeight: '100vh' }}>
      <Navbar />
      <EnrollmentForm />
      <Footer />
    </main>
  );
}
