import { useState, useRef, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, Sparkles, ThumbsUp } from 'lucide-react';
import SEO from '../components/SEO';
const reviews = [
  {
    name: 'Rahul Sharma',
    location: 'Delhi',
    avatar: 'RS',
    rating: 5,
    text: 'Absolutely magical experience! ONLY KASHMIR Tour & Travels planned our honeymoon perfectly. From the houseboat stay to the Gulmarg Gondola ride, every moment was unforgettable.',
    trip: 'Honeymoon Special',
    date: 'Mar 2025',
  },
  {
    name: 'Priya Patel',
    location: 'Mumbai',
    avatar: 'PP',
    rating: 5,
    text: 'Best family vacation ever! The team took care of everything. My kids loved the pony rides in Pahalgam and snow play in Gulmarg. Highly recommended!',
    trip: 'Kashmir Bliss',
    date: 'Jan 2025',
  },
  {
    name: 'Amit & Sneha',
    location: 'Bangalore',
    avatar: 'AS',
    rating: 5,
    text: 'The Grand J&K package was worth every penny. Leh Ladakh was a dream come true. The driver was like family by the end of the trip!',
    trip: 'Grand J&K',
    date: 'Apr 2025',
  },
  {
    name: 'Sarah Johnson',
    location: 'London',
    avatar: 'SJ',
    rating: 5,
    text: 'As a solo female traveler, I felt completely safe. The trekking experience was surreal. The campfire nights were the highlight of my India trip.',
    trip: 'Adventure Trek',
    date: 'Sep 2025',
  },
  {
    name: 'Vikram Singh',
    location: 'Jaipur',
    avatar: 'VS',
    rating: 5,
    text: 'Booked a group tour for 12 people. Tempo Traveller was excellent, driver very experienced. All hotels were exactly as promised. Will book again!',
    trip: 'Group Tour',
    date: 'Dec 2025',
  },
];

export default function ReviewsPage() {
  const [current, setCurrent] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const next = () => setCurrent((c) => (c + 1) % reviews.length);
  const prev = () => setCurrent((c) => (c === 0 ? reviews.length - 1 : c - 1));

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, []);

  // Scroll to current on mobile
  useEffect(() => {
    if (scrollRef.current && !isDragging) {
      const cardWidth = scrollRef.current.clientWidth < 640 ? 280 : 360;
      scrollRef.current.scrollTo({
        left: current * cardWidth,
        behavior: 'smooth',
      });
    }
  }, [current, isDragging]);

  // Handle scroll end to update current
  const handleScroll = () => {
    if (scrollRef.current && !isDragging) {
      const cardWidth = scrollRef.current.clientWidth < 640 ? 280 : 360;
      const newCurrent = Math.round(scrollRef.current.scrollLeft / cardWidth);
      if (newCurrent !== current && newCurrent >= 0 && newCurrent < reviews.length) {
        setCurrent(newCurrent);
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <SEO 
        title="Reviews & Testimonials - Happy Travelers"
        description="Read reviews from our happy travelers. See why Only Kashmir is the top choice for Kashmir tours, hotels, and travel packages."
      />
      <main className="pt-16 pb-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 rounded-full bg-vintage-500/10 border border-vintage-500/20 px-4 py-1.5 text-sm font-medium text-vintage-400">
              <Sparkles className="h-4 w-4" />
              Testimonials
            </span>
            <h1 className="mt-4 font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              What Our Travelers
              <span className="block gradient-text">Say About Us</span>
            </h1>
          </div>


          {/* Reviews Carousel */}
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            onTouchStart={() => setIsDragging(true)}
            onTouchEnd={() => setTimeout(() => setIsDragging(false), 100)}
            className="mt-10 sm:mt-12 flex gap-4 sm:gap-6 overflow-x-auto no-scrollbar pb-4 -mx-4 px-4 snap-x snap-mandatory"
          >
            {reviews.map((review, idx) => (
              <div
                key={review.name}
                className={`relative flex-shrink-0 w-[280px] sm:w-[360px] overflow-hidden rounded-3xl bg-slate-900/80 border border-slate-800 p-5 sm:p-6 transition-all duration-500 snap-center ${
                  idx === current ? 'border-vintage-500/30 shadow-lg shadow-vintage-500/10' : ''
                }`}
              >
                {/* Quote icon */}
                <Quote className="absolute top-4 right-4 h-8 w-8 sm:h-10 sm:w-10 text-vintage-500/10" />

                {/* Stars */}
                <div className="flex gap-0.5">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Review text */}
                <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed line-clamp-3 sm:line-clamp-none">
                  &ldquo;{review.text}&rdquo;
                </p>

                {/* Trip tag */}
                <div className="mt-4 rounded-lg bg-vintage-500/10 border border-vintage-500/20 px-3 py-1.5 inline-block">
                  <span className="text-xs text-vintage-400 font-medium">{review.trip}</span>
                </div>

                {/* Author */}
                <div className="mt-4 flex items-center gap-3 border-t border-slate-800 pt-4">
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-gradient-to-br from-vintage-500 to-vintage-400 text-xs sm:text-sm font-bold text-white">
                    {review.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm sm:text-base">{review.name}</div>
                    <div className="text-xs text-slate-400">{review.location} • {review.date}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="mt-6 sm:mt-10 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-slate-800 border border-slate-700 text-white transition-all hover:bg-vintage-500 hover:border-vintage-500 hover:shadow-lg hover:shadow-vintage-500/30 tap-scale"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all tap-scale ${
                    i === current ? 'w-8 bg-vintage-500' : 'w-2 bg-slate-700 hover:bg-slate-600'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-slate-800 border border-slate-700 text-white transition-all hover:bg-vintage-500 hover:border-vintage-500 hover:shadow-lg hover:shadow-vintage-500/30 tap-scale"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

        </div>
      </main>
    </div>
  );
}
