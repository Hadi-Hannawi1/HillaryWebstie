export default function Footer() {
  return (
    <footer className="bg-[#20253a] py-5 px-6 text-center">
      <p className="text-white/25 text-xs leading-relaxed">
        Through It &amp; Through It &copy; {new Date().getFullYear()} &middot;{' '}
        <a
          href="https://instagram.com/hillackermann"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/35 hover:text-gold transition-colors"
        >
          @hillackermann
        </a>
      </p>
    </footer>
  )
}
