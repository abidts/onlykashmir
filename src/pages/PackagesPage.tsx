import { useContext } from 'react';
import { Clock, MapPin, Users, Star, Check, Phone, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CallbackContext } from '../components/Layout';
import GetItinerary from '../components/GetItinerary';
import SEO from '../components/SEO';

const packages = [
  {
    name: 'Kashmir Bliss',
    duration: '4 Days / 3 Nights',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/9f/Srinagar_to_Pahalgam_-_vrvvkbjk2k23iph_%2810%29.jpg',
    destinations: ['Srinagar', 'Gulmarg', 'Pahalgam'],
    groupSize: '2-6',
    rating: '4.8',
    reviews: 245,
    tag: 'Best Seller',
    tagColor: 'from-vintage-500 to-vintage-600',
    includes: ['Hotel', 'Breakfast', 'Cab', 'Shikara'],
    slug: 'jk-bliss',
  },
  {
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
    slug: 'honeymoon-special',
  },
  {
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
    slug: 'grand-jk',
  },
  {
    name: 'Family Fun',
    duration: '6 Days / 5 Nights',
    image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?w=800&q=80',
    destinations: ['Srinagar', 'Gulmarg', 'Pahalgam', 'Dal Lake'],
    groupSize: '4-8',
    rating: '4.7',
    reviews: 198,
    tag: 'Family',
    tagColor: 'from-vintage-400 to-vintage-700',
    includes: ['Family Rooms', 'All Meals', 'Pony Ride', 'Shikara'],
    slug: 'family-fun',
  },
  {
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
    slug: 'adventure-explorer',
  },
  {
    name: 'Budget J&K',
    duration: '3 Days / 2 Nights',
    image: 'https://images.unsplash.com/photo-1609766857041-ed402ea8069a?w=800&q=80',
    destinations: ['Srinagar', 'Gulmarg'],
    groupSize: '2-4',
    rating: '4.6',
    reviews: 320,
    tag: 'Budget',
    tagColor: 'from-vintage-400 to-vintage-600',
    includes: ['Hotel', 'Breakfast', 'Cab', 'Sightseeing'],
    slug: 'budget-jk',
  },
  {
    name: 'Short & Adventure Trip',
    duration: '3 Days / 2 Nights',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&q=80',
    destinations: ['Srinagar', 'Gulmarg', 'Tangmarg'],
    groupSize: '2-6',
    rating: '4.8',
    reviews: 164,
    tag: 'Adventure',
    tagColor: 'from-orange-500 to-red-600',
    includes: ['Hotel', 'Meal', 'Transfer', 'Sightseeing', 'Activities'],
    slug: 'short-adventure-trip',
  },
  {
    name: 'Kashmir With Katra',
    duration: '6 Nights / 7 Days',
    image: 'https://res.cloudinary.com/dveg0ai0n/image/upload/v1772188951/katra_w2iqdq.jpg',
    destinations: ['Srinagar', 'Gulmarg', 'Pahalgam', 'Katra'],
    groupSize: '2-8',
    rating: '4.9',
    reviews: 178,
    tag: 'Spiritual',
    tagColor: 'from-amber-500 to-orange-600',
    includes: ['Luxury Stay', 'Private Cab', 'All Meals', 'Transfer', 'Stay', 'Sightseeing'],
    slug: 'kashmir-with-katra',
  },
  {
    name: 'Kashmir With Ladakh',
    duration: '8 Nights / 9 Days',
    image: 'https://res.cloudinary.com/dveg0ai0n/image/upload/v1771496833/3_idiots_scooter_Pangong_Lake_Leh_dwwwvp.jpg',
    destinations: ['Srinagar', 'Gulmarg', 'Leh', 'Pangong', 'Nubra'],
    groupSize: '2-6',
    rating: '4.9',
    reviews: 203,
    tag: 'Premium',
    tagColor: 'from-vintage-900 to-vintage-700',
    includes: ['Camels', 'Dunes', 'All Meals', 'Transfer', 'Stay', 'Sightseeing'],
    slug: 'kashmir-with-ladakh',
  },
];

