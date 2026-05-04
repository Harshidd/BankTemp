"use client";

import React from 'react';
import { CheckCircle2, ShieldCheck, Clock, Users } from 'lucide-react';

interface PageProps {
  onNavigate: (page: string) => void;
}

export default function About({ onNavigate }: PageProps) {
  const stats = [
    { value: "15+", label: "Years Experience" },
    { value: "5000+", label: "Projects Completed" },
    { value: "100%", label: "Licensed & Insured" },
    { value: "24/7", label: "Emergency Support" }
  ];

  return (
    <div className="animate-in fade-in duration-700 bg-slate-50 min-h-screen">
      
      {/* Page Header */}
      <div className="bg-slate-900 py-20 border-b-8 border-amber-500">
        <div className="container mx-auto px-4 max-w-[1200px] text-center">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">About Voltex Electrical</h1>
          <p className="text-lg text-slate-300 font-medium max-w-2xl mx-auto">
            Your trusted local electrical contractors. We believe in honest pricing, rigorous safety standards, and doing the job right the first time.
          </p>
        </div>
      </div>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <span className="text-amber-600 font-bold uppercase tracking-wider text-sm block">Our Story</span>
              <h2 className="text-3xl lg:text-4xl font-black text-slate-900 leading-tight">
                Built on a Foundation of Trust and Technical Excellence.
              </h2>
              <div className="space-y-4 text-slate-600 font-medium leading-relaxed">
                <p>
                  Voltex Electrical started with a simple premise: local residents and businesses needed an electrical contractor they could genuinely rely on. No hidden fees, no messy job sites, and no cutting corners.
                </p>
                <p>
                  Over the past 15 years, we have grown from a small two-van operation into a full-service electrical firm handling everything from late-night residential emergencies to complex commercial build-outs. 
                </p>
                <p>
                  Every technician on our team is fully licensed, rigorously trained, and background-checked. When you invite us into your home or business, we treat it with the utmost respect.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-slate-900 rounded-lg transform translate-x-4 translate-y-4"></div>
              <img 
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=1000" 
                alt="Electricians looking at plans" 
                className="relative z-10 w-full h-[450px] object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="bg-amber-500 py-16">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, i) => (
              <div key={i}>
                <div className="text-4xl md:text-5xl font-black text-slate-900 mb-2">{stat.value}</div>
                <div className="text-slate-800 font-bold text-sm uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-slate-900">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-8 rounded-lg border border-slate-200 text-center">
              <ShieldCheck className="w-12 h-12 text-amber-500 mx-auto mb-6" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Safety First</h3>
              <p className="text-slate-600 font-medium">We strictly adhere to all national and local electrical codes. Your family&apos;s safety is our absolute priority.</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-lg border border-slate-200 text-center">
              <Clock className="w-12 h-12 text-amber-500 mx-auto mb-6" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Punctuality</h3>
              <p className="text-slate-600 font-medium">We respect your time. When we schedule an appointment, our technicians arrive on time, every time.</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-lg border border-slate-200 text-center">
              <Users className="w-12 h-12 text-amber-500 mx-auto mb-6" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Transparent Pricing</h3>
              <p className="text-slate-600 font-medium">No surprise bills. We provide upfront, flat-rate pricing before any work begins so you know exactly what to expect.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
