"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["All", "Pharma", "FMCG", "Labels", "Promotional", "Factory"];

const galleryItems = [
  {
    id: 1,
    category: "Pharma",
    src: "https://images.unsplash.com/photo-1584308666744-24d5e4a5bf4d?auto=format&fit=crop&q=80&w=800",
    title: "Vial Cartons & Injection Boxes",
    desc: "Precision-printed for regulated products.",
    alt: "Pharma carton printing – injection box by Shree Harihar Printing Works"
  },
  {
    id: 2,
    category: "Pharma",
    src: "https://images.unsplash.com/photo-1628771065518-0d82f1938462?auto=format&fit=crop&q=80&w=800",
    title: "Syrup & Cream Packaging",
    desc: "High-compliance printing with inspection.",
    alt: "Pharma carton printing – syrup packaging by Shree Harihar Printing Works"
  },
  {
    id: 3,
    category: "FMCG",
    src: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=800",
    title: "Cosmetics & Personal Care",
    desc: "Designed to stand out on the shelf.",
    alt: "FMCG carton packaging – cosmetics by Shree Harihar Printing Works"
  },
  {
    id: 4,
    category: "FMCG",
    src: "https://images.unsplash.com/photo-1606859191214-25806e9e2463?auto=format&fit=crop&q=80&w=800",
    title: "Food & Instant-Mix Food Cartons",
    desc: "Appetizing colors and food-safe standards.",
    alt: "FMCG carton packaging – instant-mix food by Shree Harihar Printing Works"
  },
  {
    id: 5,
    category: "Labels",
    src: "https://images.unsplash.com/photo-1548345680-f5475ea90f5c?auto=format&fit=crop&q=80&w=800",
    title: "Bottle & Product Labels",
    desc: "Finished for shelf-ready presentation.",
    alt: "Sticker label printing – bottle label by Shree Harihar Printing Works"
  },
  {
    id: 6,
    category: "Labels",
    src: "https://images.unsplash.com/photo-1594824419958-8120c909e7c5?auto=format&fit=crop&q=80&w=800",
    title: "Supplement & Nutraceutical Labels",
    desc: "Sharp, clean finishes that signal quality.",
    alt: "Sticker label printing – supplement label by Shree Harihar Printing Works"
  },
  {
    id: 7,
    category: "Promotional",
    src: "https://images.unsplash.com/photo-1562564055-71e051d33c19?auto=format&fit=crop&q=80&w=800",
    title: "Brochures & Catalogues",
    desc: "Creative execution for consumer brands.",
    alt: "Promotional print material – brochure by Shree Harihar Printing Works"
  },
  {
    id: 8,
    category: "Promotional",
    src: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&q=80&w=800",
    title: "Posters & Calendars",
    desc: "Consistent print quality across formats.",
    alt: "Promotional print material – poster by Shree Harihar Printing Works"
  },
  {
    id: 9,
    category: "Factory",
    src: "https://images.unsplash.com/photo-1616423640778-28d1b53229bd?auto=format&fit=crop&q=80&w=800",
    title: "Our Production Floor",
    desc: "Heidelberg presses in action.",
    alt: "Shree Harihar Printing Works production facility—Heidelberg press"
  },
  {
    id: 10,
    category: "Factory",
    src: "https://images.unsplash.com/photo-1598425237654-4c053606fbf6?auto=format&fit=crop&q=80&w=800",
    title: "Automated Carton Inspection",
    desc: "Quality control before anything ships.",
    alt: "Shree Harihar Printing Works production facility—carton inspection"
  }
];

export default function GalleryGridSection() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredItems = activeFilter === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SEO Hidden Headings */}
        <div className="sr-only">
          <h2>Pharmaceutical Packaging</h2>
          <p>Vial cartons, injection boxes, syrup, and cream packaging - precision-printed for regulated products.</p>
          <h2>FMCG & Personal Care Cartons</h2>
          <p>Soap, agarbatti, cosmetics, and instant-mix food cartons are designed to stand out on the shelf.</p>
          <h2>Sticker & Label Work</h2>
          <p>Bottle labels, supplement labels, and product stickers finished for shelf-ready presentation.</p>
          <h2>Promotional Materials</h2>
          <p>Brochures, standees, danglers, and calendars produced for leading consumer brands.</p>
          <h2>Inside Our Factory</h2>
          <p>Take a look at our production floor - Heidelberg presses, Bobst folder-gluers, and automated carton inspection in action.</p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-12 sm:mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`font-heading text-xs sm:text-sm font-bold uppercase tracking-widest px-6 py-3 transition-all duration-300 ${
                activeFilter === cat 
                  ? "bg-slate-900 text-white shadow-md"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Masonry / Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={item.id}
                className="group relative overflow-hidden bg-slate-100 aspect-square sm:aspect-[4/3] rounded-sm cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-300"
              >
                <img 
                  src={item.src} 
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Information Overlay */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end h-1/2">
                  <span className="text-primary font-heading text-[10px] font-bold uppercase tracking-widest mb-1 block">
                    {item.category}
                  </span>
                  <h3 className="text-white font-heading font-bold text-lg mb-1 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-slate-300 font-sans text-sm line-clamp-2">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
