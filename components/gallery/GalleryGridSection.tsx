"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Maximize2, Sparkles } from "lucide-react";

interface GalleryItem {
  id: number;
  category: "Pharma" | "FMCG" | "Labels" | "Promotional" | "Factory";
  src: string;
  title: string;
  brand: string;
  alt: string;
}

const categories = ["All", "Pharma", "FMCG", "Labels", "Promotional", "Factory"] as const;

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    category: "Pharma",
    src: "/images/pharma_carton_braille.jpg",
    title: "Vial Cartons & Injection Boxes",
    brand: "Abbott Healthcare & Suiphar",
    alt: "Pharma carton printing – injection box by Shree Harihar Printing Works"
  },
  {
    id: 2,
    category: "Pharma",
    src: "/images/hero_quality_scan.jpg",
    title: "Syrup & Oral Suspension Cartons",
    brand: "HAEMUP Liquid & GACET lines",
    alt: "Pharma carton printing – syrup packaging by Shree Harihar Printing Works"
  },
  {
    id: 3,
    category: "FMCG",
    src: "/images/fmcg_cosmetic_cartons.jpg",
    title: "Cosmetics & Luxury Personal Care",
    brand: "Drip-Off UV & Gold Hot Foil",
    alt: "FMCG carton packaging – cosmetics by Shree Harihar Printing Works"
  },
  {
    id: 4,
    category: "FMCG",
    src: "/images/folding_cartons_specimen.jpg",
    title: "Instant-Mix Food & Snack Cartons",
    brand: "Honest Foods & Frylo Poochkas",
    alt: "FMCG carton packaging – instant-mix food by Shree Harihar Printing Works"
  },
  {
    id: 5,
    category: "Labels",
    src: "/images/sticker_labels_roll.jpg",
    title: "Bottle & Product Container Labels",
    brand: "Amul Kool Beverage Lines",
    alt: "Sticker label printing – bottle label by Shree Harihar Printing Works"
  },
  {
    id: 6,
    category: "Labels",
    src: "/images/hero_brand_print.jpg",
    title: "Nutraceutical & Supplement Labels",
    brand: "Gold Standard Whey & Nutrition",
    alt: "Sticker label printing – supplement label by Shree Harihar Printing Works"
  },
  {
    id: 7,
    category: "Promotional",
    src: "/images/commercial_promotional_print.jpg",
    title: "Brand Brochures & Literature",
    brand: "Healthcare Corporate Literature",
    alt: "Promotional print material – brochure by Shree Harihar Printing Works"
  },
  {
    id: 8,
    category: "Promotional",
    src: "/images/commercial_promotional_print.jpg",
    title: "Retail Standees & Hanging Danglers",
    brand: "Amul Retail POP Formats",
    alt: "Promotional print material – poster by Shree Harihar Printing Works"
  },
  {
    id: 9,
    category: "Factory",
    src: "/images/modern_offset_press.jpg",
    title: "Heidelberg Multicolor Press Hall",
    brand: "Ahmedabad Press Battery",
    alt: "Shree Harihar Printing Works production facility-Heidelberg press"
  },
  {
    id: 10,
    category: "Factory",
    src: "/images/hero_quality_scan.jpg",
    title: "Automated Optical Inspection Line",
    brand: "AutoPrint 250mm High-Speed Scan",
    alt: "Shree Harihar Printing Works production facility-carton inspection"
  }
];

