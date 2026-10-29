import type { FC } from 'react'
import { heroContent, personalInfo } from '../data/portfolioData'
import { ArrowRight, Sparkles, Cloud, Shield, FileDown, GitBranch } from 'lucide-react'

export const Hero: FC = () => {
  return (
    <section
      id="home"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
      aria-label="Introduction"
    >
      {/* Background Subtle Tech Grid / Ambient Light */}
      <div
        className="absolute inset-0 -z-10 opacity-30 dark:opacity-20 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-indigo-500/10 via-sky-400/10 to-violet-500/10 dark:from-indigo-600/15 dark:via-sky-500/10 dark:to-purple-600/15 rounded-full blur-3xl -z-10 pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline and Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status Line */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 mb-6 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 shadow-2xs">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>{personalInfo.statusLine}</span>
            </div>

            {/* Small Introductory Text */}
            <span className="text-xs sm:text-sm uppercase tracking-widest font-semibold text-indigo-600 dark:text-indigo-400 mb-3 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 inline-block" />
              {heroContent.greeting}
            </span>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-[2.75rem] xl:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.18] mb-6">
              Exploring the <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-sky-600 to-indigo-500 dark:from-indigo-400 dark:via-sky-400 dark:to-violet-400">Cloud</span>.{' '}
              Automating with <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400">DevOps</span>.{' '}
              Growing Through Technology.
            </h1>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8 max-w-2xl font-normal">
              {heroContent.description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8">
              <a
                href="#journey"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-semibold text-sm shadow-sm hover:shadow-md transition-all focus:outline-hidden focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
              >
                <span>{heroContent.primaryCtaText}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700/80 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 font-semibold text-sm shadow-2xs transition-all focus:outline-hidden focus-visible:ring-2 focus-visible:ring-indigo-500"
              >
                <span>{heroContent.secondaryCtaText}</span>
              </a>

              <a
                href="/resume.pdf"
                download="Lohitha_V_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium text-sm transition-colors"
                title="Download verified resume through 6th semester"
              >
                <FileDown className="w-4 h-4" />
                <span>Resume (PDF)</span>
              </a>

              <a
                href="#contact"
                className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:underline inline-flex items-center gap-1 ml-1"
              >
                {heroContent.connectLinkText} &rarr;
              </a>
            </div>

            {/* Subtle Tech Pills */}
            <div className="pt-6 border-t border-slate-200/80 dark:border-slate-800/80 w-full flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-slate-500 dark:text-slate-400">
              <span className="font-medium text-slate-700 dark:text-slate-300">Focus Areas:</span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/60 font-mono">
                <Cloud className="w-3.5 h-3.5 text-sky-500" />
                AWS & Cloud Infra
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/60 font-mono">
                <GitBranch className="w-3.5 h-3.5 text-indigo-500" />
                DevOps & CI/CD
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/60 font-mono">
                <Shield className="w-3.5 h-3.5 text-emerald-500" />
                Zero Trust & Security
              </span>
            </div>
          </div>

          {/* Right Column: Professional Portrait Frame with Subtle Tech Elements */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Decorative Tech Blueprint Nodes (Subtle, Background) */}
              <div
                className="absolute -top-6 -left-6 w-24 h-24 border border-dashed border-indigo-400/30 dark:border-indigo-500/20 rounded-full animate-[spin_20s_linear_infinite] pointer-events-none"
                aria-hidden="true"
              />
              <div
                className="absolute -bottom-6 -right-6 w-32 h-32 border border-slate-300/40 dark:border-slate-700/30 rounded-2xl rotate-12 pointer-events-none"
                aria-hidden="true"
              />

              {/* Main Portrait Card Frame */}
              <div className="relative z-10 bg-white dark:bg-slate-900 p-3 sm:p-4 rounded-3xl border border-slate-200/90 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-black/40">
                {/* Photo Container */}
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-800">
                  <img
                    src={personalInfo.photoPath}
                    alt="Lohitha V - Information Technology Student and Cloud & DevOps Aspirant"
                    className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-[1.02]"
                    loading="eager"
                    onError={(e) => {
                      // Fallback placeholder if image path changes
                      const target = e.currentTarget
                      target.onerror = null
                      target.src = '/images/lohitha.jpg'
                    }}
                  />

                  {/* Soft bottom vignette overlay */}
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent pointer-events-none flex items-end p-4">
                    <div className="text-white">
                      <p className="font-semibold text-sm tracking-tight">Lohitha V</p>
                      <p className="text-[11px] text-slate-300">B.Tech IT (2023–2027) • MVIT</p>
                    </div>
                  </div>
                </div>

                {/* Sub-card 1: Cloud & DevOps Focus (Floating Badge) */}
                <div className="absolute -top-4 -right-3 sm:-right-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 shadow-md rounded-xl p-2.5 sm:p-3 flex items-center gap-2.5 max-w-[200px]">
                  <div className="p-2 rounded-lg bg-sky-50 dark:bg-sky-950/50 text-sky-600 dark:text-sky-400">
                    <Cloud className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500 tracking-wider">
                      Primary Passion
                    </p>
                    <p className="text-xs font-bold text-slate-800 dark:text-slate-200 leading-tight">
                      Cloud & DevOps
                    </p>
                  </div>
                </div>

                {/* Sub-card 2: Hands-on Zero Trust Project (Floating Badge) */}
                <div className="absolute -bottom-4 -left-3 sm:-left-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 shadow-md rounded-xl p-2.5 sm:p-3 flex items-center gap-2.5 max-w-[220px]">
                  <div className="p-2 rounded-lg bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400">
                    <Shield className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500 tracking-wider">
                      Project Highlight
                    </p>
                    <p className="text-xs font-bold text-slate-800 dark:text-slate-200 leading-tight">
                      TrustGuard Zero Trust
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
