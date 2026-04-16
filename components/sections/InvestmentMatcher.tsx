'use client'
import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const BUDGET_OPTIONS = [
  'AED 1M – 3M',
  'AED 3M – 8M',
  'AED 8M – 15M',
  'AED 15M+',
]
const PURPOSE_OPTIONS = [
  'Primary Residence',
  'Investment / ROI',
  'Holiday Home',
  'Golden Visa',
]
const LOCATION_OPTIONS = ['Yas Island', 'Beachfront', 'City Views', 'Flexible']

type FormState = {
  name: string
  nationality: string
  budget: string
  purpose: string
  location: string
  timeline: string
}

export default function InvestmentMatcher() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.3 })

  const [form, setForm] = useState<FormState>({
    name: '',
    nationality: '',
    budget: '',
    purpose: '',
    location: '',
    timeline: '',
  })
  const [result, setResult] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async () => {
    if (!form.name || !form.budget || !form.purpose) return
    setLoading(true)
    try {
      const res = await fetch('/api/match', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      setResult(data.recommendation)
    } catch {
      setResult(
        'Our investment team will reach out within 24 hours with a personalised recommendation.'
      )
    }
    setLoading(false)
  }

  return (
    <section
      ref={ref}
      id="invest"
      style={{
        background: '#060E1C',
        padding: 'clamp(80px,10vw,140px) clamp(24px,5vw,80px)',
        borderTop: '1px solid rgba(201,165,90,0.1)',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 'clamp(40px,6vw,100px)',
          alignItems: 'start',
        }}
      >
        <div>
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
              marginBottom: '28px',
            }}
          >
            AI Investment Advisor
          </motion.p>

          <div style={{ overflow: 'hidden' }}>
            <motion.h2
              initial={{ y: '105%' }}
              animate={inView ? { y: '0%' } : {}}
              transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 'clamp(36px,5vw,68px)',
                fontWeight: 300,
                color: '#F5F0E8',
                lineHeight: 1.05,
                marginBottom: '28px',
              }}
            >
              Find your perfect
              <br />
              <em style={{ color: '#C9A55A', fontStyle: 'italic' }}>
                investment.
              </em>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 'clamp(13px,1.4vw,15px)',
              fontWeight: 300,
              color: 'rgba(245,240,232,0.4)',
              lineHeight: 1.75,
              marginBottom: '48px',
            }}
          >
            Our AI advisor analyses your profile, investment goals, and market
            conditions to recommend the Ohana project that maximises your
            returns and matches your lifestyle.
          </motion.p>

          {[
            'Personalised ROI projections',
            'Golden Visa eligibility check',
            'Payment plan optimisation',
            'Market comparison analysis',
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + i * 0.08 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                marginBottom: '16px',
              }}
            >
              <div
                style={{
                  width: '5px',
                  height: '5px',
                  background: '#C9A55A',
                  borderRadius: '50%',
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '13px',
                  fontWeight: 300,
                  color: 'rgba(245,240,232,0.5)',
                }}
              >
                {item}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(201,165,90,0.15)',
            padding: 'clamp(32px,4vw,52px)',
          }}
        >
          {result ? (
            <div style={{ textAlign: 'center', padding: '20px 0' }}>
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  border: '2px solid #C9A55A',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 28px',
                  fontSize: '22px',
                  color: '#C9A55A',
                }}
              >
                ✓
              </div>
              <p
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '13px',
                  fontWeight: 300,
                  fontStyle: 'italic',
                  color: '#C9A55A',
                  letterSpacing: '0.3em',
                  textTransform: 'uppercase',
                  marginBottom: '20px',
                }}
              >
                Your Recommendation
              </p>
              <p
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: 'clamp(18px,2.5vw,26px)',
                  fontWeight: 300,
                  color: '#F5F0E8',
                  lineHeight: 1.5,
                  marginBottom: '28px',
                }}
              >
                {result}
              </p>
              <button
                onClick={() => setResult(null)}
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '10px',
                  letterSpacing: '0.25em',
                  textTransform: 'uppercase',
                  color: 'rgba(245,240,232,0.35)',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                Start over
              </button>
            </div>
          ) : (
            <>
              <p
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: 'clamp(20px,2.5vw,28px)',
                  fontWeight: 300,
                  color: '#F5F0E8',
                  marginBottom: '36px',
                }}
              >
                Investment Profile
              </p>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '28px',
                }}
              >
                {(
                  [
                    {
                      key: 'name',
                      label: 'Your Name',
                      placeholder: 'Full name',
                      type: 'text',
                    },
                    {
                      key: 'nationality',
                      label: 'Nationality',
                      placeholder: 'Country of residence',
                      type: 'text',
                    },
                    {
                      key: 'timeline',
                      label: 'Investment Timeline',
                      placeholder: 'e.g. 6 months, 1 year',
                      type: 'text',
                    },
                  ] as const
                ).map((field) => (
                  <div key={field.key}>
                    <label
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '9px',
                        letterSpacing: '0.4em',
                        textTransform: 'uppercase',
                        color: 'rgba(245,240,232,0.3)',
                        display: 'block',
                        marginBottom: '10px',
                      }}
                    >
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      value={form[field.key]}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, [field.key]: e.target.value }))
                      }
                      style={{
                        width: '100%',
                        background: 'transparent',
                        border: 'none',
                        borderBottom: '1px solid rgba(245,240,232,0.12)',
                        padding: '10px 0',
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '14px',
                        fontWeight: 300,
                        color: '#F5F0E8',
                        outline: 'none',
                        transition: 'border-color 0.3s',
                      }}
                      onFocus={(e) =>
                        (e.target.style.borderBottomColor = '#C9A55A')
                      }
                      onBlur={(e) =>
                        (e.target.style.borderBottomColor =
                          'rgba(245,240,232,0.12)')
                      }
                    />
                  </div>
                ))}

                {(
                  [
                    { key: 'budget', label: 'Budget Range', options: BUDGET_OPTIONS },
                    {
                      key: 'purpose',
                      label: 'Investment Purpose',
                      options: PURPOSE_OPTIONS,
                    },
                    {
                      key: 'location',
                      label: 'Preferred Location',
                      options: LOCATION_OPTIONS,
                    },
                  ] as const
                ).map((field) => (
                  <div key={field.key}>
                    <label
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '9px',
                        letterSpacing: '0.4em',
                        textTransform: 'uppercase',
                        color: 'rgba(245,240,232,0.3)',
                        display: 'block',
                        marginBottom: '12px',
                      }}
                    >
                      {field.label}
                    </label>
                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '8px',
                      }}
                    >
                      {field.options.map((opt) => {
                        const selected = form[field.key] === opt
                        return (
                          <button
                            key={opt}
                            onClick={() =>
                              setForm((f) => ({ ...f, [field.key]: opt }))
                            }
                            style={{
                              fontFamily: 'Inter, sans-serif',
                              fontSize: '10px',
                              fontWeight: 300,
                              letterSpacing: '0.1em',
                              color: selected ? '#0A1628' : 'rgba(245,240,232,0.45)',
                              background: selected ? '#C9A55A' : 'transparent',
                              border: `1px solid ${selected ? '#C9A55A' : 'rgba(245,240,232,0.12)'}`,
                              padding: '8px 16px',
                              cursor: 'pointer',
                              transition: 'all 0.25s',
                            }}
                          >
                            {opt}
                          </button>
                        )
                      })}
                    </div>
                  </div>
                ))}

                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    paddingTop: '8px',
                  }}
                >
                  <button
                    onClick={handleSubmit}
                    disabled={loading}
                    style={{
                      width: '54px',
                      height: '54px',
                      borderRadius: '50%',
                      background: loading ? 'rgba(201,165,90,0.4)' : '#C9A55A',
                      border: 'none',
                      cursor: loading ? 'wait' : 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '22px',
                      color: '#0A1628',
                      transition: 'all 0.3s',
                    }}
                    onMouseOver={(e) =>
                      !loading && (e.currentTarget.style.background = '#E8C97A')
                    }
                    onMouseOut={(e) =>
                      !loading && (e.currentTarget.style.background = '#C9A55A')
                    }
                  >
                    {loading ? '⟳' : '→'}
                  </button>
                </div>
              </div>
            </>
          )}
        </motion.div>
      </div>
    </section>
  )
}
