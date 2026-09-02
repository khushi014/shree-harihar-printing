"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const differentiators = [
  {
    title: "Five generations, one standard",
    desc: "Founded in 1921, still family-led, still quality-obsessed",
  },
  {
    title: "Full in-house production",
    desc: "prepress to finishing, under one roof, under our control",
  },
  {
    title: "On-time delivery, without exception",
    desc: "from a single sticker run to a full carton order",
  },
  {
    title: "Multi-industry expertise",
    desc: "pharma-grade precision, FMCG-grade creativity",
  },
  {
    title: "Compliance-ready capability",
    desc: "including Braille-embossed, regulation-sensitive cartons",
  },
];

export default function WhatSetsUsApartSection() {
  return (
    <section className="py-20 lg:py-28 bg-white border-t border-slate-200" id="what-sets-us-apart">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading font-light text-3xl sm:text-4xl lg:text-5xl text-slate-900"
          >
            What Sets <span className="font-normal relative inline-block">Us Apart<span className="absolute bottom-1 left-0 w-full h-1 bg-primary" /></span>
          </motion.h2>
        </div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {differentiators.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-start gap-4 p-4 sm:p-6 bg-slate-50 border-l-4 border-primary hover:bg-slate-100 transition-colors"
            >
              <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
              <div>
                <h3 className="font-heading font-bold text-lg text-slate-900 mb-1">
                  {item.title}
                </h3>
                <p className="font-sans text-[15px] sm:text-base text-slate-600">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
