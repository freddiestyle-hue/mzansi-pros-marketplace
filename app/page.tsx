'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import type { ReactElement } from 'react'
import Nav from '@/components/Nav'
import ProCard from '@/components/ProCard'
import pros from '@/data/pros.json'

const TRADES = ['Painter', 'Plumber', 'Electrician', 'Builder', 'Tiler', 'Welder', 'Cleaner', 'Gardener']

const TRADE_ICONS: Record<string, ReactElement> = {
  Painter: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 4v7m0 0c-1.657 0-3 1.343-3 3v6a1 1 0 001 1h4a1 1 0 001-1v-6c0-1.657-1.343-3-3-3zM3 3h11v3l-2 1v1H3V3zm0 5h11"/></svg>,
  Plumber: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22V12m0-10v4m-4 6H4a2 2 0 01-2-2V6a2 2 0 012-2h16a2 2 0 012 2v4a2 2 0 01-2 2h-4"/></svg>,
  Electrician: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
  Builder: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/></svg>,
  Tiler: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="8" height="8"/><rect x="13" y="3" width="8" height="8"/><rect x="3" y="13" width="8" height="8"/><rect x="13" y="13" width="8" height="8"/></svg>,
  Welder: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>,
  Cleaner: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
  Gardener: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22V12M12 12C12 6.477 7.523 2 2 2c0 5.523 4.477 10 10 10zM12 12c0-5.523 4.477-10 10-10 0 5.523-4.477 10-10 10z"/></svg>,
}

export default function Home() {
  const router = useRouter()
  const [trade, setTrade] = useState('')
  const [area, setArea] = useState('')

  function handleSearch(e: React.FormEvent) {
    e.preventDefault()
    router.push(`/search?trade=${encodeURIComponent(trade)}&area=${encodeURIComponent(area)}`)
  }

  function handleTradePill(t: string) {
    router.push(`/search?trade=${encodeURIComponent(t)}`)
  }

  return (
    <>
      <Nav />
      <main>
        {/* HERO */}
        <section style={{ background: 'var(--green)', padding: '4rem 1.25rem 3rem' }}>
          <div style={{ maxWidth: '680px', margin: '0 auto', textAlign: 'center' }}>
            <h1 style={{ color: '#fff', fontSize: 'clamp(2rem, 5vw, 3rem)', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, lineHeight: 1.1, marginBottom: '0.75rem' }}>
              Find trusted local tradespeople
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.1rem', marginBottom: '2rem' }}>
              Plumbers, painters, electricians and more - across South Africa
            </p>
            <form onSubmit={handleSearch} style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <input
                value={trade}
                onChange={e => setTrade(e.target.value)}
                placeholder="What do you need? (e.g. Painter)"
                style={{
                  flex: '1 1 200px', padding: '0.85rem 1rem', borderRadius: '10px',
                  border: 'none', fontSize: '1rem', fontFamily: 'DM Sans, sans-serif',
                  background: '#fff', color: 'var(--charcoal)'
                }}
              />
              <input
                value={area}
                onChange={e => setArea(e.target.value)}
                placeholder="Where? (e.g. Cape Town)"
                style={{
                  flex: '1 1 200px', padding: '0.85rem 1rem', borderRadius: '10px',
                  border: 'none', fontSize: '1rem', fontFamily: 'DM Sans, sans-serif',
                  background: '#fff', color: 'var(--charcoal)'
                }}
              />
              <button
                type="submit"
                style={{
                  background: 'var(--orange)', color: '#fff', border: 'none',
                  padding: '0.85rem 2rem', borderRadius: '10px', cursor: 'pointer',
                  fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: '1rem'
                }}
              >
                Search
              </button>
            </form>
          </div>
        </section>

        {/* TRADE PILLS */}
        <section style={{ background: 'var(--warm-white)', padding: '2rem 1.25rem' }}>
          <div style={{ maxWidth: '680px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '1.1rem', marginBottom: '1.25rem', color: 'var(--charcoal)' }}>Browse by trade</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              {TRADES.map(t => (
                <button
                  key={t}
                  onClick={() => handleTradePill(t)}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '0.5rem',
                    background: '#fff', border: '1.5px solid var(--sand)',
                    borderRadius: '10px', padding: '0.65rem 1rem', cursor: 'pointer',
                    fontFamily: 'DM Sans, sans-serif', fontWeight: 500, fontSize: '0.9rem',
                    color: 'var(--charcoal)'
                  }}
                >
                  {TRADE_ICONS[t]}
                  {t}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURED PROS */}
        <section style={{ background: 'var(--sand)', padding: '2.5rem 1.25rem' }}>
          <div style={{ maxWidth: '680px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '1.4rem', marginBottom: '1.5rem' }}>Featured pros</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1rem' }}>
              {pros.map(pro => <ProCard key={pro.slug} pro={pro} />)}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section style={{ background: 'var(--warm-white)', padding: '3rem 1.25rem' }}>
          <div style={{ maxWidth: '680px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>How it works</h2>
            <p style={{ color: '#666', marginBottom: '2.5rem' }}>Finding a pro takes less than 60 seconds</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.5rem' }}>
              {[
                { num: '1', title: 'Search', desc: 'Enter what you need and where you are' },
                { num: '2', title: 'Compare', desc: 'Browse real pros with real photos and reviews' },
                { num: '3', title: 'Book', desc: 'WhatsApp them directly - no middleman' },
              ].map(step => (
                <div key={step.num} style={{ textAlign: 'center' }}>
                  <div style={{
                    width: '48px', height: '48px', borderRadius: '50%',
                    background: 'var(--orange)', color: '#fff',
                    fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: '1.25rem',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 0.75rem'
                  }}>{step.num}</div>
                  <h3 style={{ fontSize: '1rem', marginBottom: '0.4rem' }}>{step.title}</h3>
                  <p style={{ fontSize: '0.88rem', color: '#666' }}>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TRADESPERSON CTA */}
        <section style={{ background: 'var(--green)', padding: '3.5rem 1.25rem', textAlign: 'center' }}>
          <div style={{ maxWidth: '500px', margin: '0 auto' }}>
            <h2 style={{ color: '#fff', fontSize: '1.75rem', marginBottom: '0.75rem' }}>Are you a tradesperson?</h2>
            <p style={{ color: 'rgba(255,255,255,0.75)', marginBottom: '2rem', fontSize: '1rem' }}>
              Get your own professional website in 48 hours. Five questions over WhatsApp. R589, once-off.
            </p>
            <a
              href="https://wa.me/27000000000?text=Hi%2C+I%27d+like+to+get+my+website+on+Mzansi+Pros"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                background: 'var(--orange)', color: '#fff',
                fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: '1.05rem',
                padding: '1rem 2rem', borderRadius: '12px',
                boxShadow: '0 4px 16px rgba(226,118,46,0.4)'
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Get your site - R589
            </a>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', marginTop: '1rem' }}>No monthly fees. No contracts. No jargon.</p>
          </div>
        </section>

        {/* FOOTER */}
        <footer style={{ background: 'var(--sand)', textAlign: 'center', padding: '1.5rem', fontSize: '0.8rem', color: 'var(--charcoal)' }}>
          <p>Mzansi Pros - Get found. R589. Done.</p>
        </footer>
      </main>
    </>
  )
}
