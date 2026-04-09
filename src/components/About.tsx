import { Mountain, MapPin, Compass, Shield, Phone } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="min-h-screen bg-slate-950 text-white py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div className="space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full bg-vintage-500/10 border border-vintage-500/20 px-4 py-1.5 text-sm font-medium text-vintage-400">
              Our Story, Your Journey
            </span>
            <h1 className="font-playfair text-4xl sm:text-5xl font-bold leading-tight">
              ONLY KASHMIR Tour &amp; Travels
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              ONLY KASHMIR Tour &amp; Travels is a premier travel agency dedicated to showcasing the unparalleled beauty of Kashmir. With years of experience and a passion for our land, we provide curated travel experiences that stay with you forever.
            </p>
          </div>

          {/* Stat Card */}
          <div className="relative rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-8 shadow-2xl overflow-hidden">
            <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-vintage-500/10 blur-3xl" />
            <div className="absolute -bottom-16 -left-10 h-32 w-32 rounded-full bg-vintage-400/10 blur-3xl" />
            <div className="relative grid grid-cols-2 gap-4">
              {[
                { icon: Mountain, label: 'Kashmir Experts', value: 'Local team' },
                { icon: MapPin, label: 'Curated Spots', value: 'Hidden gems' },
                { icon: Compass, label: 'Tailored Plans', value: 'Custom trips' },
                { icon: Shield, label: 'Trusted Service', value: 'Since 2025' },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 flex gap-3 items-center">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-vintage-500/10 text-vintage-400">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">{item.label}</p>
                    <p className="font-semibold text-white">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Content blocks */}
        <div className="mt-12 sm:mt-16 grid lg:grid-cols-3 gap-6 sm:gap-8">
          {[
            {
              title: 'Local Roots',
              text: 'Born in Kashmir, we share the stories, culture, and landscapes only locals know.',
            },
            {
              title: 'Curated Journeys',
              text: 'From serene houseboats to alpine adventures, every itinerary is handcrafted for you.',
            },
            {
              title: 'Memories that Stay',
              text: 'We focus on meaningful experiences so your trip lives on long after you leave.',
            },
          ].map((card) => (
            <div key={card.title} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-lg shadow-black/20">
              <h3 className="text-xl font-semibold text-white mb-2">{card.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm sm:text-base">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
