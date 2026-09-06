"use client";

import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    name: "Prepress",
    desc: "Flawless plate-making and structural setup ensuring every color registers perfectly before a single sheet is printed."
  },
  {
    num: "02",
    name: "Printing",
    desc: "High-speed, multi-color offset production delivering sharp, consistent hues across short runs and bulk orders alike."
  },
  {
    num: "03",
    name: "Coating & Finishing",
    desc: "Inline UV, Aqua coating, and drip-off texturing applied for scuff-resistance, durability, and premium retail shine."
  },
  {
    num: "04",
    name: "Punching & Stripping",
    desc: "Precision die-cutting and automated blanking that guarantees perfect edges and exact structural dimensions."
  },
  {
    num: "05",
    name: "Folding & Gluing",
    desc: "High-speed automated lock-bottom folding, fully capable of integrating compliance-ready Braille embossing for pharma."
  },
  {
    num: "06",
    name: "Inspection",
    desc: "Strict optical vision sorting that catches microscopic deviations before your packaging ever leaves our floor."
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
            Our Production Process - <span className="font-bold text-primary">Start to Finish</span>
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
              className="bg-slate-900/50 border border-slate-800 p-8 rounded-xl transform hover:-translate-y-2 hover:border-primary/50 transition-all duration-300 relative group"
            >
              <div className="text-5xl font-heading font-black text-slate-800 absolute top-4 right-4 pointer-events-none group-hover:text-slate-700 transition-colors">
                {step.num}
              </div>
              <h3 className="font-heading font-bold text-xl text-white mb-3 relative z-10">{step.name}</h3>
              <p className="font-sans text-slate-400 leading-relaxed text-sm relative z-10 font-normal">{step.desc}</p>
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
