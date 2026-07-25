"use client";

import React, { useState } from "react";
import { ChevronRight, ArrowRight, Layers, Printer, Sparkles, Cpu, FileText } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay },
  }),
};

const capabilities = [
  {
    title: "Prepress & Design Studio",
    icon: Layers,
    description: "State-of-the-art CTP (Computer-to-Plate) technology, structural design prototyping, and high-precision color management calibrating matching systems for zero-defect reproduction.",
    details: [
      "Advanced CAD structural packaging design software",
      "Esko prepress workflow solutions",
      "Kodak & Heidelberg CTP systems",
      "Digital sample plotting & 3D virtual pack proofs"
    ]
  },
  {
    title: "Offset Pressroom (Heidelberg Solutions)",
    icon: Printer,
    description: "Equipped with multi-color Heidelberg sheetfed offset presses featuring inline coater systems, high-speed output, and spectrophotometric color controls to achieve perfect color fidelity.",
    details: [
      "Heidelberg Speedmaster multi-color presses with coater",
      "Prinect pressroom integration for digital ink presetting",
      "UV / Conventional hybrid printing systems",
      "High-density spectrophotometer closed-loop caliber control"
    ]
  },
  {
    title: "Flexographic Label Printing",
    icon: Sparkles,
    description: "Multi-station high precision flexographic presses designed for roll-fed premium pressure-sensitive labels, varnishes, foil decoration, and custom industrial labeling solutions.",
    details: [
      "Roll-to-roll high-speed clean-room flexo lines",
      "Inline die-cutting, cold foiling & lamination",
      "Narrow-web labels for pharma & cosmetics",
      "UV inks with strict adhesive and chemical resistance"
    ]
  },
  {
    title: "Precision Post-Press & Finishing",
    icon: Cpu,
    description: "Massive automatic die-cutters, hot foil stampers, offline drip-off UV coaters, and high-speed folder gluers with vision scanning inspection arrays to deliver structurally perfect shapes.",
    details: [
      "Bobst Automatic Die-Cutters & Punching systems",
      "High & medium speed automatic folder gluers with cold/hot glue nozzles",
      "Online/offline UV varnish & drip-off embossing",
      "Auto-blanking & waste separation facilities"
    ]
  },
  {
    title: "Security & Insert Printing",
    icon: FileText,
    description: "Production of specialized pharmaceutical instruction inserts and outserts on ultra-thin, low-gsm papers, folded with specialized precision miniature pharmaceutical folding systems.",
    details: [
      "High-precision miniature cross folding machines",
      "Low-gsm paper handling down to 40gsm",
      "Secured clean printing env to prevent cross-contamination",
      "Barcode/matrix vision inspect verification"
    ]
  }
];

export default function CapabilitiesSection({ setQuoteModalOpen }: { setQuoteModalOpen: (open: boolean) => void }) {
  const [activeCapability, setActiveCapability] = useState(0);

  return (
    <section id="capabilities" className="py-20 lg:py-28 bg-slate-950 text-white border-t border-slate-900 relative overflow-hidden">
      {/* Tech style blueprint grids */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:2rem_2rem] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Sidebar with Titles */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <motion.span
              variants={fadeUp}
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="font-heading text-xs font-extrabold uppercase tracking-widest text-primary-light mb-3"
            >
              END-TO-END PROCESS
            </motion.span>
            <motion.h2
              variants={fadeUp}
              custom={0.1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight mb-6"
            >
              Our Core Manufacturing & Converting Capabilities
            </motion.h2>
            <motion.p
              variants={fadeUp}
              custom={0.2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="font-sans text-slate-400 text-sm leading-relaxed mb-8"
            >
              Shree Harihar Printing Works LLP operates integrated advanced production workflows. Click to explore our machinery line, technologies, and post-press processing modules.
            </motion.p>

            {/* Selector Buttons */}
            <div className="space-y-3">
              {capabilities.map((cap, idx) => (
                <motion.button
                  key={idx}
                  variants={fadeUp}
                  custom={0.25 + idx * 0.07}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  onClick={() => setActiveCapability(idx)}
                  className={`w-full text-left p-4 hover:bg-slate-900 border transition-all duration-200 flex items-center justify-between group ${
                    activeCapability === idx
                      ? "bg-slate-900 border-primary text-white"
                      : "border-slate-800 text-slate-400"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`font-heading text-sm font-semibold transition-colors ${
                      activeCapability === idx ? "text-primary-light" : "text-slate-500"
                    }`}>
                      0{idx + 1}.
                    </span>
                    <span className="font-heading text-sm font-bold tracking-wide">
                      {cap.title}
                    </span>
                  </div>
                  <ChevronRight className={`h-4 w-4 transition-transform ${
                    activeCapability === idx ? "text-primary-light translate-x-1" : "text-slate-600"
                  }`} />
                </motion.button>
              ))}
            </div>
          </div>

          {/* Active Details tab Panel */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay: 0.15 }}
            className="lg:col-span-7 bg-slate-900/60 p-8 sm:p-12 border border-slate-800 relative min-h-[380px] flex flex-col justify-between"
          >
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-primary"></div>
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-primary"></div>
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-primary"></div>
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-primary"></div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-slate-800 border border-slate-700 text-primary-light">
                  {React.createElement(capabilities[activeCapability].icon, { className: "h-6 w-6" })}
                </div>
                <div>
                  <span className="font-heading text-xs text-slate-400 font-semibold tracking-widest uppercase">
                    CAPABILITY MODULE 0{activeCapability + 1}
                  </span>
                  <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-white">
                    {capabilities[activeCapability].title}
                  </h3>
                </div>
              </div>

              <p className="font-sans text-slate-300 text-sm leading-relaxed mb-6">
                {capabilities[activeCapability].description}
              </p>

              <div className="font-heading text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
                TECHNOLOGY & HARDWARE
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {capabilities[activeCapability].details.map((detail, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 bg-primary rounded-full mt-2 shrink-0" />
                    <span className="font-sans text-[13px] text-slate-350">{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800 flex justify-between items-center">
              <span className="text-xs text-slate-500 font-sans">
                SHW LLP | Ahmedabad, Gujarat
              </span>
              <button
                onClick={() => setQuoteModalOpen(true)}
                className="font-heading text-xs font-bold text-primary-light hover:text-primary transition-colors flex items-center gap-2"
              >
                Inquire For This Capability
                <ArrowRight className="h-3 w-3" />
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
