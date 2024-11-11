import type { Metadata } from 'next';
import Head from 'next/head';
import { Montserrat } from 'next/font/google';
import '../styles/globals.css';
import NavBar from '@/components/navbar';
import Footer from '@/components/footer';
import { SpeedInsights } from "@vercel/speed-insights/next"

const font = Montserrat({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

export const metadata: Metadata = {
  title: 'Anugrah Cipta Mould Indonesia'
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="light">
      <link rel="icon" href="/images/acmi_favicon.ico" />
      <link rel="apple-touch-icon" href="/images/apple-touch-icon.png" />
      <body className={font.className}>
        <NavBar />
        {children}
        <SpeedInsights />
        <Footer />
      </body>
    </html>
  )
}
