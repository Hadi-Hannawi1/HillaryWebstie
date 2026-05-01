import { useEffect, useRef } from 'react'

const WHOP_URL = 'https://whop.com/checkout/plan_efPGbfIeM4OCg'

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
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
      className="relative bg-navy text-center overflow-hidden py-16 px-6 md:py-20 lg:py-24"
    >
      <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-[radial-gradient(circle,rgba(201,169,97,0.08)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute -bottom-16 -right-16 w-72 h-72 rounded-full bg-[radial-gradient(circle,rgba(245,230,224,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto">
        <p className="fade-in text-gold text-xs font-medium tracking-[0.2em] uppercase mb-5">
          A digital guide for single moms
        </p>

        <h1 className="fade-in text-white text-5xl md:text-6xl lg:text-7xl font-bold leading-none mb-1">
          Through It<br />
          <span className="text-gold italic">&amp;</span><br />
          Through It
        </h1>

        <p className="fade-in text-white/65 text-sm md:text-base tracking-[0.12em] uppercase mt-4 mb-6">
          A Single Mom's Guide to Surviving Divorce and Rebuilding After
        </p>

        <p className="fade-in font-['Playfair_Display'] italic text-white/80 text-lg md:text-xl max-w-lg mx-auto mb-10 leading-relaxed">
          "The guide I wish someone had handed me on the worst night of my life."
        </p>

        <img
          src="/images/cover.png"
          alt="Through It and Through It guide cover"
          className="fade-in w-full max-w-md mx-auto mb-10 rounded-xl shadow-[0_24px_60px_rgba(0,0,0,0.4)]"
        />

        <div className="fade-in mb-6">
          <span className="font-['Playfair_Display'] text-gold text-4xl font-bold block leading-none">
            $27
          </span>
          <span className="text-white/45 text-xs tracking-[0.1em] uppercase mt-1 block">
            Launch price — increases after Day 14
          </span>
        </div>

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

        <p className="fade-in text-white/45 text-sm tracking-wide">
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
