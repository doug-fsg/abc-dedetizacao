import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import MobileHero from "@/components/mobile/MobileHero";
import MobileTrustStrip from "@/components/mobile/MobileTrustStrip";
import ServicesSection from "@/components/ServicesSection";
import PestGallerySection from "@/components/PestGallerySection";
import AboutSection from "@/components/AboutSection";
import MissionSection from "@/components/MissionSection";
import HowItWorks from "@/components/HowItWorks";
import FaqSection from "@/components/FaqSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { useIsMobile } from "@/hooks/useIsMobile";

const Index = () => {
  const isMobile = useIsMobile();

  return (
    <main className="min-h-0 overflow-x-clip pb-24 md:pb-20">
      <Navbar />
      {isMobile ? (
        <>
          <MobileHero />
          <MobileTrustStrip />
        </>
      ) : (
        <>
          <Hero />
          <TrustStrip />
        </>
      )}
      <ServicesSection />
      <AboutSection />
      <PestGallerySection />
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
