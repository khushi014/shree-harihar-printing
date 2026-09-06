"use client";

import React from "react";
import Header from "../../components/Header";
import FooterSection from "../../components/FooterSection";
import GalleryHeroSection from "../../components/gallery/GalleryHeroSection";
import GalleryGridSection from "../../components/gallery/GalleryGridSection";
import GalleryCTASection from "../../components/gallery/GalleryCTASection";

export default function GalleryClientPage() {
  return (
    <div className="flex-1 w-full bg-slate-50 relative selection:bg-primary selection:text-white font-sans text-slate-800">
      <Header />
      
      <main className="w-full min-h-screen">
        <GalleryHeroSection />
        <GalleryGridSection />
        <GalleryCTASection />
      </main>

      <FooterSection />
    </div>
  );
}
