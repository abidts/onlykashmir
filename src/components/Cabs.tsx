import { useRef, useContext } from 'react';
import { Users, Fuel, Settings, Star, Phone, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { CallbackContext } from './Layout';

interface Props {
  showAll?: boolean;
}

const allCabs = [
  {
    name: 'Swift Dzire',
    type: 'Sedan',
    image: 'https://res.cloudinary.com/dveg0ai0n/image/upload/v1771496836/RedComm_-_Hire_Swift_Dzire_for_Tezpur_Kaziranga_Shillong_Cherrapunjee_Swift_Dzire_On_Rent_at_Low_Price_u4ryau.jpg',
    seats: '4',
    fuel: 'Petrol',
    transmission: 'Manual',
    rating: '4.7',
    best: 'City Tours',
    color: 'from-sky-500 to-blue-600',
  },
  {
    name: 'Chevrolet Tavera',
    type: 'MUV',
    image: 'https://res.cloudinary.com/dveg0ai0n/image/upload/v1771522558/Upgraded_Chevrolet_Tavera_will_be_manufactured_at_Halol_Facility_yqgkwv.jpg',
    seats: '7',
    fuel: 'Diesel',
    transmission: 'Manual',
    rating: '4.6',
    best: 'Family Trips',
    color: 'from-emerald-500 to-teal-600',
  },
  {
    name: 'Toyota Etios',
    type: 'Sedan',
    image: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?w=800&q=80',
    seats: '4',
    fuel: 'Diesel',
    transmission: 'Manual',
    rating: '4.7',
    best: 'City & Highway',
    color: 'from-sky-500 to-blue-600',
  },
  {
    name: 'Toyota Camry',
    type: 'Premium Sedan',
    image: 'https://res.cloudinary.com/dveg0ai0n/image/upload/v1771522294/toyota-camry_pb3ph6.jpg',
    seats: '4',
    fuel: 'Petrol/Hybrid',
    transmission: 'Manual',
    rating: '4.8',
    best: 'Business Travel',
    color: 'from-purple-500 to-indigo-600',
  },
  {
    name: 'Toyota Innova',
    type: 'MUV',
    image: 'https://res.cloudinary.com/dveg0ai0n/image/upload/v1771496833/__3_o9yb7c.jpg',
    seats: '7',
    fuel: 'Diesel',
    transmission: 'Manual',
    rating: '4.9',
    best: 'Family Tours',
    color: 'from-emerald-500 to-teal-600',
  },
  {
    name: 'Innova Crysta',
    type: 'MUV',
    image: 'https://res.cloudinary.com/dveg0ai0n/image/upload/v1771496833/__3_o9yb7c.jpg',
    seats: '7',
    fuel: 'Diesel',
    transmission: 'Manual',
    rating: '4.9',
    best: 'Premium Family',
    color: 'from-emerald-500 to-teal-600',
  },
  {
    name: 'Tempo Traveller (17)',
    type: 'Mini Bus',
    image: 'https://images.unsplash.com/photo-1715340614342-899407bed6dd?w=900&q=80&auto=format&fit=crop',
    seats: '17',
    fuel: 'Diesel',
    transmission: 'Manual',
    rating: '4.6',
    best: 'Group Tours',
    color: 'from-amber-500 to-orange-600',
  },
  {
    name: 'Tempo Traveller (20)',
    type: 'Mini Bus',
    image: 'https://images.unsplash.com/photo-1715340614342-899407bed6dd?w=900&q=80&auto=format&fit=crop',
    seats: '20',
    fuel: 'Diesel',
    transmission: 'Manual',
    rating: '4.6',
    best: 'Group Tours',
    color: 'from-amber-500 to-orange-600',
  },
  {
    name: 'Tempo Traveller (26)',
    type: 'Mini Bus',
    image: 'https://images.unsplash.com/photo-1715340614342-899407bed6dd?w=900&q=80&auto=format&fit=crop',
    seats: '26',
    fuel: 'Diesel',
    transmission: 'Manual',
    rating: '4.6',
    best: 'Large Groups',
    color: 'from-amber-500 to-orange-600',
  },
  {
    name: 'Mahindra Thar',
    type: '4x4 SUV',
    image: 'https://res.cloudinary.com/dveg0ai0n/image/upload/v1771496833/_Thar_Transformed__Rugged_Elegance_with_Urban_Vibes__klyzyh.jpg',
    seats: '4',
    fuel: 'Diesel',
    transmission: '4WD',
    rating: '4.8',
    best: 'Off-Road',
    color: 'from-orange-500 to-red-600',
  },
];

const homeCabs = allCabs.filter((cab) =>
  ['Mahindra Thar', 'Toyota Etios', 'Toyota Innova', 'Tempo Traveller (17)'].includes(cab.name)
);

export default function Cabs({ showAll = false }: Props) {
  const onRequestCallback = useContext(CallbackContext) || (() => {});
  const scrollRef = useRef<HTMLDivElement>(null);
  const cabs = showAll ? allCabs : homeCabs;

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.clientWidth < 640 ? 240 : 280;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -cardWidth : cardWidth,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="cabs" className="relative py-16 sm:py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
      
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-amber-500/5 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto reveal">
          <span className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 border border-amber-500/20 px-4 py-1.5 text-sm font-medium text-amber-400">
            <Sparkles className="h-4 w-4" />
            Rental Cabs
          </span>
          <h2 className="mt-4 font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Explore Our Range of
            <span className="block gradient-text">Premium Cabs</span>
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-slate-400 px-4">
            Comfortable vehicles with experienced local drivers.
          </p>
        </div>

        {/* Cabs Horizontal Scroll - Mobile, Grid on large screens */}
        <div
          ref={scrollRef}
          className="mt-2 sm:mt-0 flex lg:grid lg:grid-cols-4 gap-4 sm:gap-6 overflow-x-auto lg:overflow-visible no-scrollbar pb-4 lg:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 snap-x snap-mandatory lg:snap-none"
        >
          {cabs.map((cab) => (
            <div
              key={cab.name}
              className="group relative flex-shrink-0 w-[240px] sm:w-[280px] lg:w-auto overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 transition-all duration-500 hover:border-slate-700 snap-start tap-scale"
            >
              {/* Image */}
              <div className="relative h-40 sm:h-48 overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900">
                <img
                  src={cab.image}
                  alt={cab.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
                
                {/* Type badge */}
                <span className={`absolute top-3 left-3 rounded-full bg-gradient-to-r ${cab.color} px-2.5 py-1 text-[10px] sm:text-xs font-bold text-white`}>
                  {cab.type}
                </span>
                
                {/* Rating */}
                <div className="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-black/50 backdrop-blur-sm px-2 py-0.5">
                  <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                  <span className="text-[10px] sm:text-xs font-medium text-white">{cab.rating}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5">
                <h3 className="text-base sm:text-lg font-bold text-white">{cab.name}</h3>
                <p className="mt-1 text-xs text-emerald-400 font-medium">Best for: {cab.best}</p>

                {/* Specs Grid */}
                <div className="mt-3 sm:mt-4 grid grid-cols-3 gap-2">
                  <div className="flex flex-col items-center rounded-xl bg-slate-800/50 p-2">
                    <Users className="h-4 w-4 text-sky-400" />
                    <span className="mt-1 text-[10px] sm:text-xs text-slate-400">{cab.seats}</span>
                  </div>
                  <div className="flex flex-col items-center rounded-xl bg-slate-800/50 p-2">
                    <Fuel className="h-4 w-4 text-amber-400" />
                    <span className="mt-1 text-[10px] sm:text-xs text-slate-400">{cab.fuel}</span>
                  </div>
                  <div className="flex flex-col items-center rounded-xl bg-slate-800/50 p-2">
                    <Settings className="h-4 w-4 text-emerald-400" />
                    <span className="mt-1 text-[10px] sm:text-xs text-slate-400">{cab.transmission}</span>
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => onRequestCallback(`${cab.name} Cab Rental`)}
                  className="mt-4 w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 px-4 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-white shadow-lg shadow-emerald-500/20 transition-all hover:shadow-emerald-500/40 tap-scale btn-ripple"
                >
                  <Phone className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  Request Call Back
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile swipe hint */}
        <div className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-500 lg:hidden">
          <ChevronLeft className="h-4 w-4 swipe-hint" style={{ animationDirection: 'reverse' }} />
          <span>Swipe to see more cabs</span>
          <ChevronRight className="h-4 w-4 swipe-hint" />
        </div>
      </div>
    </section>
  );
}
