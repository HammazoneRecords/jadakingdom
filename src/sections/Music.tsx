import { motion } from 'motion/react';

const RELEASES = [
  {
    title: 'Banana',
    year: '2024',
    type: 'Single',
    gradient: 'linear-gradient(145deg, #2a1a1a, #1a1a2a)',
    spotify: 'https://open.spotify.com/artist/4l3NzXBCvnuqCaUFYxbSYV',
  },
  {
    title: 'Love Situations',
    year: '2023',
    type: 'EP',
    gradient: 'linear-gradient(145deg, #1a2a20, #1a1a18)',
    spotify: 'https://open.spotify.com/artist/4l3NzXBCvnuqCaUFYxbSYV',
  },
  {
    title: 'WiN',
    year: '2023',
    type: 'Single',
    gradient: 'linear-gradient(145deg, #1a1a22, #201a1a)',
    spotify: 'https://open.spotify.com/artist/4l3NzXBCvnuqCaUFYxbSYV',
  },
];

const STREAMS = [
  { name: 'Spotify',     href: 'https://open.spotify.com/artist/4l3NzXBCvnuqCaUFYxbSYV' },
  { name: 'Apple Music', href: 'https://music.apple.com/us/artist/jada-kingdom/1440680454' },
  { name: 'YouTube',     href: 'https://www.youtube.com/@JadaKingdomOfficial' },
];

export default function Music() {
  return (
    <section id="music" style={{ background: '#080808', padding: '6rem 0' }}>
      <div className="max-w-6xl mx-auto px-6 md:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="section-label mb-2">Latest Releases</p>
          <h2 className="font-display font-bold" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', color: '#fdfaf5', letterSpacing: '-0.01em' }}>
            Stream &amp; Download
          </h2>
          <div className="gold-divider mx-auto mt-4" />
        </motion.div>

        {/* Release cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {RELEASES.map((r, i) => (
            <motion.a
              key={r.title}
              href={r.spotify}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group block rounded-2xl overflow-hidden transition-all duration-300"
              style={{ border: '1px solid rgba(255,255,255,0.05)', background: 'rgba(255,255,255,0.015)' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(212,168,83,0.35)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-6px)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.05)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; }}
            >
              {/* Art */}
              <div className="w-full aspect-square flex items-center justify-center font-display font-bold text-5xl"
                style={{ background: r.gradient, color: 'rgba(255,255,255,0.12)', letterSpacing: '0.06em' }}>
                {r.title.slice(0, 2).toUpperCase()}
              </div>
              {/* Info */}
              <div className="p-5">
                <p className="font-label text-[10px] tracking-widest uppercase mb-1" style={{ color: '#d4a853' }}>{r.type}</p>
                <p className="font-display font-semibold text-xl mb-1" style={{ color: '#fdfaf5' }}>{r.title}</p>
                <p className="font-body text-sm" style={{ color: 'rgba(245,240,232,0.4)' }}>{r.year}</p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Stream links */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-3 justify-center"
        >
          {STREAMS.map(s => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body font-medium text-sm tracking-wider px-8 py-3 rounded-full transition-all duration-300"
              style={{ border: '1px solid rgba(212,168,83,0.3)', color: '#d4a853' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#d4a853'; (e.currentTarget as HTMLElement).style.color = '#0d0d0d'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; (e.currentTarget as HTMLElement).style.color = '#d4a853'; }}
            >
              {s.name}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
