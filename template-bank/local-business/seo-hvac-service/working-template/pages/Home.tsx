"use client";

import React from 'react';
import { Phone, ShieldCheck, ThermometerSnowflake, Flame, Wrench, CheckCircle2, Wind, Clock, MessageCircle, AlertCircle, Search } from 'lucide-react';

interface PageProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: PageProps) {
  
  const services = [
    { title: "Boiler Repair & Service", desc: "Fast diagnosis, troubleshooting, and part replacements for all boiler models. Same-day mobile response.", icon: <Flame className="w-8 h-8" /> },
    { title: "AC Repair & Tune-Up", desc: "Expert cleaning, refrigerant top-ups, and guaranteed installation for reliable cooling.", icon: <ThermometerSnowflake className="w-8 h-8" /> },
    { title: "Radiator Flushing", desc: "Power flushing for heating systems to remove sludge and restore even heat distribution.", icon: <Wind className="w-8 h-8" /> },
    { title: "Periodic Maintenance", desc: "Extend equipment life and reduce utility bills with precise seasonal inspection.", icon: <Wrench className="w-8 h-8" /> }
  ];

  const benefits = [
    "Same-Day Expert Service",
    "Genuine Replacement Parts",
    "Certified Technicians Only",
    "Honest Upfront Estimates",
    "24/7 Priority Support",
    "On-Site Swift Problem Solving"
  ];

  const faultCodes = [
    { brand: "Model Alpha", code: "Fault E01", desc: "Ignition failure. Check system fuel/gas supply valves." },
    { brand: "Model Beta", code: "Fault F37", desc: "Low water pressure. Refill loop to normal bar level." },
    { brand: "Model Gamma", code: "Fault F04", desc: "Flame loss detected. Reset unit once to restore function." }
  ];

