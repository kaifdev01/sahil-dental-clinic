'use client'

import { Icon } from './ui'
import { PHONE, PHONE_DISPLAY, WHATSAPP } from './constants'
import { useBooking } from './BookingContext'

export function Hero() {
  const { openModal } = useBooking()
  return (
    <section id="home" className="grain relative border-b border-[#ebe4d9] bg-[#f7f2ea]">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 lg:grid-cols-[1fr_1fr] lg:gap-16 lg:px-8 lg:py-24">

        {/* Text */}
        <div className="relative z-10 order-2 lg:order-1">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#d5bd98] bg-[#fffaf2] px-3 py-1.5 text-xs font-medium text-[#806340]">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#b58a48]" aria-hidden="true" />
            Dental care, elevated
          </div>

          <h1 className="serif max-w-lg text-[2.6rem] leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.4rem]">
            Restoring Smiles,{' '}
            <em className="font-normal not-italic text-[#b58a48]">Rebuilding Confidence</em>
          </h1>

          <p className="mt-5 max-w-md text-base leading-7 text-[#666b65] sm:text-[17px]">
            Professional dental care focused on healthy, confident and beautiful smiles; right here in Sabzazar, Lahore.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <button
              onClick={openModal}
              className="rounded-full bg-[#2a2c29] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#b58a48] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b58a48] focus-visible:ring-offset-2"
            >
              Book an Appointment
            </button>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#d9c5a5] bg-white px-6 py-3 text-sm font-semibold text-[#806340] transition hover:bg-[#f7f2ea]"
            >
              <Icon name="whatsapp" className="h-4 w-4" />
              WhatsApp Us
            </a>
          </div>


        </div>

        {/* Image */}
        <div className="relative order-1 mx-auto w-full max-w-[460px] lg:order-2 lg:max-w-none">
          <div className="absolute -inset-4 rounded-[40%_40%_20px_20px] bg-gradient-to-br from-[#e8d5b8] via-[#f0e2c8] to-[#e0c9a0] blur-2xl opacity-60" aria-hidden="true" />
          <img
            className="relative h-[380px] w-full rounded-[40%_40%_20px_20px] object-cover shadow-xl shadow-[#80634025] sm:h-[430px] lg:h-[480px]"
            alt="Dental professional providing attentive care in a modern clinic"
            src="https://images.unsplash.com/photo-1667133295352-ef4c83620e8e?auto=format&fit=crop&w=900&q=80"
            width={900}
            height={480}
            fetchPriority="high"
          />
          <div className="float-card absolute -bottom-4 -left-3 max-w-[200px] rounded-2xl border border-white/80 bg-white/95 p-4 shadow-lg sm:-bottom-5 sm:-left-5">
            <p className="text-[11px] text-[#72766f]">Your comfort comes first</p>
            <p className="serif mt-1 text-base leading-snug">Modern care, personal touch.</p>
          </div>
        </div>

      </div>
    </section>
  )
}
