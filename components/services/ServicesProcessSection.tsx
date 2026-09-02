"use client";

import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    name: "Prepress",
    desc: "Accurate plate-making (Protek) to set every job up right from the start"
  },
  {
    num: "02",
    name: "Printing",
    desc: "Heidelberg offset presses (2, 4, and 6-colour + coater) for sharp, consistent output"
  },
  {
    num: "03",
    name: "Coating & Finishing",
    desc: "Aqua/UV coating and drip-off finishing for durability and shine"
  },
  {
    num: "04",
    name: "Punching & Stripping",
    desc: "Manual and fully automatic punching, precision blanking"
  },
  {
    num: "05",
    name: "Folding & Gluing",
    desc: "Including Bobst Visionfold with Accubraille for compliance-sensitive packaging"
  },
  {
    num: "06",
    name: "Inspection",
    desc: "Automated carton inspection before anything leaves our factory"
  }
];

export default function ServicesProcessSection() {
  return (
    <section className="py-20 lg:py-28 bg-slate-950 text-white relative border-t border-slate-800">
      <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
      
      <div className="max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading font-light text-3xl sm:text-4xl lg:text-5xl text-white mb-6"
          >
            Our Production Process — <span className="font-bold text-primary">Start to Finish</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-16">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1 }}
              className="bg-slate-900/50 border border-slate-800 p-8 transform hover:-translate-y-2 hover:border-primary/50 transition-all duration-300 relative group"
            >
              <div className="text-5xl font-heading font-black text-slate-800 absolute top-4 right-4 pointer-events-none group-hover:text-slate-700 transition-colors">
                {step.num}
              </div>
              <h3 className="font-heading font-bold text-xl text-white mb-3 relative z-10">{step.name}</h3>
              <p className="font-sans text-slate-400 leading-relaxed text-sm relative z-10">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <p className="font-sans text-lg lg:text-xl text-slate-300 font-light border-l-4 border-primary pl-6 text-left inline-block">
            Because every stage happens in-house, we catch issues before they become your problem.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
