import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import HeroSlider from './components/HeroSlider';
import ScrollToTop from './components/ScrollToTop';
import MobileBottomNav from './components/MobileBottomNav';
import TourPackages from './components/TourPackages';
import SEO from './components/SEO';

export default function App() {
  const [giftCardOpen, setGiftCardOpen] = useState(false);

  // Intersection Observer for reveal animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "Only Kashmir Tours and Travels",
    "description": "Top travel agency in Srinagar & Kashmir. Book top tour packages, explore Kashmir destinations, best places to visit, hotels, houseboats, Dal Lake shikara rides, Gulmarg & enjoy travel!",
    "url": "https://www.onlykashmir.com",
    "telephone": "+91-8899666998",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Srinagar",
      "addressRegion": "Jammu and Kashmir",
      "addressCountry": "IN"
    },
    "priceRange": "₹₹-₹₹₹",
    "areaServed": [
      {
        "@type": "City",
        "name": "Srinagar"
      },
      {
        "@type": "City",
        "name": "Gulmarg"
      },
      {
        "@type": "City",
        "name": "Pahalgam"
      },
      {
        "@type": "City",
        "name": "Sonamarg"
      },
      {
        "@type": "City",
        "name": "Leh Ladakh"
      }
    ]
  };

  return (
    <div className="relative overflow-x-hidden" style={{ backgroundColor: '#F7F3E9' }}>
      <SEO 
        title="Only Kashmir Tours and Travels - Best Travel Agency in Kashmir & Srinagar | Top Tour Packages"
        description="Only Kashmir Tour and Travels - Top Travel Agency in Srinagar & Kashmir. Book top tour packages, explore Kashmir destinations, best places to visit, hotels, houseboats, Dal Lake shikara rides, Gulmarg, Srinagar & enjoy travel!"
        canonical="https://www.onlykashmir.com/"
        schema={homeSchema}
      />
      <HeroSlider />

      <section id="gift-card" className="relative py-16 sm:py-20 lg:py-24" style={{ backgroundColor: '#F7F3E9' }}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(184,141,69,0.10),transparent_45%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12">
            <div className="reveal">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-vintage-500/25 bg-vintage-500/10 px-4 py-2 text-sm font-medium text-vintage-700">
                <span className="h-2.5 w-2.5 rounded-full bg-vintage-500" />
                Gift a Holiday
              </div>

              <h2 className="max-w-xl font-playfair text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
                Travel Gift Voucher for unforgettable Kashmir memories
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-gray-700 sm:text-lg">
                Give someone a journey they’ll remember forever. Because some gifts create memories for a lifetime. Choose a package , send a beautifully designed digital voucher, and let your loved one redeem it at a time that suits them best.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  'Choose a Kashmir package or custom holiday value',
                  'Send it as a digital gift via email or WhatsApp',
                  'Recipient redeems it and plans their travel dates with our team',
                  'Perfect for birthdays, anniversaries, weddings and family celebrations',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl border border-vintage-500/15 bg-white/80 p-4 shadow-sm shadow-vintage-500/5">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-vintage-500 text-xs font-bold text-white">✓</span>
                    <p className="text-sm leading-6 text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative reveal pr-14">
              <div className="relative min-h-[560px] overflow-hidden rounded-[2rem] border border-vintage-500/20 bg-vintage-900 shadow-[0_24px_80px_rgba(48,47,43,0.18)]">
                {!giftCardOpen ? (
                  <div className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden p-8 text-center text-white sm:p-10">
                    <img
                      src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1000&q=85"
                      alt="A scenic view of Kashmir's mountains"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-vintage-900/35 via-vintage-900/55 to-vintage-900/90" />
                    <div className="absolute inset-4 rounded-[1.5rem] border border-white/40 sm:inset-5" />
                    <div className="relative z-10 flex flex-col items-center">
                      <p className="text-xs uppercase tracking-[0.3em] text-vintage-100">Only Kashmir invites you</p>
                      <p className="mt-3 max-w-xs text-xs font-medium tracking-wide text-white/85 sm:text-sm">
                        Travel Gift Voucher for unforgettable Kashmir memories
                      </p>
                      <h3 className="mt-6 max-w-sm font-playfair text-4xl font-bold leading-tight sm:text-5xl">
                        A journey worth unwrapping
                      </h3>
                      <p className="mt-4 max-w-xs text-sm leading-6 text-white/85 sm:text-base">
                        Some gifts are unwrapped. Others become memories that last a lifetime.
                      </p>
                      <button
                        type="button"
                        aria-expanded={giftCardOpen}
                        onClick={() => setGiftCardOpen(true)}
                        className="mt-8 rounded-full border border-white/70 bg-white/15 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/25 focus-visible:outline-white"
                      >
                        Open your Kashmir gift
                      </button>
                      <p className="mt-5 text-xs uppercase tracking-[0.2em] text-white/70">A gift. A getaway. A lifetime of memories.</p>
                    </div>
                  </div>
                ) : (
                  <div className="absolute inset-0 overflow-y-auto bg-[#fbf8f1] p-6 text-gray-900 sm:p-8">
                    <div className="flex flex-col items-center gap-3 border-b border-vintage-500/20 pb-4">
                      <p className="whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.12em] text-vintage-700 sm:text-xs sm:tracking-[0.2em]">Your Gift. Their Kashmir Story.</p>
                      <span className="rounded-full bg-vintage-500/10 px-3 py-1 text-xs font-semibold text-vintage-700">Digital Voucher</span>
                    </div>
                    <div className="py-6 text-center">
                      <p className="text-xs uppercase tracking-[0.25em] text-vintage-600">A Blessed Beginning</p>
                      <h3 className="mt-3 font-playfair text-3xl font-bold text-gray-900 sm:text-4xl">Their Kashmir Story</h3>
                      <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-gray-600">
                        Give someone a journey they’ll remember forever. A beautiful Kashmir escape, gifted with love.
                      </p>
                    </div>

                    <div className="rounded-3xl border border-amber-500/30 bg-white p-5 text-center shadow-sm">
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-vintage-600">A Gift Without Limits</p>
                      <p className="mt-2 font-playfair text-2xl font-bold text-gray-900 sm:text-3xl">Priceless in Love. Limitless in Possibilities.</p>
                      <p className="mt-2 text-sm text-gray-600">Choose a gift amount that matches the size of your heart.</p>
                    </div>

                    <div className="mt-5 space-y-3">
                      {[
                        ['01', 'Choose the Perfect Gift', 'Select a Kashmir holiday package or choose a custom gift amount.'],
                        ['02', 'Make Their Day Special', 'Send a personalised digital gift voucher directly to their email or WhatsApp.'],
                        ['03', 'Let Their Journey Begin', 'They redeem their gift and plan their unforgettable Kashmir getaway with our team.'],
                      ].map(([number, title, description]) => (
                        <div key={number} className="flex items-start gap-3 rounded-2xl border border-vintage-500/10 bg-white/80 p-3">
                          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-vintage-500/10 text-xs font-bold text-vintage-700">{number}</span>
                          <p className="text-sm leading-5 text-gray-700">
                            <strong className="text-gray-900">{title}</strong><br />{description}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-5 grid gap-3 sm:grid-cols-2">
                      <a
                        href="https://wa.me/918899666998?text=Hi%20Only%20Kashmir%2C%20I%20want%20to%20gift%20a%20holiday%20voucher."
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center rounded-full bg-vintage-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-vintage-700"
                      >
                        Gift a Holiday
                      </a>
                      <a
                        href="mailto:info@onlykashmir.com?subject=Travel%20Gift%20Card%20Inquiry"
                        className="inline-flex items-center justify-center rounded-full border border-vintage-500/30 px-4 py-3 text-sm font-semibold text-vintage-700 transition hover:bg-vintage-500/5"
                      >
                        Email Us
                      </a>
                    </div>
                    <button
                      type="button"
                      aria-expanded={giftCardOpen}
                      onClick={() => setGiftCardOpen(false)}
                      className="mt-4 w-full py-2 text-xs font-semibold uppercase tracking-[0.15em] text-vintage-700 underline decoration-vintage-500/40 underline-offset-4"
                    >
                      Close gift voucher
                    </button>
                  </div>
                )}
              </div>
              <Link
                to="/kashmir-travel-gift-vouchers"
                aria-label="Explore our Kashmir travel gift vouchers"
                title="Explore our Kashmir travel gift vouchers"
                className="absolute right-0 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-r from-vintage-500 to-vintage-600 text-white shadow-lg shadow-vintage-500/30 transition-all hover:scale-105 hover:shadow-vintage-500/50"
              >
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <TourPackages />

      {/* Desktop only */}
      <ScrollToTop />

      {/* Mobile Bottom Navigation */}
      <MobileBottomNav />
    </div>
  );
}
