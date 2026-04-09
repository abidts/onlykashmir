// Sample data for packages
export const packages = [
  {
    id: 1,
    name: 'Kashmir Bliss',
    duration: '4 Days / 3 Nights',
    image: 'https://res.cloudinary.com/dveg0ai0n/image/upload/v1771416621/gulmarg_wdwcyg.jpg',
    destinations: ['Srinagar', 'Gulmarg', 'Pahalgam'],
    groupSize: '2-6',
    rating: '4.8',
    reviews: 245,
    tag: 'Best Seller',
    tagColor: 'from-emerald-500 to-emerald-600',
    includes: ['Hotel', 'Breakfast', 'Cab', 'Shikara'],
  },
  {
    id: 2,
    name: 'Honeymoon Special',
    duration: '5 Days / 4 Nights',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80',
    destinations: ['Srinagar', 'Gulmarg', 'Pahalgam', 'Sonmarg'],
    groupSize: '2',
    rating: '4.9',
    reviews: 189,
    tag: 'Romantic',
    tagColor: 'from-rose-500 to-pink-600',
    includes: ['Luxury Hotel', 'All Meals', 'Houseboat', 'Gondola'],
  },
  {
    id: 3,
    name: 'Grand J&K',
    duration: '7 Days / 6 Nights',
    image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1200&q=80',
    destinations: ['Srinagar', 'Gulmarg', 'Pahalgam', 'Sonmarg', 'Leh'],
    groupSize: '2-10',
    rating: '5.0',
    reviews: 312,
    tag: 'Premium',
    tagColor: 'from-amber-500 to-orange-600',
    includes: ['5-Star', 'All Meals', 'Flights', 'Guide'],
  },
  {
    id: 4,
    name: 'Family Fun',
    duration: '6 Days / 5 Nights',
    image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?w=800&q=80',
    destinations: ['Srinagar', 'Gulmarg', 'Pahalgam', 'Dal Lake'],
    groupSize: '4-8',
    rating: '4.7',
    reviews: 198,
    tag: 'Family',
    tagColor: 'from-sky-500 to-blue-600',
    includes: ['Family Rooms', 'All Meals', 'Pony Ride', 'Shikara'],
  },
  {
    id: 5,
    name: 'Adventure Explorer',
    duration: '8 Days / 7 Nights',
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80',
    destinations: ['Srinagar', 'Sonmarg', 'Leh', 'Pangong', 'Nubra'],
    groupSize: '2-6',
    rating: '4.9',
    reviews: 156,
    tag: 'Adventure',
    tagColor: 'from-orange-500 to-red-600',
    includes: ['Camp + Hotel', 'All Meals', '4x4 Cab', 'Trek'],
  },
  {
    id: 6,
    name: 'Budget J&K',
    duration: '3 Days / 2 Nights',
    image: 'https://images.unsplash.com/photo-1609766857041-ed402ea8069a?w=800&q=80',
    destinations: ['Srinagar', 'Gulmarg'],
    groupSize: '2-4',
    rating: '4.6',
    reviews: 320,
    tag: 'Budget',
    tagColor: 'from-teal-500 to-cyan-600',
    includes: ['Hotel', 'Breakfast', 'Cab', 'Sightseeing'],
  },
];

// API functions
export const getPackages = async () => {
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(packages);
    }, 500);
  });
};

export const getPackageByName = async (name: string) => {
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => {
      const decodedName = name.replace(/-/g, ' ');
      const foundPackage = packages.find(
        (pkg) => pkg.name.toLowerCase() === decodedName
      );
      resolve(foundPackage || null);
    }, 500);
  });
};

export const searchPackages = async (query: string) => {
  // Simulate API call with search
  return new Promise((resolve) => {
    setTimeout(() => {
      const results = packages.filter(
        (pkg) =>
          pkg.name.toLowerCase().includes(query.toLowerCase()) ||
          pkg.destinations.some((dest) =>
            dest.toLowerCase().includes(query.toLowerCase())
          )
      );
      resolve(results);
    }, 500);
  });
};

