"use client";

import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, Target, HeartHandshake } from "lucide-react";

const blueprintItems = [
  {
    icon: Lightbulb,
    title: "A strong penchant for innovation",
    desc: "Adopting new technologies and processes while staying true to our craft."
  },
  {
    icon: Target,
    title: "Achieving highest customer satisfaction",
    desc: "Measuring our success by whether clients come back."
  },
  {
    icon: HeartHandshake,
    title: "Creating a positive work environment",
    desc: "Because great packaging starts with people who feel valued."
  }
];

export default function AboutBlueprintSection() {
  return (
    <section className="py-20 lg:py-28 bg-zinc-50 border-b border-slate-200">
      <div className="max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="font-heading font-light text-3xl sm:text-4xl lg:text-5xl text-slate-900 mb-6"
          >
            The Blueprint for <span className="font-bold text-primary">Our Success</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.1 }}
            className="font-sans text-base sm:text-lg text-slate-600 leading-relaxed"
          >
            Our vision and mission have been the blueprint for our consistent, remarkable presence in the industry, even through every challenge along the way. At the core of everything we do:
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-16">
          {blueprintItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.15 + (idx * 0.1) }}
              className="group bg-white p-8 lg:p-10 border border-slate-200 shadow-sm flex flex-col items-center text-center hover:shadow-xl hover:border-primary/30 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-primary/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary transition-all duration-300">
                <item.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-heading font-bold text-xl text-slate-900 mb-4">
                {item.title}
              </h3>
              <p className="font-sans text-slate-600 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
