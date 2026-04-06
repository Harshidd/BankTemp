"use client";

import React from 'react';
import { Target, BarChart3, TrendingUp, Zap, Search, Globe, Layout, Users, ShieldAlert, Cpu } from 'lucide-react';

const solutions = [
  {
    title: "Operational Intelligence",
    tagline: "Chaos to Control.",
    description: "Manage global operations with a unified observability layer. Monitor workforce metrics, resource utilization, and operational friction in real-time.",
    icon: Zap,
    highlights: ["SLA Monitoring", "Workforce Logic", "Resource Flux"]
  },
  {
    title: "Cross-Stack Reporting",
    tagline: "Silos to Clarity.",
    description: "Bring disparate Data Sources into one executive dashboard. No more manual collation or outdated reporting cycles. View every metric live.",
    icon: BarChart3,
    highlights: ["Unified ETL", "Global Metrics", "Scheduled Sync"]
  },
  {
    title: "Algorithmic Anomaly Detection",
    tagline: "Threats to Insights.",
    description: "Apply specialized ML correlators to your security and compliance logs. Identify deviations before they impact organizational integrity.",
    icon: ShieldAlert,
    highlights: ["ML Anomaly Log", "RBAC Integration", "Compliance Audit"]
  }
];

const niches = [
  { icon: Globe, label: "Logistics Optimization" },
  { icon: Users, label: "EdTech Analytics" },
  { icon: Cpu, label: "Infrastructure Monitoring" },
  { icon: Layout, label: "E-Commerce Insights" }
];

export default function Solutions() {
  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen pt-32 lg:pt-48">
      {/* Solutions Hero (Target-Driven focus) */}
      <section className="container mx-auto px-4 mb-32 lg:mb-48 text-center relative overflow-hidden">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[300px] bg-indigo-500/10 blur-[150px] rounded-full pointer-events-none opacity-40" />
         <div className="space-y-12 relative z-10 max-w-4xl mx-auto">
            <span className="text-xs font-bold text-indigo-400 tracking-[0.4em] uppercase font-mono">Use Cases / Solutions</span>
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white leading-none italic uppercase leading-[1.05]">Built for the <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-400">complexity seekers.</span></h1>
            <p className="text-lg lg:text-xl text-slate-500 leading-relaxed font-medium">From global distributed operations to specialized research analytics, [Product] scales with your organizational complexity.</p>
         </div>
      </section>

      {/* Primary Solution Panels (DNA-driven) */}
      <section className="py-24 border-y border-white/5 bg-slate-900/20">
         <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16 items-stretch">
               {solutions.map((s, i) => (
                  <div key={s.title} className="p-10 lg:p-16 rounded-[4rem] border border-white/5 bg-slate-900 shadow-3xl hover:border-emerald-500/20 transition-all group relative overflow-hidden flex flex-col justify-between">
                     <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                     <div className="space-y-12 relative z-10">
                        <div className="w-16 h-16 rounded-2xl bg-slate-950 border border-white/10 flex items-center justify-center text-indigo-400 group-hover:text-emerald-400 group-hover:scale-110 transition-all shadow-2xl shadow-indigo-500/10">
                           <s.icon className="w-8 h-8" />
                        </div>
                        <div className="space-y-6">
                           <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest leading-none">{s.tagline}</span>
                           <h2 className="text-4xl font-bold tracking-tighter text-white leading-none italic">{s.title}</h2>
                           <p className="text-lg text-slate-500 leading-relaxed font-medium group-hover:text-slate-300 transition-colors">{s.description}</p>
                        </div>
                     </div>

                     <div className="space-y-8 pt-16 relative z-10 border-t border-white/5 mt-16">
                        <p className="text-[9px] font-bold uppercase tracking-widest text-slate-600">Primary Features</p>
                        <div className="grid grid-cols-1 gap-4">
                           {s.highlights.map(h => (
                             <div key={h} className="flex items-center gap-3 text-[10px] font-bold text-white uppercase tracking-widest group/item">
                                <TrendingUp className="w-3.5 h-3.5 text-indigo-500 group-hover/item:scale-125 transition-transform" />
                                {h}
                             </div>
                           ))}
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Industrial Niche Grid */}
      <section className="py-24 lg:py-48 bg-slate-950">
        <div className="container mx-auto px-4 max-w-6xl text-center">
           <h3 className="text-3xl font-bold uppercase tracking-widest mb-24 opacity-60">Global Application</h3>
           <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16">
              {niches.map(n => (
                <div key={n.label} className="p-12 rounded-[2.5rem] border border-white/5 bg-slate-900/60 hover:bg-slate-900 transition-all cursor-default group shadow-2xl">
                   <div className="w-12 h-12 rounded-xl bg-slate-950 border border-white/10 flex items-center justify-center text-slate-500 mb-8 mx-auto group-hover:text-emerald-500 transition-colors">
                      <n.icon className="w-6 h-6" />
                   </div>
                   <p className="text-[10px] font-bold text-white uppercase tracking-widest">{n.label}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Final Conversions */}
      <section className="py-24 lg:py-48 px-4 text-center border-t border-white/5">
         <div className="max-w-4xl mx-auto space-y-12">
            <h2 className="text-4xl lg:text-8xl font-bold tracking-tight mb-8">Ready to <span className="text-emerald-400 italic font-serif leading-none">architect clarity?</span></h2>
            <button className="px-12 py-6 rounded-3xl bg-white text-slate-950 font-bold text-sm tracking-widest uppercase shadow-3xl transition-all hover:scale-110 active:scale-95 group">
              Get Started with [Product] Free
            </button>
         </div>
      </section>
    </div>
  );
}
