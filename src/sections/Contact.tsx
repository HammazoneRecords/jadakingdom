import { useState } from 'react';
import { motion } from 'motion/react';

const TYPES = ['Event Booking', 'Press / Media', 'Collaboration', 'Brand Deal', 'Other'];

export default function Contact() {
  const [selected, setSelected] = useState('');

  return (
    <section id="contact" style={{ padding: '6rem 0', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
      <div className="max-w-6xl mx-auto px-6 md:px-12">

        {/* Two-column layout */}
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true }}
          >
            <p className="section-label mb-4">Get In Touch</p>
            <h2
              className="font-display font-bold mb-6"
              style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', color: '#fdfaf5', letterSpacing: '-0.02em', lineHeight: 1 }}
            >
              Work With<br />
              <span style={{ color: '#d4a853', fontStyle: 'italic', fontWeight: 400 }}>The Queen</span>
            </h2>
            <div className="gold-divider mb-8" />

            <p className="font-body mb-10" style={{ color: 'rgba(245,240,232,0.45)', fontSize: '0.95rem', lineHeight: 1.8, maxWidth: '380px' }}>
              For bookings, press, brand deals, and collaborations — reach the team directly. All enquiries reviewed within 48 hours.
            </p>

            {/* Enquiry type pills — acts as visual selector */}
            <div className="flex flex-wrap gap-2">
              {TYPES.map(t => (
                <button
                  key={t}
                  onClick={() => setSelected(t)}
                  className="font-body text-[11px] tracking-wider px-4 py-2 transition-all duration-200"
                  style={{
                    border: selected === t ? '1px solid #d4a853' : '1px solid rgba(255,255,255,0.1)',
                    background: selected === t ? 'rgba(212,168,83,0.12)' : 'transparent',
                    color: selected === t ? '#d4a853' : 'rgba(245,240,232,0.4)',
                  }}
                >
                  {t}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col gap-0" style={{ border: '1px solid rgba(255,255,255,0.07)' }}>

              {/* Name */}
              <div style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                <label className="font-label text-[9px] tracking-[0.18em] uppercase px-6 pt-5 block" style={{ color: 'rgba(212,168,83,0.6)' }}>
                  Name / Organisation
                </label>
                <input
                  type="text"
                  placeholder="Your name or company"
                  className="w-full bg-transparent px-6 pb-5 pt-2 font-body text-sm focus:outline-none"
                  style={{ color: '#f5f0e8', caretColor: '#d4a853' }}
                />
              </div>

              {/* Email */}
              <div style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                <label className="font-label text-[9px] tracking-[0.18em] uppercase px-6 pt-5 block" style={{ color: 'rgba(212,168,83,0.6)' }}>
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full bg-transparent px-6 pb-5 pt-2 font-body text-sm focus:outline-none"
                  style={{ color: '#f5f0e8', caretColor: '#d4a853' }}
                />
              </div>

              {/* Enquiry type — synced with pills */}
              <div style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                <label className="font-label text-[9px] tracking-[0.18em] uppercase px-6 pt-5 block" style={{ color: 'rgba(212,168,83,0.6)' }}>
                  Enquiry Type
                </label>
                <select
                  value={selected}
                  onChange={e => setSelected(e.target.value)}
                  className="w-full bg-transparent px-6 pb-5 pt-2 font-body text-sm focus:outline-none appearance-none"
                  style={{ color: selected ? '#f5f0e8' : 'rgba(245,240,232,0.3)', background: '#0d0d0d', caretColor: '#d4a853' }}
                >
                  <option value="" style={{ background: '#0d0d0d' }}>Select type...</option>
                  {TYPES.map(t => (
                    <option key={t} value={t} style={{ background: '#0d0d0d' }}>{t}</option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                <label className="font-label text-[9px] tracking-[0.18em] uppercase px-6 pt-5 block" style={{ color: 'rgba(212,168,83,0.6)' }}>
                  Message
                </label>
                <textarea
                  placeholder="Tell us about the opportunity..."
                  rows={5}
                  className="w-full bg-transparent px-6 pb-5 pt-2 font-body text-sm focus:outline-none resize-none"
                  style={{ color: '#f5f0e8', caretColor: '#d4a853' }}
                />
              </div>

              {/* Submit */}
              <div className="p-6">
                <button
                  disabled
                  className="w-full py-4 font-body font-medium text-sm tracking-[0.12em] uppercase cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-3"
                  style={{ background: 'rgba(212,168,83,0.1)', border: '1px solid rgba(212,168,83,0.2)', color: 'rgba(212,168,83,0.35)' }}
                >
                  Send Message
                </button>
                <p className="mt-4 text-center font-body text-[10px] tracking-wider" style={{ color: 'rgba(245,240,232,0.18)' }}>
                  Contact form activates after purchase — owner configures on setup
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
