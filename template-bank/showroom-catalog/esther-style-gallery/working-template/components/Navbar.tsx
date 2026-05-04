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
    const handleScroll = () => setScrolled(window.scrollY > 15);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Artists', id: 'artists' },
    { name: 'Exhibitions', id: 'exhibitions' },
    { name: 'Press & News', id: 'press' },
    { name: 'Locations', id: 'locations' },
    { name: 'About', id: 'about' },
  ];

  // Integrated header styling when on the homepage & not scrolled
  const isTransparent = currentPage === 'home' && !scrolled;

  const navTheme = isTransparent 
    ? 'bg-transparent text-white border-transparent py-6' 
    : 'bg-zinc-50/95 backdrop-blur-md border-b border-zinc-200 text-zinc-950 py-4';

  const linkActiveColor = isTransparent ? 'border-white text-white' : 'border-zinc-950 text-zinc-950';
  const linkInactiveColor = isTransparent ? 'text-zinc-300 hover:text-white' : 'text-zinc-500 hover:text-zinc-950';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${navTheme}`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          
          {/* Logo / Title */}
          <button 
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 group"
          >
            <span className={`text-xl font-light tracking-widest uppercase transition-colors ${isTransparent ? 'group-hover:text-zinc-300' : 'group-hover:text-zinc-500'}`}>
              SATELLITE <span className="font-normal">CONTEMPORARY</span>
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => onNavigate(link.id)}
                className={`text-xs font-light tracking-widest uppercase transition-colors ${
                  currentPage === link.id ? `font-normal border-b ${linkActiveColor}` : linkInactiveColor
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Contact / Right Arrow Action */}
          <div className="hidden md:flex items-center">
            <button 
              onClick={() => onNavigate('locations')}
              className={`text-xs font-light tracking-widest uppercase flex items-center gap-2 transition-colors ${isTransparent ? 'text-white hover:text-zinc-300' : 'text-zinc-950 hover:text-zinc-500'}`}
            >
              Contact
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile menu toggle */}
          <button 
            className="md:hidden p-2 text-current"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      <div className={`md:hidden absolute top-full left-0 right-0 bg-zinc-50 text-zinc-950 border-b border-zinc-200 transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-screen border-b' : 'max-h-0 border-none'}`}>
        <div className="px-6 py-8 flex flex-col gap-6">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                onNavigate(link.id);
                setIsOpen(false);
              }}
              className={`text-left text-sm font-light uppercase tracking-widest ${currentPage === link.id ? 'text-zinc-950 font-normal' : 'text-zinc-500'}`}
            >
              {link.name}
            </button>
          ))}
          <div className="h-px bg-zinc-200 my-1" />
          <button 
            onClick={() => {
              onNavigate('locations');
              setIsOpen(false);
            }}
            className="text-left text-sm font-light uppercase tracking-widest text-zinc-950 flex items-center justify-between"
          >
            Contact
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </nav>
  );
}
