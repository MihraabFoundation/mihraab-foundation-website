import { NextResponse } from "next/server"
import { sendEmail } from "@/services/email"

interface ContactFormData {
  firstName: string
  lastName: string
  email: string
  subject: string
  message: string
}

function buildEmailHtml(data: ContactFormData): string {
  const row = (label: string, value: string) =>
    value
      ? `<tr><td style="padding:8px 0;color:#717171;width:100px;">${label}</td><td style="padding:8px 0;">${value}</td></tr>`
      : ""

  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;font-family:system-ui,-apple-system,sans-serif;background:#f5f5f5;">
  <div style="max-width:560px;margin:24px auto;background:#fff;border-radius:8px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.08);">
    <div style="background:#6f8946;color:#fff;padding:20px 24px;">
      <h1 style="margin:0;font-size:1.25rem;">Contact Form Submission</h1>
      <p style="margin:8px 0 0;opacity:0.9;font-size:0.9rem;">${data.subject}</p>
    </div>
    <div style="padding:24px;">
      <table style="width:100%;border-collapse:collapse;">
        ${row("Name", `${data.firstName} ${data.lastName}`)}
        ${row("Email", `<a href="mailto:${data.email}">${data.email}</a>`)}
        ${row("Subject", data.subject)}
      </table>
      <h2 style="margin:24px 0 8px;font-size:1rem;color:#231f20;">Message</h2>
      <p style="margin:0;white-space:pre-wrap;line-height:1.6;">${data.message}</p>
      <p style="margin:24px 0 0;font-size:0.8rem;color:#717171;">Submitted via Mihraab Foundation contact form</p>
    </div>
  </div>
</body>
</html>
  `.trim()
}

export async function POST(request: Request) {
  try {
    const body = (await request.json().catch(() => ({}))) as ContactFormData

    const subject = `Contact: ${body.subject}`

    const { id } = await sendEmail({
      replyTo: body.email,
      subject,
      html: buildEmailHtml(body),
    })

    return NextResponse.json({ success: true, id })
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to send message"
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
