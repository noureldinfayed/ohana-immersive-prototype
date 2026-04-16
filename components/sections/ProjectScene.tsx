'use client'
import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import type { projects } from '@/data/projects'

interface ProjectSceneProps {
  project: (typeof projects)[number]
  isEven: boolean
}

export default function ProjectScene({ project, isEven }: ProjectSceneProps) {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.25 })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])

  return (
    <section
      ref={ref}
      id="projects"
      style={{
        position: 'relative',
        height: '100svh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      <motion.div style={{ y: bgY, position: 'absolute', inset: '-15%' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.bgImage}
          alt=""
          loading="lazy"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'brightness(0.55) saturate(0.75)',
          }}
        />
      </motion.div>

      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: project.bgTint,
        }}
      />

      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: isEven
            ? 'linear-gradient(to right, rgba(10,22,40,0.97) 0%, rgba(10,22,40,0.65) 45%, rgba(10,22,40,0.05) 100%)'
            : 'linear-gradient(to left, rgba(10,22,40,0.97) 0%, rgba(10,22,40,0.65) 45%, rgba(10,22,40,0.05) 100%)',
        }}
      />

      <div
        style={{
          position: 'relative',
          zIndex: 1,
          width: '100%',
          padding: 'clamp(24px,5vw,80px)',
          display: 'flex',
          justifyContent: isEven ? 'flex-start' : 'flex-end',
        }}
      >
        <div style={{ maxWidth: 'min(580px,100%)' }}>
          <motion.div
            initial={{ opacity: 0, x: isEven ? -20 : 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              marginBottom: '32px',
              border: `1px solid ${project.accentColor}40`,
              padding: '6px 14px',
            }}
          >
            <div
              style={{
                width: '6px',
                height: '6px',
                background: project.accentColor,
                borderRadius: '50%',
              }}
            />
            <span
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '9px',
                fontWeight: 300,
                letterSpacing: '0.35em',
                textTransform: 'uppercase',
                color: project.accentColor,
              }}
            >
              {project.partner} · {project.type}
            </span>
          </motion.div>

          {project.name.split('\n').map((line, i) => (
            <div key={i} style={{ overflow: 'hidden', paddingBottom: '0.12em' }}>
              <motion.h2
                initial={{ y: '108%' }}
                animate={inView ? { y: '0%' } : {}}
                transition={{
                  duration: 1,
                  delay: 0.2 + i * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: 'clamp(40px,6vw,82px)',
                  fontWeight: 300,
                  color: i === 1 ? project.accentColor : '#F5F0E8',
                  fontStyle: i === 1 ? 'italic' : 'normal',
                  lineHeight: 0.95,
                }}
              >
                {line}
              </motion.h2>
            </div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            style={{ marginTop: '24px', marginBottom: '32px' }}
          >
            <p
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '10px',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: 'rgba(245,240,232,0.3)',
                marginBottom: '12px',
              }}
            >
              {project.location}
            </p>
            <p
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 'clamp(16px,2vw,22px)',
                fontWeight: 300,
                fontStyle: 'italic',
                color: 'rgba(245,240,232,0.6)',
                lineHeight: 1.5,
                maxWidth: '400px',
              }}
            >
              {project.tagline}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            style={{
              display: 'flex',
              gap: '32px',
              marginBottom: '32px',
              paddingBottom: '28px',
              borderBottom: '1px solid rgba(245,240,232,0.08)',
              flexWrap: 'wrap',
            }}
          >
            {project.stats.map((s, i) => (
              <div key={i}>
                <p
                  style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: 'clamp(18px,2vw,26px)',
                    fontWeight: 400,
                    color: project.accentColor,
                    lineHeight: 1,
                    marginBottom: '4px',
                  }}
                >
                  {s.value}
                </p>
                <p
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '9px',
                    letterSpacing: '0.25em',
                    textTransform: 'uppercase',
                    color: 'rgba(245,240,232,0.3)',
                  }}
                >
                  {s.label}
                </p>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '8px',
              marginBottom: '36px',
            }}
          >
            {project.features.map((f, i) => (
              <span
                key={i}
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '9px',
                  fontWeight: 300,
                  letterSpacing: '0.1em',
                  color: 'rgba(245,240,232,0.5)',
                  border: '1px solid rgba(245,240,232,0.1)',
                  padding: '5px 12px',
                }}
              >
                {f}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '24px',
              flexWrap: 'wrap',
            }}
          >
            <div>
              <p
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '8px',
                  letterSpacing: '0.35em',
                  textTransform: 'uppercase',
                  color: 'rgba(245,240,232,0.3)',
                  marginBottom: '4px',
                }}
              >
                Starting From
              </p>
              <p
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: 'clamp(16px,1.8vw,22px)',
                  fontWeight: 400,
                  color: '#C9A55A',
                }}
              >
                {project.startingPrice}
              </p>
            </div>
            <a
              href={project.registerUrl}
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
                padding: '14px 32px',
                textDecoration: 'none',
                transition: 'all 0.3s',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
              }}
              onMouseOver={(e) => (e.currentTarget.style.background = '#E8C97A')}
              onMouseOut={(e) => (e.currentTarget.style.background = '#C9A55A')}
            >
              Register Interest →
            </a>
          </motion.div>
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          bottom: '-20px',
          right: isEven ? 'clamp(24px,5vw,80px)' : 'auto',
          left: isEven ? 'auto' : 'clamp(24px,5vw,80px)',
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: 'clamp(120px,20vw,260px)',
          fontWeight: 300,
          color: 'rgba(201,165,90,0.04)',
          lineHeight: 1,
          userSelect: 'none',
          pointerEvents: 'none',
        }}
      >
        {project.index}
      </div>
    </section>
  )
}
