import React, { useState } from 'react';
import { Terminal } from 'lucide-react';
import type { ArchitectureLayer } from '../types';

interface ArchitectureStackProps {
  playAudioClick: () => void;
}

export const architectureLayers: ArchitectureLayer[] = [
  {
    id: 'layer-01',
    number: '01',
    name: 'INTERFACE',
    tools: ['React.js', 'JavaScript (ES6+)', 'Tailwind CSS', 'HTML5 / CSS3', 'React Native'],
    description: 'High-performance, accessible, and art-directed user interfaces engineered with modern React component systems, responsive design tokens, and smooth micro-interactions.',
    codeSnippet: `// Modern React Component Architecture
export const ProductView = ({ data }: Props) => {
  const [state, setState] = useState<ActiveState>('idle');
  return <Layout state={state} grid={data.items} />;
};`,
    metrics: [
      { label: 'RENDER TIME', value: '< 16ms (60 FPS)' },
      { label: 'RESPONSIVE VIEWPORTS', value: '100% COVERAGE' },
    ],
  },
  {
    id: 'layer-02',
    number: '02',
    name: 'APPLICATION',
    tools: ['Node.js', 'Express.js', 'Async Middleware', 'REST Controllers'],
    description: 'Scalable backend application layers managing business domain logic, request validation, authentication middleware, error handling, and asynchronous API controllers.',
    codeSnippet: `// Express Controller Middleware
app.post('/api/v1/broadcast', async (req, res, next) => {
  const payload = await validateStream(req.body);
  const stream = await dispatchCloudJob(payload);
  return res.status(200).json({ status: 'active', stream });
});`,
    metrics: [
      { label: 'THROUGHPUT', value: '2,400 REQ/SEC' },
      { label: 'ERROR RATE', value: '0.001%' },
    ],
  },
  {
    id: 'layer-03',
    number: '03',
    name: 'DATA',
    tools: ['MongoDB', 'Mongoose ODM', 'JSON Schema Validation', 'Aggregation Pipelines'],
    description: 'Document database persistence layers optimized for high-volume read/write operations, indexing strategy, data normalization, and schema validation.',
    codeSnippet: `// Mongo Aggregation Pipeline
const analytics = await StreamModel.aggregate([
  { $match: { status: 'active' } },
  { $group: { _id: '$channel', totalViewers: { $sum: '$viewers' } } }
]);`,
    metrics: [
      { label: 'QUERY SPEED', value: '8ms AVERAGE' },
      { label: 'PERSISTENCE', value: '100% CONSISTENT' },
    ],
  },
  {
    id: 'layer-04',
    number: '04',
    name: 'INFRASTRUCTURE',
    tools: ['Google Cloud Platform (GCP)', 'Cloud Run', 'Serverless Execution', 'Full-Stack Deployment'],
    description: 'Cloud infrastructure utilizing Google Cloud Run serverless containers, automated container build pipelines, SSL routing, and zero-downtime deployments.',
    codeSnippet: `# Cloud Run Service Manifest
apiVersion: serving.knative.dev/v1
kind: Service
metadata:
  name: twinn-live-service
spec:
  template:
    spec:
      containers:
        - image: gcr.io/twinn-live/app:latest`,
    metrics: [
      { label: 'AVAILABILITY', value: '99.9% UPTIME' },
      { label: 'SCALING', value: 'AUTO 0 ➔ 100 INSTANCES' },
    ],
  },
  {
    id: 'layer-05',
    number: '05',
    name: 'WORKFLOW',
    tools: ['REST APIs', 'Rapid Prototyping', 'Prompt Engineering', 'CORS Troubleshooting'],
    description: 'Agile development workflow combining prompt engineering for high-speed prototyping, robust API contract testing, CORS resolution, and cross-team execution.',
    codeSnippet: `// API Response Schema & CORS Rules
const corsOptions = {
  origin: process.env.ALLOWED_CLIENT_URL,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
};`,
    metrics: [
      { label: 'PROTOTYPING VELOCITY', value: 'RAPID SHIP' },
      { label: 'API COMPLIANCE', value: 'STRICT REST' },
    ],
  },
];

