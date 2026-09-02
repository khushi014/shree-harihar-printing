"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Factory } from "lucide-react";
import Link from "next/link";

export default function FacilityVisitSection() {
  return (
    <section className="py-20 lg:py-24 bg-slate-100 border-y border-slate-200">
      <div className="max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-slate-900 text-white rounded-sm overflow-hidden flex flex-col md:flex-row items-center shadow-lg relative">
          
          <div className="absolute inset-0 bg-primary/5 pointer-events-none" />

          {/* Text block */}
          <div className="p-8 md:p-12 lg:p-16 w-full md:w-3/5 lg:w-2/3 z-10 relative">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-heading font-light text-3xl sm:text-4xl text-white mb-4"
            >
              Prefer to See the <span className="font-bold text-primary">Factory First?</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-sans text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl"
            >
              We're happy to host a facility visit for serious enquiries; see our production line in action before you commit.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <a
                href="mailto:info@hariharprintpack.com?subject=Facility%20Visit%20Request"
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-heading text-sm font-bold tracking-widest uppercase px-8 py-4 transition-colors shadow-md hover:-translate-y-1 transform duration-300"
              >
                <Factory className="w-5 h-5" /> Book a Facility Visit <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </motion.div>
          </div>

          {/* Visual block */}
          <div className="w-full md:w-2/5 lg:w-1/3 h-64 md:h-full relative overflow-hidden bg-slate-800">
             <img 
               src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=800"
               alt="Shree Harihar printing facility tour"
               className="absolute inset-0 w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700 opacity-60 md:opacity-80"
             />
             <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-transparent hidden md:block"></div>
             <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent block md:hidden"></div>
          </div>

        </div>

      </div>
    </section>
  );
}
