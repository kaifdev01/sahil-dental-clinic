'use client'

import { useEffect, useState } from 'react'

export function Preloader() {
  const [phase, setPhase] = useState<'hold' | 'open' | 'done'>('hold')

  useEffect(() => {
    // Hold with logo visible, then open the doors
    const t1 = setTimeout(() => setPhase('open'), 1200)
    // Remove from DOM after animation completes
    const t2 = setTimeout(() => setPhase('done'), 2400)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  if (phase === 'done') return null

  return (
    <div
      aria-hidden="true"
      className="preloader-root"
    >
      {/* Left door */}
      <div className={`preloader-panel preloader-left ${phase === 'open' ? 'preloader-left--open' : ''}`} />

      {/* Right door */}
      <div className={`preloader-panel preloader-right ${phase === 'open' ? 'preloader-right--open' : ''}`} />

      {/* Center logo — fades out as doors open */}
      <div className={`preloader-logo ${phase === 'open' ? 'preloader-logo--hide' : ''}`}>
        <span className="preloader-logo-circle">S</span>
        <span className="preloader-logo-text">
          <strong>Dr. Sahil&apos;s</strong>
          <span>Dental Care</span>
        </span>
      </div>
    </div>
  )
}
