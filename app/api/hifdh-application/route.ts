import { Resend } from "resend"
import { env, validateEnv } from "@/lib/env"
import { NextResponse } from "next/server"

const resend = new Resend(env.resend.apiKey)

interface ApplicationFormData {
  parentFirstName: string
  parentLastName: string
  parentEmail: string
  parentPhone: string
  studentFirstName: string
  studentLastName: string
  studentAge: string
  memorizedAmount: string
  canReadWithTajwid: string
  previouslyEnrolled: string
  previousProgramDetails?: string
}

function buildEmailHtml(data: ApplicationFormData): string {
  const formatLabel = (s: string) => {
    if (s === "unknown") return "I don't know"
    return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase()
  }
  const row = (label: string, value: string) =>
    value ? `<tr><td style="padding:8px 0;color:#717171;width:140px;">${label}</td><td style="padding:8px 0;">${value}</td></tr>` : ""

  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;font-family:system-ui,-apple-system,sans-serif;background:#f5f5f5;">
  <div style="max-width:560px;margin:24px auto;background:#fff;border-radius:8px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.08);">
    <div style="background:#6f8946;color:#fff;padding:20px 24px;">
      <h1 style="margin:0;font-size:1.25rem;">New Hifdh Academy Application</h1>
      <p style="margin:8px 0 0;opacity:0.9;font-size:0.9rem;">${data.studentFirstName} ${data.studentLastName}</p>
    </div>
    <div style="padding:24px;">
      <h2 style="margin:0 0 16px;font-size:1rem;color:#231f20;border-bottom:1px solid #e4e4e4;padding-bottom:8px;">Parent/Guardian Information</h2>
      <table style="width:100%;border-collapse:collapse;">
        ${row("Name", `${data.parentFirstName} ${data.parentLastName}`)}
        ${row("Email", `<a href="mailto:${data.parentEmail}">${data.parentEmail}</a>`)}
        ${row("Phone", `<a href="tel:${data.parentPhone}">${data.parentPhone}</a>`)}
      </table>

      <h2 style="margin:24px 0 16px;font-size:1rem;color:#231f20;border-bottom:1px solid #e4e4e4;padding-bottom:8px;">Student Information</h2>
      <table style="width:100%;border-collapse:collapse;">
        ${row("Student Name", `${data.studentFirstName} ${data.studentLastName}`)}
        ${row("Age", data.studentAge)}
        ${row("Memorized Amount", data.memorizedAmount)}
        ${row("Can Read with Tajwīd", formatLabel(data.canReadWithTajwid))}
        ${row("Previously Enrolled in Hifdh Program", formatLabel(data.previouslyEnrolled))}
        ${data.previousProgramDetails ? row("Previous Program Details", data.previousProgramDetails) : ""}
      </table>
      
    </div>
  </div>
</body>
</html>
  `.trim()
}

export async function POST(request: Request) {
  try {
    validateEnv()

    const body = (await request.json().catch(() => ({}))) as ApplicationFormData
    const studentName = body.studentFirstName && body.studentLastName
      ? `${body.studentFirstName} ${body.studentLastName}`
      : "New Applicant"
    const subject = `Hifdh Academy Application: ${studentName}`

    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev", // After domain setup: "Hifdh Academy <no-reply@mihraab.com>"
      to: "tech@mihraab.com",
      replyTo: body.parentEmail, // Reply goes directly to the applicant
      subject,
      html: buildEmailHtml(body),
    })

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true, id: data?.id })
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed to send application email"
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
