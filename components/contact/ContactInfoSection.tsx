"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, PhoneCall, MessageCircle } from "lucide-react";

export default function ContactInfoSection() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col h-full"
    >
      <h2 className="font-heading font-light text-3xl text-slate-900 mb-8">
        Get in <span className="font-bold relative inline-block text-primary">Touch<span className="absolute bottom-0 left-0 w-full h-[3px] bg-primary/30" /></span>
      </h2>

      <div className="space-y-8 mb-10">
        
        {/* Address */}
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 flex items-center justify-center bg-slate-100 text-primary rounded-full shrink-0">
            <MapPin className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-heading font-bold text-sm tracking-widest uppercase text-slate-900 mb-2">Address</h4>
            <p className="font-sans text-slate-600 leading-relaxed font-medium">
              233/1, Miroli Village, Near Pirana Village,<br /> 
              Daskroi, Ahmedabad – 382425,<br /> 
              Gujarat, India
            </p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 flex items-center justify-center bg-slate-100 text-primary rounded-full shrink-0">
            <Phone className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-heading font-bold text-sm tracking-widest uppercase text-slate-900 mb-2">Phone</h4>
            <p className="font-sans text-slate-600 leading-relaxed font-medium">
              <a href="tel:07922932863" className="hover:text-primary transition-colors">(079) 22932863</a>, <a href="tel:07922931311" className="hover:text-primary transition-colors">22931311</a><br />
              <a href="tel:+917490041921" className="hover:text-primary transition-colors">+91 74900 41921</a>
            </p>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 flex items-center justify-center bg-slate-100 text-primary rounded-full shrink-0">
            <Mail className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-heading font-bold text-sm tracking-widest uppercase text-slate-900 mb-2">Email</h4>
            <p className="font-sans text-slate-600 leading-relaxed font-medium">
              <a href="mailto:info@hariharprintpack.com" className="hover:text-primary transition-colors">info@hariharprintpack.com</a>
            </p>
          </div>
        </div>

        {/* Hours */}
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 flex items-center justify-center bg-slate-100 text-primary rounded-full shrink-0">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-heading font-bold text-sm tracking-widest uppercase text-slate-900 mb-2">Working Hours</h4>
            <p className="font-sans text-slate-600 leading-relaxed font-medium">
              Mon–Sat, 9:00 AM – 6:00 PM
            </p>
          </div>
        </div>

      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-4 mt-auto pt-6 border-t border-slate-200">
        <a 
          href="tel:+917490041921" 
          className="inline-flex items-center gap-2 bg-slate-900 hover:bg-primary text-white font-heading text-xs sm:text-sm font-bold tracking-widest uppercase px-6 py-3 transition-colors shadow-sm"
        >
          <PhoneCall className="w-4 h-4" /> Call Now
        </a>
        <a 
          href="https://wa.me/917490041921" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-heading text-xs sm:text-sm font-bold tracking-widest uppercase px-6 py-3 transition-colors shadow-sm"
        >
          <MessageCircle className="w-4 h-4" /> WhatsApp Us
        </a>
        <a 
          href="mailto:info@hariharprintpack.com" 
          className="inline-flex items-center gap-2 border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white font-heading text-xs sm:text-sm font-bold tracking-widest uppercase px-6 py-3 transition-colors shadow-sm"
        >
          <Mail className="w-4 h-4" /> Email Us
        </a>
      </div>
      
    </motion.div>
  );
}
