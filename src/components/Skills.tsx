import type { FC } from 'react'
import { skillCategories } from '../data/portfolioData'
import { GithubIcon, FigmaIcon } from './SocialIcons'
import {
  Terminal,
  FileCode,
  Palette,
  Database,
  Layers,
  Cloud,
  Box,
  GitBranch,
  Cpu,
  Code,
  Server,
  Radio,
  Key,
  Brain,
  ShieldAlert,
  CloudRain,
  Workflow,
  Sparkles,
  Shield,
  CheckCircle2,
  HelpCircle,
} from 'lucide-react'

// Helper to render matching icon
const renderSkillIcon = (iconName?: string) => {
  const iconProps = { className: 'w-4 h-4' }
  switch (iconName) {
    case 'Terminal':
      return <Terminal {...iconProps} />
    case 'FileCode':
      return <FileCode {...iconProps} />
    case 'Palette':
      return <Palette {...iconProps} />
    case 'Database':
      return <Database {...iconProps} />
    case 'Layers':
      return <Layers {...iconProps} />
    case 'Cloud':
      return <Cloud {...iconProps} />
    case 'Box':
      return <Box {...iconProps} />
    case 'GitBranch':
      return <GitBranch {...iconProps} />
    case 'Github':
      return <GithubIcon {...iconProps} />
    case 'Cpu':
      return <Cpu {...iconProps} />
    case 'Figma':
      return <FigmaIcon {...iconProps} />
    case 'Code':
      return <Code {...iconProps} />
    case 'Server':
      return <Server {...iconProps} />
    case 'Radio':
      return <Radio {...iconProps} />
    case 'Key':
      return <Key {...iconProps} />
    case 'Brain':
      return <Brain {...iconProps} />
    case 'ShieldAlert':
      return <ShieldAlert {...iconProps} />
    case 'CloudRain':
      return <CloudRain {...iconProps} />
    case 'Workflow':
      return <Workflow {...iconProps} />
    case 'Sparkles':
      return <Sparkles {...iconProps} />
    case 'Shield':
      return <Shield {...iconProps} />
    default:
      return <CheckCircle2 {...iconProps} />
  }
}

export const Skills: FC = () => {
  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-indigo-600 dark:text-indigo-400 uppercase mb-2">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Technical Skills & Toolkit
          </h2>
          <p className="mt-2 text-base text-slate-600 dark:text-slate-400 max-w-2xl">
            A transparent overview of core programming languages, web technologies, developer tools, hands-on project implementations, and active exploration areas.
          </p>
          <div className="w-12 h-1 bg-indigo-600 dark:bg-indigo-400 rounded-full mt-3" />
        </div>

        {/* Legend / Clarity Callout */}
        <div className="mb-10 p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 text-xs sm:text-sm text-slate-600 dark:text-slate-400 flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-1.5 font-medium text-slate-800 dark:text-slate-200">
            <HelpCircle className="w-4 h-4 text-indigo-500" />
            <span>Skill Classification:</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-indigo-500"></span>
            <span>Core Practical Skills</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
            <span>Project-Tested Tech</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
            <span>Active Learning & Exploration</span>
          </div>
        </div>

        {/* Grid of Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => {
            const isExploreCategory = category.categoryCode === 'CATEGORY F'
            const isProjectCategory = category.categoryCode === 'CATEGORY E'
            const isCloudCategory = category.categoryCode === 'CATEGORY D'

            return (
              <div
                key={category.categoryCode}
                className={`rounded-2xl p-6 border transition-all duration-300 flex flex-col justify-between ${
                  isExploreCategory
                    ? 'bg-amber-50/30 dark:bg-amber-950/15 border-amber-200/70 dark:border-amber-800/40 hover:border-amber-300'
                    : isCloudCategory
                    ? 'bg-indigo-50/30 dark:bg-indigo-950/15 border-indigo-200/70 dark:border-indigo-800/40 hover:border-indigo-300'
                    : isProjectCategory
                    ? 'bg-emerald-50/20 dark:bg-emerald-950/15 border-emerald-200/70 dark:border-emerald-800/40 hover:border-emerald-300'
                    : 'bg-white dark:bg-[#111827] border-slate-200/80 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                } shadow-2xs hover:shadow-xs`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[10px] font-mono tracking-wider font-bold uppercase px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                      {category.categoryCode}
                    </span>
                    {isExploreCategory && (
                      <span className="text-[10px] font-semibold text-amber-700 dark:text-amber-400 bg-amber-100/60 dark:bg-amber-950/60 px-2 py-0.5 rounded-full">
                        Roadmap Focus
                      </span>
                    )}
                    {isCloudCategory && (
                      <span className="text-[10px] font-semibold text-indigo-700 dark:text-indigo-400 bg-indigo-100/60 dark:bg-indigo-950/60 px-2 py-0.5 rounded-full">
                        Primary Passion
                      </span>
                    )}
                  </div>

                  <h3 className="text-base font-bold text-slate-900 dark:text-white tracking-tight mb-1.5">
                    {category.title}
                  </h3>

                  {category.description && (
                    <p className="text-xs text-slate-500 dark:text-slate-400 mb-5 leading-relaxed">
                      {category.description}
                    </p>
                  )}
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
                        skill.isPrimary
                          ? 'bg-indigo-600 text-white border-indigo-600 shadow-2xs shadow-indigo-500/20'
                          : isExploreCategory
                          ? 'bg-amber-50 dark:bg-amber-950/40 text-amber-900 dark:text-amber-200 border-amber-200/80 dark:border-amber-800/60'
                          : isProjectCategory
                          ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200 border-emerald-200/80 dark:border-emerald-800/60'
                          : 'bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border-slate-200/80 dark:border-slate-700'
                      }`}
                    >
                      <span
                        className={
                          skill.isPrimary
                            ? 'text-white'
                            : isExploreCategory
                            ? 'text-amber-600 dark:text-amber-400'
                            : isProjectCategory
                            ? 'text-emerald-600 dark:text-emerald-400'
                            : 'text-indigo-600 dark:text-indigo-400'
                        }
                      >
                        {renderSkillIcon(skill.iconName)}
                      </span>
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
