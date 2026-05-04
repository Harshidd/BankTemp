"use client";

import React from 'react';

interface PageProps {
  onNavigate: (page: string) => void;
}

export default function Artists({ onNavigate }: PageProps) {
  const artists = [
    { name: "Marcus Vance", origin: "United States", active: "Since 2012", desc: "Marcus Vance utilizes sweeping oil brushwork to examine themes of urban solitude and the monochromatic depths of transient moments.", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800" },
    { name: "Elena Rostova", origin: "Ukraine", active: "Since 2008", desc: "Focusing on three-dimensional marble and bronze, Elena explores physical balance and gravitational tensions in organic forms.", img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=800" },
    { name: "Kenji Nakagawa", origin: "Japan", active: "Since 2015", desc: "Kenji Nakagawa translates digital minimalism into traditional ink and canvas abstractions, exploring void theory and structured silence.", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" }
  ];

  return (
    <div className="animate-in fade-in duration-700 max-w-[1600px] mx-auto px-6 py-12 lg:py-24">
      
      {/* Header */}
      <div className="max-w-3xl mb-16 lg:mb-24">
        <h1 className="text-4xl lg:text-6xl font-light text-neutral-900 tracking-tight uppercase mb-4">Artists</h1>
        <p className="text-base text-neutral-500 font-light max-w-lg">Representing established and emerging contemporary artists whose works drive intellectual discourse.</p>
      </div>

      {/* Artists Roster List */}
      <div className="space-y-24 lg:space-y-32">
        {artists.map((artist, idx) => (
          <div key={idx} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center border-t border-neutral-200 pt-16">
            <div className="lg:col-span-4 aspect-[4/5] bg-neutral-100 overflow-hidden max-w-sm">
              <img src={artist.img} alt={artist.name} className="w-full h-full object-cover transition-transform duration-1000" />
            </div>
            <div className="lg:col-span-8 space-y-6">
              <span className="text-xs uppercase tracking-widest text-neutral-400 font-light block">{artist.active}</span>
              <h2 className="text-3xl lg:text-5xl font-light text-neutral-900 tracking-tight uppercase leading-tight">{artist.name}</h2>
              <p className="text-xs tracking-wider font-light text-neutral-500 uppercase">{artist.origin}</p>
              <p className="text-base text-neutral-500 font-light leading-relaxed max-w-xl">{artist.desc}</p>
              <div className="pt-4">
                <button 
                  onClick={() => onNavigate('works')}
                  className="text-xs font-normal uppercase tracking-widest border-b border-neutral-900 pb-0.5 hover:text-neutral-500 hover:border-neutral-500 transition-all text-neutral-900"
                >
                  View Works
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