export default function PackagesPage() {
  const onRequestCallback = useContext(CallbackContext) || (() => {});

  const packagesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": packages.map((pkg, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Product",
        "name": pkg.name,
        "description": `${pkg.duration} tour to ${pkg.destinations.join(', ')}`,
        "image": pkg.image,
        "brand": {
          "@type": "Brand",
          "name": "Only Kashmir"
        }
      }
    }))
  };

  const faqData = [
    {
      question: "How much will a 7 day trip to Kashmir cost?",
      answer: "The cost of a 7-day Kashmir trip depends on your preferences. Our 'Grand J&K' package starts at ₹14,999 per person, including stays, meals, and transfers. For 5-star luxury, expect ₹25,000+. We offer flexible budgets - contact us for a customized quote!"
    },
    {
      question: "Is 4 days enough for Kashmir?",
      answer: "Yes! 4 days are perfect for a quick Kashmir trip covering Srinagar, Gulmarg, and Pahalgam. Check our 'Kashmir Bliss' package which is exactly 4 Days / 3 Nights!"
    },
    {
      question: "Is Kashmir safe for tourists now?",
      answer: "Absolutely! Kashmir is one of the safest destinations in India for tourists. Millions visit each year to enjoy its beauty. We provide 24/7 support and local guides for a worry-free experience."
    },
    {
      question: "What is the best time to visit Kashmir?",
      answer: "The best time to visit Kashmir is March-October for pleasant weather and tulip gardens. For snowfall and skiing, visit December-February."
    },
    {
      question: "What is the best time to visit Gulmarg?",
      answer: "Best time to visit Gulmarg: December-March for snow and skiing, April-September for green meadows and flowers. Gulmarg is beautiful year-round!"
    },
    {
      question: "What is the best time to visit Kashmir for snowfall?",
      answer: "December to February is ideal for snowfall in Kashmir. Gulmarg becomes a winter wonderland perfect for skiing and snow activities."
    },
    {
      question: "What is the best time to visit Kashmir with family?",
      answer: "March to June and September to October are perfect for family trips to Kashmir, with pleasant weather ideal for sightseeing and activities."
    },
    {
      question: "What is the best time to visit Kashmir tulip garden?",
      answer: "The Indira Gandhi Memorial Tulip Garden in Srinagar is open from late March to early April, which is the best time to see the tulips in full bloom."
    },
    {
      question: "Is October good time to visit Kashmir?",
      answer: "Yes! October is excellent for visiting Kashmir. The weather is pleasant, autumn colors are beautiful, and it's less crowded."
    },
    {
      question: "What is included in a Gulmarg tour package?",
      answer: "Our Gulmarg tour package includes hotel stay, breakfast, transfers, sightseeing, and Gondola ride options (Phase 1 & Phase 2). Contact us for a custom plan!"
    },
    {
      question: "What is included in a Pahalgam tour package?",
      answer: "Our Pahalgam tour package includes hotel stay, breakfast, transfers, sightseeing of Betaab Valley, Aru Valley, Chandanwari, and local activities."
    },
    {
      question: "What is included in a Sonamarg tour package?",
      answer: "Our Sonamarg tour package includes hotel stay, breakfast, transfers, sightseeing of Thajiwas Glacier, and optional activities like rafting and pony rides."
    },
    {
      question: "Do you offer Srinagar houseboat packages?",
      answer: "Yes! We offer premium Srinagar houseboat packages on Dal Lake with Shikara rides, meals, and beautiful views of the mountains."
    },
    {
      question: "Can you provide a Kashmir tour package from Delhi?",
      answer: "Absolutely! We provide complete Kashmir tour packages from Delhi including train/flight assistance, transfers, hotels, and sightseeing. Contact us for details!"
    },
    {
      question: "Do you have a Kashmir honeymoon package?",
      answer: "Yes! Our Honeymoon Special package is 5 Days / 4 Nights and includes luxury stays, houseboat stay in Dal Lake, Gondola ride, and romantic experiences!"
    },
    {
      question: "Do you offer Gulmarg snow packages?",
      answer: "Yes! We offer Gulmarg snow packages in December-February with skiing, snowboarding, sledding, and Gondola rides!"
    },
    {
      question: "Can I book Srinagar houseboats directly?",
      answer: "Yes! We offer Srinagar houseboat booking for all budgets - budget, premium, and luxury houseboats on Dal Lake & Nigeen Lake."
    },
    {
      question: "Is Sonamarg a good day trip from Srinagar?",
      answer: "Yes! Sonamarg makes a perfect day trip from Srinagar (3 hours drive one way). Visit Thajiwas Glacier and enjoy the scenic drive!"
    },
    {
      question: "Where can I get a Gulmarg Gondola ticket guide?",
      answer: "Gulmarg Gondola tickets are available online or at the ticket counter. Phase 1 is to Kongdori, Phase 2 goes to Affarwat. We include Gondola assistance in all our Gulmarg packages!"
    },
    {
      question: "Can you plan a 3-day Kashmir itinerary?",
      answer: "Yes! Our 3-day Kashmir itinerary (Short & Adventure Trip) covers Srinagar, Gulmarg, and Tangmarg with adventure activities!"
    },
    {
      question: "Can you plan a 5-day Kashmir itinerary?",
      answer: "Yes! Our 5-day Kashmir itinerary (Honeymoon Special) covers Srinagar, Gulmarg, Pahalgam, and Sonamarg - perfect for couples!"
    },
    {
      question: "What are the top sightseeing places in Pahalgam?",
      answer: "Top Pahalgam sightseeing: Betaab Valley, Aru Valley, Chandanwari, Baisaran, and Lidder River rafting!"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <SEO 
        title="Top Tour Packages in Kashmir | Best Travel Packages & Tours and Travels"
        description="Only Kashmir Tours and Travels - Top tour packages in Kashmir! Book travel packages, Kashmir tours, honeymoon packages, Gulmarg tours, Srinagar houseboats, Dal Lake shikara rides & enjoy travel!"
        canonical="https://www.onlykashmir.com/packages"
        schema={packagesSchema}
        faq={faqData}
      />
      <main className="pt-20 pb-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 sm:gap-6 mb-8">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 border border-amber-500/20 px-4 py-1.5 text-sm font-medium text-amber-400">
                <Sparkles className="h-4 w-4" />
                Tour Packages
              </span>
              <h1 className="mt-4 font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Handcrafted Travel
                <span className="block gradient-text mt-1">Packages for You</span>
              </h1>
              <p className="mt-3 sm:mt-4 text-base sm:text-lg text-slate-400">
                Choose from our curated packages. Contact us for custom itineraries!
              </p>
            </div>
          </div>

          {/* Grid */}
          <div className="grid gap-5 sm:gap-6 lg:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className="group relative overflow-hidden rounded-3xl bg-slate-900/80 border border-slate-800 transition-all duration-500 hover:border-slate-700 tap-scale shadow-lg shadow-black/10 hover:shadow-vintage-500/10"
              >
                {/* Image with Link to Details Page */}
                <Link to={`/packages/${pkg.slug}`} className="block">
                  <div className="relative h-44 sm:h-52 lg:h-56 overflow-hidden">
                    <img
                      src={pkg.image}
                      alt={pkg.name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent" />

                    {/* Tag */}
                    <span className={`absolute top-3 left-3 sm:top-4 sm:left-4 rounded-full bg-gradient-to-r ${pkg.tagColor} px-3 py-1 text-xs font-bold text-white shadow-lg`}>
                      {pkg.tag}
                    </span>

                    {/* Rating */}
                    <div className="absolute top-3 right-3 sm:top-4 sm:right-4 flex items-center gap-1 rounded-full bg-black/50 backdrop-blur-sm px-2.5 py-1">
                      <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                      <span className="text-xs font-medium text-white">{pkg.rating}</span>
                    </div>

                    {/* Package name */}
                    <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 right-3 sm:right-4">
                      <h3 className="text-xl sm:text-2xl font-bold text-white font-playfair">{pkg.name}</h3>
                    </div>
                  </div>
                </Link>

                {/* Details */}
                <div className="p-4 sm:p-5 flex flex-col gap-3 min-h-[180px] sm:min-h-[200px]">
                  {/* Duration & Group */}
                  <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-4 w-4 text-vintage-400" />
                      {pkg.duration}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Users className="h-4 w-4 text-vintage-400" />
                      {pkg.groupSize} People
                    </span>
                  </div>

                  {/* Destinations */}
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {pkg.destinations.slice(0, 3).map((d) => (
                      <span key={d} className="flex items-center gap-1 rounded-full bg-slate-800/80 px-2.5 py-1 text-[10px] sm:text-xs text-slate-300">
                        <MapPin className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-vintage-400" />
                        {d}
                      </span>
                    ))}
                    {pkg.destinations.length > 3 && (
                      <span className="rounded-full bg-slate-800/80 px-2.5 py-1 text-[10px] sm:text-xs text-vintage-400 font-medium">
                        +{pkg.destinations.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Includes */}
                  <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1">
                    {pkg.includes.map((item) => (
                      <span key={item} className="flex items-center gap-1 text-[10px] sm:text-xs text-slate-400">
                        <Check className="h-3 w-3 text-vintage-400" />
                        {item}
                      </span>
                    ))}
                  </div>

                  {/* CTA Button - Opens Popup */}
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      onRequestCallback(`${pkg.name} Package`);
                    }}
                    className="mt-auto w-full flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-vintage-500 to-vintage-600 px-4 py-3.5 text-sm font-bold text-white shadow-lg shadow-vintage-500/20 transition-all hover:shadow-vintage-500/40 active:scale-[0.98] tap-scale btn-ripple"
                  >
                    <Phone className="h-4 w-4" />
                    Request a Call Back
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* FAQ Section */}
          <section className="mt-20 sm:mt-28">
            <div className="text-center mb-10">
              <span className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 border border-amber-500/20 px-4 py-1.5 text-sm font-medium text-amber-400">
                <Sparkles className="h-4 w-4" />
                FAQ
              </span>
              <h2 className="mt-4 font-playfair text-3xl sm:text-4xl font-bold text-white">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="max-w-3xl mx-auto space-y-4">
              {faqData.map((faq, index) => (
                <div
                  key={index}
                  className="bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6"
                >
                  <h3 className="font-bold text-lg text-white mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-slate-300">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Get Itinerary CTA Section */}
          <div className="mt-16 sm:mt-24">
            <GetItinerary variant="half" />
          </div>

        </div>
      </main>
    </div>
  );
}
