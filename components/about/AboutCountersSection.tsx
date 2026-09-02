"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

function useCountUp(end: number, duration: number = 2000, startOnView: boolean = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!startOnView) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration, startOnView]);
  return count;
}

function StatItem({
  target,
  label,
  bordered,
  delay,
  suffix = "",
}: {
  target: number;
  label: string;
  bordered?: boolean;
  delay?: number;
  suffix?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const count = useCountUp(target, 2000, inView);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: delay }}
      className={`flex flex-col items-center sm:items-start text-center sm:text-left ${
        bordered ? "sm:border-r sm:border-slate-700/50 sm:pr-8 lg:pr-12" : ""
      }`}
    >
      <div className="font-heading text-5xl lg:text-7xl font-light tracking-tight text-white mb-2 flex items-baseline">
        <span className="font-light">{count}{suffix}</span>
      </div>
      <p className="font-sans text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#B3C0D1] max-w-[120px]">
        {label}
      </p>
    </motion.div>
  );
}

export default function AboutCountersSection() {
  return (
    <section className="bg-slate-900 py-16 lg:py-20 relative overflow-hidden">
      <div className="max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading font-light text-2xl sm:text-3xl lg:text-4xl text-white"
          >
            100+ Years of <span className="font-bold text-primary">Printing Excellence</span>
          </motion.h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8 lg:gap-x-12">
          <StatItem target={1921} label="Year Established" bordered delay={0} />
          <StatItem target={5} label="Generations of Family Leadership" bordered delay={0.1} />
          <StatItem target={100} label="Years of Client Trust" suffix="+" bordered delay={0.2} />
          <StatItem target={5} label="In-House Press & Production Divisions" delay={0.3} />
        </div>
      </div>
    </section>
  );
}
