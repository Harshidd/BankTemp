"use client";

import React from 'react';
import { CheckCircle2, ShieldCheck, Clock, PenTool } from 'lucide-react';

interface PageProps {
  onNavigate: (page: string) => void;
}

export default function About({ onNavigate }: PageProps) {
  const stats = [
    { value: "15+", label: "Years Experience" },
    { value: "5k+", label: "Systems Repaired" },
    { value: "100%", label: "Licensed Staff" },
    { value: "A+", label: "Top Ratings" }
  ];

  return (
    <div className="animate-in fade-in duration-700 bg-slate-50 min-h-screen font-sans">
      
      {/* Page Header */}
      <div className="bg-slate-100 py-16 border-b border-slate-200">
        <div className="container mx-auto px-4 max-w-[1200px] text-center">
          <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">About ClimaNova</h1>
          <p className="text-base text-slate-600 font-medium max-w-xl mx-auto">
            Locally operated heating & cooling technicians dedicated to upfront rates and complete satisfaction.
          </p>
        </div>
      </div>

      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <span className="text-orange-600 font-bold uppercase tracking-wider text-xs block mb-1 border-b-2 border-orange-200 w-fit pb-1">Our History</span>
                <h2 className="text-2xl md:text-3xl font-black text-slate-900 leading-tight">
                  Independent Specialists Grounded in Technical Integrity.
                </h2>
              </div>
              <div className="space-y-4 text-slate-600 font-medium leading-relaxed text-sm md:text-base">
                <p>
                  At ClimaNova, we operate without hard-sell tactics or deceptive hidden charges. When heating or cooling systems fail unexpectedly, we understand you need technical solutions rather than persistent upselling.
                </p>
                <p>
                  Over the past 15 years, our mobile field team has grown organically while ensuring all local technicians remain fully certified, background checked, and aligned with our core service principles.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-blue-900 rounded-2xl transform translate-x-3 translate-y-3 opacity-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&q=80&w=1000" 
                alt="HVAC Technicians on Duty" 
                className="relative z-10 w-full h-[380px] object-cover rounded-xl shadow-lg border border-slate-200"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="bg-slate-900 py-16 border-t-8 border-orange-600">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat, i) => (
              <div key={i}>
                <div className="text-3xl md:text-4xl font-black text-white mb-1">{stat.value}</div>
                <div className="text-slate-400 font-bold text-[10px] uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900">Our Core Principles</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-50 p-6 rounded border border-slate-200">
              <ShieldCheck className="w-8 h-8 text-orange-600 mb-4" />
              <h3 className="text-lg font-black text-slate-900 mb-2">Clear Diagnoses</h3>
              <p className="text-slate-600 font-medium leading-relaxed text-sm">If your system can be safely repaired, we will fix it. We never recommend unnecessary replacements.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded border border-slate-200">
              <Clock className="w-8 h-8 text-orange-600 mb-4" />
              <h3 className="text-lg font-black text-slate-900 mb-2">Punctual Timing</h3>
              <p className="text-slate-600 font-medium leading-relaxed text-sm">Our team respects your schedule, giving accurate windows and calling directly when we are en route.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded border border-slate-200">
              <PenTool className="w-8 h-8 text-orange-600 mb-4" />
              <h3 className="text-lg font-black text-slate-900 mb-2">Professional Work</h3>
              <p className="text-slate-600 font-medium leading-relaxed text-sm">Technicians clean up after installation work. We respect your property at all times.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
