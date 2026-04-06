"use client";

import React from 'react';
import { Globe, Code, Share2, MessageCircle, Sparkles } from 'lucide-react';

interface FooterProps {
  onPageChange?: (page: string) => void;
}

export default function Footer({ onPageChange }: FooterProps) {
  const footerSections = [
    { 
      title: "Product", 
      links: [
        { id: 'home', label: "Home" },
        { id: 'features', label: "Features" },
        { id: 'pricing', label: "Pricing" },
        { id: 'faq', label: "FAQ" }
      ] 
    },
    { 
      title: "Company", 
      links: [
        { id: 'about', label: "About Us" },
        { id: 'contact', label: "Contact" },
        { id: 'pricing', label: "Success Stories" },
        { id: 'about', label: "Careers" }
      ] 
    },
    { 
      title: "Resources", 
      links: [
        { id: 'faq', label: "Documentation" },
        { id: 'features', label: "API Reference" },
        { id: 'pricing', label: "Platform Status" },
        { id: 'faq', label: "Community" }
      ] 
    }
  ];

  return (
    <footer className="py-24 lg:py-48 px-4 bg-black border-t border-white/5 overflow-hidden relative">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-16 mb-24">
           {/* Branding Column */}
           <div className="col-span-2 space-y-12 pr-0 lg:pr-24">
              <div className="space-y-6">
                 <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center font-bold text-white shadow-xl">S</div>
                    <span className="font-bold text-2xl text-white tracking-tighter uppercase italic">Starter</span>
                 </div>
                 <p className="text-lg text-white/40 leading-[1.8] max-w-sm font-medium">
                    The architectural foundation for high-velocity teams. Orchestrate clarity across your global workspace infrastructure.
                 </p>
              </div>

               <div className="flex gap-4">
                  <a href="#" className="p-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-white hover:text-black text-white/40 transition-all shadow-xl"><Globe className="w-5 h-5" /></a>
                  <a href="#" className="p-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-white hover:text-black text-white/40 transition-all shadow-xl"><Code className="w-5 h-5" /></a>
                  <a href="#" className="p-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-white hover:text-black text-white/40 transition-all shadow-xl"><Share2 className="w-5 h-5" /></a>
                  <a href="#" className="p-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-white hover:text-black text-white/40 transition-all shadow-xl"><MessageCircle className="w-5 h-5" /></a>
               </div>
           </div>

           {/* Link Columns */}
           {footerSections.map((col, i) => (
             <div key={i} className="space-y-10">
                <h5 className="font-bold text-white uppercase text-[10px] tracking-widest">{col.title}</h5>
                <ul className="space-y-6">
                   {col.links.map((link, j) => (
                     <li key={j}>
                        <button 
                          onClick={() => onPageChange?.(link.id)}
                          className="text-xs font-bold text-white/40 hover:text-white uppercase tracking-widest transition-colors text-left"
                        >
                          {link.label}
                        </button>
                     </li>
                   ))}
                </ul>
             </div>
           ))}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-12 pt-16 border-t border-white/5 relative z-10">
           <div className="flex flex-col md:flex-row items-center gap-12 text-[10px] font-bold text-white/20 uppercase tracking-[0.2em]">
             <p>© 2026 SaaS Starter Ecosystem.</p>
             <div className="flex gap-12">
                <span className="hover:text-white transition-colors cursor-pointer">Security</span>
                <span className="hover:text-white transition-colors cursor-pointer">Privacy</span>
                <span className="hover:text-white transition-colors cursor-pointer">Legal</span>
             </div>
           </div>

           <div className="flex items-center gap-12">
              <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-white/5 border border-white/10 shadow-2xl group transition-all hover:bg-white/10">
                 <Sparkles className="w-3 h-3 text-blue-500 group-hover:animate-pulse" />
                 <span className="text-[10px] font-bold text-white/40 group-hover:text-white uppercase tracking-widest leading-none">MRKDEV STARTER TEMPLATE</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-white/5 text-[9px] font-bold text-emerald-500/50 uppercase tracking-[0.3em] font-mono shadow-2xl">
                 <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-lg shadow-emerald-500/20" />
                 STRUCTURE STABLE
              </div>
           </div>
        </div>
      </div>
    </footer>
  );
}
