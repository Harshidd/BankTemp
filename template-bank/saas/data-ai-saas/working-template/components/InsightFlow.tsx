import React from 'react';
import { Database, Search, Sparkles, LayoutPanelLeft } from 'lucide-react';

const steps = [
  { icon: Database, label: "Aggregation", text: "We pull raw data from every endpoint in your organization including SQL, NoSQL, and external APIs." },
  { icon: Search, label: "Cleaning", text: "Automated algorithms identify errors, deduplicate records, and normalize formats instantly." },
  { icon: Sparkles, label: "Analysis", text: "AI-driven models identify trends, anomalies, and predictive patterns you haven't seen yet." },
  { icon: LayoutPanelLeft, label: "Insight", text: "Beautiful dashboard views present the exact clarity you need to make fast, accurate decisions." },
];

export default function InsightFlow() {
  return (
    <section className="py-24 lg:py-48 bg-slate-950 overflow-hidden relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-24 lg:mb-32">
           <h2 className="text-4xl lg:text-6xl font-bold text-white tracking-tight mb-8">From noise to <span className="text-emerald-500 underline decoration-indigo-500/50 decoration-4 underline-offset-8">absolute clarity.</span></h2>
           <p className="text-lg text-slate-400 max-w-xl mx-auto leading-relaxed font-medium">
             Intelligence isn't about having more data — it's about having the right data at the right time. Our unified engine does the work so you don't have to.
           </p>
        </div>

        {/* Step Visualization (Horizontal Flow) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-16 relative">
           {/* Connecting Line (Desktop Only) */}
           <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent hidden md:block" />

           {steps.map((s, i) => (
             <div key={i} className="group relative pt-12 text-center group">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 mb-8 mx-auto group-hover:scale-110 group-hover:bg-emerald-500/10 group-hover:text-emerald-400 group-hover:border-emerald-500/20 transition-all shadow-xl">
                   <s.icon className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-white mb-4 transition-colors group-hover:text-emerald-400 uppercase tracking-widest text-[10px]">{s.label}</h4>
                <p className="text-slate-500 leading-relaxed text-sm font-medium transition-colors group-hover:text-slate-300">{s.text}</p>
                
                {/* Visual marker (Desktop Only) */}
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full border border-white/20 bg-slate-900 z-10 hidden md:block group-hover:bg-emerald-500" />
             </div>
           ))}
        </div>
      </div>
    </section>
  );
}
