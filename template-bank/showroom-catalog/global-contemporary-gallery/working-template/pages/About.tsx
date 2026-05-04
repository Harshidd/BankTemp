"use client";

import React from 'react';

interface PageProps {
  onNavigate: (page: string) => void;
}

export default function About({ onNavigate }: PageProps) {
  return (
    <div className="animate-in fade-in duration-1000 bg-neutral-50 min-h-screen">
      
      {/* Massive Hero */}
      <section className="-mt-24 lg:-mt-32 relative h-[80vh] min-h-[600px] w-full bg-neutral-950 flex items-end">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2400" 
            alt="Gallery Space" 
            className="w-full h-full object-cover opacity-60 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-6 md:px-12 max-w-[1600px] pb-16 lg:pb-24">
          <h1 className="text-6xl lg:text-8xl font-black text-white tracking-tight uppercase leading-[0.9]">
            Vanguard <br /> Contemporary
          </h1>
        </div>
      </section>

      {/* Intro Text */}
      <section className="py-24 lg:py-32 bg-neutral-50">
        <div className="container mx-auto px-6 md:px-12 max-w-[1600px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <p className="text-2xl lg:text-4xl font-black uppercase tracking-tight text-neutral-950 leading-[1.1]">
                Founded in 1989, Vanguard Contemporary has spent over three decades establishing a global profile for presenting groundbreaking and experimental contemporary art.
              </p>
            </div>
            <div className="space-y-6">
              <p className="text-lg text-neutral-600 font-light leading-relaxed">
                Our vision centres on conceptual art, spatial installations, and the creation of sustainable, deep networks for established and emerging artistic practitioners.
              </p>
              <p className="text-lg text-neutral-600 font-light leading-relaxed">
                Through sustained curatorial dialogue, Vanguard Contemporary collaborates with institutional and private collections globally, providing an international showcase for ambitious, non-traditional media.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dark Contact Form */}
      <section className="py-24 lg:py-32 bg-neutral-950 text-white">
        <div className="container mx-auto px-6 md:px-12 max-w-[1600px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            <div className="lg:col-span-5 space-y-12">
              <div>
                <h3 className="text-4xl lg:text-5xl font-black uppercase tracking-tight mb-4 leading-none">Inquiries</h3>
                <p className="text-lg font-light leading-relaxed text-neutral-400">
                  Contact us for direct assistance regarding exhibition pieces, artist portfolios, and gallery collaborations.
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-neutral-500 mb-1">Email</p>
                  <p className="text-lg font-bold tracking-wider uppercase text-neutral-300">info@vanguard-contemporary.com</p>
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-neutral-500 mb-1">Telephone</p>
                  <p className="text-lg font-bold tracking-wider uppercase text-neutral-300">+1 (212) 000 0000</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-neutral-500">Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-transparent border-b border-neutral-700 pb-3 text-white focus:border-white outline-none transition-colors"
                      placeholder="Full name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-neutral-500">Email</label>
                    <input 
                      type="email" 
                      className="w-full bg-transparent border-b border-neutral-700 pb-3 text-white focus:border-white outline-none transition-colors"
                      placeholder="Email address"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-neutral-500">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full bg-transparent border-b border-neutral-700 pb-3 text-white focus:border-white outline-none transition-colors resize-none"
                    placeholder="Your inquiry..."
                  />
                </div>

                <button 
                  type="submit"
                  className="px-8 py-4 bg-white text-neutral-950 uppercase tracking-widest text-xs font-bold transition-colors hover:bg-neutral-300"
                >
                  Submit Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
