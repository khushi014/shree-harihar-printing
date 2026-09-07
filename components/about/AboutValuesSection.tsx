"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Lightbulb,
  Target,
  HeartHandshake,
  Sparkles,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2
} from "lucide-react";

export default function AboutValuesSection() {
  return (
    <section className="py-20 lg:py-28 bg-slate-100 border-b border-slate-200 relative overflow-hidden">
      {/* Subtle Engineering Drafting Grid Texture */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-[0.03] pointer-events-none" />

      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/25 text-primary text-xs font-heading font-semibold uppercase tracking-widest mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Our Guiding Blueprint &amp; Philosophy
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-light text-3xl sm:text-4xl lg:text-5xl text-slate-900 mb-6 tracking-tight"
          >
            The Blueprint for <span className="font-bold text-primary">Our Success</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-sans text-base sm:text-lg text-slate-600 leading-relaxed font-normal"
          >
            Our vision and mission have been the blueprint for our consistent, remarkable presence in the industry, even through every challenge along the way. At the core of everything we do:
          </motion.p>
        </div>

        {/* ── THE "BENTO BOX" ASYMMETRIC GRID (NO BORING EQUAL CARDS) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">

          {/* ─────────────────────────────────────────────────────────────
              LEFT HERO BENTO CARD: INNOVATION (Tall & Cinematic)
             ───────────────────────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="group relative flex flex-col justify-between p-8 sm:p-10 lg:p-12 bg-slate-950 rounded-3xl overflow-hidden shadow-2xl border border-slate-800 min-h-[480px] lg:min-h-[560px] text-white hover:border-primary/50 transition-all duration-500 cursor-default"
          >
            {/* Background Image in Full Natural Color */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              <img
                src="/images/prepress_tech_console.jpg"
                alt="High speed printing technology and automated prepress"
                className="w-full h-full object-cover object-center filter saturate-105 group-hover:scale-105 transition-transform duration-700 opacity-40 group-hover:opacity-50"
              />
              {/* Cinematic Vignette Overlay for Text Contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/75 to-slate-950/30" />
            </div>

            {/* Top Bar: Monospace Tag & Icon */}
            <div className="relative z-10 flex items-center justify-between">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white text-[11px] font-mono tracking-widest uppercase">
                PILLAR 01 - TECHNOLOGICAL EDGE
              </span>
              <div className="w-12 h-12 rounded-2xl bg-primary/20 backdrop-blur-md border border-primary/40 flex items-center justify-center text-primary-light group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <Lightbulb className="w-6 h-6" />
              </div>
            </div>

            {/* Bottom Content Area */}
            <div className="relative z-10 mt-20 sm:mt-28">
              <span className="text-xs font-heading font-semibold uppercase tracking-widest text-primary-light block mb-2">
                A Strong Penchant For
              </span>
              <h3 className="font-heading font-bold text-3xl sm:text-4xl text-white tracking-tight mb-4 flex items-center justify-between">
                <span>Innovation</span>
                <ArrowUpRight className="w-6 h-6 text-slate-400 group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </h3>

              <p className="font-sans text-base sm:text-lg text-slate-200 leading-relaxed font-normal mb-8 max-w-xl">
                Adopting next-generation tech and automated processes while fiercely protecting the discipline of our craft.
              </p>

              {/* Technical Operational Highlights */}
              <div className="pt-6 border-t border-white/15 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs sm:text-sm font-sans text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>Micro-Tolerance Laser CTP &amp; Vision Sort</span>
                </div>
                <span className="px-2.5 py-1 rounded-md bg-primary/25 border border-primary/40 text-primary-light text-[11px] font-mono">
                  Continuous Upgrades
                </span>
              </div>
            </div>

            {/* Bottom Accent Glow */}
            <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>

          {/* ─────────────────────────────────────────────────────────────
              RIGHT COLUMN: TWO STACKED CLEAN ARCHITECTURAL BENTO CARDS
             ───────────────────────────────────────────────────────────── */}
          <div className="flex flex-col gap-6 lg:gap-8 justify-between">

            {/* BENTO CARD 2: GENERATIONAL SATISFACTION */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group bg-white border border-slate-200/90 p-8 sm:p-10 rounded-3xl shadow-sm hover:shadow-xl hover:border-primary/40 transition-all duration-300 flex flex-col justify-between cursor-default flex-1"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[11px] font-mono tracking-widest uppercase text-slate-400 font-semibold">
                    PILLAR 02 - ENDURING PARTNERSHIPS
                  </span>
                  <div className="w-11 h-11 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700 group-hover:bg-primary/10 group-hover:border-primary/30 group-hover:text-primary transition-all duration-300">
                    <Target className="w-5 h-5" />
                  </div>
                </div>

                <span className="text-xs font-heading font-semibold uppercase tracking-widest text-primary block mb-1">
                  Achieving Highest
                </span>
                <h3 className="font-heading font-bold text-2xl sm:text-3xl text-slate-900 tracking-tight mb-3">
                  Generational Satisfaction
                </h3>

                <p className="font-sans text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  Measuring our success not by the size of the order, but by whether the client comes back for the next decade.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs sm:text-sm font-sans text-slate-500">
                <span className="flex items-center gap-1.5 font-medium text-slate-700">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  Single-Vendor Accountability
                </span>
                <span className="font-mono text-xs font-bold text-slate-900">
                  99.8% Retention
                </span>
              </div>
            </motion.div>

            {/* BENTO CARD 3: HUMAN-CENTRIC CULTURE */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group bg-white border border-slate-200/90 p-8 sm:p-10 rounded-3xl shadow-sm hover:shadow-xl hover:border-primary/40 transition-all duration-300 flex flex-col justify-between cursor-default flex-1"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[11px] font-mono tracking-widest uppercase text-slate-400 font-semibold">
                    PILLAR 03 - CRAFT &amp; CULTURE
                  </span>
                  <div className="w-11 h-11 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700 group-hover:bg-primary/10 group-hover:border-primary/30 group-hover:text-primary transition-all duration-300">
                    <HeartHandshake className="w-5 h-5" />
                  </div>
                </div>

                <span className="text-xs font-heading font-semibold uppercase tracking-widest text-primary block mb-1">
                  Creating A Positive
                </span>
                <h3 className="font-heading font-bold text-2xl sm:text-3xl text-slate-900 tracking-tight mb-3">
                  Human-Centric Culture
                </h3>

                <p className="font-sans text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  Great packaging doesn&apos;t start on a printing press; it starts with artisans and engineers who feel valued every time they step onto the floor.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs sm:text-sm font-sans text-slate-500">
                <span className="flex items-center gap-1.5 font-medium text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  Zero-Fatigue Safety Standards
                </span>
                <span className="font-mono text-xs font-bold text-slate-900">
                  5 Generations
                </span>
              </div>
            </motion.div>

          </div>

        </div>

        {/* Closing Guiding Philosophy Note */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center font-sans text-slate-500 mt-14 max-w-2xl mx-auto text-sm sm:text-base font-normal"
        >
          Together, these pillars form the unshakeable foundation that has sustained our reputation through 100+ years and across 5 generations of packaging craft.
        </motion.p>

      </div>
    </section>
  );
}
