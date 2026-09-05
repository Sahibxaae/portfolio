import React, { useState, useEffect, useRef } from 'react';
import { Terminal, Database, Cloud, Layers, Cpu, CheckCircle2, Zap } from 'lucide-react';

interface SystemNode {
  id: string;
  step: string;
  name: string;
  subtext: string;
  tech: string;
  metrics: string;
  icon: React.ReactNode;
  x: number;
  y: number;
}

export const SystemFlowCanvas: React.FC = () => {
  const [activeNode, setActiveNode] = useState<string>('api');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const [pulsePos, setPulsePos] = useState<number>(0);

  const nodes: SystemNode[] = [
    {
      id: 'idea',
      step: '01',
      name: 'IDEA',
      subtext: 'Product Design & Architecture',
      tech: 'Figma • Specs • Specs & UX',
      metrics: 'STATUS: VALIDATED',
      icon: <Zap size={14} className="text-[#00F0FF]" />,
      x: 12,
      y: 20,
    },
    {
      id: 'interface',
      step: '02',
      name: 'INTERFACE',
      subtext: 'Client Frontend Layer',
      tech: 'React 19 • Tailwind • Vite',
      metrics: 'FPS: 60 • BUNDLE: 42KB',
      icon: <Layers size={14} className="text-[#00F0FF]" />,
      x: 38,
      y: 20,
    },
    {
      id: 'application',
      step: '03',
      name: 'APPLICATION',
      subtext: 'Core Business Logic',
      tech: 'Node.js • Express • Async Router',
      metrics: 'CPU: 1.2% • MEM: 34MB',
      icon: <Cpu size={14} className="text-[#00F0FF]" />,
      x: 64,
      y: 20,
    },
    {
      id: 'api',
      step: '04',
      name: 'API',
      subtext: 'REST Services & Auth',
      tech: 'JWT • CORS • Rate Limiter',
      metrics: 'REQ: 2,420/s • 14ms',
      icon: <Terminal size={14} className="text-[#00F0FF]" />,
      x: 88,
      y: 35,
    },
    {
      id: 'database',
      step: '05',
      name: 'DATABASE',
      subtext: 'Persistence & Aggregation',
      tech: 'MongoDB • Mongoose Schemas',
      metrics: 'INDEX: OPTIMIZED',
      icon: <Database size={14} className="text-[#00F0FF]" />,
      x: 64,
      y: 75,
    },
    {
      id: 'cloud',
      step: '06',
      name: 'CLOUD',
      subtext: 'Serverless Infrastructure',
      tech: 'Google Cloud • Cloud Run',
      metrics: 'INSTANCES: AUTO-SCALE',
      icon: <Cloud size={14} className="text-[#00F0FF]" />,
      x: 38,
      y: 75,
    },
    {
      id: 'production',
      step: '07',
      name: 'PRODUCTION',
      subtext: 'Live User Traffic',
      tech: 'Global CDN • SSL • 99.9% Uptime',
      metrics: 'HEALTH: 100% OPERATIONAL',
      icon: <CheckCircle2 size={14} className="text-[#00F0FF]" />,
      x: 12,
      y: 75,
    },
  ];

  // Animate pulse loop
  useEffect(() => {
    const interval = setInterval(() => {
      setPulsePos((prev) => (prev + 1) % 100);
    }, 40);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const selected = nodes.find((n) => n.id === activeNode) || nodes[3];

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full h-[460px] sm:h-[520px] rounded-none border border-white/10 bg-[#0A0B10] overflow-hidden p-4 sm:p-6 group select-none shadow-2xl"
      style={{
        transform: `perspective(1000px) rotateY(${mousePos.x * 4}deg) rotateX(${-mousePos.y * 4}deg)`,
        transition: 'transform 0.15s ease-out',
      }}
    >
      {/* Background fine grid overlay */}
      <div className="absolute inset-0 bg-grid-fine opacity-60 pointer-events-none" />

      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#00F0FF]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Top telemetry bar */}
      <div className="flex items-center justify-between font-mono-tech text-[10px] text-white/40 pb-3 border-b border-white/10 mb-4 z-10 relative">
        <div className="flex items-center gap-2">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#00F0FF] animate-pulse"></span>
          <span>SYS.FLOW // ARCHITECTURE_VISUALIZER_v2.6</span>
        </div>
        <div className="hidden sm:block text-[#00F0FF]">STATE: ACTIVE_TELEMETRY</div>
      </div>

      {/* Connection path SVG */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <defs>
          <linearGradient id="cyanLine" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00F0FF" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#00F0FF" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#00F0FF" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {/* Top row connections */}
        <line x1="20%" y1="28%" x2="40%" y2="28%" stroke="rgba(255,255,255,0.12)" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="48%" y1="28%" x2="66%" y2="28%" stroke="rgba(255,255,255,0.12)" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="74%" y1="28%" x2="88%" y2="40%" stroke="rgba(255,255,255,0.12)" strokeWidth="1" strokeDasharray="3 3" />

        {/* Right side down to bottom */}
        <line x1="88%" y1="48%" x2="74%" y2="78%" stroke="rgba(255,255,255,0.12)" strokeWidth="1" strokeDasharray="3 3" />

        {/* Bottom row connections */}
        <line x1="64%" y1="80%" x2="46%" y2="80%" stroke="rgba(255,255,255,0.12)" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="38%" y1="80%" x2="20%" y2="80%" stroke="rgba(255,255,255,0.12)" strokeWidth="1" strokeDasharray="3 3" />

        {/* Dynamic Data Pulse Line */}
        <circle
          cx={`${15 + (pulsePos * 0.75)}%`}
          cy={pulsePos < 50 ? "28%" : "80%"}
          r="3"
          fill="#00F0FF"
          className="cyan-glow-sm"
        />
      </svg>

      {/* Nodes Render */}
      <div className="relative z-10 grid grid-cols-3 gap-3 sm:gap-4 h-[320px]">
        {nodes.map((node) => {
          const isActive = activeNode === node.id;
          return (
            <button
              key={node.id}
              onClick={() => setActiveNode(node.id)}
              onMouseEnter={() => setActiveNode(node.id)}
              className={`group text-left p-3 sm:p-3.5 transition-all duration-200 border relative backdrop-blur-sm ${
                isActive
                  ? 'bg-[#121420] border-[#00F0FF] shadow-lg cyan-glow-sm scale-[1.02]'
                  : 'bg-[#0E0F16]/90 border-white/10 hover:border-white/30 hover:bg-[#121420]/80'
              }`}
            >
              {/* Active corner ticks */}
              {isActive && (
                <>
                  <div className="absolute top-0 left-0 w-1.5 h-1.5 bg-[#00F0FF]" />
                  <div className="absolute bottom-0 right-0 w-1.5 h-1.5 bg-[#00F0FF]" />
                </>
              )}

              <div className="flex items-center justify-between font-mono-tech text-[10px] mb-1.5">
                <span className={isActive ? 'text-[#00F0FF] font-bold' : 'text-white/40'}>
                  SYS_0{node.step}
                </span>
                {node.icon}
              </div>

              <div className="font-display font-bold text-xs sm:text-sm tracking-wide text-white group-hover:text-[#00F0FF] transition-colors">
                {node.name}
              </div>
              <div className="font-mono-tech text-[10px] text-white/50 truncate mt-0.5">
                {node.subtext}
              </div>
            </button>
          );
        })}
      </div>

      {/* Bottom Telemetry Detail Drawer */}
      <div className="absolute bottom-3 left-4 right-4 bg-[#0E0F16]/95 border border-[#00F0FF]/30 p-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 z-20 font-mono-tech text-xs backdrop-blur-md">
        <div className="flex items-center gap-3">
          <span className="px-1.5 py-0.5 bg-[#00F0FF]/10 text-[#00F0FF] border border-[#00F0FF]/30 text-[10px] font-bold">
            INSPECTING: {selected.name}
          </span>
          <span className="text-white/70 font-semibold">{selected.tech}</span>
        </div>
        <div className="text-white/40 text-[11px] flex items-center gap-2">
          <span>{selected.metrics}</span>
          <span className="text-[#00F0FF]">● HTTP 200</span>
        </div>
      </div>
    </div>
  );
};
