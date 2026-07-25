"use client";

import React from "react";
import { Shield, CheckCircle, Award } from "lucide-react";
import { motion } from "framer-motion";

const items = [
  { icon: Shield,       label: "ISO 9001:2015 CERTIFIED" },
  { icon: CheckCircle,  label: "STRICT GMP COMPLIANCE" },
  { icon: Award,        label: "BRANDS TRUST FOR PACKAGING" },
];

export default function QuickTrustBar() {
  return (
    <section className="bg-white border-b border-slate-200 py-6 relative z-10 shadow-sm overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="font-heading text-xs font-bold text-slate-400 uppercase tracking-widest text-center md:text-left"
          >
            CERTIFICATIONS &amp; STANDARDS:
          </motion.span>

          <div className="flex gap-6 md:gap-10 flex-wrap justify-center">
            {items.map((item, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.1, ease: "easeOut" }}
                className="font-heading text-sm font-bold text-slate-700 flex items-center gap-2 hover:text-black transition-colors"
              >
                <item.icon className="h-4 w-4 text-primary" />
                {item.label}
              </motion.span>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
