import { useState, useEffect, useCallback, useRef, useContext } from 'react';
import { ChevronLeft, ChevronRight, Phone, Play, Sparkles, Send } from 'lucide-react';
import { CallbackContext } from './Layout';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1768147765107-5eef8e032a62?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Paradise on Earth',
    subtitle: 'J&K Awaits You',
    desc: 'Embark on an unforgettable journey through majestic valleys, pristine lakes, and snow-capped mountains.',
    cta: 'Plan Your Trip',
  },
  {
    image: 'https://images.unsplash.com/photo-1651509094074-e8acaeb84d8f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Gulmarg Magic',
    subtitle: 'Ski & Snow Adventures',
    desc: 'Experience world-class skiing, Asia\'s highest gondola, and breathtaking alpine meadows.',
    cta: 'Explore Gulmarg',
  },
  {
    image: 'https://images.unsplash.com/photo-1599493867961-1bc9808137a9?q=80&w=2920&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Pahalgam Beauty',
    subtitle: 'Nature\'s Masterpiece',
    desc: 'Lush green meadows, crystal rivers, pony rides, and the gateway to Amarnath.',
    cta: 'Discover Pahalgam',
  },
  {
    image: 'https://images.unsplash.com/photo-1701957494296-a42832ab0a17?q=80&w=2748&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Golden Sonmarg',
    subtitle: 'Gateway to Ladakh',
    desc: 'Golden meadows, glaciers, and landscapes that feel like paintings come to life.',
    cta: 'Visit Sonmarg',
  },
  {
    image: 'https://images.unsplash.com/photo-1566837497312-7be7830ae9b1?q=80&w=2748&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Kashmir Valley',
    subtitle: 'Land of Serenity',
    desc: 'Experience the tranquility of Kashmir\'s legendary valleys and pristine nature.',
    cta: 'Explore Kashmir',
  },
];

