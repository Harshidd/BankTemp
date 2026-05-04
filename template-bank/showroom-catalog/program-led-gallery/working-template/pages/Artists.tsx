"use client";

import React from 'react';
import { ArrowRight } from 'lucide-react';

interface PageProps {
  onNavigate: (page: string) => void;
}

export default function Artists({ onNavigate }: PageProps) {
  const artistsList = [
    { name: "Adrian Kessler", born: "1964", origin: "Germany", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" },
    { name: "Elin Marot", born: "1978", origin: "Netherlands", img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=800" },
    { name: "Lena Verhoeven", born: "1958", origin: "Belgium", img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=800" },
    { name: "Mira Solberg", born: "1982", origin: "Norway", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800" },
    { name: "Sora Niven", born: "1990", origin: "Japan", img: "https://images.unsplash.com/photo-1539571696357-5aa69c17a67c?auto=format&fit=crop&q=80&w=800" },
    { name: "Tomas Vale", born: "1971", origin: "Portugal", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800" },
  ];

  return (
    <div className="animate-in fade-in duration-1000 bg-stone-50 min-h-screen">
      
      {/* Page Header */}
      <div className="pt-32 lg:pt-48 pb-16 container mx-auto px-6 md:px-12 max-w-[1600px] border-b border-stone-200">
        <h1 className="text-4xl lg:text-6xl font-normal tracking-tight text-stone-900 leading-[1.1]">Artists & Estates</h1>
      </div>

      {/* Directory Structural List */}
      <div className="container mx-auto px-6 md:px-12 max-w-[1600px] py-16 lg:py-24">
        
        {/* We use a table-like structural list for an institutional feel */}
        <div className="hidden lg:grid grid-cols-12 gap-8 text-[11px] font-bold uppercase tracking-widest text-stone-400 mb-8 px-4">
          <div className="col-span-6">Artist / Estate</div>
          <div className="col-span-3">Origin</div>
          <div className="col-span-3 text-right">View Profile</div>
        </div>

        <div className="flex flex-col border-t border-stone-200">
          {artistsList.map((artist, idx) => (
            <div 
              key={idx} 
              className="group cursor-pointer grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-center border-b border-stone-200 py-6 lg:py-8 px-4 hover:bg-white transition-colors"
              onClick={() => onNavigate('exhibitions')}
            >
              <div className="lg:col-span-6 flex items-center gap-8">
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-stone-200 overflow-hidden shrink-0 hidden sm:block rounded-full">
                  <img src={artist.img} alt={artist.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                </div>
                <div>
                  <h3 className="text-2xl lg:text-3xl font-normal tracking-tight text-stone-900 group-hover:text-stone-500 transition-colors">{artist.name}</h3>
                  <p className="text-[13px] font-normal text-stone-500 mt-1 sm:hidden">b. {artist.born}, {artist.origin}</p>
                </div>
              </div>
              
              <div className="lg:col-span-3 hidden lg:block">
                <p className="text-[14px] font-normal text-stone-600">b. {artist.born}, {artist.origin}</p>
              </div>

              <div className="lg:col-span-3 hidden lg:flex justify-end">
                <ArrowRight className="w-5 h-5 text-stone-300 group-hover:text-stone-900 transition-colors group-hover:translate-x-1" />
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
