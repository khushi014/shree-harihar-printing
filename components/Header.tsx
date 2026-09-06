"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ArrowUpRight, Sparkles } from "lucide-react";
import { Facebook, Instagram, Youtube, Linkedin, Whatsapp } from "./Icons";

interface NavLinkItem {
  name: string;
  href: string;
}

const NAV_LINKS: NavLinkItem[] = [
  { name: "HOME", href: "/" },
  { name: "ABOUT", href: "/about" },
  { name: "SERVICES", href: "/services" },
  { name: "INDUSTRIES", href: "/industry" },
  { name: "GALLERY", href: "/gallery" },
  { name: "CONTACT US", href: "/contact" },
];

export default function Header({ onOpenQuote }: { onOpenQuote?: () => void }) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? "py-2.5 bg-white/98 backdrop-blur-2xl border-b border-slate-200/90 shadow-md shadow-slate-900/5"
            : "py-3 sm:py-3.5 bg-white/95 backdrop-blur-xl border-b border-slate-200/70 shadow-xs"
        }`}
      >
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* ── LOGO BRAND ── */}
          <Link
            href="/"
            className="flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl group transition-transform duration-200 hover:scale-[1.02]"
          >
            <Image
              src="/logo.png"
              alt="Shree Harihar Printing Works LLP"
              width={148}
              height={44}
              priority
              className="h-8 sm:h-9 w-auto object-contain"
            />
          </Link>

          {/* ── DESKTOP NAVIGATION LINKS ── */}
          <nav
            onMouseLeave={() => setHoveredPath(null)}
            className="hidden lg:flex items-center space-x-1"
          >
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              const isHovered = hoveredPath === link.href;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onMouseEnter={() => setHoveredPath(link.href)}
                  className={`relative font-heading text-xs font-bold px-3.5 py-2 rounded-full transition-colors duration-200 uppercase tracking-widest ${
                    isActive
                      ? "text-white"
                      : "text-slate-700 hover:text-slate-950"
                  }`}
                >
                  {/* Sliding active indicator with Framer Motion */}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavPill"
                      className="absolute inset-0 bg-gradient-to-r from-primary to-[#b11d22] rounded-full shadow-sm shadow-primary/25"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}

                  {/* Subtle hover background for non-active items */}
                  {!isActive && isHovered && (
                    <motion.div
                      layoutId="hoverNavPill"
                      className="absolute inset-0 bg-slate-100 rounded-full"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}

                  <span className="relative z-10">{link.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* ── RIGHT ACTION AREA: Socials & "Get Quote" CTA ── */}
          <div className="hidden lg:flex items-center space-x-2.5">
            {/* Quick Phone Call Pill */}
            <a
              href="tel:07922932863"
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-slate-100 hover:bg-slate-200/80 text-slate-700 hover:text-slate-950 border border-slate-200/80 text-xs font-heading font-semibold tracking-wide transition-all shadow-xs"
              title="Call us: (079) 22932863"
            >
              <Phone className="w-3.5 h-3.5 text-primary" />
              <span className="hidden xl:inline">(079) 22932863</span>
            </a>

            {/* WhatsApp Quick Icon */}
            <a
              href="https://wa.me/919825000000"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-white bg-slate-100 hover:bg-emerald-600 p-2 rounded-full border border-slate-200/80 transition-all duration-200 hover:scale-110 shadow-xs"
              title="Chat on WhatsApp"
            >
              <Whatsapp className="h-3.5 w-3.5" />
            </a>

            {/* LinkedIn Quick Icon */}
            <a
              href="#"
              className="text-slate-600 hover:text-white bg-slate-100 hover:bg-[#0077b5] p-2 rounded-full border border-slate-200/80 transition-all duration-200 hover:scale-110 shadow-xs"
              title="LinkedIn"
            >
              <Linkedin className="h-3.5 w-3.5" />
            </a>

            {/* "GET QUOTE" High-Converting CTA Button */}
            <Link
              href="/contact"
              className="cursor-pointer ml-1 inline-flex items-center gap-2 px-4.5 py-2 rounded-full bg-gradient-to-r from-primary to-[#b11d22] text-white font-heading font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-primary/30 hover:scale-[1.03] transition-all border border-primary-light/40 group"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
              <span>Get Quote</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          {/* ── MOBILE MENU TRIGGER BUTTON ── */}
          <div className="lg:hidden flex items-center space-x-2">
            <Link
              href="/contact"
              className="px-3 py-1.5 rounded-full bg-primary text-white text-[11px] font-heading font-semibold uppercase tracking-wider shadow-xs hover:bg-primary-dark transition-colors"
            >
              Quote
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 focus:outline-none transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

        </div>
      </header>

      {/* ── MOBILE DRAWER OVERLAY (Light Theme) ── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm"
            />

            {/* Drawer Content */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 300 }}
              className="fixed top-0 right-0 w-4/5 max-w-sm h-full bg-white border-l border-slate-200 p-6 flex flex-col justify-between shadow-2xl z-10 text-slate-900"
            >
              <div>
                {/* Drawer Header */}
                <div className="flex items-center justify-between pb-5 border-b border-slate-200">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/squareLogo.png"
                      alt="Shree Harihar Emblem"
                      width={28}
                      height={28}
                      className="h-7 w-auto object-contain"
                    />
                    <Image
                      src="/logo.png"
                      alt="Shree Harihar Logo"
                      width={115}
                      height={35}
                      className="h-7 w-auto object-contain"
                    />
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {/* Navigation Links */}
                <div className="flex flex-col space-y-1.5 pt-6">
                  {NAV_LINKS.map((link, idx) => {
                    const isActive =
                      link.href === "/"
                        ? pathname === "/"
                        : pathname.startsWith(link.href);

                    return (
                      <motion.div
                        key={link.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`flex items-center justify-between font-heading text-sm font-semibold px-4 py-3 rounded-xl transition-all uppercase tracking-wider ${
                            isActive
                              ? "bg-primary text-white shadow-md shadow-primary/20"
                              : "text-slate-700 hover:text-slate-950 hover:bg-slate-100"
                          }`}
                        >
                          <span>{link.name}</span>
                          <ArrowUpRight className={`w-4 h-4 ${isActive ? "opacity-100" : "opacity-40"}`} />
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Mobile CTA Button */}
                <div className="mt-6 pt-4 border-t border-slate-200">
                  <Link
                    href="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-primary to-[#b11d22] text-white font-heading font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-primary/20 cursor-pointer"
                  >
                    <Sparkles className="w-4 h-4 text-amber-300" />
                    Request a Quote
                  </Link>
                </div>
              </div>

              {/* Drawer Footer */}
              <div className="border-t border-slate-200 pt-6 space-y-4">
                <div className="flex justify-center items-center gap-3">
                  <a href="#" className="p-2 rounded-full bg-slate-100 text-slate-600 hover:text-white hover:bg-primary transition-colors"><Facebook className="h-4 w-4" /></a>
                  <a href="#" className="p-2 rounded-full bg-slate-100 text-slate-600 hover:text-white hover:bg-primary transition-colors"><Instagram className="h-4 w-4" /></a>
                  <a href="#" className="p-2 rounded-full bg-slate-100 text-slate-600 hover:text-white hover:bg-primary transition-colors"><Youtube className="h-4 w-4" /></a>
                  <a href="#" className="p-2 rounded-full bg-slate-100 text-slate-600 hover:text-white hover:bg-primary transition-colors"><Linkedin className="h-4 w-4" /></a>
                  <a href="https://wa.me/919825000000" className="p-2 rounded-full bg-slate-100 text-slate-600 hover:text-white hover:bg-emerald-600 transition-colors"><Whatsapp className="h-4 w-4" /></a>
                </div>
                <div className="text-center">
                  <a href="tel:07922932863" className="text-xs font-mono text-slate-700 hover:text-primary transition-colors font-medium">
                    Tel: (079) 22932863
                  </a>
                  <p className="text-[10px] text-slate-500 mt-1 uppercase tracking-widest font-heading">
                    Est. 1921 • 5th Generation Printing
                  </p>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
