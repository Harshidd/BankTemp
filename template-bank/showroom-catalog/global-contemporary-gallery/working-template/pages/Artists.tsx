"use client";

import React from 'react';

interface PageProps {
  onNavigate: (page: string) => void;
}

export default function Artists({ onNavigate }: PageProps) {
  const artistsList = [
    { name: "Adrian Kessler", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" },
    { name: "Mira Solberg", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800" },
    { name: "Lena Verhoeven", img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=800" },
    { name: "Tomas Vale", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800" },
    { name: "Sora Niven", img: "https://images.unsplash.com/photo-1539571696357-5aa69c17a67c?auto=format&fit=crop&q=80&w=800" },
    { name: "Elin Marot", img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=800" }
  ];

  return (
    <div className="animate-in fade-in duration-1000 bg-neutral-950 min-h-screen text-white">
      
      {/* Page Header */}
      <div className="pt-32 lg:pt-48 pb-16 container mx-auto px-6 md:px-12 max-w-[1600px] border-b border-neutral-800">
        <h1 className="text-6xl lg:text-8xl font-black tracking-tight uppercase leading-[0.9]">Artists</h1>
      </div>

      {/* Directory High-Impact Grid */}
      <div className="container mx-auto px-6 md:px-12 max-w-[1600px] py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-24 gap-x-12">
          {artistsList.map((artist, idx) => (
            <div 
              key={idx} 
              className="group cursor-pointer flex flex-col"
              onClick={() => onNavigate('home')}
            >
              <div className="aspect-[4/5] bg-neutral-800 overflow-hidden relative mb-6">
                <img src={artist.img} alt={artist.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100" />
              </div>
              <h3 className="text-3xl font-black uppercase tracking-tight text-white group-hover:text-neutral-400 transition-colors leading-none">{artist.name}</h3>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
