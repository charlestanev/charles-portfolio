import "./globals.css";
import localFont from "next/font/local";
import Header from "../app/components/Header/Header";
import Footer from "./components/Footer/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";

const poppins = localFont({
  src: [
    { path: "../../public/fonts/Recoleta-Black.ttf", weight: "400" },
    { path: "../../public/fonts/Recoleta-Medium.ttf", weight: "300" },
    { path: "../../public/fonts/Recoleta-Light.ttf", weight: "200" },
  ],
  variable: "--font-Recoleta-Black",
});

export const metadata = {
  metadataBase: new URL("https://charlestanev.dev"),
  title: "Elmir Charlie Tanev | Frontend Developer",
  description: "Portfolio website of Elmir Charlie Tanev - a creative and experienced frontend developer.",
  keywords: ["Elmir Charlie Tanev", "Frontend Developer", "React", "Next.js", "Portfolio"],
  openGraph: {
    title: "Elmir Charlie Tanev | Frontend Developer",
    description: "Portfolio website of Elmir Charlie Tanev - a creative and experienced frontend developer.",
    url: "https://charlestanev.dev",
    siteName: "Charles Portfolio",
    images: [{ url: "https://charlestanev.dev/og-image.jpg", width: 1200, height: 630, alt: "Charles Portfolio" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elmir Charlie Tanev | Frontend Developer",
    description: "Check out my frontend portfolio and projects.",
    images: ["https://charlestanev.dev/og-image.jpg"],
  },
  verification: {
    google: "RRVWG6zy9TvdvRIXyjJRjBlP8zZ7ALy-OzcCxBCFl7I",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <SpeedInsights />
        <Header />
        {children}
        <Footer />
        <Analytics />

        {/* Google Analytics correctly loaded with next/script */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-HGJL7GJVXM" />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-HGJL7GJVXM');
          `}
        </Script>
      </body>
    </html>
  );
}
