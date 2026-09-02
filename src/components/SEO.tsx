import { Helmet } from 'react-helmet-async';

interface FAQItem {
  question: string;
  answer: string;
}

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
  twitterCard?: string;
  schema?: object | object[];
  faq?: FAQItem[];
  robots?: string;
  lang?: string;
  breadcrumbList?: BreadcrumbItem[];
}

const SEO = ({
  title,
  description = "Only Kashmir - Your ultimate guide to exploring the beauty of Kashmir. Book tour packages, hotels, and cabs.",
  canonical,
  ogType = 'website',
  ogImage = 'https://www.onlykashmir.com/assets/images/logo.png',
  twitterCard = 'summary_large_image',
  schema,
  faq,
  robots = 'index,follow',
  lang = 'en_IN',
  breadcrumbList,
}: SEOProps) => {
  const siteName = 'Only Kashmir';
  const fullTitle = title ? `${title} | ${siteName}` : siteName;

  const baseUrl = 'https://www.onlykashmir.com';
  let canonicalUrl = canonical || baseUrl;
  if (!canonicalUrl.startsWith(baseUrl)) {
    canonicalUrl = baseUrl + (canonicalUrl.startsWith('/') ? canonicalUrl : '/' + canonicalUrl);
  }

  const finalCanonical = canonicalUrl.replace(/\/+$/, '') || baseUrl;

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Only Kashmir Tour & Travels',
    url: 'https://www.onlykashmir.com',
    logo: 'https://www.onlykashmir.com/assets/images/logo.png',
    sameAs: [
      'https://www.facebook.com/profile.php?id=61591604585922',
      'https://www.instagram.com/onlykashmirtourandtravels/'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-8899666998',
      contactType: 'customer service'
    }
  };

  const breadcrumbSchema = breadcrumbList && breadcrumbList.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbList.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    }))
  } : null;

  const schemaList = schema ? (Array.isArray(schema) ? schema : [schema]) : [];

  return (
    <Helmet>
      <html lang={lang} />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={robots} />
      <meta name="language" content={lang} />
      <meta name="author" content="Only Kashmir Tour & Travels" />
      <link rel="canonical" href={finalCanonical} />

      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={finalCanonical} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_IN" />

      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@OnlyKashmir" />

      <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
      {schemaList.map((entry, index) => (
        <script key={index} type="application/ld+json">{JSON.stringify(entry)}</script>
      ))}
      {breadcrumbSchema && (
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      )}
      {faq && faq.length > 0 && (
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faq.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: item.answer,
            },
          })),
        })}</script>
      )}
    </Helmet>
  );
};

export default SEO;
