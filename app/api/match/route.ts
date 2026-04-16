import { NextRequest, NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { name, nationality, budget, purpose, location, timeline } = body

  const projects = [
    {
      name: 'Manchester City Yas Residences',
      startingPrice: 'AED 1.7M',
      location: 'Yas Canal, Abu Dhabi',
      bestFor:
        'Sports enthusiasts, families, Golden Visa, mid-range investors, off-plan growth',
      delivery: 'Q4 2029',
    },
    {
      name: 'Jacob & Co. Beachfront Living',
      startingPrice: 'AED 10.8M',
      location: 'Al Jurf, Abu Dhabi',
      bestFor:
        'Ultra-HNW buyers, jewelry/fashion lovers, beachfront lifestyle, capital preservation',
      delivery: 'Q2 2028',
    },
    {
      name: 'Elie Saab Waterfront',
      startingPrice: 'On request',
      location: 'Abu Dhabi',
      bestFor:
        'Fashion brand lovers, luxury lifestyle, bespoke residences, unique design',
      delivery: '2027',
    },
  ]

  const systemPrompt = `You are an elite real estate investment advisor for Ohana Development,
a leading UAE luxury developer. Your role is to match investors with the perfect Ohana project
based on their profile. Be warm, confident, and professional.
Give a concise recommendation of 2-3 sentences maximum.
Always mention the specific project name, why it suits them, and one compelling reason to act now.
Do not use bullet points. Speak in flowing, premium language.`

  const userMessage = `
Investor Profile:
- Name: ${name}
- Nationality/Residence: ${nationality || 'Not specified'}
- Budget: ${budget}
- Purpose: ${purpose}
- Preferred Location: ${location}
- Timeline: ${timeline || 'Flexible'}

Available Projects:
${projects.map((p) => `${p.name}: Starting ${p.startingPrice}, ${p.location}. Best for: ${p.bestFor}. Delivery: ${p.delivery}`).join('\n')}

Recommend the single best project for this investor with a personalised, compelling message.`

  try {
    const response = await client.messages.create({
      model: 'claude-haiku-4-5',
      max_tokens: 300,
      system: systemPrompt,
      messages: [{ role: 'user', content: userMessage }],
    })

    const first = response.content[0]
    const recommendation =
      first && first.type === 'text'
        ? first.text
        : 'Our investment team will reach out within 24 hours.'

    return NextResponse.json({ recommendation })
  } catch {
    return NextResponse.json({
      recommendation:
        'Based on your profile, our investment team will prepare a personalised recommendation within 24 hours.',
    })
  }
}
