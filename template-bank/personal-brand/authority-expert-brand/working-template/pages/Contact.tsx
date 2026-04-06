"use client";

import React from 'react';
import { Mail, MessageCircle, Mic, Speaker, Globe, ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <main className="bg-stone-50 text-stone-900 pt-16">
      <section className="py-24 border-b border-stone-200 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start">
          <div className="space-y-12">
            <div className="space-y-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-amber-700 font-mono">Get in Touch</p>
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-stone-900 leading-[0.9] italic group font-black tracking-tighter uppercase italic leading-none pt-1 text-stone-950 italic group uppercase tracking-widest leading-none text-6xl">
                 One conversation changes everything.
              </h1>
              <p className="text-xl text-stone-500 leading-relaxed max-w-lg italic font-bold tracking-widest text-stone-500 leading-relaxed">
                 Whether it's a specific project, an advisory inquiry, or a speaking request, I review every message personally. Direct. Specific. Honest.
              </p>
            </div>
            
            <div className="space-y-8">
               <div className="flex items-center gap-6 group cursor-pointer">
                  <div className="w-14 h-14 rounded-2xl bg-stone-50 border border-stone-200 flex items-center justify-center group-hover:bg-amber-100 group-hover:border-amber-300 transition-all duration-500">
                     <Mail className="w-6 h-6 text-stone-400 group-hover:text-amber-700" />
                  </div>
                  <div>
                     <p className="text-[10px] font-black uppercase tracking-widest text-stone-400 leading-none mb-2">Direct Channel</p>
                     <p className="text-lg font-bold text-stone-900 tracking-tight">hello@[yourname].com</p>
                  </div>
               </div>

               <div className="flex items-center gap-6 group cursor-pointer">
                  <div className="w-14 h-14 rounded-2xl bg-stone-50 border border-stone-200 flex items-center justify-center group-hover:bg-amber-100 group-hover:border-amber-300 transition-all duration-500">
                     <Mic className="w-6 h-6 text-stone-400 group-hover:text-amber-700" />
                  </div>
                  <div>
                     <p className="text-[10px] font-black uppercase tracking-widest text-stone-400 leading-none mb-2">Speaking & Press</p>
                     <p className="text-lg font-bold text-stone-900 tracking-tight">media@[yourname].com</p>
                  </div>
               </div>
            </div>
          </div>
          
          <div className="bg-stone-50 rounded-[3rem] border border-stone-200 p-12 lg:p-16 space-y-8 shadow-sm">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                   <label className="text-[10px] font-black uppercase tracking-widest text-stone-400 ml-1">Full Name</label>
                   <input 
                     type="text" 
                     placeholder="Your name" 
                     className="w-full px-5 py-4 rounded-2xl bg-white border border-stone-200 text-sm outline-none focus:border-amber-600 transition-colors"
                   />
                </div>
                <div className="space-y-2">
                   <label className="text-[10px] font-black uppercase tracking-widest text-stone-400 ml-1">Business Email</label>
                   <input 
                     type="email" 
                     placeholder="name@email.com" 
                     className="w-full px-5 py-4 rounded-2xl bg-white border border-stone-200 text-sm outline-none focus:border-amber-600 transition-colors"
                   />
                </div>
             </div>
             
             <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-stone-400 ml-1">Inquiry Category</label>
                <select className="w-full px-5 py-4 rounded-2xl bg-white border border-stone-200 text-sm outline-none focus:border-amber-600 transition-colors appearance-none">
                   <option>Advisory / Consulting</option>
                   <option>Speaking Engagement</option>
                   <option>Interview / Podcast</option>
                   <option>Collaboration Request</option>
                   <option>Just saying hello</option>
                </select>
             </div>
             
             <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-stone-400 ml-1">Brief Context</label>
                <textarea 
                  rows={4}
                  placeholder="What can we solve together?" 
                  className="w-full px-5 py-4 rounded-2xl bg-white border border-stone-200 text-sm outline-none focus:border-amber-600 transition-colors resize-none"
                />
             </div>
             
             <button className="w-full py-5 rounded-2xl bg-stone-900 text-white font-bold text-sm tracking-widest uppercase hover:bg-amber-600 transition-all shadow-2xl flex items-center justify-center gap-3 active:scale-95 group">
                Send Inquiry <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
             </button>
             
             <p className="text-center text-[10px] font-black uppercase tracking-[0.2em] text-stone-400">Response time: Usually within 48 hours</p>
          </div>
        </div>
      </section>

      {/* Social Paths */}
      <section className="py-24 bg-stone-900 text-stone-50 overflow-hidden relative">
         <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: Globe, label: 'LinkedIn', value: '@username', summary: 'Deep-dives & updates' },
              { icon: Speaker, label: 'Twitter', value: '@username', summary: 'Daily thinking' },
              { icon: MessageCircle, label: 'Private Group', value: 'Invite Only', summary: 'Peer-to-peer growth' }
            ].map((social, idx) => (
              <div key={idx} className="group p-8 rounded-[2rem] bg-stone-950 border border-stone-800 space-y-6 hover:border-amber-400 transition-all cursor-pointer">
                 <div className="w-12 h-12 rounded-2xl bg-stone-900 border border-stone-800 flex items-center justify-center group-hover:bg-amber-600 transition-colors duration-500">
                    <social.icon className="w-6 h-6 text-amber-400 group-hover:text-white transition-colors" />
                 </div>
                 <div className="space-y-1">
                    <p className="text-[10px] font-bold text-stone-500 uppercase tracking-widest">{social.label}</p>
                    <p className="text-xl font-bold text-white tracking-tight">{social.value}</p>
                    <p className="text-xs text-stone-600 italic">{social.summary}</p>
                 </div>
              </div>
            ))}
         </div>
      </section>
    </main>
  );
}
