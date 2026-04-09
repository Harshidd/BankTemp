"use client";

import React from 'react';
import { MousePointer2, Code2, Briefcase, PencilLine, BarChart, Rocket } from 'lucide-react';

export default function Workflows() {
  const workflows = [
    {
      icon: Code2,
      audience: "Developers",
      scenario: "Reviewing legacy codebases",
      process: [
        "Index entire repository structure",
        "Identify circular dependencies",
        "Refactor using best-practice patterns",
        "Generate documentation automatically"
      ],
      result: "70% faster onboarding for new team members."
    },
    {
      icon: Briefcase,
      audience: "Product Managers",
      scenario: "Triaging customer feedback",
      process: [
        "Aggregate inputs from 5+ channels",
        "Sentiment analysis & urgency tagging",
        "Auto-link to existing roadmap items",
        "Draft response templates"
      ],
      result: "90% reduction in manual data tagging."
    },
    {
      icon: PencilLine,
      audience: "Content Creators",
      scenario: "Repurposing video transcripts",
      process: [
        "Extract key insights from long-form content",
        "Generate 10+ social media hooks",
        "Format for various platforms (𝕏, LinkedIn)",
        "Schedule with smart timing optimization"
      ],
      result: "10x content output with zero extra effort."
    }
  ];

  return (
    <div className="flex flex-col animate-in fade-in duration-700">
      {/* Page Header */}
      <section className="bg-white py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl mb-8">
            Adaptive intelligence <br/>
            for every <span className="text-indigo-600">scenario</span>.
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-500 leading-relaxed">
            One tool, infinite possibilities. See how different professionals are leveraging AIFeature to gain a competitive edge.
          </p>
        </div>
      </section>

      {/* Workflow Grid */}
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {workflows.map((wf, index) => {
              const Icon = wf.icon;
              return (
                <div key={index} className="flex flex-col bg-white rounded-[2.5rem] border border-slate-100 shadow-xl overflow-hidden hover:-translate-y-2 transition-transform duration-300">
                  <div className="p-8 lg:p-10 flex-1">
                    <div className="w-14 h-14 rounded-2xl bg-indigo-600 flex items-center justify-center text-white mb-8 shadow-lg shadow-indigo-100">
                      <Icon className="w-7 h-7" />
                    </div>
                    <div className="space-y-4 mb-8">
                       <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-600">{wf.audience}</span>
                       <h3 className="text-2xl font-black text-slate-900 leading-tight">{wf.scenario}</h3>
                    </div>
                    <div className="space-y-4">
                      {wf.process.map((step, sIndex) => (
                        <div key={sIndex} className="flex gap-3 text-sm text-slate-500">
                          <div className="w-5 h-5 rounded-full border border-slate-100 flex items-center justify-center text-[10px] bg-slate-50 shrink-0 font-bold">
                            {sIndex + 1}
                          </div>
                          <span>{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="p-8 lg:px-10 bg-indigo-50 border-t border-indigo-100">
                    <p className="text-xs font-bold text-indigo-900">
                      <Rocket className="w-3 h-3 inline-block mr-2" />
                      IMPACT: {wf.result}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Custom Use Case Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[3rem] border-2 border-dashed border-slate-200 p-12 lg:p-24 text-center">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-6 italic">"How would I use this for my team?"</h2>
            <p className="mx-auto max-w-lg text-slate-500 mb-12">
              Our system is API-first and highly flexible. Tell us about your specific workflow and we'll design a custom implementation loop for you.
            </p>
            <button className="inline-flex items-center gap-2 font-bold text-slate-900 hover:text-indigo-600 transition-colors uppercase tracking-widest text-xs">
              <MousePointer2 className="w-4 h-4" />
              Request Custom Integration
            </button>
          </div>
        </div>
        {/* Soft background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />
      </section>
    </div>
  );
}
