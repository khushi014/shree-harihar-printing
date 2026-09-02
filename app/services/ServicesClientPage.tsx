"use client";

import React, { useState } from "react";
import Header from "../../components/Header";
import FooterSection from "../../components/FooterSection";
import ServicesHeroSection from "../../components/services/ServicesHeroSection";
import ServicesListSection from "../../components/services/ServicesListSection";
import ServicesProcessSection from "../../components/services/ServicesProcessSection";
import ServicesCTASection from "../../components/services/ServicesCTASection";
import QuoteModal from "../../components/QuoteModal";

export default function ServicesClientPage() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  return (
    <div className="flex-1 w-full bg-slate-50 relative selection:bg-primary selection:text-white font-sans text-slate-800">
      <Header />
      
      <main className="pt-24 lg:pt-32">
        <ServicesHeroSection />
        <ServicesListSection setQuoteModalOpen={setQuoteModalOpen} />
        <ServicesProcessSection />
        <ServicesCTASection setQuoteModalOpen={setQuoteModalOpen} />
      </main>

      <FooterSection setQuoteModalOpen={setQuoteModalOpen} />
      
      <QuoteModal isOpen={quoteModalOpen} onClose={() => setQuoteModalOpen(false)} />
    </div>
  );
}
