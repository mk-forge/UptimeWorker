/**
 * UptimeWorker - Modern Status Page Monitoring
 * Copyright (c) 2025 Slym B.
 * Licensed under the Apache License, Version 2.0
 *
 * 🎨 Branding Configuration
 *
 * Centralized branding configuration for easy customization.
 *
 * HOW TO CUSTOMIZE:
 * 1. Edit the values below with your company info
 * 2. Update .env file with VITE_STATUS_TITLE and logo paths
 * 3. Replace logo files in public/ directory
 *
 * LOGO FILES:
 * - public/logo-dark.webp   → Logo for dark theme
 * - public/logo-light.webp  → Logo for light theme
 * - public/favicon.ico      → Favicon
 */

export interface BrandingConfig {
  // Company/Project Info
  companyName: string
  projectName: string
  projectDescription: string

  // URLs
  websiteUrl: string
  websiteDomain: string

  // Contact
  supportEmail?: string

  // Social Links (optional)
  githubUrl?: string
  twitterUrl?: string
  linkedinUrl?: string
  buymeacoffeeUrl?: string
  donationUrl?: string

  // Footer Links
  links: {
    about?: string
    terms?: string
    privacy?: string
    contact?: string
  }

  // Technical
  userAgent?: string // Custom User-Agent for monitoring requests
}

// ═══════════════════════════════════════════════════════════════════════════
// 🎨 BRANDING CONFIGURATION
// ═══════════════════════════════════════════════════════════════════════════

export const branding: BrandingConfig = {
  // Company Info
  companyName: 'mk-forge',
  projectName: 'Status Page',
  projectDescription: 'Status page for my projects',

  // URLs
  websiteUrl: 'https://mk-forge-status.pages.dev',
  websiteDomain: 'mk-forge-status.pages.dev',

  // Contact
  supportEmail: '',

  // Social Links
  githubUrl: 'https://github.com/mk-forge',

  // Footer Links
  links: {
    about: '',
    terms: '',
    privacy: '',
  },

  // Technical
  userAgent: 'MK-Status-Monitor/1.0',
}

// ═══════════════════════════════════════════════════════════════════════════
// 💡 EXAMPLE: Custom branding for your company
// ═══════════════════════════════════════════════════════════════════════════
//
// Replace the values above with your own:
//
//   companyName: 'ACME Corp',
//   projectName: 'ACME Status',
//   websiteUrl: 'https://acme.com',
//   websiteDomain: 'acme.com',
//   supportEmail: 'support@acme.com',
//   githubUrl: 'https://github.com/acme',
//   userAgent: 'ACME-Monitor/1.0',
//
