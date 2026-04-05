import { notFound } from 'next/navigation'
import prosData from '@/data/pros.json'

const WA_ICON = `<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>`
const STAR_PATH = `<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>`

export function generateStaticParams() {
  return prosData.map(pro => ({ slug: pro.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const pro = prosData.find(p => p.slug === slug)
  if (!pro) return {}
  return { title: pro.business_name, description: `${pro.tagline} - ${pro.location_area}` }
}

export default async function ProPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const pro = prosData.find(p => p.slug === slug)
  if (!pro) notFound()

  const waMsg = encodeURIComponent("Hi, I found your website and I'd like to book a service.")
  const waUrl = `https://wa.me/${pro.whatsapp}?text=${waMsg}`

  const stars = Array(5).fill(`<svg viewBox="0 0 24 24">${STAR_PATH}</svg>`).join('')

  const serviceCards = pro.services.map(s => `
    <div class="service-card">
      <div class="service-card-text">
        <h3>${s.name}</h3>
        <p>${s.desc}</p>
      </div>
      <span class="service-price">${s.price}</span>
    </div>`).join('')

  const galleryItems = pro.gallery_urls.map((url, i) =>
    `<div class="gallery-item"><img src="${url}" alt="Our work ${i + 1}" loading="lazy" /></div>`
  ).join('')

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="${pro.tagline} - ${pro.location_area}" />
  <title>${pro.business_name}</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@600;700&family=DM+Sans:wght@400;500&family=DM+Mono:wght@400&display=swap" rel="stylesheet" />
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; }
    :root { --orange: #E2762E; --green: #1B4332; --charcoal: #2B2B2B; --warm-white: #F5F0EB; --sand: #D4C5B2; }
    body { font-family: 'DM Sans', sans-serif; color: var(--charcoal); background: var(--warm-white); font-size: 16px; line-height: 1.6; }
    img { display: block; max-width: 100%; }
    a { text-decoration: none; color: inherit; }
    .topbar { position: sticky; top: 0; z-index: 100; background: var(--green); padding: 0.75rem 1.25rem; display: flex; align-items: center; justify-content: space-between; }
    .topbar-name { font-family: 'Space Grotesk', sans-serif; font-weight: 700; font-size: 1rem; color: #fff; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 60%; }
    .topbar-wa { display: flex; align-items: center; gap: 0.4rem; background: var(--orange); color: #fff; font-family: 'DM Sans', sans-serif; font-weight: 500; font-size: 0.9rem; padding: 0.5rem 1rem; border-radius: 8px; white-space: nowrap; }
    .topbar-wa svg { width: 16px; height: 16px; fill: #fff; flex-shrink: 0; }
    .hero { position: relative; min-height: 100svh; display: flex; flex-direction: column; justify-content: flex-end; padding: 2rem 1.25rem; overflow: hidden; }
    .hero-img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; z-index: 0; }
    .hero-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(27,67,50,0.92) 0%, rgba(27,67,50,0.4) 55%, transparent 100%); z-index: 1; }
    .hero-content { position: relative; z-index: 2; color: #fff; max-width: 600px; }
    .hero-badge { display: inline-flex; align-items: center; gap: 0.35rem; background: var(--orange); color: #fff; font-family: 'DM Sans', sans-serif; font-weight: 500; font-size: 0.8rem; padding: 0.3rem 0.75rem; border-radius: 20px; margin-bottom: 0.75rem; letter-spacing: 0.02em; }
    .hero-content h1 { font-family: 'Space Grotesk', sans-serif; font-weight: 700; font-size: 2.2rem; line-height: 1.1; margin-bottom: 0.4rem; }
    .hero-content .tagline { font-size: 1.05rem; opacity: 0.9; margin-bottom: 0.75rem; }
    .stars { display: flex; align-items: center; gap: 0.3rem; margin-bottom: 1.5rem; }
    .stars svg { width: 18px; height: 18px; fill: var(--orange); }
    .stars span { font-family: 'DM Mono', monospace; font-size: 0.9rem; color: rgba(255,255,255,0.85); margin-left: 0.2rem; }
    .btn-group { display: flex; flex-direction: column; gap: 0.75rem; max-width: 360px; }
    .btn-wa { display: flex; align-items: center; justify-content: center; gap: 0.5rem; background: var(--orange); color: #fff; font-family: 'DM Sans', sans-serif; font-size: 1.05rem; font-weight: 700; padding: 1rem 1.5rem; border-radius: 12px; box-shadow: 0 4px 16px rgba(226,118,46,0.4); }
    .btn-wa svg { width: 20px; height: 20px; fill: #fff; }
    .btn-call { display: flex; align-items: center; justify-content: center; gap: 0.5rem; background: transparent; color: #fff; font-family: 'DM Sans', sans-serif; font-size: 1.05rem; font-weight: 700; padding: 1rem 1.5rem; border-radius: 12px; border: 2px solid rgba(255,255,255,0.6); }
    .trust { background: var(--green); padding: 1rem 1.25rem; display: flex; justify-content: space-around; flex-wrap: wrap; gap: 0.75rem; }
    .trust-item { display: flex; flex-direction: column; align-items: center; gap: 0.15rem; color: rgba(255,255,255,0.7); font-size: 0.75rem; }
    .trust-item strong { color: #fff; font-family: 'Space Grotesk', sans-serif; font-size: 0.85rem; font-weight: 600; }
    .trust-item .trust-icon { width: 20px; height: 20px; display: flex; align-items: center; justify-content: center; }
    .trust-item .trust-icon svg { width: 18px; height: 18px; }
    .section { padding: 2.5rem 1.25rem; max-width: 680px; margin: 0 auto; }
    .section-alt { background: var(--sand); }
    .section h2 { font-family: 'Space Grotesk', sans-serif; font-weight: 700; font-size: 1.5rem; margin-bottom: 1.25rem; color: var(--charcoal); }
    .services-list { display: flex; flex-direction: column; gap: 0.75rem; }
    .service-card { background: var(--warm-white); border: 1.5px solid var(--sand); border-radius: 12px; padding: 1rem 1.25rem; display: flex; justify-content: space-between; align-items: flex-start; gap: 1rem; }
    .service-card-text h3 { font-family: 'Space Grotesk', sans-serif; font-weight: 600; font-size: 1rem; margin-bottom: 0.2rem; }
    .service-card-text p { font-size: 0.875rem; color: #666; line-height: 1.4; }
    .service-price { font-family: 'DM Mono', monospace; font-size: 0.95rem; color: var(--orange); white-space: nowrap; padding-top: 0.1rem; }
    .gallery-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 0.75rem; }
    .gallery-grid img { width: 100%; aspect-ratio: 1; object-fit: cover; border-radius: 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
    .testimonial-section { background: var(--green); padding: 3rem 1.25rem; }
    .testimonial-inner { max-width: 680px; margin: 0 auto; }
    .testimonial-section h2 { font-family: 'Space Grotesk', sans-serif; font-weight: 700; font-size: 1.5rem; color: rgba(255,255,255,0.7); margin-bottom: 1.5rem; }
    .testimonial-card { background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15); border-radius: 16px; padding: 1.75rem 1.5rem; }
    .quote-mark { font-family: 'Space Grotesk', sans-serif; font-size: 4rem; line-height: 1; color: var(--orange); margin-bottom: 0.5rem; display: block; }
    .testimonial-text { font-size: 1.1rem; color: rgba(255,255,255,0.9); font-style: italic; line-height: 1.6; margin-bottom: 1rem; }
    .testimonial-stars { display: flex; gap: 0.2rem; margin-bottom: 0.75rem; }
    .testimonial-stars svg { width: 16px; height: 16px; fill: var(--orange); }
    .testimonial-cite { font-family: 'Space Grotesk', sans-serif; font-weight: 600; font-size: 0.9rem; color: rgba(255,255,255,0.7); }
    .area-section { padding: 5rem 1.25rem; max-width: 680px; margin: 0 auto; }
    .area-section h2 { font-family: 'Space Grotesk', sans-serif; font-weight: 700; font-size: 1.5rem; margin-bottom: 1rem; }
    .area-tag { display: inline-flex; align-items: center; gap: 0.4rem; background: var(--warm-white); border: 1.5px solid var(--sand); border-radius: 8px; padding: 0.6rem 1rem; font-family: 'Space Grotesk', sans-serif; font-weight: 600; font-size: 1rem; color: var(--green); margin-bottom: 1rem; }
    .area-note { font-size: 0.95rem; color: #555; }
    .area-note span { color: var(--orange); font-weight: 500; }
    .cta-block { background: var(--green); padding: 5rem 1.25rem; text-align: center; }
    .cta-block h2 { font-family: 'Space Grotesk', sans-serif; font-weight: 700; font-size: 1.75rem; color: #fff; margin-bottom: 0.5rem; }
    .cta-block p { color: rgba(255,255,255,0.7); margin-bottom: 1.75rem; font-size: 1rem; }
    .cta-block .btn-group { margin: 0 auto 1.5rem; }
    .hours { font-size: 0.85rem; color: rgba(255,255,255,0.55); }
    footer { background: var(--sand); text-align: center; padding: 1.25rem; font-size: 0.8rem; color: var(--charcoal); }
    footer a { color: var(--green); font-weight: 500; text-decoration: underline; }
    .fab { position: fixed; bottom: 1.5rem; right: 1.25rem; z-index: 999; background: var(--orange); width: 58px; height: 58px; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 20px rgba(226,118,46,0.5); }
    .fab svg { width: 28px; height: 28px; fill: #fff; }
    @media (min-width: 640px) { .gallery-grid { grid-template-columns: repeat(3, 1fr); } .btn-group { flex-direction: row; } .hero-content h1 { font-size: 3rem; } }
  </style>
</head>
<body>
  <div class="topbar">
    <span class="topbar-name">${pro.business_name}</span>
    <a class="topbar-wa" href="${waUrl}">
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">${WA_ICON}</svg>
      WhatsApp
    </a>
  </div>
  <div class="hero">
    <img class="hero-img" src="${pro.hero_image_url}" alt="${pro.business_name}" fetchpriority="high" />
    <div class="hero-overlay"></div>
    <div class="hero-content">
      ${pro.top_rated ? '<div class="hero-badge">Top Rated Pro</div>' : ''}
      <h1>${pro.business_name}</h1>
      <p class="tagline">${pro.tagline}</p>
      <div class="stars">${stars}<span>5.0</span></div>
      <div class="btn-group">
        <a class="btn-wa" href="${waUrl}">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">${WA_ICON}</svg>
          WhatsApp us now
        </a>
        <a class="btn-call" href="tel:${pro.phone}">
          <svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="18" height="18"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
          Tap to call
        </a>
      </div>
    </div>
  </div>
  <div class="trust">
    <div class="trust-item">
      <span class="trust-icon"><svg viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg></span>
      <strong>${pro.location_area}</strong>
    </div>
    <div class="trust-item">
      <span class="trust-icon"><svg viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></span>
      <strong>48h turnaround</strong>
    </div>
    <div class="trust-item">
      <span class="trust-icon"><svg viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span>
      <strong>No contracts</strong>
    </div>
    <div class="trust-item">
      <span class="trust-icon"><svg viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg></span>
      <strong>WhatsApp us</strong>
    </div>
  </div>
  <div class="section">
    <h2>About ${pro.business_name}</h2>
    <p style="color:#555; margin-bottom:1.5rem; font-size:0.95rem;">${(pro as any).description || pro.services.map(s => s.name).join(', ') + ' and more.'}</p>
    <div class="services-list">${serviceCards}</div>
  </div>
  ${pro.gallery_urls.length > 0 ? `
  <div class="section section-alt">
    <h2>Our Work</h2>
    <div class="gallery-grid">${galleryItems}</div>
  </div>` : ''}
  <div class="testimonial-section">
    <div class="testimonial-inner">
      <h2>What customers say</h2>
      <div class="testimonial-card">
        <span class="quote-mark">"</span>
        <p class="testimonial-text">${pro.testimonial_text}</p>
        <div class="testimonial-stars">${stars}</div>
        <div class="testimonial-cite">- ${pro.testimonial_name}, ${pro.testimonial_suburb}</div>
      </div>
    </div>
  </div>
  <div class="area-section">
    <h2>Where We Work</h2>
    <div class="area-tag">
      <svg viewBox="0 0 24 24" fill="none" stroke="#1B4332" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
      ${pro.location_area}
    </div>
    <p class="area-note">We serve ${pro.location_area} and surrounding areas.<br/><span>We come to you - no need to travel.</span></p>
  </div>
  <div class="cta-block">
    <h2>Ready to book?</h2>
    <p>We reply fast. Message us now and let's get sorted.</p>
    <div class="btn-group">
      <a class="btn-wa" href="${waUrl}">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">${WA_ICON}</svg>
        WhatsApp us now
      </a>
    </div>
    <p class="hours">${pro.operating_hours}</p>
  </div>
  <footer>
    <p>© ${pro.business_name} · Built with <a href="https://mzansipros.co.za">Mzansi Pros</a></p>
  </footer>
  <a class="fab" href="${waUrl}" aria-label="WhatsApp">
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">${WA_ICON}</svg>
  </a>
</body>
</html>`

  return (
    <div dangerouslySetInnerHTML={{ __html: html }} />
  )
}
