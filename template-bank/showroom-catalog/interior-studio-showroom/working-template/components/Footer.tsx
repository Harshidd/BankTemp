"use client";

import React from 'react';
import { Globe, Link, MapPin, Mail, Phone } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-stone-950 text-stone-400 py-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          
          {/* Brand */}
          <div className="space-y-6">
            <span className="text-xl font-bold tracking-tight text-white block">
              Studio<span className="font-normal italic">Line</span>
            </span>
            <p className="text-sm leading-relaxed text-stone-500">
              A premium interior design studio and materials showroom dedicated to creating sophisticated, functional spaces for residential and commercial clients.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-medium mb-6 uppercase tracking-widest text-xs">Navigation</h4>
            <div className="flex flex-col gap-4">
              {['Projects', 'Collections', 'Services', 'About', 'Contact'].map((item) => (
                <button 
                  key={item} 
                  onClick={() => onNavigate(item.toLowerCase())}
                  className="text-left text-sm hover:text-white transition-colors w-fit"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-medium mb-6 uppercase tracking-widest text-xs">Showroom</h4>
            <div className="flex flex-col gap-4 text-sm">
              <p className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>Nisantasi Design District<br/>Istanbul, Turkey</span>
              </p>
              <p className="flex items-center gap-3">
                <Phone className="w-4 h-4" />
                +90 (555) 000 00 00
              </p>
              <p className="flex items-center gap-3">
                <Mail className="w-4 h-4" />
                hello@studioline.com
              </p>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-medium mb-6 uppercase tracking-widest text-xs">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="p-2 border border-stone-800 rounded-full hover:border-stone-500 hover:text-white transition-all">
                <Globe className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 border border-stone-800 rounded-full hover:border-stone-500 hover:text-white transition-all">
                <Link className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-stone-900 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-stone-600">
          <p>© {new Date().getFullYear()} StudioLine Architecture & Interiors. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-stone-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-stone-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
