"use client";

import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Zap, Users, Star, GraduationCap, BarChart3, Presentation, Settings } from 'lucide-react';
import { cn } from '@/lib/utils';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <div className="flex flex-col">
      {/* 1. Industrial Institutional Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-white">
        <div className="absolute top-0 right-0 w-[50%] h-full bg-slate-50 rounded-l-[20rem] -z-10 animate-in slide-in-from-right duration-1000" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] bg-blue-50/50 rounded-full blur-[120px] -z-10" />
        
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="space-y-12 animate-in slide-in-from-left duration-700">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="text-[10px] font-black text-blue-600 tracking-[0.4em] uppercase font-mono">Process-ID: SCHOOL-V2</span>
                <div className="h-px w-12 bg-blue-100" />
              </div>
              <h1 className="text-5xl lg:text-8xl font-black text-slate-900 tracking-tighter leading-[0.85] uppercase italic">
                Empower Every <br /> <span className="text-blue-600 italic">Teacher & School</span>
              </h1>
              <p className="text-xl lg:text-3xl text-slate-500 font-bold leading-tight max-w-2xl">
                The world's most trusted educational infrastructure for classroom management and student progress tracking.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-8 pt-4">
              <button 
                onClick={() => onNavigate('contact')}
                className="px-12 py-6 rounded-3xl bg-slate-950 text-white font-black text-xs tracking-widest uppercase shadow-2xl transition-all hover:scale-110 active:scale-95 group flex items-center gap-6"
              >
                Request Strategic Demo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </button>
              <button 
                 onClick={() => onNavigate('solutions')}
                 className="flex items-center gap-4 group cursor-help p-4"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                  <Zap className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-slate-900 transition-colors">Explore Institutional Solutions</span>
              </button>
            </div>

            <div className="pt-12 border-t border-slate-100 flex flex-wrap items-center gap-12 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
               {/* Institutional Placeholder Logos */}
               {['ACADEMIC TRUST', 'FOUNDATION SECURE', 'UNIVERSAL TEACH', 'LEGACY EDU'].map(logo => (
                 <span key={logo} className="text-[10px] font-black tracking-[0.4em] uppercase whitespace-nowrap">{logo}</span>
               ))}
            </div>
          </div>

          {/* Strategic Dashboard Preview Mockup */}
          <div className="relative animate-in zoom-in duration-1000">
             <div className="relative z-10 p-4 lg:p-12 rounded-[5rem] bg-white border border-slate-100 shadow-3xl overflow-hidden">
                <div className="space-y-8">
                  <div className="flex items-center justify-between pb-8 border-b border-slate-50">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 leading-none pt-1 uppercase italic font-black text-xs">A1</div>
                      <div className="space-y-1">
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none pt-0.5 italic">Classroom Reporting</p>
                        <p className="text-sm font-black text-slate-900 uppercase tracking-tighter italic leading-none pt-1 uppercase italic font-black">Strategic Overview</p>
                      </div>
                    </div>
                    <div className="px-4 py-2 rounded-xl bg-blue-50 text-blue-600 font-black text-[10px] uppercase tracking-widest">Active System</div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-6">
                    {[
                      { l: 'Efficiency', v: '98%', c: 'text-blue-600' },
                      { l: 'Stability', v: '94%', c: 'text-emerald-500' },
                      { l: 'Progress', v: '+22%', c: 'text-amber-500' }
                    ].map(m => (
                      <div key={m.l} className="p-6 rounded-[2.5rem] bg-slate-50 space-y-2 group hover:bg-slate-950 hover:text-white transition-all duration-300">
                        <p className="text-[8px] font-black uppercase tracking-widest text-slate-400 group-hover:text-white/50">{m.l}</p>
                        <p className={cn("text-2xl font-black italic tracking-tighter uppercase", m.c, "group-hover:text-white")}>{m.v}</p>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-4">
                    <div className="w-full h-2 rounded-full bg-slate-50 overflow-hidden">
                      <div className="w-[85%] h-full bg-blue-600 rounded-full animate-in slide-in-from-left duration-[1500ms]" />
                    </div>
                    <div className="flex items-center justify-between text-[9px] font-black uppercase tracking-widest text-slate-400 italic font-black italic">
                      <span>Foundational Stability</span>
                      <span>85% Performance Threshold</span>
                    </div>
                  </div>
                </div>
             </div>
             {/* Decorative Elements */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-blue-50 rounded-[6rem] -z-10 animate-pulse duration-[3000ms]" />
          </div>
        </div>
      </section>

      {/* 2. Strategy Pillars - Solutions Navigation */}
      <section className="py-32 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-end justify-between gap-12 mb-24">
            <div className="space-y-6">
              <h4 className="text-[10px] font-black text-blue-600 uppercase tracking-[0.5em] font-mono">Institutional Protocol 01</h4>
              <h2 className="text-4xl lg:text-7xl font-black text-slate-900 tracking-tighter leading-none uppercase italic">The Multi-Page <br /> <span className="text-blue-600">Strategic Core</span></h2>
            </div>
            <p className="text-lg text-slate-400 font-bold max-w-md uppercase leading-relaxed tracking-widest italic font-black pt-1 uppercase italic font-black">Built for institutional resilience. Modular systems for every classroom challenge.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                i: Presentation, 
                t: 'Classroom Management', 
                d: 'Centralized control systems for dynamic teacher-student interactions and assignments.',
                id: 'solutions'
              },
              { 
                i: BarChart3, 
                t: 'Reporting DNA', 
                d: 'Deep analytics tracking student longitudinal progress and mastery levels.',
                id: 'reporting'
              },
              { 
                i: Settings, 
                t: 'Admin Infrastructure', 
                d: 'Scalable school-wide tools for district management and professional development.',
                id: 'audience'
              }
            ].map((p, idx) => (
              <div 
                key={p.t}
                onClick={() => onNavigate(p.id)}
                className="group p-12 lg:p-16 rounded-[4rem] bg-white border border-slate-100 hover:border-blue-200 hover:shadow-3xl transition-all duration-700 cursor-pointer animate-in fade-in slide-in-from-bottom"
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                <div className="w-20 h-20 rounded-3xl bg-slate-50 flex items-center justify-center text-slate-900 mb-12 group-hover:bg-blue-600 group-hover:text-white transition-all group-hover:scale-110">
                  <p.i className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 uppercase italic tracking-tighter leading-tight mb-6 group-hover:text-blue-600 transition-colors uppercase italic font-black italic">{p.t}</h3>
                <p className="text-slate-400 text-xs font-bold uppercase tracking-widest leading-relaxed mb-8">{p.d}</p>
                <div className="flex items-center gap-3 text-[10px] font-black text-blue-600 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-4">
                  Initialize <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Social Proof & Trust */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div className="space-y-12">
                 <div className="space-y-8">
                    <h2 className="text-4xl lg:text-7xl font-black text-slate-900 tracking-tighter uppercase italic leading-none">Designed for <br /> <span className="text-emerald-500">Mastery Protocols</span></h2>
                    <p className="text-lg text-slate-500 font-bold max-w-lg leading-relaxed pt-1 uppercase italic font-black font-black uppercase tracking-widest italic font-black uppercase italic font-black">Standardized by world-leading institutions. We provide the infrastructure; you provide the inspiration.</p>
                 </div>
                 
                 <div className="grid grid-cols-1 gap-6">
                    {[
                      { t: '98% Teacher Satisfaction', i: Star },
                      { t: '5M+ Students Managed', i: Users },
                      { t: 'Enterprise Security Tier', i: ShieldCheck }
                    ].map(f => (
                      <div key={f.t} className="flex items-center gap-6 group">
                        <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                          <f.i className="w-6 h-6" />
                        </div>
                        <span className="text-sm font-black text-slate-900 uppercase tracking-widest italic font-black uppercase italic font-black uppercase italic font-black">{f.t}</span>
                      </div>
                    ))}
                 </div>
              </div>

              <div className="relative">
                 <div className="p-12 lg:p-16 rounded-[5rem] bg-slate-950 text-white space-y-12 shadow-3xl overflow-hidden relative group">
                    <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:opacity-20 transition-all group-hover:scale-110">
                       <GraduationCap className="w-32 h-32" />
                    </div>
                    <div className="flex items-center gap-3 text-[10px] font-black text-emerald-400 uppercase tracking-[0.4em] font-mono">Strategic Testimonial</div>
                    <p className="text-2xl lg:text-3xl font-black italic tracking-tight leading-tight uppercase italic font-black italic">
                      "EduPlatform transformed our district's data strategy. Our teachers now have more time to teach, and our admins have real-time visibility into learning progress."
                    </p>
                    <div className="flex items-center gap-6 pt-4">
                       <div className="w-16 h-16 rounded-2xl bg-white/10" />
                       <div className="space-y-1">
                          <p className="text-sm font-black uppercase tracking-tighter italic leading-none pt-1 uppercase italic font-black italic">Dr. Sarah Thompson</p>
                          <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest">District Superintendent — North Regional</p>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 4. Converging Call to Action */}
      <section className="py-32 bg-blue-600 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-20">
           <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[150%] bg-white/10 skew-x-[-20deg]" />
           <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[150%] bg-white/10 skew-x-[-20deg]" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center space-y-12">
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-8xl font-black text-white tracking-tighter uppercase italic leading-[0.85]">
              System Reset: <br /> <span className="opacity-60 italic">Your School, Elevated</span>
            </h2>
            <p className="text-xl text-white/80 font-bold max-w-2xl mx-auto uppercase tracking-widest pt-1 uppercase italic font-black italic">The transition to strategic education infrastructure starts with a single demo.</p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-8">
            <button 
              onClick={() => onNavigate('contact')}
              className="px-16 py-8 rounded-[2.5rem] bg-white text-blue-600 font-black text-xs tracking-[0.2em] uppercase shadow-3xl hover:scale-110 active:scale-95 transition-all group flex items-center gap-6"
            >
              Request Strategic Demo
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </button>
            <button 
              onClick={() => onNavigate('pricing')}
              className="px-16 py-8 rounded-[2.5rem] bg-blue-700 text-white font-black text-xs tracking-[0.2em] uppercase hover:bg-blue-800 transition-all flex items-center gap-6"
            >
              Analyze Pricing Plans
            </button>
          </div>
          
          <div className="pt-12 text-[10px] font-black text-white/40 uppercase tracking-[0.5em] font-mono">Universal School Adaptation Active — MRKDEV SYSTEM</div>
        </div>
      </section>
    </div>
  );
}