  return (
    <div className="animate-in fade-in duration-700 bg-slate-50 font-sans text-slate-900 selection:bg-orange-500 selection:text-white">
      
      {/* 1. Hero Section - Grounded, Local, Clean, English */}
      <section className="relative bg-white overflow-hidden border-b border-slate-200">
        <div className="container mx-auto px-4 max-w-[1200px] relative z-10 py-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            
            <div className="max-w-2xl space-y-6">
              <div className="inline-flex items-center gap-2 bg-orange-100 border border-orange-200 text-orange-800 px-3.5 py-1.5 rounded text-xs font-bold tracking-wide shadow-sm">
                <Clock className="w-4 h-4 text-orange-600" />
                <span>24/7 Mobile Service Response</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 leading-[1.1] tracking-tight">
                Swift Repair for Damaged <span className="text-orange-600">Boilers & Air Conditioners</span>
              </h1>
              
              <p className="text-base md:text-lg text-slate-600 font-medium leading-relaxed max-w-xl">
                Get warm or stay cool with same-day mobile technician support. Certified repairs, guaranteed workmanship, and honest on-site solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                <a 
                  href="tel:555-0100" 
                  className="w-full sm:w-auto bg-orange-600 text-white px-6 py-3.5 rounded font-black text-base hover:bg-orange-700 transition-colors shadow-md flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" /> Call Now: 555-0100
                </a>
                <a 
                  href="#" 
                  className="w-full sm:w-auto bg-green-500 text-white px-6 py-3.5 rounded font-bold text-base hover:bg-green-600 transition-colors shadow-md flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" /> WhatsApp Message
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2 text-xs font-bold text-slate-500">
                <div className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-green-500" /> Complete Satisfaction</div>
                <div className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-green-500" /> 1-Year Workmanship Warranty</div>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="absolute inset-0 bg-orange-500 rounded-xl transform translate-x-3 translate-y-3 opacity-20"></div>
              <img 
                src="https://images.unsplash.com/photo-1590496794008-383c8070b257?auto=format&fit=crop&q=80&w=1000" 
                alt="HVAC Technician at Work" 
                className="relative z-10 w-full h-[420px] object-cover rounded-xl shadow-lg border border-slate-200"
              />
              <div className="absolute top-6 -left-6 bg-white p-4 rounded shadow-xl z-20 border border-slate-100 flex items-center gap-3">
                <div className="bg-orange-100 p-2 rounded-full animate-pulse"><AlertCircle className="w-6 h-6 text-orange-600" /></div>
                <div>
                  <p className="font-black text-slate-900 text-base">On Call</p>
                  <p className="text-xs font-bold text-slate-500">Fast local coverage</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Main Services Grid */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900">Our Services</h2>
            <p className="text-slate-600 font-medium text-sm md:text-base">Practical, reliable solutions for all heating and cooling setups.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((srv, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-slate-200 hover:border-orange-400 hover:shadow transition-all group cursor-pointer" onClick={() => onNavigate('services')}>
                <div className="text-orange-600 mb-4 bg-orange-50 w-14 h-14 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform">
                  {srv.icon}
                </div>
                <h3 className="text-lg font-black text-slate-900 mb-2">{srv.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-4 font-medium text-xs md:text-sm">
                  {srv.desc}
                </p>
                <span className="text-orange-600 font-bold flex items-center gap-1.5 group-hover:gap-2 transition-all text-xs uppercase tracking-wider">
                  Learn More &rarr;
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="order-2 lg:order-1 space-y-6">
              <div>
                <span className="text-orange-600 font-bold uppercase tracking-wider text-xs mb-1 block border-b-2 border-orange-200 w-fit pb-1">Why Trust Us</span>
                <h2 className="text-2xl md:text-3xl font-black text-slate-900 leading-tight">
                  Accurate Diagnosis, Authentic Components.
                </h2>
              </div>
              <p className="text-base text-slate-600 font-medium leading-relaxed">
                When a heating unit breaks or your air conditioning system fails, you need an on-site expert. We deploy local mobile teams equipped with genuine spare parts to get you running fast.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4">
                {benefits.map((ben, i) => (
                  <div key={i} className="flex items-center gap-2 bg-slate-50 p-2.5 rounded border border-slate-100">
                    <ShieldCheck className="w-4 h-4 text-orange-500 shrink-0" />
                    <span className="font-bold text-slate-700 text-xs">{ben}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <button 
                  onClick={() => onNavigate('contact')}
                  className="bg-slate-900 text-white px-6 py-3.5 rounded font-bold hover:bg-slate-800 transition-colors shadow shadow-slate-900/10 w-full sm:w-auto text-center"
                >
                  Schedule Service Visit
                </button>
              </div>
            </div>

            <div className="order-1 lg:order-2 relative">
              <img 
                src="https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80&w=1000" 
                alt="Field Operations Vehicle" 
                className="w-full h-[320px] object-cover rounded-xl shadow-md border border-slate-200"
              />
            </div>

          </div>
        </div>
      </section>

      {/* 4. Troubleshooting / Fault Codes */}
      <section className="py-16 bg-slate-900 text-slate-300">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="flex flex-col lg:flex-row gap-12 items-start justify-between">
            <div className="lg:w-1/3 space-y-4">
              <h2 className="text-2xl md:text-3xl font-black text-white">Diagnostic Fault Codes</h2>
              <p className="text-slate-400 font-medium leading-relaxed text-sm md:text-base">
                What do those blinking system codes mean on your display? Review troubleshooting tips before requesting technical support to save unnecessary fees.
              </p>
              <button onClick={() => onNavigate('plans')} className="text-orange-500 font-bold flex items-center gap-1 hover:gap-2 transition-all mt-2 border-b border-orange-500 pb-1 w-fit text-sm">
                Check All Fault Codes &rarr;
              </button>
            </div>

            <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {faultCodes.map((code, i) => (
                <div key={i} className="bg-slate-800 p-5 rounded border border-slate-700 hover:border-orange-500 transition-colors">
                  <div className="flex items-center gap-2 mb-3">
                    <Search className="w-4 h-4 text-orange-400" />
                    <span className="font-bold text-white bg-slate-700 px-2 py-0.5 rounded text-xs">{code.code}</span>
                  </div>
                  <h4 className="text-white font-black text-base mb-1">{code.brand}</h4>
                  <p className="text-xs text-slate-400 font-medium leading-normal">{code.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
