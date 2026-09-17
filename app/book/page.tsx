import { BookingForm } from '@/components/BookingForm'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { MobileBar } from '@/components/MobileBar'
import { BookingProvider } from '@/components/BookingContext'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Book an Appointment | Dr. Sahil's Dental Care, Lahore",
  description: "Request a dental appointment at Dr. Sahil's Dental Care in Sabzazar, Lahore. Fill in the form or WhatsApp us directly.",
}

export default function BookPage() {
  return (
    <BookingProvider>
      <main className="overflow-hidden">
        <Header />
        <BookingForm />
        <Footer />
        <MobileBar />
      </main>
    </BookingProvider>
  )
}
