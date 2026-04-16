'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section
      ref={ref}
      id="about"
      style={{
        position: 'relative',
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        padding: 'clamp(80px,10vw,140px) clamp(24px,5vw,80px)',
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://images.unsplash.com/photo-1577495508048-b635879837f1?w=1920&q=85"
        alt=""
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          filter: 'brightness(0.12) saturate(0.5)',
        }}
      />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '900px' }}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '10px',
            letterSpacing: '0.5em',
            textTransform: 'uppercase',
            color: '#C9A55A',
            marginBottom: '36px',
          }}
        >
          About Ohana
        </motion.p>

        <div style={{ overflow: 'hidden' }}>
          <motion.p
            initial={{ y: '105%' }}
            animate={inView ? { y: '0%' } : {}}
            transition={{ duration: 1.1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(28px,4vw,54px)',
              fontWeight: 300,
              color: '#F5F0E8',
              lineHeight: 1.35,
              marginBottom: '48px',
            }}
          >
            For over 35 years, Ohana Development has been crafting{' '}
            <em style={{ color: '#C9A55A', fontStyle: 'italic' }}>
              timeless residences
            </em>{' '}
            that become legacies — from Beirut to Abu Dhabi, from waterfront
            villas to branded icon towers.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '2px',
            borderTop: '1px solid rgba(201,165,90,0.1)',
          }}
        >
          {[
            {
              title: 'Family Spirit',
              body: 'Every client becomes part of the Ohana family.',
            },
            {
              title: 'Attainable Luxury',
              body: 'Premium quality at accessible investment levels.',
            },
            {
              title: 'Personalisation',
              body: "Every home crafted to its owner's vision.",
            },
            {
              title: '35 Years',
              body: 'A legacy of excellence across the Middle East.',
            },
          ].map((v, i, arr) => (
            <div
              key={i}
              style={{
                padding: 'clamp(24px,3vw,40px) clamp(16px,2vw,28px)',
                borderRight:
                  i < arr.length - 1 ? '1px solid rgba(201,165,90,0.1)' : 'none',
              }}
            >
              <p
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: 'clamp(16px,1.8vw,22px)',
                  fontWeight: 400,
                  color: '#C9A55A',
                  marginBottom: '12px',
                }}
              >
                {v.title}
              </p>
              <p
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: 'clamp(11px,1.2vw,13px)',
                  fontWeight: 300,
                  color: 'rgba(245,240,232,0.4)',
                  lineHeight: 1.65,
                }}
              >
                {v.body}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
