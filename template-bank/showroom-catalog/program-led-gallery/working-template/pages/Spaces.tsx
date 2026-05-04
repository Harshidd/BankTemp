"use client";

import React from 'react';

interface PageProps {
  onNavigate: (page: string) => void;
}

export default function Spaces({}: PageProps) {
  const hubs = [
    { 
      city: "New York", 
      address: "130 Orchard Street, New York, NY 10002", 
      hours: "Tue – Sat: 10:00 – 18:00", 
      contact: "+1 (212) 000 0000",
      img: "https://images.unsplash.com/photo-1542362567-b07e5362875b?auto=format&fit=crop&q=80&w=1600"
    },
    { 
      city: "London", 
      address: "Burlington Gardens, London W1S 3EP", 
      hours: "Tue – Sat: 11:00 – 19:00", 
      contact: "+44 (0) 20 0000 0000",
      img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1600"
    },
    { 
      city: "Seoul", 
      address: "73 Itaewon-ro 55-gil, Yongsan-gu, Seoul", 
      hours: "Tue – Sat: 11:00 – 19:00", 
      contact: "+82 2 0000 0000",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1600"
    },
    { 
      city: "Geneva", 
      address: "Rue des Sablons 15, 1205 Geneva", 
      hours: "Tue – Sat: 11:00 – 19:00", 
      contact: "+41 22 000 0000",
      img: "https://images.unsplash.com/photo-1574169208507-84376144848b?auto=format&fit=crop&q=80&w=1600"
    }
  ];

  return (
    <div className="animate-in fade-in duration-1000 bg-stone-50 min-h-screen">
      
      {/* Page Header */}
      <div className="pt-32 lg:pt-48 pb-16 container mx-auto px-6 md:px-12 max-w-[1600px] border-b border-stone-200">
        <h1 className="text-4xl lg:text-6xl font-normal tracking-tight text-stone-900 leading-[1.1]">Spaces</h1>
      </div>

      {/* Spaces Listing */}
      <div className="container mx-auto px-6 md:px-12 max-w-[1600px] py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
          {hubs.map((hub, idx) => (
            <div key={idx} className="group">
              <div className="aspect-[16/9] bg-stone-200 overflow-hidden mb-8">
                <img src={hub.img} alt={hub.city} className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105" />
              </div>
              
              <div className="flex flex-col md:flex-row md:justify-between items-start gap-8 border-t border-stone-200 pt-6">
                <div>
                  <h2 className="text-2xl font-normal tracking-tight text-stone-900 mb-4">{hub.city}</h2>
                  <p className="text-[14px] font-normal text-stone-600 mb-1">{hub.address}</p>
                  <button className="text-[13px] font-medium text-stone-500 hover:text-stone-900 transition-colors mt-2">
                    View Map
                  </button>
                </div>
                <div className="space-y-4 text-[13px]">
                  <div>
                    <p className="font-bold uppercase tracking-widest text-stone-400 text-[10px] mb-1">Hours</p>
                    <p className="font-medium text-stone-900">{hub.hours}</p>
                  </div>
                  <div>
                    <p className="font-bold uppercase tracking-widest text-stone-400 text-[10px] mb-1">Contact</p>
                    <p className="font-medium text-stone-900">{hub.contact}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
