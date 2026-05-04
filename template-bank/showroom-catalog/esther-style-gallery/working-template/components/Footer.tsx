"use client";

import React from 'react';
import { Globe, Link, MapPin, Mail, Phone } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-zinc-100 text-zinc-600 py-20 border-t border-zinc-200">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <span className="text-xl font-light tracking-widest text-zinc-950 block uppercase">
              SATELLITE <span className="font-normal">CONTEMPORARY</span>
            </span>
            <p className="text-xs font-light leading-relaxed max-w-sm uppercase tracking-wider">
              An international contemporary art platform presenting critical conceptual practices across global venues.
            </p>
          </div>

          {/* Nav Links Column */}
          <div>
            <h4 className="text-zinc-950 font-normal mb-5 uppercase tracking-wider text-xs">Directory</h4>
            <div className="flex flex-col gap-3">
              {['Artists', 'Exhibitions', 'Press', 'Locations', 'About'].map((item) => (
                <button 
                  key={item} 
                  onClick={() => onNavigate(item.toLowerCase())}
                  className="text-left text-xs font-light hover:text-zinc-950 transition-colors w-fit uppercase tracking-widest"
                >
                  {item === 'Press' ? 'Press & News' : item}
                </button>
              ))}
            </div>
          </div>

          {/* Contacts Column */}
          <div>
            <h4 className="text-zinc-950 font-normal mb-5 uppercase tracking-wider text-xs">Offices</h4>
            <div className="flex flex-col gap-3 text-xs font-light uppercase tracking-wider">
              <p className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-zinc-400" />
                <span>Berlin | Paris | Seoul</span>
              </p>
              <p className="flex items-center gap-3">
                <Phone className="w-4 h-4 shrink-0 text-zinc-400" />
                +49 (30) 000 0000
              </p>
              <p className="flex items-center gap-3">
                <Mail className="w-4 h-4 shrink-0 text-zinc-400" />
                office@satellite-contemporary.com
              </p>
            </div>
          </div>

          {/* Safe Generic Social Network Icons */}
          <div>
            <h4 className="text-zinc-950 font-normal mb-5 uppercase tracking-wider text-xs">Media</h4>
            <div className="flex gap-3">
              <a href="#" className="p-2 border border-zinc-300 rounded hover:border-zinc-950 hover:text-zinc-950 transition-all">
                <Globe className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 border border-zinc-300 rounded hover:border-zinc-950 hover:text-zinc-950 transition-all">
                <Link className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-zinc-200 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-light text-zinc-400 uppercase tracking-widest">
          <p>© {new Date().getFullYear()} Satellite Contemporary. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-zinc-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-zinc-600 transition-colors">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
