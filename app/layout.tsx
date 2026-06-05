import type {Metadata} from 'next';
import './globals.css'; // Global styles
import { SITE_DATA } from '@/constants/site-data';

export const metadata: Metadata = {
  title: `${SITE_DATA.name} | South Florida Luxury Property Restoration`,
  description: `South Florida's premier commercial and luxury residential environmental cleanup agency. 24/7 Water, Fire, and Mold restoration. Call ${SITE_DATA.phone}.`,
  keywords: "restoration, mold remediation, water damage, fire damage, south florida, luxury cleaning, deep clean, Fort Lauderdale",
  openGraph: {
    title: `${SITE_DATA.name} | Restoration Services`,
    description: `South Florida's premier luxury property restoration agency. Fast, surgical cleanup for your peace of mind.`,
    type: "website",
    locale: "en_US",
    siteName: SITE_DATA.name,
    images: [
      {
        url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2675&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: `${SITE_DATA.name} Hero Image`,
      }
    ]
  }
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": SITE_DATA.name,
    "image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2675&auto=format&fit=crop",
    "telephone": "+13053546870",
    "email": SITE_DATA.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "4800 SW 29th Way",
      "addressLocality": "Fort Lauderdale",
      "addressRegion": "FL",
      "postalCode": "33312",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 26.0694,
      "longitude": -80.1770
    },
    "url": "https://crystalclearsolutionsgroup.com",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": SITE_DATA.rating,
      "reviewCount": SITE_DATA.reviewCount
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    }
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
