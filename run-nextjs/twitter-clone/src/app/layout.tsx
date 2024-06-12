import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import AuthSession from './_components/AuthSession';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '트위터 클론',
  description: '도지 하이',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='kr'>
      <body className={inter.className}>
        <AuthSession>{children}</AuthSession>
      </body>
    </html>
  );
}
