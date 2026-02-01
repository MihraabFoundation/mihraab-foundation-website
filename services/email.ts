import { Resend } from "resend"
import { env, validateEnv } from "@/lib/env"

const resend = new Resend(env.resend.apiKey)

const DEFAULT_FROM = "onboarding@resend.dev"
// After domain setup: "Mihraab Foundation <no-reply@mihraab.com>"
const DEFAULT_TO = "tech@mihraab.com"

export interface SendEmailOptions {
  subject: string
  html: string
  to?: string | string[]
  from?: string
  replyTo?: string | string[]
}

/**
 * Sends an email via Resend. Validates required env vars before sending.
 * Use this from API routes for any form submission or transactional email.
 *
 * @throws Error if env is invalid or Resend returns an error
 */
export async function sendEmail(options: SendEmailOptions): Promise<{ id: string }> {
  validateEnv()

  const { data, error } = await resend.emails.send({
    from: options.from ?? DEFAULT_FROM,
    to: options.to ?? DEFAULT_TO,
    replyTo: options.replyTo,
    subject: options.subject,
    html: options.html,
  })

  if (error) {
    throw new Error(error.message)
  }

  if (!data?.id) {
    throw new Error("Failed to send email: no id returned")
  }

  return { id: data.id }
}
