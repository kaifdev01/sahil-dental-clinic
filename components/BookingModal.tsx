'use client'

import { useState, useEffect, useRef } from 'react'
import { useBooking } from './BookingContext'
import { Icon } from './ui'
import { PHONE, WHATSAPP } from './constants'

const SERVICES = [
  'Dental Checkup',
  'Teeth Cleaning & Scaling',
  'Dental Filling',
  'Root Canal Treatment',
  'Dental Crown',
  'Tooth Extraction',
  'Teeth Whitening',
  'Orthodontic Consultation',
  'Dental Implants',
  'Other',
]

type Fields = {
  fullName: string
  phone: string
  email: string
  date: string
  time: string
  service: string
  message: string
}

type Errors = Partial<Record<keyof Fields, string>>

const empty: Fields = { fullName: '', phone: '', email: '', date: '', time: '', service: '', message: '' }

function validate(f: Fields): Errors {
  const e: Errors = {}
  if (!f.fullName.trim()) e.fullName = 'Full name is required.'
  if (!f.phone.trim()) e.phone = 'Phone number is required.'
  else if (!/^[0-9+\s\-()]{7,15}$/.test(f.phone.trim())) e.phone = 'Enter a valid phone number.'
  if (f.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) e.email = 'Enter a valid email address.'
  if (!f.date) e.date = 'Preferred date is required.'
  if (!f.time) e.time = 'Preferred time is required.'
  if (!f.service) e.service = 'Please select a service.'
  return e
}

function buildWhatsAppMessage(f: Fields) {
  return encodeURIComponent(
    `Hello Dr. Sahil's Dental Care,\n\nI'd like to request an appointment.\n\nName: ${f.fullName}\nPhone: ${f.phone}\nService: ${f.service}\nDate: ${f.date}\nTime: ${f.time}${f.message ? `\nMessage: ${f.message}` : ''}`
  )
}

const inputBase = 'mt-2 w-full rounded-xl border px-4 py-3 text-sm bg-white outline-none placeholder:text-[#a2a59f] transition focus:ring-2 focus:ring-[#b58a4820]'
const inputNormal = `${inputBase} border-[#e5e1d9] focus:border-[#b58a48]`
const inputError = `${inputBase} border-red-400 focus:border-red-400`

