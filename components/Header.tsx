'use client'

import { useState } from 'react'
import { Icon } from './ui'
import { PHONE, WHATSAPP } from './constants'
import { useBooking } from './BookingContext'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/#about' },
  { label: 'Services', href: '/#services' },
  { label: 'Membership', href: '/membership' },
  { label: 'Contact', href: '/contact' },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const { openModal } = useBooking()

  return (
    <header className="sticky top-[38px] z-50 border-b border-[#e9e3d9] bg-[#fcfaf6]/95 backdrop-blur-md">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 lg:px-8">

        {/* Logo */}
        <a href="/" className="flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b58a48] focus-visible:ring-offset-2 rounded-sm" aria-label="Dr. Sahil's Dental Care – Home">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-[#c9a66f] text-base font-semibold text-[#b58a48]" aria-hidden="true">
            S
          </span>
          <span>
            <strong className="block text-[14px] leading-tight tracking-tight text-[#272a28]">Dr. Sahil&apos;s</strong>
            <span className="block text-[9px] uppercase tracking-[.22em] text-[#9a7a48]">Dental Care</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 text-sm font-medium text-[#575b56] lg:flex" aria-label="Main navigation">
          {navLinks.map(({ label, href }) => (
            <a key={href} href={href} className="py-1 transition hover:text-[#b58a48] focus-visible:outline-none focus-visible:text-[#b58a48]">
              {label}
            </a>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${PHONE}`}
            className="flex items-center gap-1.5 text-sm font-medium text-[#575b56] transition hover:text-[#b58a48]"
            aria-label="Call the clinic"
          >
            <Icon name="phone" className="h-4 w-4" />
            Call
          </a>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 rounded-full border border-[#d9c5a5] px-4 py-2 text-sm font-semibold text-[#806340] transition hover:bg-[#f7f2ea]"
          >
            <Icon name="whatsapp" className="h-4 w-4" />
            WhatsApp
          </a>
          <button
            onClick={openModal}
            className="rounded-full bg-[#2a2c29] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#b58a48] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b58a48] focus-visible:ring-offset-2"
          >
            Book Appointment
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen(!open)}
          className="grid h-9 w-9 place-items-center rounded-full border border-[#ded8cf] text-[#2a2c29] transition hover:bg-[#f5f1ea] lg:hidden"
        >
          <Icon name={open ? 'close' : 'menu'} className="h-4.5 w-4.5" />
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div id="mobile-nav" className="border-t border-[#e9e3d9] bg-[#fcfaf6] px-5 py-5 lg:hidden">
          <nav className="grid gap-1" aria-label="Mobile navigation">
            {navLinks.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-2.5 text-sm font-medium text-[#3a3d39] transition hover:bg-[#f5f1ea] hover:text-[#b58a48]"
              >
                {label}
              </a>
            ))}
          </nav>
          <div className="mt-4 grid gap-2.5">
            <button
              onClick={() => { setOpen(false); openModal() }}
              className="w-full rounded-full bg-[#2a2c29] py-3 text-sm font-semibold text-white transition hover:bg-[#b58a48]"
            >
              Book an Appointment
            </button>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-full border border-[#d9c5a5] py-3 text-sm font-semibold text-[#806340] transition hover:bg-[#f7f2ea]"
            >
              <Icon name="whatsapp" className="h-4 w-4" />
              WhatsApp Us
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
