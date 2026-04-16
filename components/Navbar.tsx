'use client'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '72px',
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 clamp(24px,5vw,80px)',
        background: scrolled ? 'rgba(10,22,40,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(201,165,90,0.15)' : 'none',
        transition: 'all 0.4s ease',
      }}
    >
      <a href="#" aria-label="Ohana Development" style={{ display: 'flex', alignItems: 'center' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/ui/ohana-logo.png"
          alt="Ohana Development"
          style={{ height: '44px', width: 'auto', display: 'block' }}
        />
      </a>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '40px',
        }}
      >
        {['Projects', 'About', 'Invest', 'Contact'].map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="hidden md:inline-block"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '11px',
              fontWeight: 300,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'rgba(245,240,232,0.5)',
              textDecoration: 'none',
              transition: 'color 0.3s',
            }}
            onMouseOver={(e) => (e.currentTarget.style.color = '#C9A55A')}
            onMouseOut={(e) =>
              (e.currentTarget.style.color = 'rgba(245,240,232,0.5)')
            }
          >
            {link}
          </a>
        ))}

        <a
          href="#invest"
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '11px',
            fontWeight: 400,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: '#0A1628',
            background: '#C9A55A',
            padding: '10px 24px',
            textDecoration: 'none',
            transition: 'all 0.3s',
          }}
          onMouseOver={(e) => (e.currentTarget.style.background = '#E8C97A')}
          onMouseOut={(e) => (e.currentTarget.style.background = '#C9A55A')}
        >
          Register Interest
        </a>
      </div>
    </nav>
  )
}
