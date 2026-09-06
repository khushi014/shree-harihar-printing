"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  X,
  Printer,
  Sparkles,
  Cpu,
  ShieldCheck,
  Bookmark,
  Layers,
  CheckCircle2
} from "lucide-react";
import { TIMELINE_DECADES, TimelineDecade } from "./timelineData";

export default function AboutTimelineSection() {
  const [selectedEra, setSelectedEra] = useState<string>("all");
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const timelineRef = useRef<HTMLDivElement>(null);

  // Filter decades
  const filteredDecades = TIMELINE_DECADES.filter((decade) => {
    if (selectedEra === "all") return true;
    return decade.category === selectedEra;
  });

  const filterTabs = [
    { id: "all", label: "All Eras (1921–Today)" },
    { id: "founding", label: "1921–1940 (Founding)" },
    { id: "resilience", label: "1941–1960 (Resilience)" },
    { id: "modernization", label: "1961–2000 (Offset & Modern)" },
    { id: "high-tech", label: "2001–Today (High-Tech & Centenary)" },
  ];

  return (
    <section id="history-timeline" className="bg-slate-50 relative overflow-hidden border-b border-slate-200" ref={timelineRef}>

      {/* Subtle Engineering Dot/Grid Texture Background (SaaS/B2B Polish) */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-[0.035] pointer-events-none" />

      {/* ── TOP HISTORY HERO BANNER ── */}
      <div className="relative w-full h-[360px] sm:h-[440px] lg:h-[480px] bg-slate-950 overflow-hidden flex items-center justify-center">
        {/* Vintage Hourglass & Books Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/history_hourglass_banner.jpg"
            alt="Historical hourglass of time and vintage printing heritage"
            className="w-full h-full object-cover object-center opacity-45 sm:opacity-50 filter saturate-110"
          />
          {/* Subtle gradient vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/40" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-heading text-xs uppercase tracking-[0.3em] text-slate-300 font-bold mb-3 block">
              100+ Years of Craftsmanship
            </span>
            <h2 className="font-heading font-light text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-4">
              Our <span className="font-bold text-primary">History</span>
            </h2>
            <p className="font-sans text-sm sm:text-base text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed font-light">
              From our humble beginnings with two treadle letterpress platens in 1921 to today&apos;s state-of-the-art automated packaging facility. A timeline spanning five generations.
            </p>

            {/* "Watch Our Milestone" Action Button */}
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setIsVideoModalOpen(true)}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white text-slate-900 font-heading font-medium text-xs sm:text-sm uppercase tracking-wider shadow-lg hover:bg-slate-100 hover:shadow-primary/20 transition-all group cursor-pointer"
            >
              <span className="w-7 h-7 rounded-full bg-primary flex items-center justify-center text-white group-hover:bg-primary-dark transition-colors">
                <Play className="w-3.5 h-3.5 fill-white ml-0.5" />
              </span>
              Watch Our Milestone
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* ── ERA QUICK NAVIGATION TABS ── */}
      <div className="bg-white border-b border-slate-200/80 sticky top-16 sm:top-20 z-20 shadow-xs">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex flex-wrap items-center justify-center gap-2 py-0.5">
            {filterTabs.map((tab) => {
              const isActive = selectedEra === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedEra(tab.id)}
                  className={`whitespace-nowrap px-4 py-2 rounded-full text-xs sm:text-sm font-heading font-medium transition-all cursor-pointer ${isActive
                    ? "bg-slate-900 text-white shadow-md shadow-slate-900/20 scale-102"
                    : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100 hover:text-slate-900"
                    }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── MAIN TIMELINE CONTAINER ── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 relative">

        {/* Section Intro Subtitle */}
        <div className="text-center mb-16 sm:mb-20">
          <span className="font-heading text-xs font-bold uppercase tracking-[0.25em] text-primary block mb-2">
            Chronological Journey (10-Year Decades)
          </span>
          <h3 className="font-heading font-light text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight">
            From 1921 <span className="font-bold text-primary">Till Today</span>
          </h3>
          <p className="font-sans text-xs sm:text-sm text-slate-500 mt-2 max-w-lg mx-auto">
            Explore our continuous decade-by-decade milestones spanning five generations of printing mastery.
          </p>
        </div>

        {/* Vertical Central Line */}
        {/* On desktop: exactly at 50%. On mobile: left-6 */}
        {/* Gradient strictly enforces brand palette: from subtle slate down to primary red */}
        <div className="relative">
          <div className="absolute top-4 bottom-12 w-[3px] bg-gradient-to-b from-slate-200 via-slate-300 to-primary left-6 md:left-1/2 md:-translate-x-1/2 rounded-full z-0 opacity-90" />

          {/* Timeline Nodes & Cards */}
          <div className="space-y-14 sm:space-y-20 relative z-10">
            {filteredDecades.map((decade, index) => {
              // Alternation pattern: even indices have Card on Left, Year & Photo on Right.
              // Odd indices have Year & Photo on Left, Card on Right.
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={decade.id}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: 0.05 }}
                  className="relative flex flex-col md:flex-row items-start md:items-center w-full"
                >

                  {/* ─────────────────────────────────────────────────────────────
                      DESKTOP LEFT SIDE
                     ───────────────────────────────────────────────────────────── */}
                  <div className="hidden md:flex md:w-1/2 md:pr-12 lg:pr-16 justify-end items-center">
                    {isEven ? (
                      /* Card on Left for Even */
                      <TimelineCard
                        decade={decade}
                        align="right"
                      />
                    ) : (
                      /* Year Label & Photo on Left for Odd */
                      <DecadeYearHeading decade={decade} align="right" />
                    )}
                  </div>

                  {/* ─────────────────────────────────────────────────────────────
                      CENTER NODE WITH DIRECTIONAL ARROW
                     ───────────────────────────────────────────────────────────── */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 flex items-center justify-center z-20">
                    <div className="relative group">
                      {/* Central Circular Icon Badge */}
                      <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-slate-900 text-white flex items-center justify-center shadow-md border-2 border-white ring-4 ring-slate-200/80 group-hover:scale-110 group-hover:bg-primary transition-all duration-300">
                        {decade.category === "founding" && <Printer className="w-4 h-4 sm:w-5 sm:h-5" />}
                        {decade.category === "resilience" && <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />}
                        {decade.category === "modernization" && <Layers className="w-4 h-4 sm:w-5 sm:h-5" />}
                        {decade.category === "high-tech" && <Cpu className="w-4 h-4 sm:w-5 sm:h-5" />}
                      </div>

                      {/* Directional Pointer Arrow (Desktop Only):
                          Pointing toward the card side! */}
                      {isEven ? (
                        // Card is on LEFT, so arrow points LEFT
                        <div className="hidden md:block absolute top-1/2 -left-2 -translate-y-1/2 w-0 h-0 border-y-[6px] border-y-transparent border-r-[8px] border-r-slate-900 group-hover:border-r-primary transition-colors" />
                      ) : (
                        // Card is on RIGHT, so arrow points RIGHT
                        <div className="hidden md:block absolute top-1/2 -right-2 -translate-y-1/2 w-0 h-0 border-y-[6px] border-y-transparent border-l-[8px] border-l-slate-900 group-hover:border-l-primary transition-colors" />
                      )}
                    </div>
                  </div>

                  {/* ─────────────────────────────────────────────────────────────
                      DESKTOP RIGHT SIDE
                     ───────────────────────────────────────────────────────────── */}
                  <div className="hidden md:flex md:w-1/2 md:pl-12 lg:pl-16 justify-start items-center">
                    {isEven ? (
                      /* Year Label & Photo on Right for Even */
                      <DecadeYearHeading decade={decade} align="left" />
                    ) : (
                      /* Card on Right for Odd */
                      <TimelineCard
                        decade={decade}
                        align="left"
                      />
                    )}
                  </div>

                  {/* ─────────────────────────────────────────────────────────────
                      MOBILE VIEW (Clean single-column stacked)
                     ───────────────────────────────────────────────────────────── */}
                  <div className="md:hidden w-full pl-14 sm:pl-16">
                    {/* Mobile Decade Label */}
                    <div className="mb-2.5">
                      <span className="font-heading font-serif text-lg font-bold text-slate-900">
                        {decade.decadeRange}
                      </span>
                      <span className="text-xs text-slate-500 font-sans ml-2">
                        • {decade.generation}
                      </span>
                    </div>

                    {/* Mobile Era Image Banner */}
                    <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden shadow-sm border border-slate-200 mb-3 bg-slate-900">
                      <img
                        src={decade.image}
                        alt={decade.imageCaption || decade.eraTitle}
                        className="w-full h-full object-cover opacity-95"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                      <div className="absolute bottom-2 left-2.5 right-2.5 flex items-center justify-between text-white text-[10px]">
                        <span className="font-heading font-semibold uppercase tracking-wider bg-black/60 px-2 py-0.5 rounded-sm">
                          {decade.badgeText}
                        </span>
                        <span className="font-mono text-slate-300">
                          {decade.periodShort}
                        </span>
                      </div>
                    </div>

                    {/* Mobile Card */}
                    <TimelineCard
                      decade={decade}
                      align="left"
                    />
                  </div>

                </motion.div>
              );
            })}
          </div>

          {/* Terminal Milestone Anchor Node at Bottom of Spine */}
          <div className="relative pt-12 flex items-center justify-start md:justify-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-slate-900 text-white flex items-center justify-center shadow-lg border-2 border-white ring-4 ring-slate-200 ml-1 md:ml-0 z-10">
              <Bookmark className="w-5 h-5 text-amber-400" />
            </div>
          </div>
        </div>

        {/* Bottom Centenary Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-white rounded-2xl p-8 sm:p-10 border border-slate-200 shadow-sm text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-heading font-semibold uppercase tracking-wider mb-4 border border-amber-200">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            A Century of Trust
          </div>
          <h4 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-light text-slate-900 mb-3">
            1921 - <span className="font-bold text-primary">Today & Beyond</span>
          </h4>
          <p className="font-sans text-sm text-slate-600 leading-relaxed max-w-xl mx-auto mb-6">
            Five generations of continuous innovation have shaped Shree Harihar Printing Works into a modern packaging powerhub. We thank our partners, employees, and clients who have walked this century with us.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-heading font-medium text-slate-500">
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-primary" /> 5 Generations In-House</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-primary" /> Zero Compromise on Quality</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-primary" /> 100% In-House Converting</span>
          </div>
        </motion.div>

      </div>

      {/* ── VIDEO MODAL (Watch Our Milestone) ── */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsVideoModalOpen(false)}
              className="fixed inset-0 bg-slate-950/85 backdrop-blur-md"
            />

            {/* Video Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl z-10 border border-slate-800"
            >
              <div className="flex items-center justify-between p-4 bg-slate-900 border-b border-slate-800 text-white">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-heading text-xs sm:text-sm font-semibold tracking-wider uppercase">
                    Shree Harihar Printing Works LLP - Infrastructure & Milestones
                  </span>
                </div>
                <button
                  onClick={() => setIsVideoModalOpen(false)}
                  className="p-1.5 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="relative aspect-video bg-black flex items-center justify-center">
                <video
                  autoPlay
                  controls
                  playsInline
                  className="w-full h-full object-contain"
                >
                  <source src="/infrastructure.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// SUB-COMPONENT: Timeline Card
// ─────────────────────────────────────────────────────────────────────────────
function TimelineCard({
  decade,
  align,
}: {
  decade: TimelineDecade;
  align: "left" | "right";
}) {
  return (
    <div
      className={`w-full max-w-md bg-white rounded-xl p-5 sm:p-7 shadow-xs hover:shadow-xl transition-all duration-300 border border-slate-200/80 hover:border-primary/30 group ${align === "right" ? "text-left" : "text-left"
        }`}
    >
      {/* List of Milestones with bold years */}
      <div className="space-y-4">
        {decade.milestones.map((m, idx) => (
          <div key={idx} className="flex items-baseline gap-3 sm:gap-4">
            <span className="font-heading font-serif text-lg sm:text-xl font-bold text-slate-900 group-hover:text-primary transition-colors shrink-0">
              {m.year}
            </span>
            <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              {m.description}
            </p>
          </div>
        ))}
      </div>

      {/* Era / Generation Tag */}
      <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
        <span className="text-[11px] font-heading font-semibold text-slate-400 uppercase tracking-wider">
          {decade.generation}
        </span>
        <span className="text-[11px] font-heading font-medium text-slate-400">
          {decade.decadeRange}
        </span>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// SUB-COMPONENT: Decade Year Heading with Historical Image
// ─────────────────────────────────────────────────────────────────────────────
function DecadeYearHeading({
  decade,
  align,
}: {
  decade: TimelineDecade;
  align: "left" | "right";
}) {
  return (
    <div className={`w-full max-w-md ${align === "right" ? "text-right" : "text-left"}`}>
      {/* Dedicated Historical / Industrial Era Image */}
      <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden shadow-md border border-slate-200 group/img mb-3.5 bg-slate-900">
        <img
          src={decade.image}
          alt={decade.imageCaption || decade.eraTitle}
          className="w-full h-full object-cover group-hover/img:scale-105 transition-all duration-700 opacity-95 group-hover/img:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
        <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-white text-[11px]">
          <span className="font-heading font-semibold uppercase tracking-wider bg-black/60 px-2 py-0.5 rounded-sm backdrop-blur-xs">
            {decade.badgeText}
          </span>
          <span className="font-mono text-[10px] text-slate-300 hidden sm:inline">
            {decade.periodShort}
          </span>
        </div>
      </div>

      <h3 className="font-heading font-serif text-2xl lg:text-3xl text-slate-900 tracking-tight font-medium hover:text-primary transition-colors">
        {decade.decadeRange}
      </h3>
      <p className="font-sans text-xs sm:text-sm text-slate-600 mt-1 font-normal tracking-wide">
        {decade.eraTitle}
      </p>
      <span className="inline-block mt-2 px-2.5 py-0.5 rounded-full text-[11px] font-heading font-medium bg-white text-slate-700 border border-slate-200 shadow-2xs">
        {decade.generation}
      </span>
    </div>
  );
}
