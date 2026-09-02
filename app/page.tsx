"use client";

import React, { useState } from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import QuickTrustBar from "../components/QuickTrustBar";
import LegacySection from "../components/LegacySection";
import InfrastructureSection from "../components/InfrastructureSection";
import SuccessFutureSection from "../components/SuccessFutureSection";
import TestimonialsSection from "../components/TestimonialsSection";
import StrongCoreSection from "../components/StrongCoreSection";
import ContactSection from "../components/ContactSection";
import FooterSection from "../components/FooterSection";

import { X, ClipboardList, CheckCircle } from "lucide-react";

export default function Home() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [quoteForm, setQuoteForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    requirement: "Mono Cartons",
    message: "",
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
      setFormSubmitted(true);
      setTimeout(() => {
        setQuoteModalOpen(false);
        setFormSubmitted(false);
        setQuoteForm({
          name: "",
          email: "",
          company: "",
          phone: "",
          requirement: "Mono Cartons",
          message: "",
        });
      }, 2000);
    }, 800);
  };

  return (
    <div className="flex-1 w-full bg-slate-50 relative selection:bg-primary selection:text-white font-sans text-slate-800">
      <Header />
      
      <HeroSection />
      
      <QuickTrustBar />
      
      <LegacySection />
      
      <InfrastructureSection />
      
      <SuccessFutureSection />
      
      <TestimonialsSection />
      
      <StrongCoreSection />
      
      <ContactSection />
      
      <FooterSection setQuoteModalOpen={setQuoteModalOpen} />

      {/* REQUEST A QUOTE OVERLAY MODAL */}
      {quoteModalOpen && (
        <div className="fixed inset-0 z-55 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in">
          <div className="bg-white border-t-4 border-primary p-6 sm:p-8 w-full max-w-xl shadow-2xl relative">
            
            {/* Close button */}
            <button
              onClick={() => setQuoteModalOpen(false)}
              className="absolute top-4 right-4 text-slate-650 hover:text-primary focus:outline-none"
            >
              <X className="h-6 w-6" />
            </button>

            <div className="mb-6">
              <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-slate-900 mb-1 flex items-center gap-2">
                <ClipboardList className="text-primary h-6 w-6" />
                Request a Custom B2B Quote
              </h3>
              <p className="font-sans text-xs text-slate-500">
                Please submit your print specs and board dimensions here. Our team responds within 24 business hours.
              </p>
            </div>

            {formSubmitted ? (
              <div className="bg-emerald-50 text-emerald-800 border border-emerald-200 p-8 text-center my-6 flex flex-col items-center justify-center">
                <div className="bg-emerald-500 text-white rounded-full p-2.5 mb-3">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <h4 className="font-heading font-bold text-sm uppercase tracking-wide mb-1">
                  Submission Successful
                </h4>
                <p className="font-sans text-[13px] text-emerald-700">
                  Your detailed packaging inquiry has been logged. Thank you!
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">Name</label>
                    <input
                      required
                      type="text"
                      className="w-full border border-slate-300 p-2 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                      value={quoteForm.name}
                      onChange={(e) => setQuoteForm({ ...quoteForm, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">Company</label>
                    <input
                      required
                      type="text"
                      className="w-full border border-slate-300 p-2 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                      value={quoteForm.company}
                      onChange={(e) => setQuoteForm({ ...quoteForm, company: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">Email</label>
                    <input
                      required
                      type="email"
                      className="w-full border border-slate-300 p-2 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                      value={quoteForm.email}
                      onChange={(e) => setQuoteForm({ ...quoteForm, email: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">Phone</label>
                    <input
                      required
                      type="tel"
                      className="w-full border border-slate-300 p-2 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                      value={quoteForm.phone}
                      onChange={(e) => setQuoteForm({ ...quoteForm, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">Primary Requirement</label>
                  <select
                    className="w-full border border-slate-300 p-2 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors bg-white"
                    value={quoteForm.requirement}
                    onChange={(e) => setQuoteForm({ ...quoteForm, requirement: e.target.value })}
                  >
                    <option>Pharma Mono Cartons</option>
                    <option>FMCG Packaging Boxes</option>
                    <option>Braille Embossed Cartons</option>
                    <option>Roll-fed Sticker Labels</option>
                    <option>Medical Instruction Inserts</option>
                    <option>Promotional Catalogs</option>
                    <option>Other Printing Service</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">Message / Specifications</label>
                  <textarea
                    required
                    rows={4}
                    className="w-full border border-slate-300 p-2 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-none"
                    placeholder="Include dimensions (L x W x H), board GSM, quantity required..."
                    value={quoteForm.message}
                    onChange={(e) => setQuoteForm({ ...quoteForm, message: e.target.value })}
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary-dark font-heading text-xs font-bold uppercase tracking-widest text-white py-4 transition-colors"
                  >
                    Submit Quotation Request
                  </button>
                  <p className="text-center text-[10px] text-slate-400 mt-3 font-sans">
                    By submitting, you agree to our privacy policy. Your data is strictly confidential.
                  </p>
                </div>
              </form>
            )}

          </div>
        </div>
      )}

    </div>
  );
}
