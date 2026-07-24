"use client";

import React from "react";
import { ChevronRight } from "lucide-react";

export default function LegacySection() {
  return (
    <section id="legacy" className="py-20 lg:py-28 bg-[#fafafa] overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center justify-between mb-16 lg:mb-24 w-full">
          
          {/* Visual Column / Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative w-full h-[350px] sm:h-[450px] shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200" 
                alt="Our legacy and printing team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text Column */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <h2 className="font-heading font-light text-4xl sm:text-5xl md:text-6xl text-slate-900 tracking-tight mb-12 leading-tight">
              The blueprint for <br className="hidden sm:block"/>
              <span className="font-serif">your</span> <span className="relative inline-block font-normal">
                success
                <span className="absolute bottom-1 left-0 w-full h-1 bg-primary"></span>
              </span>
            </h2>

            <div className="space-y-10 w-full">
              {/* Block 1 */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full">
                <div className="w-full sm:w-[200px] shrink-0">
                  <h3 className="font-heading font-semibold text-slate-800 text-[15px] border-b border-slate-900 pb-2 inline-block relative after:content-[''] after:absolute after:bottom-[-1px] after:left-0 after:w-full after:h-[1px] after:bg-slate-900">
                    <span className="text-primary mr-1">#</span> Innovation & Quality
                  </h3>
                </div>
                <div className="w-full">
                  <p className="font-sans text-xs sm:text-sm text-slate-500 leading-relaxed mb-3 pr-4">
                    A strong penchant for innovation and the highest quality standards, adapting new technologies and processes to maintain the stronghold on our craft.
                  </p>
                  <a href="#about" className="font-heading text-[10px] sm:text-xs font-black text-slate-900 border-b-[1.5px] border-slate-900 hover:text-primary hover:border-primary transition-colors pb-0.5 inline-flex items-center gap-1 uppercase">
                    Read More <ChevronRight className="w-[10px] h-[10px] sm:w-3 sm:h-3" strokeWidth={3} />
                  </a>
                </div>
              </div>

              {/* Block 2 */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full">
                <div className="w-full sm:w-[200px] shrink-0">
                  <h3 className="font-heading font-semibold text-slate-800 text-[15px] border-b border-slate-900 pb-2 inline-block relative after:content-[''] after:absolute after:bottom-[-1px] after:left-0 after:w-full after:h-[1px] after:bg-slate-900">
                    <span className="text-primary mr-1">#</span> Core Values & Trust
                  </h3>
                </div>
                <div className="w-full">
                  <p className="font-sans text-xs sm:text-sm text-slate-500 leading-relaxed mb-3 pr-4">
                    Achieving the highest customer satisfaction through teamwork and uncompromised perfection. A century of transparent and customer-committed solutions since 1921.
                  </p>
                  <a href="#legacy" className="font-heading text-[10px] sm:text-xs font-black text-slate-900 border-b-[1.5px] border-slate-900 hover:text-primary hover:border-primary transition-colors pb-0.5 inline-flex items-center gap-1 uppercase">
                    Read More <ChevronRight className="w-[10px] h-[10px] sm:w-3 sm:h-3" strokeWidth={3} />
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-4 text-center border-t border-slate-200/60 pt-12 md:pt-16">
          <div className="md:border-r md:border-slate-200/60 flex flex-col items-center">
            <div className="font-heading text-4xl sm:text-5xl lg:text-5xl text-slate-900 mb-3 tracking-tighter flex items-start">
              <span className="font-light">1921</span>
            </div>
            <div className="font-sans text-[10px] sm:text-sm text-slate-400 capitalize tracking-wide font-medium">Year Established</div>
          </div>
          <div className="md:border-r md:border-slate-200/60 flex flex-col items-center">
            <div className="font-heading text-4xl sm:text-5xl lg:text-5xl text-slate-900 mb-3 tracking-tighter flex items-start">
              <span className="font-light">5</span>
            </div>
            <div className="font-sans text-[10px] sm:text-sm text-slate-400 capitalize tracking-wide font-medium">Generations</div>
          </div>
          <div className="md:border-r md:border-slate-200/60 flex flex-col items-center">
            <div className="font-heading text-4xl sm:text-5xl lg:text-5xl text-slate-900 mb-3 tracking-tighter flex items-start">
              <span className="font-light">101</span>
            </div>
            <div className="font-sans text-[10px] sm:text-sm text-slate-400 capitalize tracking-wide font-medium">Years of Trust</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="font-heading text-4xl sm:text-5xl lg:text-5xl text-slate-900 mb-3 tracking-tighter flex items-start">
              <span className="font-light">4</span>
            </div>
            <div className="font-sans text-[10px] sm:text-sm text-slate-400 capitalize tracking-wide font-medium">Press Divisions</div>
          </div>
        </div>
      </div>
    </section>
  );
}
