"use client";
import "./globals.css";
import localFont from "next/font/local";
import Header from "../app/components/Header/Header";
import Footer from "./components/Footer/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

const poppins = localFont({
  src: [
    {
      path: "../../public/fonts/Recoleta-Black.ttf",
      weight: "400",
    },
    {
      path: "../../public/fonts/Recoleta-Medium.ttf",
      weight: "300",
    },
    {
      path: "../../public/fonts/Recoleta-Light.ttf",
      weight: "200",
    },
  ],
  variable: "--font-Recoleta-Black",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Favicon links */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Portfolio of Elmir Charlie Tanev - Frontend Developer with expertise in React, Next.js, and UI/UX design. Explore my projects and skills." />
        <meta name="keywords" content="Elmir Charlie Tanev, Frontend Developer, React, Next.js, Portfolio, Web Developer, UI/UX Design" />
        <meta property="og:title" content="Elmir Charlie Tanev | Frontend Developer" />
        <meta property="og:description" content="Portfolio of Elmir Charlie Tanev - Frontend Developer with expertise in React, Next.js, and UI/UX design." />
        <meta property="og:image" content="https://charlestanev.dev/og-image.jpg" />
        <meta property="og:url" content="https://charlestanev.dev" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Elmir Charlie Tanev | Frontend Developer" />
        <meta name="twitter:description" content="Portfolio of Elmir Charlie Tanev - Frontend Developer with expertise in React, Next.js, and UI/UX design." />
        <meta name="twitter:image" content="https://charlestanev.dev/og-image.jpg" />

        <title>Charles Tanev</title>
        <meta name="description" content="Charles Tanev's personal website" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-C93E0XW0FX"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-C93E0XW0FX');
            `,
          }}
        />
      </head>
      <body className={poppins.className}>
        <SpeedInsights />
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}

export const metadata = {
  title: "Elmir Charlie Tanev | Frontend Developer",
  description: "Portfolio website of Elmir Charlie Tanev - a creative and experienced frontend developer.",
  keywords: ["Elmir Charlie Tanev", "Frontend Developer", "React", "Next.js", "Portfolio"],
  openGraph: {
    title: "Elmir Charlie Tanev | Frontend Developer",
    description: "Portfolio website of Elmir Charlie Tanev - a creative and experienced frontend developer.",
    url: "https://charlestanev.dev",
    siteName: "Charles Portfolio",
    images: [
      {
        url: "https://charlestanev.dev/og-image.jpg", // replace with your image
        width: 1200,
        height: 630,
        alt: "Charles Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elmir Charlie Tanev | Frontend Developer",
    description: "Check out my frontend portfolio and projects.",
    creator: "@YourTwitterHandle", // optional
    images: ["https://charlestanev.dev/og-image.jpg"],
  },
};

