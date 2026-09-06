"use client";

import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import QuickTrustBar from "../components/QuickTrustBar";
import ClientMarqueeSection from "../components/clients/ClientMarqueeSection";
import LegacySection from "../components/LegacySection";
import InfrastructureSection from "../components/InfrastructureSection";
import SuccessFutureSection from "../components/SuccessFutureSection";
import TestimonialsSection from "../components/TestimonialsSection";
import StrongCoreSection from "../components/StrongCoreSection";
import ContactSection from "../components/ContactSection";
import FooterSection from "../components/FooterSection";

export default function Home() {
  return (
    <div className="flex-1 w-full bg-slate-50 relative selection:bg-primary selection:text-white font-sans text-slate-800">
      <Header />
      
      <HeroSection />
      
      <QuickTrustBar />
      
      <LegacySection />
      
      <InfrastructureSection />
      
      <SuccessFutureSection />
      
      <TestimonialsSection />
      
      <StrongCoreSection />
      
      <ClientMarqueeSection />
      
      <ContactSection />
      
      <FooterSection />
    </div>
  );
}
