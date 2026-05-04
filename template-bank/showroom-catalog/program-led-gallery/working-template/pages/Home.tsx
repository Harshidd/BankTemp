"use client";

import React from 'react';
import { ArrowRight } from 'lucide-react';

interface PageProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: PageProps) {
  const exhibitions = [
    { 
      title: "Silent Geometry", 
      artist: "Lena Verhoeven", 
      city: "New York", 
      dates: "May 02 – June 20, 2026",
      img: "https://images.unsplash.com/photo-1547826039-cbd35e0f1d93?auto=format&fit=crop&q=80&w=1600"
    },
    { 
      title: "Echo Field", 
      artist: "Adrian Kessler", 
      city: "London", 
      dates: "April 28 – June 12, 2026",
      img: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=1600"
    }
  ];

  const publications = [
    { title: "Adrian Kessler: Selected Works 2010–2025", type: "Monograph", img: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800" },
    { title: "Spatial Investigations Vol. 4", type: "Journal", img: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=800" },
    { title: "The Weight of Light", type: "Exhibition Catalogue", img: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=800" }
  ];

  return (
    <div className="animate-in fade-in duration-1000 bg-stone-50 min-h-screen">
      
      {/* 1. Measured Editorial Hero */}
      <section className="container mx-auto px-6 md:px-12 max-w-[1600px] pt-12 pb-24 lg:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-8 group cursor-pointer" onClick={() => onNavigate('exhibitions')}>
            <div className="aspect-[16/9] lg:aspect-[2/1] overflow-hidden bg-stone-200">
              <img 
                src="https://images.unsplash.com/photo-1579783901586-d88db74b4fe4?auto=format&fit=crop&q=80&w=2000" 
                alt="Main Exhibition" 
                className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
              />
            </div>
          </div>
          <div className="lg:col-span-4 flex flex-col justify-between h-full pt-2 lg:pt-4">
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-[11px] font-bold uppercase tracking-widest text-stone-500">Current Exhibition • Seoul</p>
                <h1 className="text-4xl lg:text-5xl font-normal tracking-tight text-stone-900 leading-[1.1]">
                  Sora Niven: <br />
                  <span className="text-stone-500 italic">Luminous Fragments</span>
                </h1>
              </div>
              <p className="text-[15px] font-light leading-relaxed text-stone-600">
                A major presentation of new neon structures and spatial environments spanning the entire Seoul gallery complex.
              </p>
              <p className="text-[13px] font-medium text-stone-900">Until August 18, 2026</p>
            </div>
            <div className="pt-8 lg:pt-0">
              <button 
                onClick={() => onNavigate('exhibitions')}
                className="text-[13px] font-medium border-b border-stone-900 pb-0.5 flex items-center gap-2 hover:text-stone-500 hover:border-stone-500 transition-colors"
              >
                View Exhibition <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Exhibitions - Refined structural grid */}
      <section className="bg-white py-24 lg:py-32 border-t border-stone-200">
        <div className="container mx-auto px-6 md:px-12 max-w-[1600px]">
          <div className="flex justify-between items-end mb-16 border-b border-stone-200 pb-4">
            <h2 className="text-2xl lg:text-3xl font-normal tracking-tight text-stone-900">Current & Upcoming</h2>
            <button 
              onClick={() => onNavigate('exhibitions')}
              className="text-[13px] font-medium text-stone-500 hover:text-stone-900 transition-colors hidden sm:block"
            >
              All Exhibitions
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {exhibitions.map((exh, idx) => (
              <div key={idx} className="group cursor-pointer flex flex-col" onClick={() => onNavigate('exhibitions')}>
                <div className="aspect-[4/3] overflow-hidden bg-stone-100 mb-6">
                  <img src={exh.img} alt={exh.title} className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105" />
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                  <div className="space-y-1">
                    <h3 className="text-xl font-normal tracking-tight text-stone-900 group-hover:text-stone-500 transition-colors">{exh.artist}</h3>
                    <p className="text-[15px] font-light text-stone-500 italic">{exh.title}</p>
                  </div>
                  <div className="text-left sm:text-right space-y-1">
                    <p className="text-[13px] font-medium text-stone-900">{exh.city}</p>
                    <p className="text-[13px] font-normal text-stone-500">{exh.dates}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Programs & Publications - Institutional Ecosystem */}
      <section className="bg-stone-100 py-24 lg:py-32 border-t border-stone-200">
        <div className="container mx-auto px-6 md:px-12 max-w-[1600px]">
          <div className="flex justify-between items-end mb-16 border-b border-stone-300 pb-4">
            <h2 className="text-2xl lg:text-3xl font-normal tracking-tight text-stone-900">Programs & Publishing</h2>
            <button 
              onClick={() => onNavigate('programs')}
              className="text-[13px] font-medium text-stone-500 hover:text-stone-900 transition-colors hidden sm:block"
            >
              Explore Programs
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8">
            {publications.map((pub, idx) => (
              <div key={idx} className="group cursor-pointer flex flex-col" onClick={() => onNavigate('programs')}>
                <div className="aspect-[3/4] overflow-hidden bg-stone-200 mb-6 p-8 lg:p-12 flex items-center justify-center">
                  <img src={pub.img} alt={pub.title} className="w-full h-full object-cover shadow-2xl transition-transform duration-[1.5s] group-hover:scale-105 group-hover:-translate-y-2" />
                </div>
                <div className="space-y-2">
                  <p className="text-[11px] font-bold uppercase tracking-widest text-stone-500">{pub.type}</p>
                  <h3 className="text-lg font-normal tracking-tight text-stone-900 group-hover:text-stone-500 transition-colors">{pub.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Global Footprint / Institution */}
      <section className="bg-stone-900 text-stone-50 py-24 lg:py-32">
        <div className="container mx-auto px-6 md:px-12 max-w-[1600px] text-center max-w-4xl space-y-10">
          <h2 className="text-3xl lg:text-5xl font-normal tracking-tight leading-[1.1]">
            A global platform dedicated to advancing the discourse of contemporary art and representing visionary practitioners.
          </h2>
          <div className="flex items-center justify-center gap-6 pt-4">
            <button 
              onClick={() => onNavigate('about')}
              className="px-8 py-3.5 bg-white text-stone-900 hover:bg-stone-200 transition-colors text-[13px] font-medium"
            >
              About Meridian
            </button>
            <button 
              onClick={() => onNavigate('spaces')}
              className="px-8 py-3.5 border border-stone-700 text-stone-50 hover:bg-stone-800 transition-colors text-[13px] font-medium"
            >
              Our Spaces
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
