import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Star, Phone, Sparkles, Calendar, Clock, Users } from 'lucide-react';

const destinations: Record<string, {
  name: string;
  tagline: string;
  image: string;
  desc: string;
  rating: string;
  highlight: string;
  fullDesc: string;
  bestTime: string;
  duration: string;
  activities: string[];
  gallery: string[];
}> = {
  gulmarg: {
    name: 'Gulmarg',
    tagline: 'Meadow of Flowers',
    image: 'https://images.unsplash.com/photo-1683434576805-a4f85ea47bbf?auto=format&fit=crop&w=1200&q=80',
    desc: 'World-class skiing destination and the highest gondola ride in Asia.',
    rating: '4.9',
    highlight: 'Ski Paradise',
    fullDesc: 'Gulmarg, meaning "Meadow of Flowers", is a breathtaking hill station in the Pir Panjal range of the Himalayas. It is renowned for its world-class skiing slopes, the Gulmarg Gondola (one of the highest cable cars in the world), and stunning alpine scenery. During winter, it transforms into a skier\'s paradise, while summer brings lush green meadows dotted with vibrant wildflowers. The colonial-era St. Mary\'s Church and the serene Alpather Lake are must-visit attractions.',
    bestTime: 'December to March (Winter Sports), April to September (Summer)',
    duration: '3-4 Days',
    activities: ['Skiing & Snowboarding', 'Gondola Ride (Phase 1 & 2)', 'Trekking to Alpather Lake', 'Golfing at the highest green golf course', 'Sleigh rides in winter'],
    gallery: [
      'https://images.unsplash.com/photo-1707045189683-4cced7a3a6b3?auto=format&w=1200&q=80',
      'https://images.unsplash.com/photo-1626017088971-6a2a5f0d8c97?w=800&q=80',
      'https://images.unsplash.com/photo-1626017088971-6a2a5f0d8c97?w=800&q=80',
    ],
  },
  pahalgam: {
    name: 'Pahalgam',
    tagline: 'Valley of Shepherds',
    image: 'https://images.unsplash.com/photo-1564509180796-129e4f4f6de9?auto=format&fit=crop&w=1200&q=80',
    desc: 'A pristine valley with lush meadows, rivers, and the starting point of Amarnath Yatra.',
    rating: '4.8',
    highlight: 'River Valley',
    fullDesc: 'Pahalgam is a serene valley located in the Anantnag district of Kashmir. Surrounded by snow-capped mountains and lush green forests, it is a perfect destination for nature lovers. The Lidder River flows through the valley, adding to its charm. Pahalgam serves as the base camp for the annual Amarnath Yatra pilgrimage. Popular attractions include Betaab Valley, Aru Valley, Chandanwari, and the Baisaran meadows.',
    bestTime: 'April to October',
    duration: '3-4 Days',
    activities: ['River Rafting on Lidder River', 'Trekking to Tarsar Lake', 'Horse Riding in Baisaran', 'Visit Betaab Valley', 'Camping by the riverside'],
    gallery: [
      'https://images.unsplash.com/photo-1600702653377-2bbad1049612?w=800&q=80',
      'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?w=800&q=80',
      'https://images.unsplash.com/photo-1581791534721-e599df4417f6?w=800&q=80',
    ],
  },
  sonmarg: {
    name: 'Sonmarg',
    tagline: 'Meadow of Gold',
    image: 'https://images.unsplash.com/photo-1609766857041-ed402ea8069a?w=1200&q=80',
    desc: 'Gateway to Ladakh with glaciers, meadows, and the stunning Thajiwas Glacier.',
    rating: '4.9',
    highlight: 'Golden Meadows',
    fullDesc: 'Sonmarg, meaning "Meadow of Gold", is a picturesque hill station located on the banks of the Sindh River. Surrounded by towering glaciers and snow-capped peaks, it serves as the gateway to Ladakh. The Thajiwas Glacier is a major attraction, accessible by pony ride. Adventure enthusiasts can enjoy trekking to Vishansar Lake, white-water rafting, and camping under the stars.',
    bestTime: 'May to September',
    duration: '2-3 Days',
    activities: ['Visit Thajiwas Glacier', 'Trekking to Vishansar & Krishansar Lakes', 'White Water Rafting', 'Camping', 'Pony Rides'],
    gallery: [
      'https://images.unsplash.com/photo-1609766857041-ed402ea8069a?w=800&q=80',
      'https://images.unsplash.com/photo-1537126694932-c0f39026528e?w=800&q=80',
      'https://images.unsplash.com/photo-1581791534721-e599df4417f6?w=800&q=80',
    ],
  },
  'dal-lake': {
    name: 'Dal Lake',
    tagline: 'Jewel of Srinagar',
    image: 'https://images.unsplash.com/photo-1597074866923-dc0589150bf6?w=1200&q=80',
    desc: 'Iconic houseboat stays, Shikara rides, and floating gardens on crystal waters.',
    rating: '4.9',
    highlight: 'Houseboat Stay',
    fullDesc: 'Dal Lake is the heart and soul of Srinagar, often referred to as the "Jewel in the Crown of Kashmir". The lake is famous for its traditional houseboats, colorful Shikaras, and floating vegetable gardens. A stay on a houseboat offers a unique experience of Kashmiri hospitality. The Mughal Gardens on the banks, including Shalimar Bagh and Nishat Bagh, add to the lake\'s charm.',
    bestTime: 'April to October',
    duration: '2-3 Days',
    activities: ['Shikara Ride at Sunrise', 'Stay in a Traditional Houseboat', 'Visit Floating Market', 'Explore Mughal Gardens', 'Photography at Dawn'],
    gallery: [
      'https://images.unsplash.com/photo-1597074866923-dc0589150bf6?w=800&q=80',
      'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?w=800&q=80',
      'https://images.unsplash.com/photo-1600702653377-2bbad1049612?w=800&q=80',
    ],
  },
  'leh-ladakh': {
    name: 'Leh Ladakh',
    tagline: 'Land of High Passes',
    image: 'https://images.unsplash.com/photo-1632979720170-9a1ab1b103d3?auto=format&fit=crop&w=1200&q=80',
    desc: 'Breathtaking moonscapes, ancient monasteries, and the highest motorable passes.',
    rating: '5.0',
    highlight: 'Adventure Hub',
    fullDesc: 'Leh Ladakh is a high-altitude desert region known for its dramatic landscapes, ancient Buddhist monasteries, and thrilling adventure opportunities. The region boasts some of the world\'s highest motorable passes including Khardung La and Chang La. Highlights include Pangong Tso Lake, Nubra Valley, Hemis Monastery, and the Magnetic Hill. It\'s a paradise for bikers, trekkers, and photography enthusiasts.',
    bestTime: 'June to September',
    duration: '5-7 Days',
    activities: ['Visit Pangong Tso Lake', 'Explore Nubra Valley', 'Monastery Tours (Hemis, Thiksey, Diskit)', 'Motorbike Expedition', 'River Rafting on Indus'],
    gallery: [
      'https://images.unsplash.com/photo-1537126694932-c0f39026528e?w=800&q=80',
      'https://images.unsplash.com/photo-1581791534721-e599df4417f6?w=800&q=80',
      'https://images.unsplash.com/photo-1609766857041-ed402ea8069a?w=800&q=80',
    ],
  },
  srinagar: {
    name: 'Srinagar',
    tagline: 'City of Gardens',
    image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?w=1200&q=80',
    desc: 'Mughal gardens, historic old city, and the famous handicraft bazaars.',
    rating: '4.7',
    highlight: 'Heritage City',
    fullDesc: 'Srinagar, the summer capital of Jammu and Kashmir, is a city of timeless beauty nestled in the Kashmir Valley. Known for its Mughal Gardens, serene lakes, and intricate handicrafts, the city exudes old-world charm. The historic old city with its bustling bazaars offers exquisite Pashmina shawls, carpets, and papier-mâché items. Don\'t miss the iconic Jamia Masjid and Shankaracharya Temple.',
    bestTime: 'March to November',
    duration: '3-4 Days',
    activities: ['Explore Mughal Gardens', 'Shop at Lal Chowk Bazaar', 'Visit Jamia Masjid', 'Shankaracharya Temple', 'Try Kashmiri Cuisine'],
    gallery: [
      'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?w=800&q=80',
      'https://images.unsplash.com/photo-1597074866923-dc0589150bf6?w=800&q=80',
      'https://images.unsplash.com/photo-1600702653377-2bbad1049612?w=800&q=80',
    ],
  },
  'manasbal-lake': {
    name: 'Manasbal Lake',
    tagline: 'Lotus Lake of Kashmir',
    image: 'https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=1200&q=80',
    desc: 'Serene freshwater lake famed for lotus blooms and mirrored mountain reflections.',
    rating: '4.7',
    highlight: 'Hidden Gem',
    fullDesc:
      "Manasbal Lake, often called the 'Supreme Gem of Kashmir Lakes', sits north of Srinagar near Safapora. Its clear waters mirror the surrounding Zabarwan hills and apple orchards, while lotus flowers carpet the surface in summer. A calm alternative to Dal, it’s perfect for picnics, birdwatching, and quiet Shikara rides. The nearby Mughal-era Jharokha (Jaroka Bagh) and ancient ruins of Daroga Bagh add heritage charm.",
    bestTime: 'May to October',
    duration: '1 Day',
    activities: [
      'Shikara ride among lotus blooms',
      'Birdwatching along the banks',
      'Picnic by the Mughal Jharokha garden',
      'Photography at sunrise and sunset',
      'Combine with Wullar Lake or Nagin Valley visit',
    ],
    gallery: [
      'https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80',
    ],
  },
  'sinthon-top': {
    name: 'Sinthon Top',
    tagline: '360° Panoramic Pass',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
    desc: 'High-altitude mountain pass linking Kashmir and Kishtwar with sweeping Himalayan views.',
    rating: '4.6',
    highlight: 'Scenic Drive',
    fullDesc:
      'Sinthon Top (also spelled Sinthan) sits around 12,500 ft on the Anantnag–Kishtwar road. The pass offers uninterrupted 360° views of Pir Panjal snowfields, hairpin bends popular with road-trippers, and meadows that stay snow-dusted much of the year. It is less commercialized, making it ideal for photography, quick hikes, and serene picnics above the clouds.',
    bestTime: 'June to September (road accessible)',
    duration: 'Day Trip',
    activities: [
      'Scenic drive with hairpin bends',
      'Snow play and short ridge walks',
      'Photography at the viewpoint deck',
      'Picnic on the meadows (carry trash back)',
      'Combine with Daksum and Kokernag springs',
    ],
    gallery: [
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=800&q=80',
    ],
  },
  doodhpathri: {
    name: 'Doodhpathri',
    tagline: 'Valley of Milk',
    image: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80',
    desc: 'Alpine meadows with milky-white streams, pine forests, and crowd-free picnic spots.',
    rating: '4.7',
    highlight: 'Alpine Meadow',
    fullDesc:
      'Doodhpathri, about 45 km from Srinagar, is a lush bowl-shaped meadow carpeted with wildflowers and dense pines. The Shaliganga stream froths white against smooth boulders—giving the valley its “milk” name. Cooler and less commercial than Gulmarg, it’s great for day picnics, pony rides, and slow walks along the river.',
    bestTime: 'May to October',
    duration: 'Day Trip',
    activities: [
      'Riverside picnic by Shaliganga stream',
      'Pony ride across the meadows',
      'Short forest walks and photography',
      'Tea and kulcha at local dhabas',
      'Snow play in early spring/late autumn',
    ],
    gallery: [
      'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80',
    ],
  },
  'drung-fall': {
    name: 'Drung Waterfall',
    tagline: 'Frozen Cascade',
    image: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1200&q=80',
    desc: 'Dramatic waterfall near Tangmarg that freezes into icicles in winter.',
    rating: '4.6',
    highlight: 'Winter Marvel',
    fullDesc:
      'Drung (Dron) Waterfall sits close to Tangmarg on the way to Gulmarg. In peak winter the cascade turns into a wall of icicles, while summer reveals a thundering flow surrounded by pine forests. It is an easy stop from the Srinagar–Gulmarg highway and pairs well with nearby trout farms and local dhabas.',
    bestTime: 'December to February for frozen view; May to September for flow',
    duration: 'Half Day',
    activities: [
      'View the frozen waterfall and icicles',
      'Short riverside walk and photography',
      'Tea and kahwa at roadside stalls',
      'Combine with Gulmarg or Tangmarg trout farm',
      'Snow play in winter months',
    ],
    gallery: [
      'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80',
    ],
  },
  'mughal-gardens': {
    name: 'Mughal Gardens (Srinagar)',
    tagline: 'Nishat • Shalimar • Harwan • Pari Mahal • Cheshma Shahi',
    image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1200&q=80',
    desc: 'Terraced lawns, fountains, and Chinar-lined vistas along Dal Lake.',
    rating: '4.8',
    highlight: 'Heritage Gardens',
    fullDesc:
      'Srinagar’s Mughal garden circuit strings together Nishat Bagh’s twelve terraces, the royal pavilions of Shalimar, the hillside amphitheater of Harwan, the hilltop viewpoint of Pari Mahal, and the freshwater spring of Cheshma Shahi. Built by the Mughals for leisure and lake views, these gardens showcase Persian-inspired layouts, cascading water channels, and grand Chinars.',
    bestTime: 'April to October (Chinar colors peak in autumn)',
    duration: '1 Day',
    activities: [
      'Sunset stroll in Nishat and Shalimar terraces',
      'Panoramic Dal Lake view from Pari Mahal',
      'Spring water tasting at Cheshma Shahi',
      'Picnic on Harwan lawns',
      'Photography of Chinar foliage in autumn',
    ],
    gallery: [
      'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=800&q=80',
    ],
  },
  amarnath: {
    name: 'Amarnath Cave',
    tagline: 'Sacred Himalayan Yatra',
    image: 'https://res.cloudinary.com/dveg0ai0n/image/upload/v1771496839/Journey_to_Shri_Amarnath_Cave_cxxqte.jpg',
    desc: 'High-altitude pilgrimage to the naturally formed ice lingam in a Himalayan cave.',
    rating: '4.9',
    highlight: 'Pilgrimage',
    fullDesc:
      'The Amarnath Yatra leads devotees to a Himalayan cave shrine where an ice stalagmite is revered as a Shiva lingam. Routes typically start from Pahalgam (via Chandanwari and Sheshnag) or Baltal for a shorter but steeper ascent. The trek offers dramatic glaciers, alpine lakes, and spiritual camaraderie, operating seasonally under strict permits and weather advisories.',
    bestTime: 'Yatra window (typically July–August, subject to official schedule)',
    duration: '3–5 Days (trek)',
    activities: [
      'Pilgrimage trek via Pahalgam or Baltal',
      'Helicopter-assisted darshan (subject to permits)',
      'Camping at Sheshnag or Panchtarni',
      'Glacier and alpine lake views',
      'Local langar seva and community kitchens',
    ],
    gallery: [
      'https://res.cloudinary.com/dveg0ai0n/image/upload/v1771496839/Journey_to_Shri_Amarnath_Cave_cxxqte.jpg',
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80',
    ],
  },
};

