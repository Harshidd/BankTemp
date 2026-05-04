"use client";

import React from 'react';
import { ArrowRight, Sparkles, Award, ShieldCheck, Heart } from 'lucide-react';

interface AboutProps {
  onPageChange?: (page: string) => void;
}

export default function About({ onPageChange }: AboutProps) {
  const handleNavigation = (page: string) => {
    if (onPageChange) {
      onPageChange(page);
    }
  };

  return (
    <div className="pt-32 pb-24 bg-[#FAF9F6] text-slate-900 font-sans min-h-screen select-none select-text">
      {/* 1. Page Header / Mission */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 select-none">
        <div className="max-w-2xl border-b border-slate-200 pb-8">
          <span className="text-[10px] tracking-widest font-bold uppercase text-slate-400 block mb-2">Since 1994</span>
          <h1 className="font-serif text-4xl sm:text-5xl font-light text-slate-950 tracking-tight leading-tight">
            Our Story & Heritage
          </h1>
          <p className="text-sm font-light text-slate-600 mt-2 max-w-lg">
            A continuous dedication to calm spaces, premium solid framework, and curated furniture designs that feel like home.
          </p>
        </div>
      </div>

      {/* 2. Detailed Business Story */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-24">
        <div className="lg:col-span-7 flex flex-col gap-6">
          <p className="text-base md:text-lg text-slate-700 font-light leading-relaxed">
            Founded with the belief that interiors are deep reflections of tranquility, <strong className="font-medium text-slate-900">DOMO Showroom</strong> translates classic elegance into a modern visual context. We have spent decades refining solid woods, tactile fabrics, and visual breathing room.
          </p>
          <p className="text-sm text-slate-600 font-light leading-relaxed">
            Our showrooms are not just retail outlets. They are quiet sanctuaries where homeowners, architects, and designers collaborate to explore new collections, select premium materials, and curate bespoke solutions. We manage the entire furniture catalog loop—from initial brainstorming and 3D visual planning to handcrafting and installation.
          </p>
          <p className="text-sm text-slate-600 font-light leading-relaxed">
            With a dedicated design team based in Istanbul, we adapt high-end international showroom aesthetics to practical, lived-in local homes without sacrificing premium style or quality.
          </p>
        </div>

        <div className="lg:col-span-5 select-none">
          <div className="bg-white border border-slate-200/50 p-6 flex flex-col justify-center gap-6 h-full min-h-[220px]">
            <span className="text-[10px] tracking-widest font-bold uppercase text-slate-400 block">Our Showroom Values</span>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-slate-700 flex-shrink-0 mt-0.5" />
                <span className="text-xs text-slate-600 font-light leading-relaxed">
                  <strong>Uncompromised Quality:</strong> Only the finest kiln-dried solid woods and stain-resistant European upholstery.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Heart className="w-5 h-5 text-slate-700 flex-shrink-0 mt-0.5" />
                <span className="text-xs text-slate-600 font-light leading-relaxed">
                  <strong>Practical Elegance:</strong> Designs are not just art pieces; they are highly usable for real everyday homes.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Materials / Design Positioning */}
      <div className="bg-white border-y border-slate-200/50 py-20 select-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16 max-w-xl mx-auto">
          <span className="text-[10px] tracking-widest font-bold uppercase text-slate-400 block mb-2">Design Focus</span>
          <h2 className="font-serif text-3xl font-light text-slate-900 tracking-tight leading-tight">
            Craftsmanship & Materials
          </h2>
          <p className="text-sm text-slate-500 font-light mt-2 leading-relaxed">
            At DOMO, every piece is thoroughly reviewed from wood selection to hardware finish to ensure long-lasting luxury.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 select-none">
          {[
            { id: 'wood', title: 'Solid Wood Sourcing', desc: 'Sustainably sourced kiln-dried oak, mahogany, and walnut frameworks.', icon: Award },
            { id: 'fab', title: 'Premium Upholstery', desc: 'Tactile stain-resistant linen, plush boucle, and top-tier full-grain leathers.', icon: Sparkles },
            { id: 'metal', title: 'Monolithic Hardware', desc: 'Durable silent soft-close drawer slides and hand-brushed brass accents.', icon: ShieldCheck },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.id} className="p-8 border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-slate-300 transition-all duration-300 flex flex-col items-start gap-4">
                <div className="p-3 border border-slate-200/80 bg-white">
                  <Icon className="w-5 h-5 text-slate-600" />
                </div>
                <h4 className="font-serif text-xl font-light text-slate-900">{item.title}</h4>
                <p className="text-slate-500 font-light text-sm leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* 4. Contact Redirection */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 text-center select-none">
        <h3 className="font-serif text-3xl font-light text-slate-950 tracking-tight leading-tight mb-3">
          Explore it yourself
        </h3>
        <p className="text-sm font-light text-slate-600 max-w-sm mx-auto mb-8 leading-relaxed">
          Book an individual appointment with our interior experts and see the collections firsthand.
        </p>

        <button 
          onClick={() => handleNavigation('contact')}
          className="flex items-center justify-center gap-2.5 bg-slate-900 hover:bg-slate-800 text-white text-[11px] font-semibold tracking-widest uppercase px-6 py-3.5 mx-auto transition-all duration-300 shadow-sm"
        >
          Book Showroom Visit <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
