"use client";

import React from 'react';
import { ArrowRight, MapPin } from 'lucide-react';

interface PageProps {
  onNavigate: (page: string) => void;
}

export default function Projects({ onNavigate }: PageProps) {
  const projects = [
    {
      title: "Commercial Office Fit-Out",
      type: "Commercial",
      location: "Downtown District",
      desc: "Complete electrical rough-in and finishing for a 10,000 sq ft office space, including network cabling and energy-efficient lighting grids.",
      img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200"
    },
    {
      title: "Historical Home Rewiring",
      type: "Residential",
      location: "Westlake Valley",
      desc: "Full removal of dangerous knob-and-tube wiring and replacement with modern, code-compliant circuitry and a 200-amp panel upgrade.",
      img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1200"
    },
    {
      title: "Retail Lighting Upgrade",
      type: "Commercial",
      location: "Northside Heights",
      desc: "Upgraded all showroom lighting to high-CRI LED fixtures to improve product visibility while reducing energy costs by 40%.",
      img: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&q=80&w=1200"
    },
    {
      title: "Smart Home Integration",
      type: "Residential",
      location: "South Metro",
      desc: "Installation of whole-home automated lighting, motorized shades, and dedicated circuits for an advanced home theater system.",
      img: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=1200"
    }
  ];

  return (
    <div className="animate-in fade-in duration-700 bg-slate-50 min-h-screen">
      
      {/* Page Header */}
      <div className="bg-slate-900 py-20 border-b-8 border-amber-500">
        <div className="container mx-auto px-4 max-w-[1200px] text-center">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Our Recent Work</h1>
          <p className="text-lg text-slate-300 font-medium max-w-2xl mx-auto">
            Browse through some of our recently completed residential and commercial electrical projects.
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {projects.map((proj, i) => (
              <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden border border-slate-200 group">
                <div className="aspect-video bg-slate-200 relative overflow-hidden">
                  <img src={proj.img} alt={proj.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute top-4 left-4 bg-amber-500 text-slate-900 px-3 py-1 text-xs font-bold uppercase tracking-wider rounded shadow-sm">
                    {proj.type}
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-2 text-slate-500 text-sm font-bold mb-3">
                    <MapPin className="w-4 h-4" /> {proj.location}
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-3 group-hover:text-amber-600 transition-colors">{proj.title}</h3>
                  <p className="text-slate-600 font-medium leading-relaxed mb-6">
                    {proj.desc}
                  </p>
                  <button 
                    onClick={() => onNavigate('contact')}
                    className="text-slate-900 font-bold border-b-2 border-amber-500 pb-1 flex items-center gap-2 hover:gap-3 transition-all"
                  >
                    Start Your Project <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Bottom */}
      <section className="bg-amber-500 py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-black text-slate-900 mb-6">Have a similar project in mind?</h2>
          <button 
            onClick={() => onNavigate('contact')}
            className="bg-slate-900 text-white px-8 py-4 rounded-md font-black text-lg hover:bg-slate-800 transition-colors shadow-lg"
          >
            Get a Free Estimate
          </button>
        </div>
      </section>

    </div>
  );
}
