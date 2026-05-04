import { Info } from 'lucide-react';
import Header from './components/Header';
import Hero from './sections/Hero';
import Music from './sections/Music';
import About from './sections/About';
import Tour from './sections/Tour';
import Gallery from './sections/Gallery';
import Merch from './sections/Merch';
import Contact from './sections/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative">
      <Header />
      <main>
        <Hero />
        <Music />
        <About />
        <Tour />
        <Merch />
        <Gallery />
        <Contact />
      </main>
      <Footer />

      {/* Disclaimer banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 px-4 py-2 flex items-center justify-center gap-2"
        style={{ background: 'rgba(245,158,11,0.08)', borderTop: '1px solid rgba(245,158,11,0.2)' }}>
        <Info size={13} style={{ color: 'rgba(251,191,36,0.85)', flexShrink: 0 }} />
        <p className="font-body text-[10px] uppercase tracking-widest text-center" style={{ color: 'rgba(251,191,36,0.65)' }}>
          Working draft — buyer assumes responsibility for clearing image &amp; likeness rights with Jada Kingdom. This site is available for{' '}
          <a href="https://mindwaveja.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>purchase</a>.
        </p>
      </div>
    </div>
  );
}
