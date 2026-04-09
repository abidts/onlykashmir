import { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

const WHATSAPP_NUMBER = '918899666998'; // Replace with actual admin number

export default function WhatsAppButton() {
  const [tooltip, setTooltip] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show button after a delay
    const showTimer = setTimeout(() => setVisible(true), 3000);

    // Show tooltip after button appears
    const tooltipTimer = setTimeout(() => setTooltip(true), 3500);

    // Auto-hide tooltip quickly after showing
    const hideTooltipTimer = setTimeout(() => setTooltip(false), 5000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(tooltipTimer);
      clearTimeout(hideTooltipTimer);
    };
  }, []);

  const handleClick = () => {
    const message = encodeURIComponent(
      'Hi! I\'m interested in Kashmir tour packages. Please share more details.'
    );
    window.location.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 animate-fade-in-up">
      {/* Tooltip */}
      {tooltip && (
        <div className="relative animate-fade-in-right rounded-2xl bg-white px-4 py-3 shadow-2xl max-w-[200px] hidden sm:block">
          <button
            onClick={() => setTooltip(false)}
            className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 transition tap-scale"
            aria-label="Dismiss"
          >
            <X className="h-3.5 w-3.5" />
          </button>
          <p className="text-sm text-slate-700 font-medium">
            👋 Need help? Chat with us!
          </p>
        </div>
      )}

      {/* WhatsApp Button */}
      <button
        onClick={handleClick}
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-all hover:bg-green-600 hover:shadow-xl hover:scale-110 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 tap-scale"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-7 w-7" />
        <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-white text-xs font-bold text-green-600">
          ✓
        </span>
      </button>
    </div>
  );
}
