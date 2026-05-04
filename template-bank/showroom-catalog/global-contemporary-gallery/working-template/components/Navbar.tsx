"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Artists', id: 'artists' },
    { name: 'Exhibitions', id: 'exhibitions' },
    { name: 'Spaces', id: 'spaces' },
    { name: 'About', id: 'about' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${scrolled ? 'bg-neutral-950 text-white py-4 shadow-xl' : 'bg-transparent text-white py-6'}`}>
      <div className="container mx-auto px-6 md:px-12 max-w-[1600px]">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <button 
            onClick={() => onNavigate('home')}
            className="flex items-center group select-none"
          >
            <span className="text-2xl md:text-3xl font-black tracking-tight uppercase leading-none">
              VANGUARD
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => onNavigate(link.id)}
                className={`text-sm font-bold uppercase tracking-widest transition-all ${
                  currentPage === link.id ? 'opacity-100 border-b-2 border-current pb-1' : 'opacity-70 hover:opacity-100'
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Mobile menu toggle */}
          <button 
            className="lg:hidden p-2 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      <div className={`lg:hidden absolute top-full left-0 right-0 bg-neutral-950 text-white transition-all duration-500 overflow-hidden ${isOpen ? 'max-h-screen border-t border-neutral-800' : 'max-h-0'}`}>
        <div className="px-6 py-8 flex flex-col gap-6">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                onNavigate(link.id);
                setIsOpen(false);
              }}
              className={`text-left text-lg font-black uppercase tracking-widest ${currentPage === link.id ? 'opacity-100' : 'opacity-50'}`}
            >
              {link.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
