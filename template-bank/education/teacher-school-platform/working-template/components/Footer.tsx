"use client";

import React from 'react';
import { GraduationCap, Mail, Users, ArrowRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-6 py-20 lg:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-24 mb-20 lg:mb-32">
          {/* Brand */}
          <div className="space-y-8">
            <div 
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => onNavigate('home')}
            >
              <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-xl shadow-blue-500/20">
                <GraduationCap className="w-7 h-7" />
              </div>
              <span className="text-2xl font-black text-slate-900 tracking-tighter uppercase italic leading-none pt-1">EduPlatform</span>
            </div>
            <p className="text-slate-400 font-bold text-xs uppercase tracking-widest leading-relaxed">
              Leading the digital transformation of classrooms through intuitive school management and teacher-student collaboration systems.
            </p>
            <div className="flex items-center gap-4">
              {[GraduationCap, Mail, Users].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-100 transition-all shadow-sm">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Platform */}
          <div className="space-y-8 pt-2">
            <h4 className="text-[10px] font-black text-slate-900 uppercase tracking-[0.4em]">Institutional Solutions</h4>
            <div className="flex flex-col gap-5">
              {['Classroom Tools', 'Reporting Systems', 'Curriculum Hub', 'Security Protocols'].map(item => (
                <button key={item} onClick={() => onNavigate('solutions')} className="text-left text-[11px] font-bold text-slate-400 uppercase tracking-widest hover:text-blue-600 transition-colors">{item}</button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-8 pt-2">
            <h4 className="text-[10px] font-black text-slate-900 uppercase tracking-[0.4em]">Administrative Links</h4>
            <div className="flex flex-col gap-5">
              {['Home', 'Solutions', 'Teachers / Schools', 'Reporting', 'Pricing', 'FAQ'].map(item => (
                <button 
                  key={item} 
                  onClick={() => onNavigate(item === 'Teachers / Schools' ? 'audience' : item.toLowerCase())} 
                  className="text-left text-[11px] font-bold text-slate-400 uppercase tracking-widest hover:text-blue-600 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Reach Out */}
          <div className="space-y-8 pt-2">
            <h4 className="text-[10px] font-black text-slate-900 uppercase tracking-[0.4em]">Request Insight</h4>
            <p className="text-slate-400 font-bold text-[10px] uppercase tracking-widest leading-relaxed">Ready to transform your school infrastructure?</p>
            <button 
               onClick={() => onNavigate('contact')}
               className="w-full py-5 rounded-2xl bg-white border border-slate-200 text-slate-900 font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-slate-950 hover:border-slate-950 hover:text-white transition-all shadow-sm"
            >
              Book Strategic Demo <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-8">
            <p className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.3em]">© 2026 EduPlatform System</p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-[9px] font-bold text-slate-300 uppercase tracking-widest hover:text-slate-600">Privacy Foundation</a>
              <a href="#" className="text-[9px] font-bold text-slate-300 uppercase tracking-widest hover:text-slate-600">Administrative Terms</a>
            </div>
          </div>
          <div className="flex items-center gap-4 group">
            <span className="text-[9px] font-black text-slate-300 uppercase tracking-[0.5em] group-hover:text-blue-600 transition-colors pt-0.5">Developed by</span>
            <div className="px-3 py-1.5 rounded-lg bg-blue-600 text-white font-black text-[10px] uppercase tracking-widest shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">MRKDEV</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
