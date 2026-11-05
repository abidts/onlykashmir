import { useEffect } from 'react';
import HeroSlider from './components/HeroSlider';
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
    <div className="relative overflow-x-hidden" style={{ backgroundColor: '#F7F3E9' }}>
      <SEO 
        title="Only Kashmir Tours and Travels - Best Travel Agency in Kashmir & Srinagar | Top Tour Packages"
        description="Only Kashmir Tour and Travels - Top Travel Agency in Srinagar & Kashmir. Book top tour packages, explore Kashmir destinations, best places to visit, hotels, houseboats, Dal Lake shikara rides, Gulmarg, Srinagar & enjoy travel!"
        canonical="https://www.onlykashmir.com/"
        schema={homeSchema}
      />
      <HeroSlider />
      
      <TourPackages />

      {/* Desktop only */}
      <ScrollToTop />

      {/* Mobile Bottom Navigation */}
      <MobileBottomNav />
    </div>
  );
}
