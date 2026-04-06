import React from 'react';
import { LayoutPanelLeft, Shield, Sparkles, Activity, Clock, Layers } from 'lucide-react';

const panels = [
  { icon: LayoutPanelLeft, title: "Modern Dashboards", text: "Customize your environment with drag-and-drop widget libraries designed for high-density information display.", size: "col-span-2 lg:col-span-1" },
  { icon: Shield, title: "Anomaly Detection", text: "Automated alerts detect potential threats and unusual patterns in real-time, protecting your system 24/7.", size: "col-span-2 lg:col-span-1" },
  { icon: Sparkles, title: "Predictive Engines", text: "Not just what happened, but what's next. Our models forecast future trends based on historical performance data.", size: "col-span-2 lg:col-span-2" },
  { icon: Activity, title: "Real-time Streaming", text: "Low-latency data ingestion ensures you're always looking at the most current information available.", size: "col-span-2 lg:col-span-1" },
  { icon: Clock, title: "Automated Reporting", text: "Schedule and deliver professional reports directly to your team's inbox or workspace without manual input.", size: "col-span-2 lg:col-span-1" },
];

export default function PanelGrid() {
  return (
    <section className="py-24 lg:py-48 bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-20 lg:mb-32">
           <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-white mb-6">Powerful, intelligence-first <br className="hidden lg:block"/> internal <span className="text-indigo-400">tooling for everyone.</span></h2>
           <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed font-medium">
             Our feature set was built with a singular focus on performance and intelligence, ensuring that your organization is always ahead of the curve.
           </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
           {panels.map((p, i) => (
             <div key={i} className={`group p-8 lg:p-12 rounded-3xl border border-white/5 bg-white/5 hover:bg-white/10 hover:border-emerald-500/20 transition-all shadow-2xl relative overflow-hidden ${p.size}`}>
                <div className="absolute top-0 right-0 p-8 text-emerald-500/10 group-hover:text-emerald-500/20 transition-all -rotate-12 translate-x-4">
                   <p className="font-bold text-[60px] lg:text-[100px] leading-none opacity-5 group-hover:opacity-20">0{i+1}</p>
                </div>
                
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/5 mb-8 flex items-center justify-center text-emerald-400 group-hover:scale-110 group-hover:bg-emerald-500/10 transition-all shadow-xl">
                   <p.icon className="w-8 h-8" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-emerald-400 transition-colors uppercase tracking-widest text-[11px]">{p.title}</h3>
                <p className="text-slate-400 leading-relaxed font-medium transition-colors group-hover:text-slate-200">{p.text}</p>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
}