export default function DestinationDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const destination = slug ? destinations[slug] : null;

  if (!destination) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-playfair font-bold mb-4">Destination Not Found</h1>
          <button
            onClick={() => navigate('/destinations')}
            className="px-6 py-3 bg-vintage-500 hover:bg-vintage-600 rounded-xl font-semibold transition-all"
          >
            Back to Destinations
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Hero Section */}
      <div className="relative h-[50vh] sm:h-[60vh] overflow-hidden">
        <img
          src={destination.image}
          alt={destination.name}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/50 to-transparent" />
        
        {/* Back Button */}
        <button
          onClick={() => navigate('/destinations')}
          className="absolute top-20 left-4 sm:left-8 flex items-center gap-2 px-4 py-2 bg-black/50 backdrop-blur-sm rounded-full border border-white/20 hover:bg-black/70 transition-all"
        >
          <ArrowLeft className="h-5 w-5" />
          <span className="hidden sm:inline">Back</span>
        </button>

        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-12">
          <div className="container mx-auto">
            <div className="flex items-center gap-2 text-vintage-400 mb-3">
              <MapPin className="h-5 w-5" />
              <span className="font-medium">{destination.tagline}</span>
            </div>
            <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              {destination.name}
            </h1>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1 rounded-full bg-black/50 backdrop-blur-sm px-3 py-1.5 text-sm font-medium">
                <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                {destination.rating}
              </div>
              <span className="rounded-full bg-vintage-400/90 px-3 py-1.5 text-xs font-bold">
                {destination.highlight}
              </span>
            </div>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Description */}
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-slate-300 leading-relaxed mb-8">
            {destination.fullDesc}
          </p>

          {/* Quick Info Cards */}
          <div className="grid sm:grid-cols-3 gap-4 mb-12">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
              <Calendar className="h-6 w-6 text-vintage-400 mb-3" />
              <h3 className="font-semibold text-white mb-1">Best Time</h3>
              <p className="text-sm text-slate-400">{destination.bestTime}</p>
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
              <Clock className="h-6 w-6 text-vintage-400 mb-3" />
              <h3 className="font-semibold text-white mb-1">Duration</h3>
              <p className="text-sm text-slate-400">{destination.duration}</p>
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
              <Users className="h-6 w-6 text-vintage-400 mb-3" />
              <h3 className="font-semibold text-white mb-1">Activities</h3>
              <p className="text-sm text-slate-400">{destination.activities.length}+ Options</p>
            </div>
          </div>

          {/* Activities */}
          <div className="mb-12">
            <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <Sparkles className="h-6 w-6 text-vintage-400" />
              Things to Do
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {destination.activities.map((activity, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 bg-slate-900/50 border border-slate-800 rounded-xl p-4"
                >
                  <div className="h-2 w-2 rounded-full bg-vintage-400" />
                  <span className="text-slate-200">{activity}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-vintage-500/10 to-vintage-400/10 border border-vintage-500/20 rounded-3xl p-8 text-center">
            <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-white mb-3">
              Plan Your Trip to {destination.name}
            </h2>
            <p className="text-slate-300 mb-6 max-w-xl mx-auto">
              Get in touch with our travel experts to customize your perfect Kashmir itinerary
            </p>
            <button className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-vintage-500 to-vintage-600 text-white rounded-2xl font-semibold hover:shadow-lg hover:shadow-vintage-500/30 transition-all tap-scale">
              <Phone className="h-5 w-5" />
              Request a Call Back
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
