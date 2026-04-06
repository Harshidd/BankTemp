"use client";

import React from 'react';
import Hero from '../components/Hero';
import TrustStrip from '../components/TrustStrip';
import ServiceCards from '../components/ServiceCards';
import WhyChooseUs from '../components/WhyChooseUs';
import Process from '../components/Process';
import Reviews from '../components/Reviews';
import LocationSection from '../components/LocationSection';
import { Phone, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <>
      {/* 2. Impact Hero with Lead Entry */}
      <Hero />

      {/* 3. Small trust verification strip */}
      <TrustStrip />

      {/* 4. Service Categories Grid */}
      <ServiceCards />

      {/* 5. Special Offer / Coupons (Optional but high conversion) */}
      <section className="py-24 bg-white border-y border-slate-950/5 relative overflow-hidden text-center group">
         <div className="container mx-auto px-4 max-w-4xl cursor-pointer">
            <div className="p-12 lg:p-24 rounded-[3.5rem] border-4 border-dashed border-blue-600/20 bg-blue-600/5 transition-all hover:bg-blue-600/10 hover:border-blue-600/40 transform hover:scale-105 relative">
               <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-6 py-2 rounded-full border border-blue-600 bg-blue-600 text-white font-bold uppercase tracking-widest text-xs">
                 Limited Time Offer
               </div>
               <h3 className="text-4xl lg:text-7xl font-extrabold tracking-tight text-slate-950 mb-8 leading-[1.05]">
                 $50 OFF <span className="text-blue-600 underline decoration-blue-600/10">Any Service.</span>
               </h3>
               <p className="text-lg text-slate-500 max-w-xl mx-auto mb-12 font-medium leading-relaxed">Mention this online coupon for an immediate discount on your first local service call. Valid for all new customers.</p>
               <button className="px-10 py-5 rounded-2xl bg-slate-950 hover:bg-slate-900 text-white font-bold text-lg shadow-2xl transition-all hover:scale-110 active:scale-95">
                 Claim Offer Now
               </button>
            </div>
         </div>
      </section>

      {/* 6. Why Choose Us (Dark Contrast) */}
      <WhyChooseUs />

      {/* 7. Client Reviews / Success Proof Preview */}
      <Reviews />

      {/* 8. Functional Process flow */}
      <Process />

      {/* 9. Local Service area & Map for SEO Preview */}
      <LocationSection />

      {/* 10. Secondary CTA (FAQ ready) */}
      <section className="py-24 lg:py-48 bg-white relative overflow-hidden underline-offset-8">
         <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto space-y-12">
               <h2 className="text-4xl lg:text-8xl font-extrabold tracking-tight text-slate-950 mb-8 leading-[0.95]">Have more <span className="text-blue-600 italic">questions?</span></h2>
               <p className="text-lg text-slate-500 font-medium max-w-xl mx-auto leading-relaxed">Our local experts are ready to help you coordinate your project exactly how you want. Give us a call today for professional advice.</p>
               
               <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <a href="tel:0000000000" className="px-12 py-5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg shadow-2xl shadow-blue-500/20 transition-all hover:scale-105 animate-pulse flex items-center gap-2">
                    Expert Support: <span className="underline decoration-white/20">(000) 000-0000</span>
                  </a>
                  <button className="px-12 py-5 rounded-2xl border border-slate-950/10 bg-slate-50 hover:bg-white text-slate-950 font-bold text-lg shadow-lg transition-all hover:scale-105">
                    View FAQ
                  </button>
               </div>
            </div>
         </div>
      </section>
    </>
  );
}
