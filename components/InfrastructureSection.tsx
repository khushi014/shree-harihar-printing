"use client";

import React from "react";
import { motion } from "framer-motion";
import { Layers, Printer, Cpu, Settings, Package } from "lucide-react";

const departments = [
  {
    icon: Layers,
    num: "01",
    title: "Prepress",
    desc: "Advanced plate making systems and structural packaging software ensuring absolute dot precision.",
  },
  {
    icon: Printer,
    num: "02",
    title: "Printing Department",
    desc: "High-speed multi-color Heidelberg presses equipped with inline coating and spectrophotometers.",
  },
  {
    icon: Settings,
    num: "03",
    title: "Post Press Department",
    desc: "Auto coating, blanking, vision inspection arrays, automatic punching machines, and folder gluers.",
  },
  {
    icon: Package,
    num: "04",
    title: "Flexo Label Printing",
    desc: "Roll-fed premium pressure-sensitive labels, precision varnishes, and commercial packaging stickers.",
  },
  {
    icon: Cpu,
    num: "05",
    title: "Insert Printing Division",
    desc: "High-precision miniature cross folding production for specialized pharma instruction inserts.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay },
  }),
};

export default function InfrastructureSection() {
  return (
    <section id="infrastructure" className="relative bg-white border-t border-slate-200">

      {/* Cinematic Video Background with Centered Content */}
      <div className="relative w-full h-[600px] lg:h-[750px] flex items-center justify-center overflow-hidden">
        <video
          src="/infrastructure.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Staggered Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="relative z-10 flex flex-col items-center text-center"
        >
          <h2 className="font-heading text-3xl min-[400px]:text-4xl sm:text-[4rem] lg:text-[5.5rem] leading-[1.1] text-white whitespace-nowrap sm:whitespace-normal">
            Offering shine to
          </h2>
          <div className="flex items-center gap-6 mt-2 mb-2">
            <h2 className="font-heading text-3xl min-[400px]:text-4xl sm:text-[4rem] lg:text-[5.5rem] leading-[1.1] text-white whitespace-nowrap sm:whitespace-normal">
              excellence printing
            </h2>
          </div>
          <h2 className="font-heading text-3xl min-[400px]:text-4xl sm:text-[4rem] lg:text-[5.5rem] leading-[1.1] text-white whitespace-nowrap sm:whitespace-normal">
            stuff
          </h2>
        </motion.div>
      </div>

      {/* Overlapping 5-Column Card Grid */}
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-20 -mt-24 lg:-mt-32 pb-20 lg:pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">

          {departments.map((dept, idx) => {
            const Icon = dept.icon;
            return (
              <motion.div
                key={idx}
                variants={fadeUp}
                custom={idx * 0.1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                className="group bg-white border border-slate-200 p-8 flex flex-col items-start"
              >
                <div className="w-full flex justify-between items-start mb-8">
                  <Icon
                    className="w-10 h-10 text-primary group-hover:transform-[rotateY(360deg)] transition-transform duration-700 ease-in-out"
                    strokeWidth={1}
                  />
                  <span
                    className="font-heading font-black text-5xl text-transparent select-none bg-clip-text bg-gradient-to-r from-slate-800 to-primary transition-all duration-700 bg-[length:0%_100%] group-hover:bg-[length:100%_100%] bg-left bg-no-repeat [-webkit-text-stroke:1px_#334155] group-hover:[-webkit-text-stroke-color:transparent]"
                  >
                    {dept.num}
                  </span>
                </div>
                <h3 className="font-heading text-xl text-slate-900 mb-4">{dept.title}</h3>
                <p className="font-sans text-[15px] text-slate-500 leading-relaxed grow mb-4">
                  {dept.desc}
                </p>
              </motion.div>
            );
          })}

        </div>
      </div>

    </section>
  );
}
