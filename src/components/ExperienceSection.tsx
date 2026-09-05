import React from 'react';
import { Briefcase, CheckCircle2 } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const experiences = [
    {
      company: 'PARKQWIK',
      role: 'Frontend Developer Intern',
      period: 'MAY 2026 — PRESENT',
      location: 'Bengaluru, India',
      highlights: [
        'Built corporate web platform architecture from scratch using React.js, Tailwind CSS, and responsive layout systems.',
        'Engineered responsive parking and EV marketplace showcase interfaces, media hubs, and customer conversion flows.',
        'Collaborated on backend API design, CORS configuration, and asynchronous data fetch integration.',
        'Created cross-platform React Native UI implementations and workflow automation pipelines.',
        'Optimized frontend asset bundles, zero-downtime deployment, and multi-device viewport compatibility.',
      ],
      skills: ['React.js', 'React Native', 'Tailwind CSS', 'Backend API Design', 'UI/UX Design', 'Deployment', 'Workflow Automation'],
    },
  ];

  return (
    <section id="experience" className="py-24 px-5 md:px-8 max-w-7xl mx-auto border-t border-white/10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
        <div>
          <div className="font-mono-tech text-xs text-[#00F0FF] mb-3 tracking-widest flex items-center gap-2">
            <span>05 // PROFESSIONAL EXPERIENCE</span>
            <div className="h-[1px] w-12 bg-[#00F0FF]/40" />
          </div>
          <h2 className="font-display font-black text-4xl sm:text-6xl text-white uppercase tracking-tight">
            EXPERIENCE
          </h2>
        </div>
        <p className="text-white/60 font-light text-sm max-w-md mt-4 md:mt-0 font-mono-tech">
          "Engineering products and shipping responsive software in fast-paced teams."
        </p>
      </div>

      {/* Editorial Timeline */}
      <div className="space-y-12">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="bg-[#0E0F16] border border-white/10 p-6 sm:p-10 relative overflow-hidden group hover:border-[#00F0FF]/50 transition-all"
          >
            {/* Top Row: Period & Location */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start mb-8 border-b border-white/10 pb-6">
              <div className="md:col-span-8">
                <div className="font-mono-tech text-xs text-[#00F0FF] mb-2 flex items-center gap-2">
                  <Briefcase size={14} />
                  <span>{exp.period}</span>
                  <span>•</span>
                  <span>{exp.location}</span>
                </div>
                <h3 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight uppercase group-hover:text-[#00F0FF] transition-colors">
                  {exp.company}
                </h3>
                <div className="text-lg text-white/80 font-light mt-1 font-mono-tech">
                  {exp.role}
                </div>
              </div>

              <div className="md:col-span-4 flex md:justify-end font-mono-tech text-xs text-white/40">
                <span className="px-3 py-1 bg-white/5 border border-white/10">
                  STATUS: ACTIVE ROLE
                </span>
              </div>
            </div>

            {/* Highlights */}
            <div className="mb-8">
              <h4 className="font-mono-tech text-xs text-white/40 uppercase tracking-wider mb-4">
                // KEY CONTRIBUTIONS & IMPACT
              </h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {exp.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-white/80 font-light leading-relaxed">
                    <CheckCircle2 size={16} className="text-[#00F0FF] mt-0.5 shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2 font-mono-tech text-xs pt-4 border-t border-white/10">
              {exp.skills.map((skill) => (
                <span key={skill} className="px-3 py-1 bg-white/5 border border-white/10 text-white/80">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
