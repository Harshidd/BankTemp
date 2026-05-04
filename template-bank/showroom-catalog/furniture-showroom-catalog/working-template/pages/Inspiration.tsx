"use client";

import React from 'react';
import { ArrowRight, MoveUpRight, Compass, Sparkles } from 'lucide-react';

interface InspirationProps {
  onPageChange?: (page: string) => void;
}

export default function Inspiration({ onPageChange }: InspirationProps) {
  const handleNavigation = (page: string) => {
    if (onPageChange) {
      onPageChange(page);
    }
  };

  const projects = [
    {
      id: 'villa-bodrum',
      title: 'Summer Villa in Bodrum',
      description: 'Airy linen shades, light oak woods, and bespoke stone coffee tables creating visual breathing room.',
      location: 'Bodrum, Turkey',
      family: 'Nordic Calm'
    },
    {
      id: 'apart-levent',
      title: 'Modern Penthouse Levent',
      description: 'Deep modular leather sofas paired with monolithic dark-toned media storage cabinetry.',
      location: 'Istanbul, Turkey',
      family: 'Urban Loft'
    },
    {
      id: 'house-moda',
      title: 'Waterfront House Moda',
      description: 'Historical elements blended with premium modern dining frameworks and brass lights.',
      location: 'Istanbul, Turkey',
      family: 'The Metropolitan'
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-[#FAF9F6] text-slate-900 font-sans min-h-screen select-none select-text">
      {/* 1. Header Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 select-none">
        <div className="max-w-2xl border-b border-slate-200 pb-8">
          <span className="text-[10px] tracking-widest font-bold uppercase text-slate-400 block mb-2">Showcase & Lifestyle</span>
          <h1 className="font-serif text-4xl sm:text-5xl font-light text-slate-950 tracking-tight leading-tight">
            Design Inspiration
          </h1>
          <p className="text-sm font-light text-slate-600 mt-2">
            Discover complete rooms and customized spaces curated by our showroom design team. Explore interior projects crafted for exceptional homes.
          </p>
        </div>
      </div>

      {/* 2. Gallery / Project Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12 select-none">
        {projects.map((p, idx) => {
          const isOdd = idx % 2 === 1;
          return (
            <div 
              key={p.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center p-6 sm:p-8 bg-white border border-slate-200/50 hover:border-slate-300 transition-all duration-300 hover:shadow-sm ${
                isOdd ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Context text box */}
              <div className={`lg:col-span-5 flex flex-col items-start gap-4 ${isOdd ? 'lg:order-2' : ''}`}>
                <div className="flex items-center gap-2 border border-slate-200/80 px-3 py-1 text-[9px] font-semibold tracking-widest uppercase text-slate-500 bg-slate-50/60 backdrop-blur-sm select-none">
                  <Compass className="w-3.5 h-3.5" />
                  Project Story
                </div>

                <h3 className="font-serif text-2xl md:text-3xl font-light text-slate-900 tracking-tight leading-tight group-hover:text-slate-700 transition-colors">
                  {p.title}
                </h3>
                
                <p className="text-slate-600 text-sm font-light leading-relaxed mb-1">
                  {p.description}
                </p>

                <div className="flex flex-wrap items-center gap-4 text-xs font-light text-slate-400 border-t border-slate-100/80 pt-4 w-full">
                  <span>Showroom Family: <strong className="font-medium text-slate-700">{p.family}</strong></span>
                  <span className="hidden sm:inline-block text-slate-300">|</span>
                  <span>Location: <strong className="font-medium text-slate-700">{p.location}</strong></span>
                </div>

                <button 
                  onClick={() => handleNavigation('contact')}
                  className="flex items-center gap-2 text-slate-900 hover:text-slate-600 font-semibold text-[11px] uppercase tracking-widest mt-2 select-none"
                >
                  Schedule Interior consultation <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Graphical placeholder box */}
              <div className={`lg:col-span-7 aspect-[16/10] bg-slate-50 border border-slate-100 flex items-center justify-center p-6 relative overflow-hidden h-full min-h-[260px] cursor-pointer hover:bg-slate-100/50 transition-colors ${isOdd ? 'lg:order-1' : ''}`}>
                <MoveUpRight className="w-6 h-6 text-slate-300 transform transition-transform group-hover:scale-110" />
              </div>
            </div>
          );
        })}
      </div>

      {/* 3. Invitation Block */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 text-center flex flex-col items-center border border-dashed border-slate-200/80 p-12 bg-white/40 backdrop-blur-sm select-none">
        <Sparkles className="w-8 h-8 text-slate-400 opacity-60 mb-4" />
        <h3 className="font-serif text-2xl font-light text-slate-900 tracking-tight leading-tight mb-2">
          Want to envision this in your home?
        </h3>
        <p className="text-sm font-light text-slate-600 max-w-sm mb-6 leading-relaxed">
          Book a 3D interior layout session with our specialists and experience absolute design tranquility.
        </p>

        <button 
          onClick={() => handleNavigation('contact')}
          className="flex items-center justify-center gap-2.5 bg-slate-900 hover:bg-slate-800 text-white text-[11px] font-semibold tracking-widest uppercase px-6 py-3.5 transition-all duration-300"
        >
          Book Consultation
        </button>
      </div>
    </div>
  );
}
