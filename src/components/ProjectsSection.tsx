import React, { useState } from 'react';
import { ArrowUpRight, Radio, ShoppingBag, MapPin, Eye, Play, Cloud, Mail, ShieldCheck } from 'lucide-react';
import type { Project } from '../types';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
  playAudioClick: () => void;
}

export const projectsData: Project[] = [
  {
    id: 'parkqwik',
    number: '01',
    title: 'PARKQWIK',
    subtitle: 'CORPORATE WEB PLATFORM',
    category: 'CORPORATE PLATFORM & EV MARKETPLACE',
    transitionTag: '01 / PRODUCT',
    editorialHeadline: 'BUILT FROM SCRATCH.',
    description: 'A corporate web platform engineered from scratch for India\'s No.1 General & EV Parking Marketplace.',
    technologies: ['REACT', 'TAILWIND CSS', 'RESPONSIVE WEB', 'FRONTEND ARCHITECTURE'],
    technicalLayers: [
      { label: 'UI / UX', sublabel: 'Custom Design System' },
      { label: 'FRONTEND', sublabel: 'React Component Hierarchy' },
      { label: 'RESPONSIVE SYSTEM', sublabel: 'Multi-Device Viewports' },
      { label: 'DEPLOYMENT', sublabel: 'Optimized Web Hosting' },
    ],
    overview: 'ParkQwik is India\'s leading EV and general parking marketplace. Mohamed built the main corporate web platform from scratch, establishing a modern design language, responsive layout architecture, feature showcases, media sections, and user conversion flows.',
    whatIBuilt: [
      'Built core corporate website architecture from the ground up using React and Tailwind CSS.',
      'Designed and implemented responsive showcase views for parking reservation features and EV location services.',
      'Integrated media coverage sections, customer testimonials, and interactive location finders.',
      'Ensured high accessibility, cross-browser compatibility, and fast page render metrics.',
    ],
    role: 'Frontend Developer Intern',
    timeline: 'May 2026 — Present',
    architectureDiagram: [
      { from: 'Corporate Visitor', to: 'React Frontend App', protocol: 'Web Client' },
      { from: 'React Core', to: 'State & Feature Engine', protocol: 'Modular Components' },
      { from: 'Feature Engine', to: 'Deployment Pipeline', protocol: 'Vite / CDN' },
    ],
  },
  {
    id: 'parkqwik-gcp',
    number: '02',
    title: 'PARKQWIK GCP & MAIL INFRA',
    subtitle: 'CLOUD INFRASTRUCTURE & MAIL ROUTING',
    category: 'GOOGLE CLOUD PLATFORM & ENTERPRISE MAIL',
    transitionTag: '02 / INFRASTRUCTURE',
    editorialHeadline: 'MANAGED GCP ALONE AS INTERN.',
    description: 'Single-handedly managed ParkQwik\'s entire Google Cloud Platform (GCP) infrastructure, deployed web applications, and configured enterprise mail routing.',
    technologies: ['GOOGLE CLOUD PLATFORM', 'GCP CLOUD RUN', 'GCP CLOUD DNS', 'MAIL ROUTING', 'MX / SPF / DKIM', 'SSL INFRASTRUCTURE'],
    technicalLayers: [
      { label: 'GCP CLOUD RUN', sublabel: 'Serverless App Deployments' },
      { label: 'CLOUD DNS', sublabel: 'Domain & SSL Management' },
      { label: 'MAIL ROUTING', sublabel: 'Enterprise MX / SPF / DKIM' },
      { label: 'GCP IAM & INFRA', sublabel: 'Sole Cloud Administrator' },
    ],
    overview: 'During his internship at ParkQwik, Mohamed single-handedly managed the company\'s entire Google Cloud Platform (GCP) infrastructure. He oversaw website deployments, configured serverless GCP Cloud Run services, managed GCP Cloud DNS, and implemented enterprise mail routing and email security protocols.',
    whatIBuilt: [
      'Single-handedly owned and managed ParkQwik\'s complete Google Cloud Platform (GCP) cloud infrastructure as an intern.',
      'Deployed corporate websites, microservices, and web platforms to GCP Cloud Run and serverless containers.',
      'Engineered enterprise mail routing systems, configuring custom domain MX records, SPF validation, and DKIM signatures for 100% email deliverability.',
      'Managed GCP Cloud DNS zones, SSL certificate automation, custom domain routing, and environment secrets.',
    ],
    role: 'Cloud & Infrastructure Intern',
    timeline: 'May 2026 — Present',
    architectureDiagram: [
      { from: 'Domain DNS / Mail', to: 'GCP Cloud DNS', protocol: 'MX / SPF / DKIM' },
      { from: 'GCP Cloud DNS', to: 'GCP Cloud Run', protocol: 'HTTPS / TLS 1.3' },
      { from: 'GCP Cloud Run', to: 'Live Web Platforms', protocol: 'Serverless Routing' },
    ],
  },
  {
    id: 'twinn',
    number: '03',
    title: 'TWINN.LIVE',
    subtitle: 'AI LIVE COMMERCE PLATFORM',
    category: 'AI LIVE BROADCAST & CLOUD INFRASTRUCTURE',
    transitionTag: '03 / SYSTEM',
    editorialHeadline: 'WHERE SOFTWARE MEETS DISTRIBUTION.',
    description: 'An AI-powered live commerce platform integrating cloud video streaming and automated broadcasting pipelines.',
    technologies: ['VIMEO LIVESTREAMING', 'GOOGLE CLOUD PLATFORM', 'CLOUD RUN', 'SERVERLESS INFRASTRUCTURE'],
    technicalLayers: [
      { label: 'AI AVATAR', sublabel: 'Realtime Broadcast Generation' },
      { label: 'LIVE BROADCAST', sublabel: 'Stream Encoding & Sync' },
      { label: 'VIMEO INFRA', sublabel: 'Multi-Channel Stream Pipe' },
      { label: 'GOOGLE CLOUD', sublabel: 'Serverless Execution' },
    ],
    overview: 'Twinn.live bridges AI avatar technology with live commerce broadcasts. The application processes video streams and distributes multi-channel streams powered by Google Cloud Run serverless backend architecture and Vimeo streaming integrations.',
    whatIBuilt: [
      'Developed frontend interfaces for managing live broadcast streams and AI avatar controls.',
      'Configured Google Cloud Run serverless endpoints for scalable broadcast request handling.',
      'Integrated Vimeo livestreaming APIs for reliable low-latency video distribution.',
      'Designed backend API routes and database schemas for stream schedules and user authorization.',
    ],
    role: 'Full-Stack Engineer',
    timeline: 'Cloud Infrastructure & App Development',
    architectureDiagram: [
      { from: 'AI Broadcast Generator', to: 'Vimeo Live Engine', protocol: 'RTMP / Webhook' },
      { from: 'Vimeo Engine', to: 'GCP Cloud Run', protocol: 'Serverless REST' },
      { from: 'GCP Cloud Run', to: 'Multi-Channel Viewers', protocol: 'HLS Live Stream' },
    ],
  },
  {
    id: 'pinkyponky',
    number: '04',
    title: 'PINKY PONKY',
    subtitle: 'E-COMMERCE / PRODUCT SHOWCASE',
    category: 'E-COMMERCE / PRODUCT SHOWCASE',
    transitionTag: '04 / INTERFACE',
    description: 'A responsive product-showcasing web application engineered for a premium baby and mother care brand.',
    technologies: ['REACT', 'TAILWIND CSS', 'NODE.JS', 'EXPRESS', 'REST API'],
    technicalLayers: [
      { label: 'PRODUCT CATALOG', sublabel: 'React Dynamic Grid' },
      { label: 'INVENTORY DATA', sublabel: 'State Management' },
      { label: 'DYNAMIC CATEGORIES', sublabel: 'Category Router' },
      { label: 'NODE.JS BACKEND', sublabel: 'REST Endpoint' },
    ],
    overview: 'Pinky Ponky needed an elegant, highly performant product catalog web application designed to showcase premium baby and mother care items. The interface emphasizes visual clarity, intuitive navigation, fast image loading, and smooth responsive design.',
    whatIBuilt: [
      'Engineered responsive catalog user interface with custom category filtering and item sorting.',
      'Implemented clean frontend state management for product collections and variant selection.',
      'Designed API integration with Node.js backend to fetch dynamic product inventory and metadata.',
      'Optimized layout performance, asset delivery, and mobile viewport touch targets.',
    ],
    role: 'Full-Stack Developer',
    timeline: 'Product Showcase Deployment',
    architectureDiagram: [
      { from: 'User Client View', to: 'React Component Stack', protocol: 'Props / Hooks' },
      { from: 'React Store', to: 'Node.js Express API', protocol: 'HTTPS / JSON' },
      { from: 'Express Router', to: 'Product Inventory DB', protocol: 'Async Data Fetch' },
    ],
  },
];

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onSelectProject,
  playAudioClick,
}) => {
  const [pinkyActiveCategory, setPinkyActiveCategory] = useState('ALL');
  const [parkqwikExpanded, setParkqwikExpanded] = useState(false);
  const [activeDnsRecord, setActiveDnsRecord] = useState('MX');

  return (
    <section id="work" className="py-24 px-5 md:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-white/10 pb-8">
        <div>
          <div className="font-mono-tech text-xs text-[#00F0FF] mb-3 tracking-widest flex items-center gap-2">
            <span>02 // SELECTED WORK</span>
            <div className="h-[1px] w-12 bg-[#00F0FF]/40" />
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white uppercase tracking-tight">
            SELECTED WORK
          </h2>
        </div>
        <p className="text-white/60 font-light text-base max-w-md mt-4 md:mt-0 font-mono-tech text-xs">
          "Products and cloud systems I've helped turn from ideas into working software."
        </p>
      </div>

      {/* PROJECT 01 — PARKQWIK (CORPORATE WEB PLATFORM) */}
      <div className="mb-32">
        <div className="font-mono-tech text-xs text-[#00F0FF] mb-4">
          // {projectsData[0].transitionTag}
        </div>

        <div className="bg-[#0E0F16] border border-white/10 p-6 sm:p-10 relative overflow-hidden group">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
            <div className="lg:col-span-8">
              <div className="font-mono-tech text-xs text-white/40 mb-2">PROJECT 01</div>
              <div className="flex flex-wrap items-baseline gap-4 mb-2">
                <h3 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-white uppercase tracking-tight group-hover:text-[#00F0FF] transition-colors">
                  PARKQWIK
                </h3>
                <span className="font-display font-bold text-xl sm:text-2xl text-[#00F0FF]">
                  {projectsData[0].editorialHeadline}
                </span>
              </div>
              <p className="text-white/70 text-base font-light mb-6">
                {projectsData[0].description}
              </p>

              <div className="flex flex-wrap gap-2 font-mono-tech text-xs mb-8">
                {projectsData[0].technologies.map((t) => (
                  <span key={t} className="px-2.5 py-1 bg-white/5 border border-white/10 text-white/80">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 flex lg:justify-end">
              <button
                onClick={() => {
                  playAudioClick();
                  onSelectProject(projectsData[0]);
                }}
                className="px-6 py-3 bg-[#00F0FF] text-[#08090C] font-mono-tech text-xs font-bold hover:bg-white transition-all flex items-center gap-2 cyan-glow-sm cursor-pointer"
              >
                <span>EXPLORE CASE STUDY</span>
                <ArrowUpRight size={16} />
              </button>
            </div>
          </div>

          {/* Interactive Frame Expansion Mockup for ParkQwik */}
          <div
            className={`transition-all duration-500 bg-[#08090C] border border-white/10 p-4 sm:p-6 relative ${
              parkqwikExpanded ? 'h-[550px]' : 'h-[360px]'
            }`}
          >
            {/* Window bar */}
            <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4 font-mono-tech text-xs">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                <span className="text-white/40 ml-2 text-[11px]">parkqwik.com</span>
              </div>
              <button
                onClick={() => setParkqwikExpanded(!parkqwikExpanded)}
                className="text-[#00F0FF] hover:underline flex items-center gap-1 text-[11px] font-mono-tech"
              >
                <Eye size={13} />
                <span>{parkqwikExpanded ? 'COLLAPSE FRAME' : 'EXPAND IMMERSIVE VIEW'}</span>
              </button>
            </div>

            {/* Corporate Marketplace Interface Preview */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-full pb-12 overflow-hidden">
              <div className="md:col-span-7 flex flex-col justify-center p-4 bg-[#0E0F16] border border-white/10">
                <div className="inline-flex items-center gap-2 text-xs font-mono-tech text-[#00F0FF] mb-2">
                  <MapPin size={14} />
                  <span>INDIA'S #1 PARKING & EV MARKETPLACE</span>
                </div>
                <h4 className="font-display font-bold text-xl sm:text-2xl text-white mb-3">
                  Find & Reserve Parking Instantly
                </h4>
                <p className="text-white/60 font-light text-xs mb-4">
                  Streamlined digital corporate platform connecting EV owners and commuters with trusted parking spaces across major hubs.
                </p>
                <div className="grid grid-cols-3 gap-2 font-mono-tech text-[10px]">
                  <div className="p-2 bg-white/5 border border-white/10 text-center">
                    <div className="text-[#00F0FF] font-bold text-sm">50K+</div>
                    <div className="text-white/40">SPACES</div>
                  </div>
                  <div className="p-2 bg-white/5 border border-white/10 text-center">
                    <div className="text-[#00F0FF] font-bold text-sm">100+</div>
                    <div className="text-white/40">CITIES</div>
                  </div>
                  <div className="p-2 bg-white/5 border border-white/10 text-center">
                    <div className="text-[#00F0FF] font-bold text-sm">4.9★</div>
                    <div className="text-white/40">RATING</div>
                  </div>
                </div>
              </div>

              <div className="md:col-span-5 bg-[#121422] border border-white/10 p-4 flex flex-col justify-between">
                <div className="font-mono-tech text-xs text-white/50 mb-2">
                  // FRONTEND_SYSTEM_ANNOTATIONS
                </div>
                <div className="space-y-2 font-mono-tech text-xs">
                  <div className="p-2 bg-[#08090C] border border-[#00F0FF]/30 text-[#00F0FF]">
                    ● UI / UX Custom Layout Engine
                  </div>
                  <div className="p-2 bg-[#08090C] border border-white/10 text-white/70">
                    ● Responsive EV Location Search
                  </div>
                  <div className="p-2 bg-[#08090C] border border-white/10 text-white/70">
                    ● Media Mentions & Press Hub
                  </div>
                  <div className="p-2 bg-[#08090C] border border-white/10 text-white/70">
                    ● High-Speed Asset Delivery Pipeline
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PROJECT 02 — PARKQWIK GCP INFRASTRUCTURE & MAIL ROUTING */}
      <div className="mb-32">
        <div className="font-mono-tech text-xs text-[#00F0FF] mb-4">
          // {projectsData[1].transitionTag}
        </div>

        <div className="bg-[#0E0F16] border border-white/10 p-6 sm:p-10 relative overflow-hidden group">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
            <div className="lg:col-span-8">
              <div className="font-mono-tech text-xs text-white/40 mb-2">PROJECT 02</div>
              <div className="flex flex-wrap items-baseline gap-4 mb-2">
                <h3 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-white uppercase tracking-tight group-hover:text-[#00F0FF] transition-colors">
                  PARKQWIK GCP & MAIL INFRA
                </h3>
                <span className="font-display font-bold text-xl sm:text-2xl text-[#00F0FF]">
                  {projectsData[1].editorialHeadline}
                </span>
              </div>
              <p className="text-white/70 text-base font-light mb-6">
                {projectsData[1].description}
              </p>

              <div className="flex flex-wrap gap-2 font-mono-tech text-xs mb-8">
                {projectsData[1].technologies.map((t) => (
                  <span key={t} className="px-2.5 py-1 bg-white/5 border border-white/10 text-white/80">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 flex lg:justify-end">
              <button
                onClick={() => {
                  playAudioClick();
                  onSelectProject(projectsData[1]);
                }}
                className="px-6 py-3 bg-[#00F0FF] text-[#08090C] font-mono-tech text-xs font-bold hover:bg-white transition-all flex items-center gap-2 cyan-glow-sm cursor-pointer"
              >
                <span>EXPLORE CASE STUDY</span>
                <ArrowUpRight size={16} />
              </button>
            </div>
          </div>

          {/* Interactive Technical Mockup for GCP Cloud & Mail Infrastructure */}
          <div className="bg-[#050608] border border-[#00F0FF]/30 p-4 sm:p-6 relative">
            <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-6 font-mono-tech text-xs">
              <div className="flex items-center gap-2">
                <Cloud size={14} className="text-[#00F0FF] animate-pulse" />
                <span className="text-[#00F0FF] font-bold">GCP_CONSOLE // SOLE_INFRA_MANAGER</span>
              </div>
              <div className="flex items-center gap-3 text-white/50 text-[11px]">
                <span className="px-2 py-0.5 bg-[#00F0FF]/10 text-[#00F0FF] border border-[#00F0FF]/30">GCP CLOUD RUN</span>
                <span>STATUS: 100% OPERATIONAL</span>
              </div>
            </div>

            {/* GCP Deployments & Mail Routing Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {/* Left Column: Cloud Deployments */}
              <div className="md:col-span-6 bg-[#0E101A] border border-white/10 p-4 font-mono-tech text-xs space-y-3">
                <div className="text-white/40 text-[10px] border-b border-white/5 pb-2 flex items-center justify-between">
                  <span>ACTIVE GCP CLOUD SERVICES</span>
                  <span className="text-[#00F0FF]">MANAGED BY MOHAMED</span>
                </div>

                <div className="p-2.5 bg-[#08090C] border border-[#00F0FF]/40 flex items-center justify-between">
                  <div>
                    <div className="text-white font-bold">parkqwik-corporate-web</div>
                    <div className="text-white/40 text-[10px]">Cloud Run • Auto-Scale 1-20</div>
                  </div>
                  <span className="text-[#00F0FF] text-[10px] font-bold">LIVE ➔ 200 OK</span>
                </div>

                <div className="p-2.5 bg-[#08090C] border border-white/10 flex items-center justify-between">
                  <div>
                    <div className="text-white font-bold">ev-marketplace-api</div>
                    <div className="text-white/40 text-[10px]">Cloud Run Microservice</div>
                  </div>
                  <span className="text-[#00F0FF] text-[10px] font-bold">LIVE ➔ 200 OK</span>
                </div>

                <div className="p-2.5 bg-[#08090C] border border-white/10 flex items-center justify-between">
                  <div>
                    <div className="text-white font-bold">cloud-dns-zone-parkqwik</div>
                    <div className="text-white/40 text-[10px]">DNS Routing & SSL Certs</div>
                  </div>
                  <span className="text-[#00F0FF] text-[10px] font-bold">ACTIVE</span>
                </div>
              </div>

              {/* Right Column: Mail Routing & Security Panel */}
              <div className="md:col-span-6 bg-[#0E101A] border border-white/10 p-4 font-mono-tech text-xs flex flex-col justify-between">
                <div>
                  <div className="text-white/40 text-[10px] border-b border-white/5 pb-2 mb-3 flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-white">
                      <Mail size={13} className="text-[#00F0FF]" />
                      ENTERPRISE MAIL ROUTING & DNS
                    </span>
                    <span className="text-[#00F0FF]">DELIVERABILITY: 99.9%</span>
                  </div>

                  {/* Interactive Record Selector */}
                  <div className="flex items-center gap-2 mb-4">
                    {['MX', 'SPF TXT', 'DKIM', 'DMARC'].map((rec) => (
                      <button
                        key={rec}
                        onClick={() => setActiveDnsRecord(rec)}
                        className={`px-2 py-1 text-[10px] border transition-colors ${
                          activeDnsRecord === rec
                            ? 'border-[#00F0FF] text-[#00F0FF] bg-[#00F0FF]/10 font-bold'
                            : 'border-white/10 text-white/50'
                        }`}
                      >
                        {rec}
                      </button>
                    ))}
                  </div>

                  {/* DNS Record Output Box */}
                  <div className="p-3 bg-[#050608] border border-white/10 text-[11px] font-mono-tech space-y-1">
                    {activeDnsRecord === 'MX' && (
                      <>
                        <div className="text-white/40">// MX MAIL ROUTING TARGET</div>
                        <div className="text-[#00F0FF]">10 mail.parkqwik.com (Priority 10)</div>
                        <div className="text-[#00F0FF]">20 alt-mail.parkqwik.com (Priority 20)</div>
                      </>
                    )}
                    {activeDnsRecord === 'SPF TXT' && (
                      <>
                        <div className="text-white/40">// SPF SENDER VALIDATION</div>
                        <div className="text-[#00F0FF]">"v=spf1 include:_spf.google.com ~all"</div>
                      </>
                    )}
                    {activeDnsRecord === 'DKIM' && (
                      <>
                        <div className="text-white/40">// DKIM RSA SIGNATURE</div>
                        <div className="text-[#00F0FF]">google._domainkey.parkqwik.com ➔ k=rsa; p=MIIBIjANBg...</div>
                      </>
                    )}
                    {activeDnsRecord === 'DMARC' && (
                      <>
                        <div className="text-white/40">// DMARC SECURITY POLICY</div>
                        <div className="text-[#00F0FF]">"v=DMARC1; p=reject; rua=mailto:dmarc@parkqwik.com"</div>
                      </>
                    )}
                  </div>
                </div>

                <div className="pt-3 border-t border-white/5 text-[10px] text-white/40 flex items-center justify-between mt-3">
                  <span>SOLE GCP & MAIL ADMINISTRATOR</span>
                  <span className="text-[#00F0FF] flex items-center gap-1">
                    <ShieldCheck size={12} />
                    AUTHENTICATED
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PROJECT 03 — TWINN.LIVE */}
      <div className="mb-32">
        <div className="font-mono-tech text-xs text-[#00F0FF] mb-4">
          // {projectsData[2].transitionTag}
        </div>

        <div className="bg-[#0E0F16] border border-white/10 p-6 sm:p-10 relative overflow-hidden group">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
            <div className="lg:col-span-8">
              <div className="font-mono-tech text-xs text-white/40 mb-2">PROJECT 03</div>
              <div className="flex flex-wrap items-baseline gap-4 mb-2">
                <h3 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-white uppercase tracking-tight group-hover:text-[#00F0FF] transition-colors">
                  TWINN.LIVE
                </h3>
                <span className="font-display font-bold text-xl sm:text-2xl text-[#00F0FF]">
                  {projectsData[2].editorialHeadline}
                </span>
              </div>
              <p className="text-white/70 text-base font-light mb-6">
                {projectsData[2].description}
              </p>

              <div className="flex flex-wrap gap-2 font-mono-tech text-xs mb-8">
                {projectsData[2].technologies.map((t) => (
                  <span key={t} className="px-2.5 py-1 bg-white/5 border border-white/10 text-white/80">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 flex lg:justify-end">
              <button
                onClick={() => {
                  playAudioClick();
                  onSelectProject(projectsData[2]);
                }}
                className="px-6 py-3 bg-[#00F0FF] text-[#08090C] font-mono-tech text-xs font-bold hover:bg-white transition-all flex items-center gap-2 cyan-glow-sm cursor-pointer"
              >
                <span>EXPLORE CASE STUDY</span>
                <ArrowUpRight size={16} />
              </button>
            </div>
          </div>

          {/* Technical Dark Environment Mockup for Twinn.live */}
          <div className="bg-[#050608] border border-[#00F0FF]/30 p-4 sm:p-6 relative">
            <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-6 font-mono-tech text-xs">
              <div className="flex items-center gap-2">
                <Radio size={14} className="text-[#00F0FF] animate-pulse" />
                <span className="text-[#00F0FF] font-bold">AI_LIVE_BROADCAST_ENGINE</span>
              </div>
              <div className="flex items-center gap-3 text-white/50 text-[11px]">
                <span>STREAM: 1080p 60FPS</span>
                <span className="px-2 py-0.5 bg-[#00F0FF]/10 text-[#00F0FF] border border-[#00F0FF]/30">GCP CLOUD RUN</span>
              </div>
            </div>

            {/* Video Broadcast & Cloud Layer Visualization */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-7 bg-[#0B0D14] border border-white/10 h-56 relative flex items-center justify-center overflow-hidden">
                <div className="absolute top-3 left-3 flex items-center gap-2 px-2.5 py-1 bg-red-500/20 border border-red-500/40 text-red-400 font-mono-tech text-[10px] font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
                  LIVE BROADCAST ACTIVE
                </div>

                <div className="text-center p-4">
                  <Play size={36} className="text-[#00F0FF] mx-auto mb-2 opacity-80" />
                  <div className="font-display font-bold text-white text-base">Vimeo Multi-Channel Stream</div>
                  <div className="font-mono-tech text-xs text-white/40">Latency: 42ms • Serverless Pipeline</div>
                </div>

                <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#00F0FF] to-transparent animate-pulse" />
              </div>

              <div className="md:col-span-5 space-y-3 font-mono-tech text-xs">
                <div className="p-3 bg-[#0E101A] border border-white/10 flex items-center justify-between">
                  <span className="text-white">AI AVATAR GENERATION</span>
                  <span className="text-[#00F0FF]">→ BROADCAST</span>
                </div>
                <div className="p-3 bg-[#0E101A] border border-white/10 flex items-center justify-between">
                  <span className="text-white">VIMEO LIVESTREAM</span>
                  <span className="text-[#00F0FF]">→ MULTI-CHANNEL</span>
                </div>
                <div className="p-3 bg-[#0E101A] border border-[#00F0FF]/40 bg-[#00F0FF]/5 flex items-center justify-between">
                  <span className="text-white">GOOGLE CLOUD RUN</span>
                  <span className="text-[#00F0FF] font-bold">SERVERLESS EXECUTION</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PROJECT 04 — PINKY PONKY */}
      <div>
        <div className="font-mono-tech text-xs text-[#00F0FF] mb-4">
          // {projectsData[3].transitionTag}
        </div>

        <div className="bg-[#0E0F16] border border-white/10 p-6 sm:p-10 relative overflow-hidden group">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
            <div className="lg:col-span-6">
              <div className="font-mono-tech text-xs text-white/40 mb-2">PROJECT 04</div>
              <h3 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-white uppercase tracking-tight mb-4 group-hover:text-[#00F0FF] transition-colors">
                PINKY PONKY
              </h3>
              <p className="text-white/70 text-base font-light mb-6">
                {projectsData[3].description}
              </p>

              <div className="flex flex-wrap gap-2 font-mono-tech text-xs mb-8">
                {projectsData[3].technologies.map((t) => (
                  <span key={t} className="px-2.5 py-1 bg-white/5 border border-white/10 text-white/80">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 flex justify-end">
              <button
                onClick={() => {
                  playAudioClick();
                  onSelectProject(projectsData[3]);
                }}
                className="px-6 py-3 bg-[#00F0FF] text-[#08090C] font-mono-tech text-xs font-bold hover:bg-white transition-all flex items-center gap-2 cyan-glow-sm cursor-pointer"
              >
                <span>EXPLORE CASE STUDY</span>
                <ArrowUpRight size={16} />
              </button>
            </div>
          </div>

          {/* Interactive UI Mockup Showcase: E-Commerce Product Catalog */}
          <div className="bg-[#08090C] border border-white/10 p-4 sm:p-6 mb-8 relative">
            <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4 font-mono-tech text-xs">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                <span className="text-white/40 ml-2 text-[11px]">https://pinkyponky.in</span>
              </div>
              <div className="hidden sm:flex items-center gap-2 text-white/50 text-[11px]">
                <ShoppingBag size={12} className="text-[#00F0FF]" />
                <span>CATALOG_VIEWER // ACTIVE</span>
              </div>
            </div>

            <div className="flex items-center gap-2 font-mono-tech text-xs mb-6 overflow-x-auto pb-2">
              {['ALL', 'BABY CARE', 'MOTHER CARE', 'ORGANIC TOYS', 'NEW ARRIVALS'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setPinkyActiveCategory(cat)}
                  className={`px-3 py-1 border transition-colors whitespace-nowrap ${
                    pinkyActiveCategory === cat
                      ? 'border-[#00F0FF] text-[#00F0FF] bg-[#00F0FF]/10'
                      : 'border-white/10 text-white/60 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              {[
                { name: 'Organic Cotton Baby Suite', price: '₹1,299', tag: 'BESTSELLER' },
                { name: 'Gentle Care Baby Lotion', price: '₹649', tag: 'NEW' },
                { name: 'Calming Ergonomic Pillow', price: '₹1,899', tag: 'POPULAR' },
              ].map((item, idx) => (
                <div key={idx} className="bg-[#0E0F16] border border-white/10 p-4 relative group/card">
                  <div className="h-36 bg-[#141622] border border-white/5 mb-3 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute top-2 left-2 px-1.5 py-0.5 bg-[#00F0FF]/10 border border-[#00F0FF]/30 font-mono-tech text-[9px] text-[#00F0FF]">
                      {item.tag}
                    </div>
                    <ShoppingBag size={28} className="text-white/20 group-hover/card:text-[#00F0FF] transition-colors" />
                  </div>
                  <div className="font-display font-bold text-sm text-white">{item.name}</div>
                  <div className="font-mono-tech text-xs text-[#00F0FF] mt-1">{item.price}</div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-4 border-t border-white/10 font-mono-tech text-[10px]">
              {projectsData[3].technicalLayers.map((layer, idx) => (
                <div key={idx} className="p-2 bg-[#0E0F16] border border-white/5">
                  <div className="text-[#00F0FF] font-bold">{layer.label}</div>
                  <div className="text-white/40">{layer.sublabel}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
