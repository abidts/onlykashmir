import { useContext } from 'react';
import { Star, MapPin, Wifi, Utensils, Mountain, Car, Phone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CallbackContext } from './Layout';

const featuredHotels = [
  {
    name: 'The LaLiT Grand Palace Srinagar',
    location: 'Srinagar',
    image: 'https://res.cloudinary.com/dveg0ai0n/image/upload/v1771580269/Hotel_The_Lalit_Grand_Palace_Srinagar_Kashmir_g5mulq.jpg',
    rating: 4.9,
    amenities: ['Wifi', 'Restaurant', 'Spa', 'Pool'],
    type: 'Luxury',
  },
  {
    name: 'The Khyber Himalayan Resort & Spa',
    location: 'Gulmarg',
    image: 'https://images.unsplash.com/photo-1486944670663-e0a2ea5018eb?auto=format&fit=crop&w=800&q=80',
    rating: 4.9,
    amenities: ['Ski Access', 'Restaurant', 'Spa', 'Bar'],
    type: 'Luxury',
  },
  {
    name: 'Radisson Collection Hotel & Spa, Riverfront Srinagar',
    location: 'Srinagar',
    image: 'https://images.unsplash.com/photo-1758448756167-88dc934c58e4?auto=format&fit=crop&w=800&q=80',
    rating: 4.8,
    amenities: ['Wifi', 'Restaurant', 'Spa', 'River View'],
    type: 'Luxury',
  },
];

export default function Hotels({ showViewAll = true }: { showViewAll?: boolean }) {
  const onRequestCallback = useContext(CallbackContext) || (() => {});
  const getAmenityIcon = (amenity: string) => {
    switch (amenity) {
      case 'Wifi':
        return <Wifi className="h-3 w-3" />;
      case 'Restaurant':
        return <Utensils className="h-3 w-3" />;
      case 'Ski Access':
        return <Mountain className="h-3 w-3" />;
      case 'Car Parking':
        return <Car className="h-3 w-3" />;
      default:
        return null;
    }
  };

  return (
    <div className="py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {featuredHotels.map((hotel) => (
          <div
            key={hotel.name}
            className="group relative overflow-hidden rounded-2xl bg-slate-900 border border-slate-800 transition-all duration-300 hover:border-amber-500/50 hover:shadow-xl hover:shadow-amber-500/10"
          >
            {/* Image */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={hotel.image}
                alt={hotel.name}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent" />

              {/* Rating badge */}
              <div className="absolute top-2 right-2 flex items-center gap-1 rounded-full bg-black/60 backdrop-blur-sm px-2 py-0.5 text-xs font-medium text-white">
                <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                {hotel.rating}
              </div>

              {/* Type tag */}
              <div className="absolute top-2 left-2">
                <span className="rounded-full bg-amber-500/90 px-2.5 py-0.5 text-xs font-bold text-white">
                  {hotel.type}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-bold text-white font-playfair">{hotel.name}</h3>
                  <div className="flex items-center gap-1 text-emerald-400 mt-0.5">
                    <MapPin className="h-3.5 w-3.5" />
                    <span className="text-xs">{hotel.location}</span>
                  </div>
                </div>
              </div>

              {/* Amenities */}
              <div className="mt-3 flex flex-wrap gap-1.5">
                {hotel.amenities.map(amenity => (
                  <span
                    key={amenity}
                    className="flex items-center gap-1 rounded-full bg-slate-800/80 px-2 py-0.5 text-[10px] text-slate-300"
                  >
                    {getAmenityIcon(amenity)}
                    {amenity}
                  </span>
                ))}
              </div>

              {/* CTA Button */}
              <button
                onClick={() => onRequestCallback()}
                className="mt-3 w-full flex items-center justify-center gap-2 rounded-xl bg-amber-500/10 border border-amber-500/20 px-3 py-2 text-sm font-semibold text-amber-400 transition-all hover:bg-amber-500 hover:text-white hover:border-amber-500"
              >
                <Phone className="h-3.5 w-3.5" />
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* View All Link - only show if showViewAll is true */}
      {showViewAll && (
        <div className="mt-8 text-center">
          <Link
            to="/hotels"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-vintage-500 to-vintage-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-vintage-500/30 transition-all hover:shadow-vintage-500/50 hover:scale-105"
          >
            View All Hotels
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      )}
    </div>
  );
}
