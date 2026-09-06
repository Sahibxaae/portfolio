import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  Activity,
  ArrowUpRight,
  BarChart3,
  CheckCircle2,
  Globe,
  Layers,
  LogOut,
  Play,
  Pause,
  RefreshCw,
  Server,
  Terminal,
  Zap,
  Users,
  Code2,
  Sliders,
  Check
} from 'lucide-react';
import { CustomCursor } from '../components/CustomCursor';

interface DashboardPageProps {
  soundEnabled?: boolean;
  playAudioClick?: () => void;
}

// Sample time series data points for charts
const timeSeriesData = {
  '24H': [
    { time: '00:00', visits: 1200, bandwidth: 1.2, latency: 14 },
    { time: '04:00', visits: 850, bandwidth: 0.9, latency: 12 },
    { time: '08:00', visits: 2400, bandwidth: 2.8, latency: 18 },
    { time: '12:00', visits: 4100, bandwidth: 4.5, latency: 15 },
    { time: '16:00', visits: 5800, bandwidth: 6.2, latency: 13 },
    { time: '20:00', visits: 3900, bandwidth: 4.1, latency: 11 },
    { time: '24:00', visits: 2100, bandwidth: 2.4, latency: 12 },
  ],
  '7D': [
    { time: 'Mon', visits: 18400, bandwidth: 18.2, latency: 15 },
    { time: 'Tue', visits: 22100, bandwidth: 24.5, latency: 14 },
    { time: 'Wed', visits: 25800, bandwidth: 29.1, latency: 13 },
    { time: 'Thu', visits: 28400, bandwidth: 32.4, latency: 12 },
    { time: 'Fri', visits: 31200, bandwidth: 38.0, latency: 16 },
    { time: 'Sat', visits: 19500, bandwidth: 21.3, latency: 11 },
    { time: 'Sun', visits: 16400, bandwidth: 16.8, latency: 10 },
  ],
  '30D': [
    { time: 'Week 1', visits: 88000, bandwidth: 95.0, latency: 14 },
    { time: 'Week 2', visits: 104000, bandwidth: 112.5, latency: 13 },
    { time: 'Week 3', visits: 128000, bandwidth: 145.2, latency: 12 },
    { time: 'Week 4', visits: 142850, bandwidth: 168.0, latency: 11 },
  ],
};

// Tech Stack Data
const techStackItems = [
  { name: 'Frontend (React/Vite/TS)', percent: 40, color: '#00F0FF', requests: '2.8M', speed: '99/100' },
  { name: 'Backend & APIs (Node/Go)', percent: 25, color: '#3B82F6', requests: '1.4M', speed: '98/100' },
  { name: 'AI & Data Engine (Python)', percent: 20, color: '#A855F7', requests: '850K', speed: '96/100' },
  { name: 'Cloud & K8s DevOps', percent: 15, color: '#10B981', requests: '420K', speed: '100/100' },
];

// Project Performance Data
const projectMetrics = [
  { name: 'AI Workflow Engine', commits: 142, coverage: '98.2%', duration: '42s', score: 99 },
  { name: 'Microservices Bus', commits: 98, coverage: '96.5%', duration: '35s', score: 97 },
  { name: 'Cyber Portfolio OS', commits: 186, coverage: '99.1%', duration: '28s', score: 100 },
  { name: 'Realtime Canvas Engine', commits: 74, coverage: '92.4%', duration: '48s', score: 94 },
];

// Initial Logs
const initialLogs = [
  { id: 1, type: 'SUCCESS', time: '00:04:12', msg: 'RSA 4096 Key handshake established for admin session.' },
  { id: 2, type: 'INFO', time: '00:04:15', msg: 'Cloudflare Edge Cache Hit Ratio: 98.42% (Optimal).' },
  { id: 3, type: 'INFO', time: '00:04:18', msg: 'Kubernetes Cluster node-01 autoscaled 4 worker pods.' },
  { id: 4, type: 'SUCCESS', time: '00:04:22', msg: 'Database connection pool active: 32/32 connections.' },
  { id: 5, type: 'WARN', time: '00:04:28', msg: 'High request traffic detected from US-East region (Bypassed).' },
  { id: 6, type: 'INFO', time: '00:04:35', msg: 'Automated CI/CD deployment pipeline finished in 28.4s.' },
];

