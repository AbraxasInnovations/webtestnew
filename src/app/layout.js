import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: 'Abraxas Innovations',
  description: 'Innovating Decentralized Finance',
  icons: {
    icon: [
      { rel: 'icon', url: '/favicon.ico' },
      { rel: 'icon', url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
      { rel: 'icon', url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' }
    ],
    apple: { url: '/apple-touch-icon.png', type: 'image/png' },
    other: [
      {
        rel: 'android-chrome',
        url: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        rel: 'android-chrome',
        url: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png'
      }
    ]
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'Abraxas Innovations',
    description: 'Innovating Decentralized Finance',
    type: 'website',
  },
  other: {
    'google-site-verification': '',
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Removing the redundant favicon links */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
