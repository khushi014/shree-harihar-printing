"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  ShoppingBag,
  UtensilsCrossed,
  Pill,
} from "lucide-react";

interface IndustryItem {
  id: string;
  badge: string;
  category: string;
  icon: React.ElementType;
  titlePrefix: string;
  titleHighlight: string;
  desc: string[];
  deliverables: string[];
  tags: string[];
  image: string;
  imageAlt: string;
}

const industries: IndustryItem[] = [
  {
    id: "pharmaceutical-packaging",
    badge: "SECTOR 01 - ZERO-DEFECT COMPLIANCE",
    category: "Pharma & Healthcare",
    icon: Pill,
    titlePrefix: "Pharmaceutical",
    titleHighlight: "Packaging",
    desc: [
      "Pharma packaging leaves no room for error. A misaligned fold, an unreadable batch code, or an inconsistent finish isn't just a quality issue; it's a compliance risk.",
      "We print cartons, vial packaging, and injection boxes with the precision this industry demands, and our Bobst Visionfold line's Accubraille capability means we can handle Braille-compliant folding where it's required. From syrups and creams to injectables and tablets, we understand that \"close enough\" isn't a standard pharma brands can work with."
    ],
    deliverables: [
      "Precision carton printing with micro-dot registration",
      "Accurate batch/regulatory text & 2D Data Matrix reproduction",
      "Braille-capable high-speed folding & gluing (Accubraille)",
      "Vial and injection box packaging with tight dimensional tolerances",
      "Consistent, multi-stage inspection-checked output at commercial scale"
    ],
    tags: ["Accubraille Ready", "2D Data Matrix", "Tight Tolerances", "Vial Outers"],
    image: "/images/pharma_carton_braille.jpg",
    imageAlt: "Pharmaceutical folding boxboard cartons with cleanroom medicine packaging"
  },
  {
    id: "fmcg-packaging",
    badge: "SECTOR 02 - HIGH-SPEED SHELF IMPACT",
    category: "FMCG & Personal Care",
    icon: ShoppingBag,
    titlePrefix: "FMCG & Personal Care",
    titleHighlight: "Packaging",
    desc: [
      "In FMCG, packaging has about two seconds to earn attention on a shelf and it has to survive the journey from factory to retail without a scratch. We print cartons for soap, perfume, agarbatti, toothpaste, cosmetics, spices, and personal care products with the design-forward finish this category demands, backed by fast turnarounds so you can move at retail speed."
    ],
    deliverables: [
      "Eye-catching, design-ready cartons with vivid process color",
      "Multiple size variants and SKU families printed concurrently",
      "Hygienic packing standards for personal care & toiletries",
      "Quality paperboard sourcing (virgin SBS, FBB, and recycled duplex)",
      "Fast, dependable turnaround for rapid retail restocking"
    ],
    tags: ["Drip-Off UV", "Hot Foil Stamping", "Multi-SKU Batches", "High-Rub Resistant"],
    image: "/images/fmcg_cosmetic_cartons.jpg",
    imageAlt: "Luxury cosmetics and personal care retail cartons with premium varnish"
  },
  {
    id: "food-packaging",
    badge: "SECTOR 03 - FOOD SAFETY & SHELF VIBRANCY",
    category: "Food & Beverage",
    icon: UtensilsCrossed,
    titlePrefix: "Food, Beverage & Instant-Mix",
    titleHighlight: "Packaging",
    desc: [
      "Whether it's an instant-mix snack carton or a beverage box, food packaging has to look appetizing and stay food-safe. We produce vibrant, accurate color reproduction for food brands who need their packaging to sell the product before it's even opened."
    ],
    deliverables: [
      "Vivid, appetite-driving print quality with high-density color fidelity",
      "Food-safe production standards using low-migration inks & boards",
      "Reliable bulk-order turnaround synchronized with harvest & seasonal peaks"
    ],
    tags: ["Food-Grade Boards", "Low-Migration Inks", "Grease Resistant", "Aromatic Spices"],
    image: "/images/folding_cartons_specimen.jpg",
    imageAlt: "Vibrant food packaging cartons and regional instant food mix boxes"
  },
  {
    id: "nutra-packaging",
    badge: "SECTOR 04 - PRESTIGE & INTEGRITY",
    category: "Nutraceuticals",
    icon: ShieldCheck,
    titlePrefix: "Nutraceutical & Supplement",
    titleHighlight: "Packaging",
    desc: [
      "Supplement buyers judge trust by presentation. We produce sharp, clean labels and cartons for nutraceutical and supplement brands; the kind of finish that signals quality before a customer reads a single ingredient."
    ],
    deliverables: [
      "Premium label finishing with metallic foil accents & matte soft-touch",
      "Accurate, ultra-legible dosage and ingredient panel typography",
      "Custom bottle wraps and folding cartons built for shelf distinction"
    ],
    tags: ["Metallic Foiling", "Micro-Legibility", "Tamper Evident", "Soft-Touch Matte"],
    image: "/images/sticker_labels_roll.jpg",
    imageAlt: "Modern nutraceutical and health supplement cartons and specialized product packaging"
  }
];

