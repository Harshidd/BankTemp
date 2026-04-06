import React from 'react';
import { Phone, Clock, MapPin, Menu, X, Sparkles } from 'lucide-react';

interface NavbarProps {
  currentPage?: string;
  onPageChange?: (page: string) => void;
}

export default function Navbar({ currentPage = 'home', onPageChange }: NavbarProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'areas', label: 'Areas' },
    { id: 'about', label: 'About' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (id: string) => {
    onPageChange?.(id);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all p-4">
      {/* Top Bar for Urgency/Status (SEO & Conversion logic) */}
      <div className="max-w-6xl mx-auto rounded-t-2xl border-x border-t border-slate-900/5 bg-slate-950 px-4 py-2 flex items-center justify-between text-white/50 text-[10px] font-bold uppercase tracking-[0.2em] hidden md:flex">
         <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
               <Clock className="w-3 h-3 text-emerald-500" />
               <span>Available 24/7 for [Niche] Repairs</span>
            </div>
            <div className="w-px h-3 bg-white/10" />
            <div className="flex items-center gap-2">
               <MapPin className="w-3 h-3 text-red-500" />
               <span>Serving: [Main City] & Greater Area</span>
            </div>
         </div>
         <div className="flex items-center gap-4">
            {/* Subtle MRKDEV Badge */}
            <div className="px-2 py-0.5 rounded border border-blue-500/30 bg-blue-500/10 text-blue-400 flex items-center gap-1.5 select-none animate-pulse">
               <Sparkles className="w-2.5 h-2.5" />
               <span className="text-[9px]">MRKDEV Template</span>
            </div>
            <div className="w-px h-3 bg-white/10" />
            <a href="#" className="hover:text-white transition-colors">Careers</a>
         </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-6xl mx-auto rounded-b-2xl md:rounded-b-2xl md:rounded-t-none rounded-2xl border border-slate-950/5 bg-white backdrop-blur-md px-4 py-2 flex items-center justify-between shadow-2xl">
        <div 
          className="flex items-center gap-2 pl-2 cursor-pointer group"
          onClick={() => handleNavClick('home')}
        >
           <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center font-bold text-white shadow-xl shadow-blue-500/20 group-hover:bg-slate-950 transition-colors">
             L
           </div>
           <div className="flex flex-col">
              <span className="font-extrabold text-slate-950 leading-none tracking-tighter">LOCAL</span>
              <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest leading-none mt-1 group-hover:text-slate-950 transition-colors">Services [City]</span>
           </div>
        </div>

        {/* Global Nav Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-bold text-slate-500 uppercase tracking-[0.1em]">
           {navLinks.map(link => (
             <button
               key={link.id}
               onClick={() => handleNavClick(link.id)}
               className={`transition-all hover:scale-110 active:scale-90 ${currentPage === link.id ? 'text-blue-600 underline underline-offset-8 decoration-2' : 'hover:text-slate-950'}`}
             >
               {link.label}
             </button>
           ))}
        </div>

        {/* High-Impact Contact Action */}
        <div className="flex items-center gap-2 sm:gap-4">
           <div className="hidden sm:flex flex-col items-end pr-2 text-right">
              <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">Talk to an expert</p>
              <a href="tel:0000000000" className="text-sm font-extrabold text-slate-950 hover:text-blue-600 transition-colors leading-none tracking-tight">(000) 000-0000</a>
           </div>
           <a 
             href="tel:0000000000"
             className="px-6 py-2.5 rounded-xl bg-slate-950 text-white text-xs font-bold uppercase tracking-widest hover:bg-blue-600 transition-all shadow-xl hover:scale-105 active:scale-95 flex items-center gap-2"
           >
             Call Now
             <Phone className="w-4 h-4 opacity-70" />
           </a>
           <button 
             className="md:hidden p-1 text-slate-400 hover:text-slate-950"
             onClick={() => setIsOpen(!isOpen)}
           >
             {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
           </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="absolute top-24 left-4 right-4 md:hidden rounded-2xl border border-slate-950/10 bg-white p-4 flex flex-col gap-4 animate-in slide-in-from-top-4 shadow-3xl">
           {navLinks.map(link => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`p-4 rounded-xl text-left font-bold uppercase tracking-widest text-xs transition-colors ${currentPage === link.id ? 'bg-blue-600 text-white shadow-xl' : 'hover:bg-slate-50 text-slate-950'}`}
              >
                {link.label}
              </button>
           ))}
        </div>
      )}
    </nav>
  );
}
