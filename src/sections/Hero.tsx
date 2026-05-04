import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at 55% 40%, #1a2a1f 0%, #0a0f0a 50%, #050505 100%)',
      }}
    >
      {/* Atmospheric glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute" style={{
          top: '-20%', left: '-10%', width: '70%', height: '110%',
          background: 'radial-gradient(circle, rgba(212,168,83,0.06) 0%, transparent 65%)',
        }} />
        <div className="absolute" style={{
          bottom: '-10%', right: '-10%', width: '55%', height: '75%',
          background: 'radial-gradient(circle, rgba(199,91,74,0.04) 0%, transparent 65%)',
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-block mb-8 px-5 py-2 rounded-full font-body text-xs font-medium tracking-[0.12em] uppercase"
          style={{
            border: '1px solid rgba(212,168,83,0.4)',
            background: 'rgba(212,168,83,0.06)',
            color: '#e8c97a',
            backdropFilter: 'blur(10px)',
          }}
        >
          ★ New Music Available Now
        </motion.div>

        {/* Title */}
        <div className="overflow-hidden mb-3">
          <motion.h1
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="font-display font-bold leading-none"
            style={{ fontSize: 'clamp(3.5rem, 10vw, 7.5rem)', color: '#fdfaf5', letterSpacing: '-0.02em' }}
          >
            Jada
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-6">
          <motion.h1
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="font-display font-bold italic leading-none"
            style={{ fontSize: 'clamp(3.5rem, 10vw, 7.5rem)', color: '#d4a853', letterSpacing: '-0.02em', fontWeight: 400 }}
          >
            Kingdom
          </motion.h1>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="font-body font-light mb-10 mx-auto"
          style={{ fontSize: '1.1rem', color: 'rgba(245,240,232,0.6)', maxWidth: '480px', lineHeight: 1.7 }}
        >
          The reigning queen of modern dancehall — bold, unapologetic, and unmistakably authentic.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.75 }}
          className="flex gap-4 justify-center flex-wrap"
        >
          <a
            href="#music"
            className="font-body font-semibold text-sm tracking-wider px-8 py-3 rounded-full flex items-center gap-2 transition-all duration-300"
            style={{ background: '#d4a853', color: '#0d0d0d', boxShadow: '0 4px 25px rgba(212,168,83,0.3)' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#e8c97a'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '#d4a853'; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="5,3 19,12 5,21"/></svg>
            Listen Now
          </a>
          <a
            href="#tour"
            className="font-body font-semibold text-sm tracking-wider px-8 py-3 rounded-full transition-all duration-300"
            style={{ border: '1.5px solid rgba(255,255,255,0.25)', color: '#f5f0e8' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = '#d4a853'; (e.currentTarget as HTMLElement).style.color = '#e8c97a'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.25)'; (e.currentTarget as HTMLElement).style.color = '#f5f0e8'; }}
          >
            Tour Dates
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <span className="font-body text-[10px] tracking-[0.12em] uppercase" style={{ color: 'rgba(245,240,232,0.3)' }}>Scroll</span>
        <div className="w-px h-10" style={{ background: 'linear-gradient(to bottom, #d4a853, transparent)' }} />
      </div>
    </section>
  );
}
