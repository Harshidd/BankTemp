"use client";

import React from 'react';
import { Mail, MessageSquare, Phone, MapPin, Send, ArrowUpRight } from 'lucide-react';
import { Twitter } from '../components/Icons';

export default function Contact() {
  return (
    <div className="flex flex-col animate-in fade-in duration-700">
      {/* Page Header */}
      <section className="bg-white py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-7xl mb-8">
            Let's build <br/>
            the <span className="text-indigo-600">future</span> together.
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-500 leading-relaxed">
            Have questions about implementation? Need custom enterprise features? <br className="hidden md:block" />
            Our team is ready to help you navigate the AI frontier.
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-12 pb-24 lg:py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Contact Form */}
            <div className="lg:col-span-7 bg-white p-8 lg:p-12 rounded-[2.5rem] shadow-2xl shadow-indigo-900/5 border border-slate-100">
               <h2 className="text-2xl font-black text-slate-900 mb-8 uppercase tracking-tight">Send a message</h2>
               <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                       <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Full Name</label>
                       <input 
                         type="text" 
                         className="w-full rounded-2xl border border-slate-100 bg-slate-50 px-5 py-4 text-sm focus:border-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-500/5 transition-all"
                         placeholder="John Doe"
                       />
                    </div>
                    <div className="space-y-2">
                       <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Email Address</label>
                       <input 
                         type="email" 
                         className="w-full rounded-2xl border border-slate-100 bg-slate-50 px-5 py-4 text-sm focus:border-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-500/5 transition-all"
                         placeholder="john@example.com"
                       />
                    </div>
                  </div>
                  <div className="space-y-2">
                     <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Inquiry Type</label>
                     <select className="w-full rounded-2xl border border-slate-100 bg-slate-50 px-5 py-4 text-sm focus:border-indigo-500 focus:outline-none transition-all appearance-none cursor-pointer">
                        <option>General Support</option>
                        <option>Enterprise / Sales</option>
                        <option>Partnership Inquiry</option>
                        <option>Press & Media</option>
                     </select>
                  </div>
                  <div className="space-y-2">
                     <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Your Message</label>
                     <textarea 
                       rows={5}
                       className="w-full rounded-2xl border border-slate-100 bg-slate-50 px-5 py-4 text-sm focus:border-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-500/5 transition-all resize-none"
                       placeholder="How can we help you?"
                     />
                  </div>
                  <button className="w-full rounded-2xl bg-indigo-600 py-5 text-sm font-bold uppercase tracking-widest text-white shadow-xl shadow-indigo-100 hover:bg-slate-900 hover:shadow-none transition-all flex items-center justify-center gap-3">
                     Launch Transmission
                     <Send className="w-4 h-4" />
                  </button>
               </form>
            </div>

            {/* Support Info */}
            <div className="lg:col-span-5 space-y-12 lg:pt-12">
               <div className="space-y-8">
                  <h2 className="text-xl font-bold text-slate-900 uppercase tracking-widest">Connect Directly</h2>
                  <div className="space-y-6">
                    <ContactItem 
                      icon={Mail} 
                      title="Email us" 
                      value="hello@aifeature.com" 
                      link="mailto:hello@aifeature.com" 
                    />
                    <ContactItem 
                      icon={MessageSquare} 
                      title="Live Chat" 
                      value="Start with an agent" 
                      link="#" 
                    />
                    <ContactItem 
                      icon={Twitter} 
                      title="Community" 
                      value="Join our Discord" 
                      link="#" 
                    />
                  </div>
               </div>

               <div className="p-8 rounded-[2rem] bg-slate-900 text-white shadow-2xl relative overflow-hidden">
                  <h3 className="text-lg font-bold mb-4">Enterprise Hotline</h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-6">
                    For high-priority organizational scaling, call our dedicated success line.
                  </p>
                  <div className="flex items-center gap-4 text-2xl font-black italic tracking-tight text-indigo-400">
                    <Phone className="w-6 h-6" />
                    +1 (555) AI-PILOT
                  </div>
                  {/* Decorative glow */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 blur-3xl rounded-full" />
               </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

function ContactItem({ icon: Icon, title, value, link }: { icon: any, title: string, value: string, link: string }) {
  return (
    <a href={link} className="flex items-center gap-6 group">
       <div className="w-12 h-12 rounded-2xl bg-white border border-slate-100 flex items-center justify-center shadow-lg group-hover:bg-indigo-600 group-hover:text-white transition-all">
          <Icon className="w-5 h-5" />
       </div>
       <div className="flex flex-col">
          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{title}</span>
          <span className="font-bold text-slate-700 group-hover:text-indigo-600 transition-colors flex items-center gap-1">
            {value}
            <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
          </span>
       </div>
    </a>
  );
}
