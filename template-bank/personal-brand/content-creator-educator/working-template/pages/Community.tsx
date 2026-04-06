"use client";

import React from 'react';
import { Newspaper, Users, Star, ArrowRight, CheckCircle2, MessageCircle, Heart, Bell } from 'lucide-react';

interface PageProps {
  onNavigate: (page: string) => void;
}

export default function Community({ onNavigate }: PageProps) {
  return (
    <div className="pt-32 pb-24">
      {/* Newsletter Focus */}
      <section className="px-6 mb-32">
        <div className="max-w-5xl mx-auto rounded-[4rem] bg-emerald-600 p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl shadow-emerald-200">
           {/* Abstract SVG Background */}
           <div className="absolute inset-0 opacity-10 pointer-events-none">
             <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
               <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="url(#grid)" />
               <defs>
                 <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                   <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                 </pattern>
               </defs>
             </svg>
           </div>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-widest mb-8 border border-white/20">
              <Newspaper size={14} /> The Saturday Newsletter
            </div>
            <h1 className="text-4xl md:text-7xl font-bold mb-8 leading-tight uppercase italic underline decoration-emerald-300 decoration-4 underline-offset-8">
              Join <span className="text-emerald-200">25,000+</span> curious creators.
            </h1>
            <p className="text-xl md:text-2xl text-emerald-50 max-w-3xl mx-auto mb-12 font-medium leading-relaxed">
              Every Sunday morning, I share one actionable idea on educational business, digital assets, and high-leverage creation. No fluff, just practical insights.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto mb-8" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Where should I send the signal?"
                className="flex-grow px-8 py-5 rounded-2xl border-none outline-none text-slate-900 font-medium placeholder:text-slate-400 shadow-xl"
              />
              <button className="px-10 py-5 bg-slate-900 text-white font-bold rounded-2xl hover:bg-slate-800 transition-all shadow-xl active:scale-95 whitespace-nowrap">
                Subscribe Free
              </button>
            </form>
            <div className="flex flex-wrap justify-center gap-6 text-sm font-bold uppercase tracking-wider text-emerald-100">
              <span className="flex items-center gap-2 tracking-tighter italic font-medium opacity-80 underline underline-offset-4 decoration-emerald-400">Read by teams at Google, Meta, & Notion</span>
            </div>
          </div>
        </div>
      </section>

      {/* Membership / Private Community */}
      <section className="px-6 mb-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="inline-block px-4 py-1.5 bg-slate-100 text-slate-600 text-sm font-bold uppercase tracking-widest rounded-lg mb-6 italic">
                Advanced Network
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 uppercase italic leading-tight">The <span className="text-emerald-600">Creator</span> Circle</h2>
              <p className="text-xl text-slate-600 leading-relaxed mb-10">
                A private space for serious creators and educators to collaborate, share resources, and get direct feedback on their builds. Join a global collective of high-impact individuals.
              </p>
              
              <div className="space-y-6 mb-12">
                {[
                  { icon: <MessageCircle className="text-emerald-500" />, title: "Private Discord", desc: "Real-time access to a vetted group of 500+ professionals." },
                  { icon: <Bell className="text-emerald-500" />, title: "Live Q&A Sessions", desc: "Monthly calls with me and guest experts from various niches." },
                  { icon: <Heart className="text-emerald-500" />, title: "Exclusive Templates", desc: "Get early access to every tool and system I develop." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-5 group">
                    <div className="shrink-0 w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1 uppercase italic tracking-wide">{item.title}</h4>
                      <p className="text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <button className="px-10 py-5 bg-slate-900 text-white font-bold rounded-2xl hover:bg-emerald-600 transition-all flex items-center gap-3 shadow-lg active:scale-95">
                Apply to Join Circle <ArrowRight size={20} />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-6 relative">
               <div className="absolute -inset-4 bg-emerald-50 rounded-[4rem] -z-10 rotate-3"></div>
               {[1,2,3,4].map(idx => (
                 <div key={idx} className={`aspect-square bg-white rounded-[2rem] shadow-xl border border-slate-50 flex flex-col items-center justify-center p-6 text-center ${idx % 2 === 1 ? 'translate-y-6' : '-translate-y-6'}`}>
                    <div className="w-16 h-16 bg-slate-100 rounded-full mb-4"></div>
                    <div className="font-bold text-slate-900 text-sm uppercase mb-1 underline italic">Member Name</div>
                    <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Creator Business</div>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Strip */}
      <section className="bg-slate-50 py-24 border-y border-slate-100 italic">
        <div className="max-w-7xl mx-auto px-6 overflow-hidden">
          <div className="flex gap-16 animate-marquee whitespace-nowrap opacity-50 grayscale contrast-150">
             {[1,2,3,4,5,6].map(i => (
               <div key={i} className="flex items-center gap-4 text-2xl font-black text-slate-900 uppercase">
                  <Star fill="currentColor" size={24} className="text-amber-400" />
                  "A must-join for any serious educator"
               </div>
             ))}
          </div>
        </div>
      </section>
    </div>
  );
}
