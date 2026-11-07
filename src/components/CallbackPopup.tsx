import { useState } from 'react';
import { X, Mail, User, Send, CheckCircle, MessageCircle } from 'lucide-react';
import { countryCodes } from '../utils/countryCodes';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  subject?: string;
  embedded?: boolean;
}

const GOOGLE_FORM_ACTION = 'https://docs.google.com/forms/d/e/1FAIpQLSezP1LKvDRaI4UiLP_mqYyEne5hAhaMNVkTqCizZSmvJappxA/formResponse';

// Google Form field mapping - these need to match your actual Google Form fields
// Your form has 3 fields: FULL NAME, EMAIL, PHONE NUMBER
// To find correct field IDs:
// 1. Open your Google Form in browser: https://docs.google.com/forms/d/e/1FAIpQLSezP1LKvDRaI4UiLP_mqYyEne5hAhaMNVkTqCizZSmvJappxA/viewform
// 2. Open browser console (F12)
// 3. Right-click each input and inspect → look for name="entry.XXXXXXX"
// 4. Update the IDs below accordingly (verify these match the new form)
const GOOGLE_FORM_FIELDS = {
  name: 'entry.1063111954',    // FULL NAME
  email: 'entry.1792736805',   // EMAIL
  phone: 'entry.1275567781'    // PHONE NUMBER
};

// FormSubmit expects plain keys, keep names explicit for clarity
const WHATSAPP_NUMBER = '+918899666998';

export default function CallbackPopup({ isOpen, onClose, subject, embedded = false }: Props) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [countryCode, setCountryCode] = useState('+91');
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;

    setError('');
    setSubmitting(true);

    try {
      const fullPhone = `${countryCode}${formData.phone}`.replace(/\s+/g, '');

      // Submit to Google Forms — must use URLSearchParams + application/x-www-form-urlencoded
      // Google Forms does NOT accept multipart/form-data (FormData). URLSearchParams is required.
      const googleFormParams = new URLSearchParams();
      googleFormParams.append('fvv', '1');
      googleFormParams.append('pageHistory', '0');
      googleFormParams.append(GOOGLE_FORM_FIELDS.name, formData.name.trim());
      googleFormParams.append(GOOGLE_FORM_FIELDS.email, formData.email.trim());
      googleFormParams.append(GOOGLE_FORM_FIELDS.phone, fullPhone);

      let googleFormSubmissionError: Error | undefined;
      try {
        await fetch(GOOGLE_FORM_ACTION, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: googleFormParams.toString(),
        });
      } catch (backupError) {
        console.warn('Callback backup form submission failed', backupError);
        googleFormSubmissionError = backupError instanceof Error
          ? backupError
          : new Error('The callback request could not be sent to Google Forms.');
      }

      if (googleFormSubmissionError) {
        throw googleFormSubmissionError;
      }

      console.log('Callback request submitted successfully.');

      setSubmitted(true);
      // Record the Google Ads lead only after the callback form has been sent.
      try {
        (window as any).gtag_report_conversion?.();
      } catch (e) {
        console.warn('Callback conversion failed', e);
      }
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', phone: '' });
        setCountryCode('+91');
        onClose();
      }, 2200);
    } catch (err) {
      console.error('Failed to submit callback form', err);
      setError(err instanceof Error
        ? `${err.message} Please contact us by phone or WhatsApp if the problem continues.`
        : 'We could not send your request. Please contact us by phone or WhatsApp.');
    } finally {
      setSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className={embedded ? 'w-full' : 'fixed inset-0 z-[100] flex items-center justify-center p-4'}>
      {!embedded && (
        <div
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        />
      )}

      <div className={`relative bg-slate-900 rounded-3xl border border-slate-800 shadow-2xl max-w-lg w-full overflow-y-auto ${embedded ? '' : 'max-h-[90vh] animate-scale-in'}`}>
        {!embedded && (
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-all z-10"
            aria-label="Close callback form"
          >
            <X className="w-4 h-4" />
          </button>
        )}

        {submitted ? (
          <div className="p-8 sm:p-12 flex flex-col items-center justify-center text-center">
            <div className="w-20 h-20 rounded-full bg-emerald-500/20 flex items-center justify-center mb-6 animate-glow-pulse">
              <CheckCircle className="w-10 h-10 text-emerald-400" />
            </div>
            <h3 className="text-2xl font-bold text-white font-playfair mb-2">Thank You!</h3>
            <p className="text-slate-400">
              Our travel expert will call you back within 30 minutes.
            </p>
          </div>
        ) : (
          <>
            <div className="p-6 sm:p-8 border-b border-slate-800">
              <h3 className="text-2xl font-bold text-white font-playfair">
                Request a Call Back
              </h3>
              <p className="text-slate-400 mt-2">
                Fill in your details and we'll call you within 30 minutes.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">Full Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Amit Kapoor"
                    required
                    className="w-full rounded-xl bg-slate-800 border border-slate-700 py-3 pl-12 pr-4 text-white placeholder:text-slate-500 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1">Phone Number</label>
                  <div className="flex gap-2">
                    <select
                      value={countryCode}
                      onChange={(e) => setCountryCode(e.target.value)}
                      aria-label="Country calling code"
                      className="w-24 shrink-0 rounded-xl bg-slate-800 border border-slate-700 px-2 text-sm text-white outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition"
                    >
                      {countryCodes.map((country) => (
                        <option key={country.code} value={country.code} className="bg-slate-900 text-white">
                          {country.label} {country.code}
                        </option>
                      ))}
                    </select>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone number"
                      required
                      className="min-w-0 flex-1 rounded-xl bg-slate-800 border border-slate-700 px-3 py-3 text-white placeholder:text-slate-500 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="amitkapoor@gmail.com"
                      required
                      className="w-full rounded-xl bg-slate-800 border border-slate-700 py-3 pl-12 pr-4 text-sm text-white placeholder:text-slate-500 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition"
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-vintage-900 to-vintage-700 py-3.5 text-base font-semibold text-vintage-500 shadow-lg shadow-vintage-900/30 transition-all hover:shadow-vintage-900/50 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <Send className="h-5 w-5" />
                {submitting ? 'Sending...' : 'Request Call Back'}
              </button>

              {error && <p className="text-sm text-amber-300" role="alert">{error}</p>}

              <div className="relative py-2">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-800" />
                </div>
                <div className="relative flex justify-center">
                  <span className="bg-slate-900 px-3 text-xs text-slate-500">or</span>
                </div>
              </div>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                  subject ? `Hi Only Kashmir, I want to chat about ${subject}.` : 'Hi Only Kashmir, I want to plan my trip.'
                )}`}
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 rounded-xl border border-emerald-500/40 bg-emerald-500/10 py-3.5 text-base font-semibold text-emerald-300 transition-all hover:bg-emerald-500/20 hover:border-emerald-400 active:scale-[0.98]"
              >
                <MessageCircle className="h-5 w-5" />
                Chat on WhatsApp
              </a>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
