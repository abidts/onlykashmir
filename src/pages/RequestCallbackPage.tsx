import { useSearchParams } from 'react-router-dom';
import { Phone } from 'lucide-react';
import CallbackPopup from '../components/CallbackPopup';
import SEO from '../components/SEO';

export default function RequestCallbackPage() {
  const [searchParams] = useSearchParams();
  const subject = searchParams.get('subject') || undefined;

  return (
    <div className="min-h-screen bg-slate-950 px-4 py-28 sm:py-32">
      <SEO
        title="Request a Call Back | Only Kashmir Tour & Travels"
        description="Request a call back from an Only Kashmir travel expert for help planning your Kashmir trip."
        canonical="https://www.onlykashmir.com/request-callback"
      />
      <div className="mx-auto max-w-lg">
        <div className="mb-8 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-vintage-500/20 bg-vintage-500/10 px-4 py-1.5 text-sm font-medium text-vintage-400">
            <Phone className="h-4 w-4" />
            Travel assistance
          </span>
          <h1 className="mt-4 font-playfair text-4xl font-bold text-white sm:text-5xl">Request a Call Back</h1>
          <p className="mt-4 text-slate-400">Share your details and a travel expert will call you within 30 minutes.</p>
        </div>
        <CallbackPopup isOpen onClose={() => undefined} subject={subject} embedded />
      </div>
    </div>
  );
}
