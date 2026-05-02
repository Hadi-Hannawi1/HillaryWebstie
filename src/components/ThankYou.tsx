const PDF_URL = '/downloads/through-it-and-through-it.pdf'

export default function ThankYou() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #faf6f1 0%, #f5e6e0 50%, #faf6f1 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      fontFamily: "'DM Sans', sans-serif",
    }}>
      <div style={{
        maxWidth: '560px',
        width: '100%',
        textAlign: 'center',
        background: '#fff',
        borderRadius: '24px',
        padding: '3rem 2.5rem',
        boxShadow: '0 8px 32px rgba(44, 49, 66, 0.08)',
      }}>
        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🤍</div>

        <h1 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: '2rem',
          color: '#2c3142',
          marginBottom: '0.75rem',
          lineHeight: 1.3,
        }}>
          Thank You for Your Purchase
        </h1>

        <p style={{
          color: '#6b7280',
          fontSize: '1.1rem',
          lineHeight: 1.7,
          marginBottom: '0.5rem',
        }}>
          Your copy of <strong style={{ color: '#2c3142' }}>Through It & Through It</strong> is ready.
        </p>

        <p style={{
          color: '#9ca3af',
          fontSize: '0.95rem',
          lineHeight: 1.6,
          marginBottom: '2rem',
        }}>
          Click the button below to download your guide. Save it somewhere safe — this is your personal copy.
        </p>

        <a
          href={PDF_URL}
          download
          style={{
            display: 'inline-block',
            background: '#2c3142',
            color: '#fff',
            padding: '1rem 2.5rem',
            borderRadius: '80px',
            fontSize: '1.1rem',
            fontWeight: 600,
            textDecoration: 'none',
            transition: 'transform 0.2s, box-shadow 0.2s',
            boxShadow: '0 4px 16px rgba(44, 49, 66, 0.2)',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = 'translateY(-2px)'
            e.currentTarget.style.boxShadow = '0 6px 24px rgba(44, 49, 66, 0.3)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = '0 4px 16px rgba(44, 49, 66, 0.2)'
          }}
        >
          Download Your Guide
        </a>

        <div style={{
          marginTop: '2.5rem',
          padding: '1.5rem',
          background: '#faf6f1',
          borderRadius: '16px',
        }}>
          <p style={{
            color: '#6b7280',
            fontSize: '0.9rem',
            lineHeight: 1.6,
            margin: 0,
          }}>
            Questions or trouble downloading?<br />
            DM <a
              href="https://instagram.com/hillackermann"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#c9a961', fontWeight: 600, textDecoration: 'none' }}
            >@hillackermann</a> on Instagram — we've got you.
          </p>
        </div>

        <p style={{
          marginTop: '2rem',
          color: '#d1d5db',
          fontSize: '0.8rem',
        }}>
          Please do not share this link. This download is for your personal use only.
        </p>
      </div>
    </div>
  )
}
