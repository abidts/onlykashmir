import { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';
import LogoMark from './LogoMark';

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(timer);
          return 100;
        }
        return p + 2;
      });
    }, 40);

    setTimeout(() => setShowText(true), 300);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-slate-950 overflow-hidden">
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-vintage-700/10 blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full bg-vintage-400/10 blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-gold/5 blur-3xl animate-pulse" />
      </div>

      {/* Sparkles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <Sparkles
            key={i}
            className="absolute text-vintage-500/30 animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${8 + Math.random() * 16}px`,
              height: `${8 + Math.random() * 16}px`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Main Logo */}
      <div className="relative z-10">
        {/* Rotating ring */}
        <div className="absolute inset-0 -m-8 rounded-full border-2 border-dashed border-vintage-500/20 animate-spin-slow" />
        <div className="absolute inset-0 -m-4 rounded-full border border-vintage-400/20 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '15s' }} />

        {/* Pulsing glow */}
        <div className="absolute inset-0 rounded-full bg-vintage-500/20 animate-ping" style={{ animationDuration: '1.5s' }} />

        {/* Logo container */}
        <div className="relative flex h-44 w-44 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm shadow-2xl animate-glow-pulse">
          <LogoMark size={150} />
        </div>
      </div>

      {/* Brand text */}
      <div className={`mt-10 text-center transition-all duration-700 ${showText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-white tracking-wide">
          ONLY KASHMIR <span className="gradient-text">Tour & Travels</span>
        </h2>
        <p className="mt-2 font-dancing text-xl text-vintage-500">Paradise on Earth</p>
      </div>

      {/* Progress bar */}
      <div className="mt-10 w-64 sm:w-80 relative z-10">
        <div className="h-1.5 overflow-hidden rounded-full bg-slate-800">
          <div 
            className="h-full rounded-full bg-gradient-to-r from-vintage-500 via-vintage-600 to-vintage-500 transition-all duration-100 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="mt-3 flex items-center justify-between text-xs text-slate-500">
          <span>Loading your journey...</span>
          <span className="font-mono text-vintage-500">{progress}%</span>
        </div>
      </div>

      {/* Loading tips */}
      <div className={`mt-8 text-center transition-all duration-700 delay-500 ${showText ? 'opacity-100' : 'opacity-0'}`}>
        <p className="text-sm text-slate-500 max-w-xs mx-auto px-4">
          ✨ Preparing the most beautiful destinations in J&K for you
        </p>
      </div>
    </div>
  );
}
