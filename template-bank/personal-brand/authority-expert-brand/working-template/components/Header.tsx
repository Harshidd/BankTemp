"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const navLinks = [
  { label: 'About', page: 'about' },
  { label: 'Work With Me', page: 'offers' },
  { label: 'Resources', page: 'resources' },
  { label: 'Proof', page: 'testimonials' },
  { label: 'FAQ', page: 'faq' },
];

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const handleNav = (page: string) => {
    onNavigate(page);
    setMobileOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-stone-50/95 backdrop-blur-sm border-b border-stone-200/80 shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand Name */}
        <button
          onClick={() => handleNav('home')}
          className="text-stone-900 font-bold text-lg tracking-tight hover:text-amber-700 transition-colors"
        >
          [Your Name]
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <button
              key={link.page}
              onClick={() => handleNav(link.page)}
              className={`text-sm font-medium transition-colors ${currentPage === link.page ? 'text-amber-700' : 'text-stone-600 hover:text-stone-900'}`}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNav('contact')}
            className="ml-4 px-5 py-2 rounded-full bg-stone-900 text-stone-50 text-sm font-semibold hover:bg-amber-700 transition-colors"
          >
            Get in Touch
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-stone-700 hover:text-stone-900 transition-colors"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-stone-50 border-t border-stone-200 px-6 py-6 flex flex-col gap-4">
          {navLinks.map(link => (
            <button
              key={link.page}
              onClick={() => handleNav(link.page)}
              className={`text-left text-base font-medium py-1 transition-colors ${currentPage === link.page ? 'text-amber-700' : 'text-stone-700 hover:text-stone-900'}`}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNav('contact')}
            className="mt-2 px-5 py-3 rounded-full bg-stone-900 text-stone-50 text-sm font-semibold w-full hover:bg-amber-700 transition-colors"
          >
            Get in Touch
          </button>
        </div>
      )}
    </header>
  );
}
