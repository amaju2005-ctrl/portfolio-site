import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(
    'https://abhishek-majumdar-portfolio.amaju2005.chatgpt.site',
  ),
  title: 'Abhishek Majumdar | Startups, Venture & Storytelling',
  description:
    'Abhishek Majumdar builds, researches, and writes about startups, venture capital, social impact, and the stories behind what gets built.',
  openGraph: {
    title: 'Abhishek Majumdar | Startups, Venture & Storytelling',
    description:
      'Exploring how interesting businesses get built through founder experiments, venture research, social impact work, and storytelling.',
    type: 'website',
    images: [
      {
        url: '/og.png',
        width: 1733,
        height: 908,
        alt: 'Abhishek Majumdar, learning how interesting businesses get built.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abhishek Majumdar | Startups, Venture & Storytelling',
    description:
      'Exploring how interesting businesses get built through founder experiments, venture research, social impact work, and storytelling.',
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
      <body>{children}</body>
    </html>
  );
}
