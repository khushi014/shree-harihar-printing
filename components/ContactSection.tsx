"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, CheckCircle, Send, ExternalLink } from "lucide-react";

const contactDetails = [
  {
    icon: MapPin,
    title: "Plant Address",
    lines: [
      "233/1, Miroli Village,",
      "Near Pirana Village, Daskroi,",
      "Ahmedabad – 382425, Gujarat",
    ],
    link: "https://maps.google.com/?q=Shree+Harihar+Printing+Works+LLP+Ahmedabad",
    linkText: "View on Google Maps"
  },
  {
    icon: Phone,
    title: "Phone",
    lines: ["(079) 22932863 / 22931311", "+91 74900 41921"],
    link: "tel:+917490041921",
    linkText: "Call Now"
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["info@hariharprintpack.com"],
    link: "mailto:info@hariharprintpack.com",
    linkText: "Send Email"
  }
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay },
  }),
};

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "", company: "", email: "", phone: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setForm({ name: "", company: "", email: "", phone: "", message: "" });
      }, 3500);
    }, 900);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white border-t border-slate-200">
      <div className="max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="flex flex-col items-center text-center mx-auto w-full max-w-4xl gap-6 mb-16 lg:mb-20">
          <motion.h2
            variants={fadeUp}
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="font-heading font-light text-[2.5rem] sm:text-[3.5rem] lg:text-[4.5rem] leading-[1.1] text-slate-900"
          >
            Get In{" "}
            <span className="relative inline-block font-normal">
              Touch
              <span className="absolute bottom-2 lg:bottom-4 left-0 w-full h-[4px] bg-primary"></span>
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            custom={0.15}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="font-sans text-[16px] sm:text-[18px] text-slate-600 leading-relaxed font-medium max-w-2xl"
          >
            Whether you need pharma packaging, FMCG cartons, or custom print solutions — our team is ready to help you bring your vision to life.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left: Contact Info */}
          <motion.div
            variants={fadeUp}
            custom={0.2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="col-span-1 lg:col-span-5 flex flex-col gap-8"
          >
            {contactDetails.map((item, idx) => (
              <div key={idx} className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  {item.lines.map((line, i) => (
                    <p key={i} className="font-sans text-slate-600 leading-relaxed">
                      {line}
                    </p>
                  ))}
                  <a
                    href={item.link}
                    target={item.icon === MapPin ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 mt-3 font-heading text-sm font-bold text-slate-900 border-b-2 border-slate-900 hover:text-primary hover:border-primary transition-colors uppercase tracking-wide pb-0.5"
                  >
                    {item.linkText} {item.icon === MapPin && <ExternalLink className="w-3 h-3 ml-0.5" />}
                  </a>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Right: The Form */}
          <motion.div
            variants={fadeUp}
            custom={0.3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="col-span-1 lg:col-span-7 relative"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-20 text-center h-full">
                <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-6">
                  <CheckCircle className="w-8 h-8 text-emerald-600" />
                </div>
                <h4 className="font-heading font-bold text-slate-900 text-2xl mb-3">
                  Message Received
                </h4>
                <p className="font-sans text-slate-600 max-w-sm">
                  Thank you for reaching out. Our team will respond within 24 business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="font-heading font-bold text-2xl text-slate-900 mb-8 border-b border-slate-200 pb-4">
                  Send us a message
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-heading text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Full Name <span className="text-primary">*</span>
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Rajesh Mehta"
                      className="w-full bg-transparent border-b-2 border-slate-300 px-0 py-3 text-base font-sans text-slate-900 placeholder:text-slate-400 focus:border-primary focus:ring-0 outline-none transition-colors"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block font-heading text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Sun Pharma Ltd."
                      className="w-full bg-transparent border-b-2 border-slate-300 px-0 py-3 text-base font-sans text-slate-900 placeholder:text-slate-400 focus:border-primary focus:ring-0 outline-none transition-colors"
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-heading text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Email address <span className="text-primary">*</span>
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="you@company.com"
                      className="w-full bg-transparent border-b-2 border-slate-300 px-0 py-3 text-base font-sans text-slate-900 placeholder:text-slate-400 focus:border-primary focus:ring-0 outline-none transition-colors"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block font-heading text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      className="w-full bg-transparent border-b-2 border-slate-300 px-0 py-3 text-base font-sans text-slate-900 placeholder:text-slate-400 focus:border-primary focus:ring-0 outline-none transition-colors"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-heading text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Message / Requirements <span className="text-primary">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us about your packaging requirements, quantities..."
                    className="w-full bg-transparent border-b-2 border-slate-300 px-0 py-3 text-base font-sans text-slate-900 placeholder:text-slate-400 focus:border-primary focus:ring-0 outline-none transition-colors resize-none"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-slate-900 hover:bg-primary text-white font-heading text-sm font-bold uppercase tracking-widest px-8 py-4 flex items-center justify-center gap-2 transition-colors disabled:opacity-70"
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
          </motion.div>

        </div>
      </div>
    </section>
  );
}
