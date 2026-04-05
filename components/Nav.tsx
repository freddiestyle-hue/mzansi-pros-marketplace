import Link from 'next/link'

export default function Nav() {
  return (
    <nav style={{ background: 'var(--green)' }} className="sticky top-0 z-50 px-5 py-4 flex items-center justify-between">
      <Link href="/" style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: '1.2rem', color: '#fff' }}>
        Mzansi Pros
      </Link>
      <div className="flex items-center gap-4">
        <Link href="/how-it-works" style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.9rem' }}>How it works</Link>
        <Link href="/pricing" style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.9rem' }}>Pricing</Link>
        <a
          href="https://wa.me/27000000000?text=Hi%2C+I%27d+like+to+get+my+website"
          style={{ background: 'var(--orange)', color: '#fff', fontWeight: 700, fontSize: '0.9rem', padding: '0.5rem 1rem', borderRadius: '8px' }}
        >
          Get your site
        </a>
      </div>
    </nav>
  )
}