// Sample data for destinations
export const destinations = [
  {
    id: 1,
    name: 'Srinagar',
    image: 'https://res.cloudinary.com/dveg0ai0n/image/upload/v1771496838/The_beautiful_city_of_Kashmir_acy9cu.jpg',
    description: 'The summer capital of Jammu and Kashmir, known for its beautiful Dal Lake and Mughal gardens.',
    rating: '4.7',
    reviews: 1245,
    tag: 'Popular',
  },
  {
    id: 2,
    name: 'Gulmarg',
    image: 'https://res.cloudinary.com/dveg0ai0n/image/upload/v1771415974/gulmarg_x6bu22.avif',
    description: 'Famous for its skiing resorts and the Gulmarg Gondola, one of the highest cable cars in the world.',
    rating: '4.8',
    reviews: 987,
    tag: 'Adventure',
  },
  {
    id: 3,
    name: 'Pahalgam',
    image: 'https://images.unsplash.com/photo-1564509180796-129e4f4f6de9?auto=format&fit=crop&w=800&q=80',
    description: 'A hill station known for its scenic beauty, golf courses, and as a base camp for Amarnath Yatra.',
    rating: '4.6',
    reviews: 856,
    tag: 'Scenic',
  },
  {
    id: 4,
    name: 'Sonamarg',
    image: 'https://res.cloudinary.com/dveg0ai0n/image/upload/v1771496838/winter_k6gzju.jpg',
    description: 'Known as the \'Meadow of Gold\', it serves as a base for the Amarnath Yatra and offers stunning Himalayan views.',
    rating: '4.5',
    reviews: 723,
    tag: 'Trekking',
  },
  {
    id: 5,
    name: 'Dal Lake',
    image: 'https://res.cloudinary.com/dveg0ai0n/image/upload/v1771496835/Peaceful_times__xcqpyh.jpg',
    description: 'Jewel of Srinagar with iconic houseboats, Shikara rides, and floating gardens.',
    rating: '4.9',
    reviews: 1320,
    tag: 'Houseboat Stay',
  },
  {
    id: 6,
    name: 'Leh Ladakh',
    image: 'https://images.unsplash.com/photo-1632979720170-9a1ab1b103d3?auto=format&fit=crop&w=800&q=80',
    description: 'High-altitude desert with monasteries, passes, and stark mountain landscapes.',
    rating: '5.0',
    reviews: 980,
    tag: 'Adventure',
  },
  {
    id: 7,
    name: 'Manasbal Lake',
    image: 'https://res.cloudinary.com/dveg0ai0n/image/upload/v1771496832/__1_tssjto.jpg',
    description: 'Lotus-filled freshwater lake ideal for quiet Shikara rides and birding.',
    rating: '4.7',
    reviews: 540,
    tag: 'Hidden Gem',
  },
  {
    id: 8,
    name: 'Sinthon Top',
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80',
    description: 'Panoramic high pass on the Anantnag–Kishtwar road with sweeping snowy vistas.',
    rating: '4.6',
    reviews: 310,
    tag: 'Scenic Drive',
  },
  {
    id: 9,
    name: 'Doodhpathri',
    image: 'https://res.cloudinary.com/dveg0ai0n/image/upload/v1771496836/Beautiful_Pakistan__ewbviq.jpg',
    description: 'Lush alpine meadow near Srinagar with the frothy Shaliganga stream and pines.',
    rating: '4.7',
    reviews: 620,
    tag: 'Alpine Meadow',
  },
  {
    id: 10,
    name: 'Drung Waterfall',
    image: 'https://res.cloudinary.com/dveg0ai0n/image/upload/v1771496837/Pin_on_Just_Wow_mfkguy.jpg',
    description: 'Waterfall near Tangmarg that freezes into giant icicles during winter.',
    rating: '4.6',
    reviews: 410,
    tag: 'Winter Marvel',
  },
  {
    id: 11,
    name: 'Mughal Gardens, Srinagar',
    image: 'https://res.cloudinary.com/dveg0ai0n/image/upload/v1771496841/Visit_with_us_kashmir_cheshma_shahi_vqgjqf.jpg',
    description: 'Terraced Persian-style gardens with fountains and Dal Lake views across Srinagar.',
    rating: '4.8',
    reviews: 890,
    tag: 'Heritage Gardens',
  },
  {
    id: 12,
    name: 'Amarnath Cave',
    image: 'https://res.cloudinary.com/dveg0ai0n/image/upload/v1771496839/Journey_to_Shri_Amarnath_Cave_cxxqte.jpg',
    description: 'Sacred Himalayan pilgrimage trek to the ice lingam shrine.',
    rating: '4.9',
    reviews: 760,
    tag: 'Pilgrimage',
  },
];

