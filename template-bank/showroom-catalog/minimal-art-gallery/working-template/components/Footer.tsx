"use client";

import React from 'react';
import { Globe, Link, MapPin, Mail, Phone } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-neutral-100 text-neutral-600 py-20 border-t border-neutral-200">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Gallery Info */}
          <div className="space-y-4">
            <span className="text-lg font-normal tracking-wider text-neutral-900 block uppercase">
              Contemporary<span className="font-light">Space</span>
            </span>
            <p className="text-sm leading-relaxed max-w-sm font-light">
              An independent gallery focused on exhibiting established and emerging contemporary artists, driving experimental dialogues in modern art.
            </p>
          </div>

          {/* Directory */}
          <div>
            <h4 className="text-neutral-900 font-normal mb-5 uppercase tracking-wider text-xs">Menu</h4>
            <div className="flex flex-col gap-3">
              {['Exhibitions', 'Works', 'Artists', 'About', 'Contact'].map((item) => (
                <button 
                  key={item} 
                  onClick={() => onNavigate(item === 'Contact' ? 'contact' : item.toLowerCase())}
                  className="text-left text-sm font-light hover:text-neutral-900 transition-colors w-fit uppercase tracking-wide"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Location */}
          <div>
            <h4 className="text-neutral-900 font-normal mb-5 uppercase tracking-wider text-xs">Information</h4>
            <div className="flex flex-col gap-3 text-sm font-light">
              <p className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-neutral-400" />
                <span>Karakoy Art District<br/>Istanbul, Turkey</span>
              </p>
              <p className="flex items-center gap-3">
                <Phone className="w-4 h-4 shrink-0 text-neutral-400" />
                +90 (212) 000 00 00
              </p>
              <p className="flex items-center gap-3">
                <Mail className="w-4 h-4 shrink-0 text-neutral-400" />
                hello@contemporaryspace.com
              </p>
            </div>
          </div>

          {/* Social connections (Safe generic icons only) */}
          <div>
            <h4 className="text-neutral-900 font-normal mb-5 uppercase tracking-wider text-xs">Network</h4>
            <div className="flex gap-3">
              <a href="#" className="p-2 border border-neutral-300 rounded hover:border-neutral-900 hover:text-neutral-900 transition-all">
                <Globe className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 border border-neutral-300 rounded hover:border-neutral-900 hover:text-neutral-900 transition-all">
                <Link className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-neutral-200 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-light text-neutral-400">
          <p>© {new Date().getFullYear()} ContemporarySpace Gallery. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-neutral-600 transition-colors">Privacy</a>
            <a href="#" className="hover:text-neutral-600 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
