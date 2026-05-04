"use client";

import React from 'react';
import { Star, Quote, ArrowRight, ShieldCheck, UserCheck, Clock } from 'lucide-react';

const expandedReviews = [
  { name: "[Client Name A]", location: "[City Name]", text: "Absolutely professional results. They arrived on time and fixed my [Problem] in less than an hour. Highly recommended locally!", rating: 5, date: "2 days ago" },
  { name: "[Client Name B]", location: "[City Name]", text: "I called for an emergency repair at 10 PM. They were here by 11 and resolved everything before midnight. Exceptional service.", rating: 5, date: "1 week ago" },
  { name: "[Client Name C]", location: "[City Name]", text: "Fair pricing and honest experts. They explained exactly what needed to be done and provided a transparent quote upfront.", rating: 5, date: "3 weeks ago" },
  { name: "[Client Name D]", location: "[City Name]", text: "I used their maintenance plan. The technician was friendly, professional, and thorough. I'm very satisfied.", rating: 5, date: "1 month ago" },
  { name: "[Client Name E]", location: "[City Name]", text: "Rapid response and professional results. They solved a problem other companies couldn't fix.", rating: 5, date: "1 month ago" },
  { name: "[Client Name F]", location: "[City Name]", text: "Transparent pricing and exceptionally skilled as experts in their field. I converted to their service plan immediately.", rating: 5, date: "2 months ago" }
];

export default function ReviewsPage() {
  return (
    <div className="bg-white">
      {/* Reviews Hero with Evidence stats */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 opacity-10 pointer-events-none -z-10 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="container mx-auto px-4 text-center">
           <div className="space-y-12">
              <span className="text-sm font-bold text-blue-500 uppercase tracking-[0.3em] font-mono">Social Proof</span>
              <h1 className="text-4xl lg:text-8xl font-extrabold tracking-tight mb-8 leading-[1.1]">Trusted by your <br/> <span className="text-blue-600 italic underline decoration-white/10 decoration-4">neighbors.</span></h1>
              <p className="text-lg lg:text-xl text-white/40 max-w-2xl mx-auto font-medium leading-relaxed">Join 10,000+ happy clients who rely on us for professional grade [Niche] solutions every day.</p>
           </div>
        </div>
      </section>

      {/* Trust Metric Strip */}
      <section className="py-12 bg-white border-y border-slate-950/5 text-center">
         <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center justify-center gap-12 lg:gap-32 font-bold uppercase tracking-widest text-[10px] text-slate-400">
               <div className="flex items-center gap-3 group cursor-default">
                  <Star className="w-4 h-4 text-amber-500 group-hover:scale-125 transition-transform fill-amber-500" />
                  <span className="text-slate-950">4.9 / 5.0 Average Rating</span>
               </div>
               <div className="h-4 w-px bg-slate-950/5 hidden md:block" />
               <div className="flex items-center gap-3 group cursor-default">
                  <UserCheck className="w-4 h-4 text-emerald-500 group-hover:scale-125 transition-transform" />
                  <span className="text-slate-950">10k+ Verified Customers</span>
               </div>
               <div className="h-4 w-px bg-slate-950/5 hidden md:block" />
               <div className="flex items-center gap-3 group cursor-default">
                  <ShieldCheck className="w-4 h-4 text-blue-600 group-hover:scale-125 transition-transform" />
                  <span className="text-slate-950">15+ Years Locally Founded</span>
               </div>
            </div>
         </div>
      </section>

      {/* Main Review Listing */}
      <section className="py-24 lg:py-48 px-4 bg-slate-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {expandedReviews.map((r, i) => (
               <div key={i} className="p-8 lg:p-12 rounded-[2.5rem] border border-slate-950/5 bg-white shadow-xl relative group transition-shadow hover:shadow-2xl cursor-default">
                  <div className="absolute top-0 right-0 p-8 text-slate-100 group-hover:text-blue-100 transition-colors">
                     <Quote className="w-12 h-12 rotate-180 opacity-20" />
                  </div>
                  
                  <div className="flex gap-1 mb-8">
                     {[...Array(r.rating)].map((_, j) => (
                       <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                     ))}
                  </div>
                  
                  <p className="text-lg text-slate-600 font-medium leading-relaxed mb-12 italic group-hover:text-slate-950 transition-colors">
                     "{r.text}"
                  </p>
                  
                  <div className="flex items-center justify-between pt-8 border-t border-slate-950/5">
                     <div className="flex flex-col">
                        <span className="text-sm font-bold text-slate-950 uppercase tracking-widest leading-none">{r.name}</span>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Verified Client — {r.location}</span>
                     </div>
                     <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{r.date}</span>
                  </div>
               </div>
             ))}
          </div>

          <div className="mt-24 text-center">
             <button className="px-10 py-4 rounded-xl border border-slate-950/10 bg-white hover:bg-slate-950 hover:text-white transition-all font-bold text-xs uppercase tracking-widest flex items-center gap-2 mx-auto group/btn">
                Visit Google Reviews
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
             </button>
          </div>
        </div>
      </section>

      {/* Before / After Concept Block (Placeholder logic) */}
      <section className="py-24 lg:py-48 px-4 bg-white border-y border-slate-950/5 overflow-hidden">
        <div className="container mx-auto">
           <div className="max-w-4xl mb-24 lg:mb-32">
              <h2 className="text-3xl lg:text-7xl font-extrabold tracking-tight text-slate-950 uppercase mb-8 leading-[1.05]">Visible proof of quality.</h2>
              <p className="text-lg text-slate-500 font-medium leading-[1.3] max-w-xl">We take pride in our precision. See how we've transformed residential and commercial systems locally.</p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 grayscale hover:grayscale-0 transition-all opacity-80 hover:opacity-100 transition-opacity">
              {[1,2].map(i => (
                <div key={i} className="aspect-[16/10] rounded-[3rem] bg-slate-100 border border-slate-950/5 group relative overflow-hidden shadow-xl transition-shadow hover:shadow-2xl">
                   <div className="absolute top-10 left-10 p-3 rounded-xl bg-slate-950 text-white font-bold text-[10px] uppercase tracking-widest shadow-lg z-10">Before / After</div>
                   <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Final Conversion Path */}
      <section className="py-24 lg:py-48 px-4 bg-slate-50 text-center relative overflow-hidden">
         <div className="max-w-4xl mx-auto space-y-12">
            <h2 className="text-4xl lg:text-7xl font-extrabold tracking-tight text-slate-950 mb-8 lowercase tracking-tighter">Ready for professional grade <span className="text-blue-600 underline">service?</span></h2>
            <div className="flex items-center justify-center gap-4">
               <Clock className="w-12 h-12 text-blue-600 opacity-20" />
            </div>
            <button className="px-10 py-4 rounded-2xl bg-slate-950 hover:bg-blue-600 text-white font-bold text-base shadow-2xl transition-colors group">
              Start Your Service Flow
              <ArrowRight className="w-5 h-5 inline-block ml-3 group-hover:translate-x-1 transition-transform" />
            </button>
         </div>
      </section>
    </div>
  );
}
