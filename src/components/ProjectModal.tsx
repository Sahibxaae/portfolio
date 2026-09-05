import React, { useEffect } from 'react';
import { ExternalLink, ArrowLeft, CheckCircle2, Server } from 'lucide-react';
import type { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  playAudioClick: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  playAudioClick,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10 bg-[#08090C]/90 backdrop-blur-xl animate-fadeIn overflow-y-auto">
      <div className="relative w-full max-w-5xl bg-[#0A0B10] border border-white/15 my-auto shadow-2xl p-6 sm:p-8 md:p-12 overflow-hidden">
        {/* Top Header Bar */}
        <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-8 font-mono-tech text-xs">
          <div className="flex items-center gap-3">
            <span className="px-2 py-0.5 bg-[#00F0FF]/10 text-[#00F0FF] border border-[#00F0FF]/30 font-bold">
              PROJECT {project.number}
            </span>
            <span className="text-white/40 uppercase tracking-widest">{project.category}</span>
          </div>

          <button
            onClick={() => {
              playAudioClick();
              onClose();
            }}
            className="flex items-center gap-2 px-4 py-2 border border-white/20 hover:border-[#00F0FF] text-white/80 hover:text-[#00F0FF] transition-all bg-[#0E0F16]"
          >
            <ArrowLeft size={14} />
            <span>BACK TO WORK</span>
          </button>
        </div>

        {/* Title & Subtitle */}
        <div className="mb-10">
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight uppercase mb-4">
            {project.title}
          </h2>
          <p className="text-xl text-white/70 font-light max-w-3xl leading-relaxed">
            "{project.description}"
          </p>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-y border-white/10 py-8 mb-10 font-mono-tech text-xs">
          <div className="md:col-span-4">
            <span className="text-white/40 block mb-2">// ROLE</span>
            <span className="text-white font-semibold text-sm">{project.role}</span>
          </div>
          <div className="md:col-span-4">
            <span className="text-white/40 block mb-2">// TIMELINE</span>
            <span className="text-white font-semibold text-sm">{project.timeline}</span>
          </div>
          <div className="md:col-span-4">
            <span className="text-white/40 block mb-2">// LIVE TARGET</span>
            {project.websiteUrl ? (
              <a
                href={`https://${project.websiteUrl}`}
                target="_blank"
                rel="noreferrer"
                className="text-[#00F0FF] hover:underline flex items-center gap-1 text-sm font-semibold"
              >
                <span>{project.websiteUrl}</span>
                <ExternalLink size={14} />
              </a>
            ) : (
              <span className="text-white/60 text-sm">INTERNAL DEPLOYMENT</span>
            )}
          </div>
        </div>

        {/* Overview & What I Built */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10">
          <div className="lg:col-span-6">
            <h3 className="font-mono-tech text-xs text-[#00F0FF] uppercase tracking-wider mb-3">
              // OVERVIEW
            </h3>
            <p className="text-white/80 leading-relaxed font-light text-base">
              {project.overview}
            </p>
          </div>

          <div className="lg:col-span-6">
            <h3 className="font-mono-tech text-xs text-[#00F0FF] uppercase tracking-wider mb-3">
              // WHAT I BUILT & IMPLEMENTED
            </h3>
            <ul className="space-y-2.5">
              {project.whatIBuilt.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-white/80">
                  <CheckCircle2 size={16} className="text-[#00F0FF] mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Architecture Flow Diagram */}
        <div className="p-6 bg-[#0E0F16] border border-white/10 mb-10">
          <h3 className="font-mono-tech text-xs text-[#00F0FF] uppercase tracking-wider mb-4 flex items-center gap-2">
            <Server size={14} />
            <span>SYSTEM ARCHITECTURE DIAGRAM</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono-tech text-xs">
            {project.architectureDiagram.map((flow, idx) => (
              <div key={idx} className="p-4 bg-[#0A0B10] border border-white/5 relative">
                <div className="text-white/40 text-[10px] mb-1">FLOW 0{idx + 1}</div>
                <div className="text-white font-bold mb-1">{flow.from}</div>
                <div className="text-[#00F0FF] text-[11px] font-mono-tech my-1">
                  ↓ {flow.protocol}
                </div>
                <div className="text-white/80">{flow.to}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Badges */}
        <div className="mb-10">
          <h3 className="font-mono-tech text-xs text-white/40 uppercase tracking-wider mb-3">
            // TECH STACK USED
          </h3>
          <div className="flex flex-wrap gap-2 font-mono-tech text-xs">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 bg-white/5 border border-white/10 text-white/80"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between border-t border-white/10 pt-6 font-mono-tech text-xs">
          <button
            onClick={() => {
              playAudioClick();
              onClose();
            }}
            className="px-6 py-3 border border-white/20 hover:border-[#00F0FF] text-white hover:text-[#00F0FF] transition-all"
          >
            ← BACK TO ALL WORK
          </button>

          {project.websiteUrl && (
            <a
              href={`https://${project.websiteUrl}`}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 bg-[#00F0FF] text-[#08090C] font-bold hover:bg-white transition-all flex items-center gap-2 cyan-glow-sm"
            >
              <span>VISIT LIVE PLATFORM</span>
              <ExternalLink size={14} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
