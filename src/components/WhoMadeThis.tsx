import { useEffect, useRef } from 'react'

const stats = [
  { number: '19K+', label: 'Followers' },
  { number: '16.62%', label: 'Engagement' },
  { number: '97.5K', label: 'Top Views' },
  { number: '48.9K', label: 'Top Likes' },
]

export default function WhoMadeThis() {
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
    <section ref={sectionRef} className="bg-blush py-16 px-6 md:py-20">
      <div className="max-w-2xl mx-auto text-center">
        <p className="fade-in text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-3">
          The person behind this
        </p>
        <h2 className="fade-in text-navy text-3xl md:text-4xl font-bold mb-2">
          Who <em className="text-gold italic">made</em> this?
        </h2>
        <div className="fade-in w-14 h-0.5 bg-gold mx-auto my-5 rounded-full" />

        <div className="fade-in w-20 h-20 rounded-full bg-gradient-to-br from-gold to-rose mx-auto mb-5 flex items-center justify-center">
          <span className="font-['Playfair_Display'] text-2xl font-bold text-white tracking-wide">HA</span>
        </div>

        <h3 className="fade-in font-['Playfair_Display'] text-2xl text-navy mb-1">Hillary Ackermann</h3>
        <a
          href="https://instagram.com/hillackermann"
          target="_blank"
          rel="noopener noreferrer"
          className="fade-in text-gold font-medium text-sm hover:text-[#b8943f] transition-colors block mb-6"
        >
          @hillackermann
        </a>

        <div className="fade-in relative bg-white rounded-2xl shadow-[0_2px_16px_rgba(44,49,66,0.06)] p-6 md:p-8 text-left mb-4">
          <span className="absolute -top-3 left-4 font-['Playfair_Display'] text-7xl text-gold-light leading-none pointer-events-none select-none">
            &ldquo;
          </span>
          <p className="text-navy text-base leading-[1.85] relative z-10">
            I'm not a therapist. I'm not a life coach. I'm not a guru with a ring light and a podcast.
            I'm a mom who went through a divorce and somehow made it to the other side — messy, honest,
            and still standing. I started sharing my story on Instagram because I was tired of pretending
            everything was fine. Turns out, thousands of other women were tired of pretending too. This guide
            isn't something I wrote from a textbook. It's what I wish someone had handed me on the worst
            night of my life. Every prompt, every prayer, every checklist in here came from something I
            actually lived through. If you're in the middle of it right now, I just want you to know — you're
            not crazy, you're not broken, and you're going to make it through this. I promise.
          </p>
        </div>
        <p className="fade-in font-['Playfair_Display'] italic text-text-light text-right text-sm">
          — Hillary
        </p>

        <div className="flex flex-wrap justify-center gap-3 mt-7">
          {stats.map((s, i) => (
            <div
              key={i}
              className="fade-in bg-white rounded-xl px-5 py-3.5 min-w-[110px] shadow-[0_2px_10px_rgba(44,49,66,0.06)] text-center"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <span className="font-['Playfair_Display'] text-xl font-bold text-gold block leading-none">
                {s.number}
              </span>
              <span className="text-text-light text-[0.7rem] uppercase tracking-[0.1em] font-medium">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
