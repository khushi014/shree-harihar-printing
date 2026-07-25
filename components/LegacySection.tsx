"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { ChevronRight } from "lucide-react";

// ── Reusable fade-up variant ──────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay },
  }),
};

// ── Animated counter hook ─────────────────────────────────
function useCounter(target: number, duration = 1.6, start = false) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return value;
}

// ── Stat item component ──────────────────────────────────
function StatItem({
  target,
  label,
  bordered,
  delay,
}: {
  target: number;
  label: string;
  bordered: boolean;
  delay: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const count = useCounter(target, 1.8, inView);

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      custom={delay}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={`flex flex-col items-center ${bordered ? "md:border-r md:border-slate-200/60" : ""}`}
    >
      <div className="font-heading text-4xl sm:text-5xl lg:text-5xl text-slate-900 mb-3 tracking-tighter flex items-start">
        <span className="font-light">{count}</span>
      </div>
      <div className="font-sans text-[10px] sm:text-sm text-slate-400 capitalize tracking-wide font-medium">
        {label}
      </div>
    </motion.div>
  );
}

export default function LegacySection() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });

  const imageRef = useRef(null);
  const imageInView = useInView(imageRef, { once: true, margin: "-80px" });

  return (
    <section id="legacy" className="py-20 lg:py-28 bg-[#fafafa] overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center justify-between mb-16 lg:mb-24 w-full">

          {/* Visual Column / Image */}
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, x: -40 }}
            animate={imageInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            className="w-full lg:w-1/2"
          >
            <div className="relative w-full h-[350px] sm:h-[450px] shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200"
                alt="Our legacy and printing team"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Text Column */}
          <div ref={headerRef} className="w-full lg:w-1/2 flex flex-col justify-center">
            <motion.h2
              variants={fadeUp}
              custom={0}
              initial="hidden"
              animate={headerInView ? "visible" : "hidden"}
              className="font-heading font-light text-4xl sm:text-5xl md:text-6xl text-slate-900 tracking-tight mb-12 leading-tight"
            >
              The blueprint for <br className="hidden sm:block" />
              <span className="font-heading">your</span>{" "}
              <span className="relative inline-block font-normal">
                success
                <span className="absolute bottom-1 left-0 w-full h-1 bg-primary" />
              </span>
            </motion.h2>

            <div className="space-y-10 w-full">
              {/* Block 1 */}
              <motion.div
                variants={fadeUp}
                custom={0.15}
                initial="hidden"
                animate={headerInView ? "visible" : "hidden"}
                className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full"
              >
                <div className="w-full sm:w-[200px] shrink-0">
                  <h3 className="font-heading font-semibold text-slate-800 text-[15px] border-b border-slate-900 pb-2 inline-block relative after:content-[''] after:absolute after:bottom-[-1px] after:left-0 after:w-full after:h-[1px] after:bg-slate-900">
                    <span className="text-primary mr-1">#</span> Innovation &amp; Quality
                  </h3>
                </div>
                <div className="w-full">
                  <p className="font-sans text-sm sm:text-base text-slate-500 leading-relaxed mb-3 pr-4">
                    Using high-quality rigid boards and specialty papers to create premium packaging perfect for liquor, jewelry, corporate gifting, and luxury commodities.
                  </p>
                  <a href="#about" className="font-heading text-[10px] sm:text-xs font-black text-slate-900 border-b-[1.5px] border-slate-900 hover:text-primary hover:border-primary transition-colors pb-0.5 inline-flex items-center gap-1 uppercase">
                    Read More <ChevronRight className="w-[10px] h-[10px] sm:w-3 sm:h-3" strokeWidth={3} />
                  </a>
                </div>
              </motion.div>

              {/* Block 2 */}
              <motion.div
                variants={fadeUp}
                custom={0.28}
                initial="hidden"
                animate={headerInView ? "visible" : "hidden"}
                className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full"
              >
                <div className="w-full sm:w-[200px] shrink-0">
                  <h3 className="font-heading font-semibold text-slate-800 text-[15px] border-b border-slate-900 pb-2 inline-block relative after:content-[''] after:absolute after:bottom-[-1px] after:left-0 after:w-full after:h-[1px] after:bg-slate-900">
                    <span className="text-primary mr-1">#</span> Core Values &amp; Trust
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
              </motion.div>
            </div>
          </div>

        </div>

        {/* Bottom Stats Row — animated counters */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-4 text-center border-t border-slate-200/60 pt-12 md:pt-16">
          <StatItem target={1921} label="Year Established" bordered delay={0} />
          <StatItem target={5}    label="Generations"      bordered delay={0.12} />
          <StatItem target={101}  label="Years of Trust"   bordered delay={0.24} />
          <StatItem target={4}    label="Press Divisions"  bordered={false} delay={0.36} />
        </div>
      </div>
    </section>
  );
}
