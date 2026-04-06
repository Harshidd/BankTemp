"use client";

import React from 'react';
import { Settings, Zap, Shield, Users, Layers, MessageCircle, BarChart3, ArrowRight, CheckCircle2, Repeat, Layout } from 'lucide-react';

const workflowFeatures = [
  {
    title: "Orchestration Control",
    description: "Build multi-step operational logic with granular conditional triggers. Ensure every handoff is validated through automated state-checks before the next cycle begins.",
    icon: Settings,
    tag: "Control Logic",
    bullets: ["Custom state-machine logic", "Conditional operational paths", "Infinite branching sub-flows"]
  },
  {
    title: "Global Visibility",
    description: "Eliminate informational blind spots with a unified observability hub. Track every operational cycle, bottleneck, and teammate performance metric in a single view.",
    icon: BarChart3,
    tag: "System Visibility",
    bullets: ["Real-time cycle reporting", "Bottleneck identification", "Team performance analytics"]
  },
  {
    title: "Seamless Handoffs",
    description: "Manage cross-team coordination with contextual communication. Attach documentation, files, and chat logs directly to the workflow state for seamless execution.",
    icon: MessageCircle,
    tag: "Team Alignment",
    bullets: ["Contextual comment logs", "Universal file attachments", "Automatic status broadcasts"]
  },
  {
    title: "Automated Governance",
    description: "Enforce compliance and operational standards automatically. Maintain persistent audit trails for every decision and state-change across your entire infrastructure.",
    icon: Shield,
    tag: "Audit Protocols",
    bullets: ["Persistent audit history", "SAML/SSO permissions", "Resource-level governance"]
  }
];

export default function Features() {
  return (
    <div className="bg-white text-slate-950 min-h-screen pt-32 lg:pt-56">
      {/* Features Hero (Process Focused) */}
      <section className="container mx-auto px-4 text-center mb-32 lg:mb-56 relative animate-in fade-in duration-1000">
         <div className="absolute top-0 right-0 w-[800px] h-[300px] bg-slate-950/5 blur-[120px] rounded-full -z-10" />
         <div className="space-y-12 relative z-10 max-w-5xl mx-auto group">
            <span className="text-[10px] font-black text-amber-500 tracking-[0.4em] uppercase font-mono">Platform Capabilities</span>
            <h1 className="text-5xl lg:text-9xl font-black tracking-tighter text-slate-950 leading-[0.85] uppercase italic">Engineered <br/> for <span className="underline decoration-amber-500/20 decoration-8">absolute precision.</span></h1>
            <p className="text-lg lg:text-2xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-medium transition-all group-hover:text-slate-950">Every layer of the [Product] engine is built to standardize complexity and accelerate operational throughput.</p>
         </div>
      </section>

      {/* Feature Drill-down Grid */}
      <section className="py-24 border-y border-slate-950/5 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#00000003_1px,transparent_1px),linear-gradient(to_bottom,#00000003_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
              {workflowFeatures.map((f, i) => (
                <div key={f.title} className="p-12 lg:p-20 rounded-[4rem] border border-slate-950/5 bg-white shadow-3xl group hover:-translate-y-4 transition-all duration-700 hover:bg-slate-950 hover:text-white animate-in slide-in-from-bottom" style={{ animationDelay: `${i * 100}ms` }}>
                   <div className="relative mb-16">
                      <div className="w-20 h-20 rounded-3xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-950 shadow-2xl transition-all group-hover:bg-amber-500 group-hover:text-white group-hover:rotate-6 group-hover:border-amber-400">
                         <f.icon className="w-10 h-10" />
                      </div>
                      <span className="absolute -top-4 -right-4 px-4 py-2 rounded-full bg-slate-950 text-white font-black text-[9px] uppercase tracking-widest group-hover:bg-white group-hover:text-slate-950 transition-colors shadow-2xl">{f.tag}</span>
                   </div>

                   <div className="space-y-10">
                      <div className="space-y-6">
                        <h2 className="text-3xl lg:text-5xl font-black tracking-tight uppercase italic leading-none">{f.title}</h2>
                        <p className="text-lg text-slate-500 group-hover:text-slate-400 transition-colors font-medium leading-relaxed">{f.description}</p>
                      </div>

                      <div className="space-y-6 pt-10 border-t border-slate-100 group-hover:border-white/5">
                         <div className="grid grid-cols-1 gap-5">
                            {f.bullets.map(b => (
                               <div key={b} className="flex items-center gap-4 group/item">
                                  <CheckCircle2 className="w-5 h-5 text-amber-500 group-hover/item:scale-125 transition-transform" />
                                  <span className="text-[11px] font-black uppercase tracking-widest text-slate-400 group-hover:text-white transition-colors">{b}</span>
                               </div>
                            ))}
                         </div>
                      </div>

                      <button className="flex items-center gap-4 text-[10px] font-black text-slate-950 uppercase tracking-[0.2em] group-hover:text-amber-500 transition-colors pt-6">
                        Read System Documentation <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                      </button>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Dynamic Process Animation Simulation */}
      <section className="py-24 lg:py-48 px-4 text-center">
         <div className="max-w-6xl mx-auto space-y-16">
            <h2 className="text-3xl lg:text-6xl font-black uppercase tracking-tight italic">Universal <br/> <span className="text-amber-500 underline decoration-slate-950/5">Integration logic.</span></h2>
            <div className="p-12 lg:p-24 rounded-[5rem] border-8 border-slate-50 bg-white shadow-3xl relative group">
               <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24 opacity-20 filter grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-[1000ms] cursor-default">
                  {['Salesforce', 'HubSpot', 'Jira', 'Linear', 'Github', 'Azure', 'Slack', 'Zendesk'].map(l => (
                    <div key={l} className="p-6 border border-slate-100 rounded-3xl font-black text-xs uppercase tracking-[0.3em] hover:bg-slate-50 hover:scale-110 transition-all">{l}</div>
                  ))}
               </div>
               <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="px-8 py-4 rounded-full bg-slate-950 text-white font-black text-xs uppercase tracking-[0.3em] shadow-3xl animate-pulse">Bidirectional Sync Active</div>
               </div>
            </div>
         </div>
      </section>

      {/* Path CTA */}
      <section className="py-24 lg:py-56 px-4 text-center border-t border-slate-950/5">
         <div className="max-w-4xl mx-auto space-y-12 animate-in slide-in-from-bottom duration-1000">
            <h2 className="text-5xl lg:text-9xl font-black tracking-tighter italic">Ready to <br/> <span className="text-amber-500">Coordinate?</span></h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
               <button className="px-16 py-6 rounded-3xl bg-slate-950 text-white font-black text-sm tracking-widest uppercase shadow-[0_32px_64px_-12px_rgba(0,0,0,0.3)] transition-all hover:scale-110 hover:-rotate-1 active:scale-95">
                 Get Started — Free
               </button>
               <button className="px-12 py-6 rounded-3xl border-2 border-slate-950/10 hover:border-slate-950 text-slate-950 font-black text-sm tracking-widest uppercase transition-all shadow-xl hover:bg-slate-50">
                 Explore Use Cases
               </button>
            </div>
         </div>
      </section>
    </div>
  );
}
