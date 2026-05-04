"use client";

import React from 'react';
import { ArrowRight, Sparkles, Home as HomeIcon, Award, Compass, MessageCircle } from 'lucide-react';

interface HomeProps {
  onPageChange?: (page: string) => void;
}

export default function Home({ onPageChange }: HomeProps) {
  const handleNavigation = (page: string) => {
    if (onPageChange) {
      onPageChange(page);
    }
  };

  return (
    <div className="pt-20 bg-[#FAF9F6] text-slate-900 font-sans min-h-screen">
      {/* 1. Showroom Hero */}
      <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center border-b border-slate-200/60 overflow-hidden px-4 md:px-8">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-100/50 via-transparent to-transparent opacity-80" />
        
        {/* Decorative thin background lines */}
        <div className="absolute top-0 bottom-0 left-1/4 w-[1px] bg-slate-200/30 hidden lg:block" />
        <div className="absolute top-0 bottom-0 right-1/4 w-[1px] bg-slate-200/30 hidden lg:block" />

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10 py-16">
          <div className="lg:col-span-6 flex flex-col items-start gap-6">
            <div className="flex items-center gap-2 border border-slate-300/80 px-3.5 py-1.5 text-[10px] font-semibold tracking-widest uppercase text-slate-600 bg-white/60 select-none backdrop-blur-sm animate-in fade-in duration-700">
              <Sparkles className="w-3.5 h-3.5 text-slate-800" />
              Calm & Refined Interiors
            </div>
            
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-slate-950 leading-[1.12] max-w-xl animate-in slide-in-from-bottom duration-700">
              Modern spaces <br /> <span className="font-light italic text-slate-700">for better living.</span>
            </h1>
            
            <p className="text-slate-600 text-base md:text-lg max-w-lg leading-relaxed font-light mb-4 animate-in slide-in-from-bottom-2 duration-800">
              Experience carefully curated, premium furniture and catalog-first showroom environments designed with absolute calm and visual breathing room.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto animate-in slide-in-from-bottom-4 duration-900 select-none">
              <button 
                onClick={() => handleNavigation('collections')}
                className="flex items-center justify-center gap-2.5 bg-slate-900 hover:bg-slate-800 text-white text-[12px] font-semibold tracking-widest uppercase px-7 py-4 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                Browse Collections <ArrowRight className="w-4 h-4" />
              </button>
              <button 
                onClick={() => handleNavigation('contact')}
                className="flex items-center justify-center gap-2 border border-slate-300 hover:border-slate-800 bg-white/80 hover:bg-white text-slate-800 text-[12px] font-semibold tracking-widest uppercase px-7 py-4 transition-all duration-300"
              >
                Book Consultation
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 animate-in slide-in-from-right duration-1000">
            <div className="relative aspect-[4/3] sm:aspect-[16/11] bg-white border border-slate-200/80 shadow-[0_12px_40px_-15px_rgba(0,0,0,0.06)] p-3">
              <div className="absolute inset-4 border border-slate-100/80 bg-slate-50/50 flex flex-col justify-end p-6 md:p-8">
                <span className="text-[10px] tracking-widest font-semibold uppercase text-slate-400 mb-1">Inspiration Setup</span>
                <h3 className="font-serif text-lg text-slate-800 font-light">The Nordic Calm Suite</h3>
              </div>
              {/* Elegant abstract line art representing furniture/sculpture */}
              <div className="absolute top-1/3 left-1/3 right-1/4 bottom-1/4 border border-dashed border-slate-200/50 opacity-40 pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Featured Collections Preview */}
      <section className="py-24 border-b border-slate-200/50 bg-[#FBFBFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
            <div>
              <span className="text-[10px] tracking-widest font-bold uppercase text-slate-400 block mb-2 select-none">
                Curated Spaces
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-slate-900 max-w-xl tracking-tight leading-tight">
                Featured Collections
              </h2>
            </div>
            <button 
              onClick={() => handleNavigation('collections')}
              className="group inline-flex items-center gap-1.5 font-semibold text-slate-900 hover:text-slate-600 transition-colors text-[11px] uppercase tracking-widest select-none"
            >
              See all collections 
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Collection 1 */}
            <div 
              onClick={() => handleNavigation('collections')}
              className="group cursor-pointer select-none bg-white p-4 border border-slate-200/60 transition-all hover:shadow-[0_12px_40px_-20px_rgba(0,0,0,0.1)]"
            >
              <div className="aspect-[16/10] bg-slate-50 mb-6 border border-slate-100 flex items-center justify-center overflow-hidden">
                <div className="w-16 h-[1px] bg-slate-300 group-hover:w-28 transition-all duration-500 ease-out"></div>
              </div>
              <div className="flex justify-between items-center px-2 pb-2">
                <div>
                  <h3 className="font-serif text-xl font-light text-slate-900 mb-1 group-hover:text-slate-700 transition-colors">The Metropolitan</h3>
                  <p className="text-sm font-light text-slate-500">Tailored comfort for compact city living</p>
                </div>
                <div className="p-2 border border-slate-200 group-hover:border-slate-800 transition-colors">
                  <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-slate-900 transition-colors" />
                </div>
              </div>
            </div>

            {/* Collection 2 */}
            <div 
              onClick={() => handleNavigation('collections')}
              className="group cursor-pointer select-none bg-white p-4 border border-slate-200/60 transition-all hover:shadow-[0_12px_40px_-20px_rgba(0,0,0,0.1)]"
            >
              <div className="aspect-[16/10] bg-slate-50 mb-6 border border-slate-100 flex items-center justify-center overflow-hidden">
                <div className="w-16 h-[1px] bg-slate-300 group-hover:w-28 transition-all duration-500 ease-out"></div>
              </div>
              <div className="flex justify-between items-center px-2 pb-2">
                <div>
                  <h3 className="font-serif text-xl font-light text-slate-900 mb-1 group-hover:text-slate-700 transition-colors">Nordic Tranquility</h3>
                  <p className="text-sm font-light text-slate-500">Soft palettes and natural wooden frames</p>
                </div>
                <div className="p-2 border border-slate-200 group-hover:border-slate-800 transition-colors">
                  <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-slate-900 transition-colors" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Room-by-Room Product Categories */}
      <section className="py-24 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-16 select-none">
            <span className="text-[10px] tracking-widest font-bold uppercase text-slate-400 block mb-2">
              Browse Categories
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-slate-900 tracking-tight leading-tight">
              A Solution For Every Room
            </h2>
            <p className="text-sm font-light text-slate-600 mt-3 leading-relaxed">
              Explore elegant furniture solutions designed specifically to harmonize with your daily living spaces.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 select-none">
            {[
              { id: 'living', label: 'Living Room', icon: HomeIcon, desc: 'Lounge & Sofas' },
              { id: 'dining', label: 'Dining Area', icon: Award, desc: 'Tables & Chairs' },
              { id: 'workspace', label: 'Home Office', icon: Compass, desc: 'Desks & Storage' },
              { id: 'about', label: 'Bedroom', icon: Sparkles, desc: 'Beds & Nightstands' },
            ].map((cat, idx) => {
              const Icon = cat.icon;
              return (
                <div 
                  key={idx}
                  onClick={() => handleNavigation('catalog')}
                  className="group flex flex-col items-center justify-center text-center p-8 bg-white border border-slate-200/50 hover:border-slate-400 transition-all duration-300 hover:shadow-sm cursor-pointer"
                >
                  <div className="w-14 h-14 border border-slate-100 flex items-center justify-center bg-slate-50/50 group-hover:bg-slate-900 group-hover:text-white group-hover:border-slate-900 transition-all duration-300 mb-5">
                    <Icon className="w-6 h-6 text-slate-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-serif font-light text-lg text-slate-900 mb-1 leading-tight group-hover:text-slate-700 transition-colors">{cat.label}</h3>
                  <span className="text-xs font-light text-slate-400">{cat.desc}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Showroom & Consultation Design-Service Trust Block */}
      <section className="py-24 border-t border-slate-200/40 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 flex flex-col items-start gap-6">
            <span className="text-[10px] tracking-widest font-bold uppercase text-slate-400 block select-none">
              Bespoke Interior Design
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-slate-900 leading-tight">
              Design Service <br /> & Guidance
            </h2>
            <p className="text-slate-600 font-light leading-relaxed text-base">
              At our showroom, you have access to dedicated interior specialists who convert empty spaces into fully furnished expressions of personal style. From color schemes to 3D layouts, we ensure high fidelity and absolute calm.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full py-2 border-y border-slate-200/60 select-none">
              <div className="flex flex-col gap-1">
                <span className="text-lg font-serif font-light text-slate-900">Customization</span>
                <span className="text-xs text-slate-500 font-light leading-relaxed">Choose premium materials, wood choices, and fabrics.</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-lg font-serif font-light text-slate-900">Expertise</span>
                <span className="text-xs text-slate-500 font-light leading-relaxed">Skilled design consultants for custom planning.</span>
              </div>
            </div>

            <button 
              onClick={() => handleNavigation('contact')}
              className="flex items-center gap-2 text-slate-900 hover:text-slate-600 transition-colors text-[11px] font-semibold tracking-widest uppercase select-none"
            >
              Book interior consultation <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="lg:col-span-7 select-none">
            <div className="bg-white p-4 border border-slate-200/60 relative overflow-hidden">
              <div className="aspect-[16/10] bg-slate-50 flex items-center justify-center border border-slate-100">
                <MessageCircle className="w-12 h-12 text-slate-300 opacity-60" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Contact / Visit Appointment Direct Promotion */}
      <section className="py-24 border-t border-slate-200/50 bg-[#FBFBFA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center select-none">
          <span className="text-[10px] tracking-widest font-bold uppercase text-slate-400 block mb-3">
            Visit Us
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-light text-slate-900 tracking-tight leading-tight mb-4">
            See the collection up close
          </h2>
          <p className="text-sm md:text-base font-light text-slate-500 max-w-xl leading-relaxed mb-10">
            Immerse yourself in our serene showroom setting located in Istanbul. Explore premium fabrics, solid wood frames, and receive tailored advice.
          </p>

          <button 
            onClick={() => handleNavigation('contact')}
            className="flex items-center justify-center gap-2.5 bg-slate-900 hover:bg-slate-800 text-white text-[12px] font-semibold tracking-widest uppercase px-8 py-4 shadow-sm hover:shadow-lg transition-all duration-300"
          >
            Visit Our Showroom <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
}
