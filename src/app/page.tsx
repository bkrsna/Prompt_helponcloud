import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import dynamic from "next/dynamic";

const Partners = dynamic(() => import("@/components/Partners"));
const Services = dynamic(() => import("@/components/Services"));
const WhyUs = dynamic(() => import("@/components/WhyUs"));
const Pricing = dynamic(() => import("@/components/Pricing"));
const Testimonials = dynamic(() => import("@/components/Testimonials"));
const FAQ = dynamic(() => import("@/components/FAQ"));
const Footer = dynamic(() => import("@/components/Footer"));

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-pink-500/30">
      <Navbar />
      <Hero />
      <Partners />
      <Services />
      <WhyUs />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  );
}
