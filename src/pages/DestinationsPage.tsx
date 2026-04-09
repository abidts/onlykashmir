import { useState, useRef, useEffect, useContext } from 'react';
import { MapPin, Phone, Star, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getDestinations } from '../services/api';
import WhatsAppCTA from '../components/WhatsAppCTA';
import { CallbackContext } from '../components/Layout';
type Destination = {
  name: string;
  tagline: string;
  image: string;
  desc: string;
  rating: number;
  highlight: string;
  slug: string;
};

export default function DestinationsPage() {
  const onRequestCallback = useContext(CallbackContext) || (() => {});
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    getDestinations().then((data: any) => {
      const normalized = (data || []).map((dest: any) => ({
        name: dest.name,
        tagline: dest.tag || dest.name,
        image: dest.image,
        desc: dest.description || dest.desc || dest.name,
        rating: typeof dest.rating === 'string' ? parseFloat(dest.rating) : dest.rating || 0,
        highlight: dest.tag || 'Popular',
        slug: dest.name.toLowerCase().replace(/\s+/g, '-'),
      }));
      setDestinations(normalized);
    });
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <main className="pt-16 pb-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16">
          {/* Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 sm:gap-6">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-vintage-400/10 border border-vintage-400/20 px-4 py-1.5 text-sm font-medium text-vintage-400">
                <Sparkles className="h-4 w-4" />
                Top Destinations
              </span>
              <h1 className="mt-4 font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Explore Enchanting
                <span className="block gradient-text">Destinations</span>
              </h1>
            </div>
          </div>

          {/* Mobile: Horizontal Scroll, Desktop: Grid */}
          <div
            ref={scrollRef}
            className="mt-8 sm:mt-12 flex lg:grid lg:grid-cols-3 gap-4 sm:gap-6 overflow-x-auto lg:overflow-visible no-scrollbar pb-4 lg:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 snap-x snap-mandatory lg:snap-none"
          >
            {destinations.map((dest, index) => (
              <div
                key={dest.name}
                className="group relative flex-shrink-0 w-[260px] sm:w-[300px] lg:w-auto overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 transition-all duration-500 hover:border-slate-700 snap-start tap-scale"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onTouchStart={() => setHoveredIndex(index)}
              >
                {/* Image with Link to Details Page */}
                <Link to={`/destinations/${dest.slug}`} className="block">
                  <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
                    <img
                      src={dest.image}
                      alt={dest.name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent" />

                    {/* Rating badge */}
                    <div className="absolute top-3 right-3 sm:top-4 sm:right-4 flex items-center gap-1 rounded-full bg-black/50 backdrop-blur-sm px-2.5 py-1 text-sm font-medium text-white">
                      <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                      {dest.rating}
                    </div>

                    {/* Highlight tag */}
                    <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                      <span className="rounded-full bg-vintage-400/90 px-3 py-1 text-[10px] sm:text-xs font-bold text-white">
                        {dest.highlight}
                      </span>
                    </div>

                    {/* Location & tagline */}
                    <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 right-3 sm:right-4">
                      <div className="flex items-center gap-1.5 text-vintage-400 mb-1">
                        <MapPin className="h-3.5 w-3.5" />
                        <span className="text-xs sm:text-sm font-medium">{dest.tagline}</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white">{dest.name}</h3>
                    </div>
                  </div>
                </Link>

                {/* Content */}
                <div className="p-4 sm:p-5">
                  <p className="text-sm text-slate-400 leading-relaxed line-clamp-2">{dest.desc}</p>

                  {/* CTA Button - Opens Popup */}
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      onRequestCallback(`${dest.name} Trip`);
                    }}
                    className={`mt-4 w-full flex items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-semibold transition-all ${
                      hoveredIndex === index
                        ? 'bg-gradient-to-r from-vintage-500 to-vintage-600 text-white shadow-lg shadow-vintage-500/30'
                        : 'bg-vintage-500/10 border border-vintage-500/20 text-vintage-400 hover:bg-vintage-500 hover:text-white hover:border-vintage-500'
                    }`}
                  >
                    <Phone className="h-4 w-4" />
                    Request Call Back
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile swipe hint */}
          <div className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-500 lg:hidden">
            <span className="opacity-80">Swipe to explore destinations</span>
          </div>
        </div>

        {/* WhatsApp CTA */}
        <div className="mt-8 sm:mt-12">
          <WhatsAppCTA message="Latest Destinations & Travel Deals" section="destinations" />
        </div>
      </main>
    </div>
  );
}
