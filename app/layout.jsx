"use client";

import "./globals.css";

import { Inter, Poppins, Lato } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

const inter = Inter({ subsets: ["latin"] });
const lato = Lato({ subsets: ["latin"], weight: "400" });

// can only do this if it's a server component
// export const metadata = {
//     title: 'AI Quiz Generator',
//     description: 'Generated by create next app',
// }

import Script from "next/script";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>AI Quiz Generator</title>
        <link rel="icon" href="my-favicon-32x32.png" type="image/x-icon"></link>
      </head>
      <body className={`${poppins.className} relative`}>
        <div className="bg-grid">
          <div className="gradient" />
        </div>

        <main className="relative z-10 max-w-7xl mx-auto sm:px-16 px-6">
          {children}
        </main>
      </body>

      {/* <!-- Google tag (gtag.js) --> */}

      {/* afterInteractive is the default strategy for Next's <Script> tag */}
      <Script
        async
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-BKK7659J87"
      />
      <Script strategy="afterInteractive" src="/analytics.js" />
    </html>
  );
}
