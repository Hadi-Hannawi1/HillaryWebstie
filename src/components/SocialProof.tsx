import { useEffect, useRef } from 'react'

const proofStats = [
  { number: '19,000+', label: 'Women follow her journey on Instagram' },
  { number: '97,500', label: 'Views on a single post about divorce' },
  { number: '48,900', label: 'Likes from women who felt seen' },
]

export default function SocialProof() {
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
    <section ref={sectionRef} className="bg-navy py-16 px-6 md:py-20 text-center">
      <div className="max-w-3xl mx-auto">
        <p className="fade-in text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-3">
          She's not an influencer. She's a mom.
        </p>
        <h2 className="fade-in text-white text-3xl md:text-4xl font-bold mb-2">
          But her words <em className="text-gold italic">reach</em> people
        </h2>
        <p className="fade-in text-white/60 text-base max-w-md mx-auto mb-10 leading-relaxed">
          No ad spend. No marketing team. Just honesty.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
          {proofStats.map((s, i) => (
            <div
              key={i}
              className="fade-in bg-white/[0.06] border border-gold/20 rounded-2xl p-6"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <span className="font-['Playfair_Display'] text-4xl font-bold text-gold block leading-none mb-2">
                {s.number}
              </span>
              <span className="text-white/65 text-sm leading-snug">{s.label}</span>
            </div>
          ))}
        </div>

        <p className="fade-in font-['Playfair_Display'] italic text-white/80 text-lg md:text-xl max-w-xl mx-auto mt-10 leading-relaxed">
          Built from <span className="text-gold">hundreds of real DMs</span> from women going through the same thing.
        </p>
      </div>
    </section>
  )
}