export default function IndustryListSection() {
  const [activeSector, setActiveSector] = useState<string>(industries[0].id);

  // Scrollspy via IntersectionObserver
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 240; // Offset for header + sticky nav
      
      for (let i = industries.length - 1; i >= 0; i--) {
        const element = document.getElementById(industries[i].id);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSector(industries[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSector = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -110;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200 relative">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Responsive Two-Column Layout: Sticky Sidebar (30%) + Scrolling Cards (70%) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">

          {/* ─────────────────────────────────────────────────────────────
              LEFT COLUMN: STICKY SIDEBAR NAVIGATION (Scrollspy)
             ───────────────────────────────────────────────────────────── */}
          <aside className="lg:col-span-4 lg:sticky lg:top-32 self-start space-y-6">
            
            {/* Nav Card Container */}
            <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-7 shadow-sm">
              <div className="flex items-center gap-2 text-primary text-xs font-heading font-semibold uppercase tracking-widest mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                Industry Directory
              </div>
              <h2 className="font-heading font-light text-2xl text-slate-900 mb-1 tracking-tight">
                Sectors We <span className="font-bold text-primary">Serve</span>
              </h2>
              <p className="font-sans text-xs text-slate-500 mb-6">
                Click any sector to jump directly to technical specs and deliverables.
              </p>

              {/* Navigation Items */}
              <nav className="space-y-2">
                {industries.map((ind, idx) => {
                  const isActive = activeSector === ind.id;
                  const Icon = ind.icon;
                  return (
                    <button
                      key={ind.id}
                      onClick={() => scrollToSector(ind.id)}
                      className={`w-full text-left p-3.5 rounded-2xl transition-all duration-300 flex items-center justify-between group border ${
                        isActive
                          ? "bg-primary/5 border-primary/40 text-primary shadow-xs"
                          : "bg-slate-50/70 border-slate-200/70 text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div
                          className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                            isActive
                              ? "bg-primary text-white"
                              : "bg-white border border-slate-200 text-slate-500 group-hover:text-primary group-hover:border-primary/30"
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="min-w-0">
                          <span className="block text-[10px] font-mono font-semibold uppercase tracking-wider text-slate-400">
                            0{idx + 1} SECTOR
                          </span>
                          <span
                            className={`block text-sm font-heading font-medium truncate ${
                              isActive ? "text-primary font-bold" : "text-slate-800"
                            }`}
                          >
                            {ind.category}
                          </span>
                        </div>
                      </div>

                      <ArrowRight
                        className={`w-4 h-4 shrink-0 transition-transform ${
                          isActive
                            ? "text-primary translate-x-0.5"
                            : "text-slate-300 group-hover:text-slate-600 group-hover:translate-x-0.5"
                        }`}
                      />
                    </button>
                  );
                })}
              </nav>
            </div>


          </aside>

          {/* ─────────────────────────────────────────────────────────────
              RIGHT COLUMN: FULL-WIDTH ARCHITECTURAL SECTOR CARDS
             ───────────────────────────────────────────────────────────── */}
          <div className="lg:col-span-8 space-y-12 sm:space-y-16">
            {industries.map((ind, idx) => (
              <motion.article
                key={ind.id}
                id={ind.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-10 scroll-mt-32 hover:border-slate-300 hover:shadow-md transition-all duration-300 relative overflow-hidden"
              >


                {/* Main Heading */}
                <h3 className="font-heading font-light text-2xl sm:text-3xl lg:text-4xl text-slate-900 mb-6 leading-tight">
                  {ind.titlePrefix}{" "}
                  <span className="font-bold text-primary">{ind.titleHighlight}</span>
                </h3>

                {/* Hero Sector Photography in Rich Full Color */}
                <div className="relative h-[280px] sm:h-[380px] w-full rounded-2xl overflow-hidden shadow-md my-6 group border border-slate-100">
                  <img
                    src={ind.image}
                    alt={ind.imageAlt}
                    className="w-full h-full object-cover object-center filter saturate-105 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity duration-300" />
                </div>

                {/* Sector Narrative Description */}
                <div className="space-y-4 text-slate-600 font-sans text-base sm:text-lg leading-relaxed mb-8">
                  {ind.desc.map((p, pIdx) => (
                    <p key={pIdx}>{p}</p>
                  ))}
                </div>

                {/* What We Deliver Matrix */}
                <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border-l-4 border-primary shadow-xs mb-8">
                  <h4 className="font-heading text-xs sm:text-sm font-bold uppercase tracking-widest text-slate-900 mb-5 flex items-center gap-2">
                    <span>What We Deliver for {ind.category}:</span>
                  </h4>
                  <ul className="space-y-3.5">
                    {ind.deliverables.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="font-sans text-sm sm:text-[15px] text-slate-700 leading-snug">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

              </motion.article>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
