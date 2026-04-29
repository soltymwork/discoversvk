import type { Metadata } from 'next';
import { Inter, Cormorant_Garamond } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-serif',
});

export const metadata: Metadata = {
  title: 'Discover Slovakia',
  description: 'Objavte krásy Slovenska. Známe aj neznáme miesta pre váš ďalší výlet.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="sk" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="font-sans antialiased text-gray-900 bg-[#FAF9F6] selection:bg-orange-500 selection:text-white" suppressHydrationWarning>{children}</body>
    </html>
  );
}
