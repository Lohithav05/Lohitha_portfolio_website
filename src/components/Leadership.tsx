import React from 'react'
import { leadershipData } from '../data/portfolioData'
import { Users, Award, Sparkles, Lightbulb, CheckCircle, Shield } from 'lucide-react'

const renderLeadershipIcon = (name: string) => {
  const props = { className: 'w-5 h-5' }
  switch (name) {
    case 'Users':
      return <Users {...props} />
    case 'Award':
      return <Award {...props} />
    case 'Sparkles':
      return <Sparkles {...props} />
    case 'Lightbulb':
      return <Lightbulb {...props} />
    default:
      return <Shield {...props} />
  }
}

export const Leadership: React.FC = () => {
  return (
    <section id="leadership" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-indigo-600 dark:text-indigo-400 uppercase mb-2">
            <Users className="w-3.5 h-3.5" />
            <span>Campus Engagement</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Leadership, Collaboration & Initiative
          </h2>
          <p className="mt-2 text-base text-slate-600 dark:text-slate-400 max-w-2xl font-normal">
            Active roles in student representation, department clubs, and collaborative hackathon innovation challenges.
          </p>
          <div className="w-12 h-1 bg-indigo-600 dark:bg-indigo-400 rounded-full mt-3" />
        </div>

        {/* Leadership Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {leadershipData.map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-[#111827] border border-slate-200/90 dark:border-slate-800 rounded-3xl p-6 sm:p-7 shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="p-3 rounded-2xl bg-indigo-50 dark:bg-indigo-950/70 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-900/50">
                    {renderLeadershipIcon(item.iconName)}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-400">
                      {item.roleType}
                    </p>
                  </div>
                </div>

                <ul className="space-y-2.5 mt-5">
                  {item.highlights.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 mt-6 flex items-center justify-between text-[11px] text-slate-400 dark:text-slate-500 font-medium">
                <span>Manakula Vinayagar Institute of Technology</span>
                <span className="font-mono text-indigo-500 dark:text-indigo-400">Student Initiative</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
