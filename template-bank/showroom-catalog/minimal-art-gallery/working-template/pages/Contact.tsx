"use client";

import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, ShieldCheck } from 'lucide-react';

interface PageProps {
  onNavigate: (page: string) => void;
}

export default function Contact({ onNavigate }: PageProps) {
  const [formData] = useState({
    name: '',
    email: '',
    message: ''
  });

  return (
    <div className="animate-in fade-in duration-700 max-w-[1600px] mx-auto px-6 py-12 lg:py-24">
      
      {/* Title */}
      <div className="max-w-3xl mb-16 lg:mb-24">
        <h1 className="text-4xl lg:text-6xl font-light text-neutral-900 tracking-tight uppercase mb-4">Visit & Contact</h1>
        <p className="text-base text-neutral-500 font-light max-w-lg">Plan your visit to our exhibition spaces or send an inquiry regarding acquisition opportunities.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
        
        {/* Contact Details */}
        <div className="lg:col-span-5 space-y-12">
          <div>
            <h3 className="text-xs font-normal uppercase tracking-widest text-neutral-900 mb-5">Visitor Information</h3>
            <div className="space-y-4 font-light text-sm text-neutral-500">
              <p className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-neutral-400 shrink-0" />
                <span>Kemankes Karamustafa Pasa Mah.<br/>Karakoy, Istanbul 34425</span>
              </p>
              <p className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-neutral-400 shrink-0" />
                <span>+90 (212) 000 00 00</span>
              </p>
              <p className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-neutral-400 shrink-0" />
                <span>hello@contemporaryspace.com</span>
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-normal uppercase tracking-widest text-neutral-900 mb-5">Visiting Hours</h3>
            <div className="space-y-3 font-light text-sm text-neutral-500 max-w-xs">
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 mt-0.5 text-neutral-400 shrink-0" />
                <div className="space-y-1 w-full">
                  <p className="flex justify-between"><span>Tue – Fri:</span> <span>11:00 – 19:00</span></p>
                  <p className="flex justify-between"><span>Saturday:</span> <span>11:00 – 18:00</span></p>
                  <p className="flex justify-between"><span>Sun – Mon:</span> <span>Closed</span></p>
                </div>
              </div>
              <p className="text-xs text-neutral-400 font-light pt-2 italic">Admission is free of charge.</p>
            </div>
          </div>

          <div className="border-t border-neutral-200 pt-8">
            <h3 className="text-xs font-normal uppercase tracking-widest text-neutral-900 mb-3">Collector Services</h3>
            <p className="text-sm font-light text-neutral-500 max-w-sm mb-4 leading-relaxed">We provide specialized consultation for private collectors and institutions. Schedule a dedicated viewing of our permanent works.</p>
            <p className="text-xs font-normal tracking-wide text-neutral-900 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-neutral-400 shrink-0" />
              Direct acquisition support
            </p>
          </div>
        </div>

        {/* Inquiry Form */}
        <div className="lg:col-span-7 bg-white p-8 lg:p-12 border border-neutral-200">
          <h3 className="text-lg font-light uppercase tracking-wider text-neutral-900 mb-8">Send an Inquiry</h3>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1">
                <label className="text-xs uppercase tracking-widest text-neutral-400 font-light">Name</label>
                <input 
                  type="text" 
                  className="w-full p-4 bg-neutral-50 border border-neutral-200 focus:border-neutral-900 focus:ring-0 outline-none transition-colors text-sm font-light"
                  placeholder="Full name"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs uppercase tracking-widest text-neutral-400 font-light">Email</label>
                <input 
                  type="email" 
                  className="w-full p-4 bg-neutral-50 border border-neutral-200 focus:border-neutral-900 focus:ring-0 outline-none transition-colors text-sm font-light"
                  placeholder="Email address"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs uppercase tracking-widest text-neutral-400 font-light">Subject</label>
              <input 
                type="text" 
                className="w-full p-4 bg-neutral-50 border border-neutral-200 focus:border-neutral-900 focus:ring-0 outline-none transition-colors text-sm font-light"
                placeholder="Exhibition or artwork inquiry"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs uppercase tracking-widest text-neutral-400 font-light">Message</label>
              <textarea 
                rows={4}
                className="w-full p-4 bg-neutral-50 border border-neutral-200 focus:border-neutral-900 focus:ring-0 outline-none transition-colors text-sm font-light resize-none"
                placeholder="Inquiry message..."
              />
            </div>

            <button 
              type="submit"
              className="w-full py-4 bg-neutral-900 text-white uppercase tracking-widest text-xs font-normal transition-colors hover:bg-neutral-700"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>

    </div>
  );
}
