import Link from 'next/link'
import Nav from '@/components/Nav'

export default function NotFound() {
  return (
    <>
      <Nav />
      <main style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem 1.25rem' }}>
        <div style={{ textAlign: 'center', maxWidth: '480px' }}>
          <div style={{
            fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700,
            fontSize: '6rem', lineHeight: 1, color: 'var(--sand)', marginBottom: '1rem'
          }}>404</div>
          <h1 style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>This page does not exist</h1>
          <p style={{ color: '#666', marginBottom: '2rem', fontSize: '0.95rem' }}>
            The pro you are looking for may not be listed yet.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              href="/"
              style={{
                background: 'var(--green)', color: '#fff',
                fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700,
                padding: '0.75rem 1.5rem', borderRadius: '10px', fontSize: '0.95rem'
              }}
            >
              Back to home
            </Link>
            <a
              href="https://wa.me/27000000000?text=Hi%2C+I%27d+like+to+get+listed+on+Mzansi+Pros"
              style={{
                background: 'var(--orange)', color: '#fff',
                fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700,
                padding: '0.75rem 1.5rem', borderRadius: '10px', fontSize: '0.95rem'
              }}
            >
              Get listed - R589
            </a>
          </div>
        </div>
      </main>
    </>
  )
}
