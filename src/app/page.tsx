import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

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
