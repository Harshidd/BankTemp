import React from 'react';

const workflowSteps = [
  { step: "01", label: "Design Process", text: "Map out your custom logic with an intuitive, drag-and-drop interface designed for operational speed." },
  { step: "02", label: "Automate Tasks", text: "Trigger actions based on real-world events or data points, ensuring your team never repeats the same task twice." },
  { step: "03", label: "Scale Results", text: "Analyze performance and optimize your flows continuously for industry-leading efficiency and results." },
];

export default function ProcessSteps() {
  return (
    <section className="py-24 lg:py-48 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-start gap-16 lg:gap-32">
           {/* Section Header (Process-oriented) */}
           <div className="flex-1 space-y-12">
              <div className="space-y-6">
                <span className="text-sm font-bold text-slate-950/20 tracking-[0.2em] uppercase">Operating Protocol</span>
                <h2 className="text-4xl lg:text-7xl font-extrabold text-slate-950 tracking-tight leading-[1.05]">The three steps <br className="hidden lg:block"/> to operational <span className="text-amber-500">excellence.</span></h2>
                <p className="text-lg lg:text-xl text-slate-600 max-w-xl leading-relaxed font-medium">
                   Complexity is the enemy of action. We've simplified operational management into a repeatable, high-performance execution flow.
                </p>
              </div>
              <button className="px-10 py-5 rounded-2xl bg-slate-950 hover:bg-slate-900 text-white font-bold text-lg transition-all shadow-xl hover:scale-105">
                View Protocol Documentation
              </button>
           </div>

           {/* Vertical Interaction Flow (Visual emphasis) */}
           <div className="flex-1 space-y-20 lg:space-y-32 relative pt-12 lg:pt-0">
             {/* Main Vertical Flow Line */}
             <div className="absolute top-0 left-8 h-full w-px bg-slate-950/10 hidden lg:block" />

             {workflowSteps.map((s, i) => (
               <div key={i} className="flex gap-12 group relative">
                  {/* Step Marker */}
                  <div className="w-16 h-16 rounded-2xl bg-white border border-slate-950/5 flex items-center justify-center font-bold text-slate-950 shadow-xl group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-white transition-all z-10 shrink-0">
                     {s.step}
                  </div>
                  
                  {/* Step Context */}
                  <div className="space-y-4">
                     <h4 className="text-2xl font-bold text-slate-950 uppercase tracking-widest text-[11px] group-hover:text-amber-600 transition-colors">{s.label}</h4>
                     <p className="text-lg lg:text-2xl text-slate-500 font-medium leading-[1.3] max-w-md group-hover:text-slate-950 transition-colors">
                        {s.text}
                     </p>
                  </div>

                  {/* Visual Background Ripple */}
                  <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-amber-500/5 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
               </div>
             ))}
           </div>
        </div>
      </div>
    </section>
  );
}