export function BookingModal() {
  const { open, closeModal } = useBooking()
  const [fields, setFields] = useState<Fields>(empty)
  const [errors, setErrors] = useState<Errors>({})
  const [submitted, setSubmitted] = useState(false)
  const overlayRef = useRef<HTMLDivElement>(null)
  const firstInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    if (open) setTimeout(() => firstInputRef.current?.focus(), 100)
    return () => { document.body.style.overflow = '' }
  }, [open])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') handleClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  })

  function handleClose() {
    closeModal()
    setTimeout(() => { setSubmitted(false); setFields(empty); setErrors({}) }, 300)
  }

  function set(key: keyof Fields) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setFields(prev => ({ ...prev, [key]: e.target.value }))
      if (errors[key]) setErrors(prev => ({ ...prev, [key]: undefined }))
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const errs = validate(fields)
    if (Object.keys(errs).length) { setErrors(errs); return }
    setSubmitted(true)
    window.open(`https://wa.me/${PHONE}?text=${buildWhatsAppMessage(fields)}`, '_blank')
  }

  const today = new Date().toISOString().split('T')[0]

  if (!open) return null

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[100] flex items-end justify-center bg-black/50 backdrop-blur-sm sm:items-center sm:p-4"
      onClick={(e) => { if (e.target === overlayRef.current) handleClose() }}
      role="dialog"
      aria-modal="true"
      aria-label="Book an appointment"
    >
      <div className="relative flex max-h-[95dvh] w-full max-w-2xl flex-col overflow-hidden rounded-t-3xl bg-white shadow-2xl sm:rounded-3xl">

        {/* Header */}
        <div className="flex shrink-0 items-center justify-between border-b border-[#f0ebe3] px-6 py-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.18em] text-[#b58a48]">Appointment Request</p>
            <h2 className="serif mt-0.5 text-xl">Book with Dr. Sahil&apos;s Dental Care</h2>
          </div>
          <button
            onClick={handleClose}
            aria-label="Close booking form"
            className="grid h-9 w-9 place-items-center rounded-full border border-[#e5e1d9] text-[#666b65] transition hover:bg-[#f5f1ea]"
          >
            <Icon name="close" className="h-4 w-4" />
          </button>
        </div>

        {/* Scrollable body */}
        <div className="overflow-y-auto px-6 py-6">
          {submitted ? (
            <div className="flex flex-col items-center py-8 text-center">
              <div className="grid h-16 w-16 place-items-center rounded-full bg-[#f4eadc] text-[#b58a48]">
                <Icon name="check" className="h-8 w-8" />
              </div>
              <h3 className="serif mt-5 text-2xl">Request received!</h3>
              <p className="mt-3 max-w-sm text-sm leading-6 text-[#666b65]">
                Thank you. Your appointment request has been received. The clinic will contact you to confirm.
              </p>
              <div className="mt-7 w-full rounded-2xl border border-[#e4d5c0] bg-[#fffaf3] p-5 text-left">
                <p className="text-sm font-semibold text-[#343632]">Want a faster response?</p>
                <p className="mt-1 text-sm leading-6 text-[#666b65]">Send your request directly on WhatsApp.</p>
                <a
                  href={`https://wa.me/${PHONE}?text=${buildWhatsAppMessage(fields)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#25d366] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1ebe5d]"
                >
                  <Icon name="whatsapp" className="h-4 w-4" />
                  Send on WhatsApp
                </a>
              </div>
              <button
                onClick={() => { setSubmitted(false); setFields(empty); setErrors({}) }}
                className="mt-6 text-sm font-semibold text-[#b58a48] underline underline-offset-4 hover:text-[#a07840]"
              >
                Submit another request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-5">

              <div>
                <label htmlFor="bm-name" className="block text-sm font-semibold text-[#3a3d39]">
                  Full Name <span className="text-red-400" aria-hidden="true">*</span>
                </label>
                <input
                  id="bm-name"
                  ref={firstInputRef}
                  value={fields.fullName}
                  onChange={set('fullName')}
                  placeholder="Your full name"
                  autoComplete="name"
                  aria-required="true"
                  className={errors.fullName ? inputError : inputNormal}
                />
                {errors.fullName && <p role="alert" className="mt-1.5 text-xs text-red-500">{errors.fullName}</p>}
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="bm-phone" className="block text-sm font-semibold text-[#3a3d39]">
                    Phone Number <span className="text-red-400" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="bm-phone"
                    value={fields.phone}
                    onChange={set('phone')}
                    type="tel"
                    placeholder="03XX XXX XXXX"
                    autoComplete="tel"
                    aria-required="true"
                    className={errors.phone ? inputError : inputNormal}
                  />
                  {errors.phone && <p role="alert" className="mt-1.5 text-xs text-red-500">{errors.phone}</p>}
                </div>
                <div>
                  <label htmlFor="bm-email" className="block text-sm font-semibold text-[#3a3d39]">
                    Email <span className="font-normal text-[#888c87]">(optional)</span>
                  </label>
                  <input
                    id="bm-email"
                    value={fields.email}
                    onChange={set('email')}
                    type="email"
                    placeholder="you@example.com"
                    autoComplete="email"
                    className={errors.email ? inputError : inputNormal}
                  />
                  {errors.email && <p role="alert" className="mt-1.5 text-xs text-red-500">{errors.email}</p>}
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="bm-date" className="block text-sm font-semibold text-[#3a3d39]">
                    Preferred Date <span className="text-red-400" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="bm-date"
                    value={fields.date}
                    onChange={set('date')}
                    type="date"
                    min={today}
                    aria-required="true"
                    className={errors.date ? inputError : inputNormal}
                  />
                  {errors.date && <p role="alert" className="mt-1.5 text-xs text-red-500">{errors.date}</p>}
                </div>
                <div>
                  <label htmlFor="bm-time" className="block text-sm font-semibold text-[#3a3d39]">
                    Preferred Time <span className="text-red-400" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="bm-time"
                    value={fields.time}
                    onChange={set('time')}
                    type="time"
                    aria-required="true"
                    className={errors.time ? inputError : inputNormal}
                  />
                  {errors.time && <p role="alert" className="mt-1.5 text-xs text-red-500">{errors.time}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="bm-service" className="block text-sm font-semibold text-[#3a3d39]">
                  Service <span className="text-red-400" aria-hidden="true">*</span>
                </label>
                <select
                  id="bm-service"
                  value={fields.service}
                  onChange={set('service')}
                  aria-required="true"
                  className={`${errors.service ? inputError : inputNormal} ${!fields.service ? 'text-[#a2a59f]' : 'text-[#272a28]'}`}
                >
                  <option value="" disabled>Select a service</option>
                  {SERVICES.map(s => <option key={s} value={s} className="text-[#272a28]">{s}</option>)}
                </select>
                {errors.service && <p role="alert" className="mt-1.5 text-xs text-red-500">{errors.service}</p>}
              </div>

              <div>
                <label htmlFor="bm-message" className="block text-sm font-semibold text-[#3a3d39]">
                  Message <span className="font-normal text-[#888c87]">(optional)</span>
                </label>
                <textarea
                  id="bm-message"
                  value={fields.message}
                  onChange={set('message')}
                  rows={3}
                  placeholder="Tell us anything that may help with your visit"
                  className="mt-2 w-full resize-none rounded-xl border border-[#e5e1d9] bg-white px-4 py-3 text-sm outline-none placeholder:text-[#a2a59f] transition focus:border-[#b58a48] focus:ring-2 focus:ring-[#b58a4820]"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-[#2a2c29] px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-[#b58a48] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b58a48] focus-visible:ring-offset-2"
              >
                Request an Appointment
              </button>
              <p className="text-center text-xs text-[#888c87]">
                This is a request — not a confirmed booking. The clinic will contact you to confirm.
              </p>

              <div className="rounded-2xl border border-[#e4d5c0] bg-[#fffaf3] p-5">
                <p className="text-sm font-semibold text-[#343632]">Prefer WhatsApp?</p>
                <p className="mt-1 text-sm leading-6 text-[#666b65]">Send your appointment request directly on WhatsApp.</p>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#25d366] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1ebe5d]"
                >
                  <Icon name="whatsapp" className="h-4 w-4" />
                  WhatsApp Us
                </a>
              </div>

            </form>
          )}
        </div>
      </div>
    </div>
  )
}
