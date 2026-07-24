"use client";

import React from "react";
import { Layers, Printer, Cpu, Settings, Package, ChevronRight, ArrowDownRight } from "lucide-react";

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
        
        {/* Staggered Heading from Screenshot */}
        <div className="relative z-10 flex flex-col items-center text-center">
          <h2 className="font-heading text-[3rem] sm:text-[4rem] lg:text-[5.5rem] leading-[1.1] text-white">
            Offering shine
          </h2>
          <div className="flex items-center gap-6 mt-2 mb-2">
            <a href="#quote" className="bg-primary text-white text-[13px] font-bold uppercase tracking-widest py-3 px-8 rounded-full hover:bg-slate-900 transition-colors">
              Get Started
            </a>
            <h2 className="font-heading text-[3rem] sm:text-[4rem] lg:text-[5.5rem] leading-[1.1] text-white">
              to excellence
            </h2>
          </div>
          <h2 className="font-heading text-[3rem] sm:text-[4rem] lg:text-[5.5rem] leading-[1.1] text-white">
            printing stuff
          </h2>
        </div>
      </div>

      {/* Overlapping 5-Column Card Grid */}
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-20 -mt-24 lg:-mt-32 pb-20 lg:pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            
            {/* Dept 1 */}
            <div className="group bg-white border border-slate-200 p-8 flex flex-col items-start">
              <div className="w-full flex justify-between items-start mb-8">
                <Layers className="w-10 h-10 text-primary group-hover:transform-[rotateY(360deg)] transition-transform duration-700 ease-in-out" strokeWidth={1} />
                <span 
                  className="font-heading font-black text-5xl text-transparent select-none bg-clip-text bg-gradient-to-r from-slate-800 to-primary transition-all duration-700 bg-[length:0%_100%] group-hover:bg-[length:100%_100%] bg-left bg-no-repeat [-webkit-text-stroke:1px_#334155] group-hover:[-webkit-text-stroke-color:transparent]"
                >
                  01
                </span>
              </div>
              <h3 className="font-heading text-xl text-slate-900 mb-4">Prepress</h3>
              <p className="font-sans text-[13px] text-slate-500 leading-relaxed grow mb-4">
                Advanced plate making systems and structural packaging software ensuring absolute dot precision.
              </p>
          
            </div>

            {/* Dept 2 */}
            <div className="group bg-white border border-slate-200 p-8 flex flex-col items-start">
              <div className="w-full flex justify-between items-start mb-8">
                <Printer className="w-10 h-10 text-primary group-hover:transform-[rotateY(360deg)] transition-transform duration-700 ease-in-out" strokeWidth={1} />
                <span 
                  className="font-heading font-black text-5xl text-transparent select-none bg-clip-text bg-gradient-to-r from-slate-800 to-primary transition-all duration-700 bg-[length:0%_100%] group-hover:bg-[length:100%_100%] bg-left bg-no-repeat [-webkit-text-stroke:1px_#334155] group-hover:[-webkit-text-stroke-color:transparent]"
                >
                  02
                </span>
              </div>
              <h3 className="font-heading text-xl text-slate-900 mb-4">Printing Department</h3>
              <p className="font-sans text-[13px] text-slate-500 leading-relaxed grow mb-4">
                High-speed multi-color Heidelberg presses equipped with inline coating and spectrophotometers.
              </p>
          
            </div>

            {/* Dept 3 */}
            <div className="group bg-white border border-slate-200 p-8 flex flex-col items-start">
              <div className="w-full flex justify-between items-start mb-8">
                <Settings className="w-10 h-10 text-primary group-hover:transform-[rotateY(360deg)] transition-transform duration-700 ease-in-out" strokeWidth={1} />
                <span 
                  className="font-heading font-black text-5xl text-transparent select-none bg-clip-text bg-gradient-to-r from-slate-800 to-primary transition-all duration-700 bg-[length:0%_100%] group-hover:bg-[length:100%_100%] bg-left bg-no-repeat [-webkit-text-stroke:1px_#334155] group-hover:[-webkit-text-stroke-color:transparent]"
                >
                  03
                </span>
              </div>
              <h3 className="font-heading text-xl text-slate-900 mb-4">Post Press Department</h3>
              <p className="font-sans text-[13px] text-slate-500 leading-relaxed grow mb-4">
                Auto coating, blanking, vision inspection arrays, automatic punching machines, and folder gluers.
              </p>
          
            </div>

            {/* Dept 4 */}
            <div className="group bg-white border border-slate-200 p-8 flex flex-col items-start">
              <div className="w-full flex justify-between items-start mb-8">
                <Package className="w-10 h-10 text-primary group-hover:transform-[rotateY(360deg)] transition-transform duration-700 ease-in-out" strokeWidth={1} />
                <span 
                  className="font-heading font-black text-5xl text-transparent select-none bg-clip-text bg-gradient-to-r from-slate-800 to-primary transition-all duration-700 bg-[length:0%_100%] group-hover:bg-[length:100%_100%] bg-left bg-no-repeat [-webkit-text-stroke:1px_#334155] group-hover:[-webkit-text-stroke-color:transparent]"
                >
                  04
                </span>
              </div>
              <h3 className="font-heading text-xl text-slate-900 mb-4">Flexo Label Printing</h3>
              <p className="font-sans text-[13px] text-slate-500 leading-relaxed grow mb-4">
                Roll-fed premium pressure-sensitive labels, precision varnishes, and commercial packaging stickers.
              </p>
          
            </div>
            
            {/* Dept 5 */}
            <div className="group bg-white border border-slate-200 p-8 flex flex-col items-start">
              <div className="w-full flex justify-between items-start mb-8">
                <Cpu className="w-10 h-10 text-primary group-hover:transform-[rotateY(360deg)] transition-transform duration-700 ease-in-out" strokeWidth={1} />
                <span 
                  className="font-heading font-black text-5xl text-transparent select-none bg-clip-text bg-gradient-to-r from-slate-800 to-primary transition-all duration-700 bg-[length:0%_100%] group-hover:bg-[length:100%_100%] bg-left bg-no-repeat [-webkit-text-stroke:1px_#334155] group-hover:[-webkit-text-stroke-color:transparent]"
                >
                  05
                </span>
              </div>
              <h3 className="font-heading text-xl text-slate-900 mb-4">Insert Printing Division</h3>
              <p className="font-sans text-[13px] text-slate-500 leading-relaxed grow mb-4">
                High-precision miniature cross folding production for specialized pharma instruction inserts.
              </p>
          
            </div>

          </div>
        </div>

    </section>
  );
}
