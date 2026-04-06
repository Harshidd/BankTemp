"use client";

import React, { useState } from 'react';
import { Menu, X, Power, Shield, Settings, Zap } from 'lucide-react';

interface NavbarProps {
  currentPage?: string;
  onPageChange?: (pageId: string) => void;
}

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'features', label: 'Features' },
  { id: 'workflows', label: 'Workflows' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'contact', label: 'Book Demo' },
  { id: 'faq', label: 'Operating Protocol' },
];

export default function Navbar({ currentPage, onPageChange }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 pt-6">
      <div className="max-w-6xl mx-auto rounded-[2.5rem] border border-slate-950/10 bg-white/80 backdrop-blur-2xl px-8 py-5 flex items-center justify-between shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] relative overflow-hidden group">
        
        {/* Branding Hub (Execution Focused) */}
        <button 
          onClick={() => onPageChange?.('home')}
          className="flex items-center gap-4 group/logo transition-all hover:scale-105 active:scale-95"
        >
           <div className="w-10 h-10 rounded-xl bg-slate-950 flex items-center justify-center font-bold text-white shadow-2xl group-hover/logo:bg-amber-500 group-hover/logo:rotate-3 transition-all duration-300">
             W
           </div>
           <div className="flex flex-col items-start leading-none pt-1">
             <span className="font-extrabold text-slate-950 tracking-tighter uppercase text-sm italic">WorkflowOps</span>
             <div className="flex items-center gap-1.5 opacity-40 group-hover/logo:opacity-100 transition-opacity">
                <Zap className="w-2 h-2 text-amber-500" />
                <span className="text-[7.5px] font-bold text-slate-500 uppercase tracking-[0.3em]">MRKDEV STARTER</span>
             </div>
           </div>
        </button>

        {/* Global Nav Directory (Execution Logic) */}
        <div className="hidden lg:flex items-center gap-10 text-[10px] font-extrabold uppercase tracking-[0.2em] text-slate-500">
           {navLinks.map((link) => (
             <button 
               key={link.id}
               onClick={() => {
                 onPageChange?.(link.id);
                 setIsOpen(false);
               }}
               className={`hover:text-amber-600 transition-all cursor-pointer relative ${currentPage === link.id ? 'text-slate-950' : ''}`}
             >
               {link.label}
               {currentPage === link.id && (
                 <div className="absolute -bottom-4 left-0 right-0 h-0.5 bg-amber-500 animate-in fade-in slide-in-from-top-1" />
               )}
             </button>
           ))}
        </div>

        {/* Action States */}
        <div className="flex items-center gap-4">
           <button 
             onClick={() => onPageChange?.('contact')}
             className="hidden sm:block text-[10px] font-extrabold uppercase tracking-[0.2em] text-slate-400 hover:text-slate-950 transition-colors"
           >
             Login
           </button>
           <button 
             onClick={() => onPageChange?.('contact')}
             className="px-8 py-3 rounded-2xl bg-slate-950 text-white text-[10px] font-extrabold uppercase tracking-[0.2em] hover:bg-slate-800 shadow-2xl transition-all hover:-translate-y-0.5 active:translate-y-0"
           >
             Take Control
           </button>
           
           <button 
             className="lg:hidden p-1 text-slate-950 hover:text-amber-600 transition-colors"
             onClick={() => setIsOpen(!isOpen)}
           >
             {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
           </button>
        </div>
      </div>

      {/* Mobile Control Panel */}
      {isOpen && (
        <div className="absolute top-32 left-4 right-4 lg:hidden rounded-[3rem] border border-slate-950/10 bg-white shadow-3xl p-10 flex flex-col gap-8 animate-in slide-in-from-top-4 duration-500 overflow-hidden">
           {navLinks.map((link) => (
             <button 
               key={link.id}
               onClick={() => {
                 onPageChange?.(link.id);
                 setIsOpen(false);
               }}
               className={`text-left text-xs font-black uppercase tracking-[0.3em] transition-all py-1 ${currentPage === link.id ? 'text-amber-600 pl-4 border-l-2 border-amber-600' : 'text-slate-500 hover:text-slate-950 hover:pl-2'}`}
             >
               {link.label}
             </button>
           ))}
           <div className="h-px bg-slate-100 my-2" />
           <button 
             onClick={() => onPageChange?.('contact')}
             className="text-slate-950 text-xs font-black uppercase tracking-[0.3em] text-left"
           >
             Platform Walkthrough
           </button>
        </div>
      )}
    </nav>
  );
}
