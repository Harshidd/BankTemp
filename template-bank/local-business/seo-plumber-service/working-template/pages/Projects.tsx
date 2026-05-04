"use client";

import React from 'react';
import { MapPin, ArrowRight } from 'lucide-react';

interface PageProps {
  onNavigate: (page: string) => void;
}

export default function Projects({ onNavigate }: PageProps) {
  const projects = [
    {
      title: "Commercial Repiping Project",
      type: "Commercial",
      location: "Downtown District",
      desc: "Complete removal and replacement of aging galvanized pipes in a 4-story commercial office building, completing the project over weekends to avoid business interruption.",
      img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=1200"
    },
    {
      title: "Tankless Water Heater Conversion",
      type: "Residential",
      location: "Northside Heights",
      desc: "Upgraded a family home from a failing 50-gallon tank to a high-efficiency tankless system, providing endless hot water and freeing up garage space.",
      img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1200"
    },
    {
      title: "Main Sewer Line Replacement",
      type: "Residential",
      location: "Westlake Valley",
      desc: "Utilized trenchless technology to replace a severely root-intruded main sewer line without destroying the client's mature landscaping.",
      img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=1200"
    },
    {
      title: "Restaurant Kitchen Build-Out",
      type: "Commercial",
      location: "East River",
      desc: "Installed all necessary plumbing for a high-volume commercial kitchen, including grease traps, floor sinks, and commercial gas lines.",
      img: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&q=80&w=1200"
    }
  ];

  return (
    <div className="animate-in fade-in duration-700 bg-slate-50 min-h-screen">
      
      {/* Page Header */}
      <div className="bg-slate-900 py-24 border-b-8 border-sky-600 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-black text-white mb-6">Our Work</h1>
        <p className="text-lg text-slate-300 font-medium max-w-2xl mx-auto">
          Take a look at some of our recent residential and commercial plumbing projects.
        </p>
      </div>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {projects.map((proj, i) => (
              <div key={i} className="bg-white rounded-xl shadow-md overflow-hidden border border-slate-200 group flex flex-col">
                <div className="aspect-[16/10] bg-slate-200 relative overflow-hidden">
                  <img src={proj.img} alt={proj.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute top-4 left-4 bg-sky-600 text-white px-3 py-1 text-xs font-bold uppercase tracking-wider rounded shadow-sm">
                    {proj.type}
                  </div>
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <div className="flex items-center gap-2 text-slate-500 text-sm font-bold mb-4">
                    <MapPin className="w-4 h-4 text-sky-500" /> {proj.location}
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-sky-600 transition-colors">{proj.title}</h3>
                  <p className="text-slate-600 font-medium leading-relaxed mb-8 flex-grow">
                    {proj.desc}
                  </p>
                  <button 
                    onClick={() => onNavigate('contact')}
                    className="text-sky-600 font-bold border-b-2 border-sky-200 pb-1 flex items-center gap-2 hover:gap-3 hover:border-sky-600 transition-all w-fit uppercase tracking-wider text-sm"
                  >
                    Request Similar Service <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Bottom */}
      <section className="bg-sky-600 py-20 text-center px-4">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Ready to Start Your Project?</h2>
          <p className="text-sky-100 text-lg mb-8 font-medium">Whether it&apos;s a minor repair or a major installation, our experts are ready to help.</p>
          <button 
            onClick={() => onNavigate('contact')}
            className="bg-slate-900 text-white px-10 py-5 rounded-md font-black text-lg hover:bg-slate-800 transition-colors shadow-xl"
          >
            Get a Free Estimate
          </button>
        </div>
      </section>

    </div>
  );
}
