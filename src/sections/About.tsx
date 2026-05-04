import { motion } from 'motion/react';

const STATS = [
  { number: '150M+', label: 'Global Streams' },
  { number: '3M+',   label: 'Monthly Listeners' },
  { number: '50+',   label: 'Countries Reached' },
];

export default function About() {
  return (
    <section id="about" style={{ padding: '6rem 0' }}>
      <div className="max-w-6xl mx-auto px-6 md:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="section-label mb-2">About the Artist</p>
          <h2 className="font-display font-bold" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', color: '#fdfaf5', letterSpacing: '-0.01em' }}>
            The Voice of a Generation
          </h2>
          <div className="gold-divider mx-auto mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Image placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden flex items-center justify-center font-display font-bold"
            style={{
              aspectRatio: '4/5',
              background: 'linear-gradient(160deg, #1e2a20, #1a1518)',
              border: '1px solid rgba(212,168,83,0.15)',
              fontSize: '6rem',
              color: 'rgba(212,168,83,0.08)',
              maxWidth: '400px',
              margin: '0 auto',
              width: '100%',
            }}
          >
            JK
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="font-display font-semibold text-2xl mb-5" style={{ color: '#fdfaf5' }}>
              Born in Kingston, raised by the culture.
            </h3>
            <p className="font-body mb-5 leading-relaxed" style={{ color: 'rgba(245,240,232,0.65)', fontSize: '0.95rem', lineHeight: 1.85 }}>
              Jada Kingdom is a Jamaican singer and songwriter whose sound seamlessly weaves dancehall, R&amp;B, and pop into something entirely her own. With a voice that commands attention and lyrics that speak to the heart, she has become one of the most exciting voices in contemporary Caribbean music.
            </p>
            <p className="font-body leading-relaxed" style={{ color: 'rgba(245,240,232,0.45)', fontSize: '0.95rem', lineHeight: 1.85 }}>
              From viral breakthroughs to international acclaim, Jada continues to push boundaries while staying true to her roots. Her music is a celebration of femininity, strength, and the vibrant energy of Jamaica.
            </p>

            {/* Stats */}
            <div className="flex gap-8 mt-10 flex-wrap">
              {STATS.map(s => (
                <div key={s.label}>
                  <p className="font-display font-bold" style={{ fontSize: '2.2rem', color: '#d4a853', lineHeight: 1 }}>{s.number}</p>
                  <p className="font-label text-[10px] tracking-widest uppercase mt-1" style={{ color: 'rgba(245,240,232,0.4)' }}>{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
