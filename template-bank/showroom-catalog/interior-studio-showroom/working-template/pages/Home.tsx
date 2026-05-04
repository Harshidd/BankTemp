"use client";

import React from 'react';
import { ArrowRight } from 'lucide-react';

interface PageProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: PageProps) {
  return (
    <div className="animate-in fade-in duration-1000">
      
      {/* 1. Hero Section */}
      <section className="px-6 mb-24">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className="space-y-8 lg:pr-12">
              <h1 className="text-5xl lg:text-7xl font-light tracking-tight text-stone-900 leading-[1.1]">
                Spaces that <br/> <span className="font-serif italic">inspire</span> living.
              </h1>
              <p className="text-lg text-stone-500 leading-relaxed max-w-md">
                We design and curate premium interior environments. Explore our completed projects, discover our material collections, or visit our showroom to start your journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button 
                  onClick={() => onNavigate('projects')}
                  className="px-8 py-4 bg-stone-900 text-white font-medium text-sm transition-colors hover:bg-stone-800 flex items-center justify-center gap-2"
                >
                  View Projects <ArrowRight className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => onNavigate('contact')}
                  className="px-8 py-4 border border-stone-300 text-stone-900 font-medium text-sm transition-colors hover:border-stone-900"
                >
                  Visit Showroom
                </button>
              </div>
            </div>
            <div className="aspect-[4/5] lg:aspect-[3/4] bg-stone-200 relative overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=2000" 
                alt="Interior Design Hero" 
                className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Featured Projects Preview */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-3xl font-light tracking-tight text-stone-900 mb-4">Featured Work</h2>
              <p className="text-stone-500 max-w-md">A selection of recent residential and commercial interiors designed by our studio.</p>
            </div>
            <button 
              onClick={() => onNavigate('projects')}
              className="text-sm font-medium text-stone-900 flex items-center gap-2 hover:text-stone-500 transition-colors"
            >
              All Projects <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {[
              { title: "Bosphorus Villa", category: "Residential", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1200" },
              { title: "Nisantasi Office", category: "Commercial", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" }
            ].map((project, i) => (
              <div key={i} className="group cursor-pointer" onClick={() => onNavigate('projects')}>
                <div className="aspect-[4/3] mb-6 overflow-hidden bg-stone-100">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-medium text-stone-900">{project.title}</h3>
                  <span className="text-xs uppercase tracking-widest text-stone-500">{project.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Materials / Collections Teaser */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-8">
              <h2 className="text-3xl font-light tracking-tight text-stone-900">
                Materials & <br/> <span className="font-serif italic">Collections</span>
              </h2>
              <p className="text-stone-500 leading-relaxed">
                Our showroom houses an exclusive selection of natural stones, premium woods, and bespoke fabrics. We guide you through the tactile experience of selecting the perfect materials for your space.
              </p>
              <button 
                onClick={() => onNavigate('collections')}
                className="pb-1 border-b border-stone-900 text-sm font-medium hover:text-stone-500 hover:border-stone-500 transition-colors"
              >
                Explore Materials
              </button>
            </div>
            <div className="lg:col-span-7 grid grid-cols-2 gap-4 lg:gap-8">
              <div className="aspect-square bg-stone-200 mt-8 lg:mt-16 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=800" alt="Material" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-square bg-stone-200 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&q=80&w=800" alt="Collection" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Trust / Service Approach */}
      <section className="bg-stone-900 text-stone-100 py-24">
        <div className="container mx-auto px-6 text-center">
          <span className="text-xs uppercase tracking-widest text-stone-500 mb-8 block">Our Approach</span>
          <h2 className="text-3xl lg:text-5xl font-light tracking-tight mb-12 max-w-3xl mx-auto leading-tight">
            From initial concept to turnkey delivery, we handle every detail of the interior architecture process.
          </h2>
          <button 
            onClick={() => onNavigate('services')}
            className="px-8 py-4 bg-white text-stone-900 font-medium text-sm transition-colors hover:bg-stone-200"
          >
            Our Services
          </button>
        </div>
      </section>

    </div>
  );
}
