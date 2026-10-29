import type { FC } from 'react'
import { personalInfo, footerContent, socialLinks } from '../data/portfolioData'
import { GithubIcon, LinkedinIcon, CredlyIcon } from './SocialIcons'
import { Cloud, Mail, ArrowUp } from 'lucide-react'

export const Footer: FC = () => {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-white dark:bg-[#070a12] border-t border-slate-200/80 dark:border-slate-800/80 py-12 text-slate-600 dark:text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-slate-100 dark:border-slate-800/80">
          {/* Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold text-sm">
                LV
              </div>
              <span className="text-lg font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-1.5">
                {personalInfo.name}
                <Cloud className="w-4 h-4 text-indigo-500" />
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm">
              "{footerContent.tagline}"
            </p>
          </div>

          {/* Quick Nav Shortcuts */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-medium" aria-label="Footer Navigation">
            <a href="#home" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              Home
            </a>
            <a href="#about" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              About
            </a>
            <a href="#skills" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              Skills
            </a>
            <a href="#journey" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              Learning Journey
            </a>
            <a href="#projects" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              Projects
            </a>
            <a href="#leadership" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              Leadership
            </a>
            <a href="#beyond" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              Beyond the Code
            </a>
            <a href="#contact" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              Contact
            </a>
          </nav>

          {/* Social Links & Back-to-Top */}
          <div className="flex items-center gap-3">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            {socialLinks.credly && (
              <a
                href={socialLinks.credly}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                aria-label="Credly Profile"
                title="Credly Verified Badges"
              >
                <CredlyIcon className="w-4 h-4" />
              </a>
            )}

            <a
              href={`mailto:${socialLinks.email}`}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              aria-label="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              type="button"
              className="p-2 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 dark:hover:bg-indigo-900 transition-colors ml-2 cursor-pointer"
              title="Back to top"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Copyright notice & metadata */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 dark:text-slate-500 gap-2 text-center sm:text-left">
          <p>
            &copy; {currentYear} {personalInfo.name}. Built with React, TypeScript & Tailwind CSS.
          </p>
          <p className="font-mono">
            Puducherry, India &bull; B.Tech IT (2023–2027)
          </p>
        </div>
      </div>
    </footer>
  )
}
