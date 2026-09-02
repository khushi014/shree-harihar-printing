"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, CalendarClock, Users, Heart, ThumbsUp, Lightbulb } from "lucide-react";

const values = [
  {
    icon: ShieldCheck,
    title: "Quality",
    desc: "Uncompromised perfection in every print, verified by strict standard checks."
  },
  {
    icon: CalendarClock,
    title: "Promise",
    desc: "Delivering tailored printing and packaging solutions exactly when required, without fail."
  },
  {
    icon: Users,
    title: "Teamwork",
    desc: "A harmonious, safe work culture fostering committed, passionate collaboration."
  },
  {
    icon: Heart,
    title: "Appreciation",
    desc: "Valuing our people and processes, creating a positive work environment."
  },
  {
    icon: ThumbsUp,
    title: "Customer Satisfaction",
    desc: "Serving as partners for growth, achieving the highest satisfaction for decades."
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    desc: "Adopting new technologies and processes while holding firm to our craft."
  }
];

export default function AboutValuesSection() {
  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading font-light text-3xl sm:text-4xl lg:text-5xl text-slate-900 mb-6"
          >
            What We <span className="font-bold relative inline-block text-primary">Believe In</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-sans text-base sm:text-lg text-slate-600 leading-relaxed"
          >
            Our values aren't a poster on the wall; they're how decisions get made here, every day.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {values.map((val, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * idx }}
              className="group p-8 border border-slate-200 bg-slate-50 hover:bg-white hover:-translate-y-2 hover:shadow-lg hover:border-primary/40 transition-all duration-300"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-white border border-slate-200 rounded-full mb-6 group-hover:border-primary/30 group-hover:bg-primary/10 group-hover:scale-110 transition-all duration-300">
                <val.icon className="w-5 h-5 text-slate-900 group-hover:text-primary transition-colors" />
              </div>
              <h3 className="font-heading font-bold text-xl text-slate-900 mb-3">{val.title}</h3>
              <p className="font-sans text-slate-600 leading-relaxed">{val.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center font-sans text-slate-500 mt-16 max-w-2xl mx-auto"
        >
          Together, these values form the strong core that helps us scale new heights in the printing industry, generation after generation.
        </motion.p>
      </div>
    </section>
  );
}
