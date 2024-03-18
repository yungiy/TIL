import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import NextProvider from '@/components/NextProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '윤기의 블로그',
  description: 'nextjs13과 prisma로 만든 블로그',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <NextProvider>
          <Header />
          {children}
        </NextProvider>
      </body>
    </html>
  );
}
