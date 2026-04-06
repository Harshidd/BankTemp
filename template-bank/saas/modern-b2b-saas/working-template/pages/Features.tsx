"use client";

import React from 'react';
import { Layers, Zap, Shield, Key, Share2, Globe, ArrowRight, CheckCircle2 } from 'lucide-react';

const deepFeatures = [
  { 
    id: "core",
    icon: Layers, 
    name: "Architectural Clarity", 
    description: "Built for teams that scale from 1 to 100 without the data fragmentation of legacy tools. Every object is interconnected by default.",
    bullets: ["Atomic task management", "Global relation logic", "Cross-team synchronization", "Version-proof archiving"]
  },
  { 
    id: "speed",
    icon: Zap, 
    name: "Sub-millisecond Action", 
    description: "Optimized for high-velocity execution. Every interaction is calculated locally and synced instantly across your global workforce.",
    bullets: ["Offline-first data layer", "Instant command palette", "Low-latency state syncing", "Concurrent editing core"]
  },
  { 
    id: "governance",
    icon: Shield, 
    name: "Enterprise Governance", 
    description: "Security and control are not afterthoughts. Manage access, audit logs, and compliance at granular levels with professional grade precision.",
    bullets: ["Granular RBAC controls", "SOC2/GDPR compliance ready", "Advanced audit logging", "Threat detection logic"]
  },
  { 
    id: "connectivity",
    icon: Globe, 
    name: "Global Connectivity", 
    description: "Bring your existing stack into one workspace. We support 200+ native integrations with deep bidirectional data flow.",
    bullets: ["API-first integration layer", "Webhooks & Automations", "Legacy data import logic", "Custom marketplace support"]
  }
];

export default function Features() {
  return (
    <div className="bg-black text-white">
      {/* Features Hero */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden border-b border-white/5">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="container mx-auto px-4 text-center">
           <span className="text-sm font-bold text-blue-400 uppercase tracking-[0.3em] mb-8 block font-mono">Capabilities</span>
           <h1 className="text-5xl lg:text-8xl font-bold tracking-tight mb-8 leading-[1.05]">Built for the <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">0.1% performance.</span></h1>
           <p className="text-lg lg:text-xl text-white/40 max-w-2xl mx-auto font-medium">Every feature is engineered for high-velocity teams who demand total structural clarity and sub-millisecond execution.</p>
        </div>
      </section>

      {/* Deep Feature Exploration Grid */}
      <section className="py-24 lg:py-48 px-4">
        <div className="container mx-auto">
          <div className="space-y-32">
            {deepFeatures.map((f, i) => (
              <div key={f.id} className={`flex flex-col lg:flex-row items-center gap-16 lg:gap-32 ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                 <div className="flex-1 space-y-12 animate-in fade-in slide-in-from-bottom-8">
                    <div className="space-y-6">
                       <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 mb-8 shadow-2xl shadow-blue-500/5">
                          <f.icon className="w-8 h-8" />
                       </div>
                       <h2 className="text-3xl lg:text-6xl font-bold tracking-tight uppercase leading-[1.1]">{f.name}</h2>
                       <p className="text-lg lg:text-xl text-white/40 leading-relaxed font-medium">{f.description}</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 pb-12 border-b border-white/5">
                       {f.bullets.map(bullet => (
                         <div key={bullet} className="flex items-center gap-3 text-white/70 font-bold uppercase tracking-widest text-[10px] group cursor-default">
                           <CheckCircle2 className="w-4 h-4 text-emerald-500 group-hover:scale-125 transition-transform" />
                           {bullet}
                         </div>
                       ))}
                    </div>

                    <div className="flex items-center gap-4">
                       <button className="px-8 py-3 rounded-full border border-white/10 bg-white/5 hover:bg-white hover:text-black transition-all font-bold text-xs uppercase tracking-widest flex items-center gap-2 group/btn">
                          View Documentation
                          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                       </button>
                    </div>
                 </div>

                 {/* Visual Mockup Placeholder */}
                 <div className="flex-1 w-full rounded-[3rem] border border-white/10 bg-gradient-to-br from-white/5 to-transparent aspect-square relative overflow-hidden group shadow-2xl">
                    <div className="absolute inset-0 bg-blue-500/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-4 opacity-10 group-hover:opacity-100 group-hover:scale-105 transition-all grayscale group-hover:grayscale-0">
                       <f.icon className="w-24 h-24 text-blue-400 scale-150" />
                    </div>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Preview / Summary Strip */}
      <section className="py-24 bg-white/5 border-y border-white/5 text-center">
         <div className="container mx-auto px-4 max-w-4xl">
            <h3 className="text-3xl font-bold uppercase tracking-widest mb-12">Universal Integration</h3>
            <p className="text-white/40 font-medium leading-relaxed mb-16">The [Product] ecosystem connects with your favorite professional tools. Experience deep, bidirectional data flow without manual effort.</p>
            <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer">
               {['Slack', 'GitHub', 'Linear', 'Discord', 'Figma', 'Notion'].map(brand => (
                 <span key={brand} className="text-lg font-bold uppercase tracking-[0.2em]">{brand}</span>
               ))}
            </div>
         </div>
      </section>

      {/* Next Path CTA */}
      <section className="py-24 lg:py-48 px-4 text-center">
         <div className="max-w-4xl mx-auto space-y-12">
            <h2 className="text-4xl lg:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">Ready for superior <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">structural clarity?</span></h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
               <button className="px-12 py-5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-lg shadow-2xl shadow-blue-500/20 transition-all hover:scale-105 active:scale-95 group">
                 Start a Free Trial
                 <ArrowRight className="w-5 h-5 inline-block ml-3 group-hover:translate-x-1 transition-transform" />
               </button>
               <button className="px-12 py-5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white font-bold text-lg shadow-lg transition-all hover:scale-105">
                 Contact Sales
               </button>
            </div>
         </div>
      </section>
    </div>
  );
}
