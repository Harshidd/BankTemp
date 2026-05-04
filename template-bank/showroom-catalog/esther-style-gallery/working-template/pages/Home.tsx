"use client";

import React from 'react';
import { ArrowRight } from 'lucide-react';

interface PageProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: PageProps) {
  return (
    <div className="animate-in fade-in duration-1000 select-none bg-zinc-50/50">
      
      {/* 1. Immersive Hero Exhibition - 85% of Viewport with Integrated Typography */}
      <section className="-mt-24 lg:-mt-32 w-full h-[85vh] min-h-[680px] bg-zinc-900 text-white relative flex items-end overflow-hidden mb-24 lg:mb-32">
        {/* Cinematic full-bleed visual area */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=1800" 
            alt="Soft Structures Exhibition Hero" 
            className="w-full h-full object-cover opacity-60 transition-transform duration-[3s] hover:scale-105"
          />
          {/* Edge-to-edge atmospheric lighting mask */}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-zinc-900/10 pointer-events-none" />
        </div>

        <div className="container mx-auto px-6 max-w-[1400px] pb-16 relative z-10">
          <div className="flex flex-col md:flex-row gap-12 justify-between items-end">
            <div className="max-w-2xl space-y-3">
              <span className="text-xs tracking-widest uppercase font-light text-zinc-300 block">Exhibitions — Now Presenting</span>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-light tracking-tight leading-none uppercase">
                Mira <br />
                <span className="font-normal text-white">Solberg</span>
              </h1>
              <p className="text-sm font-light text-zinc-300 uppercase tracking-widest max-w-xl pt-2">
                Soft Structures & Visual Spatial Realities
              </p>
            </div>

            <div className="flex flex-col gap-4 text-left md:text-right shrink-0">
              <p className="text-xs uppercase tracking-widest text-zinc-300 font-light">April 28 – June 18, 2026</p>
              <button 
                onClick={() => onNavigate('exhibitions')}
                className="text-xs tracking-widest uppercase font-normal text-white hover:text-zinc-300 transition-all border-b border-white pb-1 flex items-center gap-2 w-fit md:ml-auto"
              >
                Explore show <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Content Directory Roster with soft background depth */}
      <div className="max-w-[1400px] mx-auto px-6 mb-24 lg:mb-32 space-y-24 lg:space-y-32">
        
        {/* Curatorial Vision / Artist Roster Subsection */}
        <section>
          <div className="flex flex-col md:flex-row justify-between md:items-end mb-12 gap-4 border-b border-zinc-200 pb-4">
            <div>
              <h2 className="text-xl font-light tracking-widest uppercase text-zinc-950">Exhibiting Artists</h2>
              <p className="text-xs tracking-wider uppercase text-zinc-400 font-light mt-1">Our permanent profile roster</p>
            </div>
            <button 
              onClick={() => onNavigate('artists')}
              className="text-xs uppercase tracking-widest font-light text-zinc-500 hover:text-zinc-950 transition-colors"
            >
              Directory
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {[
              { title: "Adrian Kessler", img: "https://images.unsplash.com/photo-1547826039-cbd35e0f1d93?auto=format&fit=crop&q=80&w=1200", subtitle: "Industrial Inquiries & Conceptual Production" },
              { title: "Lena Verhoeven", img: "https://images.unsplash.com/photo-1518301416397-39cb9a7d3f82?auto=format&fit=crop&q=80&w=1200", subtitle: "Invisible Alterations & Spatial Boundaries" }
            ].map((artist, idx) => (
              <div key={idx} className="group cursor-pointer flex flex-col" onClick={() => onNavigate('artists')}>
                <div className="aspect-[16/10] bg-zinc-200 overflow-hidden mb-5">
                  <img src={artist.img} alt={artist.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-base font-normal tracking-wide text-zinc-950 uppercase">{artist.title}</h3>
                  <p className="text-xs font-light text-zinc-400 uppercase tracking-widest">{artist.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Press & News Section with deeper background tone */}
        <section className="bg-zinc-100/80 p-8 md:p-16 border border-zinc-200 rounded-sm">
          <div className="flex flex-col lg:flex-row gap-12 items-center justify-between max-w-5xl mx-auto">
            <div className="max-w-xl">
              <span className="text-xs font-light uppercase tracking-widest text-zinc-400 mb-2 block">News & Press</span>
              <h3 className="text-xl md:text-2xl font-light tracking-widest text-zinc-950 uppercase leading-snug">
                Announcing our newest curatorial programming expansion
              </h3>
              <p className="text-xs font-light tracking-widest text-zinc-400 uppercase mt-1">May 2026 Opening</p>
            </div>
            <div className="shrink-0">
              <button 
                onClick={() => onNavigate('press')}
                className="text-xs font-normal uppercase tracking-widest border border-zinc-950 px-6 py-3.5 bg-zinc-950 text-zinc-50 hover:bg-zinc-800 transition-all shadow-sm"
              >
                Read full release
              </button>
            </div>
          </div>
        </section>

      </div>

    </div>
  );
}
