import { useContext } from 'react';
import { Mountain, Flame, Truck, Tent, Compass, Phone, Sparkles } from 'lucide-react';
import { CallbackContext } from '../components/Layout';
import WhatsAppCTA from '../components/WhatsAppCTA';

const adventures = [
  {
    icon: Mountain,
    title: 'Trekking',
    desc: 'Trek through the Great Lakes and stunning J&K Alpine meadows with expert guides.',
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80',
    difficulty: 'Moderate',
    duration: '3-7 Days',
    color: 'from-vintage-500 to-vintage-600',
  },
  {
    icon: Flame,
    title: 'Camp Fire',
    desc: 'Magical evenings under star-lit skies with bonfires, Kahwa, and local music.',
    image: 'https://images.unsplash.com/photo-1475483768296-6163e08872a1?w=800&q=80',
    difficulty: 'Easy',
    duration: '1 Night',
    color: 'from-orange-500 to-red-600',
  },
  {
    icon: Truck,
    title: 'Off Road',
    desc: 'Conquer rugged terrains of Ladakh and Zoji La pass in 4x4 vehicles.',
    image: 'https://res.cloudinary.com/dveg0ai0n/image/upload/v1771576292/Jeep_Overland_h2qzjg.jpg',
    difficulty: 'Hard',
    duration: '2-5 Days',
    color: 'from-amber-500 to-orange-600',
  },
  {
    icon: Tent,
    title: 'Camping',
    desc: 'Luxury camping at Sonamarg meadows and beside pristine mountain streams.',
    image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&q=80',
    difficulty: 'Easy',
    duration: '1-3 Nights',
    color: 'from-vintage-400 to-blue-600',
  },
  {
    icon: Compass,
    title: 'Exploring',
    desc: 'Discover hidden waterfalls, secret valleys, and untouched villages.',
    image: 'https://images.unsplash.com/photo-1682686581854-5e71f58e7e3f?w=800&q=80',
    difficulty: 'Moderate',
    duration: '1-4 Days',
    color: 'from-violet-500 to-purple-600',
  },
];

export default function AdventurePage() {
  const onRequestCallback = useContext(CallbackContext) || (() => {});

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <main className="pt-16 pb-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 rounded-full bg-rose-500/10 border border-rose-500/20 px-4 py-1.5 text-sm font-medium text-rose-400">
              <Sparkles className="h-4 w-4" />
              Adventure Travel
            </span>
            <h1 className="mt-4 font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Unleash Your Inner
              <span className="block gradient-text">Adventurer</span>
            </h1>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-slate-400 px-4">
              Push your boundaries with thrilling outdoor experiences.
            </p>
          </div>

          {/* Adventures Grid */}
          <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {adventures.map((adv) => (
              <div
                key={adv.title}
                className="group relative overflow-hidden rounded-3xl border border-slate-800 transition-all duration-500 hover:border-slate-700 tap-scale"
              >
                {/* Image */}
                <div className="relative h-64 sm:h-80 overflow-hidden">
                  <img
                    src={adv.image}
                    alt={adv.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />

                  {/* Icon badge */}
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl glass text-white transition-transform group-hover:scale-110">
                    <adv.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>

                  {/* Content overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                    {/* Tags */}
                    <div className="flex items-center gap-2 mb-2 sm:mb-3">
                      <span className={`rounded-full bg-gradient-to-r ${adv.color} px-2.5 py-0.5 text-[10px] sm:text-xs font-bold text-white`}>
                        {adv.difficulty}
                      </span>
                      <span className="rounded-full bg-white/10 backdrop-blur-sm px-2.5 py-0.5 text-[10px] sm:text-xs font-medium text-white">
                        {adv.duration}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-white font-playfair">{adv.title}</h3>
                    <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-2">{adv.desc}</p>
                  </div>
                </div>

                {/* CTA Button - Opens Popup */}
                <div className="p-4 sm:p-5 pt-0">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      onRequestCallback(`${adv.title} Adventure`);
                    }}
                    className="mt-3 sm:mt-4 flex items-center justify-center gap-2 w-full rounded-xl bg-vintage-500/10 border border-vintage-500/30 px-4 py-2.5 text-xs sm:text-sm font-medium text-vintage-400 transition-all hover:bg-vintage-500 hover:text-white hover:border-vintage-500 tap-scale"
                  >
                    <Phone className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    Request Call Back
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* WhatsApp CTA */}
          <WhatsAppCTA message="Latest Adventure Activities & Offbeat Experiences" section="adventure" />
        </div>
      </main>
    </div>
  );
}
