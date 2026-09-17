import { Icon } from './ui'
import { WHATSAPP } from './constants'

const perks = [
  'Free routine checkups & X-rays',
  'Free scalings (up to 3 per year)',
  'Discounts on fillings & extractions',
  'Individual & family packages available',
]

export function Membership() {
  return (
    <section id="membership" className="bg-[#f7f2ea] px-5 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">

        <div className="grid gap-12 lg:grid-cols-[1fr_.9fr] lg:items-center lg:gap-20">

          {/* Text */}
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[.2em] text-[#b58a48]">Smile membership</p>
            <h2 className="serif text-[2rem] leading-tight sm:text-4xl lg:text-5xl">
              A little more care,{' '}
              <em className="font-normal not-italic text-[#b58a48]">all year round.</em>
            </h2>
            <p className="mt-5 max-w-lg text-base leading-7 text-[#666b65]">
              Our membership bundles make it easier to stay ahead of your dental health — with preventive care,
              priority visits and real savings throughout the year.
            </p>

            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {perks.map((perk) => (
                <li key={perk} className="flex items-start gap-3 text-sm font-medium text-[#3a3d39]">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#f4eadc] text-[#a87839]" aria-hidden="true">
                    <Icon name="check" className="h-3 w-3" />
                  </span>
                  {perk}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/membership"
                className="rounded-full bg-[#2a2c29] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#b58a48]"
              >
                View membership plans
              </a>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#d9c5a5] px-6 py-3 text-sm font-semibold text-[#806340] transition hover:bg-[#ede5d8]"
              >
                <Icon name="whatsapp" className="h-4 w-4" />
                Ask on WhatsApp
              </a>
            </div>
          </div>

          {/* Plans preview */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            {[
              { name: 'Bronze', price: 'PKR 6,000', note: 'Single · 1 year', dark: false },
              { name: 'Silver', price: 'PKR 15,000', note: 'Single · 1 year', dark: true },
            ].map(({ name, price, note, dark }) => (
              <div
                key={name}
                className={`rounded-2xl p-6 ${dark ? 'bg-[#2a2c29] text-white' : 'border border-[#e5ddd0] bg-white'}`}
              >
                <p className={`text-xs font-bold uppercase tracking-wider ${dark ? 'text-[#d8b47c]' : 'text-[#b58a48]'}`}>{name}</p>
                <p className={`serif mt-2 text-3xl ${dark ? 'text-white' : 'text-[#272a28]'}`}>{price}</p>
                <p className={`mt-1 text-xs ${dark ? 'text-[#b8bbb5]' : 'text-[#888c87]'}`}>{note}</p>
                <a
                  href="/membership"
                  className={`mt-5 inline-flex items-center gap-1.5 text-sm font-semibold transition ${dark ? 'text-[#d8b47c] hover:text-[#e8c98c]' : 'text-[#806340] hover:text-[#b58a48]'}`}
                >
                  See what&apos;s included →
                </a>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