export const ArchitectureStack: React.FC<ArchitectureStackProps> = ({ playAudioClick }) => {
  const [selectedLayer, setSelectedLayer] = useState<ArchitectureLayer>(architectureLayers[0]);

  return (
    <section id="architecture" className="py-24 px-5 md:px-8 max-w-7xl mx-auto border-t border-white/10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
        <div>
          <div className="font-mono-tech text-xs text-[#00F0FF] mb-3 tracking-widest flex items-center gap-2">
            <span>03 // ENGINEERING ARCHITECTURE</span>
            <div className="h-[1px] w-12 bg-[#00F0FF]/40" />
          </div>
          <h2 className="font-display font-black text-4xl sm:text-6xl text-white uppercase tracking-tight">
            HOW I BUILD
          </h2>
        </div>
        <p className="text-white/60 font-light text-sm max-w-md mt-4 md:mt-0 font-mono-tech">
          "Software architecture visualized as a 5-layer living system."
        </p>
      </div>

      {/* Main Grid: Left Layers Stack, Right Inspector */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Stack Layers */}
        <div className="lg:col-span-6 space-y-3">
          {architectureLayers.map((layer) => {
            const isSelected = selectedLayer.id === layer.id;
            return (
              <button
                key={layer.id}
                onClick={() => {
                  playAudioClick();
                  setSelectedLayer(layer);
                }}
                className={`w-full text-left p-5 transition-all border relative cursor-pointer ${
                  isSelected
                    ? 'bg-[#121420] border-[#00F0FF] cyan-glow-sm'
                    : 'bg-[#0E0F16] border-white/10 hover:border-white/30 hover:bg-[#121420]/60'
                }`}
              >
                {/* Active indicator bar */}
                {isSelected && (
                  <div className="absolute top-0 left-0 bottom-0 w-1 bg-[#00F0FF]" />
                )}

                <div className="flex items-center justify-between mb-2">
                  <span className={`font-mono-tech text-xs font-bold ${isSelected ? 'text-[#00F0FF]' : 'text-white/40'}`}>
                    LAYER {layer.number}
                  </span>
                  <span className="font-mono-tech text-[11px] text-white/50">
                    {layer.tools.length} TECHNOLOGIES
                  </span>
                </div>

                <div className="font-display font-bold text-xl sm:text-2xl text-white mb-2">
                  {layer.name}
                </div>

                {/* Tools Tags */}
                <div className="flex flex-wrap gap-1.5 font-mono-tech text-[11px]">
                  {layer.tools.map((t) => (
                    <span
                      key={t}
                      className={`px-2 py-0.5 border ${
                        isSelected
                          ? 'border-[#00F0FF]/40 text-[#00F0FF] bg-[#00F0FF]/10'
                          : 'border-white/10 text-white/60'
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Column: Layer Inspector */}
        <div className="lg:col-span-6 bg-[#0E0F16] border border-white/10 p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
          {/* Top Inspector Header */}
          <div>
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6 font-mono-tech text-xs">
              <div className="flex items-center gap-2 text-[#00F0FF]">
                <Terminal size={15} />
                <span>INSPECTING LAYER {selectedLayer.number} // {selectedLayer.name}</span>
              </div>
              <span className="text-white/40">SYSTEM_INSPECTOR</span>
            </div>

            <p className="text-white/80 font-light text-base leading-relaxed mb-6">
              {selectedLayer.description}
            </p>

            {/* Metrics */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {selectedLayer.metrics.map((m, idx) => (
                <div key={idx} className="p-3 bg-[#08090C] border border-white/10 font-mono-tech">
                  <div className="text-[10px] text-white/40">{m.label}</div>
                  <div className="text-sm font-bold text-[#00F0FF] mt-0.5">{m.value}</div>
                </div>
              ))}
            </div>

            {/* Code Snippet Box */}
            {selectedLayer.codeSnippet && (
              <div className="bg-[#050608] border border-white/10 p-4 font-mono-tech text-xs text-white/90 overflow-x-auto relative">
                <div className="text-[10px] text-white/40 mb-2 border-b border-white/5 pb-1">
                  // SAMPLE IMPLEMENTATION SNIPPET
                </div>
                <pre className="text-white/80 text-[11px] leading-relaxed">
                  <code>{selectedLayer.codeSnippet}</code>
                </pre>
              </div>
            )}
          </div>

          <div className="pt-6 border-t border-white/10 mt-6 font-mono-tech text-xs text-white/40 flex items-center justify-between">
            <span>MODULAR ARCHITECTURE SYSTEM</span>
            <span className="text-[#00F0FF]">STATE: VERIFIED</span>
          </div>
        </div>
      </div>
    </section>
  );
};
