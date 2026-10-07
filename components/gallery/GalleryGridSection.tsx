"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Maximize2, Sparkles } from "lucide-react";

interface GalleryItem {
  id: number;
  category: "Print Work" | "Factory";
  src: string;
  title: string;
  brand: string;
  alt: string;
}

const categories = ["All", "Print Work", "Factory"] as const;

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    category: "Print Work",
    src: "/images/pharma_carton_braille.jpg",
    title: "Vial Cartons & Injection Boxes",
    brand: "Abbott Healthcare & Suiphar",
    alt: "Pharma carton printing – injection box by Shree Harihar Printing Works"
  },
  {
    id: 2,
    category: "Print Work",
    src: "/images/img4.png",
    title: "Syrup & Oral Suspension Cartons",
    brand: "HAEMUP Liquid & GACET lines",
    alt: "Pharma carton printing – syrup packaging by Shree Harihar Printing Works"
  },
  {
    id: 3,
    category: "Print Work",
    src: "/images/fmcg_cosmetic_cartons.jpg",
    title: "Cosmetics & Luxury Personal Care",
    brand: "Drip-Off UV & Gold Hot Foil",
    alt: "FMCG carton packaging – cosmetics by Shree Harihar Printing Works"
  },
  {
    id: 4,
    category: "Print Work",
    src: "/images/folding_cartons_specimen.jpg",
    title: "Instant-Mix Food & Snack Cartons",
    brand: "Honest Foods & Frylo Poochkas",
    alt: "FMCG carton packaging – instant-mix food by Shree Harihar Printing Works"
  },
  {
    id: 5,
    category: "Print Work",
    src: "/images/sticker_labels_roll.jpg",
    title: "Bottle & Product Container Labels",
    brand: "Amul Kool Beverage Lines",
    alt: "Sticker label printing – bottle label by Shree Harihar Printing Works"
  },
  {
    id: 6,
    category: "Print Work",
    src: "/images/img11.png",
    title: "Nutraceutical & Supplement Labels",
    brand: "Gold Standard Whey & Nutrition",
    alt: "Sticker label printing – supplement label by Shree Harihar Printing Works"
  },
  {
    id: 7,
    category: "Print Work",
    src: "/images/commercial_promotional_print.jpg",
    title: "Brand Brochures & Literature",
    brand: "Healthcare Corporate Literature",
    alt: "Promotional print material – brochure by Shree Harihar Printing Works"
  },
  {
    id: 8,
    category: "Print Work",
    src: "/images/img12.png",
    title: "Retail Standees & Hanging Danglers",
    brand: "Amul Retail POP Formats",
    alt: "Promotional print material – poster by Shree Harihar Printing Works"
  },
  {
    id: 9,
    category: "Factory",
    src: "/images/img2.png",
    title: "Heidelberg Multicolor Press Hall",
    brand: "Ahmedabad Press Battery",
    alt: "Shree Harihar Printing Works production facility-Heidelberg press"
  },
  {
    id: 10,
    category: "Factory",
    src: "/images/img5.png",
    title: "Automated Optical Inspection Line",
    brand: "AutoPrint 250mm High-Speed Scan",
    alt: "Shree Harihar Printing Works production facility-carton inspection"
  },
  {
    id: 11,
    category: "Factory",
    src: "/images/img3.png",
    title: "BOBST Die-Cutting & Blanking Line",
    brand: "BOBST VisionCut Production Floor",
    alt: "Shree Harihar Printing Works production facility-BOBST die cutter"
  },
  {
    id: 12,
    category: "Factory",
    src: "/images/Heidelberg_Two_Colour.png",
    title: "Heidelberg Two Colour Offset",
    brand: "Printing Machine - View 1",
    alt: "Heidelberg Two Colour printing machine"
  },
  {
    id: 13,
    category: "Factory",
    src: "/images/Heidelberg_Four_Colour.png",
    title: "Heidelberg Four Colour",
    brand: "With Online Coater - View 1",
    alt: "Heidelberg Four Colour offset printing machine with online Coater"
  },
  {
    id: 14,
    category: "Factory",
    src: "/images/Heidelberg_Six_Colour.png",
    title: "Heidelberg Six Colour",
    brand: "With Online Coater - View 1",
    alt: "Heidelberg Six Colour offset printing machine with online Coater"
  },
  {
    id: 15,
    category: "Factory",
    src: "/images/Maxima_Punching.png",
    title: "Maxima Punching Machine",
    brand: "Die Cutting System - View 1",
    alt: "Maxima Punching Machine packaging"
  },
  {
    id: 16,
    category: "Factory",
    src: "/images/checkmate_Carton_Inspection_Machine.png",
    title: "Checkmate Carton Inspection",
    brand: "High Speed Machine - View 1",
    alt: "Checkmate Carton Inspection Machine high speed"
  },
  {
    id: 17,
    category: "Factory",
    src: "/images/bobst.png",
    title: "BOBST Expertfold",
    brand: "With Accubraille - View 1",
    alt: "BOBST Expertfold with Accubraille folding carton machine"
  },
  {
    id: 18,
    category: "Factory",
    src: "/images/Flexo_Label_Printing_Machine.png",
    title: "Flexo Label Printing Machine",
    brand: "Roll to Roll System - View 1",
    alt: "Flexo Label Printing Machine roll to roll"
  },
  {
    id: 19,
    category: "Factory",
    src: "/images/Flexo_Label_Printing_Machine2.png",
    title: "Flexo Label Printing Machine",
    brand: "Roll to Roll System - View 2",
    alt: "Flexo Label Printing Machine roll to roll alternate"
  },
  {
    id: 20,
    category: "Print Work",
    src: "/images/sample1.png",
    title: "Print Sample — I",
    brand: "Shree Harihar Quality Specimen",
    alt: "Print sample 1 by Shree Harihar Printing Works"
  },
  {
    id: 21,
    category: "Print Work",
    src: "/images/sample2.png",
    title: "Print Sample — II",
    brand: "Shree Harihar Quality Specimen",
    alt: "Print sample 2 by Shree Harihar Printing Works"
  },
  {
    id: 22,
    category: "Print Work",
    src: "/images/sample3.png",
    title: "Print Sample — III",
    brand: "Shree Harihar Quality Specimen",
    alt: "Print sample 3 by Shree Harihar Printing Works"
  },
  {
    id: 23,
    category: "Print Work",
    src: "/images/sample4.png",
    title: "Print Sample — IV",
    brand: "Shree Harihar Quality Specimen",
    alt: "Print sample 4 by Shree Harihar Printing Works"
  },
  {
    id: 24,
    category: "Print Work",
    src: "/images/sample5.png",
    title: "Print Sample — V",
    brand: "Shree Harihar Quality Specimen",
    alt: "Print sample 5 by Shree Harihar Printing Works"
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
      <div className="sticky top-[53px] sm:top-[57px] z-30 bg-white/95 backdrop-blur-md py-4 sm:py-5 border-b border-slate-200/80 shadow-xs">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`font-heading text-xs sm:text-sm font-semibold uppercase tracking-wider px-4 sm:px-5 py-2 rounded-full transition-all duration-300 ${activeFilter === cat
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <div
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

              {/* Expand Icon on Hover */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-8 h-8 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
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
