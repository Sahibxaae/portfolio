import React, { useState } from 'react';
import { ArrowUpRight, Copy, Check, MapPin } from 'lucide-react';

interface ContactFooterProps {
  playAudioClick: () => void;
}

export const ContactFooter: React.FC<ContactFooterProps> = ({ playAudioClick }) => {
  const [copied, setCopied] = useState(false);
  const email = 'mohamedsahib2909@gmail.com';

  const copyEmail = () => {
    playAudioClick();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <footer id="contact" className="py-24 px-5 md:px-8 max-w-7xl mx-auto border-t border-white/10 relative">
      {/* Background Grid Accent */}
      <div className="font-mono-tech text-xs text-[#00F0FF] mb-6 tracking-widest flex items-center gap-2">
        <span>07 // GET IN TOUCH</span>
        <div className="h-[1px] w-12 bg-[#00F0FF]/40" />
      </div>

      {/* Enormous Headline */}
      <div className="mb-16">
        <h2 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-white uppercase leading-tight tracking-tight mb-6">
          HAVE SOMETHING <br />
          <span className="text-[#00F0FF]">WORTH BUILDING?</span>
        </h2>
        <p className="text-xl sm:text-2xl text-white/70 font-light max-w-2xl">
          "Let's turn the idea into something real."
        </p>
      </div>

      {/* Primary Actions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-y border-white/10 py-12 mb-16">
        {/* Email Direct Action */}
        <div className="md:col-span-7">
          <div className="font-mono-tech text-xs text-white/40 mb-2">// DIRECT CONTACT EMAIL</div>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${email}`}
              onClick={() => playAudioClick()}
              className="text-xl sm:text-3xl font-display font-bold text-white hover:text-[#00F0FF] transition-colors break-all"
            >
              {email}
            </a>

            <button
              onClick={copyEmail}
              className="px-4 py-2 bg-white/5 border border-white/20 hover:border-[#00F0FF] text-white/80 hover:text-[#00F0FF] transition-all font-mono-tech text-xs flex items-center gap-2"
            >
              {copied ? <Check size={14} className="text-[#00F0FF]" /> : <Copy size={14} />}
              <span>{copied ? 'COPIED TO CLIPBOARD' : 'COPY EMAIL'}</span>
            </button>
          </div>
        </div>

        {/* Location & Status */}
        <div className="md:col-span-5 flex flex-col justify-between font-mono-tech text-xs">
          <div>
            <span className="text-white/40 block mb-1">// LOCATION</span>
            <span className="text-white text-base font-semibold flex items-center gap-2">
              <MapPin size={15} className="text-[#00F0FF]" />
              Bengaluru, India
            </span>
          </div>

          <div className="mt-6 md:mt-0">
            <span className="text-white/40 block mb-1">// SOCIAL PLATFORMS</span>
            <div className="flex items-center gap-4 text-sm font-semibold">
              <a
                href="https://github.com/Sahibxaae"
                target="_blank"
                rel="noreferrer"
                onClick={() => playAudioClick()}
                className="text-white/80 hover:text-[#00F0FF] transition-colors flex items-center gap-1.5"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                <span>GitHub</span>
                <ArrowUpRight size={12} />
              </a>

              <a
                href="https://linkedin.com/in/mohamedsahiba"
                target="_blank"
                rel="noreferrer"
                onClick={() => playAudioClick()}
                className="text-white/80 hover:text-[#00F0FF] transition-colors flex items-center gap-1.5"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                <span>LinkedIn</span>
                <ArrowUpRight size={12} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Minimal Signature Footer */}
      <div className="flex flex-col sm:flex-row items-center justify-between font-mono-tech text-xs text-white/40 gap-4 pt-4">
        <div>
          <span className="text-white font-bold">MOHAMED SAHIB A</span>
          <span className="mx-2">•</span>
          <span>FULL-STACK SOFTWARE DEVELOPER</span>
        </div>

        <div className="text-center sm:text-right text-[#00F0FF]">
          "DESIGNED, BUILT & SHIPPED WITH CURIOSITY."
        </div>
      </div>
    </footer>
  );
};
