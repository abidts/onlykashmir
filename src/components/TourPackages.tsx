import { useRef, useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Clock, MapPin, Users, Star, Check, Phone, ChevronLeft, ChevronRight, Sparkles, ArrowRight } from 'lucide-react';
import { CallbackContext } from './Layout';
import PackageFlashyCTA from './PackageFlashyCTA';

const packages = [
  {
    slug: 'honeymoon-special',
    name: 'Honeymoon Special',
    duration: '5 Days / 4 Nights',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80',
    destinations: ['Srinagar', 'Gulmarg', 'Pahalgam', 'Sonmarg'],
    groupSize: '2',
    rating: '4.9',
    reviews: 189,
    tag: 'Romantic',
    tagColor: 'from-rose-500 to-pink-600',
    includes: ['Luxury Hotel', 'All Meals', 'Houseboat', 'Gondola'],
  },
  {
    slug: 'family-fun',
    name: 'Family Fun',
    duration: '6 Days / 5 Nights',
    image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?w=800&q=80',
    destinations: ['Srinagar', 'Gulmarg', 'Pahalgam', 'Dal Lake'],
    groupSize: '4-8',
    rating: '4.7',
    reviews: 198,
    tag: 'Family',
    tagColor: 'from-vintage-400 to-blue-600',
    includes: ['Family Rooms', 'All Meals', 'Pony Ride', 'Shikara'],
  },
  {
    slug: 'short-adventure-trip',
    name: 'Short & Adventure Trip',
    duration: '3 Days / 2 Nights',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&q=80',
    destinations: ['Srinagar', 'Gulmarg', 'Tangmarg'],
    groupSize: '2-6',
    rating: '4.8',
    reviews: 164,
    tag: 'Adventure',
    tagColor: 'from-orange-500 to-red-600',
    includes: ['Hotel', 'Meal', 'Transfer', 'Sightseeing', 'Activities'],
  },
];

