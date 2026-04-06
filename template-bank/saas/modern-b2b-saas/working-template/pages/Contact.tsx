"use client";

import React from 'react';
import { Mail, MessageCircle, Phone, ArrowRight, CheckCircle2, Globe, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Contact Hero */}
      <section className="relative pt-32 pb-16 lg:pt-48 lg:pb-24 border-b border-white/5">
         <div className="container mx-auto px-4 text-center">
            <span className="text-sm font-bold text-blue-400 uppercase tracking-[0.4em] mb-8 block font-mono">Inquiry Hub</span>
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-8">Access the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 italic">velocity core.</span></h1>
            <p className="text-lg lg:text-xl text-white/40 max-w-2xl mx-auto font-medium leading-relaxed">Whether you need architectural advice or enterprise governance solutions, our team is ready to accelerate your workspace transition.</p>
         </div>
      </section>

      {/* Contact Hub (Form and Channels) */}
      <section className="py-24 lg:py-48 px-4 relative overflow-hidden">
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-40 items-start">
             
             {/* Left Column: Direct Channels & Trust */}
             <div className="space-y-24">
                <div className="space-y-12">
                   <h2 className="text-3xl lg:text-5xl font-bold tracking-tight uppercase leading-none">Direct <br/> Performance <br/> Support.</h2>
                   <p className="text-lg text-white/40 font-medium leading-relaxed">Choose your preferred channel of communication. Our global specialized teams respond to inquiry requests in <span className="text-white">sub-30 minute</span> average cycles.</p>
                </div>

                <div className="space-y-8">
                   <div className="flex items-center gap-6 p-10 rounded-[2.5rem] border border-white/10 bg-white/5 group hover:bg-white hover:text-black transition-all cursor-pointer">
                      <div className="w-14 h-14 rounded-2xl bg-white/5 group-hover:bg-black/5 flex items-center justify-center text-blue-400 transition-colors">
                         <Mail className="w-6 h-6" />
                      </div>
                      <div className="space-y-1">
                         <p className="text-[10px] font-bold uppercase tracking-widest text-white/40 group-hover:text-black/40">Technical Inquiry</p>
                         <p className="text-[10px] sm:text-lg font-bold uppercase tracking-tighter">hello@example.com</p>
                      </div>
                   </div>
                   
                   <div className="flex items-center gap-6 p-10 rounded-[2.5rem] border border-white/10 bg-white/5 group hover:bg-white hover:text-black transition-all cursor-pointer">
                      <div className="w-14 h-14 rounded-2xl bg-white/5 group-hover:bg-black/5 flex items-center justify-center text-blue-400 transition-colors">
                         <Phone className="w-6 h-6" />
                      </div>
                      <div className="space-y-1">
                         <p className="text-[10px] font-bold uppercase tracking-widest text-white/40 group-hover:text-black/40">Enterprise Sales</p>
                         <p className="text-[10px] sm:text-lg font-bold uppercase tracking-tighter">+1 (800) 555-0100</p>
                      </div>
                   </div>
                </div>

                <div className="space-y-8 pb-12 border-b border-white/10 group cursor-default">
                   <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-500">Corporate Infrastructure</p>
                   <div className="space-y-2">
                      <p className="text-[10px] font-bold text-white/70 uppercase">Global Headquarters</p>
                      <p className="text-sm font-medium text-white/40 tracking-tight">123 Structural Plaza, Suite 400 <br/> San Francisco, CA 94103</p>
                   </div>
                   <div className="flex items-center gap-3 text-[10px] font-bold text-emerald-500 uppercase tracking-widest pt-4">
                      <Globe className="w-4 h-4" /> Global Distributed Operations Available
                   </div>
                </div>
             </div>

             {/* Right Column: Inquiry Form / Demo Booking */}
             <div className="p-10 lg:p-20 rounded-[4rem] border border-white/10 bg-white/5 shadow-2xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-blue-600/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10 space-y-12">
                   <div className="space-y-4">
                      <h3 className="text-2xl lg:text-3xl font-bold tracking-tight uppercase leading-none italic">Book A Live Session</h3>
                      <p className="text-sm font-bold text-white/40 uppercase tracking-widest">Architectural demo and workspace strategy.</p>
                   </div>

                   <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                         <div className="space-y-3">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 pl-1">Name</label>
                            <input type="text" placeholder="John Example" className="w-full px-6 py-5 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:border-blue-500 transition-colors" />
                         </div>
                         <div className="space-y-3">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 pl-1">Workspace Email</label>
                            <input type="email" placeholder="john@example.com" className="w-full px-6 py-5 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:border-blue-500 transition-colors" />
                         </div>
                      </div>

                      <div className="space-y-3">
                         <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 pl-1">Inquiry Purpose</label>
                         <select className="w-full px-6 py-5 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:border-blue-500 transition-colors appearance-none cursor-pointer">
                            <option className="bg-zinc-900 border-none outline-none">Professional Demo</option>
                            <option className="bg-zinc-900 border-none outline-none">Enterprise Governance Inquiry</option>
                            <option className="bg-zinc-900 border-none outline-none">Partner Ecosystem Discussion</option>
                            <option className="bg-zinc-900 border-none outline-none">General System Inquiry</option>
                         </select>
                      </div>

                      <div className="space-y-3">
                         <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 pl-1">Additional Context (Optional)</label>
                         <textarea placeholder="Tell us about your team's velocity goals..." rows={4} className="w-full px-6 py-5 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:border-blue-500 transition-colors resize-none overflow-hidden" />
                      </div>

                      <button className="w-full py-6 rounded-3xl bg-white text-black font-bold text-sm tracking-widest uppercase shadow-2xl transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-3 group/submit">
                         Initiate Request
                         <Send className="w-4 h-4 group-hover/submit:translate-x-1 group-hover/submit:-translate-y-1 transition-transform" />
                      </button>
                      <p className="text-[9px] font-bold uppercase tracking-widest text-white/20 text-center">By initiating this request, you agree to our structural governance policy.</p>
                   </form>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Trust Signals / CTA */}
      <section className="py-24 border-t border-white/5 text-center">
         <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-12">
               <h3 className="text-xl lg:text-3xl font-bold uppercase tracking-widest text-white/40 italic">Structural Clarity, Guaranteed.</h3>
               <div className="flex flex-col sm:flex-row items-center justify-center gap-12 lg:gap-24 opacity-30 grayscale cursor-default">
                  {['SOC2 COMPLIANT', 'GDPR READY', '99.99% UPTIME', 'GLOBAL INFRA'].map(badge => (
                    <span key={badge} className="text-[10px] font-bold uppercase tracking-[0.3em] font-mono">{badge}</span>
                  ))}
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}
