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
    { name: 'Ex Exhibitions', id: 'exhibitions' },
    { name: 'Works', id: 'works' },
    { name: 'Artists', id: 'artists' },
    { name: 'About', id: 'about' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${scrolled ? 'bg-neutral-50/95 backdrop-blur-md border-b border-neutral-200 py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <button 
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 group"
          >
            <span className="text-lg font-normal tracking-wider text-neutral-900 group-hover:text-neutral-500 transition-colors uppercase">
              Contemporary<span className="font-light">Space</span>
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => onNavigate(link.id)}
                className={`text-sm font-light tracking-wide uppercase transition-colors ${
                  currentPage === link.id ? 'text-neutral-900 font-normal' : 'text-neutral-500 hover:text-neutral-900'
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Contact / Visit Button */}
          <div className="hidden md:flex items-center">
            <button 
              onClick={() => onNavigate('contact')}
              className="text-sm font-light tracking-wide uppercase text-neutral-900 hover:text-neutral-500 transition-colors flex items-center gap-2"
            >
              Visit
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden p-2 text-neutral-900"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 right-0 bg-neutral-50 border-b border-neutral-200 transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-screen border-b' : 'max-h-0 border-none'}`}>
        <div className="px-6 py-8 flex flex-col gap-5">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                onNavigate(link.id);
                setIsOpen(false);
              }}
              className={`text-left text-base font-light uppercase tracking-wide ${currentPage === link.id ? 'text-neutral-900 font-normal' : 'text-neutral-500'}`}
            >
              {link.name}
            </button>
          ))}
          <div className="h-px bg-neutral-200 my-1" />
          <button 
            onClick={() => {
              onNavigate('contact');
              setIsOpen(false);
            }}
            className="text-left text-base font-light uppercase tracking-wide text-neutral-900 flex items-center justify-between"
          >
            Visit
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </nav>
  );
}
