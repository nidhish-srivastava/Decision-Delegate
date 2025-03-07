import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Decision Delegate | Outsource Your Small Decisions for $1',
  description: 'Struggling with minor decisions? Let us handle it for just $1. Get personalized recommendations within 24 hours!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}