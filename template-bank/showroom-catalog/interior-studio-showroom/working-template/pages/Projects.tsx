"use client";

import React from 'react';

interface PageProps {
  onNavigate: (page: string) => void;
}

export default function Projects({ onNavigate }: PageProps) {
  const projects = [
    { title: "Bosphorus Villa", category: "Residential", location: "Istanbul", year: "2023", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1200" },
    { title: "Nisantasi Office", category: "Commercial", location: "Istanbul", year: "2023", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" },
    { title: "Aegean Summer House", category: "Residential", location: "Bodrum", year: "2022", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200" },
    { title: "Concept Store", category: "Retail", location: "Istanbul", year: "2022", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200" },
    { title: "Kadikoy Penthouse", category: "Residential", location: "Istanbul", year: "2021", image: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&q=80&w=1200" },
    { title: "Creative Agency HQ", category: "Commercial", location: "Levent", year: "2021", image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1200" }
  ];

  return (
    <div className="animate-in fade-in duration-1000">
      <section className="px-6 py-16 md:py-24">
        <div className="container mx-auto">
          <div className="max-w-3xl mb-16 md:mb-24">
            <h1 className="text-4xl lg:text-6xl font-light tracking-tight text-stone-900 mb-6">
              Selected <span className="font-serif italic">Projects</span>
            </h1>
            <p className="text-lg text-stone-500 leading-relaxed">
              A curated selection of our interior architecture and styling work across residential, commercial, and retail spaces.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 lg:gap-x-12 lg:gap-y-24">
            {projects.map((project, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-[4/3] mb-6 overflow-hidden bg-stone-100 relative">
                  <div className="absolute inset-0 bg-stone-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105"
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-medium text-stone-900">{project.title}</h3>
                    <span className="text-sm text-stone-500">{project.year}</span>
                  </div>
                  <div className="flex items-center gap-4 text-xs uppercase tracking-widest text-stone-400">
                    <span>{project.category}</span>
                    <span className="w-1 h-1 rounded-full bg-stone-300" />
                    <span>{project.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-stone-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-light tracking-tight text-stone-900 mb-8">Discuss a new project</h2>
          <button 
            onClick={() => onNavigate('contact')}
            className="px-8 py-4 bg-stone-900 text-white font-medium text-sm transition-colors hover:bg-stone-800"
          >
            Contact Our Studio
          </button>
        </div>
      </section>
    </div>
  );
}
