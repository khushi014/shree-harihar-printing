"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";

export default function ContactFormSection() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setForm({ name: "", company: "", email: "", phone: "", message: "" });
      }, 3500);
    }, 800);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white p-8 sm:p-10 border border-slate-200 shadow-sm relative h-full flex flex-col rounded-xl"
    >
      <div className="mb-8">
        <h2 className="font-heading font-light text-3xl sm:text-4xl text-slate-900 mb-3">
          Get In <span className="font-bold text-primary">Touch</span>
        </h2>
        <p className="font-sans text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
          Whether you need pharma packaging, FMCG cartons, or custom print solutions - our team is ready to help you bring your vision to life.
        </p>
      </div>

      {isSubmitted ? (
        <div className="flex-1 flex flex-col items-center justify-center text-center p-8 bg-slate-50 border border-slate-100 rounded-lg">
          <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
            <CheckCircle2 className="w-8 h-8 text-emerald-600" />
          </div>
          <h3 className="font-heading font-bold text-2xl text-slate-900 mb-2">Message Received</h3>
          <p className="font-sans text-slate-600 max-w-sm">
            Thank you for reaching out. Our team will review your requirements and respond within 24 business hours.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="mt-8 font-heading text-xs font-bold uppercase tracking-widest text-primary border-b-2 border-primary pb-1 hover:text-slate-900 hover:border-slate-900 transition-colors"
          >
            Submit Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex-1 flex flex-col space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block font-heading text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                Full Name <span className="text-primary">*</span>
              </label>
              <input
                name="name"
                type="text"
                required
                placeholder="e.g. Rajesh Mehta"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-transparent border-b-2 border-slate-300 px-0 py-3 text-base font-sans text-slate-900 placeholder:text-slate-400 focus:border-primary focus:ring-0 outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block font-heading text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                Company
              </label>
              <input
                name="company"
                type="text"
                placeholder="e.g. Sun Pharma Ltd."
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
                className="w-full bg-transparent border-b-2 border-slate-300 px-0 py-3 text-base font-sans text-slate-900 placeholder:text-slate-400 focus:border-primary focus:ring-0 outline-none transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block font-heading text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                Email address <span className="text-primary">*</span>
              </label>
              <input
                name="email"
                type="email"
                required
                placeholder="you@company.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-transparent border-b-2 border-slate-300 px-0 py-3 text-base font-sans text-slate-900 placeholder:text-slate-400 focus:border-primary focus:ring-0 outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block font-heading text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                Phone Number
              </label>
              <input
                name="phone"
                type="tel"
                placeholder="+91 98765 43210"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full bg-transparent border-b-2 border-slate-300 px-0 py-3 text-base font-sans text-slate-900 placeholder:text-slate-400 focus:border-primary focus:ring-0 outline-none transition-colors"
              />
            </div>
          </div>

          <div className="flex-1">
            <label className="block font-heading text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              Message / Requirements <span className="text-primary">*</span>
            </label>
            <textarea
              name="message"
              rows={4}
              required
              placeholder="Tell us about your packaging requirements, quantities..."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full h-full min-h-[120px] bg-transparent border-b-2 border-slate-300 px-0 py-3 text-base font-sans text-slate-900 placeholder:text-slate-400 focus:border-primary focus:ring-0 outline-none transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-slate-900 hover:bg-primary text-white font-heading text-sm font-bold tracking-widest uppercase py-4 transition-colors flex items-center justify-center gap-2 group mt-2 disabled:opacity-70 cursor-pointer"
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
        </form>
      )}
    </motion.div>
  );
}
