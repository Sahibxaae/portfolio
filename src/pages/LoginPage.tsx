import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  Lock, 
  User, 
  Eye, 
  EyeOff, 
  ShieldCheck, 
  ArrowRight, 
  ArrowLeft, 
  Terminal, 
  Cpu, 
  AlertCircle,
  Sparkles,
  KeyRound
} from 'lucide-react';
import { CustomCursor } from '../components/CustomCursor';

interface LoginPageProps {
  soundEnabled?: boolean;
  playAudioClick?: () => void;
}

export const LoginPage: React.FC<LoginPageProps> = ({ playAudioClick }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('admin@sahib.dev');
  const [password, setPassword] = useState('••••••••••••');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (playAudioClick) playAudioClick();

    if (!username.trim() || !password.trim()) {
      setErrorMessage('SECURITY ALERT: ALL CREDENTIAL FIELDS REQUIRED');
      return;
    }

    setErrorMessage(null);
    setIsLoading(true);
    setStatusMessage('VERIFYING CRYPTOGRAPHIC HANDSHAKE...');

    setTimeout(() => {
      setStatusMessage('DECRYPTING RSA 4096-BIT TOKEN...');
    }, 600);

    setTimeout(() => {
      setStatusMessage('ACCESS GRANTED // INITIALIZING DASHBOARD...');
    }, 1200);

    setTimeout(() => {
      // Store session indicator
      sessionStorage.setItem('sahib_authenticated', 'true');
      sessionStorage.setItem('sahib_user', username.split('@')[0] || 'Mohamed Sahib');
      navigate('/dashboard');
    }, 1800);
  };

  const handleDemoAccess = () => {
    if (playAudioClick) playAudioClick();
    setUsername('admin@sahib.dev');
    setPassword('demo-admin-pass-2026');
    setErrorMessage(null);
    setIsLoading(true);
    setStatusMessage('BYPASSING WITH SYSTEM DEMO KEY...');

    setTimeout(() => {
      sessionStorage.setItem('sahib_authenticated', 'true');
      sessionStorage.setItem('sahib_user', 'Mohamed Sahib');
      navigate('/dashboard');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#08090C] text-[#F5F5F0] relative overflow-hidden flex flex-col justify-between selection:bg-[#00F0FF] selection:text-black font-sans">
      {/* Background Grid Accent */}
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div className="noise-overlay" />
      <CustomCursor />

      {/* Top Header Navigation Bar */}
      <header className="relative z-10 w-full px-6 py-6 border-b border-white/10 flex items-center justify-between backdrop-blur-md bg-[#08090C]/80">
        <Link 
          to="/" 
          onClick={() => playAudioClick && playAudioClick()}
          className="flex items-center gap-3 group text-left"
        >
          <div className="w-8 h-8 rounded-none border border-white/20 bg-[#0E0F16] flex items-center justify-center group-hover:border-[#00F0FF] transition-colors">
            <span className="font-mono-tech text-xs text-[#00F0FF] font-bold">MS</span>
          </div>
          <div>
            <div className="font-display font-bold text-sm tracking-tight text-white group-hover:text-[#00F0FF] transition-colors flex items-center gap-1.5">
              MOHAMED SAHIB A
              <span className="text-[10px] font-mono-tech px-1.5 py-0.5 rounded bg-[#00F0FF]/10 text-[#00F0FF] border border-[#00F0FF]/30">
                SYSTEM OS
              </span>
            </div>
            <div className="text-[10px] font-mono-tech text-white/40 tracking-wider">
              ADMIN CONTROL CENTER
            </div>
          </div>
        </Link>

        <Link
          to="/"
          onClick={() => playAudioClick && playAudioClick()}
          className="font-mono-tech text-xs text-white/60 hover:text-[#00F0FF] flex items-center gap-2 px-3 py-1.5 border border-white/10 hover:border-[#00F0FF]/40 rounded transition-all"
        >
          <ArrowLeft size={14} />
          <span>RETURN TO PORTFOLIO</span>
        </Link>
      </header>

      {/* Main Login Body Container */}
      <main className="relative z-10 flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          {/* Futuristic Gateway Badge Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00F0FF]/10 border border-[#00F0FF]/30 font-mono-tech text-xs text-[#00F0FF] mb-4 tracking-wider">
              <ShieldCheck size={14} className="animate-pulse" />
              <span>SECURE ACCESS GATEWAY // PORTFOLIO OS v4.2</span>
            </div>
            <h1 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight text-white mb-2">
              ADMIN <span className="text-[#00F0FF]">AUTHENTICATION</span>
            </h1>
            <p className="text-sm font-mono-tech text-white/50">
              RESTRICTED ZONE — AUTHORIZED PERSONNEL ONLY
            </p>
          </div>

          {/* Login Card */}
          <div className="bg-[#0E0F16]/90 border border-white/15 backdrop-blur-xl p-6 sm:p-8 relative shadow-2xl group">
            {/* Top Glowing Edge Bar */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00F0FF] to-transparent opacity-80" />

            <form onSubmit={handleLogin} className="space-y-6">
              {/* Username Input Field */}
              <div>
                <label className="block font-mono-tech text-xs text-white/70 mb-2 tracking-wider flex items-center justify-between">
                  <span>// IDENTIFIER / EMAIL</span>
                  <span className="text-[10px] text-white/30">SYS_USER</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-white/40">
                    <User size={16} />
                  </div>
                  <input
                    type="text"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="admin@sahib.dev"
                    className="w-full pl-10 pr-4 py-3 bg-black/40 border border-white/10 text-white font-mono-tech text-sm rounded-none focus:outline-none focus:border-[#00F0FF] focus:ring-1 focus:ring-[#00F0FF] transition-all placeholder:text-white/20"
                  />
                </div>
              </div>

              {/* Password Input Field */}
              <div>
                <label className="block font-mono-tech text-xs text-white/70 mb-2 tracking-wider flex items-center justify-between">
                  <span>// SECURITY CREDENTIAL</span>
                  <span className="text-[10px] text-white/30">ENCRYPTED</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-white/40">
                    <Lock size={16} />
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter security key"
                    className="w-full pl-10 pr-10 py-3 bg-black/40 border border-white/10 text-white font-mono-tech text-sm rounded-none focus:outline-none focus:border-[#00F0FF] focus:ring-1 focus:ring-[#00F0FF] transition-all placeholder:text-white/20"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      if (playAudioClick) playAudioClick();
                      setShowPassword(!showPassword);
                    }}
                    className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-white/40 hover:text-[#00F0FF] transition-colors"
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              {/* Options Row */}
              <div className="flex items-center justify-between text-xs font-mono-tech">
                <label className="flex items-center gap-2 cursor-pointer text-white/70 hover:text-white transition-colors">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="accent-[#00F0FF] w-4 h-4 rounded-none border-white/20 bg-black/50"
                  />
                  <span>PERSIST AUTH SESSION</span>
                </label>
                <button
                  type="button"
                  onClick={() => alert("Demo Mode: Click 'DEMO ONE-CLICK ACCESS' below to enter without a password.")}
                  className="text-white/40 hover:text-[#00F0FF] transition-colors underline underline-offset-4"
                >
                  FORGOT KEY?
                </button>
              </div>

              {/* Status or Error Notifications */}
              {errorMessage && (
                <div className="p-3 bg-red-950/40 border border-red-500/40 font-mono-tech text-xs text-red-400 flex items-center gap-2.5 animate-fadeIn">
                  <AlertCircle size={16} className="shrink-0 text-red-400" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {statusMessage && (
                <div className="p-3 bg-[#00F0FF]/10 border border-[#00F0FF]/40 font-mono-tech text-xs text-[#00F0FF] flex items-center gap-2.5 animate-fadeIn">
                  <Cpu size={16} className="shrink-0 animate-spin" />
                  <span>{statusMessage}</span>
                </div>
              )}

              {/* Action Buttons */}
              <div className="space-y-3 pt-2">
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full py-3.5 px-6 font-mono-tech font-bold text-xs tracking-wider uppercase transition-all flex items-center justify-center gap-2 ${
                    isLoading
                      ? 'bg-[#00F0FF]/20 text-[#00F0FF] cursor-not-allowed border border-[#00F0FF]/40'
                      : 'bg-[#00F0FF] text-black hover:bg-[#00F0FF]/90 hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] border border-[#00F0FF]'
                  }`}
                >
                  {isLoading ? (
                    <>
                      <Terminal size={16} className="animate-spin" />
                      <span>AUTHENTICATING...</span>
                    </>
                  ) : (
                    <>
                      <span>AUTHENTICATE & ENTER</span>
                      <ArrowRight size={16} />
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={handleDemoAccess}
                  disabled={isLoading}
                  className="w-full py-3 px-6 bg-white/5 hover:bg-white/10 border border-white/15 hover:border-[#00F0FF]/50 text-white/80 hover:text-[#00F0FF] font-mono-tech text-xs tracking-wider transition-all flex items-center justify-center gap-2"
                >
                  <Sparkles size={14} className="text-[#00F0FF]" />
                  <span>DEMO ONE-CLICK ACCESS</span>
                </button>
              </div>
            </form>

            {/* Bottom Footer Info */}
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono-tech text-white/40">
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#00F0FF] animate-pulse" />
                TLS 1.3 SECURE
              </span>
              <span className="flex items-center gap-1">
                <KeyRound size={12} /> RSA-4096
              </span>
            </div>
          </div>

          {/* Quick Info Box */}
          <div className="mt-6 p-4 border border-white/5 bg-white/[0.02] text-center font-mono-tech text-xs text-white/40">
            <span className="text-[#00F0FF] font-semibold">PRO TIP:</span> Clicking "DEMO ONE-CLICK ACCESS" opens the live dashboard instantly without typing credentials.
          </div>
        </div>
      </main>

      {/* Bottom Footer */}
      <footer className="relative z-10 w-full px-6 py-4 border-t border-white/10 text-center font-mono-tech text-xs text-white/40 backdrop-blur-md bg-[#08090C]/80">
        &copy; 2026 MOHAMED SAHIB A. PORTFOLIO OS CONTROL PANEL. ALL SYSTEMS OPERATIONAL.
      </footer>
    </div>
  );
};

export default LoginPage;