// Sample data for hotels
export const hotels = [
  {
    id: 1,
    name: 'The Lalit Grand Palace',
    location: 'Srinagar',
    image: 'https://res.cloudinary.com/dveg0ai0n/image/upload/v1771576479/Hotel_The_Lalit_Grand_Palace_Srinagar_Kashmir_n3z659.jpg',
    rating: '4.8',
    price: 12000,
    amenities: ['Free WiFi', 'Restaurant', 'Spa', 'Lake View'],
  },
  {
    id: 2,
    name: 'Khyber Himalayan Resort & Spa',
    location: 'Gulmarg',
    image: 'https://res.cloudinary.com/dveg0ai0n/image/upload/v1771580270/The_Khyber_Himalayan_Resort_Spa___The_Best_Luxury_Resort_in_Gulmarg_t2kgc1.jpg',
    rating: '4.9',
    price: 18000,
    amenities: ['Ski-in/Ski-out', 'Spa', 'Fine Dining', 'Mountain View'],
  },
  {
    id: 3,
    name: 'The Pahalgam Hotel',
    location: 'Pahalgam',
    image: 'https://images.unsplash.com/photo-1756156263665-8e4aa121b642?auto=format&fit=crop&w=800&q=80',
    rating: '4.6',
    price: 9500,
    amenities: ['Garden', 'Restaurant', 'Room Service', 'Valley View'],
  },
  {
    id: 4,
    name: 'Hotel Grand Mumtaz',
    location: 'KP Road, Adjoining the Main Golf Course, Anantnag, 192126',
    image: 'https://res.cloudinary.com/dveg0ai0n/image/upload/v1771576852/grand-mumtaz-resorts_abjdef.jpg',
    rating: '4.3',
    price: 7200,
    amenities: ['AC Rooms', 'Restaurant', 'Banquet', 'Parking'],
  },
  {
    id: 5,
    name: 'Hotel Heevan',
    location: 'Opposite Amusement Park, 192401',
    image: 'https://res.cloudinary.com/dveg0ai0n/image/upload/v1771576713/HeevanOutside_jqrezt.gif',
    rating: '4.4',
    price: 8500,
    amenities: ['Lake View', 'Restaurant', 'Room Service', 'Parking'],
  },
  {
    id: 6,
    name: 'Hotel Pine N Peak',
    location: 'Aru Road, Near Aru Amusement Park, Anantnag District, 192126',
    image: 'https://res.cloudinary.com/dveg0ai0n/image/upload/v1771580247/pine_peak_df4j35.webp',
    rating: '4.7',
    price: 12500,
    amenities: ['Mountain View', 'Spa', 'Restaurant', 'Fireplace Lounge'],
  },
  {
    id: 7,
    name: 'Hotel Al Mehar',
    location: '41 Bishember Nagar, 190001',
    image: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=800&q=80',
    rating: '4.1',
    price: 5200,
    amenities: ['AC Rooms', 'WiFi', 'Restaurant', 'Parking'],
  },
  {
    id: 8,
    name: 'Hotel City Grace',
    location: 'Baudo Bagh Khanyar, Near J&K Bank, 190001',
    image: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=800&q=80',
    rating: '4.0',
    price: 4800,
    amenities: ['WiFi', 'Room Service', 'Restaurant', 'Tour Desk'],
  },
  {
    id: 9,
    name: 'Hotel Grand Habib',
    location: 'Zero Bridge, Rajbagh, Next to Modern Hospital, 190008',
    image: 'https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?auto=format&fit=crop&w=800&q=80',
    rating: '4.2',
    price: 6400,
    amenities: ['WiFi', 'Restaurant', 'Conference Hall', 'Parking'],
  },
  {
    id: 10,
    name: 'Hotel Grand Mahal',
    location: 'Baudo Bagh Khanyar, Near J&K Bank, 190001',
    image: 'https://res.cloudinary.com/dveg0ai0n/image/upload/v1771580985/hotel-grand-mahal-telbal-pic-3_pvsxkg.jpg',
    rating: '4.1',
    price: 5600,
    amenities: ['Restaurant', 'WiFi', 'Room Service', 'Airport Pickup'],
  },
  {
    id: 11,
    name: 'Hotel Heevan Resorts',
    location: 'Gupt Ganga Ishwar, Opposite Deevan Colony, Nishat, 191121',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80',
    rating: '4.5',
    price: 11000,
    amenities: ['Garden', 'Lake View', 'Restaurant', 'Bonfire Area'],
  },
  {
    id: 12,
    name: 'Hotel Pamposh',
    location: 'Residency Road, Regal Chowk, Press Colony, 190001',
    image: 'https://res.cloudinary.com/dveg0ai0n/image/upload/v1771581105/pamposh_gkdggn.jpg',
    rating: '4.0',
    price: 5300,
    amenities: ['WiFi', 'Business Center', 'Room Service', 'Restaurant'],
  },
  {
    id: 13,
    name: 'Hotel Royal Batoo',
    location: 'Khayam Chowk, Near Khyber Hospital, Dalgate',
    image: 'https://res.cloudinary.com/dveg0ai0n/image/upload/v1771580247/DSC_9685_cqqkmc.jpg',
    rating: '4.3',
    price: 7800,
    amenities: ['Restaurant', 'WiFi', 'Room Service', 'Parking'],
  },
  {
    id: 14,
    name: 'Apollo Group of Houseboats',
    location: 'Dal Lake, Srinagar',
    image: 'https://res.cloudinary.com/dveg0ai0n/image/upload/v1771580268/__5_aiz3r1.jpg',
    rating: '4.6',
    price: 9800,
    type: 'Houseboat',
    amenities: ['Lake View', 'Room Service', 'WiFi', 'Traditional Cuisine'],
  },
  {
    id: 15,
    name: 'Jigar Palace Houseboat',
    location: 'Nigeen Lake, Srinagar',
    image: 'https://res.cloudinary.com/dveg0ai0n/image/upload/v1771576715/hollywood_m3rjzr.jpg',
    rating: '4.5',
    price: 8900,
    type: 'Houseboat',
    amenities: ['Lake View', 'WiFi', 'Breakfast Included', 'Boat Pickup'],
  },
  {
    id: 16,
    name: 'Holly Wood Group of Houseboats',
    location: 'Dal Lake, Srinagar',
    image: 'https://res.cloudinary.com/dveg0ai0n/image/upload/v1771580268/__4_fduntx.jpg',
    rating: '4.4',
    price: 8400,
    type: 'Houseboat',
    amenities: ['Sun Deck', 'Room Service', 'WiFi', 'Lake Transfers'],
  },
  {
    id: 17,
    name: 'Sea Palace Houseboat',
    location: 'Dal Lake, Srinagar',
    image: 'https://res.cloudinary.com/dveg0ai0n/image/upload/v1771580271/New_Sea_Palace_Houseboats_hd2c7c.jpg',
    rating: '4.5',
    price: 9100,
    type: 'Houseboat',
    amenities: ['Lake View', 'Restaurant', 'WiFi', 'Airport Pickup'],
  },
  {
    id: 18,
    name: 'Royal Dandoo Houseboat',
    location: 'Nigeen Lake, Srinagar',
    image: 'https://res.cloudinary.com/dveg0ai0n/image/upload/v1771580268/__6_hgbtel.jpg',
    rating: '4.6',
    price: 9700,
    type: 'Houseboat',
    amenities: ['Lake View', 'Room Service', 'WiFi', 'Deck Seating'],
  },
  {
    id: 19,
    name: 'Shabnam Group of Houseboat',
    location: 'Dal Lake, Srinagar',
    image: 'https://res.cloudinary.com/dveg0ai0n/image/upload/v1771580270/Shabnam_Group_Of_Houseboats_f0vv00.jpg',
    rating: '4.3',
    price: 8200,
    type: 'Houseboat',
    amenities: ['Lake View', 'Traditional Décor', 'WiFi', 'Breakfast Included'],
  },
  {
    id: 20,
    name: 'Khyber Himalayan Resort',
    location: 'Gulmarg, Kashmir',
    image: 'https://res.cloudinary.com/dveg0ai0n/image/upload/v1771580270/The_Khyber_Himalayan_Resort_Spa___The_Best_Luxury_Resort_in_Gulmarg_t2kgc1.jpg',
    rating: '4.9',
    price: 18500,
    type: 'Luxury',
    amenities: ['Ski Access', 'Spa', 'Heated Pool', 'Fine Dining'],
  },
];

