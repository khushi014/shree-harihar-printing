"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, CheckCircle, Send, ExternalLink } from "lucide-react";

const contactDetails = [
  {
    icon: MapPin,
    title: "Plant Address",
    lines: [
      "Shree Harihar Printing Works LLP,",
      "233/1, Miroli Village,",
      "Pirana to Miroli Village Road,",
      "Daskroi, Ahmedabad - 382425"
    ],
    link: "https://maps.app.goo.gl/qGWnabWtRckAr3u78",
    linkText: "View on Google Maps"
  },
  {
    icon: Phone,
    title: "Phone",
    lines: ["+91 98251 21164", "+91 98250 92058"],
    link: "tel:+919825121164",
    linkText: "Call Now"
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["office.hpw@gmail.com"],
    link: "mailto:office.hpw@gmail.com",
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

export default function ContactSection({ dark = false }: { dark?: boolean }) {
  const [form, setForm] = useState({
    name: "", company: "", email: "", phone: "", industry: "", productNeeded: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbyzUouMy29QPL5JcxXVMRcQG39SX4k1URahH_Pqz1nFzw6KotdSyFKo1UsRHGOOBP0EyA/exec";

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let raw = e.target.value.replace(/\D/g, "");

    // If pasted with leading 91 or 0, strip it if remainder begins with 6-9
    if (raw.startsWith("91") && raw.length > 10 && /^[6-9]/.test(raw.slice(2))) {
      raw = raw.slice(2);
    } else if (raw.startsWith("0") && raw.length > 10 && /^[6-9]/.test(raw.slice(1))) {
      raw = raw.slice(1);
    }

    if (raw.length > 0) {
      // First digit can be 6 to 9 only
      if (!/^[6-9]/.test(raw)) {
        return;
      }
      // Enforce 10 digits max
      raw = raw.slice(0, 10);
    }

    setForm((prev) => ({ ...prev, phone: raw }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.phone || !/^[6-9]\d{9}$/.test(form.phone)) {
      setError("Please enter a valid 10-digit mobile number starting with 6, 7, 8, or 9.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const formData = new URLSearchParams();
      formData.append("name", form.name);
      formData.append("company", form.company || "—");
      formData.append("email", form.email);
      formData.append("phone", `+91${form.phone}`);
      if (form.industry) formData.append("industry", form.industry);
      if (form.productNeeded) formData.append("productNeeded", form.productNeeded);

      const metaInfo: string[] = [];
      if (form.industry) metaInfo.push(`[Industry: ${form.industry}]`);
      if (form.productNeeded) metaInfo.push(`[Product: ${form.productNeeded}]`);
      const compiledMessage = metaInfo.length > 0
        ? `${metaInfo.join(" ")}\n\n${form.message}`
        : form.message;

      formData.append("message", compiledMessage);
      formData.append(
        "submittedAt",
        new Date().toLocaleString("en-IN", {
          timeZone: "Asia/Kolkata",
        })
      );

      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
        body: formData.toString(),
      });

      setSubmitted(true);
      // alert("Form submitted successfully. We will get back to you soon!");
      setForm({ name: "", company: "", email: "", phone: "", industry: "", productNeeded: "", message: "" });
    } catch (err) {
      console.error("FORM SUBMISSION ERROR:", err);
      setError("Unable to submit enquiry. Please try again or reach out directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className={`py-20 lg:py-28 border-t transition-colors ${dark
        ? "bg-slate-900 border-slate-800 text-white"
        : "bg-white border-slate-200 text-slate-800"
        }`}
    >
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Block */}
        <div className="flex flex-col items-center text-center mx-auto w-full max-w-4xl gap-6 mb-16 lg:mb-20">
          <motion.h2
            variants={fadeUp}
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className={`font-heading font-light text-3xl sm:text-4xl lg:text-5xl leading-tight ${dark ? "text-white" : "text-slate-900"
              }`}
          >
            Get In <span className="font-bold text-primary">Touch</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            custom={0.15}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className={`font-sans text-[16px] sm:text-[18px] leading-relaxed font-medium max-w-2xl ${dark ? "text-slate-300" : "text-slate-600"
              }`}
          >
            Whether you need pharma packaging, FMCG cartons, or custom print solutions - our team is ready to help you bring your vision to life.
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
                <div
                  className={`w-12 h-12 rounded-full border flex items-center justify-center shrink-0 ${dark
                    ? "bg-slate-800/80 border-slate-700 text-primary"
                    : "bg-slate-50 border-slate-200 text-primary"
                    }`}
                >
                  <item.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3
                    className={`font-heading font-bold text-lg mb-2 ${dark ? "text-white" : "text-slate-900"
                      }`}
                  >
                    {item.title}
                  </h3>
                  {item.lines.map((line, i) => (
                    <p
                      key={i}
                      className={`font-sans leading-relaxed ${dark ? "text-slate-300" : "text-slate-600"
                        }`}
                    >
                      {line}
                    </p>
                  ))}
                  <a
                    href={item.link}
                    target={item.icon === MapPin ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1 mt-3 font-heading text-sm font-bold border-b-2 hover:text-primary hover:border-primary transition-colors uppercase tracking-wide pb-0.5 ${dark
                      ? "text-white border-slate-400"
                      : "text-slate-900 border-slate-900"
                      }`}
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
                <h4
                  className={`font-heading font-bold text-2xl mb-3 ${dark ? "text-white" : "text-slate-900"
                    }`}
                >
                  Message Received
                </h4>
                <p
                  className={`font-sans max-w-sm ${dark ? "text-slate-300" : "text-slate-600"
                    }`}
                >
                  Thank you for reaching out. Our team will respond within 24 business hours.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-6 font-heading text-xs font-bold uppercase tracking-widest text-primary border-b-2 border-primary pb-1 hover:text-slate-900 hover:border-slate-900 transition-colors cursor-pointer"
                >
                  Submit Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3
                  className={`font-heading font-light text-2xl sm:text-3xl mb-6 ${dark ? "text-white" : "text-slate-900"
                    }`}
                >
                  Send Us a <span className="font-bold text-primary">Message</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      className={`block font-heading text-xs font-bold uppercase tracking-wider mb-2 ${dark ? "text-slate-300" : "text-slate-700"
                        }`}
                    >
                      Full Name <span className="text-primary">*</span>
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Rajesh Mehta"
                      className={`w-full bg-transparent border-b-2 px-0 py-3 text-base font-sans focus:border-primary focus:ring-0 outline-none transition-colors ${dark
                        ? "border-slate-700 text-white placeholder:text-slate-500"
                        : "border-slate-300 text-slate-900 placeholder:text-slate-400"
                        }`}
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label
                      className={`block font-heading text-xs font-bold uppercase tracking-wider mb-2 ${dark ? "text-slate-300" : "text-slate-700"
                        }`}
                    >
                      Company
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Sun Pharma Ltd."
                      className={`w-full bg-transparent border-b-2 px-0 py-3 text-base font-sans focus:border-primary focus:ring-0 outline-none transition-colors ${dark
                        ? "border-slate-700 text-white placeholder:text-slate-500"
                        : "border-slate-300 text-slate-900 placeholder:text-slate-400"
                        }`}
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      className={`block font-heading text-xs font-bold uppercase tracking-wider mb-2 ${dark ? "text-slate-300" : "text-slate-700"
                        }`}
                    >
                      Email address <span className="text-primary">*</span>
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="you@company.com"
                      className={`w-full bg-transparent border-b-2 px-0 py-3 text-base font-sans focus:border-primary focus:ring-0 outline-none transition-colors ${dark
                        ? "border-slate-700 text-white placeholder:text-slate-500"
                        : "border-slate-300 text-slate-900 placeholder:text-slate-400"
                        }`}
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </div>
                  <div>
                    <label
                      className={`block font-heading text-xs font-bold uppercase tracking-wider mb-2 ${dark ? "text-slate-300" : "text-slate-700"
                        }`}
                    >
                      Phone Number <span className="text-primary">*</span>
                    </label>
                    <div
                      className={`flex items-center border-b-2 transition-colors ${dark
                        ? "border-slate-700 focus-within:border-primary"
                        : "border-slate-300 focus-within:border-primary"
                        }`}
                    >
                      <span
                        className={`font-sans font-semibold text-base py-3 pr-2.5 select-none shrink-0 ${dark ? "text-slate-400" : "text-slate-500"
                          }`}
                      >
                        +91
                      </span>
                      <input
                        required
                        type="tel"
                        inputMode="numeric"
                        pattern="[6-9][0-9]{9}"
                        maxLength={10}
                        placeholder="9876543210"
                        className={`w-full bg-transparent py-3 px-0 text-base font-sans focus:outline-none tracking-wide ${dark
                          ? "text-white placeholder:text-slate-500"
                          : "text-slate-900 placeholder:text-slate-400"
                          }`}
                        value={form.phone}
                        onChange={handlePhoneChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      className={`block font-heading text-xs font-bold uppercase tracking-wider mb-2 ${dark ? "text-slate-300" : "text-slate-700"
                        }`}
                    >
                      Industry
                    </label>
                    <select
                      className={`w-full bg-transparent border-b-2 px-0 py-3 text-base font-sans focus:border-primary focus:ring-0 outline-none transition-colors cursor-pointer ${dark
                        ? "border-slate-700 text-white [&>option]:bg-slate-900 [&>option]:text-white"
                        : "border-slate-300 text-slate-900 [&>option]:bg-white [&>option]:text-slate-900"
                        }`}
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
                    <label
                      className={`block font-heading text-xs font-bold uppercase tracking-wider mb-2 ${dark ? "text-slate-300" : "text-slate-700"
                        }`}
                    >
                      Product Needed
                    </label>
                    <select
                      className={`w-full bg-transparent border-b-2 px-0 py-3 text-base font-sans focus:border-primary focus:ring-0 outline-none transition-colors cursor-pointer ${dark
                        ? "border-slate-700 text-white [&>option]:bg-slate-900 [&>option]:text-white"
                        : "border-slate-300 text-slate-900 [&>option]:bg-white [&>option]:text-slate-900"
                        }`}
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
                  <label
                    className={`block font-heading text-xs font-bold uppercase tracking-wider mb-2 ${dark ? "text-slate-300" : "text-slate-700"
                      }`}
                  >
                    Project Details / Requirement <span className="text-primary">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us about carton specifications, quantities, dimensions, or timelines..."
                    className={`w-full bg-transparent border-b-2 px-0 py-3 text-base font-sans focus:border-primary focus:ring-0 outline-none transition-colors resize-none ${dark
                      ? "border-slate-700 text-white placeholder:text-slate-500"
                      : "border-slate-300 text-slate-900 placeholder:text-slate-400"
                      }`}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                </div>

                {error && (
                  <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
                    ⚠ {error}
                  </p>
                )}

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4">
                  <span
                    className={`text-xs font-sans ${dark ? "text-slate-400" : "text-slate-500"
                      }`}
                  >
                    We respect your privacy. All artwork &amp; project specifications remain strictly confidential.
                  </span>
                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-heading font-bold text-xs uppercase tracking-widest transition-all duration-300 shrink-0 cursor-pointer shadow-lg hover:shadow-primary/30 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                        </svg>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
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
