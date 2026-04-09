"use client";

import React, { useState } from 'react';
import { Plus, Minus, Search, HelpCircle, ArrowRight } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "How do I schedule an initial specialist consultation?",
      a: "You can request an appointment through our online portal or by calling our intake hotline at 800 555 0123. Our team will review your requirements and match you with the appropriate clinical department specialist."
    },
    {
       q: "What should I bring to my first clinical evaluation?",
       a: "Please bring any previous diagnostic records, a list of current medications, and your primary identification. If you have been referred by another practitioner, please ensure the referral documentation is available."
    },
    {
       q: "Are clinical treatments covered by standard insurance?",
       a: "We work with most major specialist providers. However, coverage can vary based on the specific specialized treatment or diagnostic modality. Our billing department will verify your benefits during your first visit."
    },
    {
       q: "How long does a typical specialist consultation take?",
       a: "A comprehensive initial evaluation typically takes 45 to 60 minutes. This allows our specialists to perform a deep-dive analysis and formulate a precise treatment plan."
    },
    {
       q: "Does the clinic offer emergency specialist care?",
       a: "We operate primarily as a scheduled specialist group. In cases of urgent clinical review for existing patients, we maintain priority slots. For acute emergencies, please visit the nearest hospital emergency department."
    }
  ];

  return (
    <div className="flex flex-col bg-slate-50 min-h-screen">
      {/* Header */}
      <section className="bg-white pt-32 pb-24 border-b border-slate-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
           <span className="text-xs font-black uppercase tracking-[0.3em] text-indigo-600 block">Patient Knowledge</span>
           <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight leading-tight">
             Clarity for Every <br/><span className="text-indigo-600">Patient Question</span>.
           </h1>
           <div className="max-w-xl mx-auto pt-8 relative">
              <input 
                type="text" 
                placeholder="Search treatment guides or questions..." 
                className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-12 py-5 text-sm focus:outline-none focus:ring-4 focus:ring-indigo-600/5 focus:border-indigo-600 transition-all shadow-xl shadow-indigo-900/5"
              />
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
           </div>
        </div>
      </section>

      {/* Accordion Section */}
      <section className="py-24">
         <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className={`bg-white rounded-[2rem] border transition-all duration-300 ${openIndex === idx ? 'border-indigo-600 shadow-2xl shadow-indigo-900/5' : 'border-slate-100 shadow-lg shadow-slate-200/50'}`}>
                 <button 
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full px-8 py-8 flex items-center justify-between gap-4 text-left group"
                 >
                    <span className={`text-lg font-black tracking-tight transition-colors ${openIndex === idx ? 'text-indigo-600' : 'text-slate-900 group-hover:text-indigo-600'}`}>
                      {faq.q}
                    </span>
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all ${openIndex === idx ? 'bg-indigo-600 border-indigo-600 text-white rotate-180' : 'border-slate-200 text-slate-400 group-hover:border-indigo-600 group-hover:text-indigo-600'}`}>
                       {openIndex === idx ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                 </button>
                 {openIndex === idx && (
                   <div className="px-8 pb-8 animate-in fade-in slide-in-from-top-2 duration-300">
                      <div className="pt-4 border-t border-slate-50 text-slate-500 leading-relaxed">
                         {faq.a}
                         <div className="mt-6 flex items-center gap-4">
                            <button className="text-[10px] font-black uppercase tracking-widest text-indigo-600 hover:text-slate-900 transition-colors flex items-center gap-2">
                               Was this helpful? <ArrowRight className="w-3 h-3" />
                            </button>
                         </div>
                      </div>
                   </div>
                 )}
              </div>
            ))}
         </div>
      </section>

      {/* Support Strip */}
      <section className="py-24 bg-white border-y border-slate-100">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-slate-900 rounded-[3rem] p-12 lg:p-20 flex flex-col lg:flex-row items-center justify-between gap-12 relative overflow-hidden group">
               <div className="space-y-6 relative z-10 text-center lg:text-left">
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-indigo-400 mb-4 mx-auto lg:mx-0">
                     <HelpCircle className="w-8 h-8" />
                  </div>
                  <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">Can't find your <br/><span className="text-indigo-400">answer</span>?</h2>
                  <p className="text-slate-400 max-w-sm leading-relaxed">
                     Our patient coordination team is standing by to help with any complex clinical inquiries or data requests.
                  </p>
               </div>
               <div className="flex flex-col sm:flex-row gap-4 relative z-10 w-full lg:w-auto">
                  <button className="bg-white text-slate-900 px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-indigo-400 hover:text-white transition-all shadow-2xl">
                     Contact Patient Support
                  </button>
                  <button className="bg-slate-800 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-slate-700 transition-all">
                     View Clinical Portal
                  </button>
               </div>
               {/* Background Accent */}
               <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2 group-hover:bg-indigo-500/20 transition-all duration-1000" />
            </div>
         </div>
      </section>

    </div>
  );
}
