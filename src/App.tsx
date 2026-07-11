import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import HeroSlider from './components/HeroSlider';
import Cabs from './components/Cabs';
import Hotels from './components/Hotels';
import ContactSection from './components/ContactSection';
import ScrollToTop from './components/ScrollToTop';
import MobileBottomNav from './components/MobileBottomNav';
import TourPackages from './components/TourPackages';
import SEO from './components/SEO';

export default function App() {
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
    <div className="relative overflow-x-hidden bg-slate-950">
      <SEO 
        title="Only Kashmir Tours and Travels - Best Travel Agency in Kashmir & Srinagar | Top Tour Packages"
        description="Only Kashmir Tour and Travels - Top Travel Agency in Srinagar & Kashmir. Book top tour packages, explore Kashmir destinations, best places to visit, hotels, houseboats, Dal Lake shikara rides, Gulmarg, Srinagar & enjoy travel!"
        canonical="https://www.onlykashmir.com/"
        schema={homeSchema}
      />
      <HeroSlider />
      
      <TourPackages />

      <Cabs />
      <div className="bg-slate-900 pb-16 text-center">
        <Link
          to="/cabs"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-vintage-500 to-vintage-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-vintage-500/30 transition-all hover:shadow-vintage-500/50 hover:scale-105"
        >
          View All Cabs
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <section className="py-16 sm:py-24 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-playfair">
              Premium Hotels & Stays
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto text-lg">
              Luxury hotels, houseboats, and resorts for an unforgettable Kashmir experience
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-orange-400 mx-auto rounded-full mt-4" />
          </div>
          <Hotels showViewAll={false} />
          <div className="mt-8 text-center">
            <Link
              to="/hotels"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-vintage-500 to-vintage-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-vintage-500/30 transition-all hover:shadow-vintage-500/50 hover:scale-105"
            >
              View All Hotels
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <ContactSection />

      {/* Desktop only */}
      <ScrollToTop />

      {/* Mobile Bottom Navigation */}
      <MobileBottomNav />
    </div>
  );
}
