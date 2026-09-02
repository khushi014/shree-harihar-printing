"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ServicesHeroSection() {
  return (
    <section className="bg-slate-950 text-white py-24 md:py-32 relative overflow-hidden flex items-center min-h-[50vh]">
      
      {/* Background Image placeholder */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1598425237654-4c053606fbf6?auto=format&fit=crop&q=80&w=1600" 
          alt="Offset printing press in action" 
          className="absolute inset-0 w-full h-full object-cover opacity-20 filter grayscale" 
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-900/40"></div>
      </div>

      <div className="max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center w-full">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-heading font-light text-4xl sm:text-5xl lg:text-7xl leading-tight mb-8"
        >
          What We Print — <br className="hidden lg:block" />
          <span className="font-bold relative inline-block text-primary mt-2">
            And How We Do It Right.
          </span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-sans text-base sm:text-lg lg:text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed"
        >
          Every service we offer runs through the same in-house pipeline: prepress, printing, coating, punching, and finishing; all under our control, all checked before it ships.
        </motion.p>
      </div>
    </section>
  );
}
