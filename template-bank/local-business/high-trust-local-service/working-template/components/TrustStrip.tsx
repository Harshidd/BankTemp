import React from 'react';

const badges = [
  "Google Rated", "BBB Accredited", "HomeAdvisor Verified", "Local Award 2024", "Family Owned"
];

export default function TrustStrip() {
  return (
    <section className="py-12 bg-white border-y border-slate-950/5 relative overflow-hidden">
       <div className="container mx-auto px-4 text-center">
          <p className="text-[10px] font-bold tracking-[0.3em] text-slate-400 uppercase mb-8">Verified Quality & Reliability</p>
          
          <div className="flex flex-wrap items-center justify-center gap-10 lg:gap-24 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700 pointer-events-none">
             {badges.map((b, i) => (
               <div key={i} className="flex flex-col items-center gap-2">
                  <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-900/5 rotate-12 flex items-center justify-center font-bold text-slate-950 text-[10px] uppercase shadow-lg">
                    {b.split(' ')[0]}
                  </div>
                  <span className="text-[9px] font-bold text-slate-950 uppercase tracking-widest">{b}</span>
               </div>
             ))}
          </div>
       </div>
    </section>
  );
}
