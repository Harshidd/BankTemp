"use client";

import React, { useState } from 'react';
import { Menu, X, Phone, Clock, Droplets, MapPin, MessageCircle } from 'lucide-react';

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
    <div className="w-full relative z-[100] font-sans">
      {/* Top Utility Bar */}
      <div className="bg-sky-900 text-sky-100 py-2.5 hidden lg:block">
        <div className="container mx-auto px-4 max-w-[1200px] flex justify-between items-center text-sm font-medium">
          <div className="flex gap-8">
            <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-sky-400" /> Serving the Greater Metro Area</span>
            <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-sky-400" /> 24/7 Emergency Support</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="flex items-center gap-2 hover:text-white transition-colors">
              <MessageCircle className="w-4 h-4 text-sky-400" /> WhatsApp Support
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="bg-white border-b border-slate-200 shadow-sm sticky top-0">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="flex items-center justify-between h-24">
            
            {/* Logo */}
            <button 
              onClick={() => onNavigate('home')}
              className="flex items-center gap-2.5 group"
            >
              <div className="bg-sky-600 p-2.5 rounded-lg group-hover:bg-sky-700 transition-colors">
                <Droplets className="w-7 h-7 text-white" />
              </div>
              <div className="flex flex-col items-start leading-none">
                <span className="text-2xl font-black text-slate-900 tracking-tight uppercase">
                  FlowRight
                </span>
                <span className="text-[11px] font-bold text-sky-600 tracking-widest uppercase mt-1">Plumbing Services</span>
              </div>
            </button>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-8">
              {links.map((link) => (
                <button
                  key={link.id}
                  onClick={() => onNavigate(link.id)}
                  className={`text-[15px] font-bold transition-colors ${
                    currentPage === link.id ? 'text-sky-600' : 'text-slate-600 hover:text-sky-600'
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </div>

            {/* Desktop Contact CTA */}
            <div className="hidden lg:flex items-center gap-5">
              <div className="flex items-center gap-3">
                <div className="bg-slate-100 p-3 rounded-full">
                  <Phone className="w-5 h-5 text-sky-600" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Call Us 24/7</p>
                  <a href="tel:+15559876543" className="text-lg font-black text-slate-900 hover:text-sky-600 transition-colors">
                    (555) 987-6543
                  </a>
                </div>
              </div>
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
        <div className={`lg:hidden bg-white border-t border-slate-100 absolute w-full transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-[500px] shadow-lg' : 'max-h-0'}`}>
          <div className="px-4 py-6 flex flex-col gap-2">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  onNavigate(link.id);
                  setIsOpen(false);
                }}
                className={`text-left text-lg font-bold p-3 rounded-md ${currentPage === link.id ? 'bg-sky-50 text-sky-700' : 'text-slate-700 hover:bg-slate-50'}`}
              >
                {link.name}
              </button>
            ))}
            <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-4">
              <a href="tel:+15559876543" className="flex items-center justify-center gap-2 bg-sky-600 text-white p-4 rounded-md font-bold">
                <Phone className="w-5 h-5" /> Call (555) 987-6543
              </a>
              <a href="#" className="flex items-center justify-center gap-2 bg-green-500 text-white p-4 rounded-md font-bold">
                <MessageCircle className="w-5 h-5" /> WhatsApp Support
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
