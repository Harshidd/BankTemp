"use client";

import React from 'react';

interface PageProps {
  onNavigate: (page: string) => void;
}

export default function Spaces({ onNavigate }: PageProps) {
  const hubs = [
    { 
      city: "New York", 
      address: "130 Orchard Street, New York, NY 10002", 
      hours: "Tue – Sat: 10:00 – 18:00", 
      contact: "+1 (212) 000 0000",
      img: "https://images.unsplash.com/photo-1542362567-b07e5362875b?auto=format&fit=crop&q=80&w=2400"
    },
    { 
      city: "Paris", 
      address: "76 Rue de Turenne, 75003 Paris, France", 
      hours: "Tue – Sat: 11:00 – 19:00", 
      contact: "+33 (1) 000 000 00",
      img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2400"
    },
    { 
      city: "Tokyo", 
      address: "6-6-9 Roppongi, Minato-ku, Tokyo 106-0032", 
      hours: "Tue – Sat: 11:00 – 19:00", 
      contact: "+81 (3) 0000 0000",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2400"
    }
  ];

  return (
    <div className="animate-in fade-in duration-1000 bg-neutral-50 min-h-screen">
      
      {/* Page Header */}
      <div className="pt-32 lg:pt-48 pb-16 container mx-auto px-6 md:px-12 max-w-[1600px]">
        <h1 className="text-6xl lg:text-8xl font-black text-neutral-950 tracking-tight uppercase leading-[0.9]">Spaces</h1>
      </div>

      {/* Massive Full Bleed Sections per Space */}
      <div className="flex flex-col">
        {hubs.map((hub, idx) => (
          <div key={idx} className="relative w-full h-[80vh] min-h-[600px] flex items-end group">
            <div className="absolute inset-0 bg-neutral-950">
              <img 
                src={hub.img} 
                alt={hub.city} 
                className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-1000" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/20 to-transparent" />
            </div>
            
            <div className="relative z-10 w-full container mx-auto px-6 md:px-12 max-w-[1600px] pb-16 lg:pb-24">
              <div className="flex flex-col md:flex-row justify-between md:items-end gap-12">
                <div>
                  <h2 className="text-5xl lg:text-7xl font-black uppercase tracking-tight text-white mb-6 leading-none">
                    {hub.city}
                  </h2>
                  <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 text-white/80">
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-white/50 mb-1">Address</p>
                      <p className="text-sm font-bold tracking-wider uppercase">{hub.address}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-white/50 mb-1">Hours</p>
                      <p className="text-sm font-bold tracking-wider uppercase">{hub.hours}</p>
                    </div>
                  </div>
                </div>
                <button 
                  onClick={() => onNavigate('exhibitions')}
                  className="px-8 py-4 bg-white text-neutral-950 hover:bg-neutral-200 transition-colors text-xs font-bold uppercase tracking-widest"
                >
                  View Exhibitions
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
