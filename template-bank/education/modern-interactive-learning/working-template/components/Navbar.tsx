"use client";

import React, { useState } from 'react';
import { Menu, X, BookOpen, GraduationCap, Zap, ChevronDown, CheckCircle, Search } from 'lucide-react';

interface NavbarProps {
  currentPage?: string;
  onPageChange?: (pageId: string) => void;
}

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'programs', label: 'Programs' },
  { id: 'how-it-works', label: 'Method' },
  { id: 'audience', label: 'For You' },
  { id: 'pricing', label: 'Plans' },
  { id: 'faq', label: 'FAQ' },
];

export default function Navbar({ currentPage, onPageChange }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 lg:pt-8 bg-transparent pointer-events-none">
      <div className="max-w-7xl mx-auto rounded-[1.5rem] lg:rounded-[2.5rem] border border-blue-100 bg-white/90 backdrop-blur-3xl px-6 lg:px-12 py-4 lg:py-6 flex items-center justify-between shadow-[0_24px_48px_-8px_rgba(30,58,138,0.1)] pointer-events-auto relative group active:scale-[0.99] transition-transform">
        
        {/* Branding (Educational DNA) */}
        <button 
          onClick={() => onPageChange?.('home')}
          className="flex items-center gap-3 group/logo transition-all hover:scale-105 active:scale-95"
        >
           <div className="w-10 lg:w-12 h-10 lg:h-12 rounded-2xl bg-blue-600 flex items-center justify-center font-bold text-white shadow-xl group-hover/logo:bg-blue-500 group-hover/logo:rotate-3 transition-all duration-300">
             <BookOpen className="w-5 lg:w-6 h-5 lg:h-6" />
           </div>
           <div className="flex flex-col items-start leading-none pt-1">
             <span className="font-black text-slate-900 tracking-tight uppercase text-xs lg:text-sm">ModernLearning</span>
             <div className="flex items-center gap-1.5 opacity-40 group-hover/logo:opacity-100 transition-opacity">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                <span className="text-[7px] lg:text-[8.5px] font-black text-slate-500 uppercase tracking-[0.2em] pt-0.5">MRKDEV STARTER</span>
             </div>
           </div>
        </button>

        {/* Learning Nav Loop */}
        <div className="hidden lg:flex items-center gap-8 text-[11px] font-black uppercase tracking-[0.15em] text-slate-400">
           {navLinks.map((link) => (
             <button 
               key={link.id}
               onClick={() => {
                 onPageChange?.(link.id);
                 setIsOpen(false);
               }}
               className={`hover:text-blue-600 transition-all cursor-pointer relative py-2 ${currentPage === link.id ? 'text-slate-900' : ''}`}
             >
               {link.label}
               {currentPage === link.id && (
                 <div className="absolute -bottom-1 left-0 right-0 h-1 bg-blue-600 rounded-full animate-in fade-in slide-in-from-top-1" />
               )}
             </button>
           ))}
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-4">
           <button className="hidden sm:flex p-2.5 rounded-xl bg-slate-50 text-slate-400 hover:bg-slate-100 hover:text-blue-600 transition-all">
             <Search className="w-4 h-4" />
           </button>
           <button 
            onClick={() => onPageChange?.('contact')}
            className="px-6 lg:px-8 py-3 lg:py-4 rounded-xl lg:rounded-2xl bg-slate-900 text-white text-[10px] lg:text-[11px] font-black uppercase tracking-[0.15em] hover:bg-blue-600 shadow-xl transition-all hover:scale-110 active:scale-95 flex items-center gap-2 group/btn"
           >
             Join Free
             <Zap className="w-3.5 h-3.5 group-hover/btn:fill-white transition-all animate-pulse" />
           </button>
           
           <button 
             className="lg:hidden p-2 text-slate-900 hover:text-blue-600 transition-colors"
             onClick={() => setIsOpen(!isOpen)}
           >
             {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
           </button>
        </div>
      </div>

      {/* Mobile Catalog Overlay */}
      {isOpen && (
        <div className="absolute top-24 left-4 right-4 lg:hidden rounded-[2.5rem] border border-blue-100 bg-white/95 backdrop-blur-2xl shadow-3xl p-10 flex flex-col gap-6 animate-in slide-in-from-top-4 duration-500 overflow-hidden pointer-events-auto">
           {navLinks.map((link) => (
             <button 
               key={link.id}
               onClick={() => {
                 onPageChange?.(link.id);
                 setIsOpen(false);
               }}
               className={`text-left text-xs font-black uppercase tracking-[0.2em] transition-all py-1 ${currentPage === link.id ? 'text-blue-600 pl-4 border-l-2 border-blue-600' : 'text-slate-500 hover:text-slate-900 hover:pl-2'}`}
             >
               {link.label}
             </button>
           ))}
           <div className="h-px bg-slate-100 my-2" />
           <button 
             onClick={() => onPageChange?.('contact')}
             className="text-slate-900 text-[10px] font-black uppercase tracking-[0.2em] px-8 py-5 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-between"
           >
             Start Your Journey <GraduationCap className="w-4 h-4 text-blue-600" />
           </button>
        </div>
      )}
    </nav>
  );
}
