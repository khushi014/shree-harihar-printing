"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Building2, ArrowRight, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";
import { CLIENTS_DATA, CLIENT_CATEGORIES } from "../../data/clientsData";
import ClientLogoCard from "../clients/ClientLogoCard";

export default function AboutClientsGridSection() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredClients = activeCategory === "All"
    ? CLIENTS_DATA
    : CLIENTS_DATA.filter((c) => c.category === activeCategory);

  return (
    <section id="clients" className="py-20 lg:py-28 bg-white border-b border-slate-200/80 scroll-mt-24">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mx-auto w-full max-w-4xl gap-6 mb-12 lg:mb-16">
          <h2 className="font-heading font-light text-3xl sm:text-4xl lg:text-5xl leading-tight text-slate-900">
            Our Valued <span className="font-bold text-primary">Clients &amp; Partners</span>
          </h2>

          <p className="font-sans text-[16px] sm:text-[18px] text-slate-600 leading-relaxed font-medium max-w-2xl">
            Over a century of enduring partnerships with India&apos;s most demanding enterprises. From regulatory audits to high-speed automated packaging lines, here are some of the brands that trust us.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-12">
          {CLIENT_CATEGORIES.map((cat) => {
            const count = cat === "All"
              ? CLIENTS_DATA.length
              : CLIENTS_DATA.filter((c) => c.category === cat).length;
            const isActive = activeCategory === cat;

            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`cursor-pointer px-4 py-2 rounded-full text-xs sm:text-sm font-heading font-bold uppercase tracking-wider transition-all duration-200 border ${isActive
                    ? "bg-primary text-white border-primary shadow-md shadow-primary/20 scale-[1.02]"
                    : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100 hover:text-slate-900"
                  }`}
              >
                {cat} <span className={`ml-1 text-[11px] ${isActive ? "text-white/80" : "text-slate-400"}`}>({count})</span>
              </button>
            );
          })}
        </div>

        {/* Client Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredClients.map((client) => (
              <motion.div
                key={client.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
              >
                <ClientLogoCard client={client} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
