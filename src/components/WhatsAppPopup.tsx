import { MessageCircle, X } from 'lucide-react';

const WHATSAPP_NUMBER = '918899666998';

interface WhatsAppPopupProps {
  isOpen: boolean;
  onClose: () => void;
  message?: string;
}

export default function WhatsAppPopup({ isOpen, onClose, message }: WhatsAppPopupProps) {
  if (!isOpen) return null;

  const openWhatsApp = () => {
    const whatsappMessage = message || 'Hi! I\'m interested in Kashmir tour packages. Please share more details.';
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div 
        className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
              <MessageCircle className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-lg">Chat on WhatsApp</h3>
              <p className="text-sm text-gray-500">Expert travel consultants online now</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Message Preview */}
        <div className="bg-gray-50 rounded-xl p-4 mb-6">
          <p className="text-sm text-gray-700 font-medium mb-2">Your message:</p>
          <p className="text-sm text-gray-600">{message || 'Hi! I\'m interested in Kashmir tour packages. Please share more details.'}</p>
        </div>

        {/* CTA Button */}
        <button
          onClick={openWhatsApp}
          className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-3.5 rounded-xl transition-all hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
        >
          <MessageCircle className="w-5 h-5" />
          <span>Open WhatsApp</span>
        </button>

        {/* Trust Badge */}
        <p className="text-xs text-center text-gray-400 mt-4">
          ✓ Instant response from our travel experts
        </p>
      </div>
    </div>
  );
}
