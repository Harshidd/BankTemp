"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X, Newspaper, BookOpen, MessageCircle } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'products', label: 'Products' },
    { id: 'resources', label: 'Resources' },
    { id: 'community', label: 'Community' },
    { id: 'contact', label: 'Contact' },
    { id: 'faq', label: 'FAQ' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md border-b border-slate-100 py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <button 
          onClick={() => onNavigate('home')}
          className="text-2xl font-bold tracking-tight text-slate-900 group"
        >
          [BRAND<span className="text-emerald-600">NAME]</span>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                onNavigate(link.id);
                setIsMobileMenuOpen(false);
              }}
              className={`text-sm font-medium transition-colors hover:text-emerald-600 ${
                currentPage === link.id ? 'text-emerald-600' : 'text-slate-600'
              }`}
            >
              {link.label}
            </button>
          ))}
          <button 
            onClick={() => onNavigate('community')}
            className="px-5 py-2.5 bg-emerald-600 text-white text-sm font-semibold rounded-full hover:bg-emerald-700 transition-all shadow-sm shadow-emerald-200"
          >
            Join Newsletter
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-slate-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-xl animate-in slide-in-from-top duration-300">
          <div className="px-6 py-8 flex flex-col gap-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  onNavigate(link.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`text-lg font-medium text-left ${
                  currentPage === link.id ? 'text-emerald-600' : 'text-slate-900'
                }`}
              >
                {link.label}
              </button>
            ))}
            <button 
              onClick={() => {
                onNavigate('community');
                setIsMobileMenuOpen(false);
              }}
              className="w-full py-4 bg-emerald-600 text-white font-semibold rounded-xl text-center"
            >
              Join Newsletter
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
