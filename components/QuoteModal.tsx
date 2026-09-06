"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, CheckCircle, Send } from "lucide-react";

export default function QuoteModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    industry: "",
    productNeeded: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setForm({ name: "", company: "", email: "", phone: "", industry: "", productNeeded: "", message: "" });
        onClose();
      }, 2500);
    }, 700);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div className="bg-white border-t-4 border-primary p-6 sm:p-8 w-full max-w-xl shadow-2xl relative rounded-2xl my-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-primary hover:bg-slate-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Header Block matching Home Page Contact Form */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-1.5 bg-slate-50 border border-slate-200 rounded-lg">
              <Image
                src="/squareLogo.png"
                alt="Shree Harihar Logo Mark"
                width={32}
                height={32}
                className="h-7 w-7 object-contain"
              />
            </div>
            <h3 className="font-heading font-light text-2xl sm:text-3xl text-slate-900">
              Get In <span className="font-bold text-primary">Touch</span>
            </h3>
          </div>
          <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
            Whether you need pharma packaging, FMCG cartons, or custom print solutions - our team is ready to help you bring your vision to life.
          </p>
        </div>

        {submitted ? (
          <div className="bg-emerald-50 text-emerald-800 border border-emerald-200 p-8 text-center my-6 rounded-xl flex flex-col items-center justify-center">
            <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
              <CheckCircle className="w-8 h-8 text-emerald-600" />
            </div>
            <h4 className="font-heading font-bold text-slate-900 text-xl mb-2">
              Message Received
            </h4>
            <p className="font-sans text-xs sm:text-sm text-slate-600 max-w-sm">
              Thank you for reaching out. Our team will respond within 24 business hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-heading text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Full Name <span className="text-primary">*</span>
                </label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Rajesh Mehta"
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 text-sm font-sans text-slate-900 placeholder:text-slate-400 focus:border-primary focus:bg-white focus:ring-1 focus:ring-primary outline-none transition-all"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>
              <div>
                <label className="block font-heading text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Company
                </label>
                <input
                  type="text"
                  placeholder="e.g. Sun Pharma Ltd."
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 text-sm font-sans text-slate-900 placeholder:text-slate-400 focus:border-primary focus:bg-white focus:ring-1 focus:ring-primary outline-none transition-all"
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-heading text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Email address <span className="text-primary">*</span>
                </label>
                <input
                  required
                  type="email"
                  placeholder="you@company.com"
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 text-sm font-sans text-slate-900 placeholder:text-slate-400 focus:border-primary focus:bg-white focus:ring-1 focus:ring-primary outline-none transition-all"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>
              <div>
                <label className="block font-heading text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="+91 98765 43210"
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 text-sm font-sans text-slate-900 placeholder:text-slate-400 focus:border-primary focus:bg-white focus:ring-1 focus:ring-primary outline-none transition-all"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-heading text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Industry
                </label>
                <select
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 text-sm font-sans text-slate-900 focus:border-primary focus:bg-white focus:ring-1 focus:ring-primary outline-none transition-all cursor-pointer"
                  value={form.industry}
                  onChange={(e) => setForm({ ...form, industry: e.target.value })}
                >
                  <option value="">Select Industry</option>
                  <option value="Pharmaceutical">Pharmaceutical</option>
                  <option value="FMCG & Personal Care">FMCG &amp; Personal Care</option>
                  <option value="Food & Beverage">Food &amp; Beverage</option>
                  <option value="Nutraceuticals">Nutraceuticals</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label className="block font-heading text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Product Needed
                </label>
                <select
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 text-sm font-sans text-slate-900 focus:border-primary focus:bg-white focus:ring-1 focus:ring-primary outline-none transition-all cursor-pointer"
                  value={form.productNeeded}
                  onChange={(e) => setForm({ ...form, productNeeded: e.target.value })}
                >
                  <option value="">Select Product Needed</option>
                  <option value="Carton Packaging">Carton Packaging</option>
                  <option value="Sticker & Label">Sticker &amp; Label</option>
                  <option value="Promotional Print">Promotional Print</option>
                  <option value="Not Sure">Not Sure</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block font-heading text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                Message / Requirements
              </label>
              <textarea
                rows={3}
                placeholder="Tell us about your packaging requirements, quantities..."
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 text-sm font-sans text-slate-900 placeholder:text-slate-400 focus:border-primary focus:bg-white focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-slate-900 hover:bg-primary text-white font-heading text-xs font-bold uppercase tracking-widest py-3.5 rounded-lg flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg disabled:opacity-70 cursor-pointer"
              >
                {loading ? (
                  <>
                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Submit Enquiry
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
