import { useState, type FC } from 'react'
import { projectsData } from '../data/portfolioData'
import type { ProjectItem } from '../types/portfolio'
import { GithubIcon } from './SocialIcons'
import {
  ExternalLink,
  BookOpen,
  Terminal,
  FolderGit2,
  CheckCircle,
  AlertTriangle,
  Sparkles,
} from 'lucide-react'

// Visual Mockup for TrustGuard
const TrustGuardVisual: FC = () => (
  <div className="w-full h-48 sm:h-56 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 rounded-xl p-4 flex flex-col justify-between border border-indigo-500/30 text-white relative overflow-hidden font-mono text-xs">
    {/* Background Grid Pattern */}
    <div
      className="absolute inset-0 opacity-15"
      style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, #818cf8 1px, transparent 0)`,
        backgroundSize: '16px 16px',
      }}
    />

    {/* Top Header Mockup */}
    <div className="flex items-center justify-between z-10 border-b border-indigo-900/60 pb-2">
      <div className="flex items-center gap-2">
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
        <span className="font-bold tracking-wider text-indigo-200">TRUSTGUARD :: ZERO-TRUST</span>
      </div>
      <span className="px-2 py-0.5 rounded-md bg-indigo-900/70 text-indigo-300 text-[10px] border border-indigo-700/50">
        RBAC: Revenue Officer
      </span>
    </div>

    {/* Center Metric Display */}
    <div className="grid grid-cols-3 gap-2 z-10 my-auto">
      <div className="p-2.5 rounded-lg bg-slate-800/80 border border-slate-700/60 flex flex-col">
        <span className="text-[10px] text-slate-400">Trust Score</span>
        <span className="text-base sm:text-lg font-bold text-emerald-400">94 / 100</span>
        <span className="text-[9px] text-emerald-500/90 flex items-center gap-0.5">
          <CheckCircle className="w-2.5 h-2.5 inline" /> Verified Device
        </span>
      </div>

      <div className="p-2.5 rounded-lg bg-slate-800/80 border border-slate-700/60 flex flex-col">
        <span className="text-[10px] text-slate-400">ML Anomaly Check</span>
        <span className="text-base sm:text-lg font-bold text-sky-400">Normal</span>
        <span className="text-[9px] text-slate-400">Isolation Forest</span>
      </div>

      <div className="p-2.5 rounded-lg bg-slate-800/80 border border-slate-700/60 flex flex-col">
        <span className="text-[10px] text-slate-400">Access Decision</span>
        <span className="text-base sm:text-lg font-bold text-indigo-400">Granted</span>
        <span className="text-[9px] text-indigo-300">Continuous Session</span>
      </div>
    </div>

    {/* Bottom Status bar */}
    <div className="flex items-center justify-between z-10 text-[10px] text-slate-400 pt-1 border-t border-indigo-900/40">
      <span>Endpoint: encrypted-session</span>
      <span className="text-indigo-400 font-mono">Role-Verified Access</span>
    </div>
  </div>
)

// Visual Mockup for CreativeMinds
const CreativeMindsVisual: FC = () => (
  <div className="w-full h-48 sm:h-56 bg-gradient-to-br from-sky-900 via-slate-900 to-indigo-950 rounded-xl p-4 flex flex-col justify-between border border-sky-500/30 text-white relative overflow-hidden font-sans text-xs">
    <div className="flex items-center justify-between z-10 border-b border-sky-900/60 pb-2">
      <div className="flex items-center gap-2">
        <BookOpen className="w-4 h-4 text-sky-400" />
        <span className="font-bold tracking-tight text-sky-100">CreativeMinds Portal</span>
      </div>
      <span className="px-2 py-0.5 rounded-md bg-sky-900/70 text-sky-300 text-[10px] border border-sky-700/50">
        Student E-Learning
      </span>
    </div>

    <div className="grid grid-cols-2 gap-2 z-10 my-auto">
      <div className="p-2.5 rounded-lg bg-slate-800/80 border border-slate-700/60">
        <span className="text-[10px] text-slate-400 block mb-1">Enrolled Courses</span>
        <p className="font-bold text-sm text-sky-300">Cloud Infrastructure 101</p>
        <div className="w-full bg-slate-700 h-1.5 rounded-full mt-2 overflow-hidden">
          <div className="bg-sky-400 h-full w-3/4 rounded-full" />
        </div>
      </div>

      <div className="p-2.5 rounded-lg bg-slate-800/80 border border-slate-700/60">
        <span className="text-[10px] text-slate-400 block mb-1">Study Materials</span>
        <p className="font-bold text-sm text-indigo-300">Centralized Library</p>
        <span className="text-[10px] text-slate-300 mt-1 block">Self-Paced Modules &bull; PDFs</span>
      </div>
    </div>

    <div className="flex items-center justify-between z-10 text-[10px] text-slate-400 pt-1 border-t border-sky-900/40">
      <span>Student Authentication Active</span>
      <span className="text-sky-300">Course Registration Live</span>
    </div>
  </div>
)

