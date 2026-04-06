"use client";

import React from 'react';
import { Target, BarChart3, TrendingUp, Zap, Search, Globe, Layout, Users, ShieldCheck, Cpu, Repeat, Settings, ArrowRight } from 'lucide-react';

const solutions = [
  {
    title: "Team Operational Sync",
    tagline: "Chaos to Alignment.",
    description: "Unify fragmented team updates into a single execution stream. Monitor task distribution, handoff velocity, and resource flux in real-time.",
    icon: Users,
    highlights: ["Status Auto-Broadcast", "Unified State View", "Cycle Flux Detection"]
  },
  {
    title: "Service Delivery Ops",
    tagline: "Process to Delivery.",
    description: "Standardize service delivery cycles with automated state-machine logic. Ensure every client-facing handoff is validated through compliance protocols.",
    icon: Repeat,
    highlights: ["Automated State Logic", "Handoff Validation", "Client-Ready Status"]
  },
  {
    title: "Security & Compliance Admin",
    tagline: "Protocols to Audit.",
    description: "Enforce organizational compliance through persistent audit logging. Coordinate security response workflows with automated triage triggers across your stack.",
    icon: ShieldCheck,
    highlights: ["Sovereignty Support", "RBAC Integration", "Audit Protocol Active"]
  }
];

const segments = [
  { label: "RevOps & Sales", icon: TrendingUp },
  { label: "Engineering Ops", icon: Cpu },
  { label: "Success Org", icon: Globe },
  { label: "Product Strategy", icon: Layout }
];

export default function Workflows() {
  return (
    <div className="bg-white text-slate-950 min-h-screen pt-32 lg:pt-56">
      {/* Workflows Hero (Solution Driven) */}
      <section className="container mx-auto px-4 mb-32 lg:mb-56 text-center animate-in slide-in-from-top-12 duration-1000">
         <div className="space-y-12 max-w-5xl mx-auto group">
            <span className="text-[10px] font-black text-amber-500 tracking-[0.4em] uppercase font-mono">Structural Applications / Use Cases</span>
            <h1 className="text-5xl lg:text-9xl font-black tracking-tighter text-slate-950 leading-[0.85] uppercase italic">Standardize <br/> your <span className="text-amber-500 italic underline decoration-slate-950/10 decoration-8">execution reality.</span></h1>
            <p className="text-lg lg:text-2xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-black group-hover:text-slate-950 transition-colors">From internal approvals to global service delivery, [Product] provides the structural integrity your team requires.</p>
         </div>
      </section>

      {/* Primary Solution Panels (DNA-driven) */}
      <section className="py-24 lg:py-48 border-y border-slate-950/5 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-white skew-x-[45deg] -z-10 translate-x-1/2" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 items-stretch max-w-7xl mx-auto">
             {solutions.map((s, i) => (
                <div key={s.title} className="p-12 lg:p-20 rounded-[5rem] border border-slate-950/5 bg-white shadow-3xl hover:-translate-y-6 transition-all duration-700 hover:bg-slate-950 hover:text-white group flex flex-col justify-between" style={{ animationDelay: `${i * 200}ms` }}>
                   <div className="space-y-16">
                      <div className="w-20 h-20 rounded-3xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-950 group-hover:bg-amber-500 group-hover:text-white group-hover:rotate-6 group-hover:border-amber-400 shadow-2xl transition-all duration-500">
                         <s.icon className="w-10 h-10" />
                      </div>
                      <div className="space-y-8">
                         <div className="space-y-3">
                            <span className="text-[9px] font-black text-amber-500 uppercase tracking-widest leading-none group-hover:text-amber-400">{s.tagline}</span>
                            <h2 className="text-3xl lg:text-5xl font-black tracking-tight text-slate-950 group-hover:text-white uppercase italic italic leading-none">{s.title}</h2>
                         </div>
                         <p className="text-lg text-slate-500 leading-relaxed font-black group-hover:text-slate-400 transition-colors">{s.description}</p>
                      </div>
                   </div>

                   <div className="space-y-10 pt-16 mt-16 border-t border-slate-100 group-hover:border-white/5">
                      <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 group-hover:text-amber-500">Active Protocols</p>
                      <div className="grid grid-cols-1 gap-6">
                         {s.highlights.map(h => (
                           <div key={h} className="flex items-center gap-4 text-[11px] font-bold text-slate-600 group-hover:text-white uppercase tracking-widest group/item">
                              <Zap className="w-4 h-4 text-amber-500 group-hover/item:scale-125 transition-all" />
                              {h}
                           </div>
                         ))}
                      </div>
                      <button className="flex items-center gap-4 text-[10px] font-black text-slate-950 uppercase tracking-[0.2em] group-hover:text-white transition-colors pt-6 decoration-amber-500 underline decoration-2">
                        Deployment logic <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                      </button>
                   </div>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* Coordination Segment Grid (Execution logic) */}
      <section className="py-24 lg:py-56 bg-white">
        <div className="container mx-auto px-4 max-w-6xl text-center space-y-32">
           <h3 className="text-3xl lg:text-5xl font-black uppercase tracking-tight italic">Functional <span className="text-amber-500">Alignment.</span></h3>
           <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24">
              {segments.map(s => (
                <div key={s.label} className="p-12 lg:p-16 rounded-[4rem] border border-slate-950/5 bg-slate-50 hover:bg-slate-950 hover:text-white transition-all duration-700 cursor-pointer group shadow-2xl hover:-translate-y-4">
                   <div className="w-16 h-16 rounded-3xl bg-white border border-slate-100 flex items-center justify-center text-slate-950 mb-10 mx-auto group-hover:bg-amber-500 group-hover:text-white group-hover:-rotate-12 transition-all shadow-xl">
                      <s.icon className="w-8 h-8" />
                   </div>
                   <p className="text-xs font-black text-slate-950 uppercase tracking-widest group-hover:text-white transition-colors">{s.label}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Path Conversions */}
      <section className="py-24 lg:py-56 px-4 text-center border-t border-slate-950/5">
         <div className="max-w-4xl mx-auto space-y-16 animate-in slide-in-from-bottom duration-1000">
            <h2 className="text-5xl lg:text-9xl font-black tracking-tighter italic">Ready to <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-slate-950 leading-none">Standardize?</span></h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
               <button className="px-20 py-7 rounded-3xl bg-slate-950 text-white font-black text-sm tracking-widest uppercase shadow-3xl transition-all hover:scale-110 active:scale-95 group">
                 Initialize Control Hub
                 <ArrowRight className="w-5 h-5 inline-block ml-4 group-hover:translate-x-2 transition-transform" />
               </button>
            </div>
         </div>
      </section>
    </div>
  );
}
