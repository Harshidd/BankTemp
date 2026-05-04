"use client";

import React from 'react';

interface PageProps {
  onNavigate: (page: string) => void;
}

export default function Press({ onNavigate }: PageProps) {
  const newsItems = [
    {
      date: "May 12, 2026",
      title: "Satellite Contemporary Announces Opening of a Dedicated Paris Space",
      desc: "Following over three decades of operational programming in Berlin, the gallery is pleased to announce its third global branch in the heart of Paris, premiering with works by Adrian Kessler."
    },
    {
      date: "March 04, 2026",
      title: "Mira Solberg Receives Global Arts Recognition",
      desc: "Our resident artist Mira Solberg has been awarded the 2026 Curatorial Master Award for her conceptual spatial installations exhibited at our Berlin space."
    },
    {
      date: "January 22, 2026",
      title: "Lena Verhoeven's Work Selected for New National Museum",
      desc: "We are thrilled to announce that Lena Verhoeven's 'Silent Geometry' installation has been acquired by the National Museum of Modern Art for permanent exhibition."
    }
  ];

  return (
    <div className="animate-in fade-in duration-1000 max-w-[1400px] mx-auto px-6 py-12 lg:py-24 bg-zinc-50/50">
      
      {/* Title */}
      <div className="max-w-2xl mb-16 lg:mb-24">
        <h1 className="text-4xl lg:text-6xl font-light text-zinc-950 tracking-tight uppercase leading-tight mb-4">Press & News</h1>
        <p className="text-sm font-light uppercase tracking-wider text-zinc-500 max-w-md">Institutional announcements, artist awards, and news releases.</p>
      </div>

      {/* Roster of news items */}
      <div className="space-y-16 lg:space-y-20 border-t border-zinc-200 pt-12 max-w-4xl">
        {newsItems.map((item, idx) => (
          <div key={idx} className="space-y-3">
            <span className="text-xs uppercase font-light tracking-widest text-zinc-400 block">{item.date}</span>
            <h2 className="text-2xl font-light tracking-tight uppercase text-zinc-950 hover:text-zinc-500 cursor-pointer transition-colors leading-tight">
              {item.title}
            </h2>
            <p className="text-sm font-light leading-relaxed text-zinc-600 max-w-2xl">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

    </div>
  );
}
