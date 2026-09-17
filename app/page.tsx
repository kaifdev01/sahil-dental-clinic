import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { TrustBar } from '@/components/TrustBar'
import { About } from '@/components/About'
import { Services } from '@/components/Services'
import { Membership } from '@/components/Membership'
import { BookingForm } from '@/components/BookingForm'
import { Footer } from '@/components/Footer'
import { MobileBar } from '@/components/MobileBar'
import { BookingModal } from '@/components/BookingModal'
import { BookingProvider } from '@/components/BookingContext'

export default function Home() {
  return (
    <BookingProvider>
      <main className="overflow-hidden">
        <Header />
        <Hero />
        <TrustBar />
        <About />
        <Services />
        <Membership />
        <BookingForm />
        <Footer />
        <MobileBar />
        <BookingModal />
      </main>
    </BookingProvider>
  )
}
