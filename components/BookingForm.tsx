'use client'

import { useState, useRef } from 'react'
import { Icon } from './ui'
import { PHONE, PHONE_DISPLAY, WHATSAPP } from './constants'

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
const inputError  = `${inputBase} border-red-400 focus:border-red-400`

export function BookingForm() {
  const [fields, setFields] = useState<Fields>(empty)
  const [errors, setErrors] = useState<Errors>({})
  const [submitted, setSubmitted] = useState(false)
  const firstInputRef = useRef<HTMLInputElement>(null)

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

  return (
    <section className="bg-[#f7f2ea] px-5 py-20 lg:px-8 lg:py-28" id="book">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start lg:gap-20">

        {/* ── Left: text & contact info ── */}
        <div className="lg:pt-2">
          <p className="text-xs font-bold uppercase tracking-[.2em] text-[#b58a48]">Appointment Request</p>
          <h2 className="serif mt-3 text-[2rem] leading-tight sm:text-4xl lg:text-5xl">
            Book with Dr. Sahil&apos;s Dental Care
          </h2>
          <p className="mt-4 text-base leading-7 text-[#666b65]">
            Fill in the form and we&apos;ll contact you to confirm your appointment. For a faster response, reach us directly on WhatsApp.
          </p>

          {/* Info items */}
          <div className="mt-8 space-y-4">
            <div className="flex items-start gap-3">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#f4eadc] text-[#a87839]" aria-hidden="true">
                <Icon name="clock" className="h-4 w-4" />
              </span>
              <div>
                <p className="text-sm font-semibold text-[#272a28]">Clinic hours</p>
                <p className="mt-0.5 text-sm text-[#666b65]">Mon – Sat, 10:00 am – 9:00 pm</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#f4eadc] text-[#a87839]" aria-hidden="true">
                <Icon name="phone" className="h-4 w-4" />
              </span>
              <div>
                <p className="text-sm font-semibold text-[#272a28]">Call us</p>
                <a href={`tel:${PHONE}`} className="mt-0.5 block text-sm text-[#666b65] transition hover:text-[#b58a48]">
                  {PHONE_DISPLAY}
                </a>
              </div>
            </div>
          </div>

          {/* WhatsApp CTA */}
          <div className="mt-8 rounded-2xl border border-[#e4d5c0] bg-white p-5">
            <p className="text-sm font-semibold text-[#272a28]">Prefer WhatsApp?</p>
            <p className="mt-1 text-sm leading-6 text-[#666b65]">
              Send your appointment request directly and get a faster reply.
            </p>
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
        </div>

        {/* ── Right: form card ── */}
        <div className="rounded-3xl bg-white p-6 shadow-sm sm:p-8">
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
                <label htmlFor="bf-name" className="block text-sm font-semibold text-[#3a3d39]">
                  Full Name <span className="text-red-400" aria-hidden="true">*</span>
                </label>
                <input
                  id="bf-name"
                  ref={firstInputRef}
                  value={fields.fullName}
                  onChange={set('fullName')}
                  placeholder="Your full name"
                  autoComplete="name"
                  aria-required="true"
                  aria-describedby={errors.fullName ? 'bf-name-err' : undefined}
                  className={errors.fullName ? inputError : inputNormal}
                />
                {errors.fullName && <p id="bf-name-err" role="alert" className="mt-1.5 text-xs text-red-500">{errors.fullName}</p>}
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="bf-phone" className="block text-sm font-semibold text-[#3a3d39]">
                    Phone Number <span className="text-red-400" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="bf-phone"
                    value={fields.phone}
                    onChange={set('phone')}
                    type="tel"
                    placeholder="03XX XXX XXXX"
                    autoComplete="tel"
                    aria-required="true"
                    aria-describedby={errors.phone ? 'bf-phone-err' : undefined}
                    className={errors.phone ? inputError : inputNormal}
                  />
                  {errors.phone && <p id="bf-phone-err" role="alert" className="mt-1.5 text-xs text-red-500">{errors.phone}</p>}
                </div>
                <div>
                  <label htmlFor="bf-email" className="block text-sm font-semibold text-[#3a3d39]">
                    Email <span className="font-normal text-[#888c87]">(optional)</span>
                  </label>
                  <input
                    id="bf-email"
                    value={fields.email}
                    onChange={set('email')}
                    type="email"
                    placeholder="you@example.com"
                    autoComplete="email"
                    aria-describedby={errors.email ? 'bf-email-err' : undefined}
                    className={errors.email ? inputError : inputNormal}
                  />
                  {errors.email && <p id="bf-email-err" role="alert" className="mt-1.5 text-xs text-red-500">{errors.email}</p>}
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="bf-date" className="block text-sm font-semibold text-[#3a3d39]">
                    Preferred Date <span className="text-red-400" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="bf-date"
                    value={fields.date}
                    onChange={set('date')}
                    type="date"
                    min={today}
                    aria-required="true"
                    aria-describedby={errors.date ? 'bf-date-err' : undefined}
                    className={errors.date ? inputError : inputNormal}
                  />
                  {errors.date && <p id="bf-date-err" role="alert" className="mt-1.5 text-xs text-red-500">{errors.date}</p>}
                </div>
                <div>
                  <label htmlFor="bf-time" className="block text-sm font-semibold text-[#3a3d39]">
                    Preferred Time <span className="text-red-400" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="bf-time"
                    value={fields.time}
                    onChange={set('time')}
                    type="time"
                    aria-required="true"
                    aria-describedby={errors.time ? 'bf-time-err' : undefined}
                    className={errors.time ? inputError : inputNormal}
                  />
                  {errors.time && <p id="bf-time-err" role="alert" className="mt-1.5 text-xs text-red-500">{errors.time}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="bf-service" className="block text-sm font-semibold text-[#3a3d39]">
                  Service <span className="text-red-400" aria-hidden="true">*</span>
                </label>
                <select
                  id="bf-service"
                  value={fields.service}
                  onChange={set('service')}
                  aria-required="true"
                  aria-describedby={errors.service ? 'bf-service-err' : undefined}
                  className={`${errors.service ? inputError : inputNormal} ${!fields.service ? 'text-[#a2a59f]' : 'text-[#272a28]'}`}
                >
                  <option value="" disabled>Select a service</option>
                  {SERVICES.map(s => <option key={s} value={s} className="text-[#272a28]">{s}</option>)}
                </select>
                {errors.service && <p id="bf-service-err" role="alert" className="mt-1.5 text-xs text-red-500">{errors.service}</p>}
              </div>

              <div>
                <label htmlFor="bf-message" className="block text-sm font-semibold text-[#3a3d39]">
                  Message <span className="font-normal text-[#888c87]">(optional)</span>
                </label>
                <textarea
                  id="bf-message"
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

            </form>
          )}
        </div>

      </div>
    </section>
  )
}