export default function TourPackages() {
  const onRequestCallback = useContext(CallbackContext) || (() => {});
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeCard, setActiveCard] = useState(0);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft } = scrollRef.current;
      
      // Calculate active card for mobile indicator
      const cardWidth = 300;
      const newActive = Math.round(scrollLeft / cardWidth);
      setActiveCard(Math.min(newActive, packages.length - 1));
    }
  };

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    if (el) {
      el.addEventListener('scroll', checkScroll);
      return () => el.removeEventListener('scroll', checkScroll);
    }
  }, []);

  return (
    <section id="packages" className="relative py-16 sm:py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />

      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 h-96 w-96 rounded-full bg-amber-500/5 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-0 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-start justify-between gap-4 sm:gap-6 reveal">
          <div className="max-w-2xl px-4 sm:px-0">
            <span className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 border border-amber-500/20 px-4 py-1.5 text-sm font-medium text-amber-400">
              <Sparkles className="h-4 w-4" />
              Tour Packages
            </span>
            <h2 className="mt-4 font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Handcrafted Travel
              <span className="block gradient-text">Packages for You</span>
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-slate-400">
              Choose from our curated packages. Contact us for custom itineraries!
            </p>
          </div>
        </div>

        {/* Horizontal Slider */}
        <div className="mt-8 sm:mt-12">
          <div
            ref={scrollRef}
            className="flex overflow-x-auto no-scrollbar pb-4 snap-x snap-mandatory scroll-smooth"
            style={{ 
              WebkitOverflowScrolling: 'touch',
              flexWrap: 'nowrap' as const,
              gap: '1rem',
              paddingLeft: '1rem',
              paddingRight: '1rem',
              marginLeft: '-1rem',
              marginRight: '-1rem',
            }}
          >
          {packages.map((pkg, index) => (
            <div
              key={pkg.name}
              className="group relative flex-none w-[280px] sm:w-[360px] overflow-hidden rounded-3xl bg-slate-900/80 border border-slate-800 transition-all duration-500 hover:border-slate-700 snap-start tap-scale"
              style={{
                transform: activeCard === index ? 'scale(1)' : 'scale(0.98)',
                opacity: activeCard === index ? 1 : 0.8,
                marginRight: index < packages.length - 1 ? '1rem' : '0',
              }}
            >
              <Link 
                to={`/packages/${(pkg as any).slug || pkg.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="absolute inset-0 z-10"
                aria-label={`View details for ${pkg.name} package`}
              />
              {/* Image */}
              <div className="relative h-44 sm:h-56 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent" />
                
                {/* Tag */}
                <span className={`absolute top-3 left-3 sm:top-4 sm:left-4 rounded-full bg-gradient-to-r ${pkg.tagColor} px-3 py-1 text-xs font-bold text-white shadow-lg`}>
                  {pkg.tag}
                </span>
                
                {/* Package name */}
                <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 right-3 sm:right-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-playfair">{pkg.name}</h3>
                </div>
              </div>

              {/* Details */}
              <div className="relative p-4 sm:p-5 pb-16 min-h-[180px] sm:min-h-[200px]">
                {/* Duration & Group */}
                <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-4 w-4 text-vintage-400" />
                    {pkg.duration}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Users className="h-4 w-4 text-vintage-400" />
                    {pkg.groupSize} People
                  </span>
                </div>

                {/* Destinations */}
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {pkg.destinations.slice(0, 3).map((d) => (
                    <span key={d} className="flex items-center gap-1 rounded-full bg-slate-800/80 px-2.5 py-1 text-[10px] sm:text-xs text-slate-300">
                      <MapPin className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-vintage-400" />
                      {d}
                    </span>
                  ))}
                  {pkg.destinations.length > 3 && (
                    <span className="rounded-full bg-slate-800/80 px-2.5 py-1 text-[10px] sm:text-xs text-vintage-400 font-medium">
                      +{pkg.destinations.length - 3} more
                    </span>
                  )}
                </div>

                {/* Includes */}
                <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1">
                  {pkg.includes.map((item) => (
                    <span key={item} className="flex items-center gap-1 text-[10px] sm:text-xs text-slate-400">
                      <Check className="h-3 w-3 text-vintage-400" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Button - Fixed position at bottom */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  onRequestCallback(`${pkg.name} Package`);
                }}
                className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-vintage-500 to-vintage-600 px-4 py-3.5 text-sm font-bold text-white shadow-lg shadow-vintage-500/20 transition-all hover:shadow-vintage-500/40 active:scale-[0.98] tap-scale btn-ripple"
              >
                <Phone className="h-4 w-4" />
                Request a Call Back
              </button>
            </div>
          ))}
          </div>
        </div>

        {/* Mobile Indicators */}
        <div className="mt-4 flex items-center justify-center gap-2 sm:hidden">
          {packages.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                if (scrollRef.current) {
                  const cardWidth = 280;
                  scrollRef.current.scrollTo({
                    left: i * cardWidth,
                    behavior: 'smooth',
                  });
                }
              }}
              className={`transition-all duration-300 rounded-full ${
                i === activeCard
                  ? 'w-6 h-2 bg-vintage-500'
                  : 'w-2 h-2 bg-slate-700'
              }`}
            />
          ))}
        </div>

        {/* Swipe hint */}
        <div className="mt-4 sm:mt-6 flex items-center justify-center gap-2 text-xs sm:text-sm text-slate-500">
          <ChevronLeft className="h-4 w-4 swipe-hint sm:hidden" style={{ animationDirection: 'reverse' }} />
          <span className="sm:hidden">Swipe to explore</span>
          <ChevronRight className="h-4 w-4 swipe-hint sm:hidden" />
        </div>

        {/* View All Packages */}
        <div className="mt-8 text-center">
          <Link
            to="/packages"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-vintage-500 to-vintage-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-vintage-500/30 transition-all hover:shadow-vintage-500/50 hover:scale-105"
          >
            View All Packages
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Flashy Package CTA */}
        <PackageFlashyCTA className="mt-12 sm:mt-16 sm:px-0 px-4" />
      </div>
    </section>
  );
}
