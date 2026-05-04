"use client";

import React, { useState } from 'react';
import { Menu, X, Phone, Flame, MapPin, MessageCircle } from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Home', id: 'home' },
    { name: 'Services', id: 'services' },
    { name: 'Fault Codes', id: 'plans' },
    { name: 'Our Work', id: 'projects' },
    { name: 'Service Areas', id: 'areas' },
    { name: 'About', id: 'about' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <div className="w-full relative z-[100] font-sans">
      {/* 1. Simplified Top Utility Bar */}
      <div className="bg-slate-50 text-slate-600 py-2 hidden lg:block border-b border-slate-200">
        <div className="container mx-auto px-4 max-w-[1200px] flex justify-between items-center text-xs font-semibold tracking-wider">
          <div className="flex gap-6">
            <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-orange-600" /> Local Mobile Service Dispatch</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="flex items-center gap-1.5 hover:text-green-600 transition-colors">
              <MessageCircle className="w-3.5 h-3.5 text-green-500" /> WhatsApp Support
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar - Lightened and Refined */}
      <nav className="bg-white border-b border-slate-200 shadow-sm sticky top-0">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo */}
            <button 
              onClick={() => onNavigate('home')}
              className="flex items-center gap-3 group"
            >
              <div className="bg-orange-600 p-2 rounded-md group-hover:bg-orange-700 transition-colors shadow-sm">
                <Flame className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col items-start leading-none">
                <span className="text-xl font-black text-slate-900 tracking-tight uppercase">
                  ClimaNova
                </span>
                <span className="text-[9px] font-bold text-slate-500 tracking-wider uppercase mt-0.5">Climate & Boiler Services</span>
              </div>
            </button>

            {/* Desktop Links - Calmer and spaced nicely */}
            <div className="hidden lg:flex items-center gap-6">
              {links.map((link) => (
                <button
                  key={link.id}
                  onClick={() => onNavigate(link.id)}
                  className={`text-xs font-bold uppercase tracking-wider transition-colors ${
                    currentPage === link.id ? 'text-orange-600' : 'text-slate-600 hover:text-orange-600'
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </div>

            {/* Desktop Contact CTA - Reduced bulky feel */}
            <div className="hidden lg:flex items-center">
              <a href="tel:555-0100" className="flex items-center gap-2 text-slate-900 hover:text-orange-600 transition-colors font-bold text-sm">
                <Phone className="w-4 h-4 text-orange-600" />
                <span>555-0100</span>
              </a>
            </div>

            {/* Mobile Toggle */}
            <button 
              className="lg:hidden p-2 text-slate-900 bg-slate-100 rounded-md"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden bg-white border-t border-slate-100 absolute w-full transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-[600px] shadow-lg' : 'max-h-0'}`}>
          <div className="px-4 py-6 flex flex-col gap-2">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  onNavigate(link.id);
                  setIsOpen(false);
                }}
                className={`text-left text-lg font-bold p-3 rounded-md ${currentPage === link.id ? 'bg-orange-50 text-orange-700' : 'text-slate-700 hover:bg-slate-50'}`}
              >
                {link.name}
              </button>
            ))}
            <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-3">
              <a href="tel:555-0100" className="flex items-center justify-center gap-2 bg-orange-600 text-white p-3.5 rounded-md font-bold text-base shadow-sm">
                <Phone className="w-5 h-5" /> 555-0100
              </a>
              <a href="#" className="flex items-center justify-center gap-2 bg-green-500 text-white p-3.5 rounded-md font-bold text-base shadow-sm">
                <MessageCircle className="w-5 h-5" /> Message on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
