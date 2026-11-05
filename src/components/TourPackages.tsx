import { useRef, useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight, Phone } from 'lucide-react';
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
    includes: [],
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
    tagColor: 'from-vintage-400 to-vintage-700',
    includes: ['Family Rooms', 'Pony Ride', 'Shikara'],
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
  {
    slug: 'budget-jk',
    name: 'Budget J&K',
    duration: '3 Days / 2 Nights',
    image: 'https://images.unsplash.com/photo-1609766857041-ed402ea8069a?w=800&q=80',
    destinations: ['Srinagar', 'Gulmarg'],
    groupSize: '2-4',
    rating: '4.6',
    reviews: 320,
    tag: 'Budget',
    tagColor: 'from-teal-500 to-cyan-600',
    includes: ['Hotel', 'Breakfast', 'Cab', 'Sightseeing'],
  },
  {
    slug: 'kashmir-with-katra',
    name: 'Kashmir With Katra',
    duration: '6 Nights / 7 Days',
    image: 'https://res.cloudinary.com/dveg0ai0n/image/upload/v1772188951/katra_w2iqdq.jpg',
    destinations: ['Srinagar', 'Gulmarg', 'Pahalgam', 'Katra'],
    groupSize: '2-8',
    rating: '4.9',
    reviews: 178,
    tag: 'Spiritual',
    tagColor: 'from-amber-500 to-orange-600',
    includes: ['Hotel', 'Cab', 'Vaishno Devi Darshan'],
  },
  {
    slug: 'adventure-explorer',
    name: 'Adventure Explorer',
    duration: '8 Days / 7 Nights',
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80',
    destinations: ['Srinagar', 'Sonmarg', 'Leh', 'Pangong', 'Nubra'],
    groupSize: '2-6',
    rating: '4.9',
    reviews: 156,
    tag: 'Adventure',
    tagColor: 'from-orange-500 to-red-600',
    includes: ['Camp + Hotel', '4x4 Cab', 'Trek'],
  },
];

const featuredPackages = packages.filter(({ slug }) =>
  ['honeymoon-special', 'family-fun', 'budget-jk'].includes(slug)
);

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
      setActiveCard(Math.min(newActive, featuredPackages.length - 1));
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
    <section id="packages" className="relative pt-16 pb-8 sm:pt-24 sm:pb-10 overflow-hidden" style={{ backgroundColor: '#F7F3E9' }}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />

      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 h-96 w-96 rounded-full bg-amber-500/5 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-0 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center justify-center gap-4 sm:gap-6 reveal">
          <h2 className="px-4 text-center font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Tours
          </h2>
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
          {featuredPackages.map((pkg, index) => (
            <div
              key={pkg.name}
              className="group relative flex-none w-[280px] sm:w-[360px] overflow-hidden rounded-3xl bg-white/90 border border-gray-200 transition-all duration-500 hover:border-gray-300 snap-start tap-scale"
              style={{
                transform: activeCard === index ? 'scale(1)' : 'scale(0.98)',
                opacity: activeCard === index ? 1 : 0.8,
                marginRight: index < featuredPackages.length - 1 ? '1rem' : '0',
              }}
            >
              {/* Image */}
              <div className="relative h-44 sm:h-56 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  loading={index === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/30 to-transparent" />
                
                {/* Package name */}
                <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 right-3 sm:right-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-playfair">{pkg.name}</h3>
                </div>
              </div>
              <button
                onClick={() => onRequestCallback(`${pkg.name} Package`)}
                className="m-4 flex w-[calc(100%-2rem)] items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-vintage-500 to-vintage-600 px-4 py-3 text-sm font-bold text-white shadow-lg shadow-vintage-500/20 transition-all hover:shadow-vintage-500/40 active:scale-[0.98] tap-scale btn-ripple"
              >
                <Phone className="h-4 w-4" />
                Request a Call Back
              </button>
            </div>
          ))}
            <Link
              to="/packages"
              aria-label="View all packages"
              title="View all packages"
              className="flex h-12 w-12 flex-none self-center items-center justify-center rounded-full bg-gradient-to-r from-vintage-500 to-vintage-600 text-white shadow-lg shadow-vintage-500/30 transition-all hover:scale-105 hover:shadow-vintage-500/50"
            >
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>

        {/* Mobile Indicators */}
        <div className="mt-4 flex items-center justify-center gap-2 sm:hidden">
          {featuredPackages.map((_, i) => (
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
                  : 'w-2 h-2 bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Swipe hint */}
        <div className="mt-4 sm:mt-6 flex items-center justify-center gap-2 text-xs sm:text-sm text-gray-600">
          <ChevronLeft className="h-4 w-4 swipe-hint sm:hidden" style={{ animationDirection: 'reverse' }} />
          <span className="sm:hidden">Swipe to explore</span>
          <ChevronRight className="h-4 w-4 swipe-hint sm:hidden" />
        </div>

        {/* Flashy Package CTA */}
        <PackageFlashyCTA className="mt-12 sm:mt-16 sm:px-0 px-4" />
      </div>
    </section>
  );
}
