import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Layout from './components/Layout';
import DestinationsPage from './pages/DestinationsPage';
import DestinationDetail from './pages/DestinationDetail';
import PackagesPage from './pages/PackagesPage';
import PackageDetail from './pages/PackageDetail';
import AdventurePage from './pages/AdventurePage';
import GalleryPage from './pages/GalleryPage';
import ReviewsPage from './pages/ReviewsPage';
import HotelsPage from './pages/HotelsPage';
import About from './components/About';
import CabsPage from './pages/CabsPage';
import ContactPage from './pages/ContactPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout>
        <App />
      </Layout>
    ),
  },
  {
    path: '/destinations',
    element: (
      <Layout>
        <DestinationsPage />
      </Layout>
    ),
  },
  {
    path: '/destinations/:slug',
    element: (
      <Layout>
        <DestinationDetail />
      </Layout>
    ),
  },
  {
    path: '/packages',
    element: (
      <Layout>
        <PackagesPage />
      </Layout>
    ),
  },
  {
    path: '/packages/:packageName',
    element: (
      <Layout>
        <PackageDetail />
      </Layout>
    ),
  },
  {
    path: '/adventure',
    element: (
      <Layout>
        <AdventurePage />
      </Layout>
    ),
  },
  {
    path: '/gallery',
    element: (
      <Layout>
        <GalleryPage />
      </Layout>
    ),
  },
  {
    path: '/reviews',
    element: (
      <Layout>
        <ReviewsPage />
      </Layout>
    ),
  },
  {
    path: '/hotels',
    element: (
      <Layout>
        <HotelsPage />
      </Layout>
    ),
  },
  {
    path: '/about',
    element: (
      <Layout>
        <About />
      </Layout>
    ),
  },
  {
    path: '/cabs',
    element: (
      <Layout>
        <CabsPage />
      </Layout>
    ),
  },
  {
    path: '/contact',
    element: (
      <Layout>
        <ContactPage />
      </Layout>
    ),
  },
]);

export default router;