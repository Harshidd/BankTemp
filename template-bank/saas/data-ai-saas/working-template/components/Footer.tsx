"use client";

import React from 'react';
import { Database, TrendingUp, Sparkles, Globe, Shield, MessageCircle } from 'lucide-react';

interface FooterProps {
  onPageChange?: (pageId: string) => void;
}

const footerLinks = [
  { 
    title: "System Hub", 
    links: [
      { id: 'home', label: "Platform Overview" },
      { id: 'features', label: "Intelligence Logic" },
      { id: 'solutions', label: "Use Case Library" },
      { id: 'pricing', label: "Custom Plans" }
    ] 
  },
  { 
    title: "Infrastructure", 
    links: [
      { id: 'faq', label: "Security & Ops" },
      { id: 'faq', label: "Global Status" },
      { id: 'pricing', label: "SLA / Trust" },
      { id: 'faq', label: "Changelog" }
    ] 
  },
  { 
    title: "Resources", 
    links: [
      { id: 'faq', label: "API Reference" },
      { id: 'faq', label: "Knowledge Hub" },
      { id: 'solutions', label: "Partner Program" },
      { id: 'contact', label: "Direct Support" }
    ] 
  }
];

export default function Footer({ onPageChange }: FooterProps) {
  return (
    <footer className="py-24 lg:py-48 bg-slate-950 border-t border-white/5 relative overflow-hidden">
      {/* Decorative Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/5 via-transparent to-transparent opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-16 lg:gap-24 mb-24">
           {/* Branding Column (Data Variant) */}
           <div className="col-span-2 space-y-12 pr-0 lg:pr-32">
              <div className="space-y-6">
                 <button 
                  onClick={() => onPageChange?.('home')}
                  className="flex items-center gap-3 transition-transform hover:scale-105"
                 >
                    <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center font-bold text-slate-950 shadow-xl shadow-emerald-500/10">D</div>
                    <span className="font-bold text-2xl text-white tracking-tighter uppercase italic leading-none">DataAISaaS</span>
                 </button>
                 <p className="text-lg text-slate-500 leading-relaxed max-w-sm font-medium">
                    The intelligence layer for your entire operational ecosystem. Aggregate, analyze, and automate at sub-millisecond speeds.
                 </p>
              </div>

               <div className="flex gap-4">
                  <a href="#" className="p-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-emerald-500 hover:text-slate-950 text-slate-500 transition-all shadow-xl hover:-translate-y-1"><Globe className="w-5 h-5" /></a>
                  <a href="#" className="p-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-emerald-500 hover:text-slate-950 text-slate-500 transition-all shadow-xl hover:-translate-y-1"><Shield className="w-5 h-5" /></a>
                  <a href="#" className="p-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-emerald-500 hover:text-slate-950 text-slate-500 transition-all shadow-xl hover:-translate-y-1"><Sparkles className="w-5 h-5" /></a>
                  <a href="#" className="p-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-emerald-500 hover:text-slate-950 text-slate-500 transition-all shadow-xl hover:-translate-y-1"><Database className="w-5 h-5" /></a>
               </div>
           </div>

           {/* Link Columns */}
           {footerLinks.map((col, i) => (
             <div key={i} className="space-y-8 animate-in fade-in" style={{ animationDelay: `${i * 100}ms` }}>
                <h5 className="font-bold text-white uppercase text-[10px] tracking-[0.3em] border-b border-white/5 pb-4">{col.title}</h5>
                <ul className="space-y-5 pt-2">
                   {col.links.map((link, j) => (
                     <li key={j}>
                        <button 
                          onClick={() => onPageChange?.(link.id)}
                          className="text-[11px] font-bold text-slate-500 hover:text-emerald-400 uppercase tracking-widest transition-colors text-left"
                        >
                          {link.label}
                        </button>
                     </li>
                   ))}
                </ul>
             </div>
           ))}
        </div>

        {/* Catalog Attribution & Meta Info (Industrial Logic) */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 pt-16 border-t border-white/5 relative z-10 transition-all group">
           <div className="flex flex-col md:flex-row items-center gap-12 text-[10px] font-bold text-slate-600 uppercase tracking-[0.4em] font-mono">
             <p>© 2026 Data Intelligence Network.</p>
             <div className="flex gap-12 group-hover:text-slate-400 transition-colors">
                <span className="hover:text-emerald-400 transition-colors cursor-pointer">Security Portal</span>
                <span className="hover:text-emerald-400 transition-colors cursor-pointer">Data Privacy</span>
                <span className="hover:text-emerald-400 transition-colors cursor-pointer">Ops Legal</span>
             </div>
           </div>

           <div className="flex items-center gap-12">
              <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-white/5 border border-white/10 shadow-2xl transition-all group-hover:bg-white/10">
                 <Sparkles className="w-3 h-3 text-emerald-500 animate-pulse group-hover:text-emerald-400" />
                 <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] leading-none">MRKDEV STARTER TEMPLATE</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-white/5 text-[9px] font-bold text-emerald-500/50 uppercase tracking-[0.3em] font-mono shadow-2xl">
                 <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-lg shadow-emerald-500/20" />
                 DATA INTEGRITY ACTIVE
              </div>
           </div>
        </div>
      </div>
    </footer>
  );
}
