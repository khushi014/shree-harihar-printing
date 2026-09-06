"use client";

import React from "react";
import Header from "../../components/Header";
import FooterSection from "../../components/FooterSection";
import ContactHeroSection from "../../components/contact/ContactHeroSection";
import ContactSection from "../../components/ContactSection";
import FacilityVisitSection from "../../components/contact/FacilityVisitSection";
import MapSection from "../../components/contact/MapSection";

export default function ContactClientPage() {
  return (
    <div className="flex-1 w-full bg-slate-50 relative selection:bg-primary selection:text-white font-sans text-slate-800">
      <Header />
      
      <main className="w-full min-h-screen">
        <ContactHeroSection />
        
        <ContactSection />

        <FacilityVisitSection />
        <MapSection />
      </main>

      <FooterSection />
    </div>
  );
}
