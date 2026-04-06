"use client";

import React from 'react';
import { ArrowRight, Star, Users, BookOpen, Zap, CheckCircle } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

const proofNumbers = [
  { value: '8+ Years', label: 'Industry Experience' },
  { value: '500+', label: 'Clients & Students' },
  { value: '50K+', label: 'Newsletter Readers' },
  { value: '$12M+', label: 'Client Revenue Generated' },
];

const offerPreviews = [
  {
    icon: Users,
    title: 'Advisory & Consulting',
    description: 'Strategic guidance for founders, operators, and growing teams navigating critical inflection points.',
    tag: 'High Touch',
  },
  {
    icon: BookOpen,
    title: 'Courses & Cohorts',
    description: 'Structured programs for professionals who want to learn faster and build real skills, not just credentials.',
    tag: 'Self-Paced & Live',
  },
  {
    icon: Zap,
    title: 'Newsletter & Content',
    description: 'Free weekly insights distilled from the front lines. No filler, no hype — just what works.',
    tag: 'Free',
  },
];

export default function Home({ onNavigate }: HomeProps) {
  return (
    <main className="bg-stone-50 text-stone-900">
      {/* Hero */}
      <section className="min-h-screen flex items-center pt-16">
        <div className="max-w-6xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 text-amber-800 text-xs font-semibold uppercase tracking-widest">
              <Star className="w-3 h-3 fill-amber-600 text-amber-600" />
              [Your Niche / Category] Expert
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-stone-900 leading-[1.05] tracking-tight">
              I help [audience] achieve [outcome].
            </h1>
            <p className="text-xl text-stone-500 leading-relaxed max-w-lg">
              A clear, confident second sentence that expands your headline. Keep it under two lines. Make it specific enough to filter the right people in.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                onClick={() => onNavigate('offers')}
                className="px-8 py-4 rounded-full bg-stone-900 text-stone-50 font-semibold hover:bg-amber-700 transition-all flex items-center gap-2 group justify-center"
              >
                See How I Can Help
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => onNavigate('resources')}
                className="px-8 py-4 rounded-full border border-stone-300 text-stone-700 font-semibold hover:border-stone-900 hover:text-stone-900 transition-all justify-center"
              >
                Read the Newsletter
              </button>
            </div>
          </div>

          {/* Photo placeholder */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-stone-200 to-stone-300 flex items-center justify-center text-stone-400 text-sm font-medium overflow-hidden">
              <div className="text-center space-y-2 px-8">
                <div className="w-16 h-16 rounded-full bg-stone-300 mx-auto" />
                <p className="text-xs text-stone-400">Professional photo here</p>
                <p className="text-xs text-stone-400">Recommended: 800×1000px</p>
              </div>
            </div>
            {/* Floating credential card */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg p-4 border border-stone-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-amber-700" />
                </div>
                <div>
                  <p className="text-xs text-stone-500">Featured in</p>
                  <p className="text-sm font-semibold text-stone-900">[Publication / Podcast]</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proof Numbers */}
      <section className="border-y border-stone-200 bg-white">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {proofNumbers.map((item) => (
              <div key={item.label} className="text-center space-y-1">
                <p className="text-3xl lg:text-4xl font-bold text-stone-900">{item.value}</p>
                <p className="text-sm text-stone-500">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offers Preview */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-amber-700">Ways to Work Together</p>
            <h2 className="text-4xl font-bold text-stone-900">How I can help you move faster</h2>
            <p className="text-stone-500 text-lg leading-relaxed">
              There are a few ways we can work together depending on where you are and what you need.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offerPreviews.map((offer) => (
              <div key={offer.title} className="group p-8 rounded-2xl border border-stone-200 hover:border-amber-300 hover:shadow-md transition-all bg-white space-y-4">
                <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center group-hover:bg-amber-200 transition-colors">
                  <offer.icon className="w-6 h-6 text-amber-700" />
                </div>
                <span className="inline-block px-3 py-1 rounded-full bg-stone-100 text-stone-600 text-xs font-semibold">{offer.tag}</span>
                <h3 className="text-xl font-semibold text-stone-900">{offer.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{offer.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <button
              onClick={() => onNavigate('offers')}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-stone-900 text-stone-50 font-semibold hover:bg-amber-700 transition-all group"
            >
              See All Options
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Strip */}
      <section className="py-24 bg-stone-900 text-stone-50">
        <div className="max-w-3xl mx-auto px-6 text-center space-y-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-amber-400">Free Weekly Newsletter</p>
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
            Insights that actually move the needle.
          </h2>
          <p className="text-stone-400 text-lg leading-relaxed">
            Every week, one email with the clearest thinking I can offer on [your topic]. No noise. No sponsors. Just the good stuff.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto pt-2">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-5 py-4 rounded-full bg-stone-800 border border-stone-700 text-stone-200 placeholder-stone-500 outline-none focus:border-amber-500 transition-colors text-sm"
            />
            <button className="px-8 py-4 rounded-full bg-amber-600 text-white font-semibold hover:bg-amber-500 transition-colors whitespace-nowrap">
              Subscribe Free
            </button>
          </div>
          <p className="text-xs text-stone-600">No spam. Unsubscribe any time.</p>
        </div>
      </section>

      {/* Testimonial Teaser */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-amber-700">What People Say</p>
          <blockquote className="text-2xl lg:text-3xl font-medium text-stone-800 leading-relaxed italic">
            "A compelling testimonial that speaks to a specific, measurable outcome or transformation. Keep it honest, specific, and results-focused."
          </blockquote>
          <div className="flex items-center justify-center gap-3">
            <div className="w-10 h-10 rounded-full bg-stone-200" />
            <div className="text-left">
              <p className="text-sm font-semibold text-stone-900">[Client Name]</p>
              <p className="text-xs text-stone-500">[Title, Company]</p>
            </div>
          </div>
          <button
            onClick={() => onNavigate('testimonials')}
            className="inline-flex items-center gap-2 text-amber-700 font-semibold hover:underline text-sm group"
          >
            Read more stories
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </main>
  );
}
