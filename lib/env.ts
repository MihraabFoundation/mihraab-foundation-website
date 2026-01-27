/**
 * Environment variable utilities
 * 
 * This file provides type-safe access to environment variables.
 * All API keys should be accessed through this file to ensure
 * they're properly validated and typed.
 */

// Server-side only environment variables (not exposed to browser)
export const env = {
  // ReSend Configuration
  resend: {
    apiKey: process.env.RESEND_API_KEY || '',
  },

  // Environment
  nodeEnv: process.env.NODE_ENV || 'development',
  isDevelopment: process.env.NODE_ENV === 'development',
  isProduction: process.env.NODE_ENV === 'production',
} as const

/**
 * Validates that required environment variables are set
 * Call this in your API routes or server components before using the services
 */
export function validateEnv() {
  const missing: string[] = []

  if (!env.resend.apiKey) {
    missing.push('RESEND_API_KEY')
  }

  if (missing.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missing.join(', ')}\n` +
      'Please check your .env.local file and ensure all required variables are set.'
    )
  }
}

/**
 * Get environment variable with optional default value
 * Use this for optional configuration values
 */
export function getEnvVar(key: string, defaultValue?: string): string {
  const value = process.env[key]
  if (!value && !defaultValue) {
    console.warn(`Environment variable ${key} is not set`)
  }
  return value || defaultValue || ''
}
