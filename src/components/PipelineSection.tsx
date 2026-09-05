import React, { useState, useEffect } from 'react';
import { Play, CheckCircle, Terminal } from 'lucide-react';

interface PipelineStage {
  id: string;
  step: string;
  name: string;
  subtext: string;
  log: string;
  duration: string;
}

export const PipelineSection: React.FC = () => {
  const stages: PipelineStage[] = [
    { id: 'code', step: '01', name: 'CODE', subtext: 'Git Commit & Push', log: '[GIT] Commit e4f912a: "feat: update MERN API routes & client build"', duration: '0.2s' },
    { id: 'build', step: '02', name: 'BUILD', subtext: 'TypeScript & Vite Build', log: '[BUILD] Bundling assets... 42 modules compiled clean. 0 errors.', duration: '1.4s' },
    { id: 'api', step: '03', name: 'API', subtext: 'REST Controller & Auth Specs', log: '[API] Validated JWT middleware & CORS header specs.', duration: '0.5s' },
    { id: 'data', step: '04', name: 'DATA', subtext: 'Mongo Index & Schema Validation', log: '[DATA] Connected to MongoDB Atlas cluster. Indexes verified.', duration: '0.8s' },
    { id: 'cloud', step: '05', name: 'CLOUD', subtext: 'GCP Cloud Run Serverless Deploy', log: '[CLOUD] Container built & pushed to Container Registry. Deploying...', duration: '2.1s' },
    { id: 'prod', step: '06', name: 'PRODUCTION', subtext: 'Global CDN SSL & Uptime Health', log: '[PROD] Live target online at https://sahibxaae.github.io/portfolio. SSL Active.', duration: '0.1s' },
  ];

  const [activeStep, setActiveStep] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(true);

  useEffect(() => {
    if (!isRunning) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % stages.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [isRunning, stages.length]);

  return (
    <section id="pipeline" className="py-24 px-5 md:px-8 max-w-7xl mx-auto border-t border-white/10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
        <div>
          <div className="font-mono-tech text-xs text-[#00F0FF] mb-3 tracking-widest flex items-center gap-2">
            <span>04 // DEPLOYMENT PIPELINE</span>
            <div className="h-[1px] w-12 bg-[#00F0FF]/40" />
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white uppercase tracking-tight leading-tight">
            FROM LOCALHOST <br />
            <span className="text-[#00F0FF]">TO PRODUCTION.</span>
          </h2>
        </div>

        <div className="mt-6 md:mt-0 flex items-center gap-4 font-mono-tech text-xs">
          <button
            onClick={() => setIsRunning(!isRunning)}
            className="px-4 py-2 border border-white/20 hover:border-[#00F0FF] text-white/80 hover:text-[#00F0FF] transition-all flex items-center gap-2 bg-[#0E0F16]"
          >
            <Play size={13} className={isRunning ? 'text-[#00F0FF]' : ''} />
            <span>{isRunning ? 'PAUSE PIPELINE' : 'RESUME PIPELINE'}</span>
          </button>
        </div>
      </div>

      {/* Main Pipeline Interface */}
      <div className="bg-[#0E0F16] border border-white/10 p-6 sm:p-10 relative">
        {/* Pipeline Nodes Flow */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
          {stages.map((stg, idx) => {
            const isActive = activeStep === idx;
            const isPassed = activeStep > idx;

            return (
              <button
                key={stg.id}
                onClick={() => {
                  setIsRunning(false);
                  setActiveStep(idx);
                }}
                className={`p-4 text-left border transition-all relative ${
                  isActive
                    ? 'bg-[#121420] border-[#00F0FF] cyan-glow-sm'
                    : isPassed
                    ? 'bg-[#08090C] border-white/20 text-white/80'
                    : 'bg-[#08090C]/60 border-white/5 text-white/40'
                }`}
              >
                {isActive && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-[#00F0FF] animate-pulse" />
                )}

                <div className="flex items-center justify-between font-mono-tech text-[10px] mb-2">
                  <span className={isActive ? 'text-[#00F0FF] font-bold' : ''}>STAGE {stg.step}</span>
                  {isPassed && <CheckCircle size={12} className="text-[#00F0FF]" />}
                </div>

                <div className="font-display font-bold text-base text-white mb-1">
                  {stg.name}
                </div>
                <div className="font-mono-tech text-[10px] text-white/50 truncate">
                  {stg.subtext}
                </div>
              </button>
            );
          })}
        </div>

        {/* Live Terminal Log Console Output */}
        <div className="bg-[#050608] border border-[#00F0FF]/30 p-5 font-mono-tech text-xs">
          <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4 text-white/50 text-[11px]">
            <div className="flex items-center gap-2">
              <Terminal size={14} className="text-[#00F0FF]" />
              <span>CI_CD_DEPLOYMENT_TELEMETRY // STAGE 0{activeStep + 1}</span>
            </div>
            <div className="text-[#00F0FF]">LATENCY: {stages[activeStep].duration}</div>
          </div>

          <div className="space-y-2 text-white/90">
            <div className="text-white/40 text-[11px]">
              $ deploy --target=production --stage={stages[activeStep].id}
            </div>
            <div className="text-[#00F0FF] font-semibold text-sm flex items-start gap-2">
              <span>➔</span>
              <span>{stages[activeStep].log}</span>
            </div>
            <div className="text-white/50 text-[11px] pt-2">
              [STATUS] Stage 0{activeStep + 1} ({stages[activeStep].name}) verified cleanly with 0 exceptions.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
