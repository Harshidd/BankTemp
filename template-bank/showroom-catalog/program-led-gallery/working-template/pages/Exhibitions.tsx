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
      img: "https://images.unsplash.com/photo-1547826039-cbd35e0f1d93?auto=format&fit=crop&q=80&w=1200",
      status: "Current"
    },
    { 
      title: "Echo Field", 
      artist: "Adrian Kessler", 
      city: "London", 
      dates: "April 28 – June 12, 2026", 
      img: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=1200",
      status: "Current"
    },
    { 
      title: "Luminous Fragments", 
      artist: "Sora Niven", 
      city: "Seoul", 
      dates: "July 01 – August 18, 2026", 
      img: "https://images.unsplash.com/photo-1579783901586-d88db74b4fe4?auto=format&fit=crop&q=80&w=1200",
      status: "Upcoming"
    },
    { 
      title: "Soft Structures", 
      artist: "Mira Solberg", 
      city: "Geneva", 
      dates: "September 02 – October 15, 2026", 
      img: "https://images.unsplash.com/photo-1518301416397-39cb9a7d3f82?auto=format&fit=crop&q=80&w=1200",
      status: "Upcoming"
    }
  ];

  return (
    <div className="animate-in fade-in duration-1000 bg-stone-50 min-h-screen">
      
      {/* Page Header */}
      <div className="pt-32 lg:pt-48 pb-16 container mx-auto px-6 md:px-12 max-w-[1600px] border-b border-stone-200">
        <h1 className="text-4xl lg:text-6xl font-normal tracking-tight text-stone-900 leading-[1.1]">Exhibitions</h1>
        <div className="flex gap-6 pt-8 text-[13px] font-medium">
          <button className="text-stone-900 border-b border-stone-900 pb-1">Current & Upcoming</button>
          <button className="text-stone-500 hover:text-stone-900 transition-colors">Past Exhibitions</button>
        </div>
      </div>

      {/* Exhibition Grid */}
      <div className="container mx-auto px-6 md:px-12 max-w-[1600px] py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20 lg:gap-x-16 lg:gap-y-24">
          {exhibitions.map((exh, i) => (
            <div key={i} className="group cursor-pointer flex flex-col" onClick={() => onNavigate('home')}>
              <div className="aspect-[4/3] bg-stone-200 overflow-hidden relative mb-6">
                <img src={exh.img} alt={exh.title} className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-stone-900 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                  {exh.status}
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                <div className="space-y-1">
                  <h3 className="text-xl lg:text-2xl font-normal tracking-tight text-stone-900 group-hover:text-stone-500 transition-colors">{exh.artist}</h3>
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

    </div>
  );
}
