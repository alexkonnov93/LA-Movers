import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const graphik = localFont({
  src: "../fonts/Graphik-Semibold.ttf",
  variable: "--font-graphik",
  weight: "600",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Los Angeles Movers — Licensed & Insured | The One Moving and Storage",
  description:
    "Rated 5-star by hundreds of LA customers. The One Moving and Storage offers no-hidden-fee residential & commercial moving with on-time guarantee. Free quote in minutes.",
  keywords:
    "Los Angeles movers, LA moving company, residential moving, commercial moving, storage, packing services",
  openGraph: {
    title:
      "Los Angeles Movers — Licensed & Insured | The One Moving and Storage",
    description:
      "Rated 5-star by hundreds of LA customers. No hidden fees, on-time guarantee.",
    url: "https://theonemoving.com",
    siteName: "The One Moving and Storage",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Los Angeles Movers | The One Moving and Storage",
    description:
      "Rated 5-star by hundreds of LA customers. No hidden fees, on-time guarantee.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://theonemoving.com",
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
        className={`${interTight.variable} ${graphik.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
