import { useState, useEffect, useContext } from 'react';
import { Home, MapPin, Package, Phone, Menu, X, Mountain, Flame, Car, Camera, MessageSquare, Building, MessageCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { CallbackContext } from './Layout';

const navItems = [
  { icon: MapPin, label: 'Destination', path: '/destinations' },
  { icon: Package, label: 'Package', path: '/packages' },
  { icon: Car, label: 'Cabs', path: '/cabs' },
  { icon: MessageCircle, label: 'Whatsapp', action: true },
];

const moreItems = [
  { icon: Home, label: 'Home', path: '/' },
  { icon: Building, label: 'Hotels', path: '/hotels' },
  { icon: Mountain, label: 'Adventure', path: '/adventure' },
  { icon: Camera, label: 'Gallery', path: '/gallery' },
  { icon: Flame, label: 'About', path: '/about' },
  { icon: Phone, label: 'Contact', path: '/contact' },
];

export default function MobileBottomNav() {
  const onRequestCallback = useContext(CallbackContext) || (() => {});
  const [moreOpen, setMoreOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Hide on scroll down, show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleNavClick = (item: typeof navItems[0]) => {
    if (item.action) {
      // Open WhatsApp directly
      window.open('https://wa.me/918899666998', '_blank');
    } else if (item.path) {
      navigate(item.path);
    }
    setMoreOpen(false);
  };

  return (
    <>
      {/* More Menu Overlay */}
      {moreOpen && (
        <div 
          className="fixed inset-0 z-[90] bg-black/60 backdrop-blur-sm lg:hidden animate-fade-in"
          onClick={() => setMoreOpen(false)}
        />
      )}

      {/* More Menu Panel */}
      <div className={`fixed bottom-20 left-4 right-4 z-[95] lg:hidden transition-all duration-300 ${moreOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
        <div className="glass-strong rounded-2xl p-4 shadow-2xl">
          <div className="grid grid-cols-3 gap-3">
            {moreItems.map((item) => (
              <button
                key={item.label}
                onClick={() => {
                  if (item.path) {
                    navigate(item.path);
                  }
                  setMoreOpen(false);
                }}
                className="flex flex-col items-center gap-2 rounded-xl p-3 transition-all tap-scale text-slate-400 hover:bg-slate-800 hover:text-white"
              >
                <item.icon className="h-5 w-5" />
                <span className="text-xs font-medium">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Navigation Bar */}
      <nav className={`fixed bottom-0 left-0 right-0 z-[100] lg:hidden transition-transform duration-300 ${visible ? 'translate-y-0' : 'translate-y-full'}`}>
        <div className="glass-strong border-t border-white/10 safe-bottom">
          <div className="flex items-stretch justify-around">
            {navItems.map((item) => {
              const isActive = !item.action && item.path === '/';
              const isWhatsapp = item.action;

              return (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item)}
                  className={`relative flex flex-1 flex-col items-center gap-1 py-3 transition-all tap-scale ${
                    isWhatsapp
                      ? 'text-white'
                      : isActive
                        ? 'text-emerald-400'
                        : 'text-slate-400'
                  }`}
                >
                  {/* WhatsApp button special styling */}
                  {isWhatsapp ? (
                    <div className="relative -mt-5 mb-1">
                      <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-30" />
                      <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-green-600 shadow-lg shadow-green-500/40">
                        <MessageCircle className="h-6 w-6" />
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className={`relative transition-transform duration-200 ${isActive ? 'scale-110' : ''}`}>
                        <item.icon className="h-6 w-6" />
                        {isActive && (
                          <div className="absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-emerald-400" />
                        )}
                      </div>
                    </>
                  )}
                  <span className={`text-[10px] font-medium ${isWhatsapp ? 'text-green-400' : ''}`}>
                    {item.label}
                  </span>
                </button>
              );
            })}
            
            {/* More Button */}
            <button
              onClick={() => setMoreOpen(!moreOpen)}
              className={`relative flex flex-1 flex-col items-center gap-1 py-3 transition-all tap-scale ${moreOpen ? 'text-emerald-400' : 'text-slate-400'}`}
            >
              <div className={`transition-transform duration-300 ${moreOpen ? 'rotate-45' : ''}`}>
                {moreOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </div>
              <span className="text-[10px] font-medium">More</span>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
