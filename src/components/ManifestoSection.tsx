import React from 'react';
import { ArrowRight } from 'lucide-react';

export const ManifestoSection: React.FC = () => {
  const steps = [
    { num: '01', title: 'IDEA', desc: 'Transforming vague requirements into clear digital architecture.' },
    { num: '02', title: 'BUILD', desc: 'Crafting clean frontend interfaces with solid MERN backends.' },
    { num: '03', title: 'SHIP', desc: 'Deploying reliable cloud services with serverless automation.' },
    { num: '04', title: 'ITERATE', desc: 'Measuring user response & continuously refining performance.' },
  ];

  return (
    <section className="py-24 px-5 md:px-8 max-w-7xl mx-auto border-t border-white/10 relative">
      {/* Background Section Counter */}
      <div className="font-mono-tech text-xs text-[#00F0FF] mb-6 tracking-widest flex items-center gap-2">
        <span>01 // MANIFESTO</span>
        <div className="h-[1px] w-12 bg-[#00F0FF]/40" />
      </div>

      {/* Editorial Headline */}
      <div className="max-w-4xl mb-16">
        <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight mb-6">
          "I like building things that{' '}
          <span className="text-[#00F0FF]">actually have somewhere to go.</span>"
        </h2>
        <p className="text-xl text-white/70 font-light leading-relaxed max-w-3xl">
          I work across the complete digital product stack — seamlessly bridging responsive frontend user experiences with robust backend API services and scalable cloud deployment. Engineering isn't just about syntax; it's about shipping products that perform under real traffic.
        </p>
      </div>

      {/* Typographic Flow Fragments */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-12">
        {steps.map((step, idx) => (
          <div
            key={step.title}
            className="p-6 bg-[#0E0F16] border border-white/10 hover:border-[#00F0FF]/50 transition-all group relative"
          >
            <div className="flex items-center justify-between font-mono-tech text-xs text-white/40 mb-4">
              <span>{step.num}</span>
              {idx < 3 && <ArrowRight size={14} className="text-[#00F0FF] group-hover:translate-x-1 transition-transform" />}
            </div>
            <div className="font-display font-bold text-2xl text-white group-hover:text-[#00F0FF] transition-colors mb-2">
              {step.title}
            </div>
            <p className="font-mono-tech text-xs text-white/60 leading-relaxed">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
