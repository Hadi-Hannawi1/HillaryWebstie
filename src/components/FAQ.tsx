import { useState, useEffect, useRef } from 'react'

const faqs = [
  {
    q: 'Is this a physical book?',
    a: 'No. It is a 45-page digital PDF guide. You can read it on your phone, tablet, or computer, or print it at home. It is yours to keep forever.',
  },
  {
    q: "I'm not religious. Is this still for me?",
    a: 'Yes. The faith section is one part of five. The rest of the guide is practical and emotional. If faith is not your thing, you can skip that section and still get massive value from everything else.',
  },
  {
    q: "What if I'm not divorced yet but going through it?",
    a: 'This guide was designed for every stage: before, during, and after. If you are in the middle of it right now, Section 1 was written specifically for you.',
  },
  {
    q: 'Can I share this with a friend?',
    a: 'Please do not share the PDF directly. But you can absolutely send them the link to this page so they can grab their own copy.',
  },
  {
    q: 'Is there a refund policy?',
    a: 'Due to the digital nature of the product, all sales are final. But if you read it and genuinely feel it did not help, reach out and we will make it right.',
  },
  {
    q: 'Will the price go up?',
    a: 'Yes. The $27 launch price is only available during the first 14 days. After that, it increases to $37.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
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
          Questions
        </p>
        <h2 className="fade-in text-navy text-3xl md:text-4xl font-bold mb-8">
          Frequently <em className="text-gold italic">asked</em>
        </h2>

        <div className="fade-in text-left max-w-xl mx-auto">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-[#ecddd5] first:border-t">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex justify-between items-center py-4 px-1 text-left group cursor-pointer"
              >
                <span className="text-navy font-semibold text-sm md:text-base group-hover:text-gold transition-colors pr-4">
                  {faq.q}
                </span>
                <span
                  className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                    openIndex === i ? 'bg-gold rotate-45' : 'bg-blush'
                  }`}
                >
                  <svg
                    width="11"
                    height="11"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={openIndex === i ? 'white' : '#2c3142'}
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? 'max-h-60 pb-4' : 'max-h-0'
                }`}
              >
                <p className="text-text-light text-sm leading-relaxed px-1">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
