import { useContext } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import LocationMap from './LocationMap';
import { CallbackContext } from './Layout';

export default function ContactSection() {
  const onRequestCallback = useContext(CallbackContext) || (() => {});

  return (
    <section id="callback" className="relative py-16 sm:py-24 overflow-hidden text-gray-900" style={{ backgroundColor: '#F0D8B6' }}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-vintage-500/50 to-transparent" />

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1920&q=60"
          alt="Beautiful Kashmir Landscape Background"
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover opacity-[0.03]"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-start">
          {/* Left Side - Content */}
          <div className="reveal">
            <span className="inline-flex items-center gap-2 rounded-full bg-vintage-500/10 border border-vintage-500/20 px-4 py-1.5 text-sm font-medium text-vintage-600">
              Get in Touch
            </span>

            {/* Contact Info */}
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-vintage-500/10 rounded-lg flex items-center justify-center text-vintage-600">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Call Us</p>
                  <a href="tel:+918899666998" className="text-gray-900 font-medium hover:text-vintage-600 transition-colors">
                    +91 88996 66998
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-amber-500/10 rounded-lg flex items-center justify-center text-amber-600">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Email Us</p>
                  <a href="mailto:info@onlykashmir.com" className="text-gray-900 font-medium hover:text-amber-600 transition-colors">
                    info@onlykashmir.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-vintage-900/10 rounded-lg flex items-center justify-center text-vintage-600">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Visit Us</p>
                  <p className="text-gray-900 font-medium">
                    Bemina, Srinagar<br />
                    J&K 190018
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Form Button */}
            <button
              onClick={() => onRequestCallback()}
              className="mt-8 w-full sm:w-auto flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-vintage-500 to-vintage-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-vintage-500/30 transition-all hover:shadow-vintage-500/50 hover:scale-105"
            >
              <Send className="h-5 w-5" />
              Request Call Back
            </button>
          </div>

          {/* Right Side - Location Map */}
          <div className="reveal lg:sticky lg:top-24">
            <LocationMap />
          </div>
        </div>
      </div>
    </section>
  );
}
