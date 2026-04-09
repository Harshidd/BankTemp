"use client";

import React from 'react';
import { Check, Info, Sparkles } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: "Individual",
      price: "0",
      description: "For solo builders and productivity enthusiasts.",
      features: [
        "100 AI credits per month",
        "Standard processing speed",
        "Manual data export",
        "Community support"
      ],
      cta: "Start for Free",
      highlighted: false
    },
    {
      name: "Professional",
      price: "19",
      description: "The complete toolkit for high-performance experts.",
      features: [
        "Unlimited AI credits",
        "Priority processing queue",
        "Automated API exports",
        "Direct email support",
        "Advanced custom workflows",
        "Role-based focus modes"
      ],
      cta: "Unlock Pro Power",
      highlighted: true
    },
    {
      name: "Team",
      price: "49",
      description: "Standardize intelligence across your organization.",
      features: [
        "Unlimited team members",
        "Centralized billing hub",
        "Custom SSO integration",
        "Dedicated account manager",
        "SLA & Performance guarantees"
      ],
      cta: "Secure Team Access",
      highlighted: false
    }
  ];

  return (
    <div className="flex flex-col animate-in fade-in duration-700">
      {/* Page Header */}
      <section className="bg-white py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-600 mb-4 block">Pricing & Access</span>
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl mb-8">
            Simple access, <br/>
            powerful <span className="text-indigo-600">results</span>.
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-500 leading-relaxed">
            Choose the level of intelligence that fits your current needs. <br className="hidden md:block" />
            No hidden fees. No complex tiers. Just growth.
          </p>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="py-12 pb-24 lg:py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {plans.map((plan, index) => (
              <div 
                key={index} 
                className={`flex flex-col rounded-[2.5rem] p-10 transition-all duration-300 ${
                  plan.highlighted 
                    ? "bg-slate-900 text-white shadow-2xl shadow-slate-400 scale-105 relative z-10" 
                    : "bg-white text-slate-900 border border-slate-100 shadow-xl"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
                    <Sparkles className="w-3 h-3" />
                    Most Popular
                  </div>
                )}
                <div className="mb-10">
                  <h3 className="text-xl font-bold uppercase tracking-widest mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-black italic tracking-tight">${plan.price}</span>
                    <span className={`text-sm ${plan.highlighted ? "text-slate-400" : "text-slate-500"}`}>/month</span>
                  </div>
                  <p className={`mt-4 text-sm leading-relaxed ${plan.highlighted ? "text-slate-400" : "text-slate-500"}`}>
                    {plan.description}
                  </p>
                </div>

                <div className="flex-1 space-y-4 mb-10">
                  {plan.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center ${plan.highlighted ? "bg-indigo-600" : "bg-indigo-50"}`}>
                         <Check className={`w-3 h-3 ${plan.highlighted ? "text-white" : "text-indigo-600"}`} />
                      </div>
                      <span className="text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <button 
                  className={`w-full rounded-2xl py-4 text-sm font-bold uppercase tracking-widest transition-all ${
                    plan.highlighted 
                      ? "bg-white text-slate-900 hover:bg-slate-100 shadow-xl" 
                      : "bg-slate-50 text-slate-900 border border-slate-200 hover:bg-slate-900 hover:text-white"
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
             <p className="text-sm text-slate-400 flex items-center justify-center gap-2">
               <Info className="w-4 h-4" />
               Custom enterprise enterprise plans available for teams larger than 50.
               <button className="text-indigo-600 font-bold hover:underline ml-1">Contact Sales</button>
             </p>
          </div>
        </div>
      </section>

      {/* Trust Badge Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 border-t border-slate-100 pt-24 text-center">
           <h2 className="text-2xl font-bold text-slate-900 mb-12">Security is our baseline.</h2>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                "SOC-2 Type II Compliant",
                "GDPR & CCPA Ready",
                "256-bit AES Encryption",
                "99.99% Uptime SLA"
              ].map((badge, index) => (
                <div key={index} className="flex flex-col items-center gap-4">
                   <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100">
                      <ShieldAlt className="w-6 h-6 text-slate-300" />
                   </div>
                   <span className="text-xs font-bold uppercase tracking-widest text-slate-400">{badge}</span>
                </div>
              ))}
           </div>
        </div>
      </section>
    </div>
  );
}

function ShieldAlt({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
  );
}
