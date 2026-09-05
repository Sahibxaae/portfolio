import React from 'react';
import { ArrowDownRight, Terminal, Sparkles, Send } from 'lucide-react';
import { SystemFlowCanvas } from './SystemFlowCanvas';

interface HeroSectionProps {
  playAudioClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ playAudioClick }) => {
  const scrollToWork = () => {
    playAudioClick();
    document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    playAudioClick();
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="top"
      className="min-h-screen pt-28 pb-16 px-5 md:px-8 max-w-7xl mx-auto flex flex-col justify-between relative overflow-hidden bg-grid"
    >
      {/* Top Telemetry Header */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 pb-8 border-b border-white/10 font-mono-tech text-xs text-white/50">
        <div className="md:col-span-4 flex items-center gap-2 text-white/80">
          <Terminal size={14} className="text-[#00F0FF]" />
          <span>SYS.LOC // BENGALURU, INDIA [12.9716° N]</span>
        </div>
        <div className="md:col-span-5 hidden md:block">
          <span>ROLE // FULL-STACK SOFTWARE DEVELOPER</span>
        </div>
        <div className="md:col-span-3 text-right hidden md:block text-[#00F0FF]">
          <span>MERN • APIS • CLOUD INFRA</span>
        </div>
      </div>

      {/* Main Editorial Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center my-8 lg:my-12">
        {/* Left Headline & Copy */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/[0.04] border border-white/10 w-fit mb-6 font-mono-tech text-xs text-[#00F0FF]">
            <Sparkles size={13} />
            <span>EXPERT IN MERN & CLOUD ARCHITECTURE</span>
          </div>

          {/* Editorial Display Headline */}
          <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.02] tracking-tight uppercase text-white mb-6">
            I BUILD <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-white/40">
              DIGITAL
            </span>{' '}
            <br />
            <span className="text-[#00F0FF] underline decoration-1 underline-offset-8 decoration-[#00F0FF]/30">
              PRODUCTS.
            </span>
          </h1>

          {/* Supporting Copy */}
          <p className="text-lg sm:text-xl text-white/70 font-light max-w-2xl leading-relaxed mb-10 border-l-2 border-[#00F0FF] pl-4">
            Full-Stack Software Developer specializing in MERN, modern frontend architecture, APIs and cloud deployment. Turning ideas into real working software.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 font-mono-tech text-xs">
            <button
              onClick={scrollToWork}
              className="group px-8 py-4 bg-[#00F0FF] text-[#08090C] font-bold tracking-wider hover:bg-white transition-all flex items-center gap-3 cyan-glow-sm cursor-pointer"
            >
              <span>VIEW SELECTED WORK</span>
              <ArrowDownRight
                size={16}
                className="group-hover:translate-x-1 group-hover:translate-y-1 transition-transform"
              />
            </button>

            <button
              onClick={scrollToContact}
              className="px-7 py-4 border border-white/20 hover:border-[#00F0FF] text-white hover:text-[#00F0FF] transition-all flex items-center gap-2 cursor-pointer bg-[#0E0F16]"
            >
              <Send size={14} />
              <span>LET'S TALK</span>
            </button>
          </div>
        </div>

        {/* Right Abstract Living Software Visualization */}
        <div className="lg:col-span-5 w-full">
          <div className="font-mono-tech text-xs text-white/40 mb-2 flex items-center justify-between">
            <span>// ARCHITECTURE_TELEMETRY</span>
            <span>INTERACTIVE NODE GRAPH</span>
          </div>
          <SystemFlowCanvas />
        </div>
      </div>

      {/* Footer / Scroll Prompt */}
      <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-between text-xs font-mono-tech text-white/40 gap-4">
        <div className="flex items-center gap-3">
          <span className="inline-block w-2 h-2 rounded-full bg-[#00F0FF] animate-pulse"></span>
          <span>AVAILABLE FOR FULL-STACK & FRONTEND ROLES</span>
        </div>
        <div className="flex items-center gap-2 cursor-pointer hover:text-white transition-colors" onClick={scrollToWork}>
          <span>SCROLL TO EXPLORE</span>
          <ArrowDownRight size={14} className="text-[#00F0FF] animate-bounce" />
        </div>
      </div>
    </section>
  );
};
