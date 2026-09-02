"use client";

import React, { useState } from "react";
import Header from "../../components/Header";
import FooterSection from "../../components/FooterSection";
import AboutHeroSection from "../../components/about/AboutHeroSection";
import AboutStorySection from "../../components/about/AboutStorySection";
import AboutCountersSection from "../../components/about/AboutCountersSection";
import AboutBlueprintSection from "../../components/about/AboutBlueprintSection";
import AboutValuesSection from "../../components/about/AboutValuesSection";
import AboutInfrastructureSection from "../../components/about/AboutInfrastructureSection";
import AboutCTASection from "../../components/about/AboutCTASection";
import QuoteModal from "../../components/QuoteModal";

export default function AboutClientPage() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  return (
    <div className="flex-1 w-full bg-slate-50 relative selection:bg-primary selection:text-white font-sans text-slate-800">
      <Header />
      
      <main className="pt-24 lg:pt-32">
        <AboutHeroSection />
        <AboutStorySection />
        <AboutCountersSection />
        <AboutBlueprintSection />
        <AboutValuesSection />
        <AboutInfrastructureSection />
        <AboutCTASection setQuoteModalOpen={setQuoteModalOpen} />
      </main>

      <FooterSection setQuoteModalOpen={setQuoteModalOpen} />
      
      <QuoteModal isOpen={quoteModalOpen} onClose={() => setQuoteModalOpen(false)} />
    </div>
  );
}
