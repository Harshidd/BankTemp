import React from 'react';
import { X, Check } from 'lucide-react';

export default function ChaosToControl() {
  return (
    <section className="py-24 lg:py-48 bg-white border-y border-slate-950/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-24 lg:mb-32">
           <h2 className="text-4xl lg:text-7xl font-bold text-slate-950 tracking-tight mb-8 leading-[1.05]">Chaos is the enemy <br className="hidden lg:block"/> of <span className="text-amber-500">execution.</span></h2>
           <p className="text-xl text-slate-600 max-w-xl mx-auto font-medium">
             Fragmented tools, outdated docs, and silent silos destroy team performance. We replace them with a single source of operational truth.
           </p>
        </div>

        {/* Comparison Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 relative">
           {/* 'VS' Badge Overlay (Desktop Only) */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-slate-950 flex items-center justify-center font-bold text-white shadow-2xl z-10 hidden lg:block">VS</div>
           
           {/* Chaos Side (Left - Disordered) */}
           <div className="group p-8 lg:p-16 rounded-[3.5rem] border border-red-500/10 bg-red-500/5 relative overflow-hidden grayscale group hover:grayscale-0 transition-all opacity-50 hover:opacity-100">
              <div className="absolute top-0 right-0 p-8 text-red-500/20 font-bold uppercase tracking-widest text-[11px]">Chaos</div>
              <div className="space-y-6">
                 {[1,2,3,4].map(i => (
                   <div key={i} className={`p-4 rounded-2xl border border-red-500/10 bg-white/50 shadow-sm flex items-center justify-between gap-4 ${i % 2 === 0 ? 'translate-x-[20px] -rotate-2' : '-translate-x-[20px] rotate-2'} group-hover:translate-x-0 group-hover:rotate-0 transition-all scale-95 hover:scale-105`}>
                      <div className="flex gap-4 items-center">
                        <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center text-red-500"><X className="w-4 h-4" /></div>
                        <div className="w-24 h-2 rounded bg-red-950/10" />
                      </div>
                      <div className="w-12 h-1.5 rounded bg-red-950/10" />
                   </div>
                 ))}
                 {/* Visual clutter icons floating */}
                 <div className="absolute top-1/2 left-20 w-8 h-8 bg-black/10 blur-[10px] pointer-events-none" />
              </div>
           </div>

           {/* Control Side (Right - Ordered) */}
           <div className="group p-8 lg:p-16 rounded-[3.5rem] border border-amber-500/10 bg-amber-500/5 relative overflow-hidden group hover:bg-amber-500/10 transition-all">
              <div className="absolute top-0 right-0 p-8 text-amber-500/20 font-bold uppercase tracking-widest text-[11px]">Control</div>
              <div className="space-y-4">
                 {[1,2,3,4].map(i => (
                   <div key={i} className="p-4 rounded-2xl border border-amber-500/10 bg-white shadow-xl flex items-center justify-between gap-4 group-hover:translate-x-1 group-hover:scale-105 transition-all">
                      <div className="flex gap-4 items-center">
                        <div className="w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500"><Check className="w-4 h-4" /></div>
                        <div className="w-24 h-2.5 rounded bg-slate-950/20" />
                      </div>
                      <div className="px-3 py-1 rounded bg-amber-500/10 border border-amber-500/20 text-[9px] font-bold text-amber-600 uppercase tracking-widest leading-none">Complete</div>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}
