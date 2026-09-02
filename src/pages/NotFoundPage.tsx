import { Link } from 'react-router-dom';
import { Home, Compass, Map, AlertTriangle } from 'lucide-react';
import SEO from '../components/SEO';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <SEO
        title="Page Not Found | Only Kashmir Tour & Travels"
        description="The page you requested could not be found. Explore Kashmir tour packages, destinations, hotels, and cab services with Only Kashmir."
        canonical="https://www.onlykashmir.com/404"
        robots="noindex, follow"
        ogType="website"
      />

      <main className="mx-auto flex min-h-screen max-w-5xl items-center justify-center px-4 py-20 sm:px-6 lg:px-8">
        <div className="w-full rounded-3xl border border-slate-800 bg-slate-900/80 p-8 text-center shadow-2xl shadow-black/30 sm:p-12">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-amber-500/10 text-amber-400">
            <AlertTriangle className="h-8 w-8" />
          </div>

          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-400">
            404 Error
          </p>
          <h1 className="mt-4 font-playfair text-4xl font-bold text-white sm:text-5xl">
            This page could not be found
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-300 sm:text-lg">
            The link may be outdated, the page may have moved, or the URL may be incorrect. Explore our Kashmir tours and destinations below.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-vintage-500 to-vintage-600 px-6 py-3 font-semibold text-white transition hover:shadow-lg hover:shadow-vintage-500/30"
            >
              <Home className="h-4 w-4" />
              Home
            </Link>
            <Link
              to="/packages"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-700 bg-slate-800 px-6 py-3 font-semibold text-white transition hover:border-vintage-500 hover:text-vintage-400"
            >
              <Compass className="h-4 w-4" />
              Kashmir Packages
            </Link>
            <Link
              to="/destinations"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-700 bg-slate-800 px-6 py-3 font-semibold text-white transition hover:border-vintage-500 hover:text-vintage-400"
            >
              <Map className="h-4 w-4" />
              Destinations
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
