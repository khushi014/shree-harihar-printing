"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AboutHeroSection() {
  return (
    <section className="bg-slate-950 text-white py-24 md:py-32 relative overflow-hidden flex items-center min-h-[60vh]">
      
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        >
          <source src="/infrastructure.mp4" type="video/mp4" />
        </video>
        {/* Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-900/40"></div>
      </div>

      <div className="max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center w-full">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-heading font-light text-4xl sm:text-5xl lg:text-7xl leading-tight mb-8"
        >
          Five Generations. <br className="hidden sm:block" />
          <span className="font-bold relative inline-block text-primary">
            One Promise.
          </span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-sans text-base sm:text-lg lg:text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed"
        >
          In 1921, our founders started this business on a simple belief: if you're going to put your name on something, make it right. A hundred years, five generations, and thousands of print runs later, that belief hasn't moved an inch, even as everything around it has. <br/><br/>
          We've watched the packaging industry transform: new materials, new machines, and new compliance demands, and we've grown with every shift without ever losing the thing that got us here: a genuine, stubborn commitment to quality and to the people who trust us with their brand.
        </motion.p>
      </div>
    </section>
  );
}
