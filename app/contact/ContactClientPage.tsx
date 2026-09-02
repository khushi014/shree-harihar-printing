"use client";

import React, { useState } from "react";
import Header from "../../components/Header";
import FooterSection from "../../components/FooterSection";
import ContactHeroSection from "../../components/contact/ContactHeroSection";
import ContactInfoSection from "../../components/contact/ContactInfoSection";
import ContactFormSection from "../../components/contact/ContactFormSection";
import FacilityVisitSection from "../../components/contact/FacilityVisitSection";
import MapSection from "../../components/contact/MapSection";
import QuoteModal from "../../components/QuoteModal";

export default function ContactClientPage() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  return (
    <div className="flex-1 w-full bg-slate-50 relative selection:bg-primary selection:text-white font-sans text-slate-800">
      <Header />
      
      <main className="pt-24 lg:pt-32 min-h-screen">
        <ContactHeroSection />
        
        {/* We can place the Info and Form side-by-side using a grid on large screens */}
        <div className="max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <ContactInfoSection />
            <ContactFormSection />
          </div>
        </div>

        <FacilityVisitSection />
        <MapSection />
      </main>

      <FooterSection setQuoteModalOpen={setQuoteModalOpen} />
      
      <QuoteModal isOpen={quoteModalOpen} onClose={() => setQuoteModalOpen(false)} />
    </div>
  );
}
