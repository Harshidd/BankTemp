"use client";

import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Globe } from 'lucide-react';

interface PageProps {
  onNavigate: (page: string) => void;
}

export default function Locations({ onNavigate }: PageProps) {
  const [formData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const spaces = [
    { city: "Berlin Space", address: "Potsdamer Straße 81D, 10785 Berlin", hours: "Tue – Sat: 11:00 – 18:00", contact: "+49 (30) 374 433 133" },
    { city: "Paris Showroom", address: "16 Place Vendôme, 75001 Paris", hours: "By appointment only", contact: "+33 (1) 000 000 00" },
    { city: "Seoul Office", address: "651-7 Sinsa-dong, Seoul", hours: "Tue – Sat: 11:00 – 18:00", contact: "+82 (2) 000 0000" }
  ];

  return (
    <div className="animate-in fade-in duration-1000 max-w-[1400px] mx-auto px-6 py-12 lg:py-24">
      
      {/* Title */}
      <div className="max-w-2xl mb-16 lg:mb-24">
        <h1 className="text-4xl lg:text-6xl font-light text-zinc-950 tracking-tight uppercase leading-tight mb-4">Locations & Contact</h1>
        <p className="text-sm font-light uppercase tracking-wider text-zinc-500 max-w-md">Our global spaces and exhibition offices.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
        
        {/* Office details */}
        <div className="lg:col-span-5 space-y-12">
          {spaces.map((space, i) => (
            <div key={i} className="space-y-4 border-t border-zinc-200 pt-8 first:border-none first:pt-0">
              <h3 className="text-sm font-normal uppercase tracking-widest text-zinc-950">{space.city}</h3>
              <div className="space-y-3 font-light text-xs text-zinc-500 uppercase tracking-wider">
                <p className="flex items-start gap-3 leading-relaxed">
                  <MapPin className="w-4 h-4 mt-0.5 text-zinc-400 shrink-0" />
                  <span>{space.address}</span>
                </p>
                <p className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-zinc-400 shrink-0" />
                  <span>{space.hours}</span>
                </p>
                <p className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-zinc-400 shrink-0" />
                  <span>{space.contact}</span>
                </p>
              </div>
            </div>
          ))}
          <div className="border-t border-zinc-200 pt-8">
            <h3 className="text-sm font-normal uppercase tracking-widest text-zinc-950 mb-4">General Inquiries</h3>
            <p className="text-xs uppercase tracking-widest font-light text-zinc-500 flex items-center gap-3">
              <Mail className="w-4 h-4 text-zinc-400" />
              office@satellite-contemporary.com
            </p>
          </div>
        </div>

        {/* Dynamic inquiry form */}
        <div className="lg:col-span-7 bg-white p-8 md:p-12 border border-zinc-200">
          <h3 className="text-xl font-light uppercase tracking-widest text-zinc-950 mb-8">Send an Inquiry</h3>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1">
                <label className="text-xs uppercase tracking-widest text-zinc-400 font-light">Name</label>
                <input 
                  type="text" 
                  className="w-full p-4 bg-zinc-50 border border-zinc-200 focus:border-zinc-950 focus:ring-0 outline-none transition-colors text-xs font-light"
                  placeholder="Full name"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs uppercase tracking-widest text-zinc-400 font-light">Email</label>
                <input 
                  type="email" 
                  className="w-full p-4 bg-zinc-50 border border-zinc-200 focus:border-zinc-950 focus:ring-0 outline-none transition-colors text-xs font-light"
                  placeholder="Email address"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs uppercase tracking-widest text-zinc-400 font-light">Subject</label>
              <input 
                type="text" 
                className="w-full p-4 bg-zinc-50 border border-zinc-200 focus:border-zinc-950 focus:ring-0 outline-none transition-colors text-xs font-light"
                placeholder="Exhibition or artwork inquiry"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs uppercase tracking-widest text-zinc-400 font-light">Message</label>
              <textarea 
                rows={4}
                className="w-full p-4 bg-zinc-50 border border-zinc-200 focus:border-zinc-950 focus:ring-0 outline-none transition-colors text-xs font-light resize-none"
                placeholder="Inquiry message..."
              />
            </div>

            <button 
              type="submit"
              className="w-full py-4 bg-zinc-950 text-white uppercase tracking-widest text-xs font-normal transition-colors hover:bg-zinc-800"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>

    </div>
  );
}
