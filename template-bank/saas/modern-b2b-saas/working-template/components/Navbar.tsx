"use client";

import React from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

interface NavbarProps {
  currentPage?: string;
  onPageChange?: (page: string) => void;
}

export default function Navbar({ currentPage, onPageChange }: NavbarProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  const navLinks = [
    { id: 'home', label: 'Product' },
    { id: 'features', label: 'Features' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
    { id: 'faq', label: 'FAQ' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 pt-6">
      <div className="max-w-6xl mx-auto rounded-full border border-white/10 bg-black/60 backdrop-blur-md px-4 py-2 flex items-center justify-between shadow-lg">
        {/* Logo Section */}
        <button 
          onClick={() => onPageChange?.('home')}
          className="flex items-center gap-2 pl-2 group"
        >
           <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center font-bold text-white shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">
             S
           </div>
           <div className="flex flex-col items-start translate-y-[1px]">
             <span className="font-semibold text-white tracking-tight hidden sm:block leading-none">Starter</span>
             <div className="flex items-center gap-1 opacity-40 group-hover:opacity-100 transition-opacity">
               <Sparkles className="w-2 h-2 text-blue-400" />
               <span className="text-[7px] font-bold text-white uppercase tracking-widest hidden sm:block">MRKDEV TEMPLATE</span>
             </div>
           </div>
        </button>

        {/* Desktop Links (Linear-inspired Simplicity) */}
        <div className="hidden md:flex items-center gap-8 text-[11px] font-bold uppercase tracking-widest text-white/50">
           {navLinks.map((link) => (
             <button 
               key={link.id}
               onClick={() => {
                 onPageChange?.(link.id);
                 setIsOpen(false);
               }}
               className={`hover:text-white transition-colors cursor-pointer ${currentPage === link.id ? 'text-white' : ''}`}
             >
               {link.label}
             </button>
           ))}
        </div>

        {/* Action CTAs */}
        <div className="flex items-center gap-4">
           <button 
             onClick={() => onPageChange?.('contact')}
             className="hidden sm:block text-[11px] font-bold uppercase tracking-widest text-white/50 hover:text-white transition-colors pr-2"
           >
             Log in
           </button>
           <button 
             onClick={() => onPageChange?.('contact')}
             className="px-4 py-1.5 rounded-full bg-white text-black text-[11px] font-extrabold uppercase tracking-widest hover:bg-white/90 shadow-white/10 shadow-lg transition-transform hover:scale-105 active:scale-95"
           >
             Get Started
           </button>
           <button 
             className="md:hidden p-1 text-white/70 hover:text-white"
             onClick={() => setIsOpen(!isOpen)}
           >
             {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
           </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="absolute top-20 left-4 right-4 md:hidden rounded-3xl border border-white/10 bg-black/90 backdrop-blur-2xl p-4 flex flex-col gap-2 animate-in slide-in-from-top-4 shadow-3xl">
           {navLinks.map((link) => (
             <button 
               key={link.id}
               onClick={() => {
                 onPageChange?.(link.id);
                 setIsOpen(false);
               }}
               className={`p-4 rounded-xl text-left text-xs font-bold uppercase tracking-widest transition-colors ${currentPage === link.id ? 'bg-white/10 text-white' : 'hover:bg-white/5 text-white/40'}`}
             >
               {link.label}
             </button>
           ))}
           <div className="h-px bg-white/10 mx-4 my-2" />
           <button 
             onClick={() => onPageChange?.('contact')}
             className="p-4 rounded-xl hover:bg-white/5 text-white/70 transition-colors text-left text-xs font-bold uppercase tracking-widest"
           >
             Log in
           </button>
        </div>
      )}
    </nav>
  );
}
