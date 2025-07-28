import type { Metadata } from "next";
import { Playfair_Display, Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

// Luxury serif font for headings and brand name
const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

// Clean sans-serif for body text
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

// Elegant serif for special text elements
const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Atlantis Real Estate - Premium Properties in Rourkela, Odisha",
  description: "Discover luxury waterfront properties and premium real estate in Rourkela, Odisha. Atlantis Real Estate - Your gateway to dream homes with 15+ years of trusted expertise.",
  keywords: "real estate, Rourkela, Odisha, luxury properties, waterfront villas, apartments, bungalows, property for sale, property for rent",
  authors: [{ name: "Atlantis Real Estate" }],
  creator: "Atlantis Real Estate",
  publisher: "Atlantis Real Estate",
  openGraph: {
    title: "Atlantis Real Estate - Premium Properties in Rourkela",
    description: "Discover luxury waterfront properties and premium real estate in Rourkela, Odisha.",
    url: "https://atlantisrealestate.com",
    siteName: "Atlantis Real Estate",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Atlantis Real Estate - Premium Properties",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Atlantis Real Estate - Premium Properties in Rourkela",
    description: "Discover luxury waterfront properties and premium real estate in Rourkela, Odisha.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfairDisplay.variable} ${inter.variable} ${cormorantGaramond.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