// Visual Mockup for Experiments
const ExperimentsVisual: FC = () => (
  <div className="w-full h-48 sm:h-56 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-950 rounded-xl p-4 flex flex-col justify-between border border-indigo-500/20 text-white relative overflow-hidden font-mono text-xs">
    <div className="flex items-center justify-between z-10 border-b border-slate-800 pb-2">
      <div className="flex items-center gap-2">
        <Terminal className="w-4 h-4 text-indigo-400" />
        <span className="font-bold text-slate-200">bash :: cloud-sandbox</span>
      </div>
      <span className="px-2 py-0.5 rounded-md bg-indigo-900/50 text-indigo-300 text-[10px]">
        Docker & Linux
      </span>
    </div>

    <div className="bg-black/60 p-2.5 rounded-lg border border-slate-800 text-[11px] space-y-1 text-slate-300 my-auto">
      <p className="text-emerald-400">$ docker run -d --name app-container -p 80:80 webapp</p>
      <p className="text-slate-400">&gt; Container started: c38f2a9e (healthy)</p>
      <p className="text-sky-400">$ aws s3 ls s3://devops-learning-bucket/</p>
    </div>

    <div className="flex items-center justify-between z-10 text-[10px] text-slate-400 pt-1 border-t border-slate-800">
      <span>Continuous Learning Sandbox</span>
      <span className="text-indigo-400">Cloud Automation</span>
    </div>
  </div>
)

export const Projects: FC = () => {
  const [filter, setFilter] = useState<'all' | 'featured'>('all')

  const filteredProjects = filter === 'featured'
    ? projectsData.filter((p) => p.featured)
    : projectsData

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-indigo-600 dark:text-indigo-400 uppercase mb-2">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Project Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Featured Software Projects
            </h2>
            <p className="mt-2 text-base text-slate-600 dark:text-slate-400 max-w-2xl font-normal">
              Practical full-stack applications, security-focused access architectures, and educational web platforms developed during my studies.
            </p>
            <div className="w-12 h-1 bg-indigo-600 dark:bg-indigo-400 rounded-full mt-3" />
          </div>

          {/* Filter Toggle */}
          <div className="flex items-center gap-2 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl self-start sm:self-end">
            <button
              onClick={() => setFilter('all')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                filter === 'all'
                  ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-2xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              All Projects ({projectsData.length})
            </button>
            <button
              onClick={() => setFilter('featured')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                filter === 'featured'
                  ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-2xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Featured Only
            </button>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {filteredProjects.map((project: ProjectItem) => {
            const hasLiveDemo = Boolean(project.liveUrl)
            const hasGitHub = Boolean(project.githubUrl)

            return (
              <div
                key={project.id}
                className="bg-white dark:bg-[#111827] border border-slate-200/90 dark:border-slate-800 rounded-3xl p-6 sm:p-7 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Visual Preview / Architecture Mockup */}
                  <div className="mb-6 rounded-2xl overflow-hidden shadow-2xs">
                    {project.previewType === 'trustguard' && <TrustGuardVisual />}
                    {project.previewType === 'creativeminds' && <CreativeMindsVisual />}
                    {project.previewType === 'experiments' && <ExperimentsVisual />}
                  </div>

                  {/* Project Category & Title */}
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60 px-2.5 py-0.5 rounded-full border border-amber-200/60 dark:border-amber-800/40">
                        <Sparkles className="w-3 h-3" />
                        Featured
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-3">
                    {project.fullTitle}
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Simulated prototype note if present */}
                  {project.simulatedNote && (
                    <div className="mb-5 p-3 rounded-xl bg-amber-50/70 dark:bg-amber-950/20 border border-amber-200/80 dark:border-amber-900/40 text-[11px] text-amber-800 dark:text-amber-300 flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                      <span>{project.simulatedNote}</span>
                    </div>
                  )}

                  {/* Features List */}
                  <div className="mb-6">
                    <h4 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2.5">
                      Key Highlights & Implemented Features:
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 dark:text-slate-300">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-indigo-500 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer: Tech Tags and Action Buttons */}
                <div className="pt-5 border-t border-slate-100 dark:border-slate-800 mt-auto">
                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links / Action Buttons */}
                  <div className="flex flex-wrap items-center gap-3">
                    {hasLiveDemo && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-semibold text-xs shadow-2xs transition-all focus:outline-hidden focus-visible:ring-2 focus-visible:ring-indigo-500"
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}

                    {hasGitHub && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold text-xs border border-slate-200 dark:border-slate-700 transition-all focus:outline-hidden focus-visible:ring-2 focus-visible:ring-indigo-500"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>Repository</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
