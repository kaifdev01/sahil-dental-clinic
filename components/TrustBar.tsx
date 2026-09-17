import { Icon } from './ui'
import { GOOGLE_REVIEWS } from './constants'

export function TrustBar() {
  return (
    <section className="border-b border-[#ebe4d9] bg-white px-5 py-8 lg:px-8" aria-label="Patient trust signals">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 sm:flex-row">

        <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-start">
          <div className="flex gap-0.5" aria-label="5 stars">
            {[...Array(5)].map((_, i) => (
              <Icon key={i} name="star" className="h-4 w-4 fill-[#f5a623] stroke-[#f5a623]" />
            ))}
          </div>
          <p className="text-sm text-[#5d615c]">
            <strong className="text-[#272a28]">4.9 / 5</strong>
            <span className="mx-1.5 text-[#c8cac5]">·</span>
            111 Google Reviews
          </p>
        </div>

        <a
          href={GOOGLE_REVIEWS}
          target="_blank"
          rel="noreferrer"
          className="inline-flex shrink-0 items-center gap-2 rounded-full border border-[#d9c5a5] px-5 py-2.5 text-sm font-semibold text-[#806340] transition hover:bg-[#f7f2ea]"
        >
          View on Google
          <Icon name="arrow" className="h-4 w-4" />
        </a>

      </div>
    </section>
  )
}
