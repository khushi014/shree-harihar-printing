"use client";

import React from "react";
import Header from "../../components/Header";
import FooterSection from "../../components/FooterSection";
import ServicesHeroSection from "../../components/services/ServicesHeroSection";
import ServicesListSection from "../../components/services/ServicesListSection";
import ServicesProcessSection from "../../components/services/ServicesProcessSection";
import ServicesCTASection from "../../components/services/ServicesCTASection";

export default function ServicesClientPage() {
  return (
    <div className="flex-1 w-full bg-slate-50 relative selection:bg-primary selection:text-white font-sans text-slate-800">
      <Header />
      
      <main className="w-full">
        <ServicesHeroSection />
        <ServicesListSection />
        <ServicesProcessSection />
        <ServicesCTASection />
      </main>

      <FooterSection />
    </div>
  );
}
