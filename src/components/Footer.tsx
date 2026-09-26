import { Link } from 'react-router-dom'
import { Language, getTranslations } from '../i18n/translations'
import { branding } from '../config/branding'
import packageJson from '../../package.json'
import { Heart, Coffee, Github } from 'lucide-react'

interface FooterProps {
  language: Language
}

const footerActionClass = 'inline-flex h-8 items-center gap-1.5 rounded-md border border-border bg-background px-2.5 text-xs text-foreground/70 transition-colors hover:bg-muted hover:text-foreground'

export default function Footer({ language }: FooterProps) {
  const t = getTranslations(language)
  const currentYear = new Date().getFullYear()
  const version = packageJson.version

  return (
    <footer className="border-t border-border/60 bg-background/95 backdrop-blur-md">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="py-6">
          <div className="text-center space-y-4">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2">
              <p className="text-sm text-foreground/80">
                © {currentYear} {branding.companyName}. {t.allRightsReserved}
              </p>
              <div className="flex items-center gap-2 text-xs text-foreground/40">
                <span className="hidden sm:inline">•</span>
                <span>v{version}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