export const DashboardPage: React.FC<DashboardPageProps> = ({ playAudioClick }) => {
  const navigate = useNavigate();
  const [timeRange, setTimeRange] = useState<'24H' | '7D' | '30D'>('24H');
  const [activeMetricTab, setActiveMetricTab] = useState<'visits' | 'bandwidth' | 'latency'>('visits');
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [hoveredDataIndex, setHoveredDataIndex] = useState<number | null>(null);
  const [logFilter, setLogFilter] = useState<'ALL' | 'INFO' | 'SUCCESS' | 'WARN'>('ALL');
  const [isLiveLogStream, setIsLiveLogStream] = useState(true);
  const [logs, setLogs] = useState(initialLogs);
  const [currentUser, setCurrentUser] = useState('Mohamed Sahib');
  const [currentTime, setCurrentTime] = useState('');

  // Check auth session
  useEffect(() => {
    const savedUser = sessionStorage.getItem('sahib_user');
    if (savedUser) setCurrentUser(savedUser);

    const timer = setInterval(() => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('en-US', { hour12: false }));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Simulate streaming log feed
  useEffect(() => {
    if (!isLiveLogStream) return;
    const logInterval = setInterval(() => {
      const types: ('INFO' | 'SUCCESS' | 'WARN')[] = ['INFO', 'SUCCESS', 'INFO', 'WARN'];
      const randomType = types[Math.floor(Math.random() * types.length)];
      const messages = [
        'GET /api/v2/insights/metrics 200 OK - 14ms',
        'Redis cache invalidated for section #architecture',
        'WebSocket heartbeat acknowledged by 1,240 clients',
        'Garbage collection executed - freed 128MB heap',
        'System health check passed: 16/16 services green',
      ];
      const randomMsg = messages[Math.floor(Math.random() * messages.length)];
      const now = new Date();
      const timeStr = now.toLocaleTimeString('en-US', { hour12: false });

      setLogs((prev) => [
        { id: Date.now(), type: randomType, time: timeStr, msg: randomMsg },
        ...prev.slice(0, 19),
      ]);
    }, 3500);

    return () => clearInterval(logInterval);
  }, [isLiveLogStream]);

  const handleRefresh = () => {
    if (playAudioClick) playAudioClick();
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 800);
  };

  const handleLogout = () => {
    if (playAudioClick) playAudioClick();
    sessionStorage.removeItem('sahib_authenticated');
    navigate('/login');
  };

  const currentChartData = timeSeriesData[timeRange];
  const maxVisitVal = Math.max(...currentChartData.map((d) => d.visits));

  const filteredLogs = logs.filter((log) => logFilter === 'ALL' || log.type === logFilter);

  return (
    <div className="min-h-screen bg-[#08090C] text-[#F5F5F0] relative font-sans selection:bg-[#00F0FF] selection:text-black">
      {/* Background Grid & FX */}
      <div className="fixed inset-0 bg-grid opacity-20 pointer-events-none" />
      <div className="noise-overlay" />
      <CustomCursor />

      {/* Top Header Navbar */}
      <header className="sticky top-0 z-40 w-full px-6 py-4 border-b border-white/10 bg-[#08090C]/90 backdrop-blur-xl flex flex-wrap items-center justify-between gap-4">
        {/* Brand & System Status */}
        <div className="flex items-center gap-4">
          <Link
            to="/"
            onClick={() => playAudioClick && playAudioClick()}
            className="flex items-center gap-3 group"
          >
            <div className="w-9 h-9 border border-white/20 bg-[#0E0F16] flex items-center justify-center group-hover:border-[#00F0FF] transition-colors">
              <span className="font-mono-tech text-sm text-[#00F0FF] font-bold">MS</span>
            </div>
            <div>
              <div className="font-display font-bold text-sm tracking-tight text-white group-hover:text-[#00F0FF] transition-colors flex items-center gap-2">
                SAHIB OS // INSIGHTS DASHBOARD
                <span className="text-[10px] font-mono-tech px-2 py-0.5 rounded bg-[#00F0FF]/10 text-[#00F0FF] border border-[#00F0FF]/30">
                  LIVE TELEMETRY
                </span>
              </div>
              <div className="text-[11px] font-mono-tech text-white/40">
                SYSTEM TIME: {currentTime || '00:00:00'} IST
              </div>
            </div>
          </Link>
        </div>

        {/* Global Controls & User Profile */}
        <div className="flex flex-wrap items-center gap-3 font-mono-tech text-xs">
          {/* Time Range Selector */}
          <div className="flex items-center border border-white/15 bg-white/[0.03]">
            {(['24H', '7D', '30D'] as const).map((range) => (
              <button
                key={range}
                onClick={() => {
                  if (playAudioClick) playAudioClick();
                  setTimeRange(range);
                }}
                className={`px-3 py-1.5 transition-all ${
                  timeRange === range
                    ? 'bg-[#00F0FF] text-black font-bold'
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
              >
                {range}
              </button>
            ))}
          </div>

          {/* Refresh Button */}
          <button
            onClick={handleRefresh}
            title="Refresh Realtime Telemetry"
            className="p-2 border border-white/15 hover:border-[#00F0FF] bg-white/[0.03] hover:text-[#00F0FF] transition-all flex items-center gap-1.5"
          >
            <RefreshCw size={14} className={isRefreshing ? 'animate-spin text-[#00F0FF]' : ''} />
            <span className="hidden sm:inline">REFRESH</span>
          </button>

          {/* User Badge */}
          <div className="hidden md:flex items-center gap-2 px-3 py-1.5 border border-white/10 bg-[#0E0F16] text-white/80">
            <span className="h-2 w-2 rounded-full bg-[#00F0FF] animate-pulse" />
            <span className="font-semibold text-white">{currentUser}</span>
            <span className="text-white/40">[ROOT]</span>
          </div>

          {/* Return & Logout */}
          <Link
            to="/"
            onClick={() => playAudioClick && playAudioClick()}
            className="px-3 py-1.5 border border-white/15 hover:border-white/40 text-white/70 hover:text-white transition-all"
          >
            PORTFOLIO
          </Link>

          <button
            onClick={handleLogout}
            className="px-3 py-1.5 bg-red-950/40 hover:bg-red-900/60 border border-red-500/40 text-red-300 hover:text-red-100 transition-all flex items-center gap-1.5"
          >
            <LogOut size={14} />
            <span className="hidden sm:inline">EXIT</span>
          </button>
        </div>
      </header>

      {/* Main Dashboard Layout Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-8 relative z-10">
        
        {/* Banner Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 bg-[#0E0F16]/90 border border-white/15 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 bottom-0 w-1 bg-[#00F0FF]" />
          <div>
            <div className="font-mono-tech text-xs text-[#00F0FF] mb-1 tracking-widest flex items-center gap-2">
              <Zap size={14} />
              <span>REALTIME PERFORMANCE MONITORING</span>
            </div>
            <h1 className="font-display text-2xl sm:text-3xl font-bold uppercase text-white tracking-tight">
              ADVANCED SYSTEM <span className="text-[#00F0FF]">ANALYTICS & INSIGHTS</span>
            </h1>
            <p className="text-xs sm:text-sm font-mono-tech text-white/60 mt-1">
              Live telemetry, infrastructure metrics, user traffic trends & multi-dimensional code diagnostics.
            </p>
          </div>

          <div className="flex items-center gap-3 font-mono-tech text-xs shrink-0">
            <div className="px-3 py-2 bg-black/50 border border-white/10 text-white/70">
              <span className="text-white/40 block text-[10px]">// OVERALL HEALTH</span>
              <span className="text-[#00F0FF] font-bold flex items-center gap-1">
                <CheckCircle2 size={12} /> 99.99% OPTIMAL
              </span>
            </div>
            <div className="px-3 py-2 bg-black/50 border border-white/10 text-white/70">
              <span className="text-white/40 block text-[10px]">// AVG LATENCY</span>
              <span className="text-white font-bold">12.4 ms</span>
            </div>
          </div>
        </div>

        {/* 1. Top KPI Summary Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* KPI 1 */}
          <div className="bg-[#0E0F16] border border-white/10 p-5 relative group hover:border-[#00F0FF]/40 transition-all">
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono-tech text-xs text-white/50 tracking-wider">// TOTAL VISITS</span>
              <div className="p-2 bg-white/5 text-[#00F0FF] border border-white/10">
                <Users size={18} />
              </div>
            </div>
            <div className="font-display font-bold text-3xl text-white tracking-tight mb-1">
              142,850
            </div>
            <div className="flex items-center justify-between font-mono-tech text-xs">
              <span className="text-emerald-400 font-semibold flex items-center gap-1">
                <ArrowUpRight size={14} /> +18.4%
              </span>
              <span className="text-white/40">Unique IPs: 34.2K</span>
            </div>
          </div>

          {/* KPI 2 */}
          <div className="bg-[#0E0F16] border border-white/10 p-5 relative group hover:border-[#00F0FF]/40 transition-all">
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono-tech text-xs text-white/50 tracking-wider">// API THROUGHPUT</span>
              <div className="p-2 bg-white/5 text-blue-400 border border-white/10">
                <Activity size={18} />
              </div>
            </div>
            <div className="font-display font-bold text-3xl text-white tracking-tight mb-1">
              4.2M req
            </div>
            <div className="flex items-center justify-between font-mono-tech text-xs">
              <span className="text-emerald-400 font-semibold flex items-center gap-1">
                <ArrowUpRight size={14} /> +24.1%
              </span>
              <span className="text-white/40">Cache Hit: 98.4%</span>
            </div>
          </div>

          {/* KPI 3 */}
          <div className="bg-[#0E0F16] border border-white/10 p-5 relative group hover:border-[#00F0FF]/40 transition-all">
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono-tech text-xs text-white/50 tracking-wider">// CLUSTER SERVICES</span>
              <div className="p-2 bg-white/5 text-purple-400 border border-white/10">
                <Server size={18} />
              </div>
            </div>
            <div className="font-display font-bold text-3xl text-white tracking-tight mb-1">
              16 / 16
            </div>
            <div className="flex items-center justify-between font-mono-tech text-xs">
              <span className="text-[#00F0FF] font-semibold flex items-center gap-1">
                <Check size={14} /> ALL ONLINE
              </span>
              <span className="text-white/40">K8s Status: GREEN</span>
            </div>
          </div>

          {/* KPI 4 */}
          <div className="bg-[#0E0F16] border border-white/10 p-5 relative group hover:border-[#00F0FF]/40 transition-all">
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono-tech text-xs text-white/50 tracking-wider">// CODE & DEPLOYS</span>
              <div className="p-2 bg-white/5 text-amber-400 border border-white/10">
                <Code2 size={18} />
              </div>
            </div>
            <div className="font-display font-bold text-3xl text-white tracking-tight mb-1">
              482 Builds
            </div>
            <div className="flex items-center justify-between font-mono-tech text-xs">
              <span className="text-emerald-400 font-semibold flex items-center gap-1">
                <CheckCircle2 size={14} /> 94.8% COVERAGE
              </span>
              <span className="text-white/40">Fail: 0.00%</span>
            </div>
          </div>
        </section>

        {/* 2. Main Traffic Chart & Interactive Insights */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Chart Panel - 8 Columns */}
          <div className="lg:col-span-8 bg-[#0E0F16] border border-white/10 p-6 relative flex flex-col justify-between">
            {/* Header Controls */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div>
                <div className="font-mono-tech text-xs text-[#00F0FF] tracking-wider mb-1 flex items-center gap-2">
                  <BarChart3 size={14} />
                  <span>TIME SERIES ANALYTICS</span>
                </div>
                <h3 className="font-display font-bold text-lg text-white">
                  TRAFFIC & SYSTEM THROUGHPUT TRENDS
                </h3>
              </div>

              {/* Metric Tabs */}
              <div className="flex items-center font-mono-tech text-xs bg-black/40 border border-white/10 p-1">
                {(['visits', 'bandwidth', 'latency'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => {
                      if (playAudioClick) playAudioClick();
                      setActiveMetricTab(tab);
                    }}
                    className={`px-3 py-1 uppercase transition-all ${
                      activeMetricTab === tab
                        ? 'bg-[#00F0FF] text-black font-bold'
                        : 'text-white/60 hover:text-white'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* SVG Visual Chart */}
            <div className="relative h-64 w-full bg-black/40 border border-white/5 p-4 flex flex-col justify-between">
              {/* Horizontal Grid lines */}
              <div className="absolute inset-0 flex flex-col justify-between p-4 pointer-events-none opacity-20">
                <div className="border-b border-dashed border-white w-full" />
                <div className="border-b border-dashed border-white w-full" />
                <div className="border-b border-dashed border-white w-full" />
                <div className="border-b border-dashed border-white w-full" />
              </div>

              {/* Interactive Bars / Plot Points */}
              <div className="relative z-10 h-full flex items-end justify-between gap-2 pt-6">
                {currentChartData.map((item, idx) => {
                  const val =
                    activeMetricTab === 'visits'
                      ? item.visits
                      : activeMetricTab === 'bandwidth'
                      ? item.bandwidth * 500
                      : item.latency * 200;

                  const heightPercent = Math.min(100, Math.max(15, (val / (maxVisitVal * 1.1)) * 100));

                  return (
                    <div
                      key={item.time}
                      onMouseEnter={() => setHoveredDataIndex(idx)}
                      onMouseLeave={() => setHoveredDataIndex(null)}
                      className="flex-1 flex flex-col items-center h-full justify-end group cursor-pointer relative"
                    >
                      {/* Hover Tooltip Box */}
                      {hoveredDataIndex === idx && (
                        <div className="absolute -top-14 z-30 px-3 py-1.5 bg-[#08090C] border border-[#00F0FF] text-white font-mono-tech text-xs whitespace-nowrap shadow-xl">
                          <div className="text-[#00F0FF] font-bold">{item.time}</div>
                          <div>
                            {activeMetricTab === 'visits' && `${item.visits.toLocaleString()} Visits`}
                            {activeMetricTab === 'bandwidth' && `${item.bandwidth} GB Bandwidth`}
                            {activeMetricTab === 'latency' && `${item.latency} ms Latency`}
                          </div>
                        </div>
                      )}

                      {/* Bar Fill */}
                      <div
                        style={{ height: `${heightPercent}%` }}
                        className={`w-full transition-all duration-300 relative ${
                          hoveredDataIndex === idx
                            ? 'bg-[#00F0FF] shadow-[0_0_15px_rgba(0,240,255,0.6)]'
                            : 'bg-[#00F0FF]/40 group-hover:bg-[#00F0FF]/70'
                        }`}
                      >
                        {/* Top Indicator Cap */}
                        <div className="absolute top-0 left-0 right-0 h-1 bg-[#00F0FF]" />
                      </div>

                      {/* Time Label */}
                      <span className="font-mono-tech text-[10px] text-white/40 mt-2">
                        {item.time}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Summary Bar */}
            <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between font-mono-tech text-xs text-white/50">
              <span>HIGHEST PEAK: {maxVisitVal.toLocaleString()} TRAFFIC UNITS</span>
              <span className="text-[#00F0FF]">DATA ENGINE: REALTIME INGESTION</span>
            </div>
          </div>

          {/* Tech Stack Distribution - 4 Columns */}
          <div className="lg:col-span-4 bg-[#0E0F16] border border-white/10 p-6 flex flex-col justify-between">
            <div>
              <div className="font-mono-tech text-xs text-[#00F0FF] tracking-wider mb-1 flex items-center gap-2">
                <Layers size={14} />
                <span>ARCHITECTURAL SHARE</span>
              </div>
              <h3 className="font-display font-bold text-lg text-white mb-4">
                TECH STACK ALLOCATION
              </h3>

              {/* Stack Progress List */}
              <div className="space-y-4">
                {techStackItems.map((item) => (
                  <div key={item.name} className="space-y-1.5">
                    <div className="flex items-center justify-between font-mono-tech text-xs">
                      <span className="text-white/80 font-medium">{item.name}</span>
                      <span className="text-[#00F0FF] font-bold">{item.percent}%</span>
                    </div>
                    <div className="w-full h-2 bg-black/60 border border-white/10 overflow-hidden">
                      <div
                        style={{
                          width: `${item.percent}%`,
                          backgroundColor: item.color,
                        }}
                        className="h-full transition-all duration-500"
                      />
                    </div>
                    <div className="flex items-center justify-between font-mono-tech text-[10px] text-white/40">
                      <span>Requests: {item.requests}</span>
                      <span>Score: {item.speed}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Info Box */}
            <div className="mt-6 p-3 bg-white/[0.02] border border-white/5 font-mono-tech text-xs text-white/50">
              <span className="text-white font-semibold block mb-0.5">// OPTIMIZATION METRIC</span>
              Webpack/Vite tree-shaking & code splitting reduced bundle payload by 42%.
            </div>
          </div>
        </section>

        {/* 3. Global Geolocation & Project CI/CD Velocity */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Global Node Latencies (6 Cols) */}
          <div className="lg:col-span-6 bg-[#0E0F16] border border-white/10 p-6">
            <div className="font-mono-tech text-xs text-[#00F0FF] tracking-wider mb-1 flex items-center gap-2">
              <Globe size={14} />
              <span>GEOGRAPHIC TRAFFIC & NODES</span>
            </div>
            <h3 className="font-display font-bold text-lg text-white mb-4">
              GLOBAL EDGE DISPATCH
            </h3>

            <div className="space-y-3 font-mono-tech text-xs">
              {[
                { region: 'Asia-Pacific (Bengaluru - IN)', share: '42%', latency: '4 ms', status: 'OPTIMAL' },
                { region: 'North America (US-East - VA)', share: '28%', latency: '38 ms', status: 'OPTIMAL' },
                { region: 'Europe (Frankfurt - DE)', share: '18%', latency: '82 ms', status: 'GOOD' },
                { region: 'Asia-Pacific (Tokyo - JP)', share: '12%', latency: '45 ms', status: 'OPTIMAL' },
              ].map((loc) => (
                <div
                  key={loc.region}
                  className="p-3 bg-black/40 border border-white/10 flex items-center justify-between hover:border-[#00F0FF]/30 transition-all"
                >
                  <div>
                    <span className="text-white font-bold block">{loc.region}</span>
                    <span className="text-white/40 text-[10px]">Traffic Share: {loc.share}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[#00F0FF] font-bold block">{loc.latency}</span>
                    <span className="text-emerald-400 text-[10px]">{loc.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Project CI/CD Velocity (6 Cols) */}
          <div className="lg:col-span-6 bg-[#0E0F16] border border-white/10 p-6">
            <div className="font-mono-tech text-xs text-[#00F0FF] tracking-wider mb-1 flex items-center gap-2">
              <Sliders size={14} />
              <span>PROJECT HEALTH METRICS</span>
            </div>
            <h3 className="font-display font-bold text-lg text-white mb-4">
              BUILD & TEST PERFORMANCE
            </h3>

            <div className="space-y-3 font-mono-tech text-xs">
              {projectMetrics.map((proj) => (
                <div
                  key={proj.name}
                  className="p-3 bg-black/40 border border-white/10 hover:border-[#00F0FF]/30 transition-all space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-white font-bold">{proj.name}</span>
                    <span className="text-[#00F0FF] font-mono-tech font-bold">
                      {proj.score} / 100 INDEX
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-white/50">
                    <span>Commits: {proj.commits}</span>
                    <span>Test Coverage: {proj.coverage}</span>
                    <span>Build Time: {proj.duration}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Live Cyber Terminal Stream & Diagnostics */}
        <section className="bg-[#0E0F16] border border-white/15 p-6 relative">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <div>
              <div className="font-mono-tech text-xs text-[#00F0FF] tracking-wider mb-1 flex items-center gap-2">
                <Terminal size={14} />
                <span>AUDIT SYSTEM STREAM</span>
              </div>
              <h3 className="font-display font-bold text-lg text-white">
                LIVE KERNEL EVENT LOGS
              </h3>
            </div>

            {/* Filter Buttons & Controls */}
            <div className="flex flex-wrap items-center gap-2 font-mono-tech text-xs">
              <div className="flex items-center border border-white/10 bg-black/40">
                {(['ALL', 'INFO', 'SUCCESS', 'WARN'] as const).map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setLogFilter(filter)}
                    className={`px-2.5 py-1 ${
                      logFilter === filter
                        ? 'bg-[#00F0FF] text-black font-bold'
                        : 'text-white/60 hover:text-white'
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setIsLiveLogStream(!isLiveLogStream)}
                className={`px-3 py-1 border flex items-center gap-1.5 transition-all ${
                  isLiveLogStream
                    ? 'border-emerald-500/50 bg-emerald-950/30 text-emerald-300'
                    : 'border-white/20 bg-white/5 text-white/60'
                }`}
              >
                {isLiveLogStream ? <Pause size={12} /> : <Play size={12} />}
                <span>{isLiveLogStream ? 'STREAMING' : 'PAUSED'}</span>
              </button>

              <button
                onClick={() => setLogs([])}
                className="px-2.5 py-1 border border-white/10 hover:border-white/30 text-white/50 hover:text-white"
              >
                CLEAR
              </button>
            </div>
          </div>

          {/* Console Output Screen */}
          <div className="h-48 bg-black/80 border border-white/10 p-4 font-mono-tech text-xs overflow-y-auto space-y-2">
            {filteredLogs.length === 0 ? (
              <div className="text-white/30 text-center py-12">// NO EVENT LOGS MATCHING CURRENT FILTER</div>
            ) : (
              filteredLogs.map((log) => (
                <div key={log.id} className="flex items-start gap-3 hover:bg-white/[0.02] p-0.5">
                  <span className="text-white/30 shrink-0">[{log.time}]</span>
                  <span
                    className={`px-1.5 py-0.2 text-[10px] font-bold shrink-0 ${
                      log.type === 'SUCCESS'
                        ? 'bg-emerald-950 text-emerald-400 border border-emerald-500/30'
                        : log.type === 'WARN'
                        ? 'bg-amber-950 text-amber-400 border border-amber-500/30'
                        : 'bg-blue-950 text-blue-400 border border-blue-500/30'
                    }`}
                  >
                    {log.type}
                  </span>
                  <span className="text-white/80 break-all">{log.msg}</span>
                </div>
              ))
            )}
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="w-full px-6 py-6 border-t border-white/10 text-center font-mono-tech text-xs text-white/40 mt-12 bg-[#08090C]/80">
        &copy; 2026 MOHAMED SAHIB A. SYSTEM DASHBOARD OS. ALL RIGHTS RESERVED.
      </footer>
    </div>
  );
};

export default DashboardPage;
