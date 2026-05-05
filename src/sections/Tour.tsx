import { motion } from 'motion/react';

const DATES = [
  { day: '18', month: 'Jul', venue: 'Reggae Sumfest',  location: 'Montego Bay, Jamaica', soldOut: false },
  { day: '05', month: 'Aug', venue: 'O2 Academy Brixton', location: 'London, UK',       soldOut: false },
  { day: '22', month: 'Aug', venue: "S.O.B.'s",         location: 'New York, NY',       soldOut: true  },
  { day: '10', month: 'Sep', venue: 'Afro Nation',       location: 'Miami, FL',          soldOut: false },
];

export default function Tour() {
  return (
    <section id="tour" style={{ background: '#080808', padding: '6rem 0' }}>
      <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 clamp(1.5rem, 5vw, 5rem)" }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="section-label mb-2">Live Shows</p>
          <h2 className="font-display font-bold" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', color: '#fdfaf5', letterSpacing: '-0.01em' }}>
            Tour Dates
          </h2>
          <div className="gold-divider mx-auto mt-4" />
        </motion.div>

        <div className="max-w-2xl mx-auto flex flex-col gap-3">
          {DATES.map((d, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="flex items-center gap-6 rounded-xl px-6 py-5 flex-wrap transition-all duration-300"
              style={{ background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.05)' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(212,168,83,0.25)'; (e.currentTarget as HTMLElement).style.background = 'rgba(212,168,83,0.025)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.05)'; (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.015)'; }}
            >
              {/* Date */}
              <div className="text-center min-w-[52px]">
                <p className="font-display font-bold text-3xl leading-none" style={{ color: '#fdfaf5' }}>{d.day}</p>
                <p className="font-label text-[10px] tracking-widest uppercase mt-1" style={{ color: '#d4a853' }}>{d.month}</p>
              </div>

              {/* Info */}
              <div className="flex-1 min-w-[160px]">
                <p className="font-body font-semibold" style={{ color: '#fdfaf5' }}>{d.venue}</p>
                <p className="font-body text-sm mt-0.5" style={{ color: 'rgba(245,240,232,0.4)' }}>{d.location}</p>
              </div>

              {/* Ticket */}
              {d.soldOut ? (
                <span className="font-body text-xs font-medium tracking-wider px-4 py-2 rounded-full"
                  style={{ border: '1.5px solid rgba(255,255,255,0.15)', color: 'rgba(245,240,232,0.3)', opacity: 0.6 }}>
                  Sold Out
                </span>
              ) : (
                <a href="#contact"
                  className="font-body text-xs font-medium tracking-wider px-4 py-2 rounded-full transition-all duration-200"
                  style={{ border: '1.5px solid #d4a853', color: '#d4a853' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#d4a853'; (e.currentTarget as HTMLElement).style.color = '#0d0d0d'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; (e.currentTarget as HTMLElement).style.color = '#d4a853'; }}
                >
                  Get Tickets
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
