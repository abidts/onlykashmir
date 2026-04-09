import { useState } from 'react';
import { X, ZoomIn, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

const images = [
  { src: 'https://images.unsplash.com/photo-1665034640942-07c4170c2872?w=800&q=80', title: 'Kashmir Bliss', category: 'Lakes' },
  { src: 'https://images.unsplash.com/photo-1568889753852-196c487a536e?w=800&q=80', title: 'Gulmarg Gondola', category: 'Mountains' },
  { src: 'https://images.unsplash.com/photo-1656221077978-7ded95487a98?w=800&q=80', title: 'Tulip Garden', category: 'Gardens' },
  { src: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?w=800&q=80', title: 'Houseboat on Dal Lake', category: 'Lakes' },
  { src: 'https://images.unsplash.com/photo-1694368906722-49decee647be?w=800&q=80', title: 'Pahalgam Valley', category: 'Valleys' },
  { src: 'https://images.unsplash.com/photo-1685555845405-1503f76a5462?w=800&q=80', title: 'Pangong Lake, Ladakh', category: 'Lakes' },
  { src: 'https://images.unsplash.com/photo-1629574494582-54ae9a599656?w=800&q=80', title: 'Sonmarg Meadow', category: 'Valleys' },
  { src: 'https://images.unsplash.com/photo-1642781087094-0430c9390ca3?w=800&q=80', title: 'J&K Trek', category: 'Adventure' },
  { src: 'https://images.unsplash.com/photo-1683434576805-a4f85ea47bbf?w=800&q=80', title: 'Mountain Camping', category: 'Adventure' },
  { src: 'https://images.unsplash.com/photo-1722641277067-a7fba0ad1a59?w=800&q=80', title: 'J&K Campfire', category: 'Adventure' },
  { src: 'https://images.unsplash.com/photo-1704796531503-2ebd32bbaa8c?w=800&q=80', title: 'Snowy Peaks', category: 'Mountains' },
  { src: 'https://res.cloudinary.com/dveg0ai0n/image/upload/v1771610703/Screenshot_2026-02-20_at_11.33.40_PM_gd5eyt.png', title: 'Luxury Travel Experience', category: 'Adventure' },

];

const categories = ['All', 'Lakes', 'Mountains', 'Valleys', 'Adventure'];

export default function Gallery() {
  const [filter, setFilter] = useState('All');
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = filter === 'All' ? images : images.filter((img) => img.category === filter);

  const navigateLightbox = (direction: 'prev' | 'next') => {
    if (lightbox === null) return;
    if (direction === 'prev') {
      setLightbox(lightbox === 0 ? filtered.length - 1 : lightbox - 1);
    } else {
      setLightbox((lightbox + 1) % filtered.length);
    }
  };

  return (
    <section id="gallery" className="relative py-16 sm:py-24 bg-slate-950 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto reveal">
          <span className="inline-flex items-center gap-2 rounded-full bg-violet-500/10 border border-violet-500/20 px-4 py-1.5 text-sm font-medium text-violet-400">
            <Sparkles className="h-4 w-4" />
            Gallery
          </span>
          <h2 className="mt-4 font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Captured Moments of
            <span className="block gradient-text">Pure Paradise</span>
          </h2>
        </div>

        {/* Filters - Horizontal scroll on mobile */}
        <div className="mt-8 sm:mt-10 flex overflow-x-auto no-scrollbar gap-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap sm:justify-center pb-2 sm:pb-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`flex-shrink-0 rounded-full px-4 py-2.5 text-sm font-medium transition-all tap-scale ${
                filter === cat
                  ? 'bg-gradient-to-r from-violet-500 to-purple-600 text-white shadow-lg shadow-violet-500/30'
                  : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid - 2 columns on mobile, masonry-like on desktop */}
        <div className="mt-6 sm:mt-10 grid grid-cols-2 sm:columns-2 lg:columns-3 gap-3 sm:gap-4 sm:block sm:space-y-4">
          {filtered.map((img, i) => (
            <div
              key={img.src + filter}
              className={`group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-800 cursor-pointer transition-all hover:border-slate-700 tap-scale sm:break-inside-avoid sm:mb-4 ${
                // Vary heights on mobile for visual interest
                i % 3 === 0 ? 'aspect-square' : i % 3 === 1 ? 'aspect-[4/5]' : 'aspect-[3/4]'
              } sm:aspect-auto`}
              onClick={() => setLightbox(i)}
            >
              <img
                src={img.src}
                alt={img.title}
                className={`w-full h-full sm:h-auto object-cover transition-transform duration-700 group-hover:scale-110 ${
                  i % 3 === 0 ? 'sm:h-64' : i % 3 === 1 ? 'sm:h-80' : 'sm:h-56'
                }`}
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-slate-950/60 opacity-0 transition-opacity group-hover:opacity-100 sm:group-hover:opacity-100">
                <div className="text-center p-4">
                  <ZoomIn className="mx-auto h-6 w-6 sm:h-8 sm:w-8 text-white mb-2" />
                  <p className="text-xs sm:text-sm font-medium text-white">{img.title}</p>
                  <span className="text-[10px] sm:text-xs text-violet-400">{img.category}</span>
                </div>
              </div>
              {/* Mobile: Always show title at bottom */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-950/90 to-transparent p-3 sm:hidden">
                <p className="text-xs font-medium text-white truncate">{img.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 animate-fade-in"
          onClick={() => setLightbox(null)}
        >
          {/* Close button */}
          <button 
            className="absolute top-4 right-4 sm:top-6 sm:right-6 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition tap-scale z-10"
            onClick={() => setLightbox(null)}
          >
            <X className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
          
          {/* Navigation arrows */}
          <button 
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition tap-scale z-10"
            onClick={(e) => {
              e.stopPropagation();
              navigateLightbox('prev');
            }}
          >
            <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
          <button 
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition tap-scale z-10"
            onClick={(e) => {
              e.stopPropagation();
              navigateLightbox('next');
            }}
          >
            <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
          
          {/* Image */}
          <img
            src={filtered[lightbox].src}
            alt={filtered[lightbox].title}
            className="max-h-[75vh] sm:max-h-[85vh] max-w-[90vw] rounded-2xl sm:rounded-3xl object-contain shadow-2xl animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          />
          
          {/* Caption */}
          <div className="absolute bottom-6 sm:bottom-8 text-center animate-fade-in-up">
            <p className="text-base sm:text-lg font-semibold text-white">{filtered[lightbox].title}</p>
            <p className="text-sm text-violet-400">{filtered[lightbox].category}</p>
            <p className="text-xs text-slate-500 mt-1">{lightbox + 1} / {filtered.length}</p>
          </div>
        </div>
      )}
    </section>
  );
}
