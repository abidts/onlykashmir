import { Phone, Mail, MapPin, ArrowRight, Instagram, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

const quickLinks = [
  { label: 'About Us', to: '/about' },
  { label: 'Tour Packages', to: '/packages' },
  { label: 'Gift Vouchers', to: '/kashmir-travel-gift-vouchers' },
  { label: 'Destinations', to: '/destinations' },
  { label: 'Contact', to: '/contact' },
];

const destinations = [
  { label: 'Srinagar', to: '/destinations/srinagar' },
  { label: 'Gulmarg', to: '/destinations/gulmarg' },
  { label: 'Pahalgam', to: '/destinations/pahalgam' },
  { label: 'Sonmarg', to: '/destinations/sonmarg' },
  { label: 'Leh Ladakh', to: '/destinations/leh-ladakh' },
  { label: 'Dal Lake', to: '/destinations/dal-lake' },
];

export default function Footer() {
  return (
    <footer
      className="relative border-t border-vintage-700/50 pb-24 lg:pb-0"
      style={{ background: 'linear-gradient(110deg, #29434A, #5D8580, #B8C8B2)' }}
    >
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 pb-8 pt-8 sm:px-6 sm:pb-12 sm:pt-10 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-1">
            <Link
              to="/"
              aria-label="Only Kashmir Tour & Travels home"
              className="group mb-4 flex w-fit flex-col items-start leading-none text-black/80 transition-colors hover:text-black"
            >
              <span className="font-playfair text-xl sm:text-2xl font-bold uppercase tracking-wide">
                Only Kashmir
              </span>
              <span className="mt-1.5 flex items-center gap-2 text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.28em]">
                <span className="h-px w-4 bg-current opacity-60 transition-all group-hover:w-6" />
                Tour &amp; Travels
                <span className="h-px w-4 bg-current opacity-60 transition-all group-hover:w-6" />
              </span>
            </Link>
            <p className="text-sm text-black/80 leading-relaxed max-w-xs">
              Your premier travel partner for exploring Kashmir. Creating unforgettable memories since 2025.
            </p>
            <div className="mt-4 pt-4 border-t border-vintage-700/50">
              <div className="flex items-center gap-4">
                <img
                  src="https://res.cloudinary.com/dveg0ai0n/image/upload/v1772117700/Screenshot_2026-02-26_at_8.16.12_PM_pi0otz.png"
                  alt="J&K Tourism"
                  loading="lazy"
                  decoding="async"
                  className="h-10 sm:h-12 w-auto object-contain"
                />
                <img
                  src="https://res.cloudinary.com/dveg0ai0n/image/upload/v1772117701/Screenshot_2026-02-26_at_8.16.48_PM_ksbx9i.png"
                  alt="Ministry of Tourism, Government of India"
                  loading="lazy"
                  decoding="async"
                  className="h-10 sm:h-12 w-auto object-contain"
                />
              </div>
              <p className="mt-2 text-xs text-black/70">
                Registered with Department of Tourism
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-black mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="flex items-center gap-2 text-sm text-black/80 hover:text-black transition-colors group"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                    <span className="group-hover:translate-x-1 transition-transform">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="font-semibold text-black mb-4">Destinations</h4>
            <ul className="space-y-2.5">
              {destinations.map((dest) => (
                <li key={dest.label}>
                  <Link
                    to={dest.to}
                    className="flex items-center gap-2 text-sm text-black/80 hover:text-black transition-colors group"
                  >
                    <MapPin className="h-3 w-3 text-vintage-500/50 group-hover:text-vintage-500 transition-colors" />
                    {dest.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 sm:col-span-1">
            <h4 className="font-semibold text-black mb-4">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-vintage-500 mt-0.5 shrink-0" />
                <span className="text-sm text-black/80">Bemina, Srinagar, J&K, 190018</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-vintage-500 shrink-0" />
                <a href="tel:+918899666998" className="text-sm text-black/80 hover:text-black transition-colors">+91 88996 66998</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-vintage-500 shrink-0" />
                <a href="tel:+919596224042" className="text-sm text-black/80 hover:text-black transition-colors">+91 95962 24042</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-vintage-500 shrink-0" />
                <a href="mailto:info@onlykashmir.com" className="text-sm text-black/80 hover:text-black transition-colors break-all">info@onlykashmir.com</a>
              </li>
            </ul>
            
            {/* Social Media Links - Mobile Prominent */}
            <div className="mt-6 pt-4 border-t border-vintage-700/50">
              <h4 className="font-semibold text-black mb-3 text-sm">Follow Us</h4>
              <div className="flex gap-3">
                <a
                  href="https://www.instagram.com/onlykashmirtourandtravels/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 text-white shadow-lg hover:shadow-pink-500/30 transition-all hover:scale-110 tap-scale"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61591604585922"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg hover:shadow-blue-500/30 transition-all hover:scale-110 tap-scale"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-vintage-700/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-3">
          <p className="text-[10px] sm:text-xs text-black/70 text-center sm:text-left">
            © 2026 All rights reserved.
          </p>
          <p className="text-[10px] sm:text-xs text-black/70">
            Powered By <a
              href="https://www.ennbi.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-black/70 transition-colors font-medium"
            >
              Ennbi Softwares
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
