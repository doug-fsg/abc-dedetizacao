import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import UrgencySection from "@/components/UrgencySection";
import ServicesSection from "@/components/ServicesSection";
import BenefitsSection from "@/components/BenefitsSection";
import HowItWorks from "@/components/HowItWorks";
import SocialProofSection from "@/components/SocialProofSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import FaqSection from "@/components/FaqSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <UrgencySection />
      <ServicesSection />
      <BenefitsSection />
      <HowItWorks />
      <SocialProofSection />
      <GuaranteeSection />
      <FaqSection />
      <CtaSection />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
};

export default Index;
