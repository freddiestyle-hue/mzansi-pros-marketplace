import Nav from '@/components/Nav'

export default function HowItWorks() {
  return (
    <>
      <Nav />
      <main style={{ maxWidth: '640px', margin: '0 auto', padding: '3rem 1.25rem' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>How it works</h1>
        <p style={{ color: '#666', marginBottom: '3rem' }}>For customers and tradespeople</p>

        <h2 style={{ fontSize: '1.2rem', color: 'var(--green)', marginBottom: '1.5rem' }}>For customers</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }}>
          {[
            { num: '1', title: 'Search', desc: 'Enter what you need and where you are. We show you real local pros.' },
            { num: '2', title: 'Compare', desc: 'Browse profiles with real photos of their work, prices, and customer reviews.' },
            { num: '3', title: 'Book', desc: 'WhatsApp or call them directly. No commission. No booking fees. Just direct contact.' },
          ].map(step => (
            <div key={step.num} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <div style={{
                width: '40px', height: '40px', flexShrink: 0, borderRadius: '50%',
                background: 'var(--orange)', color: '#fff',
                fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700,
                display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}>{step.num}</div>
              <div>
                <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, marginBottom: '0.25rem' }}>{step.title}</h3>
                <p style={{ color: '#555', fontSize: '0.95rem' }}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: '1.2rem', color: 'var(--green)', marginBottom: '1.5rem' }}>For tradespeople</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }}>
          {[
            { num: '1', title: 'WhatsApp us', desc: 'Message our number. We ask you 5 simple questions - name, trade, area, number, one photo.' },
            { num: '2', title: 'We build your site', desc: 'Within 48 hours you get a professional website with your details, services, and photos.' },
            { num: '3', title: 'Get found', desc: 'Your site goes live and your profile appears on Mzansi Pros. Customers in your area can find you.' },
          ].map(step => (
            <div key={step.num} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <div style={{
                width: '40px', height: '40px', flexShrink: 0, borderRadius: '50%',
                background: 'var(--green)', color: '#fff',
                fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700,
                display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}>{step.num}</div>
              <div>
                <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, marginBottom: '0.25rem' }}>{step.title}</h3>
                <p style={{ color: '#555', fontSize: '0.95rem' }}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <a
          href="https://wa.me/27000000000?text=Hi%2C+I%27d+like+to+get+my+website+on+Mzansi+Pros"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            background: 'var(--orange)', color: '#fff',
            fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700,
            padding: '1rem 2rem', borderRadius: '12px'
          }}
        >
          Get started - R589
        </a>
      </main>
    </>
  )
}
