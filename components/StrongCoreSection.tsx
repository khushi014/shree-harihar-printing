"use client";

import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay },
  }),
};


const strongValues = [
  {
    id: "01",
    title: "Five generations, one standard",
    desc: "Founded in 1921, still family-led, still quality-obsessed",
    img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "02",
    title: "Full in-house production",
    desc: "prepress to finishing, under one roof, under our control",
    img: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "03",
    title: "On-time delivery, without exception",
    desc: "from a single sticker run to a full carton order",
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "04",
    title: "Multi-industry expertise",
    desc: "pharma-grade precision, FMCG-grade creativity",
    img: "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "05",
    title: "Compliance-ready capability",
    desc: "including Braille-embossed, regulation-sensitive cartons",
    img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800"
  }
];

export default function StrongCoreSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true, margin: "-80px" });

  return (
    <section id="core" className="py-20 lg:py-32 bg-white relative flex flex-col items-center">
      
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 flex flex-col items-center">
        
        {/* Section Headings centered */}
        <div ref={headingRef} className="text-center max-w-4xl mx-auto mb-16 lg:mb-20 flex flex-col items-center">
          <motion.h2
            variants={fadeUp}
            custom={0}
            initial="hidden"
            animate={headingInView ? "visible" : "hidden"}
            className="font-heading text-[2.5rem] sm:text-[3.5rem] lg:text-[4.5rem] leading-[1.1] text-slate-900 mb-4 w-full block"
          >
            What Sets <span className="relative inline-block">
              Us Apart
              <span className="absolute bottom-2 left-0 w-full h-[4px] bg-primary" />
            </span>
          </motion.h2>
        </div>

        {/* Hover Layout Container */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 w-full justify-center lg:items-start">
          
          {/* Left Column: Rows */}
          <div className="w-full lg:w-[60%] flex flex-col border-t border-slate-200">
            {strongValues.map((val, idx) => (
              <motion.div
                key={val.id}
                variants={fadeUp}
                custom={idx * 0.06}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                onMouseEnter={() => setActiveIndex(idx)}
                className={`py-8 sm:py-10 border-b border-slate-200 flex flex-col cursor-pointer transition-colors duration-300 ${activeIndex === idx ? "bg-slate-50" : "bg-transparent hover:bg-slate-50/50"}`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-12 px-4 sm:px-0">
                  {/* Number Outline */}
                  <span 
                    className="font-heading font-black text-5xl sm:text-6xl text-transparent shrink-0 w-20 leading-none"
                    style={{ WebkitTextStroke: activeIndex === idx ? "1.5px #C62026" : "1.5px #CBD5E1" }}
                  >
                    {val.id}
                  </span>

                  {/* Content */}
                  <div className="flex flex-col">
                    <h3 className={`font-heading text-xl sm:text-2xl mb-2 transition-colors ${activeIndex === idx ? "text-primary" : "text-slate-800"}`}>
                      {val.title}
                    </h3>
                    <p className="font-sans text-base text-slate-500 leading-relaxed max-w-lg">
                      {val.desc}
                    </p>
                  </div>
                </div>
                
                {/* Mobile Image (hidden on lg devices) */}
                <div className="w-full mt-6 lg:hidden px-4 sm:px-0">
                  <div className="relative w-full aspect-video sm:aspect-21/9 bg-white p-2 shadow-md">
                    <div className="w-full h-full relative overflow-hidden bg-slate-200">
                      <img 
                        src={val.img} 
                        alt={val.title}
                        className="w-full h-full object-cover transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column: Floating Tilted Image */}
          <div className="hidden lg:flex w-[40%] sticky top-32 justify-center items-center h-150 z-20">
            <div className="relative w-full h-full flex justify-center items-center">
              {strongValues.map((val, idx) => (
                <div
                  key={idx + "img"}
                  className={`absolute w-[90%] sm:w-[80%] lg:w-[90%] max-w-[450px] aspect-[4/5] sm:aspect-square shadow-2xl p-3 bg-white transform transition-all duration-700 ease-out origin-center ${
                    activeIndex === idx 
                      ? "opacity-100 scale-100 rotate-[-4deg] sm:rotate-[6deg] lg:rotate-[8deg] z-10 translate-y-0" 
                      : "opacity-0 scale-95 rotate-0 z-0 translate-y-12 pointer-events-none"
                  }`}
                >
                  <div className="w-full h-full relative overflow-hidden bg-slate-200">
                    <img 
                      src={val.img} 
                      alt={val.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
