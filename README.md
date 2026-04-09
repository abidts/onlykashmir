# ONLY KASHMIR Tour & Travels — Kashmir Wanderlust

A modern, full-featured travel website for exploring the breathtaking beauty of Jammu & Kashmir. Built with React 19, Vite 7, TypeScript, and Tailwind CSS 4, this platform offers comprehensive travel services including tour packages, hotel bookings, cab rentals, adventure activities, and destination guides.

![Kashmir Tourism](https://images.unsplash.com/photo-1665034640942-07c4170c2872?w=1200&q=80)

---

## 🌟 Features Overview

### Core Services
- **🏔️ Tour Packages** — Curated honeymoon, family, group tours, and solo adventure packages
- **🏨 Hotels & Stays** — Luxury hotels, traditional houseboats, and cozy homestays
- **🚗 Rental Cabs** — Premium fleet including Mahindra Thar, Toyota Etios, Innova, and Tempo Travellers
- **📍 Destinations** — 50+ curated destinations from Gulmarg to Leh
- **📸 Photography Tours** — Guided tours to capture Kashmir's pristine beauty
- **🎿 Adventure Activities** — Skiing, trekking, river rafting, and more

### Interactive Features
- **💬 WhatsApp Integration** — Floating chat button with embedded popup window
- **📞 Callback Requests** — Request expert consultation for trip planning
- **🖼️ Image Gallery** — Beautiful lightbox gallery with category filters
- **⭐ Customer Reviews** — Testimonials and ratings from travelers
- **🗺️ Interactive Maps** — Location mapping for destinations
- **📱 Mobile-First Design** — Optimized for all devices with bottom navigation

### User Experience
- **✨ Smooth Animations** — Intersection Observer scroll animations
- **🎨 Hero Slider** — Dynamic carousel showcasing Kashmir's beauty
- **🔍 Responsive Design** — Mobile, tablet, and desktop optimized
- **⚡ Fast Performance** — Vite-powered hot reload and optimized builds

---

## 🗺️ Site Structure & Pages

| Page | Route | Description |
|------|-------|-------------|
| **Home** | `/` | Landing page with hero, packages, cabs, hotels |
| **Destinations** | `/destinations` | Browse all Kashmir destinations |
| **Destination Detail** | `/destinations/:slug` | Detailed info about specific location |
| **Packages** | `/packages` | All tour packages listing |
| **Package Detail** | `/packages/:name` | Detailed package itinerary & pricing |
| **Adventure** | `/adventure` | Adventure activities and sports |
| **Gallery** | `/gallery` | Photo gallery with filters |
| **Reviews** | `/reviews` | Customer testimonials |
| **Hotels** | `/hotels` | Hotel and accommodation listings |
| **Cabs** | `/cabs` | Car rental fleet and booking |
| **About** | `/about` | Company information |
| **Contact** | `/contact` | Contact form and information |

---

## 🛠️ Technology Stack

### Frontend
| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 19.2.3 | UI Framework |
| **TypeScript** | 5.9.3 | Type Safety |
| **Vite** | 7.2.4 | Build Tool & Dev Server |
| **Tailwind CSS** | 4.1.17 | Styling |
| **React Router DOM** | 7.13.0 | Client-side Routing |
| **Lucide React** | 0.563.0 | Icon Library |

### Utilities
| Package | Purpose |
|---------|---------|
| `clsx` | Conditional className utility |
| `tailwind-merge` | Efficient Tailwind class merging |

### Development
| Package | Purpose |
|---------|---------|
| `@tailwindcss/vite` | Tailwind Vite plugin |
| `@vitejs/plugin-react` | React support for Vite |
| `vite-plugin-singlefile` | Single-file build output |
| `@types/node`, `@types/react` | TypeScript definitions |

---

## 📁 Project Structure

```
OnlyKashmir/
├── public/                     # Static assets
│   └── logo.png               # Brand logo
├── src/
│   ├── assets/                # Images, fonts, media
│   ├── components/            # Reusable React components
│   │   ├── About.tsx          # About section
│   │   ├── Adventure.tsx      # Adventure preview
│   │   ├── Cabs.tsx           # Cab rental cards
│   │   ├── CallbackPopup.tsx  # Callback request modal
│   │   ├── ContactForm.tsx    # Contact form component
│   │   ├── ContactSection.tsx # Contact CTA section
│   │   ├── Destinations.tsx   # Destination cards
│   │   ├── Footer.tsx         # Site footer
│   │   ├── Gallery.tsx        # Photo gallery
│   │   ├── HeroSlider.tsx     # Hero carousel
│   │   ├── Hotels.tsx         # Hotel cards
│   │   ├── Layout.tsx         # Page layout wrapper
│   │   ├── LocationMap.tsx    # Map component
│   │   ├── LogoMark.tsx       # Logo component
│   │   ├── MobileBottomNav.tsx# Mobile navigation
│   │   ├── Navbar.tsx         # Top navigation
│   │   ├── Preloader.tsx      # Loading screen
│   │   ├── ScrollToTop.tsx    # Scroll-to-top button
│   │   ├── Services.tsx       # Services grid
│   │   ├── SocialSidebar.tsx  # Social media links
│   │   ├── Testimonials.tsx   # Customer reviews
│   │   ├── TourPackages.tsx   # Package cards
│   │   ├── WhatsAppButton.tsx # WhatsApp floating button
│   │   ├── WhatsAppCTA.tsx    # WhatsApp CTA section
│   │   └── WhatsAppPopup.tsx  # WhatsApp chat popup
│   ├── pages/                 # Page components
│   │   ├── AdventurePage.tsx  # Full adventure page
│   │   ├── CabsPage.tsx       # Full cabs listing
│   │   ├── ContactPage.tsx    # Contact page
│   │   ├── DestinationDetail.tsx  # Single destination
│   │   ├── DestinationsPage.tsx   # All destinations
│   │   ├── GalleryPage.tsx    # Gallery page
│   │   ├── HotelsPage.tsx     # Hotels listing
│   │   ├── PackageDetail.tsx  # Single package view
│   │   ├── PackagesPage.tsx   # All packages
│   │   └── ReviewsPage.tsx    # Reviews page
│   ├── services/              # API services
│   ├── types/                 # TypeScript types
│   ├── utils/                 # Utility functions
│   ├── App.tsx                # Main app component
│   ├── index.css              # Global styles
│   ├── main.tsx               # Entry point
│   └── router.tsx             # React Router config
├── index.html                 # HTML template
├── package.json               # Dependencies
├── tsconfig.json              # TypeScript config
├── vite.config.ts             # Vite configuration
├── ONLYKASHMIR.YAML           # Project config
└── README.md                  # Documentation
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** v18 or higher
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd OnlyKashmir
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
npm run preview  # Preview production build
```

---

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build optimized production bundle |
| `npm run preview` | Preview production build locally |

---

## 🎨 Design System

### Color Palette
| Color | Usage |
|-------|-------|
| **Emerald** | Primary actions, tour packages |
| **Sky/Cyan** | Hotels, water elements |
| **Amber/Orange** | Cabs, highlights |
| **Rose/Pink** | Destinations, romance |
| **Violet/Purple** | Gallery, photography |
| **Slate** | Backgrounds, text |

### Typography
- **Playfair Display** — Headings, titles
- **Inter** — Body text, UI elements
- **Dancing Script** — Decorative accents

### Breakpoints
| Name | Size |
|------|------|
| `sm` | 640px |
| `md` | 768px |
| `lg` | 1024px |
| `xl` | 1280px |

---

## 🚗 Cab Fleet

The platform offers a diverse fleet of vehicles:

| Vehicle | Type | Seats | Best For |
|---------|------|-------|----------|
| **Swift Dzire** | Sedan | 4 | City Tours |
| **Toyota Etios** | Sedan | 4 | City & Highway |
| **Chevrolet Tavera** | MUV | 7 | Family Trips |
| **Toyota Innova** | MUV | 7 | Family Tours |
| **Innova Crysta** | MUV | 7 | Premium Family |
| **Toyota Camry** | Premium Sedan | 4 | Business Travel |
| **Mahindra Thar** | 4x4 SUV | 4 | Off-Road Adventures |
| **Tempo Traveller (17)** | Mini Bus | 17 | Group Tours |
| **Tempo Traveller (20)** | Mini Bus | 20 | Large Groups |
| **Tempo Traveller (26)** | Mini Bus | 26 | Events & Conferences |

---

## 📱 Mobile Features

- **Bottom Navigation** — Quick access to Home, Destinations, Packages, Gallery, Contact
- **Touch Gestures** — Swipeable carousels and galleries
- **Responsive Cards** — Adaptive grid layouts
- **Optimized Images** — Lazy loading and responsive sources
- **WhatsApp Integration** — Direct mobile messaging

---

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_WHATSAPP_NUMBER=916006500852
VITE_CONTACT_PHONE=+916006500852
VITE_CONTACT_EMAIL=contact@onlykashmir.com
VITE_API_URL=https://api.onlykashmir.com
```

### Vite Configuration

The project uses `vite.config.ts` with:
- React plugin for JSX support
- Single-file build plugin
- Tailwind CSS integration
- Path aliases for imports

---

## 🌐 Browser Support

| Browser | Version |
|---------|---------|
| Chrome | Latest 2 versions |
| Firefox | Latest 2 versions |
| Safari | Latest 2 versions |
| Edge | Latest 2 versions |
| Mobile Safari | iOS 14+ |
| Chrome Mobile | Android 10+ |

---

## 📊 Performance

- **Lighthouse Score**: 90+ (Target)
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3s
- **Bundle Size**: Optimized with code splitting

---

## 🚀 Deployment

### Recommended Platforms

1. **Vercel** (Recommended)
   ```bash
   npm install -g vercel
   vercel
   ```

2. **Netlify**
   - Connect GitHub repository
   - Build command: `npm run build`
   - Publish directory: `dist`

3. **GitHub Pages**
   ```bash
   npm install -g gh-pages
   npm run build
   gh-pages -d dist
   ```

4. **AWS S3 + CloudFront**
   - Build and upload to S3 bucket
   - Configure CloudFront distribution

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Code Style
- TypeScript for type safety
- Functional React components with hooks
- Tailwind CSS for styling
- Lucide icons for consistency
- Semantic HTML structure

---

## 📞 Contact & Support

### ONLY KASHMIR Tour & Travels

| Contact | Details |
|---------|---------|
| **WhatsApp** | [+91 88996 66998](https://wa.me/918899666998) |
| **Phone** | +91 88996 66998, +91 95962 24042 |
| **Email** | info@onlykashmir.com |
| **Address** | Bemina, Srinagar, J&K, 190018 |
| **Website** | onlykashmir.com |

### Social Media
- Instagram: [@onlykashmir](https://instagram.com/onlykashmir)
- Facebook: [Only Kashmir Tour & Travels](https://www.facebook.com/profile.php?id=61583166238042)
- YouTube: [Only Kashmir Travels](https://youtube.com/@onlykashmirtravels)

---

## 📄 License

This project is **proprietary software** belonging to **ONLY KASHMIR Tour & Travels**. All rights reserved.

- No unauthorized copying, distribution, or modification
- Commercial use requires explicit permission
- Brand assets and content are protected

---

## 🙏 Acknowledgments

- **Unsplash** — Beautiful Kashmir photography
- **Cloudinary** — Image hosting and optimization
- **Google Fonts** — Playfair Display, Inter, Dancing Script
- **Lucide Icons** — Consistent icon library
- **Tailwind Labs** — Modern CSS framework

---

## 🗺️ Popular Destinations Covered

- **Srinagar** — Dal Lake, Mughal Gardens, Old City
- **Gulmarg** — Gondola, Skiing, Golf Course
- **Pahalgam** — Betaab Valley, Aru Valley, Lidder River
- **Sonmarg** — Thajiwas Glacier, Meadow of Gold
- **Leh-Ladakh** — Pangong Lake, Nubra Valley, Khardung La
- **Vaishno Devi** — Holy Shrine, Katra
- **Amarnath** — Sacred Cave, Pilgrimage
- **Patnitop** — Hill Station, Adventure Sports
- **Bhaderwah** — Mini Kashmir, Meadows

---

## 🎯 Key Features Summary

✅ **12 Pages** — Comprehensive site structure  
✅ **23+ Components** — Modular, reusable code  
✅ **TypeScript** — Full type safety  
✅ **Responsive** — Mobile-first design  
✅ **WhatsApp Integration** — Direct customer communication  
✅ **SEO Optimized** — Meta tags and semantic HTML  
✅ **Fast Performance** — Vite-powered builds  
✅ **Modern UI/UX** — Tailwind CSS with custom animations  
✅ **Easy Deployment** — Static hosting ready  

---

**Built with ❤️ for exploring the paradise of Kashmir**

*Only Kashmir Tour & Travels — Your Gateway to Unforgettable Kashmir Experiences*
