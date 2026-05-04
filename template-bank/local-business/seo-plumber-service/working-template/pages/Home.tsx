"use client";

import React from 'react';
import { ArrowRight, Phone, ShieldCheck, Droplets, Wrench, CheckCircle2, Clock, ThumbsUp } from 'lucide-react';

interface PageProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: PageProps) {
  
  const services = [
    { title: "Emergency Repairs", desc: "Burst pipes, severe leaks, and overflowing drains. Available 24/7.", icon: <Clock className="w-8 h-8" /> },
    { title: "Drain Cleaning", desc: "Professional unclogging and deep root removal for clear pipes.", icon: <Droplets className="w-8 h-8" /> },
    { title: "Water Heaters", desc: "Repair, replacement, and installation of tankless and standard units.", icon: <Wrench className="w-8 h-8" /> },
    { title: "Leak Detection", desc: "Advanced acoustic and thermal imaging to find hidden leaks fast.", icon: <ShieldCheck className="w-8 h-8" /> }
  ];

  const benefits = [
    "Fully Licensed & Insured Plumbers",
    "Upfront, Transparent Pricing",
    "No Mess Left Behind",
    "Locally Owned & Operated",
    "Emergency Dispatch Ready",
    "Guaranteed Workmanship"
  ];

  return (
    <div className="animate-in fade-in duration-700 bg-slate-50 font-sans text-slate-900 selection:bg-sky-500 selection:text-white">
      
      {/* 1. Hero Section - Trust & Urgency focused */}
      <section className="relative bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&q=80&w=2000" 
            alt="Plumber working" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-sky-900 via-sky-900/80 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 max-w-[1200px] relative z-10 py-24 md:py-32">
          <div className="max-w-2xl space-y-8">
            <div className="inline-flex items-center gap-2 bg-sky-800/80 backdrop-blur-sm border border-sky-700 text-sky-100 px-4 py-2 rounded-full text-sm font-bold tracking-wider">
              <Droplets className="w-4 h-4 fill-sky-100" />
              <span>Rated #1 Local Plumbing Service</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1]">
              Expert Plumbing Solutions You Can Count On.
            </h1>
            
            <p className="text-lg md:text-xl text-sky-100 font-medium leading-relaxed max-w-xl">
              From leaky faucets to major pipe repairs, our certified team is ready. Fast response times, honest pricing, and quality guaranteed.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <a 
                href="tel:+15559876543" 
                className="w-full sm:w-auto bg-sky-500 text-white px-8 py-4 rounded-md font-black text-lg hover:bg-sky-400 transition-colors shadow-lg shadow-sky-500/20 flex items-center justify-center gap-3"
              >
                <Phone className="w-5 h-5" /> Call (555) 987-6543
              </a>
              <button 
                onClick={() => onNavigate('contact')}
                className="w-full sm:w-auto bg-white text-slate-900 px-8 py-4 rounded-md font-bold text-lg hover:bg-slate-100 transition-colors border border-slate-200 flex items-center justify-center gap-2"
              >
                Request Service <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-6 text-sm font-bold text-sky-200">
              <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-sky-400" /> Licensed</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-sky-400" /> Insured</div>
              <div className="flex items-center gap-2"><Clock className="w-5 h-5 text-sky-400" /> 24/7 Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Service Cards Flow */}
      <section className="-mt-16 relative z-20 container mx-auto px-4 max-w-[1200px] mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((srv, i) => (
            <div key={i} className="bg-white rounded-lg shadow-xl shadow-slate-200/50 p-8 border-t-4 border-sky-500 hover:-translate-y-1 transition-transform group cursor-pointer" onClick={() => onNavigate('services')}>
              <div className="text-sky-600 mb-6 bg-sky-50 w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                {srv.icon}
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-3">{srv.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-6 font-medium text-sm">
                {srv.desc}
              </p>
              <span className="text-sky-600 font-bold flex items-center gap-2 group-hover:gap-3 transition-all text-sm uppercase tracking-wider">
                Learn More <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Why Choose Us / Trust Block */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div className="relative">
              <div className="absolute inset-0 bg-sky-600 rounded-lg transform -translate-x-4 translate-y-4"></div>
              <img 
                src="https://images.unsplash.com/photo-1607472586893-edb57cb31328?auto=format&fit=crop&q=80&w=1000" 
                alt="Plumber fixing sink" 
                className="relative z-10 w-full h-[500px] object-cover rounded-lg shadow-lg"
              />
              <div className="absolute top-8 -right-8 bg-white p-6 rounded-lg shadow-xl z-20 max-w-[220px] hidden md:block border border-slate-100">
                <div className="flex items-center gap-4 mb-2">
                  <div className="bg-green-100 p-3 rounded-full"><ThumbsUp className="w-6 h-6 text-green-600" /></div>
                  <div>
                    <p className="text-2xl font-black text-slate-900">4.9/5</p>
                    <p className="font-bold text-xs text-slate-500 uppercase tracking-wider">Average Rating</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <span className="text-sky-600 font-bold uppercase tracking-wider text-sm mb-2 block">Why Choose FlowRight</span>
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight">
                  Done Right The First Time. Guaranteed.
                </h2>
              </div>
              <p className="text-lg text-slate-600 font-medium leading-relaxed">
                Water damage happens fast. You need a team that arrives promptly, diagnoses the issue accurately, and provides a clear, upfront estimate before any work begins.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                {benefits.map((ben, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-sky-500 shrink-0" />
                    <span className="font-bold text-slate-700">{ben}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex gap-4">
                <button 
                  onClick={() => onNavigate('about')}
                  className="bg-slate-100 text-slate-900 border border-slate-200 px-8 py-4 rounded-md font-bold hover:bg-slate-200 transition-colors"
                >
                  Our Story
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Emergency CTA Banner */}
      <section className="bg-sky-600 py-16">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-sky-900 p-8 md:p-12 rounded-2xl shadow-2xl relative overflow-hidden">
            <div className="absolute right-0 top-0 opacity-10 transform translate-x-1/4 -translate-y-1/4">
              <Droplets className="w-96 h-96 text-white" />
            </div>
            <div className="text-center md:text-left relative z-10">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-2">Plumbing Emergency?</h2>
              <p className="text-xl text-sky-200 font-medium max-w-lg">Don&apos;t let a leak ruin your home. Our rapid-response team is on standby.</p>
            </div>
            <div className="relative z-10 shrink-0">
              <a 
                href="tel:+15559876543" 
                className="bg-white text-sky-900 px-10 py-5 rounded-md font-black text-xl hover:bg-sky-50 transition-colors shadow-xl flex items-center justify-center gap-3"
              >
                <Phone className="w-6 h-6 text-sky-600" /> Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
