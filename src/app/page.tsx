import Navbar from "@/sections/Navbar";
import Hero from "@/sections/Hero";
import TrustedBy from "@/sections/TrustedBy";
import Services from "@/sections/Services";
import Doctors from "@/sections/Doctors";
import WhyChooseUs from "@/sections/WhyChooseUs";
import Stats from "@/sections/Stats";
import Testimonials from "@/sections/Testimonials";
import CTA from "@/sections/CTA";
import FAQ from "@/sections/FAQ";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";
import FloatingActions from "@/components/FloatingActions";
import Loader from "@/components/Loader";

export default function Home() {
  return (
    <main>
      <Loader />

      <Navbar />
      <Hero />
      <TrustedBy />
      <Services />
      <Doctors />
      <WhyChooseUs />
      <Stats />
      <Testimonials />
      <CTA />
      <FAQ />
      <Contact />
      <Footer />
      <FloatingActions />
    </main>
  );
}