"use client";

import React from 'react';
import { Power, Shield, Zap, Globe, MessageCircle, ShieldCheck, Settings, Users, Database, Layers } from 'lucide-react';

interface FooterProps {
  onPageChange?: (pageId: string) => void;
}

const footerLinks = [
  { 
    title: "Operating Protocol", 
    links: [
      { id: 'home', label: "Control Center Overview" },
      { id: 'features', label: "Feature Inventory" },
      { id: 'workflows', label: "Solution Workflows" },
      { id: 'pricing', label: "Usage-Based Pricing" }
    ] 
  },
  { 
    title: "Workflow Security", 
    links: [
      { id: 'faq', label: "Data Integrity & SSO" },
      { id: 'faq', label: "Advisory Compliance" },
      { id: 'faq', label: "Admin Permissions" },
      { id: 'pricing', label: "Enterprise SLA" }
    ] 
  },
  { 
    title: "Execution Support", 
    links: [
      { id: 'faq', label: "Knowledge Portal" },
      { id: 'faq', label: "Release Notes" },
      { id: 'contact', label: "Book Technical Walkthrough" },
      { id: 'contact', label: "Channel Support" }
    ] 
  }
];

export default function Footer({ onPageChange }: FooterProps) {
  return (
    <footer className="py-24 lg:py-48 bg-slate-50 border-t border-slate-950/5 relative overflow-hidden">
      {/* Structural Background Accents */}
      <div className="absolute top-0 right-0 w-2/5 h-full bg-slate-100/50 -skew-x-[30deg] -z-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-16 lg:gap-24 mb-24 lg:mb-40">
           {/* Primary Identity Column */}
           <div className="col-span-2 space-y-12 pr-0 lg:pr-24">
              <div className="space-y-6">
                 <button 
                  onClick={() => onPageChange?.('home')}
                  className="flex items-center gap-4 transition-transform hover:scale-105"
                 >
                    <div className="w-10 h-10 rounded-xl bg-slate-950 flex items-center justify-center font-bold text-white shadow-xl shadow-slate-900/20">W</div>
                    <span className="font-extrabold text-2xl text-slate-950 tracking-tighter uppercase italic leading-none">WorkflowOps</span>
                 </button>
                 <p className="text-xl text-slate-600 leading-relaxed font-medium">
                    The command and control center for high-velocity teams. Standardize your operations, eliminate friction, and maintain absolute structural clarity.
                 </p>
              </div>

               <div className="flex gap-4">
                  <a href="#" className="p-4 rounded-2xl bg-white border border-slate-950/5 hover:bg-slate-950 hover:text-white text-slate-400 transition-all shadow-xl hover:-translate-y-1"><Globe className="w-5 h-5" /></a>
                  <a href="#" className="p-4 rounded-2xl bg-white border border-slate-950/5 hover:bg-slate-950 hover:text-white text-slate-400 transition-all shadow-xl hover:-translate-y-1"><ShieldCheck className="w-5 h-5" /></a>
                  <a href="#" className="p-4 rounded-2xl bg-white border border-slate-950/5 hover:bg-slate-950 hover:text-white text-slate-400 transition-all shadow-xl hover:-translate-y-1"><MessageCircle className="w-5 h-5" /></a>
               </div>
           </div>

           {/* Execution Directories */}
           {footerLinks.map((col, i) => (
             <div key={i} className="space-y-10 animate-in slide-in-from-bottom" style={{ animationDelay: `${i * 150}ms` }}>
                <h5 className="font-black text-slate-950 uppercase text-[10px] tracking-[0.3em] border-b border-slate-950/5 pb-5">{col.title}</h5>
                <ul className="space-y-6 pt-2">
                   {col.links.map((link, j) => (
                     <li key={j}>
                        <button 
                          onClick={() => onPageChange?.(link.id)}
                          className="text-[11px] font-bold text-slate-500 hover:text-amber-600 uppercase tracking-widest transition-colors text-left leading-none"
                        >
                          {link.label}
                        </button>
                     </li>
                   ))}
                </ul>
             </div>
           ))}
        </div>

        {/* System Meta Attribution (Execution Standard) */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 pt-16 border-t border-slate-950/5 relative z-10 group">
           <div className="flex flex-col md:flex-row items-center gap-12 text-[10px] font-extrabold text-slate-400 uppercase tracking-[0.4em] font-sans">
             <p>© 2026 Process Coordination Engine.</p>
             <div className="flex gap-12 group-hover:text-slate-500 transition-colors">
                <span className="hover:text-amber-600 transition-colors cursor-pointer">Compliance Log</span>
                <span className="hover:text-amber-600 transition-colors cursor-pointer">Sovereignty</span>
                <span className="hover:text-amber-600 transition-colors cursor-pointer">Protocol Admin</span>
             </div>
           </div>

           <div className="flex items-center gap-12">
              <div className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-slate-950 border border-slate-900 shadow-3xl transition-transform hover:scale-110 active:scale-95 group/sig">
                 <Zap className="w-4 h-4 text-amber-500 animate-pulse group-hover/sig:scale-125 transition-transform" />
                 <span className="text-[10px] font-black text-white uppercase tracking-[0.3em] leading-none">MRKDEV STARTER TEMPLATE</span>
              </div>
              <div className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-white border border-slate-950/5 text-[9px] font-black text-amber-500 uppercase tracking-[0.4em] shadow-2xl">
                 <div className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                 OPERATIONAL STATUS: ACTIVE
              </div>
           </div>
        </div>
      </div>
    </footer>
  );
}
