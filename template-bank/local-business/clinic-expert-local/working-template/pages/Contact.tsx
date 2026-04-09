"use client";

import React from 'react';
import { Mail, Phone, MapPin, Clock, Calendar, Send, ExternalLink } from 'lucide-react';

export default function Contact() {
  return (
    <div className="flex flex-col bg-slate-50 min-h-screen">
      {/* Header */}
      <section className="bg-white pt-32 pb-24 border-b border-slate-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
           <span className="text-xs font-black uppercase tracking-[0.3em] text-indigo-600 block">Get in Touch</span>
           <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight leading-tight">
             Schedule Your <br/><span className="text-indigo-600">Specialist Placement</span>.
           </h1>
           <p className="mt-8 text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
             Our intake team is available to assist you with scheduling and any initial questions about our clinical departments. Start your journey toward expert-led care today.
           </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-24">
         <div className="max-width-77xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
               
               {/* Appointment Form */}
               <div className="lg:col-span-7 bg-white p-10 lg:p-16 rounded-[4rem] shadow-2xl shadow-indigo-900/5 border border-slate-100 relative overflow-hidden">
                  <div className="relative z-10">
                     <h2 className="text-2xl font-black text-slate-900 mb-10 uppercase tracking-tight flex items-center gap-3">
                        <Calendar className="w-6 h-6 text-indigo-600" />
                        Request Appointment
                     </h2>
                     <form className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                           <div className="space-y-2">
                              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Full Name</label>
                              <input type="text" className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:ring-4 focus:ring-indigo-600/5 focus:border-indigo-600 transition-all" placeholder="Johnathan Specialist" />
                           </div>
                           <div className="space-y-2">
                              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Email Address</label>
                              <input type="email" className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:ring-4 focus:ring-indigo-600/5 focus:border-indigo-600 transition-all" placeholder="john@example.com" />
                           </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                           <div className="space-y-2">
                              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Phone Number</label>
                              <input type="tel" className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:ring-4 focus:ring-indigo-600/5 focus:border-indigo-600 transition-all" placeholder="+1 (555) 000-0123" />
                           </div>
                           <div className="space-y-2">
                              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Clinical Department</label>
                              <select className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:ring-4 focus:ring-indigo-600/5 focus:border-indigo-600 transition-all appearance-none cursor-pointer">
                                 <option>Select Department</option>
                                 <option>General Specialist Consultation</option>
                                 <option>Advanced Diagnostics</option>
                                 <option>Restorative Treatment</option>
                                 <option>Preventive Wellness</option>
                              </select>
                           </div>
                        </div>
                        <div className="space-y-2">
                           <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Reason for Consultation (Optional)</label>
                           <textarea rows={4} className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:ring-4 focus:ring-indigo-600/5 focus:border-indigo-600 transition-all resize-none" placeholder="Briefly describe your clinical requirements..." />
                        </div>
                        <button className="w-full bg-indigo-600 text-white py-6 rounded-2xl font-black uppercase tracking-[0.3em] text-xs shadow-2xl shadow-indigo-900/20 hover:bg-slate-900 hover:shadow-none transition-all flex items-center justify-center gap-3 active:scale-[0.98]">
                           Submit Appointment Request
                           <Send className="w-4 h-4" />
                        </button>
                        <p className="text-center text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                           We typically respond to requests within 4 clinical hours.
                        </p>
                     </form>
                  </div>
                  {/* Background decoration */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
               </div>

               {/* Practice Info */}
               <div className="lg:col-span-5 space-y-12">
                  <div className="space-y-8">
                     <h2 className="text-xl font-black text-slate-900 uppercase tracking-widest italic border-b-2 border-slate-900 pb-2 inline-block">Practice Headquarters</h2>
                     <div className="space-y-10">
                        <ContactInfoItem 
                          icon={MapPin}
                          title="Central Practice"
                          value="123 Medical Plaza, Suite 400"
                          subValue="North Medical District, NY 10012"
                        />
                        <ContactInfoItem 
                          icon={Phone}
                          title="Intatke Hotline"
                          value="800 555 0123"
                          subValue="Priority Specialist Direct Line"
                        />
                        <ContactInfoItem 
                          icon={Mail}
                          title="Emergency Protocol"
                          value="intake@clinicexpert.com"
                          subValue="Email our clinical response team"
                        />
                     </div>
                  </div>

                  <div className="bg-slate-900 rounded-[3rem] p-10 text-white space-y-8 relative overflow-hidden group">
                     <div className="relative z-10">
                        <h3 className="text-xl font-black flex items-center gap-3">
                           <Clock className="w-5 h-5 text-indigo-400" />
                           Clinical Hours
                        </h3>
                        <div className="mt-6 space-y-4">
                           <div className="flex justify-between items-center py-2 border-b border-white/5">
                              <span className="text-slate-400 text-sm font-bold uppercase tracking-widest">Monday - Friday</span>
                              <span className="font-black text-indigo-300">8:00am - 6:00pm</span>
                           </div>
                           <div className="flex justify-between items-center py-2 border-b border-white/5">
                              <span className="text-slate-400 text-sm font-bold uppercase tracking-widest">Saturday</span>
                              <span className="font-black text-indigo-300">9:00am - 2:00pm</span>
                           </div>
                           <div className="flex justify-between items-center py-2">
                              <span className="text-slate-400 text-sm font-bold uppercase tracking-widest">Sunday</span>
                              <span className="font-black text-slate-600 italic">Emergencies Only</span>
                           </div>
                        </div>
                     </div>
                     <button className="relative z-10 w-full bg-white/10 hover:bg-white/20 transition-all py-4 rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-2">
                        Open in Google Maps <ExternalLink className="w-3 h-3" />
                     </button>
                     {/* Decorative glow */}
                     <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 blur-[60px] rounded-full group-hover:bg-indigo-500/20 transition-all" />
                  </div>
               </div>

            </div>
         </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[400px] w-full bg-slate-200 relative grayscale hover:grayscale-0 transition-all duration-1000">
         <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center space-y-4">
               <MapPin className="w-12 h-12 text-indigo-600 mx-auto animate-bounce" />
               <p className="font-black text-slate-400 uppercase tracking-widest text-[10px]">Real-time GIS Placeholder</p>
            </div>
         </div>
      </section>

    </div>
  );
}

function ContactInfoItem({ icon: Icon, title, value, subValue }: { icon: any, title: string, value: string, subValue: string }) {
  return (
    <div className="flex items-start gap-6 group">
       <div className="w-14 h-14 rounded-2xl bg-white border border-slate-100 flex items-center justify-center shadow-lg group-hover:bg-indigo-600 group-hover:text-white transition-all">
          <Icon className="w-6 h-6" />
       </div>
       <div className="space-y-1">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-600">{title}</p>
          <p className="text-lg font-black text-slate-900 group-hover:text-indigo-600 transition-colors">{value}</p>
          <p className="text-xs text-slate-400 font-medium">{subValue}</p>
       </div>
    </div>
  );
}
