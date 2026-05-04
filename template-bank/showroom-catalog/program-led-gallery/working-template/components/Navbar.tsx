"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Search } from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Artists & Estates', id: 'artists' },
    { name: 'Exhibitions', id: 'exhibitions' },
    { name: 'Programs & Publishing', id: 'programs' },
    { name: 'Spaces', id: 'spaces' },
    { name: 'Institution', id: 'about' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${scrolled ? 'bg-stone-50/95 backdrop-blur-md border-b border-stone-200 py-4' : 'bg-stone-50 border-b border-stone-200 py-6'}`}>
      <div className="container mx-auto px-6 md:px-12 max-w-[1600px]">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          
          {/* Top Row: Logo & Utilities */}
          <div className="flex items-center justify-between w-full lg:w-auto">
            <button 
              onClick={() => onNavigate('home')}
              className="text-2xl md:text-3xl font-normal tracking-tight text-stone-900 hover:text-stone-500 transition-colors select-none"
            >
              MERIDIAN
            </button>
            <div className="flex items-center gap-4 lg:hidden">
              <button className="p-2 text-stone-900"><Search className="w-5 h-5" /></button>
              <button 
                className="p-2 text-stone-900 transition-colors"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8 lg:gap-12">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => onNavigate(link.id)}
                className={`text-[13px] font-medium tracking-wide transition-all hover:text-stone-500 ${
                  currentPage === link.id ? 'text-stone-900 border-b border-stone-900 pb-0.5' : 'text-stone-700'
                }`}
              >
                {link.name}
              </button>
            ))}
            <button className="text-stone-900 hover:text-stone-500 transition-colors ml-4"><Search className="w-4 h-4" /></button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      <div className={`lg:hidden absolute top-full left-0 right-0 bg-stone-50 transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-screen border-b border-stone-200 shadow-xl' : 'max-h-0'}`}>
        <div className="px-6 py-8 flex flex-col gap-6">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                onNavigate(link.id);
                setIsOpen(false);
              }}
              className={`text-left text-lg font-normal tracking-wide ${currentPage === link.id ? 'text-stone-900' : 'text-stone-500'}`}
            >
              {link.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
