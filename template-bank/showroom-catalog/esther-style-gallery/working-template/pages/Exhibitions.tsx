"use client";

import React from 'react';

interface PageProps {
  onNavigate: (page: string) => void;
}

export default function Exhibitions({ onNavigate }: PageProps) {
  const currentShow = {
    title: "Mira Solberg",
    dates: "April 28 – June 18, 2026",
    desc: "A major exhibition featuring an entirely new body of conceptual installation works by Mira Solberg. In her visual inquiries, the artist explores spatial environments through light, neon typography, and delicate textile structures.",
    location: "Berlin Suite",
    img: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=1600"
  };

  const upcomingShows = [
    { title: "Adrian Kessler", subtitle: "Soft Structures & Echo Field", dates: "July 02 – August 12, 2026", location: "Paris Space", img: "https://images.unsplash.com/photo-1518301416397-39cb9a7d3f82?auto=format&fit=crop&q=80&w=1200" },
    { title: "Lena Verhoeven", subtitle: "Silent Geometry & Muted Boundaries", dates: "September 04 – October 15, 2026", location: "Seoul Showroom", img: "https://images.unsplash.com/photo-1579783901586-d88db74b4fe4?auto=format&fit=crop&q=80&w=1200" }
  ];

  return (
    <div className="animate-in fade-in duration-1000 max-w-[1400px] mx-auto px-6 py-12 lg:py-24 bg-zinc-50/50">
      
      {/* Section Title */}
      <div className="max-w-2xl mb-16 lg:mb-24">
        <h1 className="text-4xl lg:text-6xl font-light text-zinc-950 tracking-tight uppercase leading-tight mb-4">Exhibitions</h1>
        <p className="text-sm font-light uppercase tracking-wider text-zinc-500 max-w-md">Our global curatorial programming across Berlin, Paris, and Seoul.</p>
      </div>

      {/* 1. Main Featured Current Show */}
      <section className="mb-24 lg:mb-32">
        <span className="text-xs tracking-widest uppercase font-light text-zinc-400 block mb-6">Current Show</span>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          <div className="lg:col-span-8 bg-zinc-200 aspect-[16/9] overflow-hidden">
            <img src={currentShow.img} alt={currentShow.title} className="w-full h-full object-cover" />
          </div>
          <div className="lg:col-span-4 flex flex-col justify-between h-full pt-2">
            <div className="space-y-4">
              <h2 className="text-2xl lg:text-4xl font-light text-zinc-950 tracking-tight uppercase leading-tight">
                {currentShow.title}
              </h2>
              <p className="text-xs font-light tracking-widest text-zinc-400 uppercase">{currentShow.location}</p>
              <p className="text-xs tracking-widest text-zinc-400 uppercase">{currentShow.dates}</p>
              <p className="text-sm font-light text-zinc-600 leading-relaxed pt-2 max-w-sm">
                {currentShow.desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Upcoming programming */}
      <section>
        <span className="text-xs tracking-widest uppercase font-light text-zinc-400 block mb-12 border-b border-zinc-200 pb-4">Upcoming Exhibitions</span>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {upcomingShows.map((show, i) => (
            <div key={i} className="group flex flex-col space-y-4">
              <div className="aspect-[4/3] bg-zinc-200 overflow-hidden">
                <img src={show.img} alt={show.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-normal tracking-wide text-zinc-950 uppercase">{show.title}</h3>
                <p className="text-xs font-light uppercase tracking-widest text-zinc-400">{show.subtitle}</p>
                <div className="flex justify-between items-center text-xs uppercase tracking-widest text-zinc-400 font-light pt-1">
                  <span>{show.location}</span>
                  <span>{show.dates}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
