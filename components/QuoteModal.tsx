"use client";

import React, { useState } from "react";
import { X, ClipboardList, CheckCircle } from "lucide-react";

export default function QuoteModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const [quoteForm, setQuoteForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    requirement: "Pharma Mono Cartons",
    message: ""
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      onClose();
    }, 3000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in">
      <div className="bg-white border-t-4 border-primary p-6 sm:p-8 w-full max-w-xl shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-primary focus:outline-none transition-colors"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="mb-6">
          <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-slate-900 mb-1 flex items-center gap-2">
            <ClipboardList className="text-primary h-6 w-6" />
            Request a Custom Quote
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
              Your detailed inquiry has been logged. Thank you!
            </p>
          </div>
        ) : (
          <form onSubmit={handleFormSubmit} className="space-y-4 text-left">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">Name</label>
                <input required type="text" className="w-full bg-white border border-slate-300 p-2 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-slate-900" value={quoteForm.name} onChange={(e) => setQuoteForm({ ...quoteForm, name: e.target.value })} />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">Company</label>
                <input required type="text" className="w-full bg-white border border-slate-300 p-2 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-slate-900" value={quoteForm.company} onChange={(e) => setQuoteForm({ ...quoteForm, company: e.target.value })} />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">Email</label>
                <input required type="email" className="w-full bg-white border border-slate-300 p-2 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-slate-900" value={quoteForm.email} onChange={(e) => setQuoteForm({ ...quoteForm, email: e.target.value })} />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">Phone</label>
                <input required type="tel" className="w-full bg-white border border-slate-300 p-2 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-slate-900" value={quoteForm.phone} onChange={(e) => setQuoteForm({ ...quoteForm, phone: e.target.value })} />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">Primary Requirement</label>
              <select className="w-full border border-slate-300 p-2 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors bg-white text-slate-900" value={quoteForm.requirement} onChange={(e) => setQuoteForm({ ...quoteForm, requirement: e.target.value })}>
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
              <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">Message / Specs</label>
              <textarea required rows={4} className="w-full bg-white border border-slate-300 p-2 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-none text-slate-900" placeholder="Include dimensions (L x W x H), board GSM, quantity required..." value={quoteForm.message} onChange={(e) => setQuoteForm({ ...quoteForm, message: e.target.value })}></textarea>
            </div>

            <div className="pt-2">
              <button type="submit" className="w-full bg-primary hover:bg-primary-dark font-heading text-xs font-bold uppercase tracking-widest text-white py-4 transition-colors">
                Submit Quotation Request
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
