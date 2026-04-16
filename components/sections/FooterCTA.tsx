'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function FooterCTA() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.4 })

  return (
    <footer
      ref={ref}
      id="contact"
      style={{
        position: 'relative',
        minHeight: '60vh',
        background: '#040A14',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: 'clamp(60px,8vw,100px) clamp(24px,5vw,80px)',
        borderTop: '1px solid rgba(201,165,90,0.1)',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%,-50%)',
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: 'clamp(60px,14vw,180px)',
          fontWeight: 300,
          color: 'rgba(201,165,90,0.04)',
          whiteSpace: 'nowrap',
          pointerEvents: 'none',
          userSelect: 'none',
        }}
      >
        Ohana
      </div>

      <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ overflow: 'hidden', marginBottom: '12px' }}>
          <motion.h2
            initial={{ y: '105%' }}
            animate={inView ? { y: '0%' } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(42px,7vw,96px)',
              fontWeight: 300,
              color: '#F5F0E8',
              lineHeight: 0.95,
            }}
          >
            Your legacy
          </motion.h2>
        </div>
        <div style={{ overflow: 'hidden', marginBottom: '48px' }}>
          <motion.h2
            initial={{ y: '105%' }}
            animate={inView ? { y: '0%' } : {}}
            transition={{ duration: 1, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(42px,7vw,96px)',
              fontWeight: 300,
              fontStyle: 'italic',
              color: '#C9A55A',
              lineHeight: 0.95,
            }}
          >
            starts here.
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            gap: '32px',
            paddingTop: '32px',
            borderTop: '1px solid rgba(245,240,232,0.07)',
          }}
        >
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/ui/ohana-logo.png"
              alt="Ohana Development"
              style={{
                height: '48px',
                width: 'auto',
                display: 'block',
                marginBottom: '14px',
              }}
            />
            <p
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '10px',
                fontWeight: 300,
                color: 'rgba(245,240,232,0.25)',
                letterSpacing: '0.2em',
              }}
            >
              Landmark Tower 64F · Abu Dhabi, UAE
            </p>
            <p
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '10px',
                fontWeight: 300,
                color: 'rgba(245,240,232,0.25)',
                marginTop: '4px',
              }}
            >
              +971 800 600 600 · info@ohana.ae
            </p>
          </div>

          <a
            href="https://www.ohana.ae/contact-us/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '11px',
              fontWeight: 400,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#0A1628',
              background: '#C9A55A',
              padding: '16px 40px',
              textDecoration: 'none',
              transition: 'all 0.3s',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            }}
            onMouseOver={(e) => (e.currentTarget.style.background = '#E8C97A')}
            onMouseOut={(e) => (e.currentTarget.style.background = '#C9A55A')}
          >
            Contact Our Team ↗
          </a>
        </motion.div>

        <p
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '9px',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: 'rgba(245,240,232,0.1)',
            marginTop: '40px',
          }}
        >
          Prototype by Fayed Intelligence · fayedintelligence.com
        </p>
      </div>
    </footer>
  )
}
