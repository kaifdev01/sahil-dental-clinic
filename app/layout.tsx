import type { Metadata } from 'next'
import './globals.css'
import { Preloader } from '@/components/Preloader'
import { DemoOverlay } from '@/components/DemoOverlay'

export const metadata: Metadata = {
  title: "Dr. Sahil's Dental Care | Dentist in Sabzazar, Lahore",
  description:
    "Trusted, modern dental care in Sabzazar, Lahore. Book your appointment with Dr. Sahil's Dental Care — rated 4.9/5 on Google. Call +92 329 9444775.",
  keywords: [
    'dentist Lahore',
    'dental clinic Sabzazar',
    'Dr Sahil dental care',
    'teeth cleaning Lahore',
    'root canal Lahore',
    'dental implants Lahore',
    'best dentist Lahore',
    'dental checkup Lahore',
  ],
  authors: [{ name: "Dr. Sahil's Dental Care" }],
  openGraph: {
    title: "Dr. Sahil's Dental Care | Dentist in Sabzazar, Lahore",
    description: 'Professional dental care in Lahore. Rated 4.9/5 on Google. Book your appointment today.',
    url: 'https://drsahildentalcare.com',
    siteName: "Dr. Sahil's Dental Care",
    locale: 'en_PK',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Dr. Sahil's Dental Care | Lahore",
    description: 'Professional dental care in Sabzazar, Lahore. Rated 4.9/5 on Google.',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <meta name="geo.region" content="PK-PB" />
        <meta name="geo.placename" content="Lahore" />
        <meta name="geo.position" content="31.527887;74.2650214" />
        <meta name="ICBM" content="31.527887, 74.2650214" />
      </head>
      <body className="pt-[38px]">
        <DemoOverlay />
        <Preloader />
        {children}
      </body>
    </html>
  )
}