export default function GalleryGridSection() {
  const [activeFilter, setActiveFilter] = useState<typeof categories[number]>("All");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filteredItems = activeFilter === "All"
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter);

  // Close modal on Escape key
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") {
      setSelectedItem(null);
    }
  }, []);

  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedItem, handleKeyDown]);

  // Navigate next/prev in lightbox
  const navigateLightbox = (direction: "next" | "prev", e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedItem) return;
    const currentIndex = filteredItems.findIndex(i => i.id === selectedItem.id);
    if (direction === "next") {
      const nextIndex = (currentIndex + 1) % filteredItems.length;
      setSelectedItem(filteredItems[nextIndex]);
    } else {
      const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
      setSelectedItem(filteredItems[prevIndex]);
    }
  };

  return (
    <section className="bg-white relative pb-20 sm:pb-28">

      {/* ─────────────────────────────────────────────────────────────────
          STICKY CATEGORY FILTER BAR (Follows user as gallery scales)
         ───────────────────────────────────────────────────────────────── */}
      <div className="sticky top-16 sm:top-20 z-30 bg-white/95 backdrop-blur-md py-4 sm:py-5 border-b border-slate-200/80 shadow-xs">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`font-heading text-xs sm:text-sm font-semibold uppercase tracking-wider px-4 sm:px-5 py-2 rounded-full transition-all duration-300 ${
                    activeFilter === cat
                      ? "bg-slate-900 text-white shadow-sm"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Item Counter */}
            <div className="hidden sm:flex items-center gap-1.5 text-xs font-mono text-slate-500">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span>{filteredItems.length} {filteredItems.length === 1 ? "Specimen" : "Specimens"}</span>
            </div>

          </div>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────────
          PURE IMAGE MASONRY / GRID (Clean, Visual, Pinterest-Style)
         ───────────────────────────────────────────────────────────────── */}
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14">
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.3 }}
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className="group relative overflow-hidden bg-slate-100 aspect-[4/3] rounded-2xl sm:rounded-3xl cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200/80 hover:border-slate-300"
              >
                {/* High-Resolution Photo in Rich Saturated Color */}
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="w-full h-full object-cover filter saturate-105 group-hover:scale-105 transition-transform duration-700"
                />

                {/* Subtle Hover Scrim with Minimalist Tagging */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5 sm:p-6">
                  {/* Top Pill: Category */}
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[11px] font-mono tracking-wider uppercase border border-white/15">
                      {item.category}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Bottom Minimalist Info */}
                  <div>
                    <span className="block text-[11px] font-mono text-emerald-400 uppercase tracking-wider font-medium mb-1">
                      ● {item.brand}
                    </span>
                    <h3 className="font-heading font-bold text-base sm:text-lg text-white leading-snug">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* ─────────────────────────────────────────────────────────────────
          SIMPLIFIED FULL-SCREEN LIGHTBOX (Image-Only Cinematic View)
         ───────────────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setSelectedItem(null)}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedItem(null)}
              aria-label="Close Lightbox"
              className="absolute top-5 right-5 z-40 w-12 h-12 rounded-full bg-white/10 hover:bg-primary border border-white/20 hover:border-primary text-white flex items-center justify-center transition-all duration-200"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Previous Arrow */}
            <button
              onClick={(e) => navigateLightbox("prev", e)}
              aria-label="Previous image"
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-40 w-12 h-12 rounded-full bg-white/10 hover:bg-primary border border-white/20 hover:border-primary text-white flex items-center justify-center transition-all duration-200"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Arrow */}
            <button
              onClick={(e) => navigateLightbox("next", e)}
              aria-label="Next image"
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-40 w-12 h-12 rounded-full bg-white/10 hover:bg-primary border border-white/20 hover:border-primary text-white flex items-center justify-center transition-all duration-200"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Centered High-Resolution Image Container */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl max-h-[85vh] flex flex-col items-center justify-center"
            >
              <img
                src={selectedItem.src}
                alt={selectedItem.alt}
                className="max-w-full max-h-[75vh] object-contain rounded-2xl shadow-2xl filter saturate-105"
              />

              {/* Minimalist Floating Caption Bar */}
              <div className="mt-4 px-5 py-2.5 rounded-full bg-slate-900/90 border border-white/15 backdrop-blur-md text-center max-w-xl">
                <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-heading font-medium text-white">
                  <span>{selectedItem.title}</span>
                  <span className="text-slate-500">•</span>
                  <span className="text-primary-light font-mono text-xs uppercase">{selectedItem.category}</span>
                  <span className="text-slate-500 hidden sm:inline">•</span>
                  <span className="text-emerald-400 font-mono text-xs hidden sm:inline">{selectedItem.brand}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
