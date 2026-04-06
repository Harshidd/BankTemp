"use client";

import React, { useState } from 'react';
import { Menu, X, Database, Sparkles } from 'lucide-react';

interface NavbarProps {
  currentPage?: string;
  onPageChange?: (pageId: string) => void;
}

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'features', label: 'Features' },
  { id: 'solutions', label: 'Solutions' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'contact', label: 'Book Demo' },
  { id: 'faq', label: 'Documentation' },
];

export default function Navbar({ currentPage, onPageChange }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 pt-6">
      <div className="max-w-6xl mx-auto rounded-3xl border border-white/10 bg-slate-900/60 backdrop-blur-xl px-6 py-4 flex items-center justify-between shadow-2xl relative overflow-hidden group">
        {/* Interaction Accent */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
        
        {/* Branding Hub */}
        <button 
          onClick={() => onPageChange?.('home')}
          className="flex items-center gap-3 relative group/logo transition-all hover:scale-105 active:scale-95"
        >
           <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center font-bold text-slate-950 shadow-xl shadow-emerald-500/10 group-hover/logo:rotate-3 transition-transform">
             D
           </div>
           <div className="flex flex-col items-start leading-none pt-1">
             <span className="font-bold text-white tracking-widest uppercase text-xs">DataAISaaS</span>
             <div className="flex items-center gap-1.5 opacity-40 group-hover/logo:opacity-100 transition-opacity">
                <Sparkles className="w-2 h-2 text-emerald-400" />
                <span className="text-[7px] font-bold text-white uppercase tracking-[0.3em]">MRKDEV TEMPLATE</span>
             </div>
           </div>
        </button>

        {/* Global Nav Directory (Industrial Slate Theme) */}
        <div className="hidden lg:flex items-center gap-12 text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">
           {navLinks.map((link) => (
             <button 
               key={link.id}
               onClick={() => {
                 onPageChange?.(link.id);
                 setIsOpen(false);
               }}
               className={`hover:text-emerald-400 transition-all cursor-pointer relative ${currentPage === link.id ? 'text-emerald-400' : ''}`}
             >
               {link.label}
               {currentPage === link.id && (
                 <div className="absolute -bottom-4 left-0 right-0 h-0.5 bg-emerald-500 animate-in fade-in slide-in-from-top-1" />
               )}
             </button>
           ))}
        </div>

        {/* High-Velocity CTAs */}
        <div className="flex items-center gap-4">
           <button 
             onClick={() => onPageChange?.('contact')}
             className="hidden sm:block text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500 hover:text-white transition-colors"
           >
             Log In
           </button>
           <button 
             onClick={() => onPageChange?.('contact')}
             className="px-6 py-2.5 rounded-xl bg-emerald-500 text-slate-950 text-[10px] font-extrabold uppercase tracking-widest hover:bg-emerald-400 shadow-xl shadow-emerald-500/10 transition-all hover:scale-105 active:scale-95"
           >
             Try Free
           </button>
           
           <button 
             className="lg:hidden p-1 text-slate-400 hover:text-white transition-colors"
             onClick={() => setIsOpen(!isOpen)}
           >
             {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
           </button>
        </div>
      </div>

      {/* Mobile Control Panel */}
      {isOpen && (
        <div className="absolute top-28 left-4 right-4 lg:hidden rounded-[2.5rem] border border-white/10 bg-slate-900 shadow-3xl p-8 flex flex-col gap-6 animate-in slide-in-from-top-4 duration-500 overflow-hidden group">
           <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent pointer-events-none" />
           {navLinks.map((link) => (
             <button 
               key={link.id}
               onClick={() => {
                 onPageChange?.(link.id);
                 setIsOpen(false);
               }}
               className={`text-left text-xs font-bold uppercase tracking-[0.4em] transition-all py-1 ${currentPage === link.id ? 'text-emerald-400 pl-4' : 'text-slate-500 hover:text-white hover:pl-2'}`}
             >
               {link.label}
             </button>
           ))}
           <div className="h-px bg-white/5 my-2" />
           <button 
             onClick={() => onPageChange?.('contact')}
             className="text-emerald-500 text-xs font-bold uppercase tracking-[0.4em] text-left"
           >
             Watch Platform Demo
           </button>
        </div>
      )}
    </nav>
  );
}
