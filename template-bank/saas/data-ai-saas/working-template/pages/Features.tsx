"use client";

import React from 'react';
import { Database, Search, Sparkles, LayoutPanelLeft, ArrowRight, TrendingUp, BarChart3, ShieldCheck, Zap, Globe, Layers } from 'lucide-react';

const detailedFeatures = [
  {
    id: "ingestion",
    icon: Database,
    title: "Universal Ingestion",
    description: "Connect 300+ data sources in sub-5 minute setup cycles. From SQL to siloed SaaS APIs, our ingestion layer normalizes fragmented data into a unified intelligence core.",
    stats: "300+ Native Connectors",
    pills: ["Pre-built ETL", "Custom Webhooks", "API-First Data Flow"]
  },
  {
    id: "intelligence",
    icon: Sparkles,
    title: "Autonomous ML Correlator",
    description: "Our proprietary intelligence engine identifies non-obvious correlations across disparate data sets. Surface hidden patterns and predict operational friction before it impacts velocity.",
    stats: "99.9% Pattern Precision",
    pills: ["Anomaly Detection", "Predictive Sizing", "Pattern Learning"]
  },
  {
    id: "orchestration",
    icon: Layers,
    title: "Actionable Orchestration",
    description: "Intelligence is useless without action. Configure automated workflow triggers based on real-time data shifts. Sync insights directly back into your core operations stack.",
    stats: "Zero-Latency Triggers",
    pills: ["Webhook Hooks", "Slack Alerts", "Auto-Scale Logic"]
  },
  {
    id: "governance",
    icon: ShieldCheck,
    title: "Enterprise Governance",
    description: "Granular access controls meet local data sovereignty. Manage permissions at the record level while maintaining SOC2 and GDPR compliance across your global infrastructure.",
    stats: "Audit Integrity Logged",
    pills: ["SOC2 Ready", "GDPR Native", "RBAC Precision"]
  }
];

export default function Features() {
  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen pt-32 lg:pt-48">
      {/* Features Hero (Industrial Data Focus) */}
      <section className="container mx-auto px-4 text-center mb-24 lg:mb-48 relative">
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none opacity-40" />
         <div className="space-y-8 relative z-10">
            <span className="text-xs font-bold text-emerald-500 tracking-[0.4em] uppercase">System Capabilities</span>
            <h1 className="text-5xl lg:text-8xl font-bold tracking-tight text-white leading-[1.05]">Architected for <br/> <span className="text-emerald-400">absolute intelligence.</span></h1>
            <p className="text-lg lg:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-medium">Every component of the [Product] engine is engineered to handle extreme data density with zero performance compromise.</p>
         </div>
      </section>

      {/* Deep Feature Exploration (Horizontal Panels) */}
      <section className="py-24 border-y border-white/5 bg-slate-900/40 relative">
        <div className="container mx-auto px-4">
           <div className="space-y-32">
              {detailedFeatures.map((f, i) => (
                <div key={f.id} className={`flex flex-col lg:flex-row items-center gap-16 lg:gap-32 ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                   <div className="flex-1 space-y-12 animate-in fade-in slide-in-from-bottom duration-700">
                      <div className="space-y-6">
                         <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-white/10 flex items-center justify-center text-emerald-400 shadow-3xl shadow-emerald-500/5 group">
                            <f.icon className="w-8 h-8 group-hover:scale-110 transition-transform" />
                         </div>
                         <h2 className="text-3xl lg:text-6xl font-bold tracking-tight text-white uppercase leading-none italic">{f.title}</h2>
                         <p className="text-lg text-slate-400 leading-relaxed font-medium">{f.description}</p>
                      </div>

                      <div className="p-8 rounded-3xl bg-slate-950 border border-white/5 space-y-8">
                         <p className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest leading-none pb-4 border-b border-white/5">{f.stats}</p>
                         <div className="flex flex-wrap gap-3">
                            {f.pills.map(pill => (
                               <span key={pill} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-[10px] font-bold text-slate-300 uppercase tracking-widest">{pill}</span>
                            ))}
                         </div>
                      </div>

                      <button className="flex items-center gap-4 text-xs font-bold text-white uppercase tracking-widest hover:text-emerald-400 transition-colors group">
                         Technical Specifications <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                   </div>

                   {/* Dashboard Logic Visual (Design DNA) */}
                   <div className="flex-1 w-full relative group">
                      <div className="aspect-square rounded-[3.5rem] border border-white/5 bg-slate-900 shadow-3xl flex items-center justify-center p-12 lg:p-24 relative overflow-hidden transition-all group-hover:scale-[1.02]">
                         <f.icon className="w-full h-full text-white/5 group-hover:text-emerald-500/10 transition-colors" />
                         <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-slate-950 via-transparent to-transparent pointer-events-none" />
                         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-emerald-500/5 bg-emerald-500/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                         <div className="relative z-10 p-8 rounded-3xl bg-slate-950/80 backdrop-blur-3xl border border-white/10 shadow-2xl opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700">
                             <TrendingUp className="w-12 h-12 text-emerald-500 mb-6" />
                             <p className="text-lg font-bold text-white leading-tight uppercase">Performance <br/> Validation Active</p>
                         </div>
                      </div>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Integration Strip */}
      <section className="py-24 text-center">
         <div className="container mx-auto px-4 max-w-4xl">
            <h3 className="text-2xl font-bold uppercase tracking-[0.3em] mb-12">Universal Hub</h3>
            <p className="text-slate-500 font-medium leading-relaxed mb-16">Connect your favorite analytical and operational tools. Deep, bidirectional data flow ensures your intelligence is always actionable.</p>
            <div className="flex flex-wrap items-center justify-center gap-12 lg:gap-24 opacity-20 grayscale cursor-pointer hover:opacity-100 hover:grayscale-0 transition-all">
               {['Snowflake', 'BigQuery', 'Slack', 'Datadog', 'AWS', 'Azure'].map(b => (
                 <span key={b} className="text-lg font-bold uppercase tracking-widest">{b}</span>
               ))}
            </div>
         </div>
      </section>

      {/* Path CTA */}
      <section className="py-24 lg:py-48 px-4 text-center">
         <div className="max-w-4xl mx-auto space-y-12">
            <h2 className="text-4xl lg:text-7xl font-bold tracking-tight mb-8">Ready for <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-indigo-400 italic font-serif">total visibility?</span></h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
               <button className="px-12 py-5 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-lg shadow-2xl transition-all">
                 Connect First Data Source
               </button>
               <button className="px-12 py-5 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 text-white font-bold text-lg transition-all">
                 Request Architecture Review
               </button>
            </div>
         </div>
      </section>
    </div>
  );
}
