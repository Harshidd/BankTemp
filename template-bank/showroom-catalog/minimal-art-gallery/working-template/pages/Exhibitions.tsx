"use client";

import React from 'react';

interface PageProps {
  onNavigate: (page: string) => void;
}

export default function Exhibitions({ onNavigate }: PageProps) {
  const currentShow = {
    title: "Transient Realities & Monochromatic Voids",
    artist: "Marcus Vance",
    dates: "May 12 – June 24, 2026",
    desc: "A profound solo exhibition analyzing urban isolation using large-format monochromatic oil paintings. Vance presents dynamic voids that both attract and distance viewers.",
    img: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=1600"
  };

  const pastShows = [
    { title: "Materiality of Shadow", artist: "Kenji Nakagawa", dates: "Feb 10 – Mar 22, 2026", img: "https://images.unsplash.com/photo-1518301416397-39cb9a7d3f82?auto=format&fit=crop&q=80&w=1200" },
    { title: "Choreography in Sculpture", artist: "Elena Rostova", dates: "Nov 05 – Dec 20, 2025", img: "https://images.unsplash.com/photo-1579783901586-d88db74b4fe4?auto=format&fit=crop&q=80&w=1200" }
  ];

  return (
    <div className="animate-in fade-in duration-700 max-w-[1600px] mx-auto px-6 py-12 lg:py-24">
      
      {/* Page Title */}
      <div className="max-w-3xl mb-16 lg:mb-24">
        <h1 className="text-4xl lg:text-6xl font-light text-neutral-900 tracking-tight uppercase mb-4">Exhibitions</h1>
        <p className="text-base text-neutral-500 font-light max-w-lg">A chronicle of thematic explorations, curated visual inquiries, and experimental solo presentations.</p>
      </div>

      {/* 1. Current / Main Feature */}
      <section className="mb-24 lg:mb-32">
        <span className="text-xs tracking-wider uppercase font-light text-neutral-400 block mb-6">Current</span>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          <div className="lg:col-span-7 bg-neutral-100 aspect-[16/10] overflow-hidden">
            <img src={currentShow.img} alt={currentShow.title} className="w-full h-full object-cover transition-transform duration-1000" />
          </div>
          <div className="lg:col-span-5 flex flex-col justify-between h-full pt-2">
            <div className="space-y-4">
              <h2 className="text-2xl lg:text-4xl font-light text-neutral-900 tracking-tight leading-tight">
                {currentShow.title}
              </h2>
              <p className="text-sm font-light uppercase tracking-wider text-neutral-500">{currentShow.artist}</p>
              <p className="text-xs uppercase tracking-widest text-neutral-400">{currentShow.dates}</p>
              <p className="text-sm font-light text-neutral-500 leading-relaxed pt-2 max-w-sm">
                {currentShow.desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Past Exhibitions */}
      <section>
        <span className="text-xs tracking-wider uppercase font-light text-neutral-400 block mb-12">Past Exhibitions</span>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {pastShows.map((show, i) => (
            <div key={i} className="group flex flex-col space-y-4">
              <div className="aspect-[16/10] bg-neutral-100 overflow-hidden">
                <img src={show.img} alt={show.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              </div>
              <div className="space-y-1 pt-1">
                <h3 className="text-lg font-normal tracking-wide text-neutral-900">{show.title}</h3>
                <div className="flex justify-between items-center text-xs uppercase tracking-widest text-neutral-500 font-light">
                  <span>{show.artist}</span>
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
