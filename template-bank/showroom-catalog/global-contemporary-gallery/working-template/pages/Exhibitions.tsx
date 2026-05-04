"use client";

import React from 'react';

interface PageProps {
  onNavigate: (page: string) => void;
}

export default function Exhibitions({ onNavigate }: PageProps) {
  const exhibitions = [
    { 
      title: "Silent Geometry", 
      artist: "Lena Verhoeven", 
      city: "New York", 
      dates: "May 02 – June 20, 2026", 
      img: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=1600",
      status: "Current"
    },
    { 
      title: "Echo Field", 
      artist: "Adrian Kessler", 
      city: "Paris", 
      dates: "April 28 – June 12, 2026", 
      img: "https://images.unsplash.com/photo-1547826039-cbd35e0f1d93?auto=format&fit=crop&q=80&w=1600",
      status: "Current"
    },
    { 
      title: "Luminous Fragments", 
      artist: "Sora Niven", 
      city: "Tokyo", 
      dates: "July 01 – August 18, 2026", 
      img: "https://images.unsplash.com/photo-1579783901586-d88db74b4fe4?auto=format&fit=crop&q=80&w=1600",
      status: "Upcoming"
    },
    { 
      title: "Soft Structures", 
      artist: "Mira Solberg", 
      city: "Istanbul", 
      dates: "September 02 – October 15, 2026", 
      img: "https://images.unsplash.com/photo-1518301416397-39cb9a7d3f82?auto=format&fit=crop&q=80&w=1600",
      status: "Upcoming"
    }
  ];

  return (
    <div className="animate-in fade-in duration-1000 bg-neutral-50 min-h-screen">
      
      {/* Page Header */}
      <div className="pt-32 lg:pt-48 pb-16 container mx-auto px-6 md:px-12 max-w-[1600px]">
        <h1 className="text-6xl lg:text-8xl font-black text-neutral-950 tracking-tight uppercase leading-[0.9]">Exhibitions</h1>
      </div>

      {/* Large Scale Editorial Listing */}
      <div className="container mx-auto px-6 md:px-12 max-w-[1600px] pb-32">
        <div className="space-y-24 lg:space-y-32">
          {exhibitions.map((exh, i) => (
            <div key={i} className="group cursor-pointer flex flex-col" onClick={() => onNavigate('home')}>
              <div className="aspect-[21/9] lg:aspect-[2.5/1] bg-neutral-200 overflow-hidden relative mb-6">
                <img src={exh.img} alt={exh.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                <div className="absolute top-6 left-6 bg-neutral-950 text-white px-4 py-2 text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                  {exh.status}
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-neutral-300 pb-8">
                <div>
                  <h2 className="text-4xl lg:text-6xl font-black uppercase tracking-tight text-neutral-950 mb-2 leading-none group-hover:text-neutral-600 transition-colors">{exh.title}</h2>
                  <p className="text-xl lg:text-2xl font-light text-neutral-600">{exh.artist}</p>
                </div>
                <div className="text-left md:text-right">
                  <p className="text-sm font-bold uppercase tracking-widest text-neutral-950">{exh.city}</p>
                  <p className="text-xs font-bold uppercase tracking-widest text-neutral-500 mt-1">{exh.dates}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
