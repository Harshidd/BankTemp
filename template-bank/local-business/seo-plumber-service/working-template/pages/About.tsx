"use client";

import React from 'react';
import { CheckCircle2, ShieldCheck, Clock, Users, Wrench } from 'lucide-react';

interface PageProps {
  onNavigate: (page: string) => void;
}

export default function About({ onNavigate }: PageProps) {
  const stats = [
    { value: "20+", label: "Years Experience" },
    { value: "10k+", label: "Leaks Fixed" },
    { value: "100%", label: "Licensed & Insured" },
    { value: "24/7", label: "Emergency Response" }
  ];

  return (
    <div className="animate-in fade-in duration-700 bg-slate-50 min-h-screen">
      
      {/* Page Header */}
      <div className="bg-slate-900 py-24 border-b-8 border-sky-600">
        <div className="container mx-auto px-4 max-w-[1200px] text-center">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6">About FlowRight Plumbing</h1>
          <p className="text-lg text-slate-300 font-medium max-w-2xl mx-auto">
            Providing honest, high-quality plumbing services to our local community for over two decades.
          </p>
        </div>
      </div>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <span className="text-sky-600 font-bold uppercase tracking-wider text-sm block">Our Story</span>
              <h2 className="text-3xl lg:text-4xl font-black text-slate-900 leading-tight">
                Quality Workmanship. <br />No Hidden Surprises.
              </h2>
              <div className="space-y-4 text-slate-600 font-medium leading-relaxed">
                <p>
                  FlowRight Plumbing was founded on a simple principle: treat the customer&apos;s home with the same respect as our own. We grew tired of the industry standard of hidden fees, late arrivals, and messy job sites.
                </p>
                <p>
                  For over 20 years, we have built our reputation on transparency. When you call FlowRight, you get a fully licensed, background-checked professional who will diagnose the issue and provide a flat-rate price before any wrench is turned.
                </p>
                <p>
                  Whether it&apos;s a middle-of-the-night pipe burst or a scheduled water heater installation, we are committed to solving your plumbing problems quickly and correctly.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-slate-900 rounded-xl transform translate-x-4 translate-y-4"></div>
              <img 
                src="https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&q=80&w=1000" 
                alt="Plumbing Team" 
                className="relative z-10 w-full h-[500px] object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="bg-sky-600 py-16">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, i) => (
              <div key={i}>
                <div className="text-4xl md:text-5xl font-black text-white mb-2">{stat.value}</div>
                <div className="text-sky-100 font-bold text-sm uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-slate-900">Why Customers Trust Us</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-8 rounded-xl border border-slate-200 text-center">
              <ShieldCheck className="w-12 h-12 text-sky-500 mx-auto mb-6" />
              <h3 className="text-xl font-black text-slate-900 mb-3">Licensed & Insured</h3>
              <p className="text-slate-600 font-medium">Every technician carries the proper licensing and full insurance, giving you complete peace of mind.</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-xl border border-slate-200 text-center">
              <Clock className="w-12 h-12 text-sky-500 mx-auto mb-6" />
              <h3 className="text-xl font-black text-slate-900 mb-3">On-Time Arrival</h3>
              <p className="text-slate-600 font-medium">Your time is valuable. We provide narrow appointment windows and call you when we are on the way.</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-xl border border-slate-200 text-center">
              <Wrench className="w-12 h-12 text-sky-500 mx-auto mb-6" />
              <h3 className="text-xl font-black text-slate-900 mb-3">Clean & Respectful</h3>
              <p className="text-slate-600 font-medium">We wear shoe covers, put down drop cloths, and leave your home cleaner than we found it.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
