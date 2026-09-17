const services = [
  { title: 'Dental Checkups', desc: 'Thoughtful routine examinations to support your ongoing oral health and catch issues early.' },
  { title: 'Teeth Cleaning & Scaling', desc: 'Professional cleaning focused on a fresh, well-cared-for smile and healthy gums.' },
  { title: 'Dental Fillings', desc: 'Careful restorative treatment using tooth-coloured materials for a natural finish.' },
  { title: 'Root Canal Treatment', desc: 'Precise, comfortable treatment planned with your wellbeing and long-term health in mind.' },
  { title: 'Dental Crowns & Bridges', desc: 'Custom restorative options designed around your individual needs and aesthetic goals.' },
  { title: 'Tooth Extraction', desc: 'Clear guidance and considerate care when an extraction is the right path forward.' },
  { title: 'Teeth Whitening', desc: 'Safe, effective whitening treatments to brighten your smile by several shades.' },
  { title: 'Orthodontic Consultation', desc: 'Expert guidance on braces and aligners to help you achieve a straighter, healthier smile.' },
  { title: 'Dental Implants', desc: 'Permanent, natural-looking tooth replacement solutions that restore function and confidence.' },
]

export function Services() {
  return (
    <section id="services" className="bg-[#2a2c29] px-5 py-20 text-white lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">

        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[.2em] text-[#d8b47c]">Our services</p>
            <h2 className="serif text-[2rem] sm:text-4xl lg:text-5xl">Everything your smile needs.</h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-[#b8bbb5]">
            Care tailored to your goals, delivered with precision and a reassuringly gentle touch.
          </p>
        </div>

        <div className="mt-10 grid gap-px overflow-hidden rounded-2xl bg-[#3e4039] sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, desc }, i) => (
            <article key={title} className="group flex flex-col bg-[#2a2c29] p-6 transition hover:bg-[#323530] sm:p-7">
              <span className="serif text-xl text-[#cba873]">0{i + 1}</span>
              <h3 className="mt-6 text-base font-semibold leading-snug">{title}</h3>
              <p className="mt-2.5 flex-1 text-sm leading-6 text-[#b8bbb5]">{desc}</p>
              <a
                href="#book"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-[#d8b47c] transition hover:text-[#e8c98c]"
                aria-label={`Book appointment for ${title}`}
              >
                Book this service
                <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href="#book"
            className="inline-flex items-center gap-2 rounded-full border border-[#d8b47c] px-6 py-3 text-sm font-semibold text-[#d8b47c] transition hover:bg-[#d8b47c] hover:text-[#2a2c29]"
          >
            Book any service →
          </a>
        </div>

      </div>
    </section>
  )
}
