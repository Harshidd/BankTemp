"use client";

import React from 'react';
import { ArrowRight } from 'lucide-react';

interface PageProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: PageProps) {
  return (
    <div className="animate-in fade-in duration-700 max-w-[1600px] mx-auto px-6">
      
      {/* 1. Hero Exhibition */}
      <section className="mb-24 lg:mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          <div className="lg:col-span-8 bg-neutral-100 aspect-[16/10] overflow-hidden group cursor-pointer" onClick={() => onNavigate('exhibitions')}>
            <img 
              src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=1600" 
              alt="Current Exhibition Hero" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          </div>
          <div className="lg:col-span-4 flex flex-col justify-between h-full pt-2">
            <div className="space-y-4">
              <span className="text-xs tracking-wider uppercase font-light text-neutral-400 block">Current Exhibition</span>
              <h1 className="text-3xl lg:text-5xl font-light text-neutral-900 tracking-tight leading-tight">
                Transient Realities & Monochromatic Voids
              </h1>
              <p className="text-sm font-light text-neutral-500 max-w-sm uppercase tracking-wider">
                Exhibition by Marcus Vance
              </p>
              <p className="text-xs font-light text-neutral-400 uppercase tracking-widest pt-2">
                May 12 – June 24, 2026
              </p>
            </div>
            
            <div className="pt-8 lg:pt-16">
              <button 
                onClick={() => onNavigate('exhibitions')}
                className="text-xs tracking-widest uppercase font-normal text-neutral-900 flex items-center gap-2 border-b border-neutral-900 pb-1 hover:text-neutral-500 hover:border-neutral-500 transition-all"
              >
                Explore Exhibition <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Selected Works Showcase */}
      <section className="mb-24 lg:mb-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-xl font-light tracking-wider uppercase text-neutral-900">Featured Works</h2>
            <p className="text-xs font-light tracking-wide uppercase text-neutral-400 mt-1">Curation of fine contemporary art pieces</p>
          </div>
          <button 
            onClick={() => onNavigate('works')}
            className="text-xs uppercase tracking-wider font-light text-neutral-500 hover:text-neutral-900 transition-colors"
          >
            All Works
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Abstraction 042", artist: "Marcus Vance", year: "2024", img: "https://images.unsplash.com/photo-1547826039-cbd35e0f1d93?auto=format&fit=crop&q=80&w=800" },
            { title: "Tension in Stone", artist: "Elena Rostova", year: "2023", img: "https://images.unsplash.com/photo-1579783901586-d88db74b4fe4?auto=format&fit=crop&q=80&w=800" },
            { title: "Void Space VI", artist: "Kenji Nakagawa", year: "2024", img: "https://images.unsplash.com/photo-1518301416397-39cb9a7d3f82?auto=format&fit=crop&q=80&w=800" }
          ].map((item, index) => (
            <div key={index} className="group cursor-pointer flex flex-col" onClick={() => onNavigate('works')}>
              <div className="aspect-[4/5] bg-neutral-100 mb-5 overflow-hidden">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-normal text-neutral-900 tracking-wide">{item.title}</h3>
                <div className="flex justify-between items-center text-xs font-light uppercase tracking-wider text-neutral-500">
                  <span>{item.artist}</span>
                  <span>{item.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Artists Highlight Block */}
      <section className="bg-neutral-100 p-12 lg:p-24 mb-24 lg:mb-32">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <span className="text-xs uppercase tracking-widest font-light text-neutral-400 block">Our Vision</span>
          <h2 className="text-2xl lg:text-4xl font-light text-neutral-900 leading-relaxed tracking-tight">
            We advocate for progressive visual artists whose distinct artistic visions redefine the modern aesthetic landscape.
          </h2>
          <div className="pt-6">
            <button 
              onClick={() => onNavigate('artists')}
              className="text-xs uppercase tracking-widest border-b border-neutral-900 pb-1 hover:text-neutral-500 hover:border-neutral-500 font-normal transition-all text-neutral-900"
            >
              See our Artists
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
