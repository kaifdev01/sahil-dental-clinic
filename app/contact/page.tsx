import { BookingForm } from '@/components/BookingForm'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { MobileBar } from '@/components/MobileBar'
import { Icon } from '@/components/ui'
import {
  ADDRESS_LINE1,
  ADDRESS_LINE2,
  GOOGLE_REVIEWS,
  MAPS_EMBED,
  MAPS_LINK,
  PHONE,
  PHONE_DISPLAY,
  WHATSAPP,
} from '@/components/constants'
import { BookingProvider } from '@/components/BookingContext'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Contact | Dr. Sahil's Dental Care, Lahore",
  description: "Get in touch with Dr. Sahil's Dental Care in Sabzazar, Lahore. Call, WhatsApp or visit us.",
}

export default function ContactPage() {
  return (
    <BookingProvider>
      <main className="overflow-hidden">
        <Header />

        {/* Hero */}
        <section className="grain border-b border-[#ebe4d9] bg-[#f7f2ea] px-5 py-16 lg:px-8 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">

            {/* Info */}
            <div>
              <p className="text-xs font-bold uppercase tracking-[.22em] text-[#b58a48]">Contact us</p>
              <h1 className="serif mt-3 text-[2.4rem] leading-tight sm:text-5xl lg:text-6xl">
                We&apos;re here when you need us.
              </h1>
              <p className="mt-4 max-w-md text-base leading-7 text-[#666b65]">
                Get in touch to ask a question, request an appointment or find your way to the clinic.
              </p>

              <div className="mt-8 rounded-3xl bg-white p-6 shadow-sm">
                <p className="text-base font-semibold text-[#272a28]">Dr. Sahil&apos;s Dental Care</p>

                <a
                  href={MAPS_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 flex items-start gap-3 text-sm leading-6 text-[#555a54] transition hover:text-[#b58a48]"
                >
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#f5e9d8] text-[#a77d41]" aria-hidden="true">
                    <Icon name="pin" className="h-4 w-4" />
                  </span>
                  <span>
                    {ADDRESS_LINE1},<br />
                    {ADDRESS_LINE2}
                  </span>
                </a>

                <a
                  href={`tel:${PHONE}`}
                  className="mt-5 flex items-center gap-3 text-sm font-semibold text-[#555a54] transition hover:text-[#b58a48]"
                >
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#f5e9d8] text-[#a77d41]" aria-hidden="true">
                    <Icon name="phone" className="h-4 w-4" />
                  </span>
                  {PHONE_DISPLAY}
                </a>
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href={`tel:${PHONE}`}
                  className="inline-flex items-center gap-2 rounded-full bg-[#2a2c29] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#b58a48]"
                >
                  <Icon name="phone" className="h-4 w-4" />
                  Call Now
                </a>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[#d9c5a5] bg-white px-5 py-3 text-sm font-semibold text-[#806340] transition hover:bg-[#f7f2ea]"
                >
                  <Icon name="whatsapp" className="h-4 w-4" />
                  WhatsApp Us
                </a>
                <a
                  href={MAPS_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[#d9c5a5] bg-white px-5 py-3 text-sm font-semibold text-[#806340] transition hover:bg-[#f7f2ea]"
                >
                  <Icon name="pin" className="h-4 w-4" />
                  Get Directions
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="overflow-hidden rounded-3xl border border-[#e3d6c3] shadow-lg">
              <iframe
                title="Dr. Sahil's Dental Care location map"
                src={MAPS_EMBED}
                width="100%"
                height="460"
                className="block "
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </div>
        </section>

        {/* Google reviews strip */}
        <section className="border-b border-[#ebe4d9] bg-white px-5 py-7 lg:px-8" aria-label="Google rating">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center gap-3">
              <div className="flex text-[#f5a623]" aria-label="5 stars">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Icon key={s} name="star" className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="text-sm text-[#5d615c]">
                <strong className="text-[#272a28]">4.9 / 5</strong> from 111 Google Reviews
              </p>
            </div>
            <a
              href={GOOGLE_REVIEWS}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#d9c5a5] px-5 py-2.5 text-sm font-semibold text-[#806340] transition hover:bg-[#f7f2ea]"
            >
              View Google Reviews
              <Icon name="arrow" className="h-4 w-4" />
            </a>
          </div>
        </section>

        <BookingForm />
        <Footer />
        <MobileBar />
      </main>
    </BookingProvider>
  )
}
