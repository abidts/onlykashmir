import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Layout from './components/Layout';
import DestinationsPage from './pages/DestinationsPage';
import DestinationDetail from './pages/DestinationDetail';
import PackagesPage from './pages/PackagesPage';
import HotelsPage from './pages/HotelsPage';
import About from './components/About';
import ContactPage from './pages/ContactPage';
import RequestCallbackPage from './pages/RequestCallbackPage';
import NotFoundPage from './pages/NotFoundPage';
import GiftVouchersPage from './pages/GiftVouchersPage';

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
    path: '/kashmir-travel-gift-vouchers',
    element: (
      <Layout>
        <GiftVouchersPage />
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
    path: '/contact',
    element: (
      <Layout>
        <ContactPage />
      </Layout>
    ),
  },
  {
    path: '/request-callback',
    element: (
      <Layout>
        <RequestCallbackPage />
      </Layout>
    ),
  },
  {
    path: '*',
    element: (
      <Layout>
        <NotFoundPage />
      </Layout>
    ),
  },
]);

export default router;
