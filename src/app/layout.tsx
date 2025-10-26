import { createMetadata } from '@/lib/metadata';
import type { Viewport } from 'next';
import { Inter, Geist_Mono } from 'next/font/google';
import type { ReactNode } from 'react';
import '@/styles/globals.css';
import 'katex/dist/katex.css';
import { baseUrl } from '@/lib/constants';
import { Body } from './layout.client';
import { description as homeDescription } from './layout.config';
import { Provider } from './provider';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = createMetadata({
  title: {
    template: '%s | Epicentral Labs',
    default: 'Epicentral Labs',
  },
  description: homeDescription,
  metadataBase: baseUrl,
});

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0A0A0A' },
    { media: '(prefers-color-scheme: light)', color: '#fff' },
  ],
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html
      lang='en'
      className={`${inter.variable} ${geistMono.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet" />
      </head>
      <Body>
        <Provider>{children}</Provider>
      </Body>
    </html>
  );
};

export default RootLayout;
