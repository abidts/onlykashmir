import { createContext, useContext, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import WhatsAppButton from './WhatsAppButton';
import SocialSidebar from './SocialSidebar';
import Footer from './Footer';
import MobileBottomNav from './MobileBottomNav';

const tickerItems = [
  'Winter Kashmir Special Packages Available',
  'Call +91 88996 66998',
  'Email info@onlykashmir.com',
  'Free Travel Guidance • 24/7 Support',
];

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
      <div className="fixed inset-x-0 top-0 z-[60] h-9 overflow-hidden border-b border-vintage-500/20 bg-vintage-900/95 text-white backdrop-blur-xl">
        <div className="ticker-track flex h-full items-center whitespace-nowrap">
          {[...tickerItems, ...tickerItems].map((item, index) => (
            <div key={`${item}-${index}`} className="flex items-center gap-3 px-5 text-[11px] font-medium tracking-[0.12em] uppercase text-vintage-100/90 sm:text-xs">
              <span>{item}</span>
              <span className="text-vintage-500">•</span>
            </div>
          ))}
        </div>
      </div>
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
