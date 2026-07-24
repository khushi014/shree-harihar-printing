"use client";

import React from "react";
import Image from "next/image";
import { Users, Heart, Shield, TrendingUp, MapPin, Phone, Mail, ExternalLink } from "lucide-react";
import Logo from "../assets/image.png";

export default function FooterSection({ setQuoteModalOpen }: { setQuoteModalOpen: (val: boolean) => void }) {
  return (
    <>
      <section className="py-20 lg:py-28 bg-slate-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-heading text-xs font-extrabold uppercase tracking-widest text-primary mb-3 block">
              THE BLUEPRINT FOR SUCCESS
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight mb-4">
              Our Core Operating Values & Philosophy
            </h2>
            <p className="font-sans text-slate-650 text-sm sm:text-base">
              A century of trust is backed by operational guidelines. We design our customer experiences and output pipelines around 4 critical corporate pillars.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Teamwork",
                desc: "Fostering synergy between design engineers, press operators, and account planners to execute perfect orders.",
                icon: Users
              },
              {
                title: "Customer Satisfaction",
                desc: "Proactive communication, reliable lead times, and tailored services that nurture decades of mutual growth.",
                icon: Heart
              },
              {
                title: "Quality",
                desc: "Uncompromising precision governed by ISO 9001:2015 checklists, inline densitometers, and structural proofing.",
                icon: Shield
              },
              {
                title: "Innovation",
                desc: "Continuous capital reinvestment in next-generation machinery, eco-friendly varnish formulas, and safety technologies.",
                icon: TrendingUp
              }
            ].map((value, idx) => (
              <div key={idx} className="bg-white border border-slate-200 p-8 shadow-sm flex flex-col justify-between hover:translate-y-[-4px] transition-all duration-300">
                <div>
                  <div className="w-12 h-12 bg-slate-900 text-white flex items-center justify-center mb-6">
                    <value.icon className="h-5 w-5 text-primary-light" />
                  </div>
                  <h3 className="font-heading font-bold text-base text-slate-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {value.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* QUICK INQUIRY banner */}
      <section className="bg-primary text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-white mb-6">
            Looking for a highly reliable B2B Print & Packaging Partner?
          </h2>
          <p className="font-sans text-slate-200 text-base sm:text-lg max-w-3xl mx-auto mb-8 font-light leading-relaxed">
            Get in touch with our technical team today to discuss sheet specifications, high-gsm carton tolerances, Braille compliance, or to request custom structural dummy packaging samples.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => setQuoteModalOpen(true)}
              className="w-full sm:w-auto bg-slate-900 hover:bg-slate-950 font-heading text-xs font-bold uppercase tracking-wider text-white px-8 py-4 transition-all"
            >
              Request a Custom Quote
            </button>
            <a
              href="mailto:info@hariharprintpack.com"
              className="w-full sm:w-auto border border-white/50 hover:border-white font-heading text-xs font-bold uppercase tracking-wider text-white px-8 py-4 transition-all hover:bg-white/5"
            >
              Email Specifications
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 text-white pt-16 pb-12 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            
            {/* Col 1: About/Logo */}
            <div>
              <div className="mb-6">
                <Image src={Logo} alt="Logo" width={100} height={100}/>
              </div>
              <p className="font-sans text-xs text-slate-400 leading-relaxed mb-6">
                Evolved over 5 generations into a complete, high-volume folding carton Print-Pack company serving pharmaceuticals and FMCG industries.
              </p>
              <div className="flex items-center gap-3">
                <span className="font-heading text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                  Est. 1921 | Ahmedabad
                </span>
              </div>
            </div>

            {/* Col 2: Quick Links */}
            <div>
              <h4 className="font-heading text-xs font-extrabold uppercase tracking-widest text-slate-300 mb-4 border-l-2 border-primary pl-2">
                Quick Navigation
              </h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <a href="#" className="text-slate-450 hover:text-primary-light transition-colors font-sans">
                    Home Page
                  </a>
                </li>
                <li>
                  <a href="#legacy" className="text-slate-450 hover:text-primary-light transition-colors font-sans">
                    Legacy & Journey
                  </a>
                </li>
                <li>
                  <a href="#infrastructure" className="text-slate-450 hover:text-primary-light transition-colors font-sans">
                    Miroli Infrastructure
                  </a>
                </li>
                <li>
                  <a href="#industries" className="text-slate-450 hover:text-primary-light transition-colors font-sans">
                    Industries Served
                  </a>
                </li>
                <li>
                  <a href="#products" className="text-slate-450 hover:text-primary-light transition-colors font-sans">
                    Packaging Products
                  </a>
                </li>
                <li>
                  <a href="#capabilities" className="text-slate-450 hover:text-primary-light transition-colors font-sans">
                    Press Capabilities
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3: Plant Address */}
            <div>
              <h4 className="font-heading text-xs font-extrabold uppercase tracking-widest text-slate-300 mb-4 border-l-2 border-primary pl-2">
                Miroli Plant Address
              </h4>
              <p className="font-sans text-xs text-slate-400 leading-relaxed flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-primary-light shrink-0 mt-0.5" />
                <span>
                  233/1, Miroli Village,<br />
                  Near Pirana Village, Daskroi,<br />
                  Ahmedabad - 382425,<br />
                  Gujarat, India
                </span>
              </p>
            </div>

            {/* Col 4: Contact details */}
            <div>
              <h4 className="font-heading text-xs font-extrabold uppercase tracking-widest text-slate-300 mb-4 border-l-2 border-primary pl-2">
                Contact Office
              </h4>
              <ul className="space-y-3 text-xs text-slate-400 font-sans">
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-primary-light" />
                  <span>(079)-22932863, 22931311</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-primary-light" />
                  <span>+91 74900 41921</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-primary-light" />
                  <a href="mailto:info@hariharprintpack.com" className="hover:text-primary-light transition-colors">
                    info@hariharprintpack.com
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <ExternalLink className="h-4 w-4 text-primary-light" />
                  <a href="http://www.hariharprintpack.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary-light transition-colors">
                    www.hariharprintpack.com
                  </a>
                </li>
              </ul>
            </div>

          </div>

          {/* Bottom copyright line */}
          <div className="border-t border-slate-900 pt-8 mt-12 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="font-sans text-[11px] text-slate-500">
              &copy; {new Date().getFullYear()} Shree Harihar Printing Works LLP. All Rights Reserved.
            </p>
            <div className="flex gap-4 text-[11px] text-slate-500 font-sans">
              <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
              <span>&bull;</span>
              <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
              <span>&bull;</span>
              <a href="#" className="hover:text-slate-300 transition-colors">Sitemap</a>
            </div>
          </div>

        </div>
      </footer>
    </>
  );
}
