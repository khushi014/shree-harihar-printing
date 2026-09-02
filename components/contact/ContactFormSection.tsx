"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function ContactFormSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // integrate with backend here
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white p-8 sm:p-10 border border-slate-200 shadow-sm relative h-full flex flex-col"
    >
      <h2 className="font-heading font-light text-3xl text-slate-900 mb-4">
        Request a <span className="font-bold relative inline-block text-primary">Quote</span>
      </h2>
      <p className="font-sans text-slate-600 mb-8">
        Tell us a bit about what you need, and we'll get back to you with a quote; usually within 24 hours.
      </p>

      {isSubmitted ? (
        <div className="flex-1 flex flex-col items-center justify-center text-center p-8 bg-slate-50 border border-slate-100">
          <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
            <CheckCircle2 className="w-8 h-8 text-emerald-600" />
          </div>
          <h3 className="font-heading font-bold text-2xl text-slate-900 mb-2">Request Received</h3>
          <p className="font-sans text-slate-600">
            Thank you for reaching out. A member of our team will review your requirements and get back to you within 24 hours.
          </p>
          <button 
            onClick={() => setIsSubmitted(false)}
            className="mt-8 font-heading text-sm font-bold uppercase tracking-widest text-primary border-b-2 border-primary pb-1 hover:text-slate-900 hover:border-slate-900 transition-colors"
          >
            Submit Another Request
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex-1 flex flex-col space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="contact_name" className="sr-only">Name</label>
              <input 
                id="contact_name"
                name="name" 
                type="text" 
                required 
                placeholder="Name" 
                className="w-full bg-transparent border-b border-slate-300 py-3 text-slate-900 focus:outline-none focus:border-primary transition-colors font-sans placeholder:text-slate-400"
              />
            </div>
            <div>
              <label htmlFor="contact_company" className="sr-only">Company Name</label>
              <input 
                id="contact_company"
                name="company" 
                type="text" 
                required 
                placeholder="Company Name" 
                className="w-full bg-transparent border-b border-slate-300 py-3 text-slate-900 focus:outline-none focus:border-primary transition-colors font-sans placeholder:text-slate-400"
              />
            </div>
          </div>

          <div>
             <label htmlFor="contact_industry" className="sr-only">Industry</label>
             <select 
               id="contact_industry"
               name="industry"
               required
               className="w-full bg-transparent border-b border-slate-300 py-3 text-slate-900 focus:outline-none focus:border-primary transition-colors font-sans"
             >
                <option value="" disabled selected>Select Industry</option>
                <option value="Pharmaceutical">Pharmaceutical</option>
                <option value="FMCG & Personal Care">FMCG & Personal Care</option>
                <option value="Food & Beverage">Food & Beverage</option>
                <option value="Nutraceutical">Nutraceutical</option>
                <option value="Other">Other</option>
             </select>
          </div>

          <div>
             <label htmlFor="contact_product_type" className="sr-only">Product Type</label>
             <select 
               id="contact_product_type"
               name="product_type"
               required
               className="w-full bg-transparent border-b border-slate-300 py-3 text-slate-900 focus:outline-none focus:border-primary transition-colors font-sans"
             >
                <option value="" disabled selected>Select Product Type</option>
                <option value="Carton">Carton</option>
                <option value="Sticker & Label">Sticker & Label</option>
                <option value="Promotional Material">Promotional Material</option>
                <option value="Not Sure">Not Sure</option>
             </select>
          </div>

          <div>
            <label htmlFor="contact_quantity" className="sr-only">Estimated Quantity</label>
            <input 
              id="contact_quantity"
              name="quantity" 
              type="text" 
              placeholder="Estimated Quantity" 
              className="w-full bg-transparent border-b border-slate-300 py-3 text-slate-900 focus:outline-none focus:border-primary transition-colors font-sans placeholder:text-slate-400"
            />
          </div>

          <div className="flex-1">
            <label htmlFor="contact_message" className="sr-only">Message / Requirements</label>
            <textarea 
              id="contact_message"
              name="message" 
              rows={4} 
              required 
              placeholder="Message / Requirements" 
              className="w-full h-full min-h-[120px] bg-transparent border-b border-slate-300 py-3 text-slate-900 focus:outline-none focus:border-primary transition-colors font-sans placeholder:text-slate-400 resize-none"
            ></textarea>
          </div>

          <button 
            type="submit" 
            className="w-full bg-slate-900 hover:bg-primary text-white font-heading text-sm font-bold tracking-widest uppercase py-4 transition-colors flex items-center justify-center gap-2 group mt-2"
          >
            Submit Request <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </form>
      )}
    </motion.div>
  );
}
