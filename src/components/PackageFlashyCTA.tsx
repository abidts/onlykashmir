import { MessageCircle, ArrowRight } from 'lucide-react';

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
    <div className={`mt-6 sm:mt-12 reveal ${className}`}>
      <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-center sm:text-left">
        <h2 className="font-playfair text-xl sm:text-2xl font-bold text-gray-900">
          Latest & Customized Tour Packages
        </h2>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-vintage-900 to-vintage-700 px-5 py-3 text-sm font-bold text-white shadow-lg transition-all hover:scale-105 tap-scale"
        >
          <MessageCircle className="h-5 w-5" />
          <span>Get Itinerary</span>
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}
