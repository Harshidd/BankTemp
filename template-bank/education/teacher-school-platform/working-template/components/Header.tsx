"use client";

import React from 'react';
import { GraduationCap, Menu, X, ArrowRight, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'Solutions', id: 'solutions' },
    { name: 'Teachers / Schools', id: 'audience' },
    { name: 'Reporting', id: 'reporting' },
    { name: 'Pricing', id: 'pricing' },
    { name: 'Contact', id: 'contact' },
    { name: 'FAQ', id: 'faq' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-[150] bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <div 
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => onNavigate('home')}
        >
          <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
            <GraduationCap className="w-6 h-6" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-xl font-black text-slate-900 tracking-tighter uppercase italic">EduPlatform</span>
            <span className="text-[9px] font-medium text-slate-400 tracking-[0.2em] uppercase">School & Teacher Platform</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={cn(
                "text-[11px] font-black uppercase tracking-widest transition-colors hover:text-blue-600",
                currentPage === item.id ? "text-blue-600" : "text-slate-500"
              )}
            >
              {item.name}
            </button>
          ))}
          <button 
             onClick={() => onNavigate('contact')}
             className="px-6 py-2.5 rounded-full bg-slate-950 text-white font-black text-[10px] uppercase tracking-widest hover:bg-blue-600 transition-colors shadow-lg shadow-slate-900/10"
          >
            Get Started
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden p-2 text-slate-500"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div className={cn(
        "lg:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-200 p-6 flex flex-col gap-6 transition-all duration-300 shadow-xl",
        isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
      )}>
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => {
              onNavigate(item.id);
              setIsOpen(false);
            }}
            className={cn(
              "text-left text-sm font-black uppercase tracking-widest transition-colors",
              currentPage === item.id ? "text-blue-600 underline underline-offset-8" : "text-slate-500"
            )}
          >
            {item.name}
          </button>
        ))}
        <button 
           onClick={() => {
             onNavigate('contact');
             setIsOpen(false);
           }}
           className="w-full py-4 rounded-2xl bg-slate-950 text-white font-black text-xs uppercase tracking-widest hover:bg-blue-600 transition-all flex items-center justify-center gap-3"
        >
          Request Demo <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </header>
  );
}
