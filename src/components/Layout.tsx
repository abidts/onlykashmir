import { createContext, useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import WhatsAppButton from './WhatsAppButton';
import SocialSidebar from './SocialSidebar';
import CallbackPopup from './CallbackPopup';
import Footer from './Footer';
import MobileBottomNav from './MobileBottomNav';

interface LayoutProps {
  children: React.ReactNode;
}

export const CallbackContext = createContext<((subject?: string) => void) | null>(null);

export default function Layout({ children }: LayoutProps) {
  const [popupOpen, setPopupOpen] = useState(false);
  const [popupSubject, setPopupSubject] = useState('');
  const location = useLocation();

  const openPopup = (subject?: string) => {
    setPopupSubject(subject || '');
    setPopupOpen(true);
  };

  useEffect(() => {
    const handler = () => openPopup();
    window.addEventListener('open-callback-from-contact', handler as EventListener);
    return () => window.removeEventListener('open-callback-from-contact', handler as EventListener);
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname, location.search, location.hash]);

  return (
    <>
      <Navbar onRequestCallback={() => openPopup()} />
      <SocialSidebar />
      <CallbackContext.Provider value={openPopup}>
        <main>
          {children}
        </main>
        <Footer />
        <CallbackPopup
          isOpen={popupOpen}
          onClose={() => setPopupOpen(false)}
          subject={popupSubject}
        />
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
