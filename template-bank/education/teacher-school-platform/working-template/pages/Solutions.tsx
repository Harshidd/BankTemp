"use client";

import React from 'react';
import { GraduationCap, Presentation, ShieldCheck, BarChart3, Users, Layout, Zap, Database, Globe, ArrowRight, CheckCircle2 } from 'lucide-react';

interface SolutionsProps {
  onNavigate: (page: string) => void;
}

export default function Solutions({ onNavigate }: SolutionsProps) {
  const categories = [
    {
      title: 'Classroom Dynamics',
      icon: Presentation,
      color: 'bg-blue-600',
      solutions: [
        { t: 'Live Engagement Systems', d: 'Interactive classroom tools for synchronous learning environments.' },
        { t: 'Assignment Protocols', d: 'Automated workflow management for student submissions and grading.' },
        { t: 'Communication Matrix', d: 'Secure internal channels for teacher-student feedback loops.' }
      ]
    },
    {
      title: 'Mastery & Reporting',
      icon: BarChart3,
      color: 'bg-emerald-500',
      solutions: [
        { t: 'Longitudinal Analysis', d: 'Deep-dive tracking of student progress over multiple academic cycles.' },
        { t: 'Gap Identification', d: 'Automated detection of learning deficiencies and mastery levels.' },
        { t: 'Institutional Exports', d: 'Customizable reporting for district-level administrative review.' }
      ]
    },
    {
      title: 'Admin Infrastructure',
      icon: ShieldCheck,
      color: 'bg-indigo-600',
      solutions: [
        { t: 'District Scaling', d: 'Centralized management tools for multi-school educational systems.' },
        { t: 'Security & Compliance', d: 'Enterprise-grade data protection aligning with global standards.' },
        { t: 'Integration Hub', d: 'Seamless sync with existing school information systems (SIS).' }
      ]
    }
  ];

  return (
    <div className="flex flex-col bg-white">
      {/* 1. Solutions Hero */}
      <section className="py-24 lg:py-40 bg-slate-950 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
           <div className="absolute top-[-20%] right-[-10%] w-[70%] h-[150%] bg-blue-500 rounded-full blur-[150px]" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl space-y-12">
            <div className="space-y-6">
              <h4 className="text-[10px] font-black text-blue-500 uppercase tracking-[0.5em] font-mono">Infrastructure Protocol 02</h4>
              <h1 className="text-5xl lg:text-9xl font-black tracking-tighter uppercase italic leading-[0.85]">
                Modular <br /> <span className="opacity-40 italic">Institutional</span> <br /> Solutions
              </h1>
            </div>
            <p className="text-xl lg:text-3xl text-slate-400 font-bold max-w-2xl leading-tight uppercase tracking-widest italic font-black">
              Standardized systems designed to solve the complex challenges of modern educational administration.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Deep Dive Categories */}
      <section className="py-32 lg:py-48">
        <div className="container mx-auto px-6">
          <div className="space-y-32 lg:space-y-64">
             {categories.map((cat, idx) => (
               <div key={cat.title} className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
                  <div className={cn("space-y-12 animate-in fade-in slide-in-from-left", idx % 2 !== 0 && "lg:order-last")}>
                     <div className="space-y-8">
                        <div className={cn("w-20 h-20 rounded-3xl flex items-center justify-center text-white shadow-2xl", cat.color)}>
                           <cat.icon className="w-8 h-8" />
                        </div>
                        <h2 className="text-4xl lg:text-7xl font-black text-slate-900 tracking-tighter uppercase italic leading-none">{cat.title}</h2>
                        <p className="text-lg text-slate-400 font-bold uppercase tracking-widest leading-relaxed max-w-md pt-1 uppercase italic font-black uppercase italic font-black">Strategic infrastructure built for classroom stability and institutional growth protocol.</p>
                     </div>
                     <button 
                       onClick={() => onNavigate('contact')}
                       className="px-10 py-5 rounded-2xl bg-slate-950 text-white font-black text-[10px] uppercase tracking-widest flex items-center gap-4 hover:bg-blue-600 transition-all shadow-xl"
                     >
                        Request Solution Blueprint <ArrowRight className="w-4 h-4" />
                     </button>
                  </div>

                  <div className="grid grid-cols-1 gap-8 pt-4">
                     {cat.solutions.map((sol, sidx) => (
                       <div key={sol.t} className="p-10 lg:p-12 rounded-[3.5rem] bg-slate-50 border border-slate-100 hover:border-blue-100 transition-all hover:bg-white hover:shadow-2xl group cursor-default">
                          <div className="flex items-start justify-between mb-8">
                             <div className="h-1px w-12 bg-blue-100 group-hover:w-24 transition-all duration-700 mt-2" />
                             <span className="text-[10px] font-black text-slate-300 uppercase italic font-black italic tracking-widest pt-1 italic">0{idx + 1}-{sidx + 1}</span>
                          </div>
                          <h3 className="text-2xl font-black text-slate-900 uppercase italic tracking-tighter leading-tight mb-4 group-hover:text-blue-600 transition-colors uppercase italic font-black italic">{sol.t}</h3>
                          <p className="text-slate-400 text-xs font-bold uppercase tracking-widest leading-relaxed">{sol.d}</p>
                       </div>
                     ))}
                  </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 3. Capability Grid (Micro Features) */}
      <section className="py-32 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-8 mb-24">
             <h3 className="text-3xl lg:text-5xl font-black text-slate-900 tracking-tighter uppercase italic pt-1 group uppercase italic font-black italic">Universal Capability Matrix</h3>
             <div className="h-1 w-24 bg-blue-600 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { i: Globe, t: 'Multi-Region Support' },
              { i: ShieldCheck, t: 'Privacy Foundation' },
              { i: Database, t: 'Master Data Protocol' },
              { i: Layout, t: 'Adaptive Interface' },
              { i: Zap, t: 'Instant Integration' },
              { i: Users, t: 'Role-Based Access' },
              { i: BarChart3, t: 'Macro Analytics' },
              { i: GraduationCap, t: 'Teacher Dev Hub' }
            ].map(cap => (
              <div key={cap.t} className="flex flex-col items-center text-center p-8 lg:p-12 space-y-6 group hover:translate-y-[-10px] transition-all">
                <div className="w-16 h-16 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-slate-400 group-hover:border-blue-200 group-hover:text-blue-600 group-hover:shadow-xl transition-all">
                  <cap.i className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-black text-slate-900 uppercase tracking-widest leading-tight italic font-black">{cap.t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Strategic Final CTA */}
      <section className="py-24 lg:py-48 bg-white text-center">
         <div className="container mx-auto px-6 max-w-4xl space-y-12">
            <h2 className="text-4xl lg:text-9xl font-black tracking-tighter italic text-slate-900 uppercase leading-[0.85]">Strategic <br /> Onboarding <br /> <span className="text-blue-600 italic">Protocol</span></h2>
            <p className="text-lg text-slate-400 font-bold uppercase tracking-widest italic pt-1 italic font-black">Join 10,000+ districts redefining educational governance.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-8">
               <button 
                  onClick={() => onNavigate('contact')}
                  className="px-16 py-8 rounded-[2.5rem] bg-slate-950 text-white font-black text-xs tracking-widest uppercase hover:scale-110 active:scale-95 transition-all shadow-3xl"
               >
                  Initialize Setup Demo
               </button>
               <button 
                  onClick={() => onNavigate('pricing')}
                  className="px-16 py-8 rounded-[2.5rem] bg-slate-100 text-slate-400 font-black text-xs tracking-widest uppercase hover:bg-slate-200 transition-all font-black pt-1 uppercase italic font-black"
               >
                  Review Plan Tiers
               </button>
            </div>
         </div>
      </section>
    </div>
  );
}

// Utility
const cn = (...classes: any[]) => classes.filter(Boolean).join(' ');
