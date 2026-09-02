"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AboutStorySection() {
  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-[70rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="relative h-[400px] sm:h-[500px] bg-slate-200 w-full rounded-sm overflow-hidden"
          >
            {/* Using an Unsplash placeholder of an industrial printing setup / paper layers */}
            <img 
              src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&q=80&w=1000" 
              alt="Vintage printing press history" 
              className="absolute inset-0 w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700" 
            />
            <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
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
              Our <span className="font-bold relative inline-block">Story<span className="absolute bottom-1 left-0 w-full h-[3px] bg-primary/30" /></span>
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
