"use client";

import React from 'react';
import { ArrowRight, Award, BookOpen, Briefcase } from 'lucide-react';

interface AboutProps {
  onNavigate: (page: string) => void;
}

const credentials = [
  { icon: Briefcase, label: 'Former [Role] at [Company/Industry]' },
  { icon: BookOpen, label: 'Author of [Book / Framework Name]' },
  { icon: Award, label: 'Featured in [Publication / Podcast]' },
];

const values = [
  {
    title: 'Clarity over complexity',
    description: 'Most problems look complicated because we haven\'t been forced to explain them simply. That\'s where the real work starts.',
  },
  {
    title: 'Honest over impressive',
    description: 'Good advice isn\'t always what someone wants to hear. I\'d rather give you the real picture than tell you what sounds right.',
  },
  {
    title: 'Specific over generic',
    description: 'Generic advice gets generic results. I care about what\'s true for your situation, not what works on average.',
  },
];

export default function About({ onNavigate }: AboutProps) {
  return (
    <main className="bg-stone-50 text-stone-900 pt-16">
      {/* Hero */}
      <section className="py-24 border-b border-stone-200">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-amber-700">About Me</p>
            <h1 className="text-5xl lg:text-6xl font-bold text-stone-900 leading-tight">
              A little bit about how I got here.
            </h1>
            <p className="text-lg text-stone-500 leading-relaxed">
              A grounding sentence about your starting point — honest, direct, and a little unexpected. This is where you establish that you speak from experience, not theory.
            </p>
          </div>
          <div className="aspect-square rounded-3xl bg-gradient-to-br from-stone-200 to-stone-300 flex items-center justify-center">
            <div className="text-center space-y-2">
              <div className="w-20 h-20 rounded-full bg-stone-300 mx-auto" />
              <p className="text-xs text-stone-400">About photo</p>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 space-y-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-amber-700">My Story</p>
          <div className="space-y-6 text-stone-600 leading-relaxed text-lg">
            <p>
              Start with context: where you were before, what you were doing, what problem or gap you kept noticing. Keep it honest — not a hero-journey cliché, but a real description of how you arrived at the work you do now.
            </p>
            <p>
              Second paragraph: the turning point. What changed? What did you do differently? What did you learn that most people miss? This is your proof that you've lived this, not just read about it.
            </p>
            <p>
              Third paragraph: where you are now, what you focus on, what kind of people you love working with. End with a clear sense of your purpose — why this work matters to you specifically.
            </p>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-amber-700">Background & Credentials</p>
              <h2 className="text-4xl font-bold text-stone-900">Where the experience comes from.</h2>
              <p className="text-stone-500 leading-relaxed">
                I've spent the better part of [X] years at the intersection of [domain 1] and [domain 2]. Before this, I [brief previous experience]. That background shapes everything about how I think and work.
              </p>
              <div className="space-y-4 pt-4">
                {credentials.map((c) => (
                  <div key={c.label} className="flex items-center gap-4 p-4 rounded-xl bg-white border border-stone-200">
                    <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center flex-shrink-0">
                      <c.icon className="w-5 h-5 text-amber-700" />
                    </div>
                    <p className="text-sm font-medium text-stone-700">{c.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Values */}
            <div className="space-y-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-amber-700">What I Believe</p>
              <div className="space-y-6">
                {values.map((v) => (
                  <div key={v.title} className="p-6 rounded-2xl border border-stone-200 bg-white space-y-2 hover:border-amber-300 transition-colors">
                    <h3 className="font-semibold text-stone-900">{v.title}</h3>
                    <p className="text-stone-500 text-sm leading-relaxed">{v.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-stone-900 text-stone-50">
        <div className="max-w-3xl mx-auto px-6 text-center space-y-6">
          <h2 className="text-4xl font-bold">Ready to work together?</h2>
          <p className="text-stone-400 text-lg leading-relaxed">
            Whether you're looking for advisory support, structured learning, or just want to read the newsletter — there's a way to get started from wherever you are.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <button
              onClick={() => onNavigate('offers')}
              className="px-8 py-4 rounded-full bg-amber-600 text-white font-semibold hover:bg-amber-500 transition-colors flex items-center gap-2 justify-center group"
            >
              See How We Can Work Together
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-4 rounded-full border border-stone-700 text-stone-300 font-semibold hover:border-stone-400 hover:text-stone-100 transition-colors"
            >
              Just Say Hello
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
