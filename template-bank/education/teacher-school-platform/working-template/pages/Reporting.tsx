"use client";

import React from 'react';
import { BarChart3, TrendingUp, PieChart, Activity, CheckCircle2, Zap, ArrowRight, Table, Info, Presentation, ShieldCheck, Globe } from 'lucide-react';

interface ReportingProps {
  onNavigate: (page: string) => void;
}

export default function Reporting({ onNavigate }: ReportingProps) {
  return (
    <div className="flex flex-col bg-white">
      {/* 1. Analytics Context Hero */}
      <section className="py-24 lg:py-48 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
           <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[150%] bg-blue-600 rounded-full blur-[150px]" />
           <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[150%] bg-emerald-600 rounded-full blur-[150px]" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
           <div className="max-w-4xl space-y-12">
              <div className="space-y-8">
                 <h4 className="text-[10px] font-black text-blue-500 uppercase tracking-[0.4em] font-mono">Performance Protocol 05</h4>
                 <h1 className="text-5xl lg:text-9xl font-black tracking-tighter uppercase italic leading-[0.85]">
                   Mastery <br /> <span className="opacity-40 italic">Through</span> <br /> Deep Insight
                 </h1>
              </div>
              <p className="text-xl lg:text-3xl text-slate-400 font-bold max-w-2xl leading-tight uppercase tracking-widest italic pt-1 uppercase italic font-black">
                Transforming educational data into institutional power. Real-time metrics for longitudinal student success.
              </p>
              <div className="flex items-center gap-8 pt-8 group cursor-pointer" onClick={() => onNavigate('contact')}>
                 <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-2xl group-hover:scale-110 transition-transform">
                    <TrendingUp className="w-7 h-7" />
                 </div>
                 <span className="text-xl font-black text-white hover:text-blue-500 transition-colors italic pt-1 uppercase italic font-black italic">Initialize Reporting Demo Protocol</span>
              </div>
           </div>
        </div>
      </section>

      {/* 2. Visual Metric Grid */}
      <section className="py-32 lg:py-48">
        <div className="container mx-auto px-6">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div className="space-y-16">
                 {/* Visual Placeholder for Dashboard */}
                 <div className="p-12 lg:p-20 rounded-[5rem] bg-slate-50 border border-slate-100 shadow-inner relative group overflow-hidden animate-in fade-in">
                    <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-all"><BarChart3 className="w-48 h-48" /></div>
                    <div className="space-y-12 relative z-10">
                       <h3 className="text-2xl font-black text-slate-900 uppercase italic tracking-tighter pt-1 group uppercase italic font-black italic">Live Learning Analytics Hub</h3>
                       <div className="space-y-8">
                          {[
                            { l: 'Curriculum Mastery', v: '88.4%', c: 'bg-blue-600' },
                            { l: 'Student Engagement Index', v: '91.2%', c: 'bg-emerald-500' },
                            { l: 'Assessment Ready Status', v: '76.8%', c: 'bg-amber-500' }
                          ].map(m => (
                            <div key={m.l} className="space-y-3">
                               <div className="flex items-center justify-between text-[10px] font-black text-slate-400 uppercase tracking-widest italic pt-1 uppercase italic font-black italic">
                                  <span>{m.l}</span>
                                  <span className="text-slate-900 italic font-black italic pt-1 italic">{m.v}</span>
                               </div>
                               <div className="w-full h-2.5 rounded-full bg-white border border-slate-100 overflow-hidden">
                                  <div className={cn("h-full rounded-full transition-all duration-1000", m.c)} style={{ width: m.v }} />
                               </div>
                            </div>
                          ))}
                       </div>
                       <div className="grid grid-cols-2 gap-4">
                          <div className="h-24 rounded-3xl bg-white border border-slate-100 flex items-center justify-center p-4">
                             <TrendingUp className="w-8 h-8 text-blue-100 animate-pulse" />
                          </div>
                          <div className="h-24 rounded-3xl bg-white border border-slate-100 flex items-center justify-center p-4">
                             <Activity className="w-8 h-8 text-emerald-100" />
                          </div>
                       </div>
                    </div>
                 </div>
              </div>

              <div className="space-y-16 animate-in slide-in-from-right">
                 <div className="space-y-8">
                    <h2 className="text-4xl lg:text-7xl font-black text-slate-900 tracking-tighter uppercase italic leading-none">The Science <br /> <span className="text-blue-600">Of Progress</span></h2>
                    <p className="text-lg text-slate-400 font-bold uppercase tracking-widest leading-relaxed pt-1 uppercase italic font-black font-black uppercase tracking-widest italic font-black uppercase italic font-black">Multi-dimensional tracking for diverse learning methodologies. We quantify what matters most—student growth logic.</p>
                 </div>

                 <div className="grid grid-cols-1 gap-10">
                    {[
                      { t: 'Longitudinal Progress Mapping', i: Activity, d: 'Monitor development over years with consistent institutional metrics.' },
                      { t: 'Automated Insight Generators', i: Zap, d: 'AI-driven identification of classroom trends and individual mastery gaps.' },
                      { t: 'Comparative District Analysis', i: PieChart, d: 'Standardize excellence across multiple schools with micro-level reporting.' }
                    ].map(f => (
                      <div key={f.t} className="flex gap-8 group">
                         <div className="w-16 h-16 rounded-2xl bg-slate-50 flex-shrink-0 flex items-center justify-center text-slate-900 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                            <f.i className="w-7 h-7" />
                         </div>
                         <div className="space-y-3">
                            <h4 className="text-xl font-black text-slate-900 uppercase italic tracking-tighter pt-1 group uppercase italic font-black italic">{f.t}</h4>
                            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest leading-relaxed italic pt-1 uppercase italic font-black italic">{f.d}</p>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 3. Logical Reporting Features */}
      <section className="py-32 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-6">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { t: 'Teacher View', i: Presentation, l: 'Classroom mastery, individual student drill-downs, and real-time activity tracking.' },
                { t: 'School Admin View', i: ShieldCheck, l: 'Teacher effectiveness trends, grade-level mapping, and curriculum alignment auditing.' },
                { t: 'District Macro View', i: Globe, l: 'Cross-school performance metrics, high-level demographic tracking, and budget utilization insights.' }
              ].map(v => (
                <div key={v.t} className="p-12 rounded-[4rem] bg-white border border-slate-100 shadow-xl space-y-8 group hover:scale-[1.02] transition-all">
                   <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                      <v.i className="w-7 h-7" />
                   </div>
                   <h3 className="text-2xl font-black text-slate-900 uppercase italic tracking-tighter italic pt-1 uppercase italic font-black italic">{v.t}</h3>
                   <p className="text-slate-400 text-xs font-bold uppercase tracking-widest leading-relaxed pt-1 uppercase italic font-black italic">{v.l}</p>
                   <div className="h-px w-12 bg-blue-100" />
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* 4. Strategic Data Footer */}
      <section className="py-32 bg-white text-center">
         <div className="container mx-auto px-6 max-w-4xl space-y-16">
            <h2 className="text-3xl lg:text-6xl font-black text-slate-900 tracking-tighter uppercase italic pt-1 group uppercase italic font-black italic">Institutional Insight. <br /> Standardized Worldwide.</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
               {[
                 { t: '99.9% Uptime Protocol', i: Zap },
                 { i: ShieldCheck, t: 'Enterprise Encryption' },
                 { i: Table, t: 'Advanced CSV/SIS Sync' },
                 { i: Info, t: 'Compliance Foundations' }
               ].map(x => (
                 <div key={x.t} className="flex flex-col items-center gap-6">
                    <x.i className="w-10 h-10 text-slate-100 transition-colors hover:text-blue-500" />
                    <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest italic pt-1 uppercase italic font-black italic pt-1 uppercase italic font-black">{x.t}</span>
                 </div>
               ))}
            </div>
            <button 
               onClick={() => onNavigate('contact')}
               className="px-16 py-8 rounded-[2.5rem] bg-slate-950 text-white font-black text-xs tracking-widest uppercase hover:bg-blue-600 hover:scale-110 active:scale-95 transition-all shadow-3xl flex items-center gap-6 mx-auto"
            >
               Authorize Data Demo <ArrowRight className="w-5 h-5" />
            </button>
         </div>
      </section>
    </div>
  );
}

const cn = (...classes: any[]) => classes.filter(Boolean).join(' ');
