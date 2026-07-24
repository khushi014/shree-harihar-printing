"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import Logo from "../assets/image.png";
import { Facebook, Instagram, Youtube, Linkedin, Whatsapp } from "./Icons";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-black/70 backdrop-blur-md py-3 shadow-md"
            : "bg-transparent py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Brand Title */}
          <a href="#" className="focus:outline-none">
            <Image src={Logo} alt="Logo" width={150} height={150}/>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-6">
            {[
              { name: "HOME", href: "#" },
              { name: "ABOUT", href: "#legacy" },
              { name: "SERVICES", href: "#capabilities" },
              { name: "GALLARY", href: "#industries" },
              { name: "CONTACT US", href: "#contact" },
            ].map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-heading text-sm font-semibold text-white/90 hover:text-white px-1 py-2 transition-colors uppercase tracking-wider relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Social Icons Right Button */}
          <div className="hidden md:flex items-center space-x-3">
            <a href="#" className="text-white hover:text-primary transition-colors bg-white/10 p-2 rounded-full backdrop-blur-sm shadow-sm hover:scale-110 duration-200">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="#" className="text-white hover:text-primary transition-colors bg-white/10 p-2 rounded-full backdrop-blur-sm shadow-sm hover:scale-110 duration-200">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="#" className="text-white hover:text-primary transition-colors bg-white/10 p-2 rounded-full backdrop-blur-sm shadow-sm hover:scale-110 duration-200">
              <Youtube className="h-4 w-4" />
            </a>
            <a href="#" className="text-white hover:text-primary transition-colors bg-white/10 p-2 rounded-full backdrop-blur-sm shadow-sm hover:scale-110 duration-200">
              <Linkedin className="h-4 w-4" />
            </a>
            <a href="#" className="text-white hover:text-green-500 transition-colors bg-white/10 p-2 rounded-full backdrop-blur-sm shadow-sm hover:scale-110 duration-200">
              <Whatsapp className="h-4 w-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              className="text-white hover:text-primary transition-colors focus:outline-none bg-black/20 p-2 rounded-md backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer (Absolute overlay) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md lg:hidden">
          <div className="fixed top-0 right-0 w-4/5 max-w-sm h-full bg-slate-900 shadow-2xl p-6 flex flex-col justify-between transform transition-transform duration-300 border-l border-slate-800">
            <div>
              <div className="flex justify-between items-center pb-6 border-b border-slate-800">
                <Image src={Logo} alt="Logo" width={150} height={150} className="brightness-200"/>
                <button
                  className="p-1 rounded-full text-slate-400 hover:text-primary focus:outline-none"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="flex flex-col space-y-2 pt-6">
                {[
                  { name: "HOME", href: "#" },
                  { name: "ABOUT", href: "#legacy" },
                  { name: "SERVICES", href: "#capabilities" },
                  { name: "GALLARY", href: "#industries" },
                  { name: "CONTACT US", href: "#contact" },
                ].map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-heading text-lg font-semibold text-slate-200 hover:text-primary hover:bg-slate-800/50 rounded-md transition-all px-4 py-3 uppercase tracking-wider"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            <div className="border-t border-slate-800 pt-6 space-y-6">
              <div className="flex justify-center flex-wrap gap-4">
                <a href="#" className="text-slate-300 hover:text-primary transition-colors"><Facebook className="h-5 w-5" /></a>
                <a href="#" className="text-slate-300 hover:text-primary transition-colors"><Instagram className="h-5 w-5" /></a>
                <a href="#" className="text-slate-300 hover:text-primary transition-colors"><Youtube className="h-5 w-5" /></a>
                <a href="#" className="text-slate-300 hover:text-primary transition-colors"><Linkedin className="h-5 w-5" /></a>
                <a href="#" className="text-slate-300 hover:text-green-500 transition-colors"><Whatsapp className="h-5 w-5" /></a>
              </div>
              <div className="text-sm font-semibold text-slate-400 text-center tracking-widest uppercase">
                Call: (079)-22932863
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
