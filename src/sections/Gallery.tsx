import { motion } from 'motion/react';

const ITEMS = [
  { label: 'On Stage',          gradient: 'linear-gradient(150deg, #1e3025, #1a1215)', span: 'md:col-span-2 md:row-span-2' },
  { label: 'Behind the Scenes', gradient: 'linear-gradient(120deg, #1a1a20, #201a1a)', span: '' },
  { label: 'Studio Session',    gradient: 'linear-gradient(100deg, #1a201a, #1a1a20)', span: '' },
  { label: 'Music Video Set',   gradient: 'linear-gradient(140deg, #201a1a, #1a201a)', span: 'md:col-span-2' },
  { label: 'Live Performance',  gradient: 'linear-gradient(130deg, #1a1a18, #1e2020)', span: '' },
  { label: 'Press & Editorial', gradient: 'linear-gradient(125deg, #1a181a, #1a221a)', span: 'md:col-span-2' },
];

export default function Gallery() {
  return (
    <section id="gallery" style={{ padding: '6rem 0' }}>
      <div className="max-w-6xl mx-auto px-6 md:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="section-label mb-2">Gallery</p>
          <h2 className="font-display font-bold" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', color: '#fdfaf5', letterSpacing: '-0.01em' }}>
            Moments Captured
          </h2>
          <div className="gold-divider mx-auto mt-4" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3" style={{ gridAutoRows: '220px' }}>
          {ITEMS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: i * 0.06 }}
              viewport={{ once: true }}
              className={`relative rounded-xl overflow-hidden group cursor-pointer ${item.span}`}
              style={{ background: item.gradient }}
            >
              {/* Overlay on hover */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: 'rgba(0,0,0,0.45)' }}>
                <span className="font-label text-[10px] tracking-widest uppercase" style={{ color: '#f5f0e8' }}>
                  {item.label}
                </span>
              </div>

              {/* Subtle gold border on hover */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ border: '1px solid rgba(212,168,83,0.3)' }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
