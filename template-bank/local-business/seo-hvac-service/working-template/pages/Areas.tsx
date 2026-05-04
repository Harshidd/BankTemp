"use client";

import React from 'react';
import { MapPin, Phone, ArrowRight } from 'lucide-react';

interface PageProps {
  onNavigate: (page: string) => void;
}

export default function Areas({ onNavigate }: PageProps) {
  const regions = [
    {
      name: "Metro West",
      areas: ["Westside Sector", "Valley Crossing", "Lake Grove", "River Reach"]
    },
    {
      name: "Metro North",
      areas: ["North District", "Oak Ridge", "Heights Center", "Silver Brook"]
    },
    {
      name: "Metro East",
      areas: ["Eastside District", "Harbor Reach", "Marina Corner", "Port Edge"]
    },
    {
      name: "Metro South",
      areas: ["South Quarter", "Parkway Center", "Green Meadows", "Crossroads"]
    }
  ];

  return (
    <div className="animate-in fade-in duration-700 bg-slate-50 min-h-screen font-sans text-slate-900">
      
      {/* Page Header */}
      <div className="bg-slate-100 py-16 border-b border-slate-200 text-center px-4">
        <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">Service Areas</h1>
        <p className="text-base text-slate-600 font-medium max-w-xl mx-auto">
          Local mobile technician dispatch covering the metropolitan regions. Reliable coverage close to you.
        </p>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-4">Mobile Dispatch Centers</h2>
              <p className="text-slate-600 font-medium leading-relaxed mb-6 text-sm md:text-base">
                When a heating unit locks up in freezing conditions, waiting all day isn&apos;t an option. We position field technicians across multiple dispatch districts to minimize delay times.
              </p>
              <div className="bg-orange-50 p-5 border-l-4 border-orange-600 rounded-r-lg">
                <p className="font-bold text-slate-900 mb-1 text-sm">Outside these core areas?</p>
                <p className="text-xs text-slate-600 mb-3">We often complete installations or emergency call-outs in adjacent zones. Please get in touch directly.</p>
                <a href="tel:555-0100" className="inline-flex items-center gap-1.5 text-orange-600 font-bold hover:text-orange-700 transition-colors text-sm">
                  <Phone className="w-4 h-4" /> Call 555-0100
                </a>
              </div>
            </div>
            
            <div className="aspect-[4/3] bg-slate-200 rounded-2xl overflow-hidden relative border border-slate-200 shadow-inner flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1200" 
                alt="Map View Area" 
                className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale"
              />
              <div className="relative z-10 text-center">
                <MapPin className="w-12 h-12 text-orange-600 mx-auto mb-2 drop-shadow-md" />
                <span className="bg-white text-slate-900 font-black px-4 py-2 rounded text-sm shadow-md border border-slate-100">Coverage Zones</span>
              </div>
            </div>
          </div>

          {/* Area Lists for SEO */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {regions.map((region, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:border-orange-200 transition-colors">
                <h3 className="text-base font-black text-slate-900 mb-4 pb-1 border-b-2 border-orange-500 inline-block">{region.name}</h3>
                <ul className="space-y-3">
                  {region.areas.map((area, j) => (
                    <li key={j} className="flex items-center gap-1.5 text-slate-600 font-medium hover:text-orange-600 transition-colors cursor-pointer text-xs md:text-sm">
                      <ArrowRight className="w-3.5 h-3.5 text-orange-400" /> {area}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 py-16 text-center px-4">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-2xl font-black text-white mb-4">Request Mobile Support</h2>
          <button 
            onClick={() => onNavigate('contact')}
            className="bg-orange-600 text-white px-8 py-3.5 rounded font-black text-base hover:bg-orange-700 transition-colors shadow-md"
          >
            Create Service Ticket
          </button>
        </div>
      </section>

    </div>
  );
}
