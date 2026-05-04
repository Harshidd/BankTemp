"use client";

import React from 'react';
import { MapPin, Phone, ArrowRight } from 'lucide-react';

interface PageProps {
  onNavigate: (page: string) => void;
}

export default function Areas({ onNavigate }: PageProps) {
  const regions = [
    {
      name: "Central Metro Area",
      areas: ["Downtown District", "Financial Center", "Midtown", "Arts District", "Old Town"]
    },
    {
      name: "Northside & Suburbs",
      areas: ["Northside Heights", "Pine Valley", "Oakridge", "Silver Lake", "Highland Park"]
    },
    {
      name: "West Valley Region",
      areas: ["Westlake Valley", "Riverdale", "Sunset Hills", "Cedar Grove", "West End"]
    },
    {
      name: "East River Corridor",
      areas: ["East River", "Portside", "Marina District", "Bayside", "Eastern Heights"]
    }
  ];

  return (
    <div className="animate-in fade-in duration-700 bg-slate-50 min-h-screen">
      
      {/* Page Header */}
      <div className="bg-slate-900 py-20 border-b-8 border-amber-500">
        <div className="container mx-auto px-4 max-w-[1200px] text-center">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Areas We Serve</h1>
          <p className="text-lg text-slate-300 font-medium max-w-2xl mx-auto">
            Voltex Electrical provides rapid-response residential and commercial electrical services across the greater metropolitan region.
          </p>
        </div>
      </div>

      {/* Intro and Map Placeholder */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-black text-slate-900 mb-6">Local Electricians Near You</h2>
              <p className="text-slate-600 font-medium leading-relaxed mb-6">
                Because we operate multiple dispatch locations across the city, we can guarantee rapid response times for emergencies. Whether you need a simple outlet repair in the suburbs or a massive commercial panel upgrade downtown, our teams are ready.
              </p>
              <div className="bg-slate-100 p-6 border-l-4 border-amber-500 rounded-r-lg">
                <p className="font-bold text-slate-900 mb-2">Don&apos;t see your city listed?</p>
                <a href="tel:555-0199" className="inline-flex items-center gap-2 text-amber-600 font-bold hover:text-amber-700">
                  <Phone className="w-4 h-4" /> 555-0199
                </a>
              </div>
            </div>
            
            <div className="aspect-video bg-slate-200 rounded-lg overflow-hidden relative shadow-inner flex items-center justify-center">
              {/* Simulated Map Area */}
              <img 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1200" 
                alt="City Map view" 
                className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale"
              />
              <div className="relative z-10 text-center">
                <MapPin className="w-12 h-12 text-amber-500 mx-auto mb-2 drop-shadow-md" />
                <span className="bg-slate-900 text-white font-bold px-4 py-2 rounded-full text-sm shadow-lg">View Service Map</span>
              </div>
            </div>
          </div>

          {/* Area Lists for SEO */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {regions.map((region, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                <h3 className="text-lg font-black text-slate-900 mb-4 pb-2 border-b-2 border-amber-500 inline-block">{region.name}</h3>
                <ul className="space-y-3">
                  {region.areas.map((area, j) => (
                    <li key={j} className="flex items-center gap-2 text-slate-600 font-medium hover:text-amber-600 transition-colors cursor-pointer">
                      <ArrowRight className="w-3.5 h-3.5 text-amber-500" /> {area}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 py-16 text-center border-t border-slate-800">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-2xl font-black text-white mb-6">Need Service in Your Area?</h2>
          <button 
            onClick={() => onNavigate('contact')}
            className="bg-amber-500 text-slate-900 px-8 py-4 rounded-md font-black text-lg hover:bg-amber-400 transition-colors shadow-lg"
          >
            Book an Appointment Online
          </button>
        </div>
      </section>

    </div>
  );
}
