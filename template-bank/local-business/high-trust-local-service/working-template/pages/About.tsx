"use client";

import React from 'react';
import { UserCheck, ShieldCheck, Award, Heart, ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-white">
      {/* About Hero */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 opacity-10 pointer-events-none -z-10 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="container mx-auto px-4 text-center">
           <span className="text-sm font-bold text-blue-500 uppercase tracking-[0.3em] mb-8 block font-mono">Our Founding Principles</span>
           <h1 className="text-4xl lg:text-8xl font-extrabold tracking-tight mb-8 leading-[1.1]">Local service <br/> <span className="text-blue-500 italic underline decoration-white/10 decoration-4">simplified.</span></h1>
           <p className="text-lg lg:text-xl text-white/40 max-w-2xl mx-auto font-medium leading-relaxed">Built from the ground up to provide high-velocity [Niche] solutions without the hassle of traditional service companies.</p>
        </div>
      </section>

      {/* Story & Evolution Section */}
      <section className="py-24 lg:py-48 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
             <div className="flex-1 space-y-12">
                <div className="space-y-6">
                   <h2 className="text-4xl lg:text-7xl font-extrabold tracking-tight text-slate-950 uppercase mb-8 leading-[1.05]">Our Story & <span className="text-blue-600">Evolution.</span></h2>
                   <p className="text-lg lg:text-xl text-slate-500 font-medium leading-relaxed">We began with a single mission: Provide the most reliable local [Niche] support with total pricing transparency. Today, we're proud to serve thousands of neighbors across the entire region.</p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12 py-12 border-y border-slate-950/5">
                   {[
                     { label: "Founded", value: "[Year]" },
                     { label: "Professionals", value: "25+" },
                     { label: "Happy Clients", value: "10k+" },
                     { label: "Service Score", value: "98%" }
                   ].map(stat => (
                     <div key={stat.label}>
                        <p className="text-4xl font-extrabold text-slate-950 tracking-tighter uppercase">{stat.value}</p>
                        <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mt-1">{stat.label}</p>
                     </div>
                   ))}
                </div>
             </div>

             <div className="flex-1 w-full bg-slate-50 rounded-[4rem] aspect-square relative overflow-hidden group shadow-3xl">
                <div className="absolute inset-0 bg-blue-600/5 rotate-12 translate-x-12 translate-y-12 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-4 opacity-10 group-hover:opacity-100 group-hover:scale-105 transition-all grayscale group-hover:grayscale-0">
                   <Award className="w-48 h-48 text-blue-600" />
                   <p className="text-sm font-bold text-slate-950 uppercase tracking-widest text-center max-w-[200px]">Top Rated [Niche] Professionals Across the Region</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 lg:py-48 px-4 bg-slate-50">
        <div className="container mx-auto">
          <div className="text-center mb-24 lg:mb-32">
             <h2 className="text-4xl lg:text-7xl font-extrabold tracking-tight text-slate-950 mb-8 leading-[1.05]">Built on <span className="text-blue-600">foundation</span> of trust.</h2>
             <p className="text-lg lg:text-xl text-slate-500 max-w-2xl mx-auto font-medium">We're not just a service provider—we're your neighbors. Our values define every interaction we have with local clients.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
             {[
               { icon: ShieldCheck, title: "Total Integrity", text: "Honest quotes, upfront pricing, and absolute professional accountability." },
               { icon: UserCheck, title: "Expert Vetting", text: "Every technician is background-checked and precision trained." },
               { icon: Heart, title: "Client First", text: "We measure success by your satisfaction and continued business." },
               { icon: Award, title: "Award Winning", text: "Consistently recognized as the leading service provider in the area." }
             ].map((v, i) => (
                <div key={i} className="p-8 lg:p-12 rounded-[2.5rem] bg-white border border-slate-950/5 shadow-2xl hover:bg-slate-950 hover:text-white transition-all transform hover:-translate-y-2 group cursor-default">
                   <div className="w-16 h-16 rounded-2xl bg-blue-600/10 flex items-center justify-center text-blue-600 mb-8 border border-blue-600/5 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-xl shadow-blue-500/5">
                      <v.icon className="w-8 h-8" />
                   </div>
                   <h4 className="text-lg font-bold uppercase tracking-widest text-[11px] mb-4">{v.title}</h4>
                   <p className="text-sm text-slate-500 font-medium group-hover:text-white/40 transition-colors leading-relaxed">{v.text}</p>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* Team / Technician Section (Placeholder Focused) */}
      <section className="py-24 lg:py-48 px-4 bg-white overflow-hidden relative border-b border-slate-950/5">
         <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
               <div className="flex-1 space-y-12">
                  <div className="space-y-6 text-center lg:text-left">
                     <h2 className="text-4xl lg:text-7xl font-extrabold text-slate-950 tracking-tight uppercase leading-[0.95]">The team <br/> who <span className="text-blue-600">shipped</span> it.</h2>
                     <p className="text-lg text-slate-500 max-w-xl mx-auto lg:mx-0 font-medium">Our certified technicians are experts in their fields, committed to high-velocity service and professional results.</p>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2 lg:gap-4 group grayscale hover:grayscale-0 transition-all cursor-crosshair">
                     {[1,2,3,4].map(i => (
                        <div key={i} className="aspect-square rounded-3xl bg-slate-100 border border-slate-950/5 overflow-hidden shadow-xl hover:scale-105 transition-transform">
                           <div className="absolute inset-0 bg-blue-600/5 opacity-0 hover:opacity-100 transition-opacity" />
                        </div>
                     ))}
                  </div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest text-center lg:text-left pb-12 border-b border-slate-950/5">Professional grade technician vetting protocol active</p>

                  <div className="flex items-center gap-2 group cursor-pointer justify-center lg:justify-start">
                     <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Interested in joining us?</p>
                     <div className="flex items-center gap-1 text-blue-600 font-bold text-sm underline decoration-blue-600/20 group-hover:decoration-blue-600 transition-all leading-none uppercase tracking-widest">
                       View Careers
                       <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}
