import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Highlights from "@/components/Highlights";
import Audience from "@/components/Audience";
import Outcomes from "@/components/Outcomes";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div id="home"><Hero /></div>
      <div id="about"><Intro /></div>
      <div id="experience"><Highlights /></div>
      <Audience />
      <Outcomes />
      <div id="faqs"><Testimonials /></div>
      <CTASection />
      <div id="contact"><Footer /></div>
    </main>
  );
}
