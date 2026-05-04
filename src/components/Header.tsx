import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const NAV = [
  { label: 'Music',   href: '#music' },
  { label: 'About',   href: '#about' },
  { label: 'Tour',    href: '#tour' },
  { label: 'Merch',   href: '#merch' },
  { label: 'Gallery', href: '#gallery' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-40 h-16 transition-all duration-500"
        style={scrolled ? { background: 'rgba(8,8,8,0.92)', backdropFilter: 'blur(20px)' } : {}}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-full flex items-center justify-between">

          {/* Wordmark */}
          <a href="#home" className="font-display font-bold text-lg" style={{ color: '#d4a853', letterSpacing: '0.04em' }}>
            JADA KINGDOM
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV.map(n => (
              <a
                key={n.href}
                href={n.href}
                className="font-body text-[11px] font-medium tracking-[0.1em] uppercase transition-colors duration-200"
                style={{ color: 'rgba(245,240,232,0.65)' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#d4a853')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(245,240,232,0.65)')}
              >
                {n.label}
              </a>
            ))}
            <a
              href="#contact"
              className="font-body text-[11px] font-semibold tracking-[0.08em] uppercase px-5 py-2 rounded-full transition-all duration-200"
              style={{ background: '#d4a853', color: '#0d0d0d' }}
              onMouseEnter={e => (e.currentTarget.style.background = '#e8c97a')}
              onMouseLeave={e => (e.currentTarget.style.background = '#d4a853')}
            >
              Contact
            </a>
          </nav>

          {/* Mobile toggle */}
          <button onClick={() => setOpen(true)} className="md:hidden" style={{ color: '#d4a853' }}>
            <Menu size={22} />
          </button>
        </div>
      </header>

      {/* Mobile slide menu */}
      {open && (
        <div className="fixed inset-0 z-50 flex flex-col p-8"
          style={{ background: 'rgba(8,8,8,0.98)', backdropFilter: 'blur(20px)' }}>
          <div className="flex justify-between items-center mb-16">
            <span className="font-display font-bold text-lg" style={{ color: '#d4a853' }}>JADA KINGDOM</span>
            <button onClick={() => setOpen(false)} style={{ color: '#f5f0e8' }}><X size={22} /></button>
          </div>
          <nav className="flex flex-col gap-8">
            {[...NAV, { label: 'Contact', href: '#contact' }].map(n => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="font-display font-bold text-4xl text-left transition-colors"
                style={{ color: 'rgba(245,240,232,0.85)', letterSpacing: '-0.01em' }}
              >
                {n.label}
              </a>
            ))}
          </nav>
          <p className="mt-auto font-body text-[10px] tracking-[0.3em] uppercase" style={{ color: 'rgba(245,240,232,0.25)' }}>
            /// Queen of Modern Dancehall ///
          </p>
        </div>
      )}
    </>
  );
}
