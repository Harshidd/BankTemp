"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar } from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export default function Navbar({ currentPage, onPageChange }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'team', label: 'Our Team' },
    { id: 'about', label: 'About' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'contact', label: 'Contact' },
    { id: 'faq', label: 'FAQ' },
  ];

  const handleLinkClick = (id: string) => {
    onPageChange(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div 
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() => handleLinkClick('home')}
          >
            <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-105 transition-transform">
              <span className="font-bold text-xl">CE</span>
            </div>
            <div className="flex flex-col">
              <span className={`font-black tracking-tighter text-xl leading-none ${isScrolled ? 'text-slate-900' : 'text-slate-900 md:text-white'}`}>CLINIC</span>
              <span className={`font-bold tracking-widest text-[10px] uppercase leading-tight ${isScrolled ? 'text-indigo-600' : 'text-indigo-600 md:text-indigo-300'}`}>Expert Group</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`text-sm font-bold uppercase tracking-widest transition-colors hover:text-indigo-600 ${
                    currentPage === link.id 
                      ? 'text-indigo-600' 
                      : isScrolled ? 'text-slate-600' : 'text-slate-600 md:text-white'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
            
            <div className="flex items-center gap-4 border-l border-slate-200 pl-8 ml-4">
              <a href="tel:+15550000000" className={`flex items-center gap-2 text-sm font-bold hover:text-indigo-600 transition-colors ${isScrolled ? 'text-slate-900' : 'text-slate-900 md:text-white'}`}>
                <Phone className="w-4 h-4 text-indigo-500" />
                <span>800 555 0123</span>
              </a>
              <button 
                onClick={() => handleLinkClick('contact')}
                className="bg-indigo-600 text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg shadow-indigo-200 hover:bg-slate-900 hover:shadow-none transition-all active:scale-95 flex items-center gap-2"
              >
                <Calendar className="w-3.5 h-3.5" />
                Book Now
              </button>
            </div>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center gap-4">
             <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors ${isScrolled ? 'text-slate-900' : 'text-slate-900'}`}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-100 shadow-2xl animate-in fade-in slide-in-from-top duration-300">
          <div className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`text-left text-lg font-bold py-2 ${
                  currentPage === link.id ? 'text-indigo-600' : 'text-slate-600'
                }`}
              >
                {link.label}
              </button>
            ))}
            <div className="h-px bg-slate-100 my-2" />
            <a href="tel:+15550000000" className="flex items-center gap-3 text-slate-900 font-bold py-2">
              <Phone className="w-5 h-5 text-indigo-600" />
              800 555 0123
            </a>
            <button 
              onClick={() => handleLinkClick('contact')}
              className="w-full bg-indigo-600 text-white py-4 rounded-2xl font-bold uppercase tracking-widest shadow-xl shadow-indigo-100 mt-2"
            >
              Book Appointment
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
