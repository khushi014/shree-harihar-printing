"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function HeroSection() {
  const [heroSlide, setHeroSlide] = useState(0);

  const heroSlides = [
    {
      image: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&q=80&w=1920",
      align: "left",
      preTitle: "High-Volume B2B",
      title: "Precision Packaging",
      desc: "State-of-the-art mono cartons and corrugated solutions designed for automated pharmaceutical and FMCG cartoning lines.",
      cta: "Explore Services!",
      action: "#capabilities"
    },
    {
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1920",
      align: "right",
      preTitle: "Breathing life",
      title: "into your print",
      desc: "Absolute color consistency, faster turnarounds, and robust structural designs to elevate your brand presence globally.",
      cta: "Contact Us!",
      action: "#contact"
    },
    {
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1920",
      align: "left",
      preTitle: "Uncompromised",
      title: "Quality Control",
      desc: "100% digital vision inspection ensuring zero-defect production in highly regulated industry packaging requirements.",
      cta: "View Infrastructure",
      action: "#infrastructure"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  return (
    <section className="relative h-[90vh] min-h-[600px] w-full bg-slate-950 text-white overflow-hidden group">
      
      {/* Slides */}
      {heroSlides.map((slide, index) => (
        <div 
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === heroSlide ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
          }`}
        >
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img 
              src={slide.image} 
              alt={slide.title} 
              className="w-full h-full object-cover transform transition-transform duration-[10000ms] scale-100 group-hover:scale-105"
            />
            {/* Premium dark tint overlay - directional based on alignment */}
            <div 
              className={`absolute inset-0 ${
                slide.align === "left" 
                  ? "bg-linear-to-r from-black/90 via-black/60 to-black/30" 
                  : "bg-gradient-to-l from-black/90 via-black/60 to-black/30"
              }`} 
            />
          </div>

          {/* Content Container */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full relative z-10 flex items-center">
            <div className={`w-full grid grid-cols-1 lg:grid-cols-2 gap-8 ${slide.align === "right" ? "direction-rtl" : ""}`}>
              
              {/* Text Block */}
              <div 
                className={`flex flex-col justify-center ${
                  slide.align === "left" 
                    ? "lg:col-start-1 text-left" 
                    : "lg:col-start-2 text-left lg:pl-12"
                } transform transition-all duration-1000 ${
                  index === heroSlide ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: '300ms' }}
              >
                <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-light text-white mb-2 tracking-wide leading-tight">
                  {slide.preTitle}
                </h2>
                <h1 className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-primary tracking-tight leading-none mb-6">
                  {slide.title}
                </h1>
                
                <div className="flex gap-4 items-center">
                  {slide.align === "left" && (
                    <div className="w-px h-20 bg-slate-500/50 hidden sm:block"></div>
                  )}
                  <p className={`font-sans text-slate-300 text-sm sm:text-base lg:text-lg font-light leading-relaxed max-w-lg ${slide.align === "left" ? "py-2" : ""}`}>
                    {slide.desc}
                  </p>
                </div>

                <div className="mt-10">
                  <a
                    href={slide.action}
                    className="inline-block bg-primary hover:bg-primary-dark font-heading text-sm font-bold text-white px-8 py-4 tracking-wider rounded-full uppercase transition-all duration-200 shadow-xl shadow-primary/20"
                  >
                    {slide.cta}
                  </a>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button 
        onClick={() => setHeroSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1))}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 text-white/50 hover:text-white transition-colors p-2"
      >
        <ChevronLeft className="h-10 w-10 sm:h-12 sm:w-12" />
      </button>
      <button 
        onClick={() => setHeroSlide((prev) => (prev + 1) % heroSlides.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 text-white/50 hover:text-white transition-colors p-2"
      >
        <ChevronRight className="h-10 w-10 sm:h-12 sm:w-12" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {heroSlides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setHeroSlide(idx)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              heroSlide === idx ? "bg-primary w-8" : "bg-white/50 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
