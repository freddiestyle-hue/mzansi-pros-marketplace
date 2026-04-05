import Link from 'next/link'

type Pro = {
  slug: string
  business_name: string
  trade: string
  tagline: string
  location_area: string
  whatsapp: string
  hero_image_url: string
  top_rated: boolean
}

export default function ProCard({ pro }: { pro: Pro }) {
  return (
    <div style={{ background: '#fff', border: '1.5px solid var(--sand)', borderRadius: '16px', overflow: 'hidden' }}>
      <div style={{ position: 'relative', height: '180px' }}>
        <img
          src={pro.hero_image_url}
          alt={pro.business_name}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        {pro.top_rated && (
          <span style={{
            position: 'absolute', top: '10px', left: '10px',
            background: 'var(--green)', color: '#fff',
            fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '0.75rem',
            padding: '0.25rem 0.6rem', borderRadius: '20px'
          }}>
            Top Rated
          </span>
        )}
      </div>
      <div style={{ padding: '1rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.4rem' }}>
          <div>
            <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: '1rem', marginBottom: '0.1rem' }}>
              {pro.business_name}
            </h3>
            <span style={{ fontSize: '0.8rem', color: '#777' }}>{pro.trade}</span>
          </div>
          <div style={{ display: 'flex', gap: '2px' }}>
            {[...Array(5)].map((_, i) => (
              <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="var(--orange)">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            ))}
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', marginBottom: '1rem' }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
          </svg>
          <span style={{ fontSize: '0.82rem', color: '#777' }}>{pro.location_area}</span>
        </div>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <a
            href={`https://wa.me/${pro.whatsapp}?text=Hi%2C+I+found+you+on+Mzansi+Pros`}
            style={{
              flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem',
              background: 'var(--orange)', color: '#fff',
              fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '0.85rem',
              padding: '0.6rem', borderRadius: '8px'
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#fff">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            WhatsApp
          </a>
          <Link
            href={`/pro/${pro.slug}`}
            style={{
              flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center',
              border: '1.5px solid var(--sand)', color: 'var(--charcoal)',
              fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '0.85rem',
              padding: '0.6rem', borderRadius: '8px', textAlign: 'center'
            }}
          >
            View Profile
          </Link>
        </div>
      </div>
    </div>
  )
}
