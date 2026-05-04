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
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Projects', id: 'projects' },
    { name: 'Materials', id: 'collections' },
    { name: 'Services', id: 'services' },
    { name: 'Studio', id: 'about' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-md border-b border-stone-200 py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <button 
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 group"
          >
            <span className="text-xl font-bold tracking-tight text-stone-900 group-hover:text-stone-600 transition-colors">
              Studio<span className="font-normal italic">Line</span>
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => onNavigate(link.id)}
                className={`text-sm font-medium transition-colors ${
                  currentPage === link.id ? 'text-stone-900 border-b border-stone-900' : 'text-stone-500 hover:text-stone-900'
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Contact / Showroom Button */}
          <div className="hidden md:flex items-center gap-6">
            <button 
              onClick={() => onNavigate('contact')}
              className="text-sm font-medium text-stone-900 flex items-center gap-2 hover:text-stone-600 transition-colors"
            >
              Visit Showroom
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden p-2 text-stone-900"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 right-0 bg-white border-b border-stone-200 transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-screen border-b' : 'max-h-0 border-none'}`}>
        <div className="px-6 py-8 flex flex-col gap-6">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                onNavigate(link.id);
                setIsOpen(false);
              }}
              className={`text-left text-lg font-medium ${currentPage === link.id ? 'text-stone-900' : 'text-stone-500'}`}
            >
              {link.name}
            </button>
          ))}
          <div className="h-px bg-stone-100 my-2" />
          <button 
            onClick={() => {
              onNavigate('contact');
              setIsOpen(false);
            }}
            className="text-left text-lg font-medium text-stone-900 flex items-center justify-between"
          >
            Visit Showroom
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </nav>
  );
}
