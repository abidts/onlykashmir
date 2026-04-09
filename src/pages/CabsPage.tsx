import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Phone, Check, Shield, Clock, Star, Car } from 'lucide-react';
import Cabs from '../components/Cabs';
import { CallbackContext } from '../components/Layout';

interface FormData {
  name: string;
  email: string;
  phone: string;
  pickup: string;
  destination: string;
  date: string;
  time: string;
  vehicle: string;
}

const CabsPage: React.FC = () => {
  const navigate = useNavigate();
  const onRequestCallback = useContext(CallbackContext) || (() => {});
  const [showBookingForm, setShowBookingForm] = useState(false);
  const handleCallback = onRequestCallback;
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    pickup: '',
    destination: '',
    date: '',
    time: '',
    vehicle: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Booking submitted:', formData);
    setShowBookingForm(false);
    handleCallback();
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Main Content */}
      <div className="pt-14 sm:pt-18 pb-20 sm:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Our Fleet Section */}
          <section className="mb-12 sm:mb-14">
            <div className="text-center mb-6 sm:mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 font-playfair">
                Our Fleet
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-vintage-400 to-vintage-400 mx-auto rounded-full" />
              <p className="mt-3 text-slate-400 max-w-3xl mx-auto">
                Choose from our diverse range of well-maintained vehicles, each offering comfort, safety, and style for your journey through the beautiful valleys of Kashmir.
              </p>
            </div>

            {/* Cabs Component */}
            <Cabs showAll />
          </section>

          {/* Popular Routes */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-playfair">
                Popular Routes
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-orange-400 mx-auto rounded-full" />
              <p className="mt-6 text-slate-400 max-w-3xl mx-auto">
                Explore the most popular routes traveled by tourists in Kashmir with estimated distances and travel times.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { route: 'Srinagar Airport to City Center', distance: '15 km', duration: '30 min' },
                { route: 'Srinagar to Gulmarg', distance: '50 km', duration: '2.5 hours' },
                { route: 'Srinagar to Pahalgam', distance: '95 km', duration: '3 hours' },
                { route: 'Srinagar to Sonamarg', distance: '75 km', duration: '2.5 hours' },
                { route: 'Gulmarg to Pahalgam', distance: '145 km', duration: '5 hours' },
                { route: 'Srinagar Local Sightseeing', distance: 'Varies', duration: 'Full Day' },
              ].map((trip, index) => (
                <div key={index} className="bg-slate-900 p-6 rounded-2xl border border-slate-800 hover:border-vintage-500/30 transition-all group">
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-vintage-400 transition-colors">{trip.route}</h3>
                  <div className="flex justify-between text-slate-400 text-sm mb-4">
                    <span>Distance: {trip.distance}</span>
                    <span>Duration: {trip.duration}</span>
                  </div>
                  <button
                    onClick={() => setShowBookingForm(true)}
                    className="w-full bg-vintage-500/10 hover:bg-vintage-500 text-vintage-400 hover:text-white font-medium py-2.5 px-4 rounded-xl transition-all border border-vintage-500/20 hover:border-vintage-500"
                  >
                    Book This Route
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* Why Choose Us */}
          <section>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-playfair">
                Why Choose Our Cab Services?
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-vintage-400 to-vintage-400 mx-auto rounded-full" />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Clock,
                  title: '24/7 Service',
                  description: 'Round-the-clock availability for all your transportation needs, including late-night and early-morning trips.'
                },
                {
                  icon: Star,
                  title: 'Professional Drivers',
                  description: 'Experienced, licensed, and courteous drivers who know the best routes and local attractions.'
                },
                {
                  icon: Shield,
                  title: 'Best Rates',
                  description: 'Competitive pricing with no hidden charges. We offer the best value for your money.'
                },
                {
                  icon: Check,
                  title: 'Safe & Secure',
                  description: 'Regularly maintained vehicles equipped with GPS tracking and all necessary safety features.'
                },
              ].map((feature, index) => (
                <div key={index} className="bg-slate-900 p-6 rounded-2xl border border-slate-800 hover:border-vintage-500/30 transition-all">
                  <div className="w-12 h-12 bg-vintage-500/10 rounded-xl flex items-center justify-center text-vintage-400 mb-4">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* Booking Form Modal */}
      {showBookingForm && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-slate-900 rounded-2xl border border-slate-800 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 sm:p-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-white font-playfair">Book Your Cab</h3>
                <button
                  onClick={() => setShowBookingForm(false)}
                  className="text-slate-400 hover:text-white transition-colors text-2xl"
                >
                  ×
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder:text-slate-500 outline-none focus:border-vintage-500 focus:ring-2 focus:ring-vintage-500/20 transition"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder:text-slate-500 outline-none focus:border-vintage-500 focus:ring-2 focus:ring-vintage-500/20 transition"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder:text-slate-500 outline-none focus:border-vintage-500 focus:ring-2 focus:ring-vintage-500/20 transition"
                      placeholder="+91 XXXXX XXXXX"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1">Vehicle Type</label>
                    <select
                      name="vehicle"
                      value={formData.vehicle}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white outline-none focus:border-vintage-500 focus:ring-2 focus:ring-vintage-500/20 transition"
                      required
                    >
                      <option value="">Select Vehicle</option>
                      <option value="swift-dzire">Swift Dzire (4 seater)</option>
                      <option value="innova-crysta">Innova Crysta (7 seater)</option>
                      <option value="mahindra-thar">Mahindra Thar (4x4)</option>
                      <option value="tempo-traveller">Tempo Traveller (17-26 seater)</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1">Pickup Location</label>
                    <input
                      type="text"
                      name="pickup"
                      value={formData.pickup}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder:text-slate-500 outline-none focus:border-vintage-500 focus:ring-2 focus:ring-vintage-500/20 transition"
                      placeholder="e.g., Srinagar Airport"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1">Destination</label>
                    <input
                      type="text"
                      name="destination"
                      value={formData.destination}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder:text-slate-500 outline-none focus:border-vintage-500 focus:ring-2 focus:ring-vintage-500/20 transition"
                      placeholder="e.g., Gulmarg"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1">Date</label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition [&::-webkit-calendar-picker-indicator]:invert"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1">Time</label>
                    <input
                      type="time"
                      name="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition [&::-webkit-calendar-picker-indicator]:invert"
                      required
                    />
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-vintage-500 to-vintage-600 hover:from-vintage-600 hover:to-vintage-700 text-white font-semibold py-3.5 px-6 rounded-xl transition-all duration-300 shadow-lg shadow-vintage-500/30"
                  >
                    Confirm Booking
                  </button>
                </div>
              </form>

              <div className="mt-6 text-center">
                <p className="text-slate-400">Or book directly via WhatsApp:</p>
                <a
                  href="https://wa.me/918899666998"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center mt-3 bg-green-600 hover:bg-green-700 text-white font-medium py-2.5 px-6 rounded-full transition-colors"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CabsPage;
