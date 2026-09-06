"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
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
  suffix,
}: {
  target: number;
  label: string;
  bordered: boolean;
  delay: number;
  suffix?: string;
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
        <span className="font-light">{count}{suffix}</span>
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
                src="/images/legacy_craftsmanship.jpg"
                alt="Our legacy and printing craft team inspecting printed sheets"
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
              className="font-heading font-light text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight mb-8 leading-tight"
            >
              A Century in Business.{" "}
              <span className="font-bold text-primary">
                A Team That Still Shows Up Like Day One.
              </span>
            </motion.h2>

            <div className="space-y-6 w-full">
              <motion.div
                variants={fadeUp}
                custom={0.15}
                initial="hidden"
                animate={headerInView ? "visible" : "hidden"}
                className="font-sans text-sm sm:text-base text-slate-500 leading-relaxed pr-4 flex flex-col gap-5"
              >
                <p>
                  Five generations of the same family have run Shree Harihar Printing Works since 1921. What started as a single printing press in Ahmedabad has grown into a full-scale, in-house manufacturing operation. We survived a century in business by never losing the thing that got us here: an uncompromising standard for quality and a genuine respect for the brands that trust us.
                </p>

                <div className="mt-4">
                  <Link href="/about" className="font-heading text-xs sm:text-sm font-black text-slate-900 border-b-[1.5px] border-slate-900 hover:text-primary hover:border-primary transition-colors pb-0.5 inline-flex items-center gap-1 uppercase tracking-wider">
                    Read Our Full Story <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1" strokeWidth={3} />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>

        </div>

        {/* Bottom Stats Row - animated counters */}
        <div className="border-t border-slate-200/60 pt-16 md:pt-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center font-heading font-light text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight mb-12"
          >
            100+ Years of <span className="font-bold text-primary">Printing Excellence</span>
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-4 text-center">
            <StatItem target={1921} label="Year Established" bordered delay={0} />
            <StatItem target={5} label="Generations of Family Leadership" bordered delay={0.12} />
            <StatItem target={100} label="Years of Client Trust" bordered delay={0.24} suffix="+" />
            <StatItem target={5} label="In-House Press & Production Divisions" bordered={false} delay={0.36} />
          </div>
        </div>
      </div>
    </section>
  );
}
