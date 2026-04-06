"use client";

import React from 'react';
import { MapPin, ArrowRight, ShieldCheck, Clock, Zap } from 'lucide-react';

const cities = [
  "[City Name A]", "[City Name B]", "[City Name C]", "[City Name D]", "[City Name E]", "[City Name F]", "[City Name G]", "[City Name H]", "[City Name I]", "[City Name J]"
];

export default function Areas() {
  return (
    <div className="bg-slate-50">
      {/* Service Area Hero */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white text-slate-950 border-b border-slate-950/5">
        <div className="container mx-auto px-4">
           <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
              <div className="flex-1 space-y-12">
                 <div className="space-y-6">
                    <span className="text-sm font-bold text-blue-600 uppercase tracking-[0.3em] mb-8 block">Coverage Map</span>
                    <h1 className="text-4xl lg:text-8xl font-extrabold tracking-tight mb-8 leading-[1.05]">Serving the whole <br/> <span className="text-blue-600 underline decoration-slate-950/20">greater region.</span></h1>
                    <p className="text-lg lg:text-xl text-slate-500 max-w-xl font-medium leading-relaxed">Providing professional grade [Niche] services to residential and commercial clients across [Main City] and the surrounding areas.</p>
                 </div>
                 
                 <div className="flex items-center gap-4">
                    <button className="px-12 py-5 rounded-2xl bg-slate-950 hover:bg-blue-600 text-white font-bold text-lg shadow-2xl transition-all hover:scale-105 active:scale-95 group">
                      Check Your Zip Code
                    </button>
                 </div>
              </div>

              {/* Map Illustration Placeholder */}
              <div className="flex-1 w-full bg-slate-50 rounded-[4rem] border border-slate-950/5 relative overflow-hidden group shadow-3xl">
                 <div className="aspect-square flex items-center justify-center p-8">
                    <div className="w-full h-full bg-white rounded-[3rem] border border-slate-950/10 relative overflow-hidden group/map shadow-2xl">
                       <div className="absolute inset-0 bg-[radial-gradient(#00000010_1.5px,transparent_1.5px)] bg-[size:30px_30px]" />
                       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white scale-125 shadow-3xl group-hover/map:scale-150 transition-transform">
                          <MapPin className="w-10 h-10" />
                       </div>
                       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-4 border-blue-600/10 rounded-full animate-ping pointer-events-none" />
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Response Grid Preview */}
      <section className="py-24 lg:py-48 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mb-24 lg:mb-32">
             <h2 className="text-3xl lg:text-6xl font-extrabold tracking-tight text-slate-950 uppercase mb-8">Rapid local response.</h2>
             <p className="text-lg text-slate-500 font-medium leading-relaxed max-w-xl">We've structured our service teams across the region to ensure we're never more than 30-60 minutes away from your location.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24 relative pb-24 border-b border-slate-950/5">
             {[
               { icon: Clock, label: "Emergency Response", text: "Priority dispatch for urgent repairs across all listed cities." },
               { icon: Zap, label: "Same-Day Service", text: "Standard repair calls handled efficiently within 24 hours locally." },
               { icon: ShieldCheck, label: "Uniform Standard", text: "The same high quality service provided at every local zip code." }
             ].map((r, i) => (
                <div key={i} className="flex flex-col gap-6 group cursor-default">
                   <div className="w-16 h-16 rounded-2xl bg-blue-600/10 flex items-center justify-center text-blue-600 mb-8 border border-blue-600/5 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-xl shadow-blue-500/5">
                      <r.icon className="w-8 h-8" />
                   </div>
                   <h4 className="text-xl font-bold text-slate-950 uppercase tracking-widest text-[11px] group-hover:text-blue-600 transition-colors">{r.label}</h4>
                   <p className="text-lg text-slate-500 font-medium leading-[1.3] group-hover:text-slate-950 transition-colors max-w-xs">{r.text}</p>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* Detailed City Directory (SEO-Centric) */}
      <section className="py-24 lg:py-48 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-24 lg:mb-32">
             <h2 className="text-4xl lg:text-7xl font-extrabold tracking-tight text-slate-950 mb-8">Full Service Area Directory</h2>
             <p className="text-lg text-slate-500 font-medium max-w-2xl mx-auto">If your city is listed below, we provide 24/7 priority [Niche] support to your neighborhood.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12">
             {cities.map((city, i) => (
               <div key={i} className="p-8 rounded-3xl border border-slate-950/5 bg-white shadow-xl hover:shadow-2xl hover:bg-blue-600 hover:text-white transition-all transform hover:-translate-y-2 cursor-pointer group">
                  <div className="flex items-center gap-3">
                     <MapPin className="w-4 h-4 text-blue-600 group-hover:text-white transition-colors" />
                     <span className="font-bold uppercase tracking-widest text-xs">{city}</span>
                  </div>
               </div>
             ))}
          </div>

          <div className="mt-24 lg:mt-32 p-12 lg:p-24 rounded-[3.5rem] bg-slate-950 text-white text-center relative overflow-hidden group">
             <div className="absolute inset-0 bg-blue-600/5 rotate-in-from-left-45 opacity-0 group-hover:opacity-100 transition-opacity" />
             <h3 className="text-4xl lg:text-6xl font-extrabold mb-8 tracking-tighter">Operating beyond these areas?</h3>
             <p className="text-lg text-white/40 max-w-xl mx-auto mb-12 font-medium">We often support commercial clients and large projects outside our standard residential coverage map. Consult our office today.</p>
             <button className="px-12 py-5 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-lg shadow-3xl transition-all hover:scale-105 active:scale-95 group">
               Contact Main Office
               <ArrowRight className="w-5 h-5 inline-block ml-3 group-hover:translate-x-1 transition-transform" />
             </button>
          </div>
        </div>
      </section>
    </div>
  );
}
