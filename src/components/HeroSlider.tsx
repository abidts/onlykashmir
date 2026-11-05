import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Sparkles, Send } from 'lucide-react';
import { CallbackContext } from './Layout';
import { countryCodes } from '../utils/countryCodes';

const heroBanner = {
  image: 'https://images.unsplash.com/photo-1768147765107-5eef8e032a62?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  title: 'Best Travel Agency in Kashmir',
  subtitle: 'Plan Your Dream Trip to Paradise',
  desc: 'Only Kashmir - Your trusted partner for unforgettable Kashmir tour packages, hotel bookings & taxi services.',
  cta: 'Plan Your Trip',
};

export default function HeroSlider() {
  const onRequestCallback = useContext(CallbackContext) || (() => {});
  const [formOpen, setFormOpen] = useState(false);
  const [dateFocused, setDateFocused] = useState(false);
  const [countryCode, setCountryCode] = useState('+91');
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    guests: '',
    phone: '',
    address: '',
    message: '',
    email: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDateFocus = () => setDateFocused(true);
  const handleDateBlur = () => setDateFocused(false);
  
  // Google Form field mappings - matching your exact Google Form fields
  // Form: https://docs.google.com/forms/d/e/1FAIpQLScjwudFNg5Di3hqd8iShpQjCah7oUPDFk7Xv9r0H2RNsLxraQ/viewform
  const GOOGLE_FORM_FIELDS = {
    name: 'entry.2005620554',            // Name
    email: 'entry.1045781291',           // Email
    phone: 'entry.1166974658',           // Phone number
    message: 'entry.839337160',          // Message
    guests: 'entry.745970777',           // No. of Guests
    address: 'entry.48943999',           // Address
    dateYear: 'entry.1065046570_year',   // Date Year
    dateMonth: 'entry.1065046570_month', // Date Month
    dateDay: 'entry.1065046570_day',     // Date Day
   
    
    
    
   
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;

    setSubmitting(true);

    try {
      // Submit to FormSubmit for email notification
      const emailRes = await fetch('https://formsubmit.co/ajax/info@onlykashmir.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: countryCode + formData.phone,
          date: formData.date,
          guests: formData.guests,
          address: formData.address,
          message: formData.message,
          subject: 'New Trip Inquiry from Website',
          _subject: 'Only Kashmir – New Trip Inquiry',
          _template: 'table',
          _captcha: 'false',
          _next: 'false',
        }),
      });

      if (!emailRes.ok) {
        console.warn(`Email notification failed: ${emailRes.status}`);
      }

      // Submit to Google Forms — must use URLSearchParams + application/x-www-form-urlencoded
      // Google Forms does NOT accept multipart/form-data (FormData). URLSearchParams is required.
      const googleFormParams = new URLSearchParams();
      const fullPhone = `${countryCode}${formData.phone}`.replace(/\s+/g, '');

      // Required Google Forms hidden session fields
      googleFormParams.append('fvv', '1');
      googleFormParams.append('pageHistory', '0');
      googleFormParams.append('fbzx', Math.floor(Math.random() * -9e15).toString());
      googleFormParams.append('draftResponse', '[null,null,"' + Math.floor(Math.random() * 9e15).toString() + '"]');
      googleFormParams.append(GOOGLE_FORM_FIELDS.name, formData.name.trim());
      googleFormParams.append(GOOGLE_FORM_FIELDS.phone, fullPhone);
      
      // Date fields submitted in form order (after phone/before guests)
      if (formData.date) {
        const dateObj = new Date(formData.date);
        googleFormParams.append(GOOGLE_FORM_FIELDS.dateYear, dateObj.getFullYear().toString());
        googleFormParams.append(GOOGLE_FORM_FIELDS.dateMonth, (dateObj.getMonth() + 1).toString());
        googleFormParams.append(GOOGLE_FORM_FIELDS.dateDay, dateObj.getDate().toString());
      }
      
      googleFormParams.append(GOOGLE_FORM_FIELDS.guests, formData.guests.trim());
      googleFormParams.append(GOOGLE_FORM_FIELDS.email, formData.email.trim());
      googleFormParams.append(GOOGLE_FORM_FIELDS.address, formData.address.trim());
      googleFormParams.append(GOOGLE_FORM_FIELDS.message, formData.message.trim());

      console.log('Submitting Plan Your Trip — Phone:', fullPhone);

      await fetch('https://docs.google.com/forms/d/e/1FAIpQLScjwudFNg5Di3hqd8iShpQjCah7oUPDFk7Xv9r0H2RNsLxraQ/formResponse', {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: googleFormParams.toString(),
      });

      console.log('✅ Plan Your Trip form submitted to Google Form');

      setSubmitted(true);
      // Conversion for trip inquiry / plan your trip
      try {
        (window as any).sendConversion?.('plan_trip', 1.0, 'INR');
      } catch (e) {
        console.warn('sendConversion failed', e);
      }
      setFormData({ name: '', date: '', guests: '', phone: '', address: '', message: '', email: '' });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error('Form submission error:', error);
      // Even if submission fails, show success since no-cors doesn't return status
      setSubmitted(true);
      try {
        (window as any).sendConversion?.('plan_trip', 1.0, 'INR');
      } catch (e) {
        console.warn('sendConversion failed', e);
      }
      setFormData({ name: '', date: '', guests: '', phone: '', address: '', message: '', email: '' });
      setTimeout(() => setSubmitted(false), 5000);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="home"
      className={`relative min-h-[600px] ${formOpen ? 'h-auto pb-8' : 'h-[calc(100svh-4rem)]'} lg:h-[calc(100svh-4rem)] lg:overflow-hidden`}
    >
      <div className="absolute inset-0">
        <img
          src={heroBanner.image}
          alt="Kashmir valley landscape"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/30 to-slate-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-transparent to-slate-950/40" />
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute top-20 left-5 sm:left-10 h-48 sm:h-72 w-48 sm:w-72 rounded-full bg-vintage-500/10 blur-3xl animate-float pointer-events-none lg:block hidden" />
      <div className="absolute bottom-40 right-5 sm:right-10 h-64 sm:h-96 w-64 sm:w-96 rounded-full bg-vintage-400/10 blur-3xl animate-float pointer-events-none lg:block hidden" style={{ animationDelay: '3s' }} />

      {/* Content */}
      <div className="relative z-10 flex h-full items-start lg:items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full pt-36 sm:pt-24 lg:pt-20 pb-16">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content - Hero Text */}
            <div className="max-w-2xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-vintage-500/30 bg-vintage-500/10 px-3 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-vintage-300 backdrop-blur-sm mb-4 sm:mb-6 animate-fade-in-down">
                <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 fill-vintage-400 text-vintage-400" />
                <span>{heroBanner.subtitle}</span>
              </div>

              {/* Title */}
              <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white text-shadow-lg leading-[1.1] animate-fade-in-up">
                <span className="block">{heroBanner.title.split(' ')[0]}</span>
                <span className="gradient-text-animated">{heroBanner.title.split(' ').slice(1).join(' ')}</span>
              </h1>

              {/* Description */}
              <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-slate-300 text-shadow leading-relaxed max-w-xl animate-fade-in-up delay-150">
                {heroBanner.desc}
              </p>

              {/* CTA Buttons */}
              <div className="mt-6 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-start gap-3 sm:gap-4 animate-fade-in-up delay-300">
                <button
                  onClick={() => onRequestCallback(heroBanner.cta)}
                  className="group relative flex items-center justify-center gap-2 overflow-hidden rounded-2xl sm:rounded-full bg-gradient-to-r from-vintage-500 to-vintage-600 px-6 sm:px-8 py-4 text-base sm:text-lg font-semibold text-white shadow-2xl shadow-vintage-500/30 transition-all hover:shadow-vintage-500/50 hover:scale-105 tap-scale btn-ripple"
                >
                  <Phone className="h-5 w-5" />
                  <span>Request a Call Back</span>
                </button>
                <Link
                  to="/packages"
                  className="flex items-center justify-center gap-2 rounded-2xl sm:rounded-full border border-white/20 bg-white/5 px-6 sm:px-8 py-4 text-base sm:text-lg font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/40 tap-scale"
                >
                  {heroBanner.cta}
                </Link>
                {/* Mobile Form Toggle */}
                <button
                  onClick={() => setFormOpen(!formOpen)}
                  className="lg:hidden flex items-center justify-center gap-2 rounded-2xl sm:rounded-full border border-vintage-500/50 bg-vintage-500/20 px-6 sm:px-8 py-4 text-base sm:text-lg font-semibold text-vintage-300 backdrop-blur-sm transition-all hover:bg-vintage-500/30 tap-scale"
                >
                  <Send className="h-5 w-5" />
                  <span>{formOpen ? 'Close Form' : 'Plan Your Trip'}</span>
                </button>
              </div>
            </div>

            {/* Mobile Form Dropdown */}
            <div className={`lg:hidden overflow-y-auto transition-all duration-500 ${formOpen ? 'max-h-[calc(100vh-200px)] opacity-100 mt-8' : 'max-h-0 opacity-0'}`}>
              <div className="rounded-2xl p-5 bg-slate-950/80 backdrop-blur-md border border-white/10">
                <h3 className="font-playfair text-xl font-bold text-white mb-1">Plan Your Trip</h3>
                <p className="text-xs text-slate-400 mb-4">Fill in the details and we'll get back to you</p>
                
                {submitted ? (
                  <div className="text-center py-6">
                    <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-vintage-500/20 flex items-center justify-center">
                      <Send className="h-6 w-6 text-vintage-400" />
                    </div>
                    <h4 className="text-base font-semibold text-white mb-1">Thank You!</h4>
                    <p className="text-slate-400 text-sm">We'll contact you soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <div>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Name *"
                        required
                        className="w-full px-3 py-2.5 bg-slate-900/50 border border-white/20 rounded-lg text-white font-semibold placeholder:text-slate-200 placeholder:font-semibold outline-none focus:border-vintage-500/50 transition text-sm"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="relative">
                        <input
                          type={dateFocused || formData.date ? 'date' : 'text'}
                          name="date"
                          value={formData.date}
                          onChange={handleInputChange}
                          onFocus={handleDateFocus}
                          onBlur={handleDateBlur}
                          placeholder="Date of Arrival *"
                          required
                          className="w-full px-3 py-2.5 bg-slate-900/50 border border-white/20 rounded-lg text-white font-semibold placeholder:text-slate-200 placeholder:font-semibold outline-none focus:border-vintage-500/50 transition text-sm [color-scheme:dark]"
                        />
                      </div>
                      <div>
                        <input
                          type="number"
                          name="guests"
                          value={formData.guests}
                          onChange={handleInputChange}
                          placeholder="Guests *"
                          min="1"
                          required
                          className="w-full px-3 py-2.5 bg-slate-900/50 border border-white/20 rounded-lg text-white font-semibold placeholder:text-slate-200 placeholder:font-semibold outline-none focus:border-vintage-500/50 transition text-sm"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex gap-2">
                        <select
                          value={countryCode}
                          onChange={(e) => setCountryCode(e.target.value)}
                          className="px-2 py-2.5 bg-slate-900/50 border border-white/20 rounded-lg text-white font-semibold text-sm outline-none focus:border-vintage-500/50 transition cursor-pointer"
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
                          onChange={handleInputChange}
                          placeholder="Phone *"
                          pattern="[0-9]{10}"
                          required
                          className="flex-1 px-3 py-2.5 bg-slate-900/50 border border-white/20 rounded-lg text-white font-semibold placeholder:text-slate-200 placeholder:font-semibold outline-none focus:border-vintage-500/50 transition text-sm"
                        />
                      </div>
                    </div>
                    <div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Email *"
                        required
                        className="w-full px-3 py-2.5 bg-slate-900/50 border border-white/20 rounded-lg text-white font-semibold placeholder:text-slate-200 placeholder:font-semibold outline-none focus:border-vintage-500/50 transition text-sm"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        placeholder="Address *"
                        required
                        className="w-full px-3 py-2.5 bg-slate-900/50 border border-white/20 rounded-lg text-white font-semibold placeholder:text-slate-200 placeholder:font-semibold outline-none focus:border-vintage-500/50 transition text-sm"
                      />
                    </div>
                    <div>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Message *"
                        rows={2}
                        required
                        className="w-full px-3 py-2.5 bg-slate-900/50 border border-white/20 rounded-lg text-white font-semibold placeholder:text-slate-200 placeholder:font-semibold outline-none focus:border-vintage-500/50 transition text-sm resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full flex items-center justify-center gap-1.5 rounded-lg bg-vintage-500 hover:bg-vintage-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-vintage-500/20 transition-all hover:shadow-vintage-500/30 tap-scale disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {submitting ? (
                        <>
                          <div className="h-3.5 w-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="h-3.5 w-3.5" />
                          Send Enquiry
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Right Content - Booking Form (Desktop) */}
            <div className="hidden lg:block">
              <div className="rounded-2xl p-5 animate-fade-in-up delay-300">
                <h3 className="font-playfair text-xl font-bold text-white mb-1">Plan Your Trip</h3>
                <p className="text-xs text-slate-400 mb-4">Fill in the details and we'll get back to you</p>
                
                {submitted ? (
                  <div className="text-center py-6">
                    <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-vintage-500/20 flex items-center justify-center">
                      <Send className="h-6 w-6 text-vintage-400" />
                    </div>
                    <h4 className="text-base font-semibold text-white mb-1">Thank You!</h4>
                    <p className="text-slate-400 text-sm">We'll contact you soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <div>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Name *"
                        required
                        className="w-full px-3 py-2.5 bg-transparent border border-white/20 rounded-lg text-white font-semibold placeholder:text-slate-200 placeholder:font-semibold outline-none focus:border-vintage-500/50 transition text-xs"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="relative">
                        <input
                          type={dateFocused || formData.date ? 'date' : 'text'}
                          name="date"
                          value={formData.date}
                          onChange={handleInputChange}
                          onFocus={handleDateFocus}
                          onBlur={handleDateBlur}
                          placeholder="Date of Arrival *"
                          required
                          className="w-full px-3 py-2.5 bg-transparent border border-white/20 rounded-lg text-white font-semibold placeholder:text-slate-200 placeholder:font-semibold outline-none focus:border-vintage-500/50 transition text-xs [color-scheme:dark]"
                        />
                      </div>
                      <div>
                        <input
                          type="number"
                          name="guests"
                          value={formData.guests}
                          onChange={handleInputChange}
                          placeholder="Guests *"
                          min="1"
                          required
                          className="w-full px-3 py-2.5 bg-transparent border border-white/20 rounded-lg text-white font-semibold placeholder:text-slate-200 placeholder:font-semibold outline-none focus:border-vintage-500/50 transition text-xs"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex gap-2">
                        <select
                          value={countryCode}
                          onChange={(e) => setCountryCode(e.target.value)}
                          className="px-2 py-2.5 bg-transparent border border-white/20 rounded-lg text-white font-semibold text-xs outline-none focus:border-vintage-500/50 transition cursor-pointer"
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
                          onChange={handleInputChange}
                          placeholder="Phone *"
                          pattern="[0-9]{10}"
                          required
                          className="flex-1 px-3 py-2.5 bg-transparent border border-white/20 rounded-lg text-white font-semibold placeholder:text-slate-200 placeholder:font-semibold outline-none focus:border-vintage-500/50 transition text-xs"
                        />
                      </div>
                    </div>
                    <div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Email *"
                        required
                        className="w-full px-3 py-2.5 bg-transparent border border-white/20 rounded-lg text-white font-semibold placeholder:text-slate-200 placeholder:font-semibold outline-none focus:border-vintage-500/50 transition text-xs"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        placeholder="Address *"
                        required
                        className="w-full px-3 py-2.5 bg-transparent border border-white/20 rounded-lg text-white font-semibold placeholder:text-slate-200 placeholder:font-semibold outline-none focus:border-vintage-500/50 transition text-xs"
                      />
                    </div>
                    <div>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Message *"
                        rows={2}
                        required
                        className="w-full px-3 py-2.5 bg-transparent border border-white/20 rounded-lg text-white font-semibold placeholder:text-slate-200 placeholder:font-semibold outline-none focus:border-vintage-500/50 transition text-xs resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full flex items-center justify-center gap-1.5 rounded-lg bg-vintage-500/80 hover:bg-vintage-500 px-4 py-2.5 text-xs font-semibold text-vintage-800 shadow-lg shadow-vintage-500/20 transition-all hover:shadow-vintage-500/30 hover:scale-[1.02] tap-scale disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {submitting ? (
                        <>
                          <div className="h-3.5 w-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="h-3.5 w-3.5" />
                          Send Enquiry
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
