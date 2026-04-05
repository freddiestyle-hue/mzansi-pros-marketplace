import Nav from '@/components/Nav'

export default function Pricing() {
  return (
    <>
      <Nav />
      <main style={{ maxWidth: '560px', margin: '0 auto', padding: '3rem 1.25rem' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Pricing</h1>
        <p style={{ color: '#666', marginBottom: '2.5rem' }}>Simple. No surprises.</p>

        <div style={{
          background: 'var(--green)', borderRadius: '20px', padding: '2.5rem',
          textAlign: 'center', marginBottom: '2rem'
        }}>
          <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Once-off payment</p>
          <div style={{ color: 'var(--orange)', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: '3.5rem', lineHeight: 1, marginBottom: '0.5rem' }}>R589</div>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>No monthly fees. No contracts. Ever.</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2.5rem' }}>
          {[
            'Professional website with your name, trade, and area',
            'Up to 5 services listed with prices',
            'Photo gallery of your work',
            'Live within 48 hours',
            'WhatsApp and call buttons for customers',
            'Listed on Mzansi Pros directory',
            'Your own shareable URL',
            'Updates available on request',
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--orange)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              <span style={{ fontSize: '0.95rem', color: 'var(--charcoal)' }}>{item}</span>
            </div>
          ))}
        </div>

        <a
          href="https://wa.me/27000000000?text=Hi%2C+I%27d+like+to+get+my+website+on+Mzansi+Pros"
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
            background: 'var(--orange)', color: '#fff',
            fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: '1.05rem',
            padding: '1rem', borderRadius: '12px', marginBottom: '1rem'
          }}
        >
          Get started over WhatsApp
        </a>
        <p style={{ textAlign: 'center', color: '#888', fontSize: '0.85rem' }}>
          If you can WhatsApp, you can work with us.
        </p>
      </main>
    </>
  )
}
