"use client";

import React from 'react';
import { Phone, Mail, Clock, MapPin, ArrowRight, Zap, MessageSquare } from 'lucide-react';

export default function Contact() {
  return (
    <div className="bg-white">
      {/* Contact Hero with Form Split */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 opacity-10 pointer-events-none -z-10 bg-[radial-gradient(#ffffff20_1.5px,transparent_1.5px)] bg-[size:40px_40px]" />
        <div className="container mx-auto px-4">
           <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
              <div className="flex-1 space-y-12">
                 <div className="space-y-6">
                    <span className="text-sm font-bold text-blue-500 uppercase tracking-[0.3em] font-mono">Get in Touch</span>
                    <h1 className="text-4xl lg:text-8xl font-extrabold tracking-tight mb-8 leading-[1.05]">Let's discuss <br/> your <span className="text-blue-500 underline decoration-white/10 decoration-4 italic">project.</span></h1>
                    <p className="text-lg lg:text-xl text-white/40 max-w-xl font-medium leading-relaxed italic">Our local experts prepare customized, professional grade solutions for every residential and commercial challenge.</p>
                 </div>
                 
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12 py-12 border-t border-white/5">
                    <div className="space-y-2">
                       <p className="text-[10px] font-bold text-blue-500 uppercase tracking-widest leading-none">Emergency Phone</p>
                       <a href="tel:0000000000" className="text-2xl font-extrabold text-white hover:text-blue-500 transition-colors tracking-tighter">(000) 000-0000</a>
                    </div>
                    <div className="space-y-2">
                       <p className="text-[10px] font-bold text-blue-500 uppercase tracking-widest leading-none">Local WhatsApp</p>
                       <a href="#" className="flex items-center gap-2 text-2xl font-extrabold text-white hover:text-emerald-500 transition-colors tracking-tighter">
                          Connect Now <MessageSquare className="w-6 h-6" />
                       </a>
                    </div>
                 </div>
              </div>

              {/* Inquiry Form Card (High Trust) */}
              <div className="flex-1 w-full p-8 lg:p-16 rounded-[4rem] border border-white/10 bg-slate-900 shadow-3xl relative overflow-hidden group">
                 <div className="absolute inset-0 bg-blue-600/5 rotate-in-from-left-45 opacity-0 group-hover:opacity-100 transition-opacity" />
                 <form className="relative space-y-6 z-10" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-2 gap-4">
                       <input type="text" placeholder="Full Name" className="p-5 rounded-2xl bg-white/5 border border-white/5 text-white placeholder-white/20 focus:outline-none focus:border-blue-600 transition-all font-bold text-sm tracking-widest" />
                       <input type="tel" placeholder="Phone Number" className="p-5 rounded-2xl bg-white/5 border border-white/5 text-white placeholder-white/20 focus:outline-none focus:border-blue-600 transition-all font-bold text-sm tracking-widest" />
                    </div>
                    <input type="email" placeholder="Email Address" className="w-full p-5 rounded-2xl bg-white/5 border border-white/5 text-white placeholder-white/20 focus:outline-none focus:border-blue-600 transition-all font-bold text-sm tracking-widest" />
                    <select className="w-full p-5 rounded-2xl bg-white/5 border border-white/5 text-white/40 focus:outline-none focus:border-blue-600 transition-all font-bold text-sm tracking-widest cursor-pointer appearance-none">
                       <option>Select Service Category</option>
                       <option>Emergency Repair</option>
                       <option>Standard Maintenance</option>
                       <option>New Installation</option>
                       <option>Other / Consult</option>
                    </select>
                    <textarea placeholder="Describe your service needs..." rows={4} className="w-full p-5 rounded-2xl bg-white/5 border border-white/5 text-white placeholder-white/20 focus:outline-none focus:border-blue-600 transition-all font-bold text-sm tracking-widest resize-none"></textarea>
                    <button className="w-full py-5 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-lg shadow-2xl transition-all hover:scale-105 active:scale-95 group/btn">
                       Submit Inquiry
                       <ArrowRight className="w-5 h-5 inline-block ml-3 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                    <p className="text-center text-[9px] font-bold text-white/20 uppercase tracking-widest">Priority protocol active for all form submissions locally</p>
                 </form>
              </div>
           </div>
        </div>
      </section>

      {/* NAP Consistency & Details Row */}
      <section className="py-24 lg:py-48 px-4 bg-white border-b border-slate-950/5 overflow-hidden">
        <div className="container mx-auto">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24 relative">
              {[
                { icon: MapPin, label: "Official Office", text: "[123 Street Address], [Suite Number], [City Name, State Zip Code]" },
                { icon: Clock, label: "Business Hours", text: "Monday - Friday: 8 AM - 6 PM | Weekend Support: Emergency Dispatch Only" },
                { icon: Mail, label: "Office Support", text: "Direct: [support@email.com] | Response: Typically < 4 hours in-office" }
              ].map((c, i) => (
                <div key={i} className="flex flex-col gap-6 group cursor-default">
                   <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-950/5 flex items-center justify-center text-slate-950 mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-xl shadow-blue-500/5">
                      <c.icon className="w-8 h-8" />
                   </div>
                   <h4 className="text-xl font-bold text-slate-950 uppercase tracking-widest text-[11px] group-hover:text-blue-600 transition-colors pb-4 border-b border-slate-950/5">{c.label}</h4>
                   <p className="text-lg text-slate-500 font-medium leading-[1.3] group-hover:text-slate-950 transition-colors max-w-xs">{c.text}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Emergency Focus Block */}
      <section className="py-24 bg-slate-50 relative overflow-hidden text-center group">
         <div className="container mx-auto px-4 max-w-4xl cursor-pointer">
            <div className="p-12 lg:p-20 rounded-[3.5rem] bg-blue-600 text-white relative overflow-hidden group hover:scale-[1.02] transition-transform shadow-3xl">
               <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Zap className="w-48 h-48" />
               </div>
               <div className="relative z-10 space-y-8">
                  <h3 className="text-3xl lg:text-7xl font-extrabold tracking-tight mb-8 tracking-tighter uppercase font-mono italic">Emergency?</h3>
                  <p className="text-lg lg:text-2xl text-white/60 font-medium mb-12">Every urgent call from our local service area is prioritized immediately. Our response fleet is standby 24/7/365.</p>
                  <a href="tel:0000000000" className="px-12 py-5 rounded-2xl bg-white text-blue-600 font-bold text-xl shadow-2xl transition-all hover:scale-110 active:scale-95 flex items-center gap-3 mx-auto w-fit italic group/btn">
                    Call Emergency Line
                    <Phone className="w-6 h-6 group-hover/btn:animate-wiggle" />
                  </a>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}
