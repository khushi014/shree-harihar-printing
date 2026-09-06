"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AboutStorySection() {
  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-[70rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* "Then & Now" Overlapping Collage */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-[440px] sm:h-[500px] w-full"
          >
            {/* Background Image: Vintage 1920s Letterpress Heritage */}
            <div className="absolute top-0 left-0 w-[82%] h-[72%] sm:h-[75%] rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-slate-900 group">
              <img 
                src="/images/vintage_letterpress_1921.jpg" 
                alt="Vintage 1920s letterpress craft at Shree Harihar" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-slate-950/25 pointer-events-none" />
              <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-black/75 backdrop-blur-xs text-white text-[10px] sm:text-xs font-heading font-semibold uppercase tracking-wider">
                Then • 1921 Letterpress
              </div>
            </div>

            {/* Foreground Overlapping Image: Modern High-Speed Facility */}
            <div className="absolute bottom-2 right-0 sm:right-2 w-[68%] sm:w-[65%] h-[58%] sm:h-[60%] rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 group">
              <img 
                src="/images/modern_offset_press.jpg" 
                alt="Modern Heidelberg offset printing and carton conversion at Shree Harihar plant" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between text-white">
                <span className="px-3 py-1 rounded-full bg-primary/90 backdrop-blur-xs text-[10px] sm:text-xs font-heading font-bold uppercase tracking-wider shadow-sm">
                  Now • Automated Facility
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="font-heading text-xs font-bold uppercase tracking-[0.25em] text-primary block mb-4">
              Our Legacy
            </span>
            <h2 className="font-heading font-light text-3xl sm:text-4xl lg:text-5xl text-slate-900 mb-8 leading-tight">
              Our <span className="font-bold text-primary">Story</span>
            </h2>
            
            <div className="prose prose-lg prose-slate font-sans leading-relaxed text-slate-600">
              <p className="mb-6">
                Shree Harihar Printing Works LLP began as a small printing press and has grown into a full-scale carton, label, and packaging manufacturing operation without ever losing its family-business roots. Today, the same values that guided our founders guide the fifth generation now running the company: quality that isn't negotiable, promises that get kept, and a workplace where people actually want to show up.
              </p>
              <p>
                We're proud that some of our client relationships have outlasted entire product categories. That kind of loyalty isn't won with pricing alone; it's earned one on-time, defect-free delivery at a time.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
