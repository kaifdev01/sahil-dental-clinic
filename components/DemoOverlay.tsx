'use client'

export function DemoOverlay() {
  return (
    <>
      {/* Diagonal tiled watermark — covers entire page, pointer-events off so site is fully usable */}
      <div
        aria-hidden="true"
        className="demo-watermark"
      />

      {/* Top banner */}
      <div className="demo-banner" aria-label="Demo preview notice">
        <span className="demo-banner-dot" />
        {/* Short version — mobile */}
        <span className="demo-banner-short">
          <strong>Demo</strong> · by{' '}
          <a href="mailto:contact.kaif018@gmail.com" className="demo-banner-link">Muhammad Kaif</a>
        </span>
        {/* Full version — desktop */}
        <span className="demo-banner-full">
          This is a <strong>demo preview</strong> — designed by{' '}
          <a href="mailto:contact.kaif018@gmail.com" className="demo-banner-link">
            Muhammad Kaif / SmartPixelsSolutions
          </a>
          . Not for use without a licence.
        </span>
      </div>

      {/* Bottom-right corner badge */}
      <div className="demo-badge" aria-hidden="true">
        DEMO
      </div>
    </>
  )
}
