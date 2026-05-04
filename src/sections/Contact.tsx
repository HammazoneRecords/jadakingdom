import { motion } from 'motion/react';

export default function Contact() {
  return (
    <section id="contact" style={{ padding: '6rem 0', background: 'radial-gradient(ellipse at center, rgba(212,168,83,0.05) 0%, transparent 65%)', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
      <div className="max-w-2xl mx-auto px-6 md:px-12 text-center">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <p className="section-label mb-2">Get In Touch</p>
          <h2 className="font-display font-bold mb-4" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', color: '#fdfaf5', letterSpacing: '-0.01em' }}>
            Join the Kingdom
          </h2>
          <div className="gold-divider mx-auto" />
          <p className="font-body mt-5" style={{ color: 'rgba(245,240,232,0.5)', fontSize: '0.9rem' }}>
            For bookings, press inquiries, and business — reach out below.
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          viewport={{ once: true }}
          className="rounded-2xl p-8 text-left"
          style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="Name / Organisation"
              className="w-full bg-transparent px-4 py-3 font-body text-sm focus:outline-none transition-colors rounded-lg"
              style={{ border: '1px solid rgba(245,240,232,0.12)', color: '#f5f0e8', caretColor: '#d4a853' }}
              onFocus={e => (e.target.style.borderColor = 'rgba(212,168,83,0.5)')}
              onBlur={e => (e.target.style.borderColor = 'rgba(245,240,232,0.12)')}
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-transparent px-4 py-3 font-body text-sm focus:outline-none transition-colors rounded-lg"
              style={{ border: '1px solid rgba(245,240,232,0.12)', color: '#f5f0e8', caretColor: '#d4a853' }}
              onFocus={e => (e.target.style.borderColor = 'rgba(212,168,83,0.5)')}
              onBlur={e => (e.target.style.borderColor = 'rgba(245,240,232,0.12)')}
            />
          </div>
          <select
            className="w-full bg-transparent px-4 py-3 font-body text-sm mb-4 focus:outline-none appearance-none rounded-lg"
            style={{ border: '1px solid rgba(245,240,232,0.12)', color: 'rgba(245,240,232,0.45)', background: 'rgba(8,8,8,0.8)' }}
          >
            <option value="" style={{ background: '#0d0d0d' }}>Enquiry Type</option>
            <option value="booking" style={{ background: '#0d0d0d' }}>Event Booking</option>
            <option value="press" style={{ background: '#0d0d0d' }}>Press / Media</option>
            <option value="collab" style={{ background: '#0d0d0d' }}>Collaboration</option>
            <option value="business" style={{ background: '#0d0d0d' }}>Business</option>
          </select>
          <textarea
            placeholder="Your message..."
            rows={4}
            className="w-full bg-transparent px-4 py-3 font-body text-sm mb-4 focus:outline-none resize-none transition-colors rounded-lg"
            style={{ border: '1px solid rgba(245,240,232,0.12)', color: '#f5f0e8', caretColor: '#d4a853' }}
            onFocus={e => (e.target.style.borderColor = 'rgba(212,168,83,0.5)')}
            onBlur={e => (e.target.style.borderColor = 'rgba(245,240,232,0.12)')}
          />
          <button
            disabled
            className="w-full py-3 font-body font-semibold text-sm tracking-wider rounded-full cursor-not-allowed"
            style={{ background: 'rgba(212,168,83,0.15)', border: '1px solid rgba(212,168,83,0.25)', color: 'rgba(212,168,83,0.4)' }}
          >
            Send Message
          </button>
          <p className="mt-3 text-center font-body text-[10px] tracking-wider" style={{ color: 'rgba(245,240,232,0.2)' }}>
            Contact form activates after purchase — owner configures on setup
          </p>
        </motion.div>
      </div>
    </section>
  );
}
