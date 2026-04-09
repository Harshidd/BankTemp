"use client";

import React from 'react';
import { Calendar, Rocket, History, Star, ExternalLink } from 'lucide-react';

export default function Updates() {
  const releases = [
    {
      version: "v1.4.0",
      date: "April 1, 2026",
      title: "The Multi-Modal Update",
      description: "You can now process audio and video streams directly within your workflow loops. AI is no longer limited to text.",
      tags: ["Feature", "Performance"],
      isLatest: true
    },
    {
      version: "v1.3.2",
      date: "March 15, 2026",
      title: "API Engine Refactor",
      description: "Latency reduced by 40% across all global endpoints. Improved self-healing logic for third-party service connections.",
      tags: ["Optimization", "Security"],
      isLatest: false
    },
    {
      version: "v1.2.0",
      date: "February 22, 2026",
      title: "Custom Brand Training",
      description: "Teach the AI your specific brand voice and internal terminology for more accurate content generation and analysis.",
      tags: ["Intelligence"],
      isLatest: false
    },
    {
      version: "v1.0.0",
      date: "January 5, 2026",
      title: "Genesis Launch",
      description: "The first stable release of AIFeature. Core workflow engine and basic integrations live for all early adopters.",
      tags: ["Major"],
      isLatest: false
    }
  ];

  return (
    <div className="flex flex-col animate-in fade-in duration-700">
      {/* Page Header */}
      <section className="bg-slate-900 text-white py-20 lg:py-32 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-7xl mb-6 italic">
              Momentum <br/>
              in <span className="text-indigo-400 font-sans not-italic">Motion</span>.
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed">
              We ship improvements every single week. Follow our journey as we build the definitive productivity engine for the intelligent age.
            </p>
          </div>
        </div>
        {/* Background circuit pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
           <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#6366f1_1px,transparent_1px),linear-gradient(to_bottom,#6366f1_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>
      </section>

      {/* Release Timeline */}
      <section className="py-24 bg-white relative">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
           <div className="space-y-16 lg:space-y-24">
              {releases.map((release, index) => (
                <div key={index} className="relative pl-12 lg:pl-0">
                   {/* Vertical Line for Timeline */}
                   {index !== releases.length - 1 && (
                     <div className="absolute left-[20px] lg:left-1/2 top-10 bottom-[-40px] w-0.5 bg-slate-100 hidden lg:block" />
                   )}
                   
                   <div className={`flex flex-col lg:flex-row items-start lg:items-center gap-8 ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
                      {/* Date & Version */}
                      <div className="lg:w-1/2 flex flex-col items-start lg:items-end lg:text-right">
                         <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2">
                           <Calendar className="w-3 h-3" />
                           {release.date}
                         </div>
                         <div className={`px-4 py-1.5 rounded-full text-xs font-bold border transition-all ${
                            release.isLatest 
                              ? "bg-indigo-600 text-white border-indigo-600 shadow-xl shadow-indigo-100" 
                              : "bg-white text-slate-500 border-slate-200"
                         }`}>
                           {release.isLatest && <Star className="w-3 h-3 inline-block mr-2 fill-white antialiased" />}
                           {release.version}
                         </div>
                      </div>

                      {/* Timeline Node */}
                      <div className="absolute left-0 lg:static z-10">
                         <div className={`w-10 h-10 rounded-full border-4 border-white shadow-xl flex items-center justify-center ${
                           release.isLatest ? "bg-indigo-600 scale-125" : "bg-slate-200"
                         }`}>
                           {release.isLatest ? <Rocket className="w-5 h-5 text-white" /> : <History className="w-5 h-5 text-slate-400" />}
                         </div>
                      </div>

                      {/* Content Card */}
                      <div className="lg:w-1/2 p-8 lg:p-10 rounded-3xl border border-slate-100 bg-white shadow-xl hover:shadow-2xl transition-shadow group">
                         <div className="flex flex-wrap gap-2 mb-6">
                            {release.tags.map(tag => (
                              <span key={tag} className="px-2 py-0.5 rounded bg-slate-50 border border-slate-100 text-[9px] font-bold text-slate-400 uppercase tracking-widest">
                                {tag}
                              </span>
                            ))}
                         </div>
                         <h3 className="text-2xl font-extrabold text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors">
                            {release.title}
                         </h3>
                         <p className="text-sm text-slate-500 leading-relaxed mb-6">
                            {release.description}
                         </p>
                         <button className="text-[10px] font-bold uppercase tracking-widest text-indigo-600 flex items-center gap-2 hover:gap-3 transition-all">
                            Full Release Notes
                            <ExternalLink className="w-3 h-3" />
                         </button>
                      </div>
                   </div>
                </div>
              ))}
           </div>

           <div className="mt-32 text-center">
              <button className="px-8 py-4 rounded-full border border-slate-200 bg-white text-slate-900 font-bold text-sm tracking-widest uppercase hover:bg-slate-50 transition-all">
                View Version History
              </button>
           </div>
        </div>
      </section>
    </div>
  );
}
