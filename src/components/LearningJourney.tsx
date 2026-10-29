import type { FC } from 'react'
import { learningRoadmap } from '../data/portfolioData'
import { Cloud, Brain, ShieldCheck, Compass, Sparkles } from 'lucide-react'

export const LearningJourney: FC = () => {
  return (
    <section id="journey" className="py-20 bg-slate-50/60 dark:bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-indigo-600 dark:text-indigo-400 uppercase mb-2">
            <Compass className="w-3.5 h-3.5" />
            <span>Growth & Trajectory</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            My Learning Journey
          </h2>
          <p className="mt-2 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl font-normal">
            Curious by Nature. Building Skills with Purpose.
          </p>
          <div className="w-12 h-1 bg-indigo-600 dark:bg-indigo-400 rounded-full mt-3" />
        </div>

        {/* 3 Distinct Learning Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {learningRoadmap.map((card) => {
            const isPrimary = card.badgeVariant === 'primary'
            const isAI = card.badgeVariant === 'explore'

            return (
              <div
                key={card.id}
                className={`relative rounded-3xl p-7 border transition-all duration-300 flex flex-col justify-between ${
                  isPrimary
                    ? 'bg-gradient-to-b from-white via-indigo-50/20 to-white dark:from-[#111827] dark:via-indigo-950/20 dark:to-[#111827] border-indigo-300/80 dark:border-indigo-800 shadow-md shadow-indigo-500/5 ring-1 ring-indigo-500/20'
                    : 'bg-white dark:bg-[#111827] border-slate-200/90 dark:border-slate-800 shadow-xs hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                {/* Top Badge & Header */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
                        isPrimary
                          ? 'bg-indigo-600 text-white shadow-2xs'
                          : isAI
                          ? 'bg-purple-100 text-purple-700 dark:bg-purple-950/60 dark:text-purple-300 border border-purple-200 dark:border-purple-800'
                          : 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800'
                      }`}
                    >
                      {card.label}
                    </span>

                    <div
                      className={`p-2 rounded-xl ${
                        isPrimary
                          ? 'bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400'
                          : isAI
                          ? 'bg-purple-50 dark:bg-purple-950 text-purple-600 dark:text-purple-400'
                          : 'bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400'
                      }`}
                    >
                      {isPrimary && <Cloud className="w-5 h-5" />}
                      {isAI && <Brain className="w-5 h-5" />}
                      {!isPrimary && !isAI && <ShieldCheck className="w-5 h-5" />}
                    </div>
                  </div>

                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-3">
                    {card.title}
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6 font-normal">
                    {card.description}
                  </p>
                </div>

                {/* Topics Roadmap List */}
                <div className="pt-5 border-t border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-3.5">
                    <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
                    <span>Topics I Want to Explore</span>
                  </div>

                  <ul className="space-y-2.5">
                    {card.topics.map((topic, index) => (
                      <li key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                        <span
                          className={`mt-1 flex-shrink-0 w-3.5 h-3.5 rounded-full flex items-center justify-center text-[9px] font-bold ${
                            isPrimary
                              ? 'bg-indigo-100 dark:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300'
                              : isAI
                              ? 'bg-purple-100 dark:bg-purple-900/60 text-purple-700 dark:text-purple-300'
                              : 'bg-emerald-100 dark:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300'
                          }`}
                        >
                          &bull;
                        </span>
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 pt-4 border-t border-dashed border-slate-200 dark:border-slate-800 text-[11px] text-slate-400 dark:text-slate-500 flex items-center justify-between">
                    <span>Roadmap in Progress</span>
                    <span className="font-mono text-indigo-500 dark:text-indigo-400">Practical & Purposeful</span>
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
