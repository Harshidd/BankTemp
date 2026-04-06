"use client";

import React from 'react';
import { Mail, MessageCircle, Phone, ArrowRight, CheckCircle2, Globe, Send, ShieldAlert, Cpu } from 'lucide-react';

export default function Contact() {
  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen pt-32 lg:pt-48">
      {/* Contact Hero */}
      <section className="container mx-auto px-4 mb-24 lg:mb-48 text-center relative overflow-hidden">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-indigo-500/10 blur-[150px] rounded-full pointer-events-none opacity-40" />
         <div className="space-y-8 relative z-10">
            <span className="text-xs font-bold text-indigo-400 tracking-[0.4em] uppercase font-mono">Inquiry Protocol</span>
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white leading-none italic uppercase leading-[1.05]">Initiate <span className="text-emerald-400">Intelligence Loop.</span></h1>
            <p className="text-lg lg:text-xl text-slate-500 leading-relaxed font-medium max-w-2xl mx-auto">From architectural advice to custom enterprise deployment logic, our technical specialists are ready to accelerate your workspace transition.</p>
         </div>
      </section>

      {/* Contact Grid (Panel Divide) */}
      <section className="py-24 border-y border-white/5 bg-slate-900/40 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-40 items-start max-w-7xl mx-auto">
             
             {/* Left Column: Technical Support & Channels */}
             <div className="space-y-24">
                <div className="space-y-12">
                   <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-white uppercase italic leading-none">Global <br/> Specialized <br/> Response.</h2>
                   <p className="text-lg text-slate-500 font-medium leading-relaxed max-w-lg">Choose your preferred channel of communication. Our specialized teams respond to inquiry requests in <span className="text-emerald-400">sub-30 minute</span> average cycles for all Premium Tier workspaces.</p>
                </div>

                <div className="space-y-8">
                   <div className="flex items-center gap-8 p-12 rounded-[2.5rem] border border-white/5 bg-slate-950 transition-all cursor-pointer group hover:bg-emerald-500 hover:text-slate-950">
                      <div className="w-16 h-16 rounded-2xl bg-white/5 group-hover:bg-black/5 flex items-center justify-center text-emerald-400 group-hover:text-slate-950 shadow-2xl shadow-emerald-500/10 transition-colors">
                         <Mail className="w-8 h-8" />
                      </div>
                      <div className="space-y-1">
                         <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500 group-hover:text-slate-950/40">Inquiry Channel</p>
                         <p className="text-xl sm:text-2xl font-bold uppercase tracking-tighter">hello@example.com</p>
                      </div>
                   </div>
                   
                   <div className="flex items-center gap-8 p-12 rounded-[2.5rem] border border-white/5 bg-slate-950 transition-all cursor-pointer group hover:bg-indigo-600">
                      <div className="w-16 h-16 rounded-2xl bg-white/5 group-hover:bg-black/5 flex items-center justify-center text-indigo-400 group-hover:text-white shadow-2xl shadow-indigo-500/10 transition-colors">
                         <Phone className="w-8 h-8" />
                      </div>
                      <div className="space-y-1">
                         <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500 group-hover:text-white/40">Enterprise Direct</p>
                         <p className="text-xl sm:text-2xl font-bold uppercase tracking-tighter">+1 (800) 555-DATA</p>
                      </div>
                   </div>
                </div>

                <div className="space-y-8 pb-12 border-b border-white/5 group cursor-default">
                   <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-indigo-500">Infrastructure Verification</p>
                   <div className="space-y-2">
                      <p className="text-[10px] font-bold text-white/70 uppercase">Global Headquarters</p>
                      <p className="text-sm font-medium text-slate-500 tracking-tight">123 Structural Plaza, Suite 400 <br/> San Francisco, CA 94103</p>
                   </div>
                   <div className="flex items-center gap-3 text-[10px] font-bold text-emerald-500 uppercase tracking-widest pt-4">
                      <Globe className="w-4 h-4" /> Global Distributed Operations Available
                   </div>
                </div>
             </div>

             {/* Right Column: Demo Inquiry Panel */}
             <div className="p-10 lg:p-20 rounded-[4rem] border border-white/5 bg-slate-900 shadow-3xl relative overflow-hidden">
                <div className="absolute inset-0 bg-emerald-500/5 blur-3xl" />
                <div className="relative z-10 space-y-12">
                   <div className="space-y-4">
                      <h3 className="text-2xl lg:text-3xl font-bold tracking-tight text-white uppercase italic italic leading-none">Analyze Your Workspace</h3>
                      <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Connect with a technical architect.</p>
                   </div>

                   <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                         <div className="space-y-3">
                            <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-600 pl-1">Principal Name</label>
                            <input type="text" placeholder="John Example" className="w-full px-8 py-5 rounded-2xl bg-slate-950 border border-white/5 text-white placeholder:text-white/10 focus:outline-none focus:border-emerald-500 transition-colors shadow-inner" />
                         </div>
                         <div className="space-y-3">
                            <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-600 pl-1">Work Email</label>
                            <input type="email" placeholder="john@example.com" className="w-full px-8 py-5 rounded-2xl bg-slate-950 border border-white/5 text-white placeholder:text-white/10 focus:outline-none focus:border-emerald-500 transition-colors shadow-inner" />
                         </div>
                      </div>

                      <div className="space-y-4">
                         <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-600 pl-1">Data Ecosystem Scope</label>
                         <select className="w-full px-8 py-5 rounded-2xl bg-slate-950 border border-white/5 text-white placeholder:text-white/10 focus:outline-none focus:border-emerald-500 transition-colors appearance-none cursor-pointer shadow-inner">
                            <option className="bg-slate-900 font-bold uppercase">Technical Platform Demo</option>
                            <option className="bg-slate-900 font-bold uppercase">Enterprise Deployment Support</option>
                            <option className="bg-slate-900 font-bold uppercase">Partnership Discussion</option>
                            <option className="bg-slate-900 font-bold uppercase">Security & Compliance Inquiry</option>
                         </select>
                      </div>

                      <div className="space-y-4">
                         <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-600 pl-1">Inquiry Description</label>
                         <textarea placeholder="Tell us about your organization's data velocity goals..." rows={4} className="w-full px-8 py-6 rounded-3xl bg-slate-950 border border-white/5 text-white placeholder:text-white/10 focus:outline-none focus:border-emerald-500 transition-colors resize-none shadow-inner" />
                      </div>

                      <button className="w-full py-6 rounded-3xl bg-white text-slate-950 font-bold text-sm tracking-widest uppercase shadow-3xl transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-4 group/btn">
                         Initiate Protocol
                         <Send className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                      </button>
                      <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-slate-700 text-center">By initiating this request, you agree to our structural governance policy.</p>
                   </form>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Trust Badges Strip (Industrial) */}
      <section className="py-24 bg-slate-950 text-center">
         <div className="container mx-auto px-4 max-w-4xl space-y-12">
            <h3 className="text-xl lg:text-2xl font-bold uppercase tracking-[0.4em] text-slate-600 italic">Data Integrity Verified</h3>
            <div className="flex flex-wrap items-center justify-center gap-12 lg:gap-24 opacity-20 grayscale pointer-events-none">
               {['SOC2 COMPLIANT', 'GDPR NATIVE', '99.99% UPTIME', 'GLOBAL INFRA'].map(b => (
                 <span key={b} className="text-[10px] font-bold uppercase tracking-[0.3em] font-mono">{b}</span>
               ))}
            </div>
         </div>
      </section>
    </div>
  );
}
