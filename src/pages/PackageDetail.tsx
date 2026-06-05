import { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { CallbackContext } from '../components/Layout';
import {
  ArrowLeft,
  MapPin,
  Star,
  Clock,
  Users,
  Calendar,
  Phone,
  Check,
  X,
  Sparkles,
  Mountain,
  Utensils,
  Bed,
  Car
} from 'lucide-react';

interface ItineraryDay {
  day: number;
  title: string;
  description: string;
}

interface PackageData {
  name: string;
  slug: string;
  duration: string;
  image: string;
  destinations: string[];
  groupSize: string;
  rating: string;
  reviews: number;
  tag: string;
  tagColor: string;
  description: string;
  highlights: string[];
  itinerary: ItineraryDay[];
  images: string[];
  price: {
    perPerson: number;
    discount: number;
    includes: string[];
    excludes: string[];
  };
}

const packages: Record<string, PackageData> = {
  'short-adventure-trip': {
    name: 'Short & Adventure Trip',
    slug: 'short-adventure-trip',
    duration: '3 Days / 2 Nights',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&q=80',
    destinations: ['Srinagar', 'Gulmarg', 'Tangmarg', 'Dal Lake'],
    groupSize: '2-6',
    rating: '4.8',
    reviews: 164,
    tag: 'Adventure',
    tagColor: 'from-orange-500 to-red-600',
    description: 'A fast-paced Kashmir escape that packs Srinagar charm, Gulmarg adrenaline, and houseboat nostalgia into three unforgettable days.',
    highlights: [
      'Compact 3-day plan with airport transfers',
      'Srinagar Mughal gardens and Shankaracharya Temple',
      'Full-day Gulmarg adventure with Gondola options',
      'Houseboat stay on Dal or Nigeen Lake',
      'All key transfers, meals, and activities covered'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival & Srinagar City',
        description: 'Arrive at Srinagar International Airport. Local sightseeing covering Nishat Bagh, Shalimar Bagh, Chashma Shahi, Shankaracharya Temple, Botanical Garden, Boulevard Road and Dal Lake. Overnight stay in a Srinagar hotel.'
      },
      {
        day: 2,
        title: 'Gulmarg Adventure',
        description: 'Full-day trip to Gulmarg via Tangmarg and apple gardens. Options for sledging, skiing, ATV, and Gondola rides (both phases: Kongdori & Affarwat). Visit Drung Waterfall by ATV or taxi. Overnight in a houseboat on Dal or Nigeen Lake.'
      },
      {
        day: 3,
        title: 'Departure',
        description: 'Breakfast then transfer to Srinagar Airport with memories of your Short & Adventure Trip.'
      }
    ],
    images: [
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&q=80',
      'https://images.unsplash.com/photo-1597074866923-dc0589150bf6?w=800&q=80',
      'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80',
      'https://images.unsplash.com/photo-1609766857041-ed402ea8069a?w=800&q=80'
    ],
    price: {
      perPerson: 14999,
      discount: 12,
      includes: [
        'Accommodation in hotel + houseboat',
        'Daily meals as per plan',
        'Airport transfers & local transport',
        'Sightseeing as per itinerary',
        'Assistance for Gondola & adventure tickets'
      ],
      excludes: [
        'Airfare',
        'Adventure activity tickets (Gondola/ATV/skiing)',
        'Personal expenses',
        'Guide and entry fees not mentioned',
        'Travel insurance'
      ]
    }
  },
  'jk-bliss': {
    name: 'Kashmir Bliss',
    slug: 'jk-bliss',
    duration: '4 Days / 3 Nights',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&q=80',
    destinations: ['Srinagar', 'Gulmarg', 'Pahalgam'],
    groupSize: '2-6',
    rating: '4.8',
    reviews: 245,
    tag: 'Best Seller',
    tagColor: 'from-vintage-500 to-vintage-600',
    description: 'The best time to strengthen your bonds with your family and make the best memories with them is during a fun-filled vacation with family. And the best place for family vacation is none other than Kashmir. The nice weather, scenic locations and delicious food adds to strengthening bondings with the family and makes the trip way more special for you. You can explore various options from the Kashmir Tour Package for Family for your vacations.',
    highlights: [
      'Stay in premium hotels with breakfast included',
      'Guided sightseeing tours to all major attractions',
      'Comfortable transportation with an experienced driver',
      'Enjoy traditional Kashmiri cuisine',
      'Visit local markets and handicraft centers',
      'Shikara ride on Dal Lake',
      'Gondola ride in Gulmarg'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Srinagar',
        description: 'On your First day after reaching Srinagar and pick up from the airport, go to the houseboat for check-in and take some rest. Have a nice lunch there, then go for a Shikara ride. You will feel a soothing ride in Shikara and will be able to witness life in Dal Lake. Then you can visit Nehru Park which is a small park in the middle of Dal Lake. After an amazing Shikara ride go again to the Houseboat and have dinner and spend your night there. This will be your first day of Kashmir Holiday Packages.'
      },
      {
        day: 2,
        title: 'Srinagar to Pahalgam',
        description: 'Have a Breakfast in Srinagar houseboat and then start your journey towards the Pahalgam which will take at least 2 hours. Pahalgam is a place with breathtaking beauty. Here you will visit Martand Sun Temple, Lidder Valley and Rumi Park. You can also do the water boating, and paragliding. After spending the whole day witnessing pahalgam, check in at any of the hotels of your choice and spend a night there. This will be your amazing second day with Kashmir holiday Packages.'
      },
      {
        day: 3,
        title: 'Pahalgam to Gulmarg',
        description: 'In the early morning, have a nice breakfast at the hotel in Pahalgam. Then move towards Gulmarg. Gulmarg is a dream destination of every tourist from India. Here you will spend your leisure time. You can go for a Gondola Ride from Apharwat peak of Gulmarg. Then you can go for long Nature walks in its scenic environment. Also you can go for Bird Watching and then move again to Srinagar and check-in and spend a night there.'
      },
      {
        day: 4,
        title: 'Srinagar (Lal Chowk) & Departure',
        description: 'Have a good and tasty breakfast at the Srinagar hotel. Then proceed to explore Lal Chowk, the heart of Srinagar city. Visit the famous clock tower, shop for Kashmiri handicrafts, dry fruits, and souvenirs at the local markets. Experience the vibrant culture and bustling marketplace of the old city. After exploring Lal Chowk, you will be transferred to Srinagar Airport for your departure journey, carrying back beautiful memories of Kashmir.'
      }
    ],
    images: [
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&q=80',
      'https://images.unsplash.com/photo-1581791534721-e599df4417f6?w=800&q=80',
      'https://images.unsplash.com/photo-1600702653377-2bbad1049612?w=800&q=80',
      'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?w=800&q=80'
    ],
    price: {
      perPerson: 12999,
      discount: 20,
      includes: [
        'Accommodation in 3/4/5 star hotels',
        'Daily breakfast & dinner',
        'Sightseeing as per itinerary',
        'Transfers and transportation',
        'Shikara ride on Dal Lake',
        'All applicable taxes'
      ],
      excludes: [
        'Air/train tickets',
        'Lunch and other meals not mentioned',
        'Personal expenses',
        'Guide & entrance fees',
        'Gondola ride charges',
        'Any adventure activities'
      ]
    }
  },
  'honeymoon-special': {
    name: 'Honeymoon Special',
    slug: 'honeymoon-special',
    duration: '5 Days / 4 Nights',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1200&q=80',
    destinations: ['Srinagar', 'Gulmarg', 'Pahalgam', 'Sonmarg'],
    groupSize: '2',
    rating: '4.9',
    reviews: 189,
    tag: 'Romantic',
    tagColor: 'from-rose-500 to-pink-600',
    description: 'Embark on the journey of a lifetime with our specially curated Honeymoon Package. Experience the romance of Kashmir with your loved one amidst breathtaking landscapes, serene lakes, and luxurious accommodations. Create memories that will last a lifetime.',
    highlights: [
      'Luxury houseboat stay on Dal Lake',
      'Private candlelight dinner',
      'Couple spa treatments',
      'Sunset Shikara ride',
      'Gondola ride in Gulmarg',
      'Photography session'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Srinagar',
        description: 'Welcome to Kashmir! On arrival at Srinagar Airport, you will be greeted by our representative and transferred to your luxury houseboat on Dal Lake. Enjoy a welcome drink and check-in. Evening at leisure for a romantic Shikara ride to witness the stunning sunset over the lake.'
      },
      {
        day: 2,
        title: 'Srinagar to Gulmarg',
        description: 'After breakfast, drive to Gulmarg, the meadow of flowers. Enjoy a romantic gondola ride to Apharwat Peak with stunning views of snow-capped mountains. Evening at leisure for a candlelight dinner at your hotel.'
      },
      {
        day: 3,
        title: 'Gulmarg to Pahalgam',
        description: 'Post breakfast, proceed to Pahalgam, the valley of love. Enroute visit the ancient Martand Sun Temple. Check into your hotel and enjoy the evening at Betaab Valley. Optional activities include horse riding and paragliding.'
      },
      {
        day: 4,
        title: 'Pahalgam to Srinagar',
        description: 'After breakfast, explore the beautiful valleys of Pahalgam including Aru Valley and Chandanwari. Return to Srinagar in the evening. Visit the famous Mughal Gardens - Shalimar Bagh and Nishat Bagh.'
      },
      {
        day: 5,
        title: 'Departure',
        description: 'After breakfast, check out from the hotel. Transfer to Srinagar Airport for your onward journey with beautiful memories of Kashmir.'
      }
    ],
    images: [
      'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1200&q=80',
      'https://images.unsplash.com/photo-1597074866923-dc0589150bf6?w=800&q=80',
      'https://images.unsplash.com/photo-1581791534721-e599df4417f6?w=800&q=80',
      'https://images.unsplash.com/photo-1600702653377-2bbad1049612?w=800&q=80'
    ],
    price: {
      perPerson: 18999,
      discount: 15,
      includes: [
        'Luxury houseboat accommodation',
        'Daily breakfast & dinner',
        'Private transportation',
        'Gondola ride tickets',
        'Welcome drink on arrival',
        'Candlelight dinner',
        'All taxes'
      ],
      excludes: [
        'Airfare',
        'Lunch',
        'Personal expenses',
        'Camera fees',
        'Adventure activities',
        'Travel insurance'
      ]
    }
  },
  'grand-jk': {
    name: 'Grand J&K',
    slug: 'grand-jk',
    duration: '6 Days / 5 Nights',
    image: 'https://images.unsplash.com/photo-1537126694932-c0f39026528e?w=1200&q=80',
    destinations: ['Srinagar', 'Pahalgam', 'Gulmarg', 'Sonmarg'],
    groupSize: '2-10',
    rating: '5.0',
    reviews: 312,
    tag: 'Premium',
    tagColor: 'from-amber-500 to-orange-600',
    description: 'Experience the ultimate Kashmir journey with our Grand J&K package. This comprehensive itinerary covers all the major attractions of Kashmir Valley. Perfect for those who want to explore everything Kashmir has to offer.',
    highlights: [
      'Complete Kashmir Valley experience',
      'Stay in premium hotels',
      'All major sightseeing included',
      'Gondola ride in Gulmarg',
      'Thajiwas Glacier visit',
      'Lal Chowk market tour'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Srinagar',
        description: 'Arrive at Srinagar and transfer to hotel. Evening Shikara ride on Dal Lake to witness the floating gardens and life on the lake. Overnight stay at hotel.'
      },
      {
        day: 2,
        title: 'Srinagar to Pahalgam',
        description: 'After breakfast, drive to Pahalgam, the valley of love. Enroute visit the ancient Martand Sun Temple. Check into hotel and enjoy the serene beauty of Lidder River. Evening at leisure for local market exploration. Overnight stay in Pahalgam.'
      },
      {
        day: 3,
        title: 'Pahalgam to Gulmarg',
        description: 'Proceed to Gulmarg after breakfast. Enjoy the scenic drive through beautiful valleys. Check into hotel and take the Gondola ride to Kongdoori and Apharwat Peak. Explore the golf course and meadows. Overnight in Gulmarg.'
      },
      {
        day: 4,
        title: 'Gulmarg to Sonmarg',
        description: 'Drive to Sonmarg, the meadow of gold. Enroute enjoy the stunning mountain views. Visit the magnificent Thajiwas Glacier on pony back. Enjoy the views of snow-capped peaks and the Sindh River. Overnight in Sonmarg.'
      },
      {
        day: 5,
        title: 'Sonmarg to Srinagar',
        description: 'After breakfast, drive back to Srinagar. Check into hotel and spend the evening at leisure. Optional visit to Mughal Gardens - Shalimar Bagh and Nishat Bagh. Overnight stay in Srinagar.'
      },
      {
        day: 6,
        title: 'Srinagar (Lal Chowk) & Departure',
        description: 'Have a good and tasty breakfast at the Srinagar hotel. Then proceed to explore Lal Chowk, the heart of Srinagar city. Visit the famous clock tower, shop for Kashmiri handicrafts, dry fruits, and souvenirs at the local markets. Experience the vibrant culture and bustling marketplace of the old city. After exploring Lal Chowk, you will be transferred to Srinagar Airport for your departure journey, carrying back beautiful memories of Kashmir.'
      }
    ],
    images: [
      'https://images.unsplash.com/photo-1537126694932-c0f39026528e?w=1200&q=80',
      'https://images.unsplash.com/photo-1597074866923-dc0589150bf6?w=800&q=80',
      'https://images.unsplash.com/photo-1581791534721-e599df4417f6?w=800&q=80',
      'https://images.unsplash.com/photo-1609766857041-ed402ea8069a?w=800&q=80'
    ],
    price: {
      perPerson: 28999,
      discount: 10,
      includes: [
        '5 nights accommodation',
        'Daily breakfast & dinner',
        'All transfers and sightseeing',
        'Gondola ride Phase 1',
        'Pony ride at Thajiwas Glacier',
        'All taxes'
      ],
      excludes: [
        'Flights to/from Kashmir',
        'Lunch',
        'Personal expenses',
        'Entry fees',
        'Travel insurance'
      ]
    }
  },
  'family-fun': {
    name: 'Family Fun',
    slug: 'family-fun',
    duration: '6 Days / 5 Nights',
    image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?w=1200&q=80',
    destinations: ['Srinagar', 'Gulmarg', 'Pahalgam', 'Dal Lake'],
    groupSize: '4-19',
    rating: '4.7',
    reviews: 198,
    tag: 'Family',
    tagColor: 'from-vintage-400 to-vintage-700',
    description: 'A perfect family vacation package that balances sightseeing with leisure time. Designed keeping in mind the needs of families with children and elderly members. Enjoy quality time together in the lap of nature.',
    highlights: [
      'Family-friendly hotels',
      'Relaxed itinerary',
      'Kid-friendly activities',
      'Spacious transportation',
      'All major attractions',
      'Flexible meal timings'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Srinagar',
        description: 'Arrive at Srinagar Airport and transfer to hotel. Rest and acclimatize. Evening visit to Dal Lake for a family Shikara ride. Kids will enjoy feeding the birds. Overnight at hotel.'
      },
      {
        day: 2,
        title: 'Srinagar Local Sightseeing',
        description: 'After breakfast, visit the famous Mughal Gardens - Shalimar Bagh, Nishat Bagh, and Chashme Shahi. These gardens are perfect for family photos. Visit Shankaracharya Temple for panoramic views.'
      },
      {
        day: 3,
        title: 'Srinagar to Gulmarg',
        description: 'Drive to Gulmarg after breakfast. Enjoy the scenic beauty and take the Gondola ride. Kids will love the pony rides and playing in the meadows. Overnight stay in Gulmarg.'
      },
      {
        day: 4,
        title: 'Gulmarg to Pahalgam',
        description: 'Proceed to Pahalgam. Enroute visit the ancient Martand Sun Temple. Check into hotel and enjoy the evening at leisure. Kids can play in the hotel premises while adults relax.'
      },
      {
        day: 5,
        title: 'Pahalgam Sightseeing',
        description: 'Visit Betaab Valley and Aru Valley. These places offer easy walking trails suitable for all ages. Enjoy boating at Lidder River. Return to hotel for overnight stay.'
      },
      {
        day: 6,
        title: 'Departure',
        description: 'After breakfast, check out and transfer to Srinagar Airport. Shop for souvenirs at Lal Chowk if time permits. Depart with beautiful memories.'
      }
    ],
    images: [
      'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?w=1200&q=80',
      'https://images.unsplash.com/photo-1597074866923-dc0589150bf6?w=800&q=80',
      'https://images.unsplash.com/photo-1581791534721-e599df4417f6?w=800&q=80',
      'https://images.unsplash.com/photo-1600702653377-2bbad1049612?w=800&q=80'
    ],
    price: {
      perPerson: 16999,
      discount: 18,
      includes: [
        'Family rooms/suites',
        'Daily breakfast & dinner',
        'All transfers',
        'Shikara ride',
        'Sightseeing as per itinerary',
        'Child-friendly meals',
        'All taxes'
      ],
      excludes: [
        'Airfare',
        'Lunch',
        'Gondola ride',
        'Boating charges',
        'Personal expenses',
        'Travel insurance'
      ]
    }
  },
  'adventure-explorer': {
    name: 'Adventure Explorer',
    slug: 'adventure-explorer',
    duration: '8 Days / 7 Nights',
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=1200&q=80',
    destinations: ['Srinagar', 'Sonmarg', 'Leh', 'Pangong', 'Nubra'],
    groupSize: '2-6',
    rating: '4.9',
    reviews: 156,
    tag: 'Adventure',
    tagColor: 'from-orange-500 to-red-600',
    description: 'For the thrill-seekers and adventure enthusiasts! This package takes you through the most challenging and rewarding terrains of Kashmir and Ladakh. Experience high-altitude lakes, mountain passes, and unforgettable adventures.',
    highlights: [
      'Pangong Lake camping',
      'Nubra Valley exploration',
      'River rafting on Indus',
      'Khardung La Pass',
      'Camel safari in Hunder',
      'Trekking opportunities'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Srinagar',
        description: 'Arrive at Srinagar and meet our adventure guide. Briefing about the upcoming adventure. Overnight stay in Srinagar.'
      },
      {
        day: 2,
        title: 'Srinagar to Sonmarg',
        description: 'Drive to Sonmarg. Visit Thajiwas Glacier. Prepare for the high-altitude journey ahead. Overnight in Sonmarg.'
      },
      {
        day: 3,
        title: 'Sonmarg to Leh via Zoji La',
        description: 'Cross the famous Zoji La Pass (3,450m). Drive through Dras, the second coldest inhabited place. Visit Kargil War Memorial. Arrive in Leh and rest for acclimatization.'
      },
      {
        day: 4,
        title: 'Leh Local Sightseeing',
        description: 'Visit Leh Palace, Shanti Stupa, and local monasteries. Explore the Tibetan market. Prepare for Pangong journey.'
      },
      {
        day: 5,
        title: 'Leh to Pangong Lake',
        description: 'Drive to the stunning Pangong Lake (4,350m) via Chang La Pass. The lake changes colors throughout the day. Camping by the lakeside under the stars.'
      },
      {
        day: 6,
        title: 'Pangong to Nubra Valley',
        description: 'Cross Khardung La, one of the world\'s highest motorable passes (5,359m). Descend into Nubra Valley. Visit Diskit Monastery. Overnight in Hunder.'
      },
      {
        day: 7,
        title: 'Nubra Valley to Leh',
        description: 'Morning camel safari in the Hunder sand dunes. Visit Sumur village and Panamik hot springs. Return to Leh. Farewell dinner.'
      },
      {
        day: 8,
        title: 'Departure',
        description: 'Transfer to Leh Airport with memories of a lifetime. Until we meet again!'
      }
    ],
    images: [
      'https://images.unsplash.com/photo-1551632811-561732d1e306?w=1200&q=80',
      'https://images.unsplash.com/photo-1537126694932-c0f39026528e?w=800&q=80',
      'https://images.unsplash.com/photo-1609766857041-ed402ea8069a?w=800&q=80',
      'https://images.unsplash.com/photo-1581791534721-e599df4417f6?w=800&q=80'
    ],
    price: {
      perPerson: 42999,
      discount: 12,
      includes: [
        '7 nights accommodation',
        'All meals during journey',
        '4x4 vehicle for Ladakh',
        'Camping equipment at Pangong',
        'Permits and fees',
        'Oxygen cylinders',
        'First aid support'
      ],
      excludes: [
        'Flights',
        'Personal gear',
        'Travel insurance (mandatory)',
        'Personal expenses',
        'Tips',
        'Any extra activities'
      ]
    }
  },
  'budget-jk': {
    name: 'Budget J&K',
    slug: 'budget-jk',
    duration: '3 Days / 2 Nights',
    image: 'https://images.unsplash.com/photo-1609766857041-ed402ea8069a?w=1200&q=80',
    destinations: ['Srinagar', 'Gulmarg'],
    groupSize: '2-4',
    rating: '4.6',
    reviews: 320,
    tag: 'Budget',
    tagColor: 'from-vintage-400 to-vintage-600',
    description: 'Experience the magic of Kashmir without breaking the bank. This budget-friendly package covers the essential attractions of Srinagar and Gulmarg. Perfect for backpackers and budget-conscious travelers.',
    highlights: [
      'Affordable accommodation',
      'Essential sightseeing',
      'Local experience',
      'Flexible itinerary',
      'Group tours available',
      'Best value for money'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Srinagar',
        description: 'Arrive at Srinagar and check into budget hotel/houseboat. Evening Shikara ride on Dal Lake. Visit local markets at Lal Chowk. Overnight stay.'
      },
      {
        day: 2,
        title: 'Srinagar to Gulmarg Day Trip',
        description: 'Early morning drive to Gulmarg. Enjoy the meadows and take the Gondola ride (own expense). Return to Srinagar in the evening. Visit Mughal Gardens if time permits.'
      },
      {
        day: 3,
        title: 'Departure',
        description: 'After breakfast, check out. Visit Shankaracharya Temple for final views of Srinagar. Transfer to airport for departure.'
      }
    ],
    images: [
      'https://images.unsplash.com/photo-1609766857041-ed402ea8069a?w=1200&q=80',
      'https://images.unsplash.com/photo-1597074866923-dc0589150bf6?w=800&q=80',
      'https://images.unsplash.com/photo-1581791534721-e599df4417f6?w=800&q=80',
      'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?w=800&q=80'
    ],
    price: {
      perPerson: 7999,
      discount: 25,
      includes: [
        '2 nights accommodation',
        'Daily breakfast',
        'All transfers',
        'Sightseeing by shared cab',
        'Shikara ride',
        'All taxes'
      ],
      excludes: [
        'Airfare',
        'Lunch & dinner (except Day 1)',
        'Gondola ride',
        'Entry fees',
        'Personal expenses',
        'Tips'
      ]
    }
  },
  'kashmir-with-katra': {
    name: 'Kashmir With Katra',
    slug: 'kashmir-with-katra',
    duration: '6 Nights / 7 Days',
    image: 'https://res.cloudinary.com/dveg0ai0n/image/upload/v1772188951/katra_w2iqdq.jpg',
    destinations: ['Srinagar', 'Gulmarg', 'Pahalgam', 'Katra'],
    groupSize: '2-8',
    rating: '4.9',
    reviews: 178,
    tag: 'Spiritual',
    tagColor: 'from-amber-500 to-orange-600',
    description: 'Experience the perfect blend of Kashmir\'s natural beauty and spiritual devotion at Vaishno Devi. This unique package combines serene Kashmir tours with a sacred pilgrimage to Katra, making it ideal for spiritual seekers and families alike.',
    highlights: [
      'Spiritual Vaishno Devi darshan at Katra',
      'Luxury stay in premium hotels',
      'Private cab for comfortable travel',
      'Complete Kashmir sightseeing',
      'All meals included',
      'Houseboat experience on Dal Lake',
      'Gondola ride in Gulmarg'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Jammu - Transfer to Katra',
        description: 'Arrive at Jammu Airport and receive a warm welcome. Transfer to Katra (approx 1.5-2 hours). Check into hotel and rest. Evening at leisure for shopping at Katra market. Overnight stay in Katra.'
      },
      {
        day: 2,
        title: 'Vaishno Devi Darshan',
        description: 'Early morning start for Vaishno Devi pilgrimage. Trek or use pony/palki services to reach the holy shrine for darshan. After darshan, return to hotel and rest. Overnight in Katra.'
      },
      {
        day: 3,
        title: 'Katra to Pahalgam',
        description: 'After breakfast, drive to Pahalgam - the valley of love (approx 4-5 hours). Check into hotel and enjoy the scenic beauty of Lidder Valley. Evening at leisure. Overnight stay in Pahalgam.'
      },
      {
        day: 4,
        title: 'Pahalgam to Srinagar',
        description: 'After breakfast, drive to Srinagar (approx 2-3 hours). Check into hotel/houseboat. Evening enjoy a relaxing Shikara ride on Dal Lake. Overnight stay in Srinagar.'
      },
      {
        day: 5,
        title: 'Sonamarg Day Trip',
        description: 'Full day excursion to Sonamarg - the meadow of gold. Enjoy the stunning views of Thajiwas Glacier and the Sind River. Return to Srinagar in the evening. Overnight stay.'
      },
      {
        day: 6,
        title: 'Gulmarg Day Trip',
        description: 'After breakfast, drive to Gulmarg - the meadow of flowers. Enjoy the Gondola ride to Apharwat Peak. Explore the scenic beauty and snow-capped peaks. Return to Srinagar. Overnight stay.'
      },
      {
        day: 7,
        title: 'Departure',
        description: 'After breakfast, check out and transfer to Srinagar Airport. Depart with blessings of Mata Vaishno Devi and beautiful memories of Kashmir.'
      }
    ],
    images: [
      'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1200&q=80',
      'https://images.unsplash.com/photo-1597074866923-dc0589150bf6?w=800&q=80',
      'https://images.unsplash.com/photo-1581791534721-e599df4417f6?w=800&q=80',
      'https://images.unsplash.com/photo-1600702653377-2bbad1049612?w=800&q=80'
    ],
    price: {
      perPerson: 24999,
      discount: 15,
      includes: [
        '6 nights luxury accommodation',
        'All meals (breakfast, lunch, dinner)',
        'Private cab for all transfers',
        'Vaishno Devi pilgrimage arrangements',
        'Gondola ride in Gulmarg',
        'Shikara ride on Dal Lake',
        'All taxes and service charges'
      ],
      excludes: [
        'Airfare to/from Srinagar',
        'Vaishno Devi trek charges (pony/palki)',
        'Personal expenses',
        'Camera fees at monuments',
        'Travel insurance',
        'Anything not mentioned in includes'
      ]
    }
  },
  'kashmir-with-ladakh': {
    name: 'Kashmir With Ladakh',
    slug: 'kashmir-with-ladakh',
    duration: '8 Nights / 9 Days',
    image: 'https://res.cloudinary.com/dveg0ai0n/image/upload/v1771496833/3_idiots_scooter_Pangong_Lake_Leh_dwwwvp.jpg',
    destinations: ['Srinagar', 'Pahalgam', 'Gulmarg', 'Sonamarg', 'Kargil', 'Leh', 'Nubra', 'Pangong'],
    groupSize: '2-6',
    rating: '4.9',
    reviews: 203,
    tag: 'Premium',
    tagColor: 'from-vintage-900 to-vintage-700',
    description: 'Embark on an extraordinary journey through two of India\'s most spectacular regions. Experience the lush valleys of Kashmir and the stark beauty of Ladakh\'s high-altitude landscapes. From serene lakes to mighty mountains, this premium package offers the ultimate Himalayan adventure.',
    highlights: [
      'Explore serene Kashmir valleys',
      'Discover majestic Ladakh landscapes',
      'Visit Pangong Lake - the iconic blue lake',
      'Nubra Valley with sand dunes',
      'Camel safari in Hunder',
      'Cross Zoji La, Khardung La & Chang La passes',
      'Visit Lamayuru & Alchi monasteries',
      'Luxury accommodation throughout'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Srinagar – Local Sightseeing',
        description: 'Upon arrival at Srinagar Airport, transfer to your hotel/houseboat. Later, enjoy a Shikara ride on Dal Lake, visit the Mughal Gardens, and stroll around local handicraft markets. Meals: Dinner. Stay: Srinagar.'
      },
      {
        day: 2,
        title: 'Day Trip to Pahalgam – Valley of Shepherds',
        description: 'Full day excursion to Pahalgam, the famous Valley of Shepherds. Enjoy the scenic beauty of Lidder Valley, visit Betaab Valley, and Aru Valley. Evening return to Srinagar. Meals: Breakfast, Dinner. Stay: Srinagar.'
      },
      {
        day: 3,
        title: 'Day Trip to Gulmarg – Snow & Meadows',
        description: 'Full day trip to Gulmarg, the meadow of flowers. Enjoy the Gondola ride to Apharwat Peak, explore the scenic meadows, and enjoy panoramic views of snow-capped peaks. Evening return to Srinagar. Meals: Breakfast, Dinner. Stay: Srinagar.'
      },
      {
        day: 4,
        title: 'Srinagar to Kargil via Sonamarg & Zoji La',
        description: 'Drive to Kargil via the picturesque Sonamarg and cross the famous Zoji La Pass (3,450m). Enroute enjoy stunning mountain views and the dramatic landscape change. Visit the Kargil War Memorial. Meals: Breakfast, Dinner. Stay: Kargil.'
      },
      {
        day: 5,
        title: 'Kargil to Leh via Lamayuru & Alchi',
        description: 'Drive to Leh visiting the ancient Lamayuru Monastery (hanging in mid-air) and Alchi Monastery on the banks of Indus River. Enroute see the Magnetic Hill and Sangam (confluence of Indus and Zanskar rivers). Meals: Breakfast, Dinner. Stay: Leh.'
      },
      {
        day: 6,
        title: 'Leh to Nubra Valley via Khardung La Pass',
        description: 'Cross Khardung La Pass (5,359m) - one of the world\'s highest motorable passes. Descend into Nubra Valley. Visit Diskit Monastery and enjoy the sand dunes of Hunder. Overnight in Nubra. Meals: Breakfast, Dinner. Stay: Nubra Valley.'
      },
      {
        day: 7,
        title: 'Nubra to Pangong Lake via Shyok Valley',
        description: 'Drive to Pangong Lake via the scenic Shyok Valley. Arrive at the stunning Pangong Lake (4,350m) and witness the changing colors of the lake. Camping by the lakeside under the stars. Meals: Breakfast, Dinner. Stay: Pangong Lake.'
      },
      {
        day: 8,
        title: 'Pangong Lake to Leh via Chang La',
        description: 'Drive back to Leh crossing the Chang La Pass (5,360m). Enroute enjoy the breathtaking landscapes. Evening at leisure in Leh market. Farewell dinner. Meals: Breakfast, Dinner. Stay: Leh.'
      },
      {
        day: 9,
        title: 'Departure from Leh Airport',
        description: 'After breakfast, transfer to Leh Airport for your onward journey. Depart with unforgettable memories of Kashmir and Ladakh. Meals: Breakfast.'
      }
    ],
    images: [
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&q=80',
      'https://images.unsplash.com/photo-1537126694932-c0f39026528e?w=800&q=80',
      'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80',
      'https://images.unsplash.com/photo-1609766857041-ed402ea8069a?w=800&q=80'
    ],
    price: {
      perPerson: 54999,
      discount: 10,
      includes: [
        '8 nights premium accommodation',
        'Daily breakfast & dinner',
        'Private cab in Kashmir and Leh',
        'Gondola ride in Gulmarg',
        'Camel safari in Nubra',
        'Camping at Pangong Lake',
        'All permits and fees',
        'Oxygen cylinders for high altitude'
      ],
      excludes: [
        'Airfare to/from Srinagar and from Leh',
        'Lunch meals',
        'Personal gear and equipment',
        'Travel insurance (mandatory)',
        'Personal expenses',
        'Camera fees',
        'Tips and gratuities',
        'Anything not mentioned in includes'
      ]
    }
  }
};

