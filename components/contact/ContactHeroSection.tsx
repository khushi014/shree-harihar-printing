"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ContactHeroSection() {
  return (
    <section className="bg-slate-900 border-b border-primary/20 text-white py-16 lg:py-24 relative overflow-hidden">

      <div className="absolute inset-0 z-0 bg-[url('/images/img10.png')] bg-cover bg-center opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent"></div>

      <div className="max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center w-full">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-heading font-light text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6"
        >
          Let's Talk About Your <br className="hidden sm:block" />
          <span className="font-bold text-primary mt-2">
            Next Print Run.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-sans text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed"
        >
          Whether you need a quote, a question answered, or a facility visit arranged; our team is ready to help.
        </motion.p>
      </div>
    </section>
  );
}
