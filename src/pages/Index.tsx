import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import ServicesSection from "@/components/ServicesSection";
import PestGallerySection from "@/components/PestGallerySection";
import AboutSection from "@/components/AboutSection";
import MissionSection from "@/components/MissionSection";
import HowItWorks from "@/components/HowItWorks";
import FaqSection from "@/components/FaqSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustStrip />
      <ServicesSection />
      <PestGallerySection />
      <AboutSection />
      <MissionSection />
      <HowItWorks />
      <FaqSection />
      <CtaSection />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
};

export default Index;
