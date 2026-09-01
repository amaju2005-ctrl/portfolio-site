import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Abhishek Majumdar — Designer & Creative Technologist',
  description:
    'A multidisciplinary portfolio spanning product thinking, creative direction, interface design, and front-end development.',
  openGraph: {
    title: 'Abhishek Majumdar — Designer & Creative Technologist',
    description:
      'I shape ideas into useful, memorable digital experiences.',
    type: 'website',
    images: [
      {
        url: '/og.png',
        width: 1731,
        height: 909,
        alt: 'Abhishek Majumdar — I shape ideas into useful, memorable digital experiences.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abhishek Majumdar — Designer & Creative Technologist',
    description:
      'I shape ideas into useful, memorable digital experiences.',
    images: ['/og.png'],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
