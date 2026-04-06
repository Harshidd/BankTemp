"use client";

import React from 'react';
import { Mail, MessageCircle, Phone, ArrowRight, CheckCircle2, Globe, Send, ShieldAlert, Cpu, Layers } from 'lucide-react';

export default function Contact() {
  return (
    <div className="bg-white text-slate-950 min-h-screen pt-32 lg:pt-56">
      {/* Contact Hero */}
      <section className="container mx-auto px-4 mb-24 lg:mb-56 text-center relative overflow-hidden animate-in fade-in duration-1000">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-slate-950/5 blur-[150px] rounded-full pointer-events-none opacity-40" />
         <div className="space-y-12 relative z-10 max-w-5xl mx-auto group">
            <span className="text-[10px] font-black text-amber-500 tracking-[0.4em] uppercase font-mono">Inquiry Protocol</span>
            <h1 className="text-5xl lg:text-9xl font-black tracking-tighter text-slate-950 leading-[0.85] uppercase italic transition-all group-hover:scale-[1.02] duration-700">Initiate <br/> <span className="text-amber-500 italic underline decoration-slate-950/10 decoration-8">Execution Loop.</span></h1>
            <p className="text-xl lg:text-3xl text-slate-500 leading-relaxed font-black max-w-3xl mx-auto group-hover:text-slate-950 transition-colors">From architectural advice to custom enterprise deployment logic, our specialists are ready to accelerate your transition.</p>
         </div>
      </section>

      {/* Contact Grid (Panel Divide) */}
      <section className="py-24 border-y border-slate-950/5 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-white skew-x-[45deg] -z-10 translate-x-1/2" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-40 items-start max-w-7xl mx-auto">
             
             {/* Left Column: Direct Channels */}
             <div className="space-y-24">
                <div className="space-y-12">
                   <h2 className="text-4xl lg:text-7xl font-black tracking-tighter text-slate-950 uppercase italic leading-[0.9]">Direct <br/> Specialized <br/> Response.</h2>
                   <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-lg transition-all group">Choose your preferred channel of communication. Our specialized teams respond to inquiry requests in <span className="text-amber-500 underline decoration-slate-950/5 font-black">sub-30 minute</span> average cycles.</p>
                </div>

                <div className="space-y-10 group cursor-default">
                   <div className="flex items-center gap-8 p-12 rounded-[5rem] border border-slate-950/5 bg-white transition-all cursor-pointer group hover:bg-slate-950 hover:text-white hover:-translate-y-4 hover:shadow-3xl shadow-xl duration-700">
                      <div className="w-20 h-20 rounded-3xl bg-slate-50 border border-slate-100 group-hover:bg-amber-500 group-hover:text-white group-hover:rotate-6 flex items-center justify-center text-amber-500 shadow-2xl transition-all">
                         <Mail className="w-10 h-10" />
                      </div>
                      <div className="space-y-1">
                         <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 group-hover:text-white/40">Inquiry Protocol</p>
                         <p className="text-2xl sm:text-4xl font-black uppercase tracking-tighter">hello@example.com</p>
                      </div>
                   </div>
                   
                   <div className="flex items-center gap-8 p-12 rounded-[5rem] border border-slate-950/5 bg-white transition-all cursor-pointer group hover:bg-slate-950 hover:text-white hover:-translate-y-4 hover:shadow-3xl shadow-xl duration-700">
                      <div className="w-20 h-20 rounded-3xl bg-slate-50 border border-slate-100 group-hover:bg-amber-500 group-hover:text-white group-hover:-rotate-6 flex items-center justify-center text-amber-500 shadow-2xl transition-all">
                         <Phone className="w-10 h-10" />
                      </div>
                      <div className="space-y-1">
                         <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 group-hover:text-white/40">Technical Direct</p>
                         <p className="text-2xl sm:text-4xl font-black uppercase tracking-tighter">+1 (800) OPS-SYNC</p>
                      </div>
                   </div>
                </div>

                <div className="space-y-10 pt-16 border-t border-slate-100 group">
                   <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-amber-500 font-mono">Coordination Hub Verification</p>
                   <div className="space-y-4">
                      <p className="text-[10px] font-black text-slate-900 uppercase tracking-widest leading-none">Global HQ — structural plaza</p>
                      <p className="text-xl font-bold text-slate-400 tracking-tight leading-relaxed">123 Operating Drive, Suite 900 <br/> San Francisco, CA 94103</p>
                   </div>
                   <div className="flex items-center gap-4 text-[10px] font-black text-amber-500 uppercase tracking-[0.2em] pt-6 animate-pulse">
                      <Globe className="w-5 h-5" /> Global Distributed Operations Available
                   </div>
                </div>
             </div>

             {/* Right Column: Book Demo Panel */}
             <div className="p-12 lg:p-24 rounded-[6rem] border-8 border-slate-50 bg-white shadow-3xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-slate-950/5 blur-3xl group-hover:opacity-10 transition-opacity" />
                <div className="relative z-10 space-y-16">
                   <div className="space-y-6">
                      <h3 className="text-3xl lg:text-5xl font-black tracking-tighter text-slate-950 uppercase italic leading-none">Schedule Operating <br/> Walkthrough.</h3>
                      <p className="text-xl text-slate-500 font-medium leading-relaxed">Connect with an implementation architect to standardize your execution loops.</p>
                   </div>

                   <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                         <div className="space-y-4">
                            <label className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-600 pl-2">Principal Name</label>
                            <input type="text" placeholder="John Example" className="w-full px-10 py-6 rounded-3xl bg-slate-50 border border-slate-100 text-slate-950 placeholder:text-slate-300 focus:outline-none focus:border-amber-500 focus:bg-white transition-all shadow-inner font-bold" />
                         </div>
                         <div className="space-y-4">
                            <label className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-600 pl-2">Work Email</label>
                            <input type="email" placeholder="john@example.com" className="w-full px-10 py-6 rounded-3xl bg-slate-50 border border-slate-100 text-slate-950 placeholder:text-slate-300 focus:outline-none focus:border-amber-500 focus:bg-white transition-all shadow-inner font-bold" />
                         </div>
                      </div>

                      <div className="space-y-6">
                         <label className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-600 pl-2">Workflow Segment</label>
                         <select className="w-full px-10 py-6 rounded-3xl bg-slate-50 border border-slate-100 text-slate-950 placeholder:text-slate-300 focus:outline-none focus:border-amber-500 focus:bg-white transition-all shadow-inner font-black uppercase tracking-widest text-xs appearance-none cursor-pointer">
                            <option>Team Operation Center</option>
                            <option>Service Delivery Hub</option>
                            <option>Security & Audit Protocol</option>
                            <option>General Operational Inquiry</option>
                         </select>
                      </div>

                      <div className="space-y-6">
                         <label className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-600 pl-2">Coordination Goals</label>
                         <textarea placeholder="Describe your team's operational friction points..." rows={4} className="w-full px-10 py-8 rounded-[3rem] bg-slate-50 border border-slate-100 text-slate-950 placeholder:text-slate-300 focus:outline-none focus:border-amber-500 focus:bg-white transition-all shadow-inner font-medium leading-relaxed resize-none" />
                      </div>

                      <button className="w-full py-8 rounded-[2.5rem] bg-slate-950 text-white font-black text-xs tracking-[0.3em] uppercase shadow-3xl transition-all hover:scale-110 active:scale-95 flex items-center justify-center gap-6 group/btn hover:bg-amber-500 hover:text-white">
                         Initialize Loop
                         <Send className="w-5 h-5 group-hover/btn:translate-x-2 group-hover/btn:-translate-y-2 transition-transform" />
                      </button>
                      <p className="text-[9px] font-black uppercase tracking-[0.4em] text-slate-400 text-center">By initiating this Protocol, you agree to our structural governance policy.</p>
                   </form>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Industrial Trust Badges Strip (Execution focus) */}
      <section className="py-24 bg-white text-center border-t border-slate-950/5 relative">
         <div className="absolute inset-0 bg-slate-50/20 -z-10" />
         <div className="container mx-auto px-4 max-w-5xl space-y-12 animate-in fade-in duration-1000">
            <h3 className="text-xl lg:text-3xl font-black uppercase tracking-[0.4em] text-slate-600 italic">Operational Flux Verified</h3>
            <div className="flex flex-wrap items-center justify-center gap-12 lg:gap-32 opacity-20 filter grayscale group">
               {['SOC2 COMPLIANT', 'SAML SSO READY', 'GDPR SOVEREIGN', 'AUDIT PERSISTENT'].map(b => (
                 <span key={b} className="text-[11px] font-black uppercase tracking-[0.4em] font-mono hover:text-amber-500 transition-colors">{b}</span>
               ))}
            </div>
         </div>
      </section>
    </div>
  );
}