export default function PackageDetail() {
  const { packageName } = useParams<{ packageName: string }>();
  const navigate = useNavigate();
  const onRequestCallback = useContext(CallbackContext) || (() => {});
  const [activeTab, setActiveTab] = useState<'overview' | 'itinerary' | 'inclusions'>('overview');
  const [packageData, setPackageData] = useState<PackageData | null>(null);

  useEffect(() => {
    if (packageName) {
      const foundPackage = packages[packageName];
      if (foundPackage) {
        setPackageData(foundPackage);
      }
    }
  }, [packageName]);

  if (!packageData) {
    return (
      <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-4 text-center">
        <h2 className="text-2xl font-playfair font-bold text-white mb-4">Package not found</h2>
        <p className="text-slate-400 mb-6">The package you're looking for doesn't exist or has been removed.</p>
        <Link
          to="/packages"
          className="px-6 py-3 bg-vintage-500 hover:bg-vintage-600 text-white rounded-xl font-semibold transition-all"
        >
          View All Packages
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Hero Section */}
      <div className="relative h-[50vh] sm:h-[60vh] overflow-hidden">
        <img
          src={packageData.image}
          alt={packageData.name}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/50 to-transparent" />
        
        {/* Back Button */}
        <button
          onClick={() => navigate('/packages')}
          className="absolute top-20 left-4 sm:left-8 flex items-center gap-2 px-4 py-2 bg-black/50 backdrop-blur-sm rounded-full border border-white/20 hover:bg-black/70 transition-all"
        >
          <ArrowLeft className="h-5 w-5" />
          <span className="hidden sm:inline">Back</span>
        </button>

        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-12">
          <div className="container mx-auto">
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <span className={`rounded-full bg-gradient-to-r ${packageData.tagColor} px-3 py-1 text-xs font-bold text-white shadow-lg`}>
                {packageData.tag}
              </span>
              <div className="flex items-center gap-1 rounded-full bg-black/50 backdrop-blur-sm px-3 py-1">
                <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                <span className="text-sm font-medium">{packageData.rating}</span>
                <span className="text-slate-400">({packageData.reviews} reviews)</span>
              </div>
            </div>
            <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3">
              {packageData.name}
            </h1>
            <div className="flex items-center gap-2 text-vintage-400 mb-3">
              <MapPin className="h-5 w-5" />
              <span className="font-medium">{packageData.destinations.join(' → ')}</span>
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-slate-300">
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-vintage-400" />
                {packageData.duration}
              </span>
              <span className="flex items-center gap-2">
                <Users className="h-4 w-4 text-vintage-400" />
                {packageData.groupSize} People
              </span>
            </div>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Tabs */}
            <div className="flex gap-2 mb-6 overflow-x-auto no-scrollbar">
              {[
                { id: 'overview', label: 'Overview', icon: Sparkles },
                { id: 'itinerary', label: 'Itinerary', icon: Calendar },
                { id: 'inclusions', label: 'Inclusions', icon: Check }
              ].map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => setActiveTab(id as typeof activeTab)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-sm whitespace-nowrap transition-all ${
                    activeTab === id
                      ? 'bg-vintage-500 text-white shadow-lg shadow-vintage-500/30'
                      : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-600'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 mb-6">
              {activeTab === 'overview' && (
                <div>
                  <h3 className="font-playfair text-2xl font-bold text-white mb-4 flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-vintage-400" />
                    About This Package
                  </h3>
                  <p className="text-slate-300 leading-relaxed mb-6">{packageData.description}</p>

                  <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                    <Mountain className="h-5 w-5 text-vintage-400" />
                    Package Highlights
                  </h4>
                  <ul className="space-y-2 mb-6">
                    {packageData.highlights.map((highlight: string, index: number) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-300">{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Quick Info Cards */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="bg-slate-800/50 rounded-xl p-4 flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-vintage-500/20 flex items-center justify-center">
                        <Bed className="h-5 w-5 text-vintage-400" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-400">Accommodation</p>
                        <p className="font-medium text-white">3/4/5 Star Hotels</p>
                      </div>
                    </div>
                    <div className="bg-slate-800/50 rounded-xl p-4 flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-vintage-400/20 flex items-center justify-center">
                        <Utensils className="h-5 w-5 text-vintage-400" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-400">Meals</p>
                        <p className="font-medium text-white">Breakfast & Dinner</p>
                      </div>
                    </div>
                    <div className="bg-slate-800/50 rounded-xl p-4 flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-amber-500/20 flex items-center justify-center">
                        <Car className="h-5 w-5 text-amber-400" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-400">Transport</p>
                        <p className="font-medium text-white">Private Cab</p>
                      </div>
                    </div>
                    <div className="bg-slate-800/50 rounded-xl p-4 flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-rose-500/20 flex items-center justify-center">
                        <MapPin className="h-5 w-5 text-rose-400" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-400">Sightseeing</p>
                        <p className="font-medium text-white">All Major Attractions</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'itinerary' && (
                <div>
                  <h3 className="font-playfair text-2xl font-bold text-white mb-6 flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-vintage-400" />
                    Day-wise Itinerary
                  </h3>
                  <div className="space-y-6">
                    {packageData.itinerary.map((day: ItineraryDay, index: number) => (
                      <div key={day.day} className="flex gap-4">
                        <div className="flex flex-col items-center">
                          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-vintage-500 to-vintage-600 text-white font-bold text-sm">
                            {day.day}
                          </div>
                          {index < packageData.itinerary.length - 1 && (
                            <div className="w-0.5 h-full bg-slate-800 my-2"></div>
                          )}
                        </div>
                        <div className="flex-1 pb-6">
                          <h4 className="font-semibold text-white mb-2">{day.title}</h4>
                          <p className="text-slate-400 text-sm leading-relaxed">{day.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'inclusions' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-white mb-4 flex items-center gap-2">
                      <Check className="h-5 w-5 text-vintage-400" />
                      What's Included
                    </h4>
                    <ul className="space-y-3">
                      {packageData.price.includes.map((item: string, index: number) => (
                        <li key={index} className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-4 flex items-center gap-2">
                      <X className="h-5 w-5 text-rose-400" />
                      What's Not Included
                    </h4>
                    <ul className="space-y-3">
                      {packageData.price.excludes.map((item: string, index: number) => (
                        <li key={index} className="flex items-start gap-3">
                          <X className="h-5 w-5 text-rose-400 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Request Call Back Card */}
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-2xl p-6">
                <div className="mb-6">
                  <h3 className="font-playfair text-xl font-bold text-white mb-2">Interested in this Package?</h3>
                  <p className="text-slate-400 text-sm">Get a customized quote and all your questions answered</p>
                </div>

                <div className="space-y-3 mb-6 py-4 border-t border-b border-slate-700">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      Duration
                    </span>
                    <span className="font-medium text-white">{packageData.duration}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      Group Size
                    </span>
                    <span className="font-medium text-white">Up to {packageData.groupSize} people</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      Destinations
                    </span>
                    <span className="font-medium text-white">{packageData.destinations.length} Places</span>
                  </div>
                </div>

                <button
                  onClick={() => onRequestCallback(`${packageData.name} Package`)}
                  className="w-full bg-gradient-to-r from-vintage-500 to-vintage-600 text-white font-semibold py-3.5 px-4 rounded-xl hover:shadow-lg hover:shadow-vintage-500/30 transition-all tap-scale mb-3"
                >
                  Request a Call Back
                </button>

                <a
                  href="tel:+918899666998"
                  className="flex items-center justify-center gap-2 w-full py-3 border border-slate-700 rounded-xl text-slate-300 hover:bg-slate-800 transition-all tap-scale"
                >
                  <Phone className="h-4 w-4" />
                  +91 88996 66998
                </a>
              </div>

              {/* Why Book With Us */}
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-amber-400" />
                  Why Book With Us
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-vintage-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-3.5 w-3.5 text-vintage-400" />
                    </div>
                    <span className="text-slate-300 text-sm">Best Price Guarantee</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-vintage-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-3.5 w-3.5 text-vintage-400" />
                    </div>
                    <span className="text-slate-300 text-sm">No Hidden Charges</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-vintage-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-3.5 w-3.5 text-vintage-400" />
                    </div>
                    <span className="text-slate-300 text-sm">24/7 Customer Support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-vintage-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-3.5 w-3.5 text-vintage-400" />
                    </div>
                    <span className="text-slate-300 text-sm">Experienced Local Guides</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
