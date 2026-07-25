"use client";

import React from "react";
import Image from "next/image";
import { Users, Heart, Shield, TrendingUp, MapPin, Phone, Mail, ExternalLink } from "lucide-react";
import Logo from "../assets/image.png";

export default function FooterSection({ setQuoteModalOpen }: { setQuoteModalOpen: (val: boolean) => void }) {
  return (
    <>
     

      {/* FOOTER */}
      <footer className="bg-slate-950 text-white pt-16 pb-12 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            
            {/* Col 1: About/Logo */}
            <div>
              <div className="mb-6">
                <a href="#" className="inline-block focus:outline-none">
                  <Image src={Logo} alt="Logo" width={100} height={100}/>
                </a>
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