// Sample data for cabs
export const cabs = [
  {
    id: 1,
    type: 'Sedan',
    name: 'Toyota Etios',
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/16/2016_Toyota_Etios_%28XP150%29_sedan_%28front%29.jpg',
    capacity: 4,
    pricePerKm: 15,
    features: ['AC', 'Music', 'Comfortable Seats'],
  },
  {
    id: 2,
    type: 'SUV',
    name: 'Toyota Innova Crysta',
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/52/Toyota_Innova_Crysta_2.8_ZX_AT_%28front_view%29%2C_Bhopal.jpg',
    capacity: 7,
    pricePerKm: 20,
    features: ['AC', 'Extra Luggage Space', 'Comfortable for Long Drives'],
  },
  {
    id: 3,
    type: 'Luxury',
    name: 'Mercedes-Benz E-Class',
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/0f/Mercedes-Benz_W213_IMG_0392.jpg',
    capacity: 3,
    pricePerKm: 35,
    features: ['Premium Interior', 'WiFi', 'Refreshments', 'Professional Driver'],
  },
];

// API functions for other entities
export const getDestinations = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(destinations);
    }, 500);
  });
};

export const getHotels = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(hotels);
    }, 500);
  });
};

export const getCabs = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(cabs);
    }, 500);
  });
};

// Search function for all entities
export const searchAll = async (query: string) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const results = {
        packages: packages.filter(
          (pkg) =>
            pkg.name.toLowerCase().includes(query.toLowerCase()) ||
            pkg.destinations.some((dest) =>
              dest.toLowerCase().includes(query.toLowerCase())
            )
        ),
        destinations: destinations.filter(
          (dest) =>
            dest.name.toLowerCase().includes(query.toLowerCase()) ||
            dest.description.toLowerCase().includes(query.toLowerCase())
        ),
        hotels: hotels.filter(
          (hotel) =>
            hotel.name.toLowerCase().includes(query.toLowerCase()) ||
            hotel.location.toLowerCase().includes(query.toLowerCase())
        ),
        cabs: cabs.filter((cab) =>
          cab.name.toLowerCase().includes(query.toLowerCase()) ||
          cab.type.toLowerCase().includes(query.toLowerCase())
        ),
      };
      resolve(results);
    }, 500);
  });
};
