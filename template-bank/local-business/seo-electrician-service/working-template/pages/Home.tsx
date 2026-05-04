"use client";

import React from 'react';
import { ArrowRight, Phone, ShieldCheck, Zap, Clock, Wrench, CheckCircle2 } from 'lucide-react';

interface PageProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: PageProps) {
  
  const services = [
    { title: "Residential Electrical", desc: "Home wiring, lighting installations, panel upgrades, and safety inspections.", icon: <Wrench className="w-8 h-8" /> },
    { title: "Commercial Services", desc: "Office fit-outs, heavy machinery wiring, maintenance contracts, and code compliance.", icon: <ShieldCheck className="w-8 h-8" /> },
    { title: "Emergency Repairs", desc: "24/7 rapid response for power outages, sparking outlets, and urgent faults.", icon: <Zap className="w-8 h-8" /> }
  ];

  const benefits = [
    "Licensed & Fully Insured",
    "Upfront Flat-Rate Pricing",
    "Same-Day Service Available",
    "100% Satisfaction Guarantee",
    "Clean & Respectful Technicians",
    "Local City Area Experts"
  ];

  return (
    <div className="animate-in fade-in duration-700 bg-slate-50 font-sans text-slate-900 selection:bg-amber-500 selection:text-slate-900">
      
      {/* 1. Hero Section - Conversion focused */}
      <section className="relative bg-slate-900 pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80&w=2000" 
            alt="Electrician Working" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 max-w-[1200px] relative z-10">
          <div className="max-w-2xl space-y-8">
            <div className="inline-flex items-center gap-2 bg-slate-800/80 backdrop-blur-sm border border-slate-700 text-amber-500 px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider">
              <Zap className="w-4 h-4 fill-amber-500" />
              <span>Top-Rated Local Electricians</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
              Fast, Reliable Electrical Services You Can <span className="text-amber-500 underline decoration-4 underline-offset-8">Trust.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 font-medium leading-relaxed max-w-xl">
              From minor home repairs to full commercial installations. We provide 24/7 emergency service with upfront pricing.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <button 
                onClick={() => onNavigate('contact')}
                className="w-full sm:w-auto bg-amber-500 text-slate-900 px-8 py-4 rounded-md font-black text-lg hover:bg-amber-400 transition-colors shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2"
              >
                Request a Free Quote <ArrowRight className="w-5 h-5" />
              </button>
              <a 
                href="tel:555-0199" 
                className="w-full sm:w-auto bg-slate-800 text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-slate-700 transition-colors border border-slate-700 flex items-center justify-center gap-3"
              >
                <Phone className="w-5 h-5 text-amber-500" /> 555-0199
              </a>
            </div>

            <div className="flex items-center gap-6 pt-6 text-sm font-bold text-slate-300">
              <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-amber-500" /> Licensed</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-amber-500" /> Insured</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-amber-500" /> 24/7</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Service Cards Overlap */}
      <section className="-mt-16 relative z-20 container mx-auto px-4 max-w-[1200px] mb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((srv, i) => (
            <div key={i} className="bg-white rounded-lg shadow-xl shadow-slate-200/50 p-8 border-t-4 border-amber-500 hover:-translate-y-1 transition-transform group cursor-pointer" onClick={() => onNavigate('services')}>
              <div className="text-amber-500 mb-6 bg-amber-50 w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                {srv.icon}
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-3">{srv.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-6 font-medium">
                {srv.desc}
              </p>
              <span className="text-amber-600 font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Why Choose Us / Trust Block */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div className="relative">
              <div className="absolute inset-0 bg-amber-500 rounded-lg transform translate-x-4 translate-y-4"></div>
              <img 
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=1000" 
                alt="Electrician inspecting panel" 
                className="relative z-10 w-full h-[500px] object-cover rounded-lg shadow-lg"
              />
              {/* Trust Badge Floating */}
              <div className="absolute -bottom-6 -left-6 bg-slate-900 text-white p-6 rounded-lg shadow-xl z-20 max-w-[200px] hidden md:block">
                <p className="text-4xl font-black text-amber-500 mb-1">15+</p>
                <p className="font-bold text-sm leading-tight">Years of Local Experience</p>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <span className="text-amber-600 font-bold uppercase tracking-wider text-sm mb-2 block">Why Choose Voltex</span>
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight">
                  We Never Compromise on Safety or Quality.
                </h2>
              </div>
              <p className="text-lg text-slate-600 font-medium leading-relaxed">
                Electrical issues can be dangerous. That&apos;s why our certified team prioritizes rapid response times, clear communication, and code-compliant repairs done right the first time.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                {benefits.map((ben, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-amber-500 shrink-0" />
                    <span className="font-bold text-slate-700">{ben}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <button 
                  onClick={() => onNavigate('about')}
                  className="bg-slate-100 text-slate-900 border border-slate-200 px-6 py-3 rounded-md font-bold hover:bg-slate-200 transition-colors"
                >
                  More About Us
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. CTA Strip */}
      <section className="bg-amber-500 py-16">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-black text-slate-900 mb-2">Need an Electrician Right Away?</h2>
              <p className="text-lg text-slate-800 font-medium">Our dispatchers are ready 24/7 to send help your way.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="tel:555-0199" 
                className="bg-slate-900 text-white px-8 py-4 rounded-md font-black text-lg hover:bg-slate-800 transition-colors shadow-lg flex items-center justify-center gap-3"
              >
                <Phone className="w-5 h-5 text-amber-500" /> Call 555-0199
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
