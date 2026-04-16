'use client'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section
      style={{
        position: 'relative',
        height: '100svh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        overflow: 'hidden',
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=90"
        alt=""
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center 60%',
          filter: 'brightness(0.6) saturate(0.85)',
          transform: 'scale(1.03)',
        }}
      />

      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `
            linear-gradient(
              to top,
              rgba(10,22,40,0.98) 0%,
              rgba(10,22,40,0.6) 35%,
              rgba(10,22,40,0.2) 65%,
              rgba(10,22,40,0.45) 100%
            )
          `,
        }}
      />

      <div
        style={{
          position: 'relative',
          zIndex: 1,
          padding: 'clamp(40px,6vw,80px)',
          paddingBottom: 'clamp(60px,8vh,100px)',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '28px',
          }}
        >
          <div style={{ width: '40px', height: '1px', background: '#C9A55A' }} />
          <span
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '10px',
              fontWeight: 300,
              letterSpacing: '0.5em',
              textTransform: 'uppercase',
              color: '#C9A55A',
            }}
          >
            Abu Dhabi · UAE · Lebanon
          </span>
        </motion.div>

        <div style={{ overflow: 'hidden', marginBottom: '8px', paddingBottom: '0.12em' }}>
          <motion.h1
            initial={{ y: '110%' }}
            animate={{ y: '0%' }}
            transition={{ duration: 1.1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(52px,9vw,128px)',
              fontWeight: 300,
              color: '#F5F0E8',
              lineHeight: 0.9,
              letterSpacing: '-0.01em',
            }}
          >
            Crafting
          </motion.h1>
        </div>
        <div style={{ overflow: 'hidden', marginBottom: '8px', paddingBottom: '0.12em' }}>
          <motion.h1
            initial={{ y: '110%' }}
            animate={{ y: '0%' }}
            transition={{ duration: 1.1, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(52px,9vw,128px)',
              fontWeight: 300,
              fontStyle: 'italic',
              color: '#C9A55A',
              lineHeight: 0.9,
            }}
          >
            Timeless
          </motion.h1>
        </div>
        <div style={{ overflow: 'hidden', marginBottom: '40px', paddingBottom: '0.12em' }}>
          <motion.h1
            initial={{ y: '110%' }}
            animate={{ y: '0%' }}
            transition={{ duration: 1.1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(52px,9vw,128px)',
              fontWeight: 300,
              color: '#F5F0E8',
              lineHeight: 0.9,
            }}
          >
            Residences.
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '32px',
          }}
        >
          <div style={{ maxWidth: '480px' }}>
            <p
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 'clamp(13px,1.5vw,16px)',
                fontWeight: 300,
                color: 'rgba(245,240,232,0.5)',
                lineHeight: 1.75,
                marginBottom: '28px',
              }}
            >
              35 years of excellence. AED 15 billion in landmark developments.
              From Yas Island to the Lebanese coast — homes that outlast
              generations.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a
                href="#projects"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '11px',
                  fontWeight: 400,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: '#0A1628',
                  background: '#C9A55A',
                  padding: '14px 32px',
                  textDecoration: 'none',
                  transition: 'all 0.3s',
                }}
                onMouseOver={(e) => (e.currentTarget.style.background = '#E8C97A')}
                onMouseOut={(e) => (e.currentTarget.style.background = '#C9A55A')}
              >
                Explore Projects
              </a>
              <a
                href="#invest"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '11px',
                  fontWeight: 300,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'rgba(245,240,232,0.7)',
                  border: '1px solid rgba(245,240,232,0.25)',
                  padding: '14px 32px',
                  textDecoration: 'none',
                  transition: 'all 0.3s',
                }}
                onMouseOver={(e) => (e.currentTarget.style.borderColor = '#C9A55A')}
                onMouseOut={(e) =>
                  (e.currentTarget.style.borderColor = 'rgba(245,240,232,0.25)')
                }
              >
                Investment Guide
              </a>
            </div>
          </div>

          <div>
            <p
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '8px',
                letterSpacing: '0.4em',
                textTransform: 'uppercase',
                color: 'rgba(245,240,232,0.25)',
                marginBottom: '14px',
              }}
            >
              Branded Partners
            </p>
            <div style={{ display: 'flex', gap: '24px', alignItems: 'center', flexWrap: 'wrap' }}>
              {['Manchester City', 'Jacob & Co.', 'Elie Saab', 'West Ham'].map(
                (partner) => (
                  <span
                    key={partner}
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '9px',
                      fontWeight: 400,
                      letterSpacing: '0.1em',
                      color: 'rgba(201,165,90,0.55)',
                      border: '1px solid rgba(201,165,90,0.2)',
                      padding: '6px 12px',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {partner}
                  </span>
                )
              )}
            </div>
          </div>
        </motion.div>
      </div>

      <div
        style={{
          position: 'absolute',
          bottom: '32px',
          right: 'clamp(24px,5vw,80px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        <span
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '8px',
            letterSpacing: '0.4em',
            textTransform: 'uppercase',
            color: 'rgba(245,240,232,0.25)',
            writingMode: 'vertical-rl',
          }}
        >
          Scroll
        </span>
        <div
          style={{
            width: '1px',
            height: '50px',
            background: 'linear-gradient(to bottom, #C9A55A, transparent)',
            animation: 'pulse 2s ease-in-out infinite',
          }}
        />
      </div>
    </section>
  )
}
