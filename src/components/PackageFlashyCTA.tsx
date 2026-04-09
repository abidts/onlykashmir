import { MessageCircle, Sparkles, Zap, ArrowRight } from 'lucide-react';

interface Props {
  className?: string;
}

const WHATSAPP_NUMBER = '918899666998';

export default function PackageFlashyCTA({ className = '' }: Props) {
  const whatsappMessage = encodeURIComponent(
    "Hi Only Kashmir, I'm interested in your latest customized Kashmir tour packages. Please share more details."
  );
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

  return (
    <div className={`relative mt-6 sm:mt-20 reveal ${className}`}>
      {/* Glossy/Glassy Animated Card */}
      <div className="relative group overflow-hidden rounded-[2.5rem] bg-slate-900 shadow-2xl border border-white/10 p-8 sm:p-12 transition-all duration-500 hover:border-emerald-500/30">
        
        {/* Animated Background Gradients */}
        <div className="absolute top-0 right-0 h-[400px] w-[400px] bg-emerald-500/10 blur-[100px] animate-pulse pointer-events-none" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] bg-sky-500/10 blur-[100px] animate-pulse pointer-events-none" style={{ animationDelay: '2s' }} />

        {/* Decorative Borders/Lines */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent shadow-[0_0_15px_rgba(16,185,129,0.5)]" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-sky-500/50 to-transparent shadow-[0_0_15px_rgba(56,189,248,0.5)]" />

        <div className="relative z-10 grid lg:grid-cols-[1fr_auto] items-center gap-8 lg:gap-16">
          <div className="text-left">
            {/* Animated Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-2 text-xs sm:text-sm font-bold text-emerald-400 backdrop-blur-sm mb-6 animate-glow-pulse">
              <Zap className="h-4 w-4 fill-emerald-400" />
              <span className="uppercase tracking-widest">Limited Edition Offer</span>
            </div>

            <h2 className="font-playfair text-3xl sm:text-5xl font-bold text-white leading-tight mb-6">
              Latest & <span className="gradient-text-animated">Customized</span><br />
              Tour Packages
            </h2>

            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-xl mb-8">
              Experience the soul of Kashmir with itineraries tailored specifically to your dreams. 
              From hidden gems to luxury retreats, we craft it all.
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sm sm:text-base">
              <span className="flex items-center gap-2 text-amber-400 font-semibold">
                <Sparkles className="h-5 w-5" /> Instant Customization
              </span>
            </div>
          </div>

          <div className="flex flex-col items-center gap-6">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-emerald-500 to-sky-500 px-10 py-5 text-lg font-black text-white shadow-2xl shadow-emerald-500/40 transition-all hover:scale-105 hover:shadow-emerald-500/60 tap-scale animate-fade-in-up"
            >
              <MessageCircle className="h-6 w-6 transition-transform group-hover:rotate-12" />
              <span>Get Itinerary</span>
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              
              {/* Shine effort */}
              <div className="absolute inset-0 w-1/2 h-full bg-white/20 -skew-x-[30deg] -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000" />
            </a>
            
            <p className="text-xs sm:text-sm text-slate-400 font-medium italic flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
              Expert travel consultants online now
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
