"use client";

import React from 'react';
import { Play, Download, Users, Star, ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';

interface PageProps {
  onNavigate: (page: string) => void;
}

export default function Products({ onNavigate }: PageProps) {
  const products = [
    {
      type: 'Online Course',
      title: 'Creator Systems Mastery',
      price: '$297',
      rating: '4.9/5',
      students: '2,400+',
      desc: 'The complete framework for building a content-first business from scratch. 12 modules, 50+ lessons, and a lifetime community access.',
      icon: <Play className="text-emerald-500" />,
      features: ['Lifetime Access', 'Community Discord', 'Resource Templates', 'Certificate']
    },
    {
      type: 'Live Workshop',
      title: 'The Viral Storytelling Clinic',
      price: '$499',
      rating: '5.0/5',
      students: '150 Max',
      desc: 'Join me for a 4-week intensive sprint where we rebuild your content strategy from the ground up. Live Q&A and direct feedback.',
      icon: <Users className="text-emerald-500" />,
      features: ['Live Sessions', 'Direct Feedback', 'Recording Access', 'Worksheets']
    },
    {
      type: 'Digital Template',
      title: 'Email Empire Toolkit',
      price: '$49',
      rating: '4.8/5',
      students: '5,000+',
      desc: 'The exact templates I use to write, segment, and monetize my newsletter of 25k+ subscribers. Just plug and play.',
      icon: <Download className="text-emerald-500" />,
      features: ['30+ Templates', 'Setup Guide', 'Automation Flow', 'One-time Pay']
    }
  ];

  return (
    <div className="pt-32 pb-24">
      {/* Header */}
      <section className="px-6 mb-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 uppercase italic">Digital <span className="text-emerald-600">Products</span> & Tools</h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Practical education designed to help you build faster, learn deeper, and scale your impact. Select the path that fits your current stage.
          </p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="px-6 mb-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {products.map((product, idx) => (
            <div key={idx} className="group bg-white rounded-3xl border-2 border-slate-50 hover:border-emerald-500/20 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/5 flex flex-col overflow-hidden">
              <div className="p-8 pb-4">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-emerald-50 rounded-2xl text-emerald-600">
                    {product.icon}
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-black text-slate-900">{product.price}</div>
                    <div className="flex items-center gap-1 text-amber-400 text-xs justify-end font-bold">
                       <Star size={12} fill="currentColor" /> {product.rating}
                    </div>
                  </div>
                </div>
                <div className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-3">{product.type}</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-emerald-600 transition-colors uppercase italic">{product.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 h-12">
                  {product.desc}
                </p>
              </div>
              
              <div className="px-8 pb-8 flex-grow">
                <div className="space-y-3 mb-8">
                  {product.features.map((f, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-sm text-slate-500 font-medium italic">
                      <CheckCircle2 size={16} className="text-emerald-500" />
                      {f}
                    </div>
                  ))}
                </div>
                <button className="w-full py-4 bg-slate-900 text-white font-bold rounded-2xl hover:bg-emerald-600 transition-colors flex items-center justify-center gap-2 group/btn">
                  Get Instant Access <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>

              <div className="px-8 py-4 bg-slate-50 border-t border-slate-100 text-xs text-slate-400 font-bold flex justify-between uppercase italic">
                <span>{product.students} Learners</span>
                <span>Verified Content</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trust Quote */}
      <section className="bg-emerald-50 py-24 px-6 italic">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center gap-1 text-amber-400 mb-8">
             {[1,2,3,4,5].map(i => <Star key={i} size={24} fill="currentColor" />)}
          </div>
          <h2 className="text-2xl md:text-3xl font-medium text-slate-800 leading-relaxed mb-10">
            "These courses aren't just tutorials; they're high-level blueprints. I saved at least 6 months of trial and error by following the [Core System] framework."
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-full bg-slate-200"></div>
            <div className="text-left">
              <div className="font-bold text-slate-900 uppercase">Sarah Jenkins</div>
              <div className="text-sm text-slate-500 font-medium">Founder of GrowthLab</div>
            </div>
          </div>
        </div>
      </section>

      {/* Bundle CTA */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto bg-slate-900 rounded-[3rem] p-10 md:p-20 relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-64 bg-emerald-500/20 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
          
          <div className="flex flex-col lg:flex-row items-center gap-16 relative z-10">
            <div className="lg:w-2/3">
              <div className="inline-block px-4 py-1.5 bg-emerald-500/20 text-emerald-400 text-sm font-bold uppercase tracking-widest rounded-lg mb-6">
                The Full Stack
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 uppercase italic">Get the <span className="text-emerald-500 underline underline-offset-8 decoration-emerald-500/20">All-Access</span> Bundle</h2>
              <p className="text-xl text-slate-400 leading-relaxed mb-10 max-w-2xl">
                Ready to go all in? Get every course, template, and future update for a fraction of the total cost. Perfect for serious builders.
              </p>
              <div className="flex flex-wrap gap-6 text-white/80 font-medium italic">
                <div className="flex items-center gap-2"><ShieldCheck size={20} className="text-emerald-500" /> Lifetime Updates</div>
                <div className="flex items-center gap-2"><ShieldCheck size={20} className="text-emerald-500" /> Private Portal</div>
                <div className="flex items-center gap-2"><ShieldCheck size={20} className="text-emerald-500" /> Priority Support</div>
              </div>
            </div>
            <div className="lg:w-1/3 w-full">
              <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 text-center">
                <div className="text-slate-400 text-sm font-bold uppercase mb-2 line-through">$845 Value</div>
                <div className="text-5xl font-black text-white mb-8">$497</div>
                <button className="w-full py-4 bg-emerald-600 text-white font-bold rounded-2xl hover:bg-emerald-700 transition-colors shadow-lg">
                  Claim Your Bundle
                </button>
                <p className="mt-4 text-xs text-slate-500 italic">Limited time availability. 30-day money back.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
