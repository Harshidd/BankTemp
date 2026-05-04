"use client";

import React, { useState } from 'react';
import { Menu, X, Phone, Mail, Clock, Zap } from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Home', id: 'home' },
    { name: 'Services', id: 'services' },
    { name: 'Our Work', id: 'projects' },
    { name: 'About Us', id: 'about' },
    { name: 'Service Areas', id: 'areas' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <div className="w-full relative z-[100]">
      {/* Top Utility Bar - Cleaned & Fictional */}
      <div className="bg-slate-50 text-slate-600 py-2 hidden md:block border-b border-slate-200">
        <div className="container mx-auto px-4 max-w-[1200px] flex justify-between items-center text-xs font-semibold tracking-wide">
          <div className="flex gap-6">
            <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-amber-600" /> Mon - Sat: 08:00 - 18:00</span>
            <span className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5 text-amber-600" /> info@voltex-electric.test</span>
          </div>
          <div className="flex items-center gap-1.5 text-amber-600 font-bold">
            <span className="text-slate-500 font-normal">24/7 Priority Assistance:</span> 555-0199
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="bg-white border-b border-slate-200 shadow-sm sticky top-0">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo */}
            <button 
              onClick={() => onNavigate('home')}
              className="flex items-center gap-2 group"
            >
              <div className="bg-amber-500 p-2 rounded-lg group-hover:bg-amber-600 transition-colors">
                <Zap className="w-6 h-6 text-slate-900" />
              </div>
              <span className="text-xl md:text-2xl font-black text-slate-900 tracking-tight uppercase">
                Voltex
              </span>
            </button>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-8">
              {links.map((link) => (
                <button
                  key={link.id}
                  onClick={() => onNavigate(link.id)}
                  className={`text-[15px] font-bold transition-colors ${
                    currentPage === link.id ? 'text-amber-600' : 'text-slate-700 hover:text-amber-600'
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <div className="text-right mr-4">
                <p className="text-xs text-slate-500 font-medium">Call Us Now</p>
                <a href="tel:555-0199" className="text-lg font-black text-slate-900 hover:text-amber-600 transition-colors">
                  555-0199
                </a>
              </div>
              <button 
                onClick={() => onNavigate('contact')}
                className="bg-amber-500 text-slate-900 px-6 py-3 rounded-md font-bold hover:bg-amber-600 transition-colors"
              >
                Get a Quote
              </button>
            </div>

            {/* Mobile Toggle */}
            <button 
              className="lg:hidden p-2 text-slate-900"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden bg-white border-t border-slate-100 absolute w-full transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-[500px] shadow-lg' : 'max-h-0'}`}>
          <div className="px-4 py-4 flex flex-col gap-2">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  onNavigate(link.id);
                  setIsOpen(false);
                }}
                className={`text-left text-lg font-bold p-3 rounded-md ${currentPage === link.id ? 'bg-amber-50 text-amber-700' : 'text-slate-700 hover:bg-slate-50'}`}
              >
                {link.name}
              </button>
            ))}
            <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-4">
              <a href="tel:555-0199" className="flex items-center justify-center gap-2 bg-slate-100 text-slate-900 p-3 rounded-md font-bold">
                <Phone className="w-5 h-5 text-amber-600" /> Call 555-0199
              </a>
              <button 
                onClick={() => {
                  onNavigate('contact');
                  setIsOpen(false);
                }}
                className="bg-amber-500 text-slate-900 p-3 rounded-md font-bold text-center"
              >
                Request a Quote
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
