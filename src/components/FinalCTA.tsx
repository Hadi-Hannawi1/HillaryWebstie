import { useEffect, useRef } from 'react'

const WHOP_URL = 'https://whop.com/checkout/plan_efPGbfIeM4OCg'

export default function FinalCTA() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.1 }
    )
    const els = sectionRef.current?.querySelectorAll('.fade-in')
    els?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative bg-navy text-center py-20 px-6 overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(201,169,97,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-lg mx-auto">
        <p className="fade-in text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-4">
          One last thing
        </p>
        <h2 className="fade-in text-white text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-3">
          You're going to make it<br /><em className="text-gold italic">through this.</em>
        </h2>
        <p className="fade-in text-white/60 text-base max-w-sm mx-auto mb-8">
          This guide won't fix everything. But it'll make you feel less alone while you figure it out.
        </p>

        <span className="fade-in font-['Playfair_Display'] text-gold text-5xl font-bold block leading-none mb-1">
          $27
        </span>
        <span className="fade-in text-white/35 text-xs tracking-[0.1em] uppercase block mb-8">
          Launch price — increases after Day 14
        </span>

        <div className="fade-in mb-8">
          <a
            href={WHOP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gold text-white font-semibold text-base tracking-wider uppercase px-10 py-4 rounded-full shadow-[0_4px_20px_rgba(201,169,97,0.35)] hover:bg-[#b8943f] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(201,169,97,0.45)] transition-all duration-200"
          >
            Get the Guide
          </a>
        </div>

        <p className="fade-in text-white/35 text-sm">
          By{' '}
          <a
            href="https://instagram.com/hillackermann"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold-light font-medium hover:text-gold transition-colors"
          >
            @hillackermann
          </a>
        </p>
      </div>
    </section>
  )
}
