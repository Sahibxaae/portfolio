import React, { useState, useCallback } from 'react';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ManifestoSection } from './components/ManifestoSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ProjectModal } from './components/ProjectModal';
import { ArchitectureStack } from './components/ArchitectureStack';
import { PipelineSection } from './components/PipelineSection';
import { ExperienceSection } from './components/ExperienceSection';
import { AboutEducationSection } from './components/AboutEducationSection';
import { ContactFooter } from './components/ContactFooter';
import type { Project } from './types';

export const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(false);

  // Web Audio Synth for Subtle Technical Click Feedback
  const playAudioClick = useCallback(() => {
    if (!soundEnabled) return;
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(300, ctx.currentTime + 0.04);

      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.04);
    } catch {
      // Audio context fallback
    }
  }, [soundEnabled]);

  return (
    <div className="min-h-screen bg-[#08090C] text-[#F5F5F0] selection:bg-[#00F0FF] selection:text-black relative">
      {/* Subtle Noise Texture Overlay */}
      <div className="noise-overlay" />

      {/* Custom Technical Crosshair Cursor */}
      <CustomCursor />

      {/* Navigation Bar */}
      <Navbar
        soundEnabled={soundEnabled}
        setSoundEnabled={setSoundEnabled}
        playAudioClick={playAudioClick}
      />

      {/* Hero Section */}
      <HeroSection playAudioClick={playAudioClick} />

      {/* Manifesto Section */}
      <ManifestoSection />

      {/* Selected Work Section */}
      <ProjectsSection
        onSelectProject={(project) => setSelectedProject(project)}
        playAudioClick={playAudioClick}
      />

      {/* Interactive Case Study Reader Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        playAudioClick={playAudioClick}
      />

      {/* Architecture Stack Section */}
      <ArchitectureStack playAudioClick={playAudioClick} />

      {/* Deployment Pipeline Section */}
      <PipelineSection />

      {/* Professional Experience Section */}
      <ExperienceSection />

      {/* About & Education Section */}
      <AboutEducationSection />

      {/* Contact & Signature Footer */}
      <ContactFooter playAudioClick={playAudioClick} />
    </div>
  );
};

export default App;
