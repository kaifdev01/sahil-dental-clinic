import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { MobileBar } from '@/components/MobileBar'
import { Icon } from '@/components/ui'
import { WHATSAPP } from '@/components/constants'
import { BookingProvider } from '@/components/BookingContext'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Membership Plans | Dr. Sahil's Dental Care, Lahore",
  description: "Affordable dental membership bundles for individuals and families at Dr. Sahil's Dental Care, Sabzazar, Lahore.",
}

const plans = [
  {
    name: 'Bronze',
    procedures: [
      'Free routine checkups',
      'Free X-rays',
      'Free scalings — up to 3 per year',
    ],
    single: 'PKR 6,000',
    family: 'PKR 8,000',
    dark: false,
  },
  {
    name: 'Silver',
    procedures: [
      'Free routine checkups',
      'Free X-rays',
      'Free scalings — up to 3 per year',
      '80% off up to 10 fillings',
      '80% off up to 10 extractions',
    ],
    single: 'PKR 15,000',
    family: 'PKR 25,000',
    dark: true,
  },
]

export default function MembershipPage() {
  return (
    <BookingProvider>
      <main className="overflow-hidden">
        <Header />

        {/* Hero */}
        <section className="grain relative overflow-hidden border-b border-[#ebe4d9] bg-[#f7f2ea] px-5 py-20 text-center lg:px-8 lg:py-28">
          <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[#e8d5b8]/50 blur-3xl" aria-hidden="true" />
          <div className="relative mx-auto max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[.24em] text-[#b58a48]">Dr. Sahil&apos;s Dental Care</p>
            <h1 className="serif mt-4 text-[2.4rem] leading-tight sm:text-5xl lg:text-6xl">
              Dental Membership Bundles
            </h1>
            <p className="mt-4 text-base leading-7 text-[#666b65] sm:text-[17px]">
              Affordable dental care options for individuals and families — valid for one year.
            </p>
          </div>
        </section>

        {/* Plans */}
        <section className="px-5 py-16 lg:px-8 lg:py-24">
          <div className="mx-auto grid max-w-4xl gap-6 lg:grid-cols-2">
            {plans.map((plan) => (
              <article
                key={plan.name}
                className={`relative overflow-hidden rounded-[28px] border p-7 shadow-lg sm:p-9 ${
                  plan.dark
                    ? 'border-[#2d302d] bg-[#2a2c29] text-white'
                    : 'border-[#dac39f] bg-[#fffdf9] text-[#2a2c29]'
                }`}
              >
                {plan.dark && (
                  <div className="absolute right-0 top-0 rounded-bl-2xl bg-[#c9a66f] px-4 py-2 text-[10px] font-bold uppercase tracking-[.16em] text-[#292b28]">
                    Enhanced care
                  </div>
                )}

                <p className={`text-xs font-bold uppercase tracking-[.24em] ${plan.dark ? 'text-[#e2c184]' : 'text-[#a77d41]'}`}>
                  {plan.name}
                </p>
                <h2 className="serif mt-2 text-3xl sm:text-4xl">{plan.name} Membership</h2>

                <div className={`my-6 h-px ${plan.dark ? 'bg-white/15' : 'bg-[#eadfcd]'}`} />

                <p className={`text-xs font-bold uppercase tracking-[.18em] ${plan.dark ? 'text-[#e2c184]' : 'text-[#9f793f]'}`}>
                  What&apos;s included
                </p>
                <ul className="mt-4 grid gap-3 text-sm leading-6">
                  {plan.procedures.map((procedure) => (
                    <li key={procedure} className="flex items-start gap-3">
                      <span className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full ${plan.dark ? 'bg-[#c9a66f] text-[#252724]' : 'bg-[#f5e9d8] text-[#9d7438]'}`} aria-hidden="true">
                        <Icon name="check" className="h-3 w-3" />
                      </span>
                      {procedure}
                    </li>
                  ))}
                </ul>

                <div className={`my-7 h-px ${plan.dark ? 'bg-white/15' : 'bg-[#eadfcd]'}`} />

                <div className="grid gap-3 sm:grid-cols-2">
                  <div className={`rounded-2xl p-4 ${plan.dark ? 'bg-white/10' : 'bg-[#f7f0e5]'}`}>
                    <p className={`text-[10px] font-bold uppercase tracking-[.15em] ${plan.dark ? 'text-[#e2c184]' : 'text-[#9f793f]'}`}>
                      Single Package
                    </p>
                    <p className={`mt-1 text-xs ${plan.dark ? 'text-[#b8bbb5]' : 'text-[#888c87]'}`}>1 person · 1 year</p>
                    <p className="serif mt-2 text-2xl">{plan.single}</p>
                  </div>
                  <div className={`rounded-2xl p-4 ${plan.dark ? 'bg-white/10' : 'bg-[#f7f0e5]'}`}>
                    <p className={`text-[10px] font-bold uppercase tracking-[.15em] ${plan.dark ? 'text-[#e2c184]' : 'text-[#9f793f]'}`}>
                      Family Package
                    </p>
                    <p className={`mt-1 text-xs ${plan.dark ? 'text-[#b8bbb5]' : 'text-[#888c87]'}`}>5 persons · 1 year</p>
                    <p className="serif mt-2 text-2xl">{plan.family}</p>
                  </div>
                </div>

                <a
                  href="/#book"
                  className={`mt-7 block w-full rounded-full py-3 text-center text-sm font-semibold transition ${
                    plan.dark
                      ? 'bg-[#b58a48] text-white hover:bg-[#a07840]'
                      : 'bg-[#2a2c29] text-white hover:bg-[#b58a48]'
                  }`}
                >
                  Book this membership
                </a>
              </article>
            ))}
          </div>

          <p className="mx-auto mt-8 max-w-4xl rounded-2xl border border-[#e7dccb] bg-[#f9f5ed] px-6 py-4 text-center text-sm leading-6 text-[#666b65]">
            <strong className="text-[#343632]">Please note:</strong> Membership terms should be confirmed directly with the clinic.
          </p>
        </section>

        {/* CTA */}
        <section className="bg-[#eee1cc] px-5 py-16 text-center lg:px-8">
          <div className="mx-auto max-w-xl">
            <p className="text-xs font-bold uppercase tracking-[.2em] text-[#98753f]">Need help choosing?</p>
            <h2 className="serif mt-3 text-[2rem] sm:text-4xl">Talk to our friendly team.</h2>
            <p className="mt-4 text-base leading-7 text-[#5f615d]">
              We&apos;re happy to help you find the membership package that&apos;s right for you.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <a
                href="/#book"
                className="rounded-full bg-[#2a2c29] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#b58a48]"
              >
                Book a membership
              </a>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#c29e68] bg-white px-6 py-3 text-sm font-semibold text-[#806340] transition hover:bg-[#f7f2ea]"
              >
                <Icon name="whatsapp" className="h-4 w-4" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </section>

        <Footer />
        <MobileBar />
      </main>
    </BookingProvider>
  )
}
