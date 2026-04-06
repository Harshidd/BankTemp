"use client";

import React from 'react';
import { CheckCircle2, ArrowRight, Zap, ShieldCheck, Globe, Users, Star, Layout, Database } from 'lucide-react';

interface PricingProps {
  onNavigate: (page: string) => void;
}

export default function Pricing({ onNavigate }: PricingProps) {
  const plans = [
    {
      name: 'Free Starter',
      price: '$0',
      period: 'forever',
      description: 'Ideal for individual teachers starting their digital classroom journey.',
      features: ['Up to 50 active students', 'Standard classroom tools', 'Basic progress reporting', 'Manual student enrollment', 'Email support access'],
      cta: 'Get Started Free',
      highlight: false,
      color: 'border-slate-100 bg-white'
    },
    {
      name: 'Premium Educator',
      price: '$12',
      period: 'per month',
      description: 'Advanced features for teachers who need deep data and automation.',
      features: ['Unlimited students', 'Advanced analytics suite', 'Automated grading protocols', 'Parent communication hub', 'Priority support response'],
      cta: 'Start Premium Demo',
      highlight: true,
      color: 'border-blue-600 bg-blue-50/10'
    },
    {
      name: 'Institutional',
      price: 'Custom',
      period: 'annual quote',
      description: 'Full-scale solution for whole schools, districts, and networks.',
      features: ['Multi-school management', 'District-level reporting', 'LMS/SIS deep integrations', 'Staff professional dev hub', 'Dedicated success partner'],
      cta: 'Request Multi-School Demo',
      highlight: false,
      color: 'border-slate-900 bg-slate-950 text-white'
    }
  ];

  return (
    <div className="flex flex-col bg-white">
      {/* 1. Pricing Context Hero */}
      <section className="py-24 lg:py-48 bg-slate-50 border-b border-slate-100 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 text-center space-y-12">
          <div className="space-y-6">
             <h4 className="text-[10px] font-black text-blue-600 uppercase tracking-[0.5em] font-mono">Resource Allocation 06</h4>
             <h1 className="text-5xl lg:text-9xl font-black text-slate-900 tracking-tighter uppercase italic leading-[0.85]">Strategic <br /> <span className="text-blue-600 italic">Plan Tiers</span></h1>
          </div>
          <p className="text-lg lg:text-2xl text-slate-400 font-bold max-w-2xl mx-auto leading-relaxed uppercase tracking-widest italic pt-1 uppercase italic font-black">
            Flexible investment for every level of educational reach. Scaling with your academic mission.
          </p>
        </div>
        <div className="absolute top-0 right-0 p-32 opacity-5 pointer-events-none grayscale">
           <Database className="w-64 h-64" />
        </div>
      </section>

      {/* 2. Plan Grid */}
      <section className="py-32 lg:py-48 mt-[-10vh] relative z-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {plans.map((plan, idx) => (
               <div 
                 key={plan.name}
                 className={cn(
                   "p-12 lg:p-16 rounded-[4rem] border flex flex-col justify-between space-y-12 shadow-3xl transition-all hover:scale-[1.03] duration-700 animate-in fade-in slide-in-from-bottom",
                   plan.color
                 )}
                 style={{ animationDelay: `${idx * 150}ms` }}
               >
                  <div className="space-y-8">
                     <div className="space-y-4">
                        <div className="flex items-center justify-between">
                           <h3 className="text-xl font-black uppercase italic tracking-tighter leading-none pt-1 group uppercase italic font-black italic">{plan.name}</h3>
                           {plan.highlight && <span className="px-3 py-1 rounded-full bg-blue-600 text-white font-black text-[8px] uppercase tracking-widest leading-none pt-0.5 animate-pulse">Optimal System</span>}
                        </div>
                        <div className="flex items-baseline gap-2">
                           <span className="text-5xl lg:text-7xl font-black italic tracking-tighter uppercase italic font-black italic leading-none pt-1">{plan.price}</span>
                           <span className={cn("text-[10px] font-bold uppercase tracking-widest", plan.name === 'Institutional' ? 'text-blue-500' : 'text-slate-400')}>{plan.period}</span>
                        </div>
                        <p className="text-[10px] font-bold uppercase tracking-widest leading-relaxed opacity-60 italic pt-1 uppercase italic font-black italic">{plan.description}</p>
                     </div>

                     <div className="h-px w-full bg-slate-100 opacity-20" />

                     <div className="space-y-5">
                        {plan.features.map(f => (
                          <div key={f} className="flex items-center gap-4 group">
                             <CheckCircle2 className={cn("w-4 h-4 flex-shrink-0 group-hover:scale-125 transition-transform", plan.name === 'Institutional' ? 'text-emerald-500' : 'text-blue-600')} />
                             <span className="text-[11px] font-black uppercase tracking-widest italic pt-1 italic">{f}</span>
                          </div>
                        ))}
                     </div>
                  </div>

                  <button 
                    onClick={() => onNavigate('contact')}
                    className={cn(
                      "w-full py-6 rounded-2xl font-black text-xs tracking-widest uppercase transition-all shadow-xl active:scale-95",
                      plan.name === 'Institutional' ? 'bg-white text-slate-950 hover:bg-blue-600 hover:text-white' : 'bg-slate-950 text-white hover:bg-blue-600'
                    )}
                  >
                     {plan.cta}
                  </button>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 3. Comparison / FAQ Strip */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
           <div className="p-12 lg:p-24 rounded-[5rem] bg-slate-50 border border-slate-100 grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
              <div className="lg:col-span-2 space-y-8">
                 <h2 className="text-3xl lg:text-5xl font-black text-slate-900 tracking-tighter uppercase italic pt-1 group uppercase italic font-black italic leading-none pt-1">Institutional Comparison?</h2>
                 <p className="text-lg text-slate-400 font-bold uppercase tracking-widest italic pt-1 italic font-black">Contact our school-partnership team for a detailed strategic breakdown of each feature and compliance protocol.</p>
              </div>
              <button 
                 onClick={() => onNavigate('contact')}
                 className="px-12 py-6 rounded-3xl bg-white border border-slate-200 text-slate-900 font-black text-xs tracking-widest uppercase hover:bg-slate-950 hover:border-slate-950 hover:text-white transition-all shadow-sm"
              >
                 Request Comparison Matrix
              </button>
           </div>
        </div>
      </section>

      {/* 4. Strategic Integration Logos */}
      <section className="py-32 bg-white text-center">
        <div className="container mx-auto px-6 space-y-16">
           <h4 className="text-[10px] font-black text-slate-300 uppercase tracking-[0.5em] font-mono">Compliant Foundations</h4>
           <div className="flex flex-wrap items-center justify-center gap-16 lg:gap-32 grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-1000">
              {['GLOBAL DATA ACT', 'SCHOOL SECURE', 'FEDERATED IDS', 'LMS SYNC PROTOCOL'].map(logo => (
                 <span key={logo} className="text-xs font-black tracking-[0.3em] uppercase italic pt-1 italic font-black">{logo}</span>
              ))}
           </div>
        </div>
      </section>
    </div>
  );
}

const cn = (...classes: any[]) => classes.filter(Boolean).join(' ');
