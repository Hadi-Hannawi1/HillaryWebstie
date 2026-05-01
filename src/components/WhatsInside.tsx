import { useEffect, useRef } from 'react'

const sections = [
  { num: '01', title: 'Surviving the Storm', desc: 'The first days and weeks. Checklists, a kids-talk guide, weekly planner, prayers, and journal prompts to get you through the chaos.' },
  { num: '02', title: 'Navigating the Fog', desc: 'When the shock fades and the identity crisis hits. Reclaiming exercises, grief processing, self-care checklists, and raw honest prayers.' },
  { num: '03', title: 'The Rebuild', desc: 'Non-negotiables, new routines, co-parenting strategies, a simple budget template, and the mindset shift from surviving to building.' },
  { num: '04', title: 'Faith Through It', desc: 'For the moments you are mad at God. Scriptures with real reflections, emergency prayers, and a letter page for the conversation you need to have with Him.' },
  { num: '05', title: 'Letters to Yourself', desc: 'Three guided letter templates: to your past self, your present self, and your future self. Plus a promises page you will come back to.' },
]

const bonuses = [
  'Phone wallpaper cards',
  'Printable affirmation cards',
  'Resource page with hotlines, apps & book recs',
]

export default function WhatsInside() {
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
    <section ref={sectionRef} className="bg-cream py-16 px-6 md:py-20 text-center">
      <div className="max-w-3xl mx-auto">
        <p className="fade-in text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-3">
          45 pages of real talk
        </p>
        <h2 className="fade-in text-navy text-3xl md:text-4xl font-bold mb-2">
          What's <em className="text-gold italic">inside</em>
        </h2>
        <div className="fade-in w-14 h-0.5 bg-gold mx-auto my-5 rounded-full" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 text-left">
          {sections.map((s, i) => (
            <div
              key={i}
              className="fade-in bg-white rounded-2xl p-5 pl-6 border-l-[3px] border-gold shadow-[0_2px_16px_rgba(44,49,66,0.05)] flex gap-4 items-start"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <span className="font-['Playfair_Display'] text-3xl font-bold text-gold-light leading-none shrink-0 w-9 text-center mt-0.5">
                {s.num}
              </span>
              <div>
                <h3 className="font-['Playfair_Display'] text-lg text-navy mb-1">{s.title}</h3>
                <p className="text-text-light text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="fade-in mt-6 bg-gradient-to-br from-[#fdf8f0] to-[#faf4ec] border border-gold-light rounded-2xl p-6 text-center">
          <p className="text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-2">
            Included free
          </p>
          <h3 className="font-['Playfair_Display'] text-xl text-navy mb-4">Bonus Bundle</h3>
          <div className="flex flex-wrap gap-2 justify-center">
            {bonuses.map((b, i) => (
              <span key={i} className="bg-blush text-navy text-sm font-medium px-4 py-1.5 rounded-full">
                {b}
              </span>
            ))}
          </div>
        </div>

        <p className="fade-in text-text-light text-sm italic mt-6">
          45 pages. Print it, screenshot it, journal in it. It's yours.
        </p>
      </div>
    </section>
  )
}
