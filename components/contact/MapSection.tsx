"use client";

import React from "react";
import { motion } from "framer-motion";

export default function MapSection() {
  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading font-light text-3xl sm:text-4xl text-slate-900"
        >
          Find <span className="font-bold relative inline-block text-primary">Us</span>
        </motion.h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-full h-[400px] sm:h-[500px] bg-slate-200"
      >
        <iframe 
          title="Shree Harihar Printing Works LLP Location"
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          loading="lazy" 
          allowFullScreen 
          referrerPolicy="no-referrer-when-downgrade" 
          src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Shree%20Harihar%20Printing%20Works%20LLP,%20233/1,%20Miroli%20Village,%20Near%20Pirana%20Village,%20Daskroi,%20Ahmedabad%20%E2%80%93%20382425+(Shree%20Harihar%20Printing%20Works)&t=&z=14&ie=UTF8&iwloc=B&output=embed"
        ></iframe>
      </motion.div>
    </section>
  );
}
