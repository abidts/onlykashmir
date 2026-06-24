import { Helmet } from 'react-helmet-async';

interface FAQItem {
  question: string;
  answer: string;
}

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
  twitterCard?: string;
  schema?: object;
  faq?: FAQItem[];
}

const SEO = ({
  title,
  description = "Only Kashmir - Your ultimate guide to exploring the beauty of Kashmir. Book tour packages, hotels, and cabs.",
  canonical,
  ogType = 'website',
  ogImage = 'https://www.onlykashmir.com/assets/images/logo.png', // Default logo or hero image
  twitterCard = 'summary_large_image',
  schema,
  faq,
}: SEOProps) => {
  const siteName = 'Only Kashmir';
  const fullTitle = title ? `${title} | ${siteName}` : siteName;
  
  // Ensure canonical URL always uses www.onlykashmir.com
  const currentUrl = window.location.href;
  let canonicalUrl = canonical || currentUrl;
  // Replace non-www with www for consistency
  if (!canonicalUrl.includes('www.onlykashmir.com')) {
    canonicalUrl = canonicalUrl.replace('onlykashmir.com', 'www.onlykashmir.com');
  }
  const url = canonicalUrl;

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Only Kashmir Tour & Travels",
    "url": "https://www.onlykashmir.com",
    "logo": "https://www.onlykashmir.com/assets/images/logo.png",
    "sameAs": [
      "https://www.facebook.com/onlykashmir",
      "https://www.instagram.com/onlykashmir"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-8899666998",
      "contactType": "customer service"
    }
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={siteName} />

      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
      {faq && faq.length > 0 && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faq.map(item => ({
              "@type": "Question",
              "name": item.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
              }
            }))
          })}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
