'use client'

import { Icon } from './ui'
import { PHONE, WHATSAPP } from './constants'
import { useBooking } from './BookingContext'

export function MobileBar() {
  const { openModal } = useBooking()
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-[#ddd6cb] bg-white pb-safe shadow-[0_-2px_16px_rgba(0,0,0,0.07)] lg:hidden">
      <a
        href={`tel:${PHONE}`}
        className="flex flex-col items-center gap-1 py-3 text-[11px] font-semibold text-[#3a3d39] transition active:bg-[#f5f1ea]"
        aria-label="Call the clinic"
      >
        <Icon name="phone" className="h-5 w-5 text-[#b58a48]" />
        Call Now
      </a>
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noreferrer"
        className="flex flex-col items-center gap-1 border-x border-[#eee9e1] py-3 text-[11px] font-semibold text-[#3a3d39] transition active:bg-[#f5f1ea]"
        aria-label="WhatsApp the clinic"
      >
        <Icon name="whatsapp" className="h-5 w-5 text-[#b58a48]" />
        WhatsApp
      </a>
      <button
        onClick={openModal}
        className="flex flex-col items-center gap-1 py-3 text-[11px] font-semibold text-[#3a3d39] transition active:bg-[#f5f1ea]"
        aria-label="Book an appointment"
      >
        <Icon name="calendar" className="h-5 w-5 text-[#b58a48]" />
        Book Now
      </button>
    </div>
  )
}
