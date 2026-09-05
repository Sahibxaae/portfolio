import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  soundEnabled: boolean;
  setSoundEnabled: React.Dispatch<React.SetStateAction<boolean>>;
  playAudioClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  soundEnabled,
  setSoundEnabled,
  playAudioClick,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    // Update live IST / UTC clock
    const updateClock = () => {
      const now = new Date();
      const timeStr = now.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Kolkata',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });
      setCurrentTime(`${timeStr} IST`);
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  const navLinks = [
    { label: 'WORK', href: '#work' },
    { label: 'ARCHITECTURE', href: '#architecture' },
    { label: 'PIPELINE', href: '#pipeline' },
    { label: 'EXPERIENCE', href: '#experience' },
    { label: 'ABOUT', href: '#about' },
    { label: 'CONTACT', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    playAudioClick();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3.5 bg-[#08090C]/85 backdrop-blur-md border-b border-white/10 shadow-2xl'
          : 'py-6 bg-transparent border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between">
        {/* Brand Left */}
        <a
          href="#top"
          onClick={() => playAudioClick()}
          className="flex items-center gap-3 group text-left"
        >
          <div className="w-8 h-8 rounded-none border border-white/20 bg-[#0E0F16] flex items-center justify-center group-hover:border-[#00F0FF] transition-colors">
            <span className="font-mono-tech text-xs text-[#00F0FF] font-bold">MS</span>
          </div>
          <div>
            <div className="font-display font-bold text-sm tracking-tight text-white group-hover:text-[#00F0FF] transition-colors flex items-center gap-1.5">
              MOHAMED SAHIB A
              <span className="hidden sm:inline-block text-[10px] font-mono-tech px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-white/50">
                FULL-STACK
              </span>
            </div>
            <div className="text-[10px] font-mono-tech text-white/40 tracking-wider">
              BLR // {currentTime}
            </div>
          </div>
        </a>

        {/* Status indicator (Center Desktop) */}
        <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 font-mono-tech text-[11px] text-white/70">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00F0FF] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00F0FF]"></span>
          </span>
          <span className="tracking-wider">BUILDING & SHIPPING</span>
        </div>

        {/* Navigation Right */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 font-mono-tech text-xs tracking-wider">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="text-white/60 hover:text-[#00F0FF] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#00F0FF] hover:after:w-full after:transition-all"
            >
              {link.label}
            </button>
          ))}

          {/* Sound Toggle Button */}
          <button
            onClick={() => {
              setSoundEnabled(!soundEnabled);
              playAudioClick();
            }}
            title={soundEnabled ? 'Disable Audio Feedback' : 'Enable Audio Feedback'}
            className="p-1.5 text-white/50 hover:text-[#00F0FF] border border-white/10 hover:border-[#00F0FF]/40 rounded transition-colors"
          >
            {soundEnabled ? <Volume2 size={15} /> : <VolumeX size={15} />}
          </button>
        </nav>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={() => {
              setSoundEnabled(!soundEnabled);
              playAudioClick();
            }}
            className="p-1.5 text-white/50 border border-white/10 rounded"
          >
            {soundEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
          </button>
          <button
            onClick={() => {
              playAudioClick();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="p-2 text-white border border-white/20 rounded bg-[#0E0F16]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-[60px] left-0 w-full bg-[#08090C]/95 backdrop-blur-xl border-b border-white/10 py-6 px-6 shadow-2xl animate-slideDown">
          <div className="flex flex-col gap-4 font-mono-tech text-sm">
            <div className="flex items-center gap-2 py-2 border-b border-white/5 text-xs text-[#00F0FF]">
              <span className="h-2 w-2 rounded-full bg-[#00F0FF] animate-pulse"></span>
              ● BUILDING & SHIPPING
            </div>
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-left text-white/80 hover:text-[#00F0FF] py-2 border-b border-white/5 flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ArrowUpRight size={14} className="text-white/30" />
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
