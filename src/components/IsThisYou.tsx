import { useEffect, useRef } from 'react'

const items = [
  "You're lying awake at 2am wondering how you got here",
  "You feel like you're failing your kids even though you're doing everything",
  "You've Googled 'how to co-parent with someone you can't stand' more than once",
  "You miss who you were before the divorce",
  "You're tired of people telling you to 'stay strong' when you're barely holding it together",
  "You want to heal but you don't even know where to start",
  "You still believe God has a plan but honestly you're mad at Him right now",
  "You've cried in a parking lot and pretended everything was fine five minutes later",
]

export default function IsThisYou() {
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
    <section ref={sectionRef} className="bg-blush py-16 px-6 md:py-20 text-center">
      <div className="max-w-2xl mx-auto">
        <p className="fade-in text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-3">
          Be honest
        </p>
        <h2 className="fade-in text-navy text-3xl md:text-4xl font-bold mb-2">
          Is this <em className="text-gold italic">you</em>?
        </h2>
        <p className="fade-in text-text-light text-base max-w-md mx-auto mb-10 leading-relaxed">
          If even one of these hits, this guide was written for you.
        </p>

        <div className="grid gap-3 text-left max-w-xl mx-auto">
          {items.map((item, i) => (
            <div
              key={i}
              className="fade-in flex items-start gap-3 bg-white rounded-xl px-5 py-4 shadow-[0_2px_12px_rgba(44,49,66,0.06)]"
              style={{ transitionDelay: `${i * 0.07}s` }}
            >
              <span className="shrink-0 w-6 h-6 rounded-full bg-gold flex items-center justify-center mt-0.5">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <span className="text-navy text-sm md:text-base leading-snug">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
