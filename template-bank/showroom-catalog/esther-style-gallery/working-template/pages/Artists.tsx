"use client";

import React from 'react';

interface PageProps {
  onNavigate: (page: string) => void;
}

export default function Artists({ onNavigate }: PageProps) {
  const artists = [
    { name: "Adrian Kessler", desc: "Explores the intersections of social spaces, economic systems, and conceptual industrial production.", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" },
    { name: "Mira Solberg", desc: "Creates cinematic multi-spatial installations that weave literary, musical, and architectural narratives.", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800" },
    { name: "Lena Verhoeven", desc: "Subtly alters architectural surfaces and spatial boundaries to challenge perceptions of whitespace.", img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=800" },
    { name: "Tomas Vale", desc: "Large-scale monochromatic oils on linen that capture moments of profound urban solitude.", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800" }
  ];

  return (
    <div className="animate-in fade-in duration-1000 max-w-[1400px] mx-auto px-6 py-12 lg:py-24 bg-zinc-50/50">
      
      {/* Title */}
      <div className="max-w-2xl mb-16 lg:mb-24">
        <h1 className="text-4xl lg:text-6xl font-light text-zinc-950 tracking-tight uppercase leading-tight mb-4">Artists</h1>
        <p className="text-sm font-light uppercase tracking-wider text-zinc-500 max-w-md">Our gallery directory of permanent contemporary practitioners.</p>
      </div>

      {/* Grid listing */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 border-t border-zinc-200 pt-12">
        {artists.map((artist, idx) => (
          <div key={idx} className="flex flex-col md:flex-row items-center gap-8 group cursor-pointer" onClick={() => onNavigate('exhibitions')}>
            <div className="w-full md:w-2/5 aspect-[4/5] bg-zinc-200 overflow-hidden">
              <img src={artist.img} alt={artist.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
            </div>
            <div className="w-full md:w-3/5 space-y-3">
              <h2 className="text-xl md:text-2xl font-light text-zinc-950 tracking-wide uppercase">{artist.name}</h2>
              <p className="text-xs uppercase font-light text-zinc-400 tracking-widest">Artist Portfolio</p>
              <p className="text-sm font-light text-zinc-600 leading-relaxed max-w-sm">{artist.desc}</p>
              <div className="pt-2">
                <button 
                  onClick={() => onNavigate('exhibitions')}
                  className="text-xs font-normal uppercase tracking-widest border-b border-zinc-950 pb-0.5 hover:text-zinc-500 hover:border-zinc-500 transition-all text-zinc-950"
                >
                  View Exhibitions
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
