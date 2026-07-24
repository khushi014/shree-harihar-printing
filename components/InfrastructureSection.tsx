"use client";

import React from "react";
import { Layers, Printer, Cpu, Settings, Package, ChevronRight } from "lucide-react";

export default function InfrastructureSection() {
  return (
    <section id="infrastructure" className="py-20 lg:py-28 bg-white border-t border-slate-200">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Block aligned to match the new design language */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 lg:mb-20">
          <h2 className="font-serif text-[2.5rem] sm:text-[3.5rem] lg:text-[4rem] leading-[1.1] text-slate-900 max-w-2xl">
            Massive Production <br />
            <span className="relative inline-block">
              Infrastructure
              <span className="absolute bottom-2 left-0 w-full h-[3px] bg-primary"></span>
            </span>
          </h2>
          <div className="max-w-md flex flex-col items-start gap-4 pb-2">
            <p className="font-sans text-[13px] text-slate-500 leading-relaxed font-medium">
              We operate a massive 15,000 sq ft state-of-the-art facility featuring fully automated Heidelberg presses, Bobst folder gluers, and clean-room environments.
            </p>
            <a href="#quote" className="font-sans text-[13px] font-bold text-slate-900 hover:text-primary transition-colors inline-flex items-center gap-1 border-b-[3px] border-slate-900 hover:border-primary pb-1">
              Start Project <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </div>
        </div>

        {/* The 4-Column Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Dept 1 */}
          <div className="group relative bg-[#fafafa] p-8 lg:p-10 hover:bg-white hover:shadow-xl transition-all duration-500 border border-transparent hover:border-slate-200 flex flex-col items-start">
            <div className="w-full flex justify-between items-start mb-10">
              <span className="font-heading font-black text-6xl text-slate-200 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-slate-800 group-hover:to-primary group-hover:bg-[length:200%_100%] transition-all duration-700 select-none">
                01
              </span>
              <Layers className="w-9 h-9 text-primary group-hover:transform-[rotateY(360deg)] transition-transform duration-700 ease-in-out" strokeWidth={1} />
            </div>
            <h3 className="font-serif text-xl text-slate-800 mb-3 leading-tight">Prepress & CAD Design</h3>
            <p className="font-sans text-[13px] text-slate-500 leading-relaxed mb-4 grow">
              Advanced structural packaging software and Kodak CTP systems ensuring precise dot reproduction.
            </p>
          </div>

          {/* Dept 2 */}
          <div className="group relative bg-[#fafafa] p-8 lg:p-10 hover:bg-white hover:shadow-xl transition-all duration-500 border border-transparent hover:border-slate-200 flex flex-col items-start">
            <div className="w-full flex justify-between items-start mb-10">
              <span className="font-heading font-black text-6xl text-slate-200 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-slate-800 group-hover:to-primary group-hover:bg-[length:200%_100%] transition-all duration-700 select-none">
                02
              </span>
              <Printer className="w-9 h-9 text-primary group-hover:transform-[rotateY(360deg)] transition-transform duration-700 ease-in-out" strokeWidth={1} />
            </div>
            <h3 className="font-serif text-xl text-slate-800 mb-3 leading-tight">Offset Pressroom</h3>
            <p className="font-sans text-[13px] text-slate-500 leading-relaxed mb-4 grow">
              High-speed multi-color Heidelberg presses equipped with spectrophotometers and inline varnish capabilities.
            </p>
          </div>

          {/* Dept 3 */}
          <div className="group relative bg-[#fafafa] p-8 lg:p-10 hover:bg-white hover:shadow-xl transition-all duration-500 border border-transparent hover:border-slate-200 flex flex-col items-start">
            <div className="w-full flex justify-between items-start mb-10">
              <span className="font-heading font-black text-6xl text-slate-200 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-slate-800 group-hover:to-primary group-hover:bg-[length:200%_100%] transition-all duration-700 select-none">
                03
              </span>
              <Settings className="w-9 h-9 text-primary group-hover:transform-[rotateY(360deg)] transition-transform duration-700 ease-in-out" strokeWidth={1} />
            </div>
            <h3 className="font-serif text-xl text-slate-800 mb-3 leading-tight">Surface Enhancements</h3>
            <p className="font-sans text-[13px] text-slate-500 leading-relaxed mb-4 grow">
              High-precision hot foil stamping, micro-embossing, UV drip-off, and barrier varnish implementations.
            </p>
          </div>

          {/* Dept 4 */}
          <div className="group relative bg-[#fafafa] p-8 lg:p-10 hover:bg-white hover:shadow-xl transition-all duration-500 border border-transparent hover:border-slate-200 flex flex-col items-start">
            <div className="w-full flex justify-between items-start mb-10">
              <span className="font-heading font-black text-6xl text-slate-200 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-slate-800 group-hover:to-primary group-hover:bg-[length:200%_100%] transition-all duration-700 select-none">
                04
              </span>
              <Package className="w-9 h-9 text-primary group-hover:transform-[rotateY(360deg)] transition-transform duration-700 ease-in-out" strokeWidth={1} />
            </div>
            <h3 className="font-serif text-xl text-slate-800 mb-3 leading-tight">Punching & Pasting</h3>
            <p className="font-sans text-[13px] text-slate-500 leading-relaxed mb-4 grow">
              Fully automatic Maxima Punching machines and Bobst Visionfold Folder Gluers featuring Accubraille.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
