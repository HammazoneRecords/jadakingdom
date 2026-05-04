import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Hero photo */}
      <div className="absolute inset-0 z-0">
        <img
          src="/jada-1.jpg"
          alt="Jada Kingdom"
          className="w-full h-full object-cover object-top"
          style={{ filter: 'brightness(0.55) saturate(0.75) contrast(1.05)' }}
        />
        {/* Bottom-heavy dark gradient so title text sits clean */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(5,5,5,0.97) 0%, rgba(5,5,5,0.7) 30%, rgba(5,5,5,0.25) 65%, transparent 100%)' }} />
        {/* Subtle gold tint centre */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% 35%, rgba(212,168,83,0.08) 0%, transparent 60%)' }} />
      </div>

      {/* Content — bottom-left anchored on desktop, centered on mobile */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-16 pb-24 pt-32 flex flex-col justify-end min-h-screen">

        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-label text-[10px] tracking-[0.22em] uppercase mb-6"
          style={{ color: '#d4a853' }}
        >
          ★ New Music Available Now
        </motion.p>

        {/* Title — Bodoni Moda, large, editorial */}
        <div className="overflow-hidden mb-1">
          <motion.h1
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(4rem, 13vw, 10rem)', color: '#fdfaf5', letterSpacing: '-0.03em', lineHeight: 0.9, fontWeight: 700 }}
          >
            Jada
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-8">
          <motion.h1
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(4rem, 13vw, 10rem)', color: '#d4a853', letterSpacing: '-0.03em', lineHeight: 0.9, fontWeight: 400, fontStyle: 'italic' }}
          >
            Kingdom
          </motion.h1>
        </div>

        {/* Subtitle — Cormorant, refined */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          style={{ fontFamily: 'var(--font-editorial)', fontSize: 'clamp(1.05rem, 2vw, 1.35rem)', color: 'rgba(245,240,232,0.55)', maxWidth: '440px', lineHeight: 1.65, fontStyle: 'italic', fontWeight: 300 }}
          className="mb-10"
        >
          The reigning queen of modern dancehall — bold, unapologetic, unmistakably authentic.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.75 }}
          className="flex gap-4 flex-wrap"
        >
          <a
            href="#music"
            className="font-body font-medium text-sm tracking-wider px-8 py-3 flex items-center gap-2 transition-all duration-300"
            style={{ background: '#d4a853', color: '#0d0d0d', boxShadow: '0 4px 25px rgba(212,168,83,0.3)' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#e8c97a'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '#d4a853'; }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><polygon points="5,3 19,12 5,21"/></svg>
            Listen Now
          </a>
          <a
            href="#tour"
            className="font-body font-medium text-sm tracking-wider px-8 py-3 transition-all duration-300"
            style={{ border: '1px solid rgba(255,255,255,0.2)', color: '#f5f0e8' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = '#d4a853'; (e.currentTarget as HTMLElement).style.color = '#e8c97a'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.2)'; (e.currentTarget as HTMLElement).style.color = '#f5f0e8'; }}
          >
            Tour Dates
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-12 flex flex-col items-center gap-2 z-10 hidden md:flex">
        <div className="w-px h-12" style={{ background: 'linear-gradient(to bottom, #d4a853, transparent)' }} />
        <span className="font-label text-[9px] tracking-[0.18em] uppercase" style={{ color: 'rgba(212,168,83,0.5)', writingMode: 'vertical-rl' }}>Scroll</span>
      </div>
    </section>
  );
}
