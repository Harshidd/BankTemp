"use client";

import React from 'react';
import { Star, Quote, CheckCircle2, Award } from 'lucide-react';

export default function Reviews() {
  const reviews = [
    {
      name: "James Wilson",
      rating: 5,
      date: "2 months ago",
      treatment: "Advanced Diagnostics",
      text: "The diagnostic process here is incredibly thorough. I'd been to three other clinics, but none of them took the time to explain the data like Dr. Arthur did. Highly recommend for anyone needing clarity."
    },
    {
      name: "Emma Davis",
      rating: 5,
      date: "3 weeks ago",
      treatment: "Restorative Therapy",
      text: "Friendly staff and world-class specialists. The environment is calm and premium, which really helps when you're feeling anxious about treatment. My recovery has been much faster than expected."
    },
    {
       name: "Robert Chen",
       rating: 5,
       date: "1 month ago",
       treatment: "Specialist Consultation",
       text: "A truly professional experience. From the booking process to the final review, everything was efficient and high-quality. The follow-up plan they provided was clear and actionable."
    },
    {
       name: "Sophia Martinez",
       rating: 5,
       date: "4 months ago",
       treatment: "Preventive Wellness",
       text: "Clinic Expert is now my go-to for all specialized needs. They combine the best technology with a human touch that is rare in modern medicine today."
    }
  ];

  return (
    <div className="flex flex-col bg-slate-50 min-h-screen">
      {/* Header */}
      <section className="bg-white pt-32 pb-24 border-b border-slate-100 relative overflow-hidden text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
           <span className="text-xs font-black uppercase tracking-[0.3em] text-indigo-600 mb-6 block">Proof of Excellence</span>
           <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight leading-tight mb-8">
             Our Patient <br/><span className="text-indigo-600">Stories</span>.
           </h1>
           <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <div className="flex items-center gap-2 px-6 py-3 bg-slate-50 rounded-2xl border border-slate-100">
                 <div className="flex text-amber-500">
                    {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-5 h-5 fill-current" />)}
                 </div>
                 <span className="font-black text-slate-900">4.9/5</span>
                 <span className="text-xs text-slate-400 font-bold uppercase tracking-widest ml-2">Verified Patient Rating</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-600 font-black uppercase tracking-widest text-[10px]">
                 <CheckCircle2 className="w-5 h-5" />
                 <span>2,500+ Verified Reviews</span>
              </div>
           </div>
        </div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-500/5 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2" />
      </section>

      {/* Reviews Grid */}
      <section className="py-24">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="columns-1 md:columns-2 gap-12 space-y-12">
               {reviews.map((review, idx) => (
                 <div key={idx} className="break-inside-avoid bg-white p-10 rounded-[3rem] border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-indigo-900/5 transition-all duration-500 group relative overflow-hidden">
                    <div className="relative z-10 space-y-6">
                       <div className="flex justify-between items-start">
                          <div className="flex text-amber-500">
                             {Array.from({ length: review.rating }).map((_, i) => (
                               <Star key={i} className="w-4 h-4 fill-current" />
                             ))}
                          </div>
                          <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">{review.date}</span>
                       </div>
                       
                       <div className="relative">
                          <Quote className="w-12 h-12 text-indigo-500/10 absolute -top-4 -left-4 -z-10 transition-transform group-hover:scale-125 duration-500" />
                          <p className="text-lg text-slate-700 leading-relaxed font-medium italic">
                            "{review.text}"
                          </p>
                       </div>

                       <div className="pt-8 border-t border-slate-50 flex items-center justify-between">
                          <div className="flex items-center gap-4">
                             <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 font-bold text-xs">
                                {review.name[0]}
                             </div>
                             <div>
                                <h4 className="font-bold text-slate-900 text-sm">{review.name}</h4>
                                <p className="text-[10px] font-bold text-indigo-500 uppercase tracking-widest">{review.treatment}</p>
                             </div>
                          </div>
                          <div className="flex items-center gap-1 px-3 py-1 bg-emerald-50 rounded-full">
                             <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                             <span className="text-[9px] font-black text-emerald-600 uppercase tracking-widest">Verified Patient</span>
                          </div>
                       </div>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Trust Banner */}
      <section className="py-24 bg-slate-900 overflow-hidden relative">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
               <div className="space-y-8">
                  <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">Patient focus, <br/><span className="text-indigo-400">measurable excellence</span>.</h2>
                  <p className="text-slate-400 text-lg leading-relaxed">
                     Our reputation isn't built on claims, but on the real-world experiences of the thousands of people who trust our specialist teams every year. We maintain a 98% patient satisfaction rate across all clinical departments.
                  </p>
                  <div className="grid grid-cols-2 gap-8 pt-4">
                     <div className="space-y-2">
                        <span className="text-4xl font-black text-indigo-400">98%</span>
                        <p className="text-xs font-black uppercase tracking-widest text-slate-500">Satisfaction Rate</p>
                     </div>
                     <div className="space-y-2">
                        <span className="text-4xl font-black text-indigo-400">15k+</span>
                        <p className="text-xs font-black uppercase tracking-widest text-slate-500">Treatments Annually</p>
                     </div>
                  </div>
               </div>
               <div className="relative">
                  <div className="aspect-square bg-white rounded-[4rem] p-12 flex flex-col justify-center items-center text-center space-y-8 shadow-3xl">
                     <Award className="w-24 h-24 text-indigo-600" />
                     <h3 className="text-2xl font-black text-slate-900 italic tracking-tight uppercase">Excellence Award 2024</h3>
                     <p className="text-slate-500 text-sm leading-relaxed max-w-xs mx-auto">
                        Ranked #1 for specialized clinical care and patient experience outcomes in the private specialist sector.
                     </p>
                     <div className="h-px w-24 bg-slate-100" />
                     <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Regional Health Board Certified</span>
                  </div>
                  {/* Floating elements */}
                  <div className="absolute -top-10 -right-10 w-20 h-20 bg-indigo-500 rounded-full animate-bounce-slow" />
                  <div className="absolute -bottom-5 -left-5 w-12 h-12 bg-emerald-500 rounded-full animate-pulse" />
               </div>
            </div>
         </div>
      </section>

    </div>
  );
}
