"use client";

import React from 'react';
import Hero from '../components/Hero';
import InsightFlow from '../components/InsightFlow';
import PanelGrid from '../components/PanelGrid';
import { Database, Search, Sparkles, LayoutPanelLeft, ArrowRight, Play, TrendingUp } from 'lucide-react';

export default function Home() {
  return (
    <>
      {/* 1. Impact Hero (Split Layout variant) */}
      <Hero />

      {/* 2. Key Outcome Summary Row */}
      <section className="py-20 lg:py-32 bg-slate-900 border-y border-white/5 relative">
         <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-24 opacity-60 hover:opacity-100 transition-opacity">
            <div className="flex flex-col text-center md:text-left">
               <span className="text-4xl lg:text-6xl font-bold text-white mb-2 tracking-tighter">4.8x</span>
               <p className="text-xs font-bold text-emerald-500 uppercase tracking-widest leading-none">Faster Analysis</p>
            </div>
            <div className="h-12 w-px bg-white/10 hidden md:block" />
            <div className="flex flex-col text-center md:text-left">
               <span className="text-4xl lg:text-6xl font-bold text-white mb-2 tracking-tighter">99.9%</span>
               <p className="text-xs font-bold text-emerald-500 uppercase tracking-widest leading-none">Detection Accuracy</p>
            </div>
            <div className="h-12 w-px bg-white/10 hidden md:block" />
            <div className="flex flex-col text-center md:text-left">
               <span className="text-4xl lg:text-6xl font-bold text-white mb-2 tracking-tighter">32k</span>
               <p className="text-xs font-bold text-emerald-500 uppercase tracking-widest leading-none">Live Data Sources</p>
            </div>
            <div className="h-12 w-px bg-white/10 hidden md:block" />
            <div className="flex flex-col text-center">
               <p className="text-sm font-medium text-slate-500 max-w-[200px] leading-relaxed mx-auto">Reported by verified users across the entire intelligence network.</p>
            </div>
         </div>
      </section>

      {/* 3. Problem-to-Insight Flow Explanation */}
      <InsightFlow />

      {/* 4. Panel-based Intelligence Features Section */}
      <PanelGrid />

      {/* 5. Deep-dive Analysis Section (Rich visual focus) */}
      <section className="py-24 lg:py-48 bg-slate-950 overflow-hidden relative">
         <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-24 lg:gap-40">
               <div className="flex-1 space-y-12">
                  <div className="space-y-6">
                     <span className="text-sm font-bold text-indigo-500 tracking-widest uppercase">Deep Dive Analytics</span>
                     <h2 className="text-4xl lg:text-6xl font-bold text-white tracking-tight leading-[1.05]">Insights that move <br className="hidden lg:block"/> with your business.</h2>
                     <p className="text-lg lg:text-xl text-slate-400 max-w-xl leading-relaxed font-medium">
                        Powerful analytical tools that allow you to slice and dice your organization's performance exactly how you want. No more waiting on reports.
                     </p>
                  </div>
                  
                  <div className="space-y-8">
                     {[1,2,3].map(i => (
                       <div key={i} className="flex gap-4 group cursor-pointer border-b border-white/5 pb-8 hover:border-emerald-500/20 transition-colors">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2.5 group-hover:scale-150 transition-transform" />
                          <div>
                            <h4 className="font-bold text-white text-lg group-hover:text-emerald-400 transition-colors uppercase tracking-widest text-[11px] mb-2">{i === 1 ? 'Real-time Trends' : i === 2 ? 'Anomaly Alerts' : 'Automated Syncing'}</h4>
                            <p className="text-slate-500 leading-relaxed font-medium group-hover:text-slate-300 transition-colors">See what's happening exactly as it happens without refreshing a single page or dashboard.</p>
                          </div>
                       </div>
                     ))}
                  </div>
               </div>

               {/* Large Rich Analysis Visual */}
               <div className="flex-1 w-full p-8 lg:p-16 rounded-[3rem] border border-white/5 bg-slate-900 shadow-3xl group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  {/* Mock dashboard element */}
                  <div className="aspect-[16/10] rounded-2xl border border-white/10 bg-slate-950 p-6 space-y-6 shadow-2xl relative overflow-hidden">
                     {/* Data lines animation simulation */}
                     <div className="flex items-center justify-between mb-4">
                        <div className="flex gap-2">
                           <div className="w-10 h-2 rounded bg-indigo-500/20" />
                           <div className="w-6 h-2 rounded bg-emerald-500/20" />
                        </div>
                        <div className="w-10 h-10 rounded bg-white/5" />
                     </div>
                     <div className="grid grid-cols-5 gap-2 items-end h-[120px] pb-4 border-b border-white/5">
                        {[40, 70, 50, 90, 60].map((h, i) => (
                           <div key={i} className="bg-emerald-500/10 border-t border-x border-emerald-500/30 rounded-t-sm group-hover:bg-emerald-500/30 transition-all duration-700" style={{ height: `${h}%` }} />
                        ))}
                     </div>
                     <div className="space-y-4">
                        <div className="h-2 w-full rounded bg-white/5" />
                        <div className="h-2 w-3/4 rounded bg-white/5" />
                        <div className="h-2 w-1/2 rounded bg-white/5" />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 6. High-impact Data CTA */}
      <section className="py-24 lg:py-48 bg-slate-950 px-4 relative overflow-hidden">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-emerald-500/10 blur-[150px] rounded-full pointer-events-none opacity-50" />
         
         <div className="max-w-6xl mx-auto rounded-[3.5rem] p-12 lg:p-32 border border-white/10 bg-slate-900 text-center relative overflow-hidden group shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 via-white/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="relative mb-12">
               <h2 className="text-4xl lg:text-7xl font-bold text-white tracking-tight mb-8 leading-[1.05]">Unlock your <br className="hidden lg:block"/> intelligence today.</h2>
               <p className="text-lg lg:text-xl text-slate-400 max-w-xl mx-auto mb-12 leading-relaxed font-medium">
                  Connect your first data source and see the power of automated analysis in less than 5 minutes. No credit card required. Free trial included.
               </p>
            </div>

            <div className="relative flex flex-col sm:flex-row items-center justify-center gap-6">
               <button className="px-12 py-5 rounded-2xl bg-emerald-500 text-slate-950 font-bold text-lg hover:bg-emerald-400 shadow-2xl shadow-emerald-500/30 transition-all hover:scale-105 active:scale-95 flex items-center gap-3 group/btn">
                 Connect Data — Free
                 <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
               </button>
               <button className="px-10 py-5 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 text-white font-bold text-lg transition-all">
                 Request Enterprise Quote
               </button>
            </div>
         </div>
      </section>
    </>
  );
}
