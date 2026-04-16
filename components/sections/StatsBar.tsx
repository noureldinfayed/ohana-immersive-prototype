'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { value: '35+', label: 'Years of Expertise' },
  { value: '9,000+', label: 'Units Delivered' },
  { value: '$5Bn+', label: 'Assets Value' },
  { value: '2,000+', label: 'Employees' },
  { value: 'AED 15B', label: 'Latest Project' },
]

export default function StatsBar() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })

  return (
    <section
      ref={ref}
      style={{
        background: '#060E1C',
        borderTop: '1px solid rgba(201,165,90,0.12)',
        borderBottom: '1px solid rgba(201,165,90,0.12)',
        padding: 'clamp(32px,4vw,52px) clamp(24px,5vw,80px)',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
          gap: '2px',
        }}
      >
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            style={{
              padding: 'clamp(20px,2.5vw,36px) clamp(16px,2vw,28px)',
              borderRight:
                i < stats.length - 1
                  ? '1px solid rgba(201,165,90,0.1)'
                  : 'none',
              textAlign: 'center',
            }}
          >
            <p
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 'clamp(28px,3.5vw,48px)',
                fontWeight: 300,
                color: '#C9A55A',
                lineHeight: 1,
                marginBottom: '8px',
              }}
            >
              {s.value}
            </p>
            <p
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 'clamp(8px,0.9vw,11px)',
                fontWeight: 300,
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: 'rgba(245,240,232,0.3)',
              }}
            >
              {s.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
