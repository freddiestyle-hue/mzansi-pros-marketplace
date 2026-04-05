'use client'
import { useSearchParams } from 'next/navigation'
import { Suspense, useMemo } from 'react'
import Nav from '@/components/Nav'
import ProCard from '@/components/ProCard'
import prosData from '@/data/pros.json'

function SearchResults() {
  const params = useSearchParams()
  const trade = params.get('trade') || ''
  const area = params.get('area') || ''

  const results = useMemo(() => {
    return prosData.filter(pro => {
      const matchTrade = !trade || pro.trade.toLowerCase().includes(trade.toLowerCase()) || pro.business_name.toLowerCase().includes(trade.toLowerCase())
      const matchArea = !area || pro.location_area.toLowerCase().includes(area.toLowerCase())
      return matchTrade && matchArea
    })
  }, [trade, area])

  return (
    <>
      <Nav />
      <main style={{ maxWidth: '720px', margin: '0 auto', padding: '2rem 1.25rem' }}>
        <div style={{ marginBottom: '1.5rem' }}>
          <h1 style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>
            {trade ? trade : 'All tradespeople'}
            {area ? ` in ${area}` : ''}
          </h1>
          <p style={{ color: '#777', fontSize: '0.9rem' }}>{results.length} pro{results.length !== 1 ? 's' : ''} found</p>
        </div>

        {results.length === 0 ? (
          <div style={{
            textAlign: 'center', padding: '4rem 2rem',
            background: '#fff', border: '1.5px solid var(--sand)', borderRadius: '16px'
          }}>
            <h2 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>No pros found yet</h2>
            <p style={{ color: '#777', marginBottom: '1.5rem' }}>
              We're growing fast. If you're a {trade || 'tradesperson'} in {area || 'this area'}, get listed today.
            </p>
            <a
              href="https://wa.me/27000000000?text=Hi%2C+I%27d+like+to+get+my+website+on+Mzansi+Pros"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                background: 'var(--orange)', color: '#fff',
                fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700,
                padding: '0.75rem 1.5rem', borderRadius: '10px'
              }}
            >
              Get listed - R589
            </a>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1rem' }}>
            {results.map(pro => <ProCard key={pro.slug} pro={pro} />)}
          </div>
        )}
      </main>
    </>
  )
}

export default function SearchPage() {
  return (
    <Suspense>
      <SearchResults />
    </Suspense>
  )
}
