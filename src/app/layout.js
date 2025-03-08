import { Inter } from 'next/font/google';
import './globals.css';
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Decision Delegate | Outsource Your Small Decisions for &#8377;99',
  description: 'Struggling with minor decisions? Let us handle it for just &#8377;99 Get personalized recommendations within 24 hours!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}
        <Analytics/>
      </body>
    </html>
  );
}