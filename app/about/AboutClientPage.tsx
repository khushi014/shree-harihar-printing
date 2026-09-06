"use client";

import React from "react";
import Header from "../../components/Header";
import FooterSection from "../../components/FooterSection";
import AboutHeroSection from "../../components/about/AboutHeroSection";
import AboutStorySection from "../../components/about/AboutStorySection";
import AboutTimelineSection from "../../components/about/AboutTimelineSection";
import AboutCountersSection from "../../components/about/AboutCountersSection";
import AboutValuesSection from "../../components/about/AboutValuesSection";
import AboutClientsGridSection from "../../components/about/AboutClientsGridSection";
import AboutInfrastructureSection from "../../components/about/AboutInfrastructureSection";

export default function AboutClientPage() {
  return (
    <div className="flex-1 w-full bg-slate-50 relative selection:bg-primary selection:text-white font-sans text-slate-800">
      <Header />
      
      <main className="w-full">
        <AboutHeroSection />
        <AboutStorySection />
        <AboutTimelineSection />
        <AboutCountersSection />
        <AboutValuesSection />
        <AboutClientsGridSection />
        <AboutInfrastructureSection />
      </main>

      <FooterSection />
    </div>
  );
}
