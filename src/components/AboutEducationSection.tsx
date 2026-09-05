import { GraduationCap } from 'lucide-react';

export const AboutEducationSection: React.FC = () => {
  return (
    <section id="about" className="py-24 px-5 md:px-8 max-w-7xl mx-auto border-t border-white/10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
        <div>
          <div className="font-mono-tech text-xs text-[#00F0FF] mb-3 tracking-widest flex items-center gap-2">
            <span>06 // ABOUT & EDUCATION</span>
            <div className="h-[1px] w-12 bg-[#00F0FF]/40" />
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white uppercase tracking-tight">
            BEHIND THE CODE.
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Human Narrative */}
        <div className="lg:col-span-7 space-y-6 text-white/80 font-light text-lg leading-relaxed">
          <p className="border-l-2 border-[#00F0FF] pl-4 text-white">
            "I believe the best software is built by curiosity — driven by a deep desire to solve real-world problems from the user interface down to serverless cloud infrastructure."
          </p>

          <p className="text-base text-white/70">
            My journey in full-stack development is rooted in building software that actually serves a purpose. Whether engineering e-commerce platforms like Pinky Ponky, constructing corporate marketplaces like ParkQwik from scratch, or configuring serverless GCP pipelines for Twinn.live, I prioritize craft, clarity, and reliability.
          </p>

          <p className="text-base text-white/70">
            Instead of treating code as isolated syntax, I approach every project as a complete product: designing intuitive interfaces, writing maintainable Node.js endpoints, managing Mongo schemas, and ensuring smooth cloud deployments.
          </p>
        </div>

        {/* Right Column: Education Card (Minimal Weight) */}
        <div className="lg:col-span-5 bg-[#0E0F16] border border-white/10 p-6 sm:p-8">
          <div className="font-mono-tech text-xs text-[#00F0FF] mb-4 flex items-center gap-2">
            <GraduationCap size={16} />
            <span>ACADEMIC FOUNDATION</span>
          </div>

          <h3 className="font-display font-bold text-xl text-white mb-2">
            Bachelor of Science in Computer Science
          </h3>
          
          <div className="font-mono-tech text-xs text-white/60 mb-4">
            Sri Ram Nallamani Yadava College of Arts and Science, Tenkasi
          </div>

          <div className="flex items-center justify-between border-t border-white/10 pt-4 font-mono-tech text-xs">
            <span className="text-white/40">DEGREE SCORE</span>
            <span className="text-[#00F0FF] font-bold text-sm">70% MARKS</span>
          </div>
        </div>
      </div>
    </section>
  );
};
