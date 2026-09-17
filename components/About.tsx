import { Icon } from './ui'

const highlights = [
  'Unhurried, attentive visits',
  'Clear treatment guidance',
  'Modern dental technology',
  'A calm, welcoming environment',
  'Gentle care for anxious patients',
  'Transparent pricing, no surprises',
]

export function About() {
  return (
    <section id="about" className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[.9fr_1.1fr] lg:gap-16 lg:px-8 lg:py-28">

      {/* Image column */}
      <div className="relative">
        <div className="overflow-hidden rounded-3xl">
          <img
            className="aspect-[4/3] w-full object-cover lg:aspect-auto lg:h-[460px]"
            alt="Modern dental treatment room at Dr. Sahil's Dental Care, Lahore"
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=900&q=80"
            width={900}
            height={460}
            loading="lazy"
          />
        </div>
        <div className="ring-gold absolute -bottom-5 -right-2 rounded-full bg-[#b58a48] p-6 text-center text-white sm:-bottom-7 sm:-right-3 sm:p-7">
          <span className="serif block text-2xl sm:text-3xl">4.9</span>
          <span className="block text-[9px] uppercase tracking-wider">Google</span>
        </div>
      </div>

      {/* Text column */}
      <div className="lg:pl-6">
        <p className="mb-4 text-xs font-bold uppercase tracking-[.2em] text-[#b58a48]">
          Welcome to our practice
        </p>
        <h2 className="serif max-w-xl text-[2rem] leading-tight sm:text-4xl lg:text-5xl">
          Dentistry that feels genuinely different.
        </h2>
        <p className="mt-5 max-w-xl text-base leading-7 text-[#666b65]">
          At Dr. Sahil&apos;s Dental Care, we pair clinical precision with a softer, more reassuring kind of care.
          From routine check-ups to complete smile transformations, you&apos;ll always know you&apos;re in good hands.
          Our clinic in Sabzazar, Lahore is designed to feel welcoming — not clinical.
        </p>

        <ul className="mt-7 grid gap-3 sm:grid-cols-2">
          {highlights.map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm font-medium text-[#3a3d39]">
              <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#f4eadc] text-[#a87839]" aria-hidden="true">
                <Icon name="check" className="h-3 w-3" />
              </span>
              {item}
            </li>
          ))}
        </ul>

        <a
          href="#services"
          className="mt-8 inline-flex items-center gap-2 border-b border-[#b58a48] pb-0.5 text-sm font-semibold text-[#806340] transition hover:text-[#b58a48]"
        >
          Discover our services
          <Icon name="arrow" className="h-3.5 w-3.5" />
        </a>
      </div>

    </section>
  )
}
