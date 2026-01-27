/**
 * Example API route demonstrating environment variable usage
 * 
 * This is a reference implementation showing how to:
 * 1. Access environment variables safely
 * 2. Use ReSend for sending emails
 * 3. Use Airtable for data storage
 * 
 * DELETE THIS FILE once you've implemented your actual API routes
 */

import { env, validateEnv } from '@/lib/env'
import { NextResponse } from 'next/server'

// Example: ReSend email sending
export async function POST(request: Request) {
  try {
    // Validate that required environment variables are set
    validateEnv()

    // Example: Send email with ReSend
    // Uncomment and install: npm install resend
    /*
    import { Resend } from 'resend'
    const resend = new Resend(env.resend.apiKey)
    
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['delivered@resend.dev'],
      subject: 'Hello World',
      html: '<p>Congrats on sending your <strong>first email</strong>!</p>',
    })
    
    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }
    */

    // Example: Airtable data operations
    // Uncomment and install: npm install airtable
    /*
    import Airtable from 'airtable'
    const base = new Airtable({ apiKey: env.airtable.apiKey }).base(env.airtable.baseId)
    
    const records = await base('Table Name').select({
      maxRecords: 10,
      view: 'Grid view'
    }).firstPage()
    */

    return NextResponse.json({ 
      message: 'Environment variables are configured correctly',
      hasResendKey: !!env.resend.apiKey,
      hasAirtableKey: !!env.airtable.apiKey,
    })
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }
    return NextResponse.json({ error: 'Unknown error' }, { status: 500 })
  }
}
