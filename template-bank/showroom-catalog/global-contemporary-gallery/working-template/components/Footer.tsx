"use client";

import React from 'react';
import { ArrowRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-neutral-950 text-white py-24 lg:py-32">
      <div className="container mx-auto px-6 md:px-12 max-w-[1600px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8 mb-24">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-8">
            <span className="text-3xl lg:text-5xl font-black tracking-tight uppercase leading-none select-none block">
              VANGUARD
            </span>
            <p className="text-lg md:text-xl font-light leading-relaxed max-w-md text-neutral-400">
              International contemporary art. <br />
              New York, Paris, Tokyo, Istanbul.
            </p>
            <div className="pt-4">
              <button 
                onClick={() => onNavigate('about')}
                className="text-sm font-bold uppercase tracking-widest flex items-center gap-3 hover:text-neutral-400 transition-colors"
              >
                Gallery Information <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Nav Column */}
          <div className="space-y-6">
            <h4 className="text-neutral-500 font-bold uppercase tracking-widest text-xs">Directory</h4>
            <div className="flex flex-col gap-4">
              {['Artists', 'Exhibitions', 'Spaces', 'About'].map((item) => (
                <button 
                  key={item} 
                  onClick={() => onNavigate(item.toLowerCase())}
                  className="text-left text-sm font-bold uppercase tracking-widest text-white hover:text-neutral-400 transition-colors w-fit"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Newsletter Column */}
          <div className="space-y-6">
            <h4 className="text-neutral-500 font-bold uppercase tracking-widest text-xs">Stay Updated</h4>
            <p className="text-sm font-light text-neutral-400 max-w-xs">
              Subscribe to our global mailing list for announcements on new exhibitions, artist releases, and art fairs.
            </p>
            <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-transparent border-b border-neutral-700 pb-3 text-sm focus:outline-none focus:border-white transition-colors"
              />
              <button className="text-left text-xs font-bold uppercase tracking-widest hover:text-neutral-400 transition-colors">
                Subscribe
              </button>
            </form>
          </div>

        </div>

        <div className="pt-8 border-t border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-bold uppercase tracking-widest text-neutral-600">
          <p>© {new Date().getFullYear()} Vanguard Contemporary</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">Arts Arts</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
