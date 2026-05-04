"use client";

import React from 'react';
import { MapPin, Phone, ArrowRight } from 'lucide-react';

interface PageProps {
  onNavigate: (page: string) => void;
}

export default function Areas({ onNavigate }: PageProps) {
  const regions = [
    {
      name: "Central Metro",
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
      <div className="bg-slate-900 py-24 border-b-8 border-sky-600 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-black text-white mb-6">Service Areas</h1>
        <p className="text-lg text-slate-300 font-medium max-w-2xl mx-auto">
          FlowRight Plumbing operates fully stocked dispatch trucks across the greater metropolitan area for rapid response times.
        </p>
      </div>

      {/* Intro and Map Placeholder */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-black text-slate-900 mb-6">Local Plumbers Near You</h2>
              <p className="text-slate-600 font-medium leading-relaxed mb-6">
                When you have a plumbing emergency, every minute counts. Because we position our technicians strategically throughout the city, we can guarantee some of the fastest response times in the industry.
              </p>
              <div className="bg-sky-50 p-6 border-l-4 border-sky-600 rounded-r-lg">
                <p className="font-bold text-slate-900 mb-2">Don&apos;t see your neighborhood listed?</p>
                <p className="text-sm text-slate-600 mb-4">Give us a call. We often service extended boundary areas depending on the nature of the plumbing issue.</p>
                <a href="tel:+15559876543" className="inline-flex items-center gap-2 text-sky-600 font-bold hover:text-sky-700 transition-colors">
                  <Phone className="w-4 h-4" /> (555) 987-6543
                </a>
              </div>
            </div>
            
            <div className="aspect-[4/3] bg-slate-200 rounded-xl overflow-hidden relative shadow-inner flex items-center justify-center">
              {/* Simulated Map Area */}
              <img 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1200" 
                alt="City Map view" 
                className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale"
              />
              <div className="relative z-10 text-center">
                <MapPin className="w-16 h-16 text-sky-600 mx-auto mb-3 drop-shadow-md" />
                <span className="bg-slate-900 text-white font-bold px-6 py-3 rounded-md shadow-lg">Our Coverage Zone</span>
              </div>
            </div>
          </div>

          {/* Area Lists for SEO */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {regions.map((region, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <h3 className="text-lg font-black text-slate-900 mb-4 pb-2 border-b-2 border-sky-600 inline-block">{region.name}</h3>
                <ul className="space-y-3">
                  {region.areas.map((area, j) => (
                    <li key={j} className="flex items-center gap-2 text-slate-600 font-medium hover:text-sky-600 transition-colors cursor-pointer">
                      <ArrowRight className="w-3.5 h-3.5 text-sky-500" /> {area}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 py-20 text-center px-4 border-t-8 border-sky-600">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-3xl font-black text-white mb-6">Need a Plumber in Your Area?</h2>
          <button 
            onClick={() => onNavigate('contact')}
            className="bg-sky-600 text-white px-10 py-5 rounded-md font-black text-lg hover:bg-sky-500 transition-colors shadow-lg"
          >
            Book an Appointment Online
          </button>
        </div>
      </section>

    </div>
  );
}
