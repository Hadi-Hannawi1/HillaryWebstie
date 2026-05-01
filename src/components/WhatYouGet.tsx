import { useEffect, useRef } from 'react'

const WHOP_URL = 'https://whop.com/checkout/plan_efPGbfIeM4OCg'

const items = [
  { name: 'Section 1: Surviving the Storm', price: '$19' },
  { name: 'Section 2: Navigating the Fog', price: '$19' },
  { name: 'Section 3: The Rebuild', price: '$19' },
  { name: 'Section 4: Faith Through It', price: '$19' },
  { name: 'Section 5: Letters to Yourself', price: '$19' },
  { name: 'Journal prompts, prayers & checklists', price: '$37' },
  { name: 'Printable affirmation cards', price: '$9' },
  { name: 'Phone wallpaper cards', price: '$9' },
  { name: 'Resource page (hotlines, apps, books)', price: '$15' },
]

export default function WhatYouGet() {
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
      <div className="max-w-2xl mx-auto">
        <p className="fade-in text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-3">
          The value breakdown
        </p>
        <h2 className="fade-in text-navy text-3xl md:text-4xl font-bold mb-2">
          What you <em className="text-gold italic">get</em>
        </h2>
        <div className="fade-in w-14 h-0.5 bg-gold mx-auto my-5 rounded-full" />

        <div className="fade-in bg-white rounded-2xl overflow-hidden shadow-[0_4px_30px_rgba(44,49,66,0.08)] mt-8 max-w-xl mx-auto">
          <div className="bg-navy p-5 text-center">
            <p className="text-gold-light text-xs font-semibold tracking-[0.18em] uppercase mb-1">
              Everything included
            </p>
            <p className="font-['Playfair_Display'] text-white text-xl">
              Through It &amp; Through It
            </p>
          </div>

          <div>
            {items.map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-between px-5 py-3.5 border-b border-[#f3ede7] last:border-b-0"
              >
                <div className="flex items-center gap-3 text-left">
                  <span className="w-2 h-2 rounded-full bg-gold shrink-0" />
                  <span className="text-navy text-sm">{item.name}</span>
                </div>
                <span className="text-text-light text-sm line-through whitespace-nowrap">
                  {item.price}
                </span>
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center px-5 py-3.5 bg-[#f9f4ef]">
            <span className="text-text-light text-xs font-semibold tracking-[0.08em] uppercase">
              Total value
            </span>
            <span className="font-['Playfair_Display'] text-text-light text-xl line-through">
              $165
            </span>
          </div>

          <div className="bg-navy py-7 px-5 text-center">
            <span className="font-['Playfair_Display'] text-gold text-5xl font-bold block leading-none mb-1">
              $27
            </span>
            <span className="text-white/45 text-xs tracking-[0.08em] uppercase block mb-5">
              Launch price — increases after Day 14
            </span>
            <a
              href={WHOP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-navy font-semibold text-base tracking-wider uppercase px-10 py-4 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:bg-blush hover:-translate-y-0.5 transition-all duration-200"
            >
              Get the Guide
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
