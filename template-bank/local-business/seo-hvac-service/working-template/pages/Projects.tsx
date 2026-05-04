"use client";

import React from 'react';
import { MapPin, ArrowRight } from 'lucide-react';

interface PageProps {
  onNavigate: (page: string) => void;
}

export default function Projects({ onNavigate }: PageProps) {
  const projects = [
    {
      title: "Boiler Switch & Install",
      type: "Installation",
      location: "Westside Sector",
      desc: "Replaced an outdated system in a residential property with a highly efficient, condensing system for lower utility usage.",
      img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1200"
    },
    {
      title: "System Sludge Flushing",
      type: "Maintenance",
      location: "North District",
      desc: "Clearing built-up radiator debris to improve heat distribution across multiple home floors.",
      img: "https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80&w=1200"
    },
    {
      title: "Industrial Ventilation Upgrades",
      type: "Commercial",
      location: "Valley Sector",
      desc: "Designing and installing high-performance air extractors for commercial kitchen setups.",
      img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=1200"
    }
  ];

  return (
    <div className="animate-in fade-in duration-700 bg-slate-50 min-h-screen font-sans">
      
      {/* Page Header */}
      <div className="bg-slate-100 py-16 border-b border-slate-200 text-center px-4">
        <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">Our Recent Work</h1>
        <p className="text-base text-slate-600 font-medium max-w-xl mx-auto">
          Take a look at our installation, repair, and power flushing projects across various locations.
        </p>
      </div>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((proj, i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col group">
                <div className="aspect-[16/10] bg-slate-200 relative overflow-hidden">
                  <img src={proj.img} alt={proj.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute top-4 left-4 bg-orange-600 text-white px-3 py-1 text-xs font-bold uppercase tracking-wider rounded shadow-sm">
                    {proj.type}
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex items-center gap-2 text-slate-500 text-xs font-bold mb-3">
                    <MapPin className="w-4 h-4 text-orange-500" /> {proj.location}
                  </div>
                  <h3 className="text-xl font-black text-slate-900 mb-3">{proj.title}</h3>
                  <p className="text-slate-600 font-medium leading-relaxed mb-6 flex-grow text-sm">
                    {proj.desc}
                  </p>
                  <button 
                    onClick={() => onNavigate('contact')}
                    className="text-orange-600 font-bold flex items-center gap-1.5 hover:gap-2 transition-all text-xs uppercase tracking-wider w-fit"
                  >
                    Discuss Similar Project &rarr;
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Bottom */}
      <section className="bg-slate-900 py-16 text-center px-4 border-t-4 border-orange-500">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-black text-white mb-4">Quality Workmanship Delivered</h2>
          <p className="text-slate-400 text-base mb-6 font-medium">No job is too minor. From residential boiler services to industrial fit-outs.</p>
          <button 
            onClick={() => onNavigate('contact')}
            className="bg-orange-600 text-white px-8 py-3.5 rounded font-black text-base hover:bg-orange-700 transition-colors shadow-md"
          >
            Get an Estimate
          </button>
        </div>
      </section>

    </div>
  );
}
