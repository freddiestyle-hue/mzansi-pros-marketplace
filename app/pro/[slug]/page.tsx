import { notFound } from 'next/navigation'
import Nav from '@/components/Nav'
import prosData from '@/data/pros.json'

export function generateStaticParams() {
  return prosData.map(pro => ({ slug: pro.slug }))
}

export default function ProPage({ params }: { params: { slug: string } }) {
  const pro = prosData.find(p => p.slug === params.slug)
  if (!pro) notFound()

  return (
    <>
      <Nav />
      <main>
        {/* HERO */}
        <div style={{ position: 'relative', height: '60vw', maxHeight: '400px', overflow: 'hidden' }}>
          <img src={pro.hero_image_url} alt={pro.business_name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(27,67,50,0.9) 0%, transparent 60%)' }} />
          <div style={{ position: 'absolute', bottom: '1.5rem', left: '1.25rem', color: '#fff' }}>
            {pro.top_rated && (
              <span style={{ background: 'var(--orange)', color: '#fff', fontWeight: 700, fontSize: '0.75rem', padding: '0.25rem 0.6rem', borderRadius: '20px', marginBottom: '0.5rem', display: 'inline-block' }}>
                Top Rated
              </span>
            )}
            <h1 style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: 'clamp(1.5rem, 4vw, 2rem)', lineHeight: 1.1 }}>{pro.business_name}</h1>
            <p style={{ opacity: 0.85, marginTop: '0.25rem' }}>{pro.tagline}</p>
          </div>
        </div>

        <div style={{ maxWidth: '680px', margin: '0 auto', padding: '1.5rem 1.25rem' }}>
          {/* STARS + LOCATION */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', gap: '3px' }}>
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="var(--orange)">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              ))}
            </div>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: '#666', fontSize: '0.9rem' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
              </svg>
              {pro.location_area}
            </span>
            <span style={{ color: '#666', fontSize: '0.9rem' }}>{pro.operating_hours}</span>
          </div>

          {/* CTA BUTTONS */}
          <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
            <a
              href={`https://wa.me/${pro.whatsapp}?text=Hi%2C+I+found+you+on+Mzansi+Pros`}
              style={{
                flex: '1 1 140px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                background: 'var(--orange)', color: '#fff',
                fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: '1rem',
                padding: '0.9rem', borderRadius: '10px'
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              WhatsApp
            </a>
            <a
              href={`tel:${pro.phone}`}
              style={{
                flex: '1 1 140px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                border: '1.5px solid var(--sand)', color: 'var(--charcoal)',
                fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: '1rem',
                padding: '0.9rem', borderRadius: '10px'
              }}
            >
              Call
            </a>
            {pro.site_url && (
              <a
                href={pro.site_url}
                target="_blank"
                rel="noopener"
                style={{
                  flex: '1 1 140px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  border: '1.5px solid var(--sand)', color: 'var(--charcoal)',
                  fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: '1rem',
                  padding: '0.9rem', borderRadius: '10px'
                }}
              >
                View Website
              </a>
            )}
          </div>

          {/* SERVICES */}
          <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Services</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
            {pro.services.map((s, i) => (
              <div key={i} style={{
                background: 'var(--warm-white)', border: '1.5px solid var(--sand)',
                borderRadius: '12px', padding: '1rem 1.25rem',
                display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem'
              }}>
                <div>
                  <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.15rem' }}>{s.name}</h3>
                  <p style={{ fontSize: '0.85rem', color: '#666' }}>{s.desc}</p>
                </div>
                <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.9rem', color: 'var(--orange)', whiteSpace: 'nowrap' }}>{s.price}</span>
              </div>
            ))}
          </div>

          {/* GALLERY */}
          {pro.gallery_urls.length > 0 && (
            <>
              <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Our Work</h2>
              <div style={{
                display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '0.5rem', marginBottom: '2rem'
              }}>
                {pro.gallery_urls.map((url, i) => (
                  <img key={i} src={url} alt="Work" style={{ width: '100%', aspectRatio: '1', objectFit: 'cover', borderRadius: '8px' }} loading="lazy" />
                ))}
              </div>
            </>
          )}

          {/* TESTIMONIAL */}
          <div style={{ background: 'var(--green)', borderRadius: '16px', padding: '1.75rem', marginBottom: '2rem' }}>
            <span style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '3rem', lineHeight: 1, color: 'var(--orange)', display: 'block', marginBottom: '0.5rem' }}>"</span>
            <p style={{ color: 'rgba(255,255,255,0.9)', fontStyle: 'italic', lineHeight: 1.6, marginBottom: '1rem' }}>{pro.testimonial_text}</p>
            <div style={{ display: 'flex', gap: '3px', marginBottom: '0.5rem' }}>
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="var(--orange)">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              ))}
            </div>
            <p style={{ color: 'rgba(255,255,255,0.65)', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, fontSize: '0.85rem' }}>
              - {pro.testimonial_name}, {pro.testimonial_suburb}
            </p>
          </div>
        </div>

        <footer style={{ background: 'var(--sand)', textAlign: 'center', padding: '1.5rem', fontSize: '0.8rem', color: 'var(--charcoal)' }}>
          <p>Mzansi Pros - Get found. R589. Done.</p>
        </footer>
      </main>
    </>
  )
}
