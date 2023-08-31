import Navbar from '@/components/nav-bar';
import './globals.css';
import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';

const raleway = Raleway({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'David | Front-End Developer',
  description: 'David Peralta Mendoza, Front-End Developer, web development',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={raleway.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
