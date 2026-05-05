import { motion } from 'motion/react';
import { ShoppingBag } from 'lucide-react';

const ITEMS = [
  { label: 'KINGDOM HOODIE',      type: 'Hoodie',   desc: 'Heavyweight fleece, oversized fit' },
  { label: 'JK SIGNATURE TEE',    type: 'T-Shirt',  desc: 'Premium cotton, screen-printed' },
  { label: 'REIGN CROP TOP',      type: 'Crop Top', desc: 'Fitted ribbed cotton, gold embroidery' },
  { label: 'CROWN LOGO CAP',      type: 'Cap',      desc: 'Structured six-panel, embroidered' },
];

export default function Merch() {
  return (
    <section id="merch" style={{ padding: '6rem 0', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
      <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 clamp(1.5rem, 5vw, 5rem)" }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="section-label mb-3">Official Merchandise</p>
          <h2 className="font-display font-bold" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#fdfaf5', letterSpacing: '-0.02em', lineHeight: 1 }}>
            The Kingdom<br />
            <span style={{ color: '#d4a853', fontStyle: 'italic', fontWeight: 400 }}>Collection</span>
          </h2>
          <div className="gold-divider mt-5" />
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {ITEMS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="flex flex-col group cursor-default"
              style={{ border: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.02)' }}
            >
              {/* Placeholder image area */}
              <div
                className="aspect-square flex flex-col items-center justify-center gap-2 transition-colors duration-300"
                style={{ background: 'rgba(10,10,10,0.8)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}
              >
                <ShoppingBag size={22} style={{ color: 'rgba(212,168,83,0.25)' }} />
                <span className="font-label text-[9px] tracking-widest uppercase" style={{ color: 'rgba(212,168,83,0.3)' }}>
                  {item.type}
                </span>
              </div>
              <div className="p-4">
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.75rem', letterSpacing: '0.06em', color: '#fdfaf5', marginBottom: '4px', lineHeight: 1.3 }}>
                  {item.label}
                </p>
                <p className="font-body text-[11px]" style={{ color: 'rgba(245,240,232,0.35)' }}>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
        >
          <button
            disabled
            className="font-body font-medium text-sm tracking-wider px-10 py-3 cursor-not-allowed flex items-center gap-3"
            style={{ background: 'rgba(212,168,83,0.08)', border: '1px solid rgba(212,168,83,0.2)', color: 'rgba(212,168,83,0.35)' }}
          >
            <ShoppingBag size={15} />
            Visit Store
          </button>
          <p className="font-body text-[10px] tracking-wider uppercase" style={{ color: 'rgba(245,240,232,0.2)' }}>
            Store activates after purchase — owner links Printify shop on setup
          </p>
        </motion.div>
      </div>
    </section>
  );
}
