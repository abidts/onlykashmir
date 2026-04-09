import React, { useState } from 'react';
import { MessageCircle, ArrowRight, Sparkles, Zap } from 'lucide-react';
import WhatsAppPopup from './WhatsAppPopup';

interface GetItineraryProps {
  className?: string;
  variant?: 'full' | 'half';
}

const GetItinerary: React.FC<GetItineraryProps> = ({ className = '', variant = 'full' }) => {
  const [isWhatsAppOpen, setIsWhatsAppOpen] = useState(false);
  const isHalf = variant === 'half';

  return (
    <>
      <section className={`relative overflow-hidden bg-gradient-to-br from-slate-900 via-[#0f172a] to-[#1a2332] py-16 md:py-24 ${className}`}>
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-sky-500 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className={`${isHalf ? 'max-w-xl mx-auto' : ''}`}>
            {isHalf ? (
              /* Half Width Layout - Centered */
              <div className="text-center space-y-8">
                {/* Limited Edition Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 backdrop-blur-sm">
                  <Zap className="w-4 h-4 text-emerald-400" />
                  <span className="text-sm font-semibold text-emerald-400 tracking-wide">
                    LIMITED EDITION OFFER
                  </span>
                </div>

                {/* Main Heading */}
                <div>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-playfair font-bold leading-tight">
                    <span className="text-white">Latest & </span>
                    <span className="gradient-text">Customized</span>
                  </h2>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-playfair font-bold text-white mt-2">
                    Tour Packages
                  </h2>
                </div>

                {/* Description */}
                <p className="text-sm md:text-base text-slate-300 leading-relaxed">
                  Experience the soul of Kashmir with itineraries tailored specifically to your dreams. 
                  From hidden gems to luxury retreats, we craft it all.
                </p>

                {/* Features */}
                <div className="flex flex-wrap justify-center gap-6">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-amber-500/20">
                      <Sparkles className="w-5 h-5 text-amber-400" />
                    </div>
                    <span className="text-amber-400 font-medium">Instant Customization</span>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="flex flex-col items-center space-y-4 pt-4">
                  <button
                    onClick={() => setIsWhatsAppOpen(true)}
                    className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-sky-500 text-white font-semibold text-base shadow-2xl shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all duration-300 hover:scale-105 active:scale-95"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Get Itinerary</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    
                    {/* Glow effect */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-400 to-sky-400 opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300"></div>
                  </button>

                  {/* Online Status */}
                  <p className="text-slate-400 text-sm italic flex items-center gap-2">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                    </span>
                    Expert travel consultants online now
                  </p>
                </div>
              </div>
            ) : (
              /* Full Width Layout - Two Column */
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div className="space-y-8">
                  {/* Limited Edition Badge */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 backdrop-blur-sm">
                    <Zap className="w-4 h-4 text-emerald-400" />
                    <span className="text-sm font-semibold text-emerald-400 tracking-wide">
                      LIMITED EDITION OFFER
                    </span>
                  </div>

                  {/* Main Heading */}
                  <div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold leading-tight">
                      <span className="text-white">Latest & </span>
                      <span className="gradient-text">Customized</span>
                    </h2>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white mt-2">
                      Tour Packages
                    </h2>
                  </div>

                  {/* Description */}
                  <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-xl">
                    Experience the soul of Kashmir with itineraries tailored specifically to your dreams. 
                    From hidden gems to luxury retreats, we craft it all.
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-6">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-amber-500/20">
                        <Sparkles className="w-5 h-5 text-amber-400" />
                      </div>
                      <span className="text-amber-400 font-medium">Instant Customization</span>
                    </div>
                  </div>
                </div>

                {/* Right Content - CTA Button */}
                <div className="flex flex-col items-center lg:items-end space-y-4">
                  {/* Get Itinerary Button */}
                  <button
                    onClick={() => setIsWhatsAppOpen(true)}
                    className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500 to-sky-500 text-white font-semibold text-lg shadow-2xl shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all duration-300 hover:scale-105 active:scale-95"
                  >
                    <MessageCircle className="w-6 h-6" />
                    <span>Get Itinerary</span>
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                    
                    {/* Glow effect */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-400 to-sky-400 opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300"></div>
                  </button>

                  {/* Online Status */}
                  <p className="text-slate-400 text-sm italic flex items-center gap-2">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                    </span>
                    Expert travel consultants online now
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* WhatsApp Popup */}
      {isWhatsAppOpen && (
        <WhatsAppPopup
          isOpen={isWhatsAppOpen}
          onClose={() => setIsWhatsAppOpen(false)}
          message="Hi! I'm interested in getting a customized itinerary for Kashmir."
        />
      )}
    </>
  );
};

export default GetItinerary;
