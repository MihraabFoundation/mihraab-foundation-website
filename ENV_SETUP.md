# Environment Variables Setup Guide

This guide explains how to set up and manage environment variables for local development and deployment.

## Local Development Setup

### 1. Create Your Local Environment File

Copy the example file to create your local environment file:

```bash
cp .env.example .env.local
```

### 2. Add Your API Keys

Open `.env.local` and replace the placeholder values with your actual API keys:

```env
RESEND_API_KEY=re_xxxxxxxxxxxxx
```

### 3. Restart Your Development Server

After adding environment variables, restart your Next.js development server:

```bash
npm run dev
# or
pnpm dev
```

## Getting API Keys

### ReSend

1. Sign up at [https://resend.com](https://resend.com)
2. Navigate to **API Keys** in your dashboard
3. Create a new API key
4. Copy the key (it starts with `re_`)
5. Add it to your `.env.local` file

## Using Environment Variables in Code

### Server-Side (API Routes, Server Components)

```typescript
import { env } from '@/lib/env'

// Access API keys
const resendApiKey = env.resend.apiKey

// Validate environment variables (optional, but recommended)
import { validateEnv } from '@/lib/env'
validateEnv() // Throws error if required vars are missing
```

### Example: Using ReSend in an API Route

```typescript
// app/api/send-email/route.ts
import { env } from '@/lib/env'
import { Resend } from 'resend'

const resend = new Resend(env.resend.apiKey)

export async function POST(request: Request) {
  // Your email sending logic here
}
```

## Netlify Deployment

### Setting Environment Variables in Netlify

1. Go to your Netlify site dashboard
2. Navigate to **Site settings** → **Environment variables**
3. Click **Add a variable**
4. Add each variable:
   - Key: `RESEND_API_KEY`
   - Value: Your actual API key
   - Scope: Select appropriate scope (Production, Deploy previews, Branch deploys)
5. Repeat for all required variables

### Netlify Environment Variable Scopes

- **Production**: Used in production deployments
- **Deploy previews**: Used in preview deployments (PRs)
- **Branch deploys**: Used in branch-specific deployments

### Using Netlify CLI (Alternative)

You can also set environment variables via CLI:

```bash
netlify env:set RESEND_API_KEY "re_xxxxxxxxxxxxx"
netlify env:set AIRTABLE_API_KEY "patxxxxxxxxxxxxx"
```

## Security Best Practices

1. **Never commit `.env.local`** - It's already in `.gitignore`
2. **Use different keys for development and production**
3. **Rotate keys regularly** - Especially if they're exposed
4. **Use Netlify's scoped variables** - Limit access appropriately
5. **Don't expose API keys to the browser** - Only use `NEXT_PUBLIC_` prefix for public variables

## Troubleshooting

### Variables not loading?

1. Make sure the file is named `.env.local` (not `.env.local.txt`)
2. Restart your development server after adding variables
3. Check for typos in variable names
4. Ensure no spaces around the `=` sign

### Variables undefined in production?

1. Check Netlify environment variables are set correctly
2. Verify the variable names match exactly (case-sensitive)
3. Redeploy after adding new variables

## File Structure

```
project-root/
├── .env.example          # Template file (committed to git)
├── .env.local            # Your local variables (gitignored)
├── lib/
│   └── env.ts           # Environment variable utilities
└── ENV_SETUP.md          # This file
```
