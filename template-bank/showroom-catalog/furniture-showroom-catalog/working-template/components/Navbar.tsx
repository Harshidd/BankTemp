"use client";

import React, { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export default function Navbar({ currentPage, onPageChange }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { id: 'home', label: 'Home' },
    { id: 'collections', label: 'Collections' },
    { id: 'catalog', label: 'Catalog' },
    { id: 'inspiration', label: 'Inspiration' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-[100] bg-white/80 backdrop-blur-md border-b border-slate-200/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo / Brand Name */}
        <div 
          className="flex items-center gap-2 font-serif text-xl tracking-wider font-semibold text-slate-900 cursor-pointer select-none group"
          onClick={() => onPageChange('home')}
        >
          <span className="w-1 h-5 bg-slate-800 group-hover:scale-y-125 transition-transform duration-300"></span>
          <span>DOMO</span>
          <span className="font-light text-slate-500">SHOWROOM</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8 text-[13px] font-medium tracking-wide uppercase">
            {links.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => onPageChange(link.id)}
                  className={`transition-all duration-300 relative py-1 px-0.5 ${
                    currentPage === link.id
                      ? 'text-slate-950 font-semibold border-b-2 border-slate-950'
                      : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
          <button
            onClick={() => onPageChange('contact')}
            className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-[11px] font-semibold tracking-widest uppercase px-5 py-2.5 rounded-none transition-colors ml-4"
          >
            Visit Showroom
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-600 hover:text-slate-900 focus:outline-none select-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 animate-in spin-in-12 duration-200" /> : <Menu className="w-6 h-6 animate-in fade-in duration-200" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200/50 absolute top-full left-0 w-full animate-in slide-in-from-top-4 duration-200 ease-out z-[90]">
          <ul className="flex flex-col py-6 px-4 gap-4">
            {links.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => {
                    onPageChange(link.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full text-left py-2 px-3 text-sm tracking-wide uppercase transition-colors duration-200 ${
                    currentPage === link.id
                      ? 'text-slate-950 font-semibold border-l-4 border-slate-950 bg-slate-50'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50/50'
                  }`}
                >
                  {link.label}
                </button>
              </li>
            ))}
            <li className="pt-2 px-3">
              <button
                onClick={() => {
                  onPageChange('contact');
                  setMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-[12px] font-semibold tracking-widest uppercase py-3.5 rounded-none transition-colors"
              >
                Visit Showroom
                <ArrowRight className="w-4 h-4" />
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
