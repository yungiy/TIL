import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Providers from '@/components/Providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '더 블로그',
  description: 'made by nextjs 14 with prisma',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <body className={inter.className}>
        <Providers>
          <Header />
          <div className='container h-full pt-5'>{children}</div>
        </Providers>
      </body>
    </html>
  );
}
