import React from 'react'
import { workQualities } from '../data/portfolioData'
import {
  CheckCircle2,
  FolderKanban,
  Clock,
  HeartHandshake,
  Users2,
  Compass,
  Palette,
  ShieldCheck,
  Check,
} from 'lucide-react'

const renderQualityIcon = (name: string) => {
  const props = { className: 'w-5 h-5' }
  switch (name) {
    case 'CheckCircle2':
      return <CheckCircle2 {...props} />
    case 'FolderKanban':
      return <FolderKanban {...props} />
    case 'Clock':
      return <Clock {...props} />
    case 'HeartHandshake':
      return <HeartHandshake {...props} />
    case 'Users2':
      return <Users2 {...props} />
    case 'Compass':
      return <Compass {...props} />
    case 'Palette':
      return <Palette {...props} />
    case 'ShieldCheck':
      return <ShieldCheck {...props} />
    default:
      return <Check {...props} />
  }
}

export const HowIWork: React.FC = () => {
  return (
    <section id="how-i-work" className="py-20 bg-slate-50/50 dark:bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-indigo-600 dark:text-indigo-400 uppercase mb-2">
            <HeartHandshake className="w-3.5 h-3.5" />
            <span>Work Ethic & Values</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            How I Work & Collaborate
          </h2>
          <p className="mt-2 text-base text-slate-600 dark:text-slate-400 max-w-2xl font-normal">
            Grounding values that shape how I approach student responsibilities, technical tasks, teamwork, and continuous personal improvement.
          </p>
          <div className="w-12 h-1 bg-indigo-600 dark:bg-indigo-400 rounded-full mt-3" />
        </div>

        {/* Qualities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {workQualities.map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-[#111827] border border-slate-200/90 dark:border-slate-800 rounded-2xl p-5 shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between"
            >
              <div>
                <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 w-fit mb-4">
                  {renderQualityIcon(item.iconName)}
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">
                  {item.title}
                </h3>

                <p className="text-[11px] font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-2.5">
                  {item.tagline}
                </p>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 mt-4 flex items-center gap-1 text-[10px] text-slate-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>Core Working Principle</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
