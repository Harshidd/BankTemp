"use client";

import React from 'react';
import { Mail, MessageSquare, Send, Globe, Video, MessageCircle, Camera, ArrowRight } from 'lucide-react';

interface PageProps {
  onNavigate: (page: string) => void;
}

export default function Contact({ onNavigate }: PageProps) {
  return (
    <div className="pt-32 pb-24">
      <section className="px-6 mb-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 uppercase italic">Let&apos;s <span className="text-emerald-600">Connect</span></h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Have a question, a project idea, or just want to say hi? I&apos;m always open to interesting conversations and impactful collaborations.
          </p>
        </div>
      </section>

      <section className="px-6 mb-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Inquiry Pathways */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-10 uppercase italic underline decoration-emerald-100 underline-offset-8">Collaboration Pathways</h2>
            <div className="space-y-8">
              {[
                { 
                  title: "Speaking & Workshops", 
                  desc: "I&apos;m available for keynote speaking and hands-on workshops for creator teams and educational institutions.",
                  link: "Enquire about speaking"
                },
                { 
                  title: "Brand Partnerships", 
                  desc: "I partner with tools and services that authentically help my audience of 50k+ creators. No generic sponsorships.",
                  link: "View media kit"
                },
                { 
                  title: "Advisory & Consulting", 
                  desc: "High-level strategic support for established creators moving from $100k to $1M+ in digital revenue.",
                  link: "Apply for advisory"
                }
              ].map((item, idx) => (
                <div key={idx} className="group p-8 bg-slate-50 rounded-3xl hover:bg-emerald-50 transition-all border border-transparent hover:border-emerald-100">
                  <h4 className="text-lg font-bold text-slate-900 mb-3 uppercase italic tracking-wide">{item.title}</h4>
                  <p className="text-slate-600 mb-6">{item.desc}</p>
                  <button className="text-emerald-600 font-bold text-sm flex items-center gap-2 group-hover:gap-4 transition-all">
                    {item.link} <ArrowRight size={16} />
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-12 border-t border-slate-100">
              <h3 className="font-bold text-slate-900 mb-6 uppercase italic">Follow the Journey</h3>
              <div className="flex gap-4">
                <a href="#" className="p-4 bg-slate-900 text-white rounded-2xl hover:bg-emerald-600 transition-all">
                  <Video size={20} />
                </a>
                <a href="#" className="p-4 bg-slate-900 text-white rounded-2xl hover:bg-emerald-600 transition-all">
                  <MessageCircle size={20} />
                </a>
                <a href="#" className="p-4 bg-slate-900 text-white rounded-2xl hover:bg-emerald-600 transition-all">
                  <Camera size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-10 md:p-14 rounded-[3rem] border-2 border-slate-50 shadow-2xl shadow-slate-200/50">
            <div className="mb-10">
              <h3 className="text-2xl font-bold text-slate-900 mb-2 uppercase italic">Send a Message</h3>
              <p className="text-slate-500 font-medium">I personally read every email. Response time is usually 24-48 hours.</p>
            </div>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest pl-1">Name</label>
                  <input type="text" placeholder="John Doe" className="w-full px-6 py-4 bg-slate-50 border-2 border-transparent focus:border-emerald-400 focus:bg-white outline-none rounded-2xl transition-all font-medium" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest pl-1">Email</label>
                  <input type="email" placeholder="john@example.com" className="w-full px-6 py-4 bg-slate-50 border-2 border-transparent focus:border-emerald-400 focus:bg-white outline-none rounded-2xl transition-all font-medium" />
                </div>
              </div>
              <div className="space-y-2">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest pl-1">Subject</label>
                  <select className="w-full px-6 py-4 bg-slate-50 border-2 border-transparent focus:border-emerald-400 focus:bg-white outline-none rounded-2xl transition-all font-medium appearance-none">
                    <option>General Inquiry</option>
                    <option>Speaking Request</option>
                    <option>Partnership</option>
                    <option>Help with a Product</option>
                  </select>
              </div>
              <div className="space-y-2">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest pl-1">Message</label>
                  <textarea rows={5} placeholder="How can I help you?" className="w-full px-6 py-4 bg-slate-50 border-2 border-transparent focus:border-emerald-400 focus:bg-white outline-none rounded-2xl transition-all font-medium resize-none"></textarea>
              </div>
              <button className="w-full py-5 bg-emerald-600 text-white font-bold rounded-2xl hover:bg-emerald-700 transition-all flex items-center justify-center gap-3 shadow-xl shadow-emerald-500/20 active:scale-95 group">
                Send Message <Send size={18} className="group-hover:rotate-12 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
