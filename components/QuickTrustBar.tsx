"use client";

import React from "react";
import { Shield, CheckCircle, Award } from "lucide-react";

export default function QuickTrustBar() {
  return (
    <section className="bg-white border-b border-slate-200 py-6 relative z-10 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <span className="font-heading text-xs font-bold text-slate-400 uppercase tracking-widest text-center md:text-left">
            CERTIFICATIONS & STANDARDS:
          </span>
          <div className="flex gap-6 md:gap-10 flex-wrap justify-center">
            <span className="font-heading text-sm font-bold text-slate-700 flex items-center gap-2 hover:text-black transition-colors">
              <Shield className="h-4 w-4 text-primary" /> ISO 9001:2015 CERTIFIED
            </span>
            <span className="font-heading text-sm font-bold text-slate-700 flex items-center gap-2 hover:text-black transition-colors">
              <CheckCircle className="h-4 w-4 text-primary" /> STRICT GMP COMPLIANCE
            </span>
            <span className="font-heading text-sm font-bold text-slate-700 flex items-center gap-2 hover:text-black transition-colors">
              <Award className="h-4 w-4 text-primary" /> BRANDS TRUST FOR PACKAGING
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
