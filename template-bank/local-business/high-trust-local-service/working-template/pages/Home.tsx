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
      <section className="py-16 bg-white border-y border-slate-100 relative overflow-hidden text-center">
         <div className="container mx-auto px-4 max-w-3xl">
            <div className="p-10 lg:p-14 border-2 border-dashed border-blue-600/20 bg-blue-50/40 hover:bg-blue-50/70 transition-colors relative">
               <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-5 py-1.5 border border-blue-600 bg-blue-600 text-white font-semibold uppercase tracking-widest text-[10px]">
                 Limited Time Offer
               </div>
               <h3 className="text-2xl lg:text-4xl font-extrabold tracking-tight text-slate-950 mb-4 leading-[1.1]">
                 $50 OFF <span className="text-blue-600 italic">Any Service.</span>
               </h3>
               <p className="text-sm text-slate-500 max-w-xl mx-auto mb-7 font-medium leading-relaxed">Mention this online coupon for an immediate discount on your first local service call. Valid for all new customers.</p>
               <button className="px-8 py-3.5 bg-slate-950 hover:bg-slate-900 text-white font-semibold text-sm transition-colors">
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
               <h2 className="text-3xl lg:text-5xl font-extrabold tracking-tight text-slate-950 mb-6 leading-[1.1]">Have more <span className="text-blue-600 italic">questions?</span></h2>
               <p className="text-base text-slate-500 font-medium max-w-xl mx-auto leading-relaxed">Our local experts are ready to help you coordinate your project exactly how you want. Give us a call today for professional advice.</p>
               
               <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                  <a href="tel:0000000000" className="px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-colors flex items-center gap-2">
                    Expert Support: <span className="underline decoration-white/30">(000) 000-0000</span>
                  </a>
                  <button className="px-8 py-3.5 border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm transition-colors">
                    View FAQ
                  </button>
               </div>
            </div>
         </div>
      </section>
    </>
  );
}