export default function HeroSlider() {
  const onRequestCallback = useContext(CallbackContext) || (() => {});
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
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
  
  // Country codes list (unique entries only)
  const countryCodes = [
    { code: '+91', label: '🇮🇳 IN' },
    { code: '+1', label: '🇺🇸 US' },
    { code: '+44', label: '🇬🇧 UK' },
    { code: '+61', label: '🇦🇺 AU' },
    { code: '+971', label: '🇦🇪 AE' },
    { code: '+966', label: '🇸🇦 SA' },
    { code: '+968', label: '🇴🇲 OM' },
    { code: '+974', label: '🇶🇦 QA' },
    { code: '+965', label: '🇰🇼 KW' },
    { code: '+973', label: '🇧🇭 BH' },
    { code: '+49', label: '🇩🇪 DE' },
    { code: '+33', label: '🇫🇷 FR' },
    { code: '+39', label: '🇮🇹 IT' },
    { code: '+34', label: '🇪🇸 ES' },
    { code: '+81', label: '🇯🇵 JP' },
    { code: '+86', label: '🇨🇳 CN' },
    { code: '+82', label: '🇰🇷 KR' },
    { code: '+65', label: '🇸🇬 SG' },
    { code: '+60', label: '🇲🇾 MY' },
    { code: '+66', label: '🇹🇭 TH' },
    { code: '+62', label: '🇮🇩 ID' },
    { code: '+63', label: '🇵🇭 PH' },
    { code: '+84', label: '🇻🇳 VN' },
    { code: '+92', label: '🇵🇰 PK' },
    { code: '+880', label: '🇧🇩 BD' },
    { code: '+94', label: '🇱🇰 LK' },
    { code: '+977', label: '🇳🇵 NP' },
    { code: '+975', label: '🇧🇹 BT' },
    { code: '+960', label: '🇲🇻 MV' },
    { code: '+27', label: '🇿🇦 ZA' },
    { code: '+234', label: '🇳🇬 NG' },
    { code: '+254', label: '🇰🇪 KE' },
    { code: '+20', label: '🇪🇬 EG' },
    { code: '+55', label: '🇧🇷 BR' },
    { code: '+52', label: '🇲🇽 MX' },
    { code: '+54', label: '🇦🇷 AR' },
    { code: '+56', label: '🇨🇱 CL' },
    { code: '+57', label: '🇨🇴 CO' },
    { code: '+47', label: '🇳🇴 NO' },
    { code: '+46', label: '🇸🇪 SE' },
    { code: '+45', label: '🇩🇰 DK' },
    { code: '+358', label: '🇫🇮 FI' },
    { code: '+31', label: '🇳🇱 NL' },
    { code: '+32', label: '🇧🇪 BE' },
    { code: '+41', label: '🇨🇭 CH' },
    { code: '+43', label: '🇦🇹 AT' },
    { code: '+48', label: '🇵🇱 PL' },
    { code: '+7', label: '🇷🇺 RU' },
    { code: '+380', label: '🇺🇦 UA' },
    { code: '+90', label: '🇹🇷 TR' },
    { code: '+30', label: '🇬🇷 GR' },
    { code: '+351', label: '🇵🇹 PT' },
    { code: '+420', label: '🇨🇿 CZ' },
    { code: '+36', label: '🇭🇺 HU' },
    { code: '+40', label: '🇷🇴 RO' },
    { code: '+353', label: '🇮🇪 IE' },
    { code: '+64', label: '🇳🇿 NZ' },
    { code: '+972', label: '🇮🇱 IL' },
    { code: '+98', label: '🇮🇷 IR' },
    { code: '+964', label: '🇮🇶 IQ' },
    { code: '+961', label: '🇱🇧 LB' },
    { code: '+963', label: '🇸🇾 SY' },
    { code: '+962', label: '🇯🇴 JO' },
    { code: '+212', label: '🇲🇦 MA' },
    { code: '+213', label: '🇩🇿 DZ' },
    { code: '+216', label: '🇹🇳 TN' },
    { code: '+249', label: '🇸🇩 SD' },
    { code: '+251', label: '🇪🇹 ET' },
    { code: '+256', label: '🇺🇬 UG' },
    { code: '+255', label: '🇹🇿 TZ' },
    { code: '+250', label: '🇷🇼 RW' },
  ];

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
      const emailRes = await fetch('https://formsubmit.co/ajax/onlykashmirtt@gmail.com', {
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
      setFormData({ name: '', date: '', guests: '', phone: '', address: '', message: '', email: '' });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error('Form submission error:', error);
      // Even if submission fails, show success since no-cors doesn't return status
      setSubmitted(true);
      setFormData({ name: '', date: '', guests: '', phone: '', address: '', message: '', email: '' });
      setTimeout(() => setSubmitted(false), 5000);
    } finally {
      setSubmitting(false);
    }
  };

  const goTo = useCallback((index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrent(index);
    setTimeout(() => setIsTransitioning(false), 800);
  }, [isTransitioning]);

  const next = useCallback(() => {
    goTo((current + 1) % slides.length);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo(current === 0 ? slides.length - 1 : current - 1);
  }, [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  // Touch handlers for swipe
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) next();
    if (isRightSwipe) prev();
  };

  return (
    <section
      id="home"
      ref={sliderRef}
      className={`relative min-h-[600px] ${formOpen ? 'h-auto pb-8' : 'h-[calc(100svh-4rem)]'} lg:h-[calc(100svh-4rem)] lg:overflow-hidden`}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-all duration-1000 ease-out ${
            i === current ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className={`h-full w-full object-cover ${i === current ? 'img-zoom-in' : ''}`}
          />
          {/* Overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/30 to-slate-950" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-transparent to-slate-950/40" />
        </div>
      ))}

      {/* Floating Decorative Elements */}
      <div className="absolute top-20 left-5 sm:left-10 h-48 sm:h-72 w-48 sm:w-72 rounded-full bg-vintage-500/10 blur-3xl animate-float pointer-events-none" />
      <div className="absolute bottom-40 right-5 sm:right-10 h-64 sm:h-96 w-64 sm:w-96 rounded-full bg-vintage-400/10 blur-3xl animate-float pointer-events-none" style={{ animationDelay: '3s' }} />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full pt-16 sm:pt-20 pb-16">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content - Hero Text */}
            <div className="max-w-2xl">
              {slides.map((slide, i) => (
                <div
                  key={i}
                  className={`transition-all duration-700 ${
                    i === current
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-8 absolute pointer-events-none'
                  }`}
                >
                  {i === current && (
                    <>
                      {/* Badge */}
                      <div className="inline-flex items-center gap-2 rounded-full border border-vintage-500/30 bg-vintage-500/10 px-3 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-vintage-300 backdrop-blur-sm mb-4 sm:mb-6 animate-fade-in-down">
                        <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 fill-vintage-400 text-vintage-400" />
                        <span>{slide.subtitle}</span>
                      </div>

                      {/* Title */}
                      <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white text-shadow-lg leading-[1.1] animate-fade-in-up">
                        <span className="block">{slide.title.split(' ')[0]}</span>
                        <span className="gradient-text-animated">{slide.title.split(' ').slice(1).join(' ')}</span>
                      </h1>

                      {/* Description */}
                      <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-slate-300 text-shadow leading-relaxed max-w-xl animate-fade-in-up delay-150">
                        {slide.desc}
                      </p>

                      {/* CTA Buttons */}
                      <div className="mt-6 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-start gap-3 sm:gap-4 animate-fade-in-up delay-300">
                        <button
                          onClick={() => onRequestCallback(slide.cta)}
                          className="group relative flex items-center justify-center gap-2 overflow-hidden rounded-2xl sm:rounded-full bg-gradient-to-r from-vintage-500 to-vintage-600 px-6 sm:px-8 py-4 text-base sm:text-lg font-semibold text-white shadow-2xl shadow-vintage-500/30 transition-all hover:shadow-vintage-500/50 hover:scale-105 tap-scale btn-ripple"
                        >
                          <Phone className="h-5 w-5" />
                          <span>Request a Call Back</span>
                        </button>
                        <a
                          href="#packages"
                          className="flex items-center justify-center gap-2 rounded-2xl sm:rounded-full border border-white/20 bg-white/5 px-6 sm:px-8 py-4 text-base sm:text-lg font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/40 tap-scale"
                        >
                          <Play className="h-5 w-5 text-vintage-400" />
                          {slide.cta}
                        </a>
                        {/* Mobile Form Toggle */}
                        <button
                          onClick={() => setFormOpen(!formOpen)}
                          className="lg:hidden flex items-center justify-center gap-2 rounded-2xl sm:rounded-full border border-vintage-500/50 bg-vintage-500/20 px-6 sm:px-8 py-4 text-base sm:text-lg font-semibold text-vintage-300 backdrop-blur-sm transition-all hover:bg-vintage-500/30 tap-scale"
                        >
                          <Send className="h-5 w-5" />
                          <span>{formOpen ? 'Close Form' : 'Plan Your Trip'}</span>
                        </button>
                      </div>
                    </>
                  )}
                </div>
              ))}
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
                        className="w-full px-3 py-2.5 bg-slate-900/50 border border-white/20 rounded-lg text-white font-semibold placeholder:text-slate-400 placeholder:font-semibold outline-none focus:border-vintage-500/50 transition text-sm"
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
                          className="w-full px-3 py-2.5 bg-slate-900/50 border border-white/20 rounded-lg text-white font-semibold placeholder:text-slate-400 placeholder:font-semibold outline-none focus:border-vintage-500/50 transition text-sm [color-scheme:dark]"
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
                          className="w-full px-3 py-2.5 bg-slate-900/50 border border-white/20 rounded-lg text-white font-semibold placeholder:text-slate-400 placeholder:font-semibold outline-none focus:border-vintage-500/50 transition text-sm"
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
                          className="flex-1 px-3 py-2.5 bg-slate-900/50 border border-white/20 rounded-lg text-white font-semibold placeholder:text-slate-400 placeholder:font-semibold outline-none focus:border-vintage-500/50 transition text-sm"
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
                        className="w-full px-3 py-2.5 bg-slate-900/50 border border-white/20 rounded-lg text-white font-semibold placeholder:text-slate-400 placeholder:font-semibold outline-none focus:border-vintage-500/50 transition text-sm"
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
                        className="w-full px-3 py-2.5 bg-slate-900/50 border border-white/20 rounded-lg text-white font-semibold placeholder:text-slate-400 placeholder:font-semibold outline-none focus:border-vintage-500/50 transition text-sm"
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
                        className="w-full px-3 py-2.5 bg-slate-900/50 border border-white/20 rounded-lg text-white font-semibold placeholder:text-slate-400 placeholder:font-semibold outline-none focus:border-vintage-500/50 transition text-sm resize-none"
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
                        className="w-full px-3 py-2.5 bg-transparent border border-white/20 rounded-lg text-white font-semibold placeholder:text-slate-400 placeholder:font-semibold outline-none focus:border-vintage-500/50 transition text-xs"
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
                          className="w-full px-3 py-2.5 bg-transparent border border-white/20 rounded-lg text-white font-semibold placeholder:text-slate-400 placeholder:font-semibold outline-none focus:border-vintage-500/50 transition text-xs [color-scheme:dark]"
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
                          className="w-full px-3 py-2.5 bg-transparent border border-white/20 rounded-lg text-white font-semibold placeholder:text-slate-400 placeholder:font-semibold outline-none focus:border-vintage-500/50 transition text-xs"
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
                          className="flex-1 px-3 py-2.5 bg-transparent border border-white/20 rounded-lg text-white font-semibold placeholder:text-slate-400 placeholder:font-semibold outline-none focus:border-vintage-500/50 transition text-xs"
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
                        className="w-full px-3 py-2.5 bg-transparent border border-white/20 rounded-lg text-white font-semibold placeholder:text-slate-400 placeholder:font-semibold outline-none focus:border-vintage-500/50 transition text-xs"
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
                        className="w-full px-3 py-2.5 bg-transparent border border-white/20 rounded-lg text-white font-semibold placeholder:text-slate-400 placeholder:font-semibold outline-none focus:border-vintage-500/50 transition text-xs"
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
                        className="w-full px-3 py-2.5 bg-transparent border border-white/20 rounded-lg text-white font-semibold placeholder:text-slate-400 placeholder:font-semibold outline-none focus:border-vintage-500/50 transition text-xs resize-none"
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

      {/* Slide Navigation Arrows - Hidden on mobile, visible on larger screens */}
      <button
        onClick={prev}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 hidden sm:flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white transition-all hover:bg-white/20 hover:scale-110 tap-scale"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
      </button>
      <button
        onClick={next}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 hidden sm:flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white transition-all hover:bg-white/20 hover:scale-110 tap-scale"
        aria-label="Next slide"
      >
        <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
      </button>

      {/* Progress bar */}
      <div className="absolute bottom-20 sm:bottom-0 left-0 right-0 z-20 h-1 bg-white/10">
        <div
          className="h-full bg-gradient-to-r from-vintage-500 to-vintage-600 transition-all duration-[6000ms] ease-linear"
          style={{ width: `${((current + 1) / slides.length) * 100}%` }}
        />
      </div>
    </section>
  );
}
