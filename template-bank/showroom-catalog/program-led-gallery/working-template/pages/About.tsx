"use client";

import React from 'react';

interface PageProps {
  onNavigate: (page: string) => void;
}

export default function About({}: PageProps) {
  return (
    <div className="animate-in fade-in duration-1000 bg-stone-50 min-h-screen">
      
      {/* Page Header */}
      <div className="pt-32 lg:pt-48 pb-16 container mx-auto px-6 md:px-12 max-w-[1600px] border-b border-stone-200">
        <h1 className="text-4xl lg:text-6xl font-normal tracking-tight text-stone-900 leading-[1.1]">Institution</h1>
      </div>

      {/* History and Mission */}
      <section className="container mx-auto px-6 md:px-12 max-w-[1600px] py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          <div className="lg:col-span-5">
            <h2 className="text-2xl lg:text-3xl font-normal tracking-tight text-stone-900 leading-[1.2]">
              Meridian Contemporary was established with a focus on historical legacy, architectural interventions, and primary market representation of pioneering artists.
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-8 text-[15px] font-light leading-relaxed text-stone-600">
            <p>
              Since our founding in 1992, the gallery has maintained a rigorous curatorial program spanning multiple continents. Our primary focus lies in cultivating the careers of significant contemporary artists and managing critical artistic estates.
            </p>
            <p>
              We operate across major hubs in New York, London, Geneva, and Seoul, engaging in sustained dialogue with institutional bodies, major museums, and public collections worldwide. In addition to our exhibition programming, Meridian Publishing produces high-quality monographs, catalogues, and scholarly texts.
            </p>
          </div>
        </div>
      </section>

      {/* Structured Image Block */}
      <section className="container mx-auto px-6 md:px-12 max-w-[1600px] pb-16 lg:pb-24">
        <div className="aspect-[21/9] bg-stone-200 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=2000" 
            alt="Gallery Archives" 
            className="w-full h-full object-cover grayscale"
          />
        </div>
      </section>

      {/* Contact & Inquiries */}
      <section className="container mx-auto px-6 md:px-12 max-w-[1600px] py-16 lg:py-24 border-t border-stone-200">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h3 className="text-xl font-normal tracking-tight text-stone-900 mb-2">General Inquiries</h3>
              <p className="text-[14px] font-light text-stone-600 max-w-sm">
                For sales inquiries, press materials, and archival requests, please use the provided form.
              </p>
            </div>
            <div className="space-y-4 pt-4 border-t border-stone-200">
              <p className="text-[13px] font-medium text-stone-900">inquiries@meridian-contemporary.com</p>
              <p className="text-[13px] font-medium text-stone-900">+1 (212) 000 0000</p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[11px] font-bold uppercase tracking-widest text-stone-400">First & Last Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-transparent border-b border-stone-300 pb-2 text-[14px] text-stone-900 focus:border-stone-900 outline-none transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-bold uppercase tracking-widest text-stone-400">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full bg-transparent border-b border-stone-300 pb-2 text-[14px] text-stone-900 focus:border-stone-900 outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[11px] font-bold uppercase tracking-widest text-stone-400">Subject</label>
                <div className="relative">
                  <select className="w-full bg-transparent border-b border-stone-300 pb-2 text-[14px] text-stone-900 focus:border-stone-900 outline-none appearance-none transition-colors rounded-none">
                    <option>Sales Inquiry</option>
                    <option>Press Inquiry</option>
                    <option>Rights & Reproductions</option>
                    <option>General Information</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[11px] font-bold uppercase tracking-widest text-stone-400">Message</label>
                <textarea 
                  rows={4}
                  className="w-full bg-transparent border-b border-stone-300 pb-2 text-[14px] text-stone-900 focus:border-stone-900 outline-none transition-colors resize-none"
                />
              </div>

              <button 
                type="submit"
                className="px-8 py-3 bg-stone-900 text-white text-[13px] font-medium hover:bg-stone-700 transition-colors"
              >
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>

    </div>
  );
}
