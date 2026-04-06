"use client";

import React from 'react';
import { Target, Zap, Brain, Target as TargetIcon, Search, Globe, Layout, Users, ShieldCheck, Cpu, Repeat, Settings, ArrowRight, CheckCircle2, Laptop } from 'lucide-react';

const steps = [
  {
    title: "Guided Interaction",
    tagline: "First-Principles Thinking.",
    description: "Instead of passive reading, you start with high-fidelity visual interactions. Every concept is introduced as a structural problem to be explored and solved.",
    icon: Layout,
    theme: "bg-blue-600"
  },
  {
    title: "Adaptive Feedback",
    tagline: "Zero Latency Learning.",
    description: "Our engine tracks every interaction to provide contextual feedback in milliseconds. Build structural intuition by understanding exactly where your logic deviates.",
    icon: Zap,
    theme: "bg-emerald-500"
  },
  {
    title: "Strategic Mastery",
    tagline: "Protocols to Intuition.",
    description: "Move from foundational basics to complex architectural application. Mastery is confirmed when you can apply the concept in foreign organizational cycles.",
    icon: TargetIcon,
    theme: "bg-slate-950"
  }
];

export default function HowItWorks() {
  return (
    <div className="bg-white text-slate-900 min-h-screen pt-32 lg:pt-56">
      {/* Method Hero (Structural Explanation) */}
      <section className="container mx-auto px-4 mb-32 lg:mb-56 text-center animate-in slide-in-from-top-12 duration-1000 overflow-hidden relative">
         <div className="absolute top-0 right-0 w-[800px] h-[300px] bg-blue-50/50 rounded-bl-[15rem] -z-10 translate-x-1/2 blur-2xl" />
         <div className="space-y-12 max-w-5xl mx-auto group">
            <span className="text-[10px] font-black text-blue-600 tracking-[0.4em] uppercase font-mono">Conceptual Methodology</span>
            <h1 className="text-5xl lg:text-9xl font-black tracking-tighter text-slate-900 leading-[0.85] uppercase italic">Mastery through <span className="text-blue-600 underline decoration-blue-100 decoration-8 underline-offset-12 transition-all group-hover:decoration-yellow-400">active loop.</span></h1>
            <p className="text-xl lg:text-3xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-black group-hover:text-slate-900 transition-colors">Our method replaces the traditional lecture with a high-velocity interactive environment designed for deep structural understanding.</p>
         </div>
      </section>

      {/* 3-Step Process Flow (High-Density Cards) */}
      <section className="py-24 lg:py-48 border-y border-blue-50 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-white skew-x-[45deg] -z-10 translate-x-1/2" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 items-stretch max-w-7xl mx-auto">
             {steps.map((s, i) => (
                <div key={s.title} className="p-12 lg:p-20 rounded-[4rem] border border-blue-100 bg-white shadow-3xl hover:-translate-y-6 transition-all duration-700 hover:bg-slate-950 hover:text-white group flex flex-col justify-between" style={{ animationDelay: `${i * 200}ms` }}>
                   <div className="space-y-16">
                      <div className={`w-20 h-20 rounded-3xl ${s.theme} flex items-center justify-center text-white group-hover:rotate-12 group-hover:scale-110 shadow-3xl transition-all duration-500`}>
                         <s.icon className="w-10 h-10" />
                      </div>
                      <div className="space-y-8">
                         <div className="space-y-3">
                            <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest leading-none group-hover:text-yellow-400">{s.tagline}</span>
                            <h2 className="text-3xl lg:text-5xl font-black text-slate-900 group-hover:text-white uppercase italic tracking-tighter leading-none">{s.title}</h2>
                         </div>
                         <p className="text-lg text-slate-500 leading-relaxed font-bold group-hover:text-slate-400 transition-colors">{s.description}</p>
                      </div>
                   </div>

                   <div className="space-y-10 pt-16 mt-16 border-t border-blue-50 group-hover:border-white/5">
                      <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-yellow-400">
                         <CheckCircle2 className="w-4 h-4 text-blue-600 group-hover:text-yellow-400" />
                         Protocol Active
                      </div>
                      <div className="w-full h-3 bg-slate-50 group-hover:bg-white/10 rounded-full overflow-hidden">
                         <div className="h-full bg-blue-600 group-hover:bg-yellow-400 transition-all duration-1000" style={{ width: `${(i+1)*33}%` }} />
                      </div>
                   </div>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* Progression Logic Visual (Industrial Educational DNA) */}
      <section className="py-24 lg:py-56 bg-white overflow-hidden relative">
         <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-32">
               {/* Dashboard simulation on left */}
               <div className="flex-1 w-full p-12 lg:p-24 rounded-[5rem] border-8 border-slate-50 bg-white shadow-3xl group relative transition-transform hover:scale-[1.02]">
                  <div className="absolute inset-0 bg-blue-600/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="space-y-10 relative z-10">
                     <div className="flex gap-4">
                        {[1,2,3,4,5].map(i => (
                           <div key={i} className={`h-2 rounded-full flex-1 ${i <= 3 ? 'bg-blue-600' : 'bg-slate-100'}`} />
                        ))}
                     </div>
                     <div className="flex items-center gap-8 p-8 rounded-3xl border border-blue-50 bg-white shadow-2xl group-hover:border-blue-500/20">
                        <div className="w-16 h-16 rounded-2xl bg-slate-950 flex items-center justify-center text-yellow-400 shadow-xl group-hover:rotate-12 transition-all">
                           <Brain className="w-8 h-8" />
                        </div>
                        <div className="space-y-3">
                           <div className="w-40 h-4 bg-slate-900 rounded-full" />
                           <div className="w-24 h-3 bg-slate-100 rounded-full" />
                        </div>
                     </div>
                     <div className="p-12 rounded-[3rem] bg-slate-50 border border-slate-100 group-hover:bg-blue-600 group-hover:text-white transition-all space-y-6">
                        <p className="text-[10px] font-black uppercase tracking-[0.4em] opacity-40">System Prompt</p>
                        <p className="text-xl font-bold italic leading-relaxed">"Mastery sequence initiated. Next subject protocol: [Quantum Logic Fundamentals]."</p>
                     </div>
                  </div>
               </div>

               {/* Content on right */}
               <div className="flex-1 space-y-12 animate-in slide-in-from-right duration-1000">
                  <span className="text-[10px] font-black text-blue-600 tracking-[0.4em] uppercase font-mono">Structural Progression</span>
                  <h2 className="text-4xl lg:text-7xl font-black text-slate-900 uppercase italic leading-[0.9] tracking-tighter transition-all hover:scale-105">Progression <br/> that <span className="text-blue-600 underline-offset-8">adapts.</span></h2>
                  <p className="text-xl lg:text-2xl text-slate-500 font-bold leading-relaxed max-w-xl group hover:text-slate-900 transition-all cursor-default">
                     No static curriculum. Our platform continuously re-aligns your structural path based on your real-world performance metrics. 
                  </p>
                  <div className="space-y-8 pt-8 border-t border-slate-100 group">
                     {['Real-time behavioral diagnostic', 'Sub-millisecond feedback loop', 'Predictive learning trajectories'].map(l => (
                       <div key={l} className="flex gap-4 items-center group/item hover:pl-4 transition-all pb-6 border-b border-slate-50 last:border-b-0">
                          <CheckCircle2 className="w-6 h-6 text-blue-600 group-hover/item:scale-125 transition-transform" />
                          <span className="text-[11px] font-black uppercase tracking-widest text-slate-400 group-hover/item:text-slate-950 transition-colors uppercase leading-none">{l}</span>
                       </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Path Conversion */}
      <section className="py-24 lg:py-64 px-4 bg-white text-center border-t border-blue-50">
         <div className="max-w-4xl mx-auto space-y-16 animate-in slide-in-from-bottom duration-1000">
            <h2 className="text-5xl lg:text-9xl font-black tracking-tighter text-slate-900 uppercase italic leading-none transition-all group hover:scale-[1.02]">Master the <br/> <span className="text-blue-600 italic underline decoration-blue-100 decoration-8 underline-offset-12">protocol.</span></h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
               <button className="px-20 py-7 rounded-3xl bg-slate-950 text-white font-black text-sm tracking-widest uppercase shadow-3xl transition-all hover:scale-110 active:scale-95 group">
                  Initialize Mastery Loop
                  <ArrowRight className="w-5 h-5 inline-block ml-4 group-hover:translate-x-2 transition-transform" />
               </button>
            </div>
         </div>
      </section>
    </div>
  );
}
