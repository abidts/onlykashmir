import { createContext, useContext, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';
import Navbar from './Navbar';
import WhatsAppButton from './WhatsAppButton';
import SocialSidebar from './SocialSidebar';
import Footer from './Footer';
import MobileBottomNav from './MobileBottomNav';

interface LayoutProps {
  children: React.ReactNode;
}

export const CallbackContext = createContext<((subject?: string) => void) | null>(null);

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const navigate = useNavigate();

  const openCallbackPage = (subject?: string) => {
    const search = subject ? `?subject=${encodeURIComponent(subject)}` : '';
    navigate(`/request-callback${search}`);
  };

  useEffect(() => {
    const handler = () => openCallbackPage();
    window.addEventListener('open-callback-from-contact', handler as EventListener);
    return () => window.removeEventListener('open-callback-from-contact', handler as EventListener);
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname, location.search, location.hash]);

  return (
    <>
      <aside
        aria-label="Travel announcements"
        className="overflow-hidden py-1 text-[10px] font-medium text-white sm:py-1.5 sm:text-xs"
        style={{ backgroundColor: '#000000' }}
      >
        <div className="mx-auto flex min-h-7 w-full max-w-[1500px] items-center gap-2 px-2 sm:px-5">
          <div className="ticker-track" aria-live="polite">
            <span className="ticker-message">Rates are subject to change depending on the itinerary, hotel availability, and number of guests.</span>
            <span className="ticker-message">Travel Gift Vouchers for unforgettable Kashmir memories are available.</span>
            <span className="ticker-message">Most Visited Places In Kashmir : Srinagar&nbsp; | &nbsp;Gulmarg&nbsp; | &nbsp;Pahalgam&nbsp; | &nbsp;Sonamarg</span>
          </div>
          <div className="flex shrink-0 items-center gap-3 text-[10px] sm:gap-5 sm:text-xs">
            <a href="tel:+918899666998" className="inline-flex items-center gap-1.5 whitespace-nowrap text-white transition hover:text-amber-300" aria-label="Call +91 88996 66998">
              <Phone className="h-3 w-3" aria-hidden="true" />
              <span className="hidden md:inline">+91 88996 66998</span>
            </a>
            <a href="mailto:info@onlykashmir.com" className="inline-flex items-center gap-1.5 whitespace-nowrap text-white transition hover:text-amber-300" aria-label="Email info@onlykashmir.com">
              <Mail className="h-3 w-3" aria-hidden="true" />
              <span className="hidden md:inline">info@onlykashmir.com</span>
            </a>
          </div>
        </div>
      </aside>
      <Navbar onRequestCallback={() => openCallbackPage()} />
      <SocialSidebar />
      <CallbackContext.Provider value={openCallbackPage}>
        <main>
          {children}
        </main>
        <Footer />
      </CallbackContext.Provider>
      <WhatsAppButton />
      <MobileBottomNav />
    </>
  );
}

export const useCallbackContext = () => {
  const context = useContext(CallbackContext);
  if (!context) {
    throw new Error('useCallbackContext must be used within a Layout');
  }
  return context;
};
