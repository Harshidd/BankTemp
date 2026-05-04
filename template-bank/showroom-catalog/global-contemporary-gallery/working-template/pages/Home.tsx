"use client";

import React from 'react';
import { ArrowRight, MapPin } from 'lucide-react';

interface PageProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: PageProps) {
  const currentExhibitions = [
    { 
      title: "Silent Geometry", 
      artist: "Lena Verhoeven", 
      city: "New York Space", 
      dates: "May 02 – June 20, 2026",
      img: "https://images.unsplash.com/photo-1547826039-cbd35e0f1d93?auto=format&fit=crop&q=80&w=1600"
    },
    { 
      title: "Echo Field", 
      artist: "Adrian Kessler", 
      city: "Paris Showroom", 
      dates: "April 28 – June 12, 2026",
      img: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=1600"
    }
  ];

  return (
    <div className="animate-in fade-in duration-1000 bg-neutral-50 selection:bg-neutral-900 selection:text-white">
      
      {/* 1. Massive Full-Bleed Hero (Perrotin Style) */}
      <section className="-mt-24 lg:-mt-32 relative h-screen min-h-[700px] w-full bg-neutral-950 flex items-end">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=2400" 
            alt="Current Main Exhibition" 
            className="w-full h-full object-cover opacity-80"
          />
          {/* Subtle gradient to ensure text readability at the bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-neutral-950/40" />
        </div>

        <div className="relative z-10 container mx-auto px-6 md:px-12 max-w-[1600px] pb-16 lg:pb-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="text-white space-y-4 max-w-3xl">
              <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-neutral-300">
                Current Exhibition — Tokyo
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight leading-[0.9]">
                Luminous <br /> Fragments
              </h1>
              <p className="text-xl md:text-2xl font-light pt-2">Sora Niven</p>
            </div>
            <button 
              onClick={() => onNavigate('exhibitions')}
              className="group flex items-center justify-center w-16 h-16 rounded-full bg-white text-neutral-950 hover:scale-105 transition-transform"
            >
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* 2. Global Programming - Image Led, Edge-to-Edge feel */}
      <section className="bg-neutral-50 py-24 lg:py-32">
        <div className="container mx-auto px-6 md:px-12 max-w-[1600px]">
          <div className="flex justify-between items-end mb-16">
            <h2 className="text-3xl lg:text-5xl font-black uppercase tracking-tight text-neutral-950">Currently <br /> On View</h2>
            <button 
              onClick={() => onNavigate('exhibitions')}
              className="text-xs font-bold uppercase tracking-widest border-b-2 border-neutral-950 pb-1 hover:text-neutral-500 hover:border-neutral-500 transition-colors hidden md:block"
            >
              All Exhibitions
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {currentExhibitions.map((exhibition, idx) => (
              <div key={idx} className="group cursor-pointer flex flex-col" onClick={() => onNavigate('exhibitions')}>
                <div className="aspect-[4/3] overflow-hidden mb-6 relative bg-neutral-200">
                  <img src={exhibition.img} alt={exhibition.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                  <div className="absolute top-6 left-6 bg-white px-4 py-2 text-[10px] font-black uppercase tracking-widest text-neutral-950 flex items-center gap-2">
                    <MapPin className="w-3 h-3" />
                    {exhibition.city}
                  </div>
                </div>
                <h3 className="text-3xl font-black uppercase tracking-tight text-neutral-950 mb-1">{exhibition.title}</h3>
                <p className="text-lg font-light text-neutral-600 mb-4">{exhibition.artist}</p>
                <p className="text-xs font-bold uppercase tracking-widest text-neutral-400">{exhibition.dates}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Dark Section for Visual Contrast - Artists Roster */}
      <section className="bg-neutral-950 text-white py-24 lg:py-32">
        <div className="container mx-auto px-6 md:px-12 max-w-[1600px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 space-y-8">
              <h2 className="text-4xl lg:text-6xl font-black uppercase tracking-tight leading-[1]">
                Gallery <br /> Artists
              </h2>
              <p className="text-lg font-light text-neutral-400 max-w-md leading-relaxed">
                Representing a global roster of influential contemporary practitioners exploring spatial, digital, and conceptual frontiers.
              </p>
              <button 
                onClick={() => onNavigate('artists')}
                className="text-xs font-bold uppercase tracking-widest flex items-center gap-3 hover:text-neutral-400 transition-colors"
              >
                View Full Roster <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            
            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-[3/4] bg-neutral-800 overflow-hidden group cursor-pointer" onClick={() => onNavigate('artists')}>
                  <img src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=800" alt="Artist" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100" />
                  <div className="p-4">
                    <p className="text-xs font-bold uppercase tracking-widest">Lena Verhoeven</p>
                  </div>
                </div>
                <div className="aspect-[3/4] bg-neutral-800 overflow-hidden group cursor-pointer mt-12" onClick={() => onNavigate('artists')}>
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" alt="Artist" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100" />
                  <div className="p-4">
                    <p className="text-xs font-bold uppercase tracking-widest">Tomas Vale</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
