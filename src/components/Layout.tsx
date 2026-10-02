import { createContext, useContext, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
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
