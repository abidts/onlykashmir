import { useState } from 'react';
import { Phone, Mail, MapPin, ArrowRight, Send, CheckCircle, Loader2, Instagram, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';
import LogoMark from './LogoMark';

const quickLinks = [
  { label: 'About Us', to: '/about' },
  { label: 'Tour Packages', to: '/packages' },
  { label: 'Destinations', to: '/destinations' },
  { label: 'Adventure', to: '/adventure' },
  { label: 'Gallery', to: '/gallery' },
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
  const [email, setEmail] = useState('');
  const [subscribing, setSubscribing] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || subscribing) return;

    setSubscribing(true);

    try {
      const response = await fetch('https://formsubmit.co/ajax/info@onlykashmir.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          email: email,
          subject: 'New Email Subscription',
          message: `This email has subscribed to your newsletter: ${email}`,
          _subject: 'Only Kashmir – New Newsletter Subscriber',
          _template: 'table',
          _captcha: 'false',
          _next: 'false',
        }),
      });

      if (response.ok) {
        setSubscribed(true);
        setEmail('');
        setTimeout(() => setSubscribed(false), 3000);
      }
    } catch (error) {
      console.error('Subscription failed:', error);
    } finally {
      setSubscribing(false);
    }
  };

  return (
    <footer className="relative bg-vintage-900 border-t border-vintage-700/50 pb-24 lg:pb-0">
      {/* Newsletter CTA */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-r from-vintage-500 via-vintage-600 to-vintage-700 p-6 sm:p-8 lg:p-12 -translate-y-12 sm:-translate-y-16">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 h-48 sm:h-64 w-48 sm:w-64 rounded-full bg-white/10 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 h-32 sm:h-48 w-32 sm:w-48 rounded-full bg-white/5 blur-3xl pointer-events-none" />

          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <h3 className="font-playfair text-2xl sm:text-3xl font-bold text-white">Start Your Kashmir Journey</h3>
              <p className="mt-2 text-sm sm:text-base text-vintage-50/90 max-w-md">
                Subscribe for exclusive deals and travel tips.
              </p>
            </div>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                disabled={subscribing || subscribed}
                className="rounded-xl sm:rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 px-5 py-3.5 text-white placeholder:text-white/60 outline-none focus:bg-white/30 transition w-full sm:w-64 lg:w-72 text-base disabled:opacity-60"
              />
              <button
                type="submit"
                disabled={subscribing || subscribed}
                className="flex items-center justify-center gap-2 rounded-xl sm:rounded-2xl bg-white px-6 py-3.5 font-semibold text-vintage-700 transition-all hover:bg-vintage-50 tap-scale shrink-0 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {subscribing ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : subscribed ? (
                  <>
                    <CheckCircle className="h-4 w-4" />
                    Subscribed!
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Subscribe
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12 -mt-4">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-1">
            <a href="#home" className="flex items-center gap-2 group">
              <div className="transition-transform group-hover:scale-110">
                <LogoMark size={120} />
              </div>
              <div>
                <span className="block font-playfair text-lg font-bold text-white">ONLY KASHMIR</span>
                <span className="block font-dancing text-sm text-vintage-500 -mt-0.5">Tour & Travels</span>
              </div>
            </a>
            <p className="mt-4 text-sm text-slate-400 leading-relaxed max-w-xs">
              Your premier travel partner for exploring Kashmir. Creating unforgettable memories since 2025.
            </p>
            <div className="mt-4 pt-4 border-t border-vintage-700/50">
              <div className="flex items-center gap-4">
                <img
                  src="https://res.cloudinary.com/dveg0ai0n/image/upload/v1772117700/Screenshot_2026-02-26_at_8.16.12_PM_pi0otz.png"
                  alt="J&K Tourism"
                  className="h-10 sm:h-12 w-auto object-contain"
                />
                <img
                  src="https://res.cloudinary.com/dveg0ai0n/image/upload/v1772117701/Screenshot_2026-02-26_at_8.16.48_PM_ksbx9i.png"
                  alt="Ministry of Tourism, Government of India"
                  className="h-10 sm:h-12 w-auto object-contain"
                />
              </div>
              <p className="mt-2 text-xs text-slate-500">
                Registered with Department of Tourism
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="flex items-center gap-2 text-sm text-slate-400 hover:text-emerald-400 transition-colors group"
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
            <h4 className="font-semibold text-white mb-4">Destinations</h4>
            <ul className="space-y-2.5">
              {destinations.map((dest) => (
                <li key={dest.label}>
                  <Link
                    to={dest.to}
                    className="flex items-center gap-2 text-sm text-slate-400 hover:text-vintage-500 transition-colors group"
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
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-vintage-500 mt-0.5 shrink-0" />
                <span className="text-sm text-slate-400">Bemina, Srinagar, J&K, 190018</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-vintage-500 shrink-0" />
                <a href="tel:+918899666998" className="text-sm text-slate-400 hover:text-vintage-500 transition-colors">+91 88996 66998</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-vintage-500 shrink-0" />
                <a href="tel:+919596224042" className="text-sm text-slate-400 hover:text-vintage-500 transition-colors">+91 95962 24042</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-vintage-500 shrink-0" />
                <a href="mailto:info@onlykashmir.com" className="text-sm text-slate-400 hover:text-vintage-500 transition-colors break-all">info@onlykashmir.com</a>
              </li>
            </ul>
            
            {/* Social Media Links - Mobile Prominent */}
            <div className="mt-6 pt-4 border-t border-vintage-700/50">
              <h4 className="font-semibold text-white mb-3 text-sm">Follow Us</h4>
              <div className="flex gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 text-white shadow-lg hover:shadow-pink-500/30 transition-all hover:scale-110 tap-scale"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://facebook.com"
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
          <p className="text-[10px] sm:text-xs text-slate-500 text-center sm:text-left">
            © 2026 ONLY KASHMIR Tour & Travels.
          </p>
          <p className="text-[10px] sm:text-xs text-slate-500">
            Powered By <a
              href="https://www.ennbi.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-vintage-400 hover:text-vintage-300 transition-colors font-medium"
            >
              Ennbi Softwares
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
