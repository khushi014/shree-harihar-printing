"use client";

import React, { useState } from "react";
import Header from "../../components/Header";
import FooterSection from "../../components/FooterSection";
import IndustryHeroSection from "../../components/industry/IndustryHeroSection";
import IndustryListSection from "../../components/industry/IndustryListSection";
import IndustryCTASection from "../../components/industry/IndustryCTASection";
import QuoteModal from "../../components/QuoteModal";

export default function IndustryClientPage() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  return (
    <div className="flex-1 w-full bg-slate-50 relative selection:bg-primary selection:text-white font-sans text-slate-800">
      <Header />
      
      <main className="pt-24 lg:pt-32">
        <IndustryHeroSection />
        <IndustryListSection />
        <IndustryCTASection setQuoteModalOpen={setQuoteModalOpen} />
      </main>

      <FooterSection setQuoteModalOpen={setQuoteModalOpen} />
      
      <QuoteModal isOpen={quoteModalOpen} onClose={() => setQuoteModalOpen(false)} />
    </div>
  );
}
