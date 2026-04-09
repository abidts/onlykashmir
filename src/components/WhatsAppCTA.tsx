import { MessageCircle, ArrowRight } from 'lucide-react';

interface Props {
  message: string;
  section?: 'destinations' | 'packages' | 'hotels' | 'adventure';
}

const WHATSAPP_NUMBER = '918899666998';

export default function WhatsAppCTA({ message, section }: Props) {
  const whatsappMessage = encodeURIComponent(
    `Hi Only Kashmir, I'm interested in ${message}. Please share more details.`
  );
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

  return (
    <div className="mt-8 sm:mt-10 reveal">
      <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-r from-emerald-600/10 via-green-600/10 to-emerald-600/10 border border-emerald-500/20 p-4 sm:p-6">
        {/* Animated background glow */}
        <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-emerald-500/20 blur-3xl animate-pulse" />
        <div className="absolute -bottom-24 -left-24 h-48 w-48 rounded-full bg-green-500/20 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

        <div className="relative flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Left side - Message with animated arrow */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Animated arrow */}
            <div className="relative flex-shrink-0">
              <div className="flex items-center gap-1">
                <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6 text-emerald-400 animate-bounce-x" />
                <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6 text-emerald-400 animate-bounce-x" style={{ animationDelay: '0.1s' }} />
                <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6 text-emerald-400 animate-bounce-x" style={{ animationDelay: '0.2s' }} />
              </div>
              {/* Trail effect */}
              <div className="absolute inset-0 flex items-center gap-1 opacity-30">
                <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6 text-emerald-500" />
                <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6 text-emerald-500" />
                <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6 text-emerald-500" />
              </div>
            </div>

            {/* Message */}
            <p className="text-sm sm:text-base text-slate-300 font-medium">
              {message}
            </p>
          </div>

          {/* Right side - WhatsApp button */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex-shrink-0 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-green-500 px-5 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base font-semibold text-white shadow-lg shadow-emerald-500/30 transition-all hover:shadow-emerald-500/50 hover:scale-105 active:scale-95"
          >
            <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:rotate-12" />
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
