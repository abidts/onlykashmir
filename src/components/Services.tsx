import { Package, Hotel, Car, MapPin, Camera, PhoneCall, Sparkles } from 'lucide-react';

interface Props {
  onRequestCallback: (subject?: string) => void;
}

const services = [
  {
    icon: Package,
    title: 'Tour Packages',
    desc: 'Customized packages for honeymoon, family, group tours, and solo adventures.',
    color: 'from-emerald-500 to-emerald-600',
    iconBg: 'bg-emerald-500/10',
    iconColor: 'text-emerald-400',
    shadow: 'hover:shadow-emerald-500/20',
  },
  {
    icon: Hotel,
    title: 'Hotels & Stays',
    desc: 'Handpicked luxury hotels, houseboats, and cozy homestays.',
    color: 'from-sky-500 to-sky-600',
    iconBg: 'bg-sky-500/10',
    iconColor: 'text-sky-400',
    shadow: 'hover:shadow-sky-500/20',
  },
  {
    icon: Car,
    title: 'Rental Cabs',
    desc: 'Premium fleet with experienced local drivers.',
    color: 'from-amber-500 to-amber-600',
    iconBg: 'bg-amber-500/10',
    iconColor: 'text-amber-400',
    shadow: 'hover:shadow-amber-500/20',
  },
  {
    icon: MapPin,
    title: 'Destinations',
    desc: '50+ curated destinations from Gulmarg to Leh.',
    color: 'from-rose-500 to-rose-600',
    iconBg: 'bg-rose-500/10',
    iconColor: 'text-rose-400',
    shadow: 'hover:shadow-rose-500/20',
  },
  {
    icon: Camera,
    title: 'Photography Tours',
    desc: 'Guided tours to capture Kashmir\'s beauty.',
    color: 'from-violet-500 to-violet-600',
    iconBg: 'bg-violet-500/10',
    iconColor: 'text-violet-400',
    shadow: 'hover:shadow-violet-500/20',
  },
  {
    icon: PhoneCall,
    title: 'Request Callback',
    desc: 'Our experts will craft your perfect itinerary.',
    color: 'from-gold to-gold-dark',
    iconBg: 'bg-amber-500/10',
    iconColor: 'text-gold-light',
    shadow: 'hover:shadow-gold/20',
  },
];

export default function Services({ onRequestCallback }: Props) {
  return (
    <section id="services" className="relative py-16 sm:py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] sm:h-[600px] w-[400px] sm:w-[600px] rounded-full bg-emerald-500/5 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto reveal">
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-4 py-1.5 text-sm font-medium text-emerald-400">
            <Sparkles className="h-4 w-4" />
            Our Services
          </span>
          <h2 className="mt-4 font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Everything for a
            <span className="block gradient-text">Perfect Kashmir Trip</span>
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-slate-400 px-4">
            From planning to execution, we handle every detail.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-10 sm:mt-16 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {services.map((service, i) => (
            <div
              key={service.title}
              onClick={() => onRequestCallback(service.title)}
              className={`group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-slate-900/80 border border-slate-800 p-4 sm:p-6 lg:p-8 transition-all duration-500 hover:border-slate-700 cursor-pointer tap-scale ${service.shadow} hover:shadow-2xl`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {/* Glow effect */}
              <div className={`absolute top-0 right-0 h-24 sm:h-32 w-24 sm:w-32 rounded-full ${service.iconBg} blur-2xl opacity-0 transition-opacity group-hover:opacity-50 pointer-events-none`} />
              
              {/* Icon */}
              <div className={`inline-flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl sm:rounded-2xl ${service.iconBg} ${service.iconColor} transition-transform group-hover:scale-110 group-active:scale-95`}>
                <service.icon className="h-6 w-6 sm:h-7 sm:w-7" />
              </div>
              
              {/* Content */}
              <h3 className="mt-4 sm:mt-6 text-base sm:text-xl font-bold text-white">{service.title}</h3>
              <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed line-clamp-3">{service.desc}</p>
              
              {/* CTA - appears on hover for desktop, always visible on mobile */}
              <button
                className={`mt-4 sm:mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${service.color} px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold text-white shadow-lg transition-all sm:opacity-0 sm:translate-y-2 sm:group-hover:opacity-100 sm:group-hover:translate-y-0 tap-scale`}
                onClick={(e) => {
                  e.stopPropagation();
                  onRequestCallback(service.title);
                }}
              >
                <PhoneCall className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                <span className="hidden sm:inline">Request Call Back</span>
                <span className="sm:hidden">Call Back</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
