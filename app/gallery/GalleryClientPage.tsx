"use client";

import React, { useState } from "react";
import Header from "../../components/Header";
import FooterSection from "../../components/FooterSection";
import GalleryHeroSection from "../../components/gallery/GalleryHeroSection";
import GalleryGridSection from "../../components/gallery/GalleryGridSection";
import GalleryCTASection from "../../components/gallery/GalleryCTASection";
import QuoteModal from "../../components/QuoteModal";

export default function GalleryClientPage() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  return (
    <div className="flex-1 w-full bg-slate-50 relative selection:bg-primary selection:text-white font-sans text-slate-800">
      <Header />
      
      <main className="pt-24 lg:pt-32 min-h-screen">
        <GalleryHeroSection />
        <GalleryGridSection />
        <GalleryCTASection setQuoteModalOpen={setQuoteModalOpen} />
      </main>

      <FooterSection setQuoteModalOpen={setQuoteModalOpen} />
      
      <QuoteModal isOpen={quoteModalOpen} onClose={() => setQuoteModalOpen(false)} />
    </div>
  );
}
