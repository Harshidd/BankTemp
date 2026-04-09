"use client";

import React from 'react';
import { BookOpen, GraduationCap, Mail, Phone, MapPin, Globe, Zap, Shield } from 'lucide-react';
import { Twitter, Github, Linkedin, Facebook } from './Icons';

interface FooterProps {
  onPageChange?: (pageId: string) => void;
}

const footerLinks = [
  { 
    title: "Learning Programs", 
    links: [
      { id: 'programs', label: "STEM Excellence" },
      { id: 'programs', label: "Digital Literacy" },
      { id: 'programs', label: "Creative Arts" },
      { id: 'programs', label: "Modern Science" }
    ] 
  },
  { 
    title: "The Method", 
    links: [
      { id: 'how-it-works', label: "Interactive Flow" },
      { id: 'how-it-works', label: "Mastery Progress" },
      { id: 'audience', label: "Student Outcomes" },
      { id: 'audience', label: "Educator Tools" }
    ] 
  },
  { 
    title: "Support Hub", 
    links: [
      { id: 'faq', label: "Learning Portal FAQ" },
      { id: 'contact', label: "Support Inquiry" },
      { id: 'pricing', label: "Pricing & Plans" },
      { id: 'contact', label: "Academic Calendar" }
    ] 
  }
];

export default function Footer({ onPageChange }: FooterProps) {
  return (
    <footer className="py-24 lg:py-48 bg-slate-50 border-t border-blue-50 relative overflow-hidden">
      {/* Education DNA Background Accents */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-100/20 rounded-l-[10rem] -z-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-16 lg:gap-24 mb-24 lg:mb-40">
           {/* Branding Column */}
           <div className="col-span-2 space-y-10 pr-0 lg:pr-24">
              <div className="space-y-6">
                 <button 
                  onClick={() => onPageChange?.('home')}
                  className="flex items-center gap-4 transition-transform hover:scale-105"
                 >
                    <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center font-bold text-white shadow-xl shadow-blue-500/20">
                      <BookOpen className="w-6 h-6" />
                    </div>
                    <span className="font-black text-2xl text-slate-900 tracking-tighter uppercase leading-none pt-1">ModernLearning</span>
                 </button>
                 <p className="text-xl text-slate-500 leading-relaxed font-medium">
                    Designing the future of interactive education. We empower learners with the structural clarity and engagement tools needed to master complex subjects.
                 </p>
              </div>

               <div className="flex gap-4">
                  <a href="#" className="p-4 rounded-2xl bg-white border border-blue-50 hover:bg-blue-600 hover:text-white text-slate-400 transition-all shadow-xl hover:-translate-y-1"><Globe className="w-5 h-5" /></a>
                  <a href="#" className="p-4 rounded-2xl bg-white border border-blue-50 hover:bg-blue-600 hover:text-white text-slate-400 transition-all shadow-xl hover:-translate-y-1"><Shield className="w-5 h-5" /></a>
                  <a href="#" className="p-4 rounded-2xl bg-white border border-blue-50 hover:bg-blue-600 hover:text-white text-slate-400 transition-all shadow-xl hover:-translate-y-1"><Mail className="w-5 h-5" /></a>
               </div>
           </div>

           {/* Directory Columns */}
           {footerLinks.map((col, i) => (
             <div key={i} className="space-y-10 animate-in slide-in-from-bottom" style={{ animationDelay: `${i * 150}ms` }}>
                <h5 className="font-black text-slate-900 uppercase text-[10px] tracking-[0.3em] border-b border-blue-100 pb-5">{col.title}</h5>
                <ul className="space-y-6 pt-2">
                   {col.links.map((link, j) => (
                     <li key={j}>
                        <button 
                          onClick={() => onPageChange?.(link.id)}
                          className="text-[11px] font-bold text-slate-400 hover:text-blue-600 uppercase tracking-widest transition-colors text-left leading-none"
                        >
                          {link.label}
                        </button>
                     </li>
                   ))}
                </ul>
             </div>
           ))}
        </div>

        {/* System Meta Attribution (Education Standard) */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 pt-16 border-t border-blue-100 relative z-10 group">
           <div className="flex flex-col md:flex-row items-center gap-12 text-[10px] font-extrabold text-slate-400 uppercase tracking-[0.3em] font-sans">
             <p>© 2026 Interactive Learning Systems.</p>
             <div className="flex gap-12 group-hover:text-slate-500 transition-colors">
                <span className="hover:text-blue-600 transition-colors cursor-pointer">Accessibility</span>
                <span className="hover:text-blue-600 transition-colors cursor-pointer">Sovereignty</span>
                <span className="hover:text-blue-600 transition-colors cursor-pointer">Learning Policy</span>
             </div>
           </div>

           <div className="flex items-center gap-12">
              <div className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-slate-900 border border-slate-800 shadow-3xl transition-transform hover:scale-110 active:scale-95 group/sig">
                 <Zap className="w-4 h-4 text-blue-500 animate-pulse group-hover/sig:scale-125 transition-transform" />
                 <span className="text-[10px] font-black text-white uppercase tracking-[0.2em] leading-none">MRKDEV STARTER TEMPLATE</span>
              </div>
              <div className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-white border border-blue-50 text-[9px] font-black text-blue-600 uppercase tracking-[0.3em] shadow-2xl">
                 <div className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                 ACADEMIC STATUS: ACTIVE
              </div>
           </div>
        </div>
      </div>
    </footer>
  );
}
