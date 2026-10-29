import React, { useState, useEffect } from 'react'
import { useTheme } from '../context/ThemeContext'
import { Sun, Moon, Menu, X, FileDown, Cloud } from 'lucide-react'

interface NavLink {
  name: string
  href: string
}

const navLinks: NavLink[] = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Learning Journey', href: '#journey' },
  { name: 'Projects', href: '#projects' },
  { name: 'Leadership', href: '#leadership' },
  { name: 'Beyond the Code', href: '#beyond' },
  { name: 'Contact', href: '#contact' },
]

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      // Active section detection
      const sectionIds = ['home', 'about', 'skills', 'journey', 'projects', 'leadership', 'beyond', 'contact']
      const scrollPosition = window.scrollY + 120

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i]
        const element = document.getElementById(id)
        if (element) {
          const top = element.offsetTop
          if (scrollPosition >= top) {
            setActiveSection(id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false)
    }
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [mobileMenuOpen])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 dark:bg-[#0b0f19]/90 backdrop-blur-md shadow-xs border-b border-slate-200/80 dark:border-slate-800/80 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Wordmark */}
          <a
            href="#home"
            className="flex items-center gap-2.5 group focus:outline-hidden focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-lg py-1 px-1.5"
            aria-label="Lohitha V - Back to top"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-sky-500 text-white flex items-center justify-center font-bold text-base shadow-xs shadow-indigo-500/20 group-hover:scale-105 transition-transform">
              LV
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-slate-900 dark:text-white tracking-tight text-lg leading-tight flex items-center gap-1.5">
                Lohitha V
                <Cloud className="w-3.5 h-3.5 text-indigo-500 inline-block opacity-80" aria-hidden="true" />
              </span>
              <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 tracking-wider uppercase">
                Cloud & DevOps Aspirant
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1)
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-xs xl:text-sm font-medium px-2.5 py-1.5 rounded-lg transition-colors relative focus:outline-hidden focus-visible:ring-2 focus-visible:ring-indigo-500 ${
                    isActive
                      ? 'text-indigo-600 dark:text-indigo-400 font-semibold'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/70 dark:hover:bg-slate-800/50'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-2.5 right-2.5 h-0.5 bg-indigo-600 dark:bg-indigo-400 rounded-full" />
                  )}
                </a>
              )
            })}
          </nav>

          {/* Desktop Actions: Theme Toggle & Resume Button */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={toggleTheme}
              type="button"
              className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-indigo-500 transition-colors"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400 hover:rotate-45 transition-transform" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700 hover:-rotate-12 transition-transform" />
              )}
            </button>

            <a
              href="/resume.pdf"
              download="Lohitha_V_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs xl:text-sm font-semibold px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white dark:bg-indigo-600 dark:hover:bg-indigo-500 shadow-xs hover:shadow-md transition-all focus:outline-hidden focus-visible:ring-2 focus-visible:ring-indigo-500"
            >
              <FileDown className="w-4 h-4" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Menu & Theme Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleTheme}
              type="button"
              className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-hidden"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700" />
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-indigo-500"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[65px] z-40 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Menu Container */}
          <div className="relative bg-white dark:bg-[#0f172a] border-b border-slate-200 dark:border-slate-800 shadow-xl px-5 pt-4 pb-6 flex flex-col gap-2 max-h-[calc(100vh-80px)] overflow-y-auto">
            <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1)
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 font-semibold'
                        : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    {link.name}
                  </a>
                )
              })}
            </nav>

            <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-2.5">
              <a
                href="/resume.pdf"
                download="Lohitha_V_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 text-sm font-semibold py-2.5 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white shadow-xs"
              >
                <FileDown className="w-4 h-4" />
                <span>Download Resume</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
