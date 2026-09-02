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
  metadataBase: new URL(
    'https://abhishek-majumdar-portfolio.amaju2005.chatgpt.site',
  ),
  title: 'Abhishek Majumdar — Startups, Venture & Storytelling',
  description:
    'The portfolio of Abhishek Majumdar: early-stage founder, startup researcher and storyteller exploring how ambitious businesses get built.',
  openGraph: {
    title: 'Abhishek Majumdar — Startups, Venture & Storytelling',
    description:
      'Learning how great businesses get built through founder experiments, venture research, social-impact work and storytelling.',
    type: 'website',
    images: [
      {
        url: '/og.png',
        width: 1733,
        height: 908,
        alt: 'Abhishek Majumdar — learning how great businesses get built.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abhishek Majumdar — Startups, Venture & Storytelling',
    description:
      'Learning how great businesses get built through founder experiments, venture research, social-impact work and storytelling.',
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
