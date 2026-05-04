"use client";

import React from 'react';
import { ArrowRight, MapPin, Phone, Mail } from 'lucide-react';

interface FooterProps {
  onPageChange: (page: string) => void;
}

export default function Footer({ onPageChange }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-100 border-t border-slate-800 pt-20 pb-12 select-none select-text">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Brand Column */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 font-serif text-2xl font-semibold tracking-wider text-white mb-5 select-none cursor-pointer" onClick={() => onPageChange('home')}>
                <span className="w-1.5 h-6 bg-white"></span>
                <span>DOMO</span>
                <span className="font-light text-slate-400">SHOWROOM</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-6 font-light">
                Premium modern furniture showroom and catalog. Delivering calm, refined, and lifestyle-aware interiors crafted with first-class design expertise.
              </p>
            </div>
            
            {/* Direct Social Links */}
            <div className="flex gap-4 text-xs font-medium tracking-wider text-slate-400">
              <span className="hover:text-white transition-colors cursor-pointer select-none">INSTAGRAM</span>
              <span className="text-slate-700">|</span>
              <span className="hover:text-white transition-colors cursor-pointer select-none">PINTEREST</span>
              <span className="text-slate-700">|</span>
              <span className="hover:text-white transition-colors cursor-pointer select-none">LINKEDIN</span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3 flex flex-col gap-6 select-none">
            <h3 className="font-serif font-semibold text-white tracking-wider text-sm uppercase">Quick Navigation</h3>
            <ul className="flex flex-col gap-3.5 text-slate-400 text-sm">
              <li>
                <button onClick={() => onPageChange('home')} className="hover:text-white transition-colors tracking-wide text-left flex items-center gap-1 group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-white transition-all duration-300 ease-in-out"></span>
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => onPageChange('collections')} className="hover:text-white transition-colors tracking-wide text-left flex items-center gap-1 group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-white transition-all duration-300 ease-in-out"></span>
                  Collections
                </button>
              </li>
              <li>
                <button onClick={() => onPageChange('catalog')} className="hover:text-white transition-colors tracking-wide text-left flex items-center gap-1 group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-white transition-all duration-300 ease-in-out"></span>
                  Product Catalog
                </button>
              </li>
              <li>
                <button onClick={() => onPageChange('inspiration')} className="hover:text-white transition-colors tracking-wide text-left flex items-center gap-1 group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-white transition-all duration-300 ease-in-out"></span>
                  Design Inspiration
                </button>
              </li>
              <li>
                <button onClick={() => onPageChange('about')} className="hover:text-white transition-colors tracking-wide text-left flex items-center gap-1 group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-white transition-all duration-300 ease-in-out"></span>
                  About Studio
                </button>
              </li>
            </ul>
          </div>

          {/* Showroom / Local Info */}
          <div className="md:col-span-4 flex flex-col gap-6">
            <h3 className="font-serif font-semibold text-white tracking-wider text-sm uppercase">Visit Showroom</h3>
            <div className="flex flex-col gap-4 text-slate-400 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-slate-300 flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Büyükdere Cd. No: 193, Levent<br />34394 Şişli / İstanbul, Turkey
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-slate-300 flex-shrink-0" />
                <a href="tel:+902123456789" className="hover:text-white transition-colors font-sans tracking-wide">
                  +90 212 345 6789
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-slate-300 flex-shrink-0" />
                <a href="mailto:showroom@domofurniture.com" className="hover:text-white transition-colors font-sans">
                  info@domofurniture.com
                </a>
              </div>
            </div>

            <button
              onClick={() => onPageChange('contact')}
              className="mt-2 inline-flex items-center gap-2 border border-slate-700 hover:border-white hover:bg-white hover:text-slate-900 transition-all text-white text-[11px] font-semibold tracking-widest uppercase px-5 py-3 select-none w-max"
            >
              Contact Us <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="border-t border-slate-800/60 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs tracking-wider text-slate-500 font-light select-none">
          <p>© {currentYear} DOMO Showroom. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-slate-300 transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-300 transition-colors cursor-pointer">Terms of Use</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
