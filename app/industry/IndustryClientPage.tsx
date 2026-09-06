"use client";

import React from "react";
import Header from "../../components/Header";
import FooterSection from "../../components/FooterSection";
import IndustryHeroSection from "../../components/industry/IndustryHeroSection";
import IndustryListSection from "../../components/industry/IndustryListSection";
import IndustryCatchAllSection from "../../components/industry/IndustryCatchAllSection";
import IndustryCTASection from "../../components/industry/IndustryCTASection";

export default function IndustryClientPage() {
  return (
    <div className="flex-1 w-full bg-slate-50 relative selection:bg-primary selection:text-white font-sans text-slate-800">
      <Header />
      
      <main className="w-full">
        <IndustryHeroSection />
        <IndustryListSection />
        <IndustryCatchAllSection />
        <IndustryCTASection />
      </main>

      <FooterSection />
    </div>
  );
}
