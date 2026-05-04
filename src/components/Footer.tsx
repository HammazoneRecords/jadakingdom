const SOCIALS = [
  { label: 'Instagram',    href: 'https://www.instagram.com/jadakingdom/' },
  { label: 'YouTube',      href: 'https://www.youtube.com/channel/UCmcrTPKYzbw2fQHiAjWg4_g' },
  { label: 'Spotify',      href: 'https://open.spotify.com/artist/2FgooFaZzZy6PUyJImk0kG?autoplay=true' },
  { label: 'Apple Music',  href: 'https://music.apple.com/jm/artist/jada-kingdom/1256243176' },
  { label: 'TikTok',       href: 'https://www.tiktok.com/@jadakingdom' },
];

export default function Footer() {
  return (
    <footer className="text-center py-12 px-6" style={{ background: '#080808', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
      <div className="flex flex-wrap gap-6 justify-center mb-6">
        {SOCIALS.map(s => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-xs font-medium tracking-widest uppercase transition-colors duration-200"
            style={{ color: 'rgba(245,240,232,0.4)', letterSpacing: '0.08em' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#d4a853')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(245,240,232,0.4)')}
          >
            {s.label}
          </a>
        ))}
      </div>
      <p className="font-body text-[11px] tracking-widest" style={{ color: 'rgba(245,240,232,0.25)', letterSpacing: '0.05em' }}>
        &copy; 2026 Jada Kingdom. All rights reserved.
      </p>
    </footer>
  );
}
