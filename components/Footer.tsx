import { Icon } from './ui'
import { PHONE, PHONE_DISPLAY, WHATSAPP, ADDRESS_LINE1, ADDRESS_LINE2, MAPS_LINK, MAPS_EMBED, GOOGLE_REVIEWS } from './constants'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/#about' },
  { label: 'Services', href: '/#services' },
  { label: 'Membership', href: '/membership' },
  { label: 'Book Appointment', href: '/#book' },
  { label: 'Contact', href: '/contact' },
]

export function Footer() {
  return (
    <footer className="bg-[#20221f] text-[#d9dbd5]">

      {/* Embedded map */}
      <div className="h-[260px] w-full sm:h-[320px]">
        <iframe
          title="Dr. Sahil's Dental Care location"
          src={MAPS_EMBED}
          width="100%"
          height="100%"
          className="block "
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      {/* Footer content */}
      <div className="px-5 pb-28 pt-14 lg:px-8 lg:pb-12">
        <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="/" className="flex items-center gap-3 text-white" aria-label="Dr. Sahil's Dental Care – Home">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-[#c9a66f] text-base font-semibold text-[#d8b47c]" aria-hidden="true">
                S
              </span>
              <span>
                <strong className="block text-[14px] leading-tight">Dr. Sahil&apos;s</strong>
                <span className="block text-[9px] uppercase tracking-[.22em] text-[#d8b47c]">Dental Care</span>
              </span>
            </a>
            <p className="mt-5 max-w-xs text-sm leading-6 text-[#aeb1aa]">
              Thoughtful dental care for healthier, happier smiles in Lahore.
            </p>
            <div className="mt-5 flex items-center gap-1.5">
              {[...Array(5)].map((_, i) => (
                <Icon key={i} name="star" className="h-3.5 w-3.5 fill-[#f5a623] stroke-[#f5a623]" />
              ))}
              <a
                href={GOOGLE_REVIEWS}
                target="_blank"
                rel="noreferrer"
                className="ml-1.5 text-xs text-[#aeb1aa] underline underline-offset-2 hover:text-[#d8b47c]"
              >
                4.9 · 111 reviews
              </a>
            </div>
          </div>

          {/* Visit */}
          <div>
            <p className="text-sm font-semibold text-white">Visit us</p>
            <a
              href={MAPS_LINK}
              target="_blank"
              rel="noreferrer"
              className="mt-4 block text-sm leading-6 text-[#aeb1aa] transition hover:text-[#d8b47c]"
            >
              {ADDRESS_LINE1},<br />
              {ADDRESS_LINE2}
            </a>
          </div>

          {/* Contact */}
          <div>
            <p className="text-sm font-semibold text-white">Contact</p>
            <a href={`tel:${PHONE}`} className="mt-4 flex items-center gap-2 text-sm text-[#d8b47c] transition hover:text-[#e8c98c]">
              <Icon name="phone" className="h-3.5 w-3.5" />
              {PHONE_DISPLAY}
            </a>
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="mt-3 flex items-center gap-2 text-sm text-[#d8b47c] transition hover:text-[#e8c98c]">
              <Icon name="whatsapp" className="h-3.5 w-3.5" />
              WhatsApp us
            </a>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-sm font-semibold text-white">Quick links</p>
            <nav className="mt-4 grid gap-2.5" aria-label="Footer navigation">
              {navLinks.map(({ label, href }) => (
                <a key={href} href={href} className="text-sm text-[#aeb1aa] transition hover:text-[#d8b47c]">
                  {label}
                </a>
              ))}
            </nav>
          </div>

        </div>

        <div className="mx-auto mt-12 max-w-7xl border-t border-[#3a3d38] pt-6 text-xs text-[#6e7169]">
          © {new Date().getFullYear()} Dr. Sahil&apos;s Dental Care. All rights reserved. · Sabzazar, Lahore, Pakistan
        </div>
      </div>

    </footer>
  )
}
