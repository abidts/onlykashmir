import { MapPin } from 'lucide-react';

export default function LocationMap() {
  return (
    <div className="py-8 sm:py-12 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="w-full">
          <div className="text-center mb-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-4 py-1.5 text-sm font-medium text-emerald-400">
              <MapPin className="h-4 w-4" />
              Visit Us
            </span>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-800 bg-slate-900">
            <div className="aspect-video w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.123456789!2d74.7704696!3d34.0724249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e19195fb25adc1:0xb12120aa2234401a!2sOnly+Kashmir+Tour+%26+Travels!5e0!3m2!1sen!2sin!4v1720584000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="ONLY KASHMIR TOUR AND TRAVELS Office Location"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}