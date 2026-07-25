"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, ExternalLink, Send, CheckCircle } from "lucide-react";

const contactDetails = [
  {
    icon: MapPin,
    label: "Plant Address",
    lines: [
      "233/1, Miroli Village,",
      "Near Pirana Village, Daskroi,",
      "Ahmedabad – 382425, Gujarat, India",
    ],
    href: "https://maps.google.com/?q=233/1+Miroli+Village+Ahmedabad",
    linkText: "View on Maps",
  },
  {
    icon: Phone,
    label: "Phone",
    lines: ["(079) 22932863 / 22931311", "+91 74900 41921"],
    href: "tel:+917490041921",
    linkText: "Call Now",
  },
  {
    icon: Mail,
    label: "Email",
    lines: ["info@hariharprintpack.com"],
    href: "mailto:info@hariharprintpack.com",
    linkText: "Send Email",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay },
  }),
};

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
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
    <section id="contact" className="bg-white relative overflow-hidden">

      <div className="grid grid-cols-1 lg:grid-cols-2">

        {/* ── Left: Dark panel with contact info ── */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] as [number, number, number, number] }}
          className="bg-[#1E1E1E] py-20 lg:py-28 flex flex-col justify-between"
        >
          <div className="max-w-lg ml-auto w-full px-8 sm:px-14 lg:pr-16">

            {/* Section label + heading */}
            <div className="mb-12">
              <motion.span
                variants={fadeUp}
                custom={0.1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="font-heading text-xs font-bold uppercase tracking-[0.25em] text-primary block mb-4"
              >
                Get In Touch
              </motion.span>
              <motion.h2
                variants={fadeUp}
                custom={0.2}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="font-heading text-[2rem] sm:text-[2.75rem] lg:text-[3rem] leading-[1.1] text-white mb-6"
              >
                Let&apos;s talk about{" "}
                <span className="relative inline-block">
                  your project
                  <span className="absolute -bottom-1 left-0 w-full h-0.75 bg-primary" />
                </span>
              </motion.h2>
              <motion.p
                variants={fadeUp}
                custom={0.3}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="font-sans text-sm text-slate-400 leading-relaxed max-w-sm"
              >
                Whether you need pharma packaging, FMCG cartons, or custom print solutions — our team is ready to help you bring your vision to life.
              </motion.p>
            </div>

            {/* Contact detail cards */}
            <div className="space-y-8">
              {contactDetails.map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  custom={0.35 + idx * 0.1}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-heading text-[11px] font-bold uppercase tracking-widest text-slate-500 mb-1">
                      {item.label}
                    </p>
                    {item.lines.map((line, i) => (
                      <p key={i} className="font-sans text-sm text-slate-300 leading-relaxed">
                        {line}
                      </p>
                    ))}
                    <a
                      href={item.href}
                      target={item.icon === ExternalLink ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="font-heading text-[11px] font-bold uppercase tracking-wider text-primary hover:text-primary-light transition-colors inline-flex items-center gap-1 mt-1.5"
                    >
                      {item.linkText} →
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </motion.div>

        {/* ── Right: White form panel ── */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] as [number, number, number, number], delay: 0.1 }}
          className="bg-white py-20 lg:py-28"
        >
          <div className="max-w-lg mr-auto w-full px-8 sm:px-14 lg:pl-16">

            <motion.h3
              variants={fadeUp}
              custom={0.2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 mb-2"
            >
              Send us a message
            </motion.h3>
            <motion.p
              variants={fadeUp}
              custom={0.3}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="font-sans text-sm text-slate-500 mb-8 leading-relaxed"
            >
              Fill in your details and we&apos;ll get back to you within 24 business hours.
            </motion.p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center justify-center py-16 text-center"
              >
                <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center mb-4">
                  <CheckCircle className="w-7 h-7 text-emerald-500" />
                </div>
                <h4 className="font-heading font-bold text-slate-900 text-lg mb-2">
                  Message Received!
                </h4>
                <p className="font-sans text-sm text-slate-500 max-w-xs">
                  Thank you for reaching out. Our team will respond within 24 business hours.
                </p>
              </motion.div>
            ) : (
              <motion.form
                variants={fadeUp}
                custom={0.35}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                onSubmit={handleSubmit}
                className="space-y-5"
              >

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-heading text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Full Name <span className="text-primary">*</span>
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Rajesh Mehta"
                      className="w-full border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-sans text-slate-800 placeholder:text-slate-400 focus:border-primary focus:bg-white focus:ring-1 focus:ring-primary outline-none transition-all"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block font-heading text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Company
                    </label>
                    <input
                      type="text"
                      placeholder="Sun Pharma Ltd."
                      className="w-full border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-sans text-slate-800 placeholder:text-slate-400 focus:border-primary focus:bg-white focus:ring-1 focus:ring-primary outline-none transition-all"
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-heading text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Email <span className="text-primary">*</span>
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="you@company.com"
                      className="w-full border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-sans text-slate-800 placeholder:text-slate-400 focus:border-primary focus:bg-white focus:ring-1 focus:ring-primary outline-none transition-all"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block font-heading text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Phone
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      className="w-full border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-sans text-slate-800 placeholder:text-slate-400 focus:border-primary focus:bg-white focus:ring-1 focus:ring-primary outline-none transition-all"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-heading text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Message / Requirements <span className="text-primary">*</span>
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell us about your packaging requirements, quantities, dimensions..."
                    className="w-full border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-sans text-slate-800 placeholder:text-slate-400 focus:border-primary focus:bg-white focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-primary hover:bg-primary-dark text-white font-heading text-xs font-bold uppercase tracking-widest py-4 flex items-center justify-center gap-2 transition-colors disabled:opacity-70"
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
                      Send Message
                    </>
                  )}
                </button>

                <p className="text-center font-sans text-[10px] text-slate-400 mt-2">
                  Your information is kept strictly confidential and never shared.
                </p>
              </motion.form>
            )}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
