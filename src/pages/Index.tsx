import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/ServicesSection";
import { DeferredMount } from "@/components/DeferredMount";
import MobileHero from "@/components/mobile/MobileHero";
import MobileTrustStrip from "@/components/mobile/MobileTrustStrip";
import { useIsMobile } from "@/hooks/useIsMobile";

const Hero = lazy(() => import("@/components/Hero"));
const TrustStrip = lazy(() => import("@/components/TrustStrip"));

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
        <Suspense
          fallback={
            <div
              className="min-h-[420px] bg-gradient-to-br from-secondary/80 via-background to-accent/15 pt-[5.5rem] md:min-h-[560px] md:pt-28"
              aria-hidden
            />
          }
        >
          <Hero />
          <TrustStrip />
        </Suspense>
      )}
      <ServicesSection />
      <DeferredMount load={() => import("@/components/AboutSection")} minHeight="480px" />
      <DeferredMount load={() => import("@/components/PestGallerySection")} minHeight="360px" />
      <DeferredMount load={() => import("@/components/MissionSection")} minHeight="320px" />
      <DeferredMount load={() => import("@/components/HowItWorks")} minHeight="400px" />
      <DeferredMount load={() => import("@/components/FaqSection")} minHeight="280px" />
      <DeferredMount load={() => import("@/components/CtaSection")} minHeight="200px" />
      <DeferredMount load={() => import("@/components/Footer")} minHeight="240px" />
      <DeferredMount load={() => import("@/components/WhatsAppFloat")} minHeight="0" rootMargin="0px" />
    </main>
  );
};

export default Index;
