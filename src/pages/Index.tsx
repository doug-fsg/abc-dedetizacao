import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import HowItWorks from "@/components/HowItWorks";
import SocialProofSection from "@/components/SocialProofSection";
import FaqSection from "@/components/FaqSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <ServicesSection />
      <AboutSection />
      <HowItWorks />
      <SocialProofSection />
      <FaqSection />
      <CtaSection />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
};

export default Index;
