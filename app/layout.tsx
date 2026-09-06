import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: '%s | Shree Harihar Printing Works',
    default: 'Shree Harihar Printing Works | Carton & Packaging Printing',
  },
  description: 'A 5th-generation B2B print-pack company in Ahmedabad. Precision carton, label & promotional printing for pharma and FMCG brands since 1921.',
  keywords: ['packaging manufacturer Ahmedabad', 'pharma carton printing', 'FMCG packaging', 'Bobst Accubraille India', 'folding cartons Gujarat', 'B2B printing press'],
  authors: [{ name: 'Shree Harihar Printing Works LLP' }],
  creator: 'Shree Harihar Printing Works LLP',
  metadataBase: new URL('https://www.shreehariharprintingworks.com/'),
  icons: {
    icon: "/squareLogo.png",
    shortcut: "/squareLogo.png",
    apple: "/squareLogo.png",
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.shreehariharprintingworks.com/',
    title: 'Shree Harihar Printing Works | Carton & Packaging Printing',
    description: 'Precision packaging for pharmaceutical and FMCG brands. A 5th-generation manufacturing facility in Ahmedabad.',
    siteName: 'Shree Harihar Printing Works LLP',
    images: [
      {
        url: '/images/modern_offset_press.jpg',
        width: 1200,
        height: 630,
        alt: 'Shree Harihar Printing Works Manufacturing Facility',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shree Harihar Printing Works | Carton & Packaging Printing',
    description: 'Precision packaging for pharmaceutical and FMCG brands. Established in 1921.',
    images: ['/images/modern_offset_press.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${openSans.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col font-sans antialiased text-slate-800 bg-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ManufacturingBusiness",
              "name": "Shree Harihar Printing Works LLP",
              "alternateName": "Harihar Print Pack",
              "url": "https://www.shreehariharprintingworks.com/",
              "logo": "https://www.shreehariharprintingworks.com//squareLogo.png",
              "image": "https://www.shreehariharprintingworks.com//images/modern_offset_press.jpg",
              "description": "A 5th-generation B2B print-pack company in Ahmedabad specializing in precision carton, label, and promotional printing for pharmaceutical, FMCG, and food brands.",
              "foundingDate": "1921",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "233/1, Miroli Village, Near Pirana Village, Daskroi",
                "addressLocality": "Ahmedabad",
                "addressRegion": "Gujarat",
                "postalCode": "382425",
                "addressCountry": "IN"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-74900-41921",
                "contactType": "sales",
                "email": "info@hariharprintpack.com",
                "areaServed": "IN",
                "availableLanguage": ["English", "Hindi", "Gujarati"]
              },
              "areaServed": {
                "@type": "Country",
                "name": "India"
              },
              "knowsAbout": [
                "Pharmaceutical Packaging",
                "FMCG Cartons",
                "Braille Embossed Cartons",
                "Accubraille",
                "Offset Printing",
                "Sticker and Label Printing"
              ]
            })
          }}
        />
        {children}
      </body>
    </html>
  );
}

