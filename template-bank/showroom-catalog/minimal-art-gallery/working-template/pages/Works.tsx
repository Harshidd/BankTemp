"use client";

import React from 'react';

interface PageProps {
  onNavigate: (page: string) => void;
}

export default function Works({ onNavigate }: PageProps) {
  const works = [
    { title: "Abstraction 042", artist: "Marcus Vance", year: "2024", medium: "Oil on Linen", size: "120 x 150 cm", img: "https://images.unsplash.com/photo-1547826039-cbd35e0f1d93?auto=format&fit=crop&q=80&w=800" },
    { title: "Tension in Stone", artist: "Elena Rostova", year: "2023", medium: "Bronze & Limestone", size: "80 x 50 cm", img: "https://images.unsplash.com/photo-1579783901586-d88db74b4fe4?auto=format&fit=crop&q=80&w=800" },
    { title: "Void Space VI", artist: "Kenji Nakagawa", year: "2024", medium: "Acrylic on Canvas", size: "200 x 200 cm", img: "https://images.unsplash.com/photo-1518301416397-39cb9a7d3f82?auto=format&fit=crop&q=80&w=800" },
    { title: "Geometric Balance 2", artist: "Kenji Nakagawa", year: "2023", medium: "Charcoal on Paper", size: "100 x 70 cm", img: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&q=80&w=800" },
    { title: "Distorted Monolith", artist: "Marcus Vance", year: "2023", medium: "Gouache on Board", size: "60 x 60 cm", img: "https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&q=80&w=800" },
    { title: "Dynamic Lines", artist: "Elena Rostova", year: "2024", medium: "Marble Sculpture", size: "110 x 40 cm", img: "https://images.unsplash.com/photo-1551918120-9739cb430c6d?auto=format&fit=crop&q=80&w=800" }
  ];

  return (
    <div className="animate-in fade-in duration-700 max-w-[1600px] mx-auto px-6 py-12 lg:py-24">
      
      {/* Header */}
      <div className="max-w-3xl mb-16 lg:mb-24">
        <h1 className="text-4xl lg:text-6xl font-light text-neutral-900 tracking-tight uppercase mb-4">Works</h1>
        <p className="text-base text-neutral-500 font-light max-w-lg">A catalog of selected artwork from our gallery collection, exploring conceptual and physical materializations.</p>
      </div>

      {/* Grid of works */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12">
        {works.map((work, idx) => (
          <div key={idx} className="group cursor-pointer flex flex-col">
            <div className="aspect-[3/4] bg-neutral-100 overflow-hidden mb-6">
              <img src={work.img} alt={work.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
            </div>
            <div className="space-y-2 border-t border-neutral-100 pt-4 flex flex-col">
              <div className="flex justify-between items-start gap-4">
                <h3 className="text-base font-normal tracking-wide text-neutral-900 italic font-serif">{work.title}</h3>
                <span className="text-xs font-light text-neutral-400 shrink-0">{work.year}</span>
              </div>
              <p className="text-xs font-light uppercase tracking-widest text-neutral-500">{work.artist}</p>
              <div className="flex justify-between items-center text-xs font-light text-neutral-400 pt-1">
                <span>{work.medium}</span>
                <span>{work.size}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer / Acquisition CTA */}
      <section className="mt-32 p-12 bg-neutral-100 border border-neutral-200 text-center max-w-2xl mx-auto">
        <h3 className="text-lg font-light uppercase tracking-wider text-neutral-900 mb-3">Acquisition Inquiries</h3>
        <p className="text-sm font-light text-neutral-500 mb-6 max-w-md mx-auto">For availability, pricing, or viewing requests, please contact our curatorial team directly.</p>
        <button 
          onClick={() => onNavigate('contact')}
          className="text-xs uppercase font-normal tracking-widest border-b border-neutral-900 pb-0.5 hover:text-neutral-500 hover:border-neutral-500 transition-all text-neutral-900"
        >
          Contact the Gallery
        </button>
      </section>

    </div>
  );
}
