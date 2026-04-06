"use client";

import React from 'react';
import { Globe, Users, Heart, Shield, ArrowRight, Zap, Target, Layers } from 'lucide-react';

const values = [
  { icon: Target, title: "Extreme Focus", desc: "We eliminate the noise. Every line of code and every pixel is dedicated to speed and structural clarity." },
  { icon: Heart, title: "Human Velocity", desc: "Technology should amplify human intent, not slow it down. Our tools are designed for high-performance humans." },
  { icon: Shield, title: "Absolute Trust", desc: "Data integrity is our baseline. We build for the long-term governance of your most critical assets." },
  { icon: Layers, title: "Structural Depth", desc: "We don't build surfaces. We build core relationship logic that solves the deep fragmentation of modern work." }
];

export default function About() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* About Hero (Story-ready) */}
      <section className="relative pt-32 pb-24 lg:pt-56 lg:pb-48 border-b border-white/5 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-500/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
           <div className="max-w-4xl mx-auto space-y-12 text-center lg:text-left">
              <span className="text-sm font-bold text-blue-400 uppercase tracking-[0.4em] mb-8 block font-mono">Our Narrative</span>
              <h1 className="text-4xl lg:text-8xl font-bold tracking-tight mb-8 leading-[1.05]">Built to solve the <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">fragmentation of clarity.</span></h1>
              <p className="text-xl lg:text-2xl text-white/50 leading-[1.6] max-w-2xl font-medium">The world is scaling faster than our tools can keep up. We started [Product] to build the architectural foundation for the next decade of high-velocity work.</p>
           </div>
        </div>
      </section>

      {/* Philosophy / Values Grid */}
      <section className="py-24 lg:py-48 px-4 relative overflow-hidden">
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
             {values.map((v, i) => (
                <div key={v.title} className="space-y-8 animate-in fade-in slide-in-from-bottom duration-700" style={{ animationDelay: `${i * 150}ms` }}>
                   <div className="w-14 h-14 rounded-[1.25rem] bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 shadow-2xl shadow-blue-500/5">
                      <v.icon className="w-6 h-6" />
                   </div>
                   <h3 className="text-2xl font-bold tracking-tight uppercase leading-none">{v.title}</h3>
                   <p className="text-white/40 leading-relaxed font-medium">{v.desc}</p>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* Strategic Depth / Global Reach */}
      <section className="py-24 lg:py-48 bg-white text-black relative z-10">
         <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-48 items-center max-w-7xl mx-auto">
               <div className="space-y-12">
                  <div className="space-y-6">
                     <h2 className="text-4xl lg:text-7xl font-bold tracking-tighter uppercase leading-[1.1]">Scaling <br/> Without <br/> Compromise.</h2>
                     <p className="text-lg lg:text-xl text-black/50 leading-relaxed font-medium">From our global distributed infrastructure to our local-first data layer, we ensure that as your team expands, your structural clarity only deepens.</p>
                  </div>
                  <div className="flex gap-16 lg:gap-24 opacity-80 pt-12 border-t border-black/5">
                     <div className="space-y-2">
                        <p className="text-4xl lg:text-5xl font-bold tracking-tighter">120M+</p>
                        <p className="text-[10px] font-bold text-black/40 uppercase tracking-widest">Global Relationships</p>
                     </div>
                     <div className="space-y-2">
                        <p className="text-4xl lg:text-5xl font-bold tracking-tighter">99.99%</p>
                        <p className="text-[10px] font-bold text-black/40 uppercase tracking-widest">Core Integrity</p>
                     </div>
                  </div>
               </div>
               
               <div className="relative group">
                  <div className="aspect-[4/5] rounded-[4rem] bg-black/5 border border-black/5 overflow-hidden shadow-3xl transform transition-transform group-hover:scale-105 duration-[2s]">
                     {/* Visual Placeholder for high-performance team/office */}
                     <div className="absolute inset-0 flex items-center justify-center p-12 lg:p-24 grayscale opacity-20 group-hover:opacity-40 transition-opacity">
                        <Globe className="w-full h-full text-black stroke-[0.1]" />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Team Placeholders / Social Proof */}
      <section className="py-24 lg:py-48 px-4 bg-black">
         <div className="container mx-auto max-w-7xl text-center">
            <div className="space-y-8 mb-24">
               <h3 className="text-2xl font-bold uppercase tracking-widest mb-12">Built by builders.</h3>
               <p className="text-lg lg:text-xl text-white/40 leading-relaxed max-w-2xl mx-auto font-medium mb-16">Our team is a global distributed infrastructure of engineers, designers, and high-velocity executors.</p>
               <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-16">
                  {['Product Core', 'Global Infrastructure', 'Design Systems', 'Team Operations'].map(dept => (
                    <div key={dept} className="p-12 rounded-[2.5rem] border border-white/5 bg-white/5 group hover:bg-white/10 transition-colors cursor-default text-center">
                       <p className="text-[10px] font-bold uppercase tracking-widest text-white/30 group-hover:text-white/60 mb-6">{dept}</p>
                       <Users className="w-10 h-10 text-white/10 mx-auto group-hover:text-blue-500/40 transition-colors" />
                    </div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-48 px-4 text-center border-t border-white/5">
         <div className="max-w-4xl mx-auto space-y-12">
            <h2 className="text-4xl lg:text-7xl font-bold tracking-tight mb-8">Ready for the next <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">decade of velocity?</span></h2>
            <button className="px-16 py-6 rounded-full bg-blue-600 text-white font-bold text-sm tracking-widest uppercase shadow-2xl transition-all hover:scale-110 active:scale-95 group">
              Get Started for Free
              <ArrowRight className="w-4 h-4 inline-block ml-4 group-hover:translate-x-1 transition-transform" />
            </button>
         </div>
      </section>
    </div>
  );
}
