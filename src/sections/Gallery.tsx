import { motion } from 'motion/react';

const ITEMS = [
  { src: '/jada-hero.jpg', label: 'Night Shoot',      span: 'md:col-span-2 md:row-span-2', pos: 'object-top' },
  { src: '/jada-2.jpg',    label: 'Beauty Bar',       span: '',                             pos: 'object-center' },
  { src: '/jada-3.jpg',    label: 'Dreaming',         span: '',                             pos: 'object-center' },
  { src: '/jada-4.jpg',    label: 'Direct',           span: 'md:col-span-2',               pos: 'object-center' },
  { src: '/jada-5.jpg',    label: 'Staircase',        span: '',                             pos: 'object-top' },
  { src: '/jada-6.jpg',    label: 'Editorial',        span: '',                             pos: 'object-center' },
  { src: '/jada-7.jpg',    label: 'Overhead',         span: 'md:col-span-2',               pos: 'object-top' },
];

export default function Gallery() {
  return (
    <section id="gallery" style={{ padding: '6rem 0' }}>
      <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 clamp(1.5rem, 5vw, 5rem)" }}>

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
            >
              <img
                src={item.src}
                alt={item.label}
                className={`w-full h-full object-cover ${item.pos} transition-transform duration-700 group-hover:scale-105`}
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: 'rgba(0,0,0,0.45)' }}>
                <span className="font-label text-[10px] tracking-widest uppercase" style={{ color: '#f5f0e8' }}>
                  {item.label}
                </span>
              </div>
              {/* Gold border on hover */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ border: '1px solid rgba(212,168,83,0.3)' }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
