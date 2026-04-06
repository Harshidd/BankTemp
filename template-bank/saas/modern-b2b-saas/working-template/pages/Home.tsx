"use client";

import React from 'react';
import Hero from '../components/Hero';
import LogoMarquee from '../components/LogoMarquee';
import FeatureGrid from '../components/FeatureGrid';
import ValueSection from '../components/ValueSection';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';

export default function Home() {
  return (
    <>
      {/* 1. Impact Hero (Linear-inspired) */}
      <Hero />

      {/* 2. Trust Marquee (Figma-inspired richness) */}
      <LogoMarquee />

      {/* 3. Core Feature Grid (Linear-inspired minimalism) */}
      <FeatureGrid />

      {/* 4. Deep-dive Value Sections (Figma-inspired rich storytelling) */}
      <ValueSection 
        subtitle="Collaborative Engine"
        title="Build. Share. Scale. Together."
        description="A centralized workspace that brings designers, engineers, and product managers into perfect sync. No more siloed communication or outdated design specs."
        highlights={[
          { title: "Real-time Presence", text: "See who's working on what right now. No more 'is this the latest version?' questions." },
          { title: "Contextual Commenting", text: "Place feedback exactly where it matters. Threaded discussions that move with your designs." },
          { title: "Version Control", text: "Total confidence with a permanent history. Roll back any change with a single click." }
        ]}
      />

      <ValueSection 
        reversed
        subtitle="Advanced Performance"
        title="Speed is a feature, not a byproduct."
        description="Everything we do is optimized for velocity. From lightning-fast page loads to instant search that updates as you type, your team will feel the difference."
        highlights={[
          { title: "Instant Indexing", text: "Every change you make is indexed and searchable across your entire organization in 50ms." },
          { title: "Global CDN", text: "Automatic worldwide distribution. Your data is always close to your team, no matter where they are." },
          { title: "Batch Operations", text: "Edit thousands of records at once. Powerful bulk-actions designed for extreme productivity." }
        ]}
      />

      {/* 5. Integration Ecosystem Cluster (B2B SaaS pattern) */}
      <section className="py-24 lg:py-48 bg-black relative overflow-hidden">
         <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/5 via-transparent to-emerald-600/5" />
         <div className="container mx-auto px-4 text-center relative">
            <h2 className="text-3xl lg:text-5xl font-bold tracking-tight mb-8 uppercase tracking-widest">Global Ecosystem</h2>
            <p className="text-lg text-white/40 max-w-2xl mx-auto mb-16 font-medium leading-relaxed">
               We integrate with hundreds of tools so you can keep using what your team loves. 
               Sync your project data with Slack, GitHub, Figma, and Discord out of the box.
            </p>
            
            {/* Integration Grid Simulation */}
            <div className="grid grid-cols-4 md:grid-cols-8 gap-4 lg:gap-8 opacity-40 grayscale group hover:opacity-100 hover:grayscale-0 transition-all duration-700">
               {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16].map(i => (
                 <div key={i} className="aspect-square rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center p-4 hover:bg-white/10 transition-colors">
                    <div className="w-8 h-8 rounded-full bg-white/10" />
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* 6. High-impact Social Proof (Figma-inspired Wall of Love) */}
      <Testimonials />

      {/* 7. Final Conversion Point */}
      <CTA />
    </>
  );
}
