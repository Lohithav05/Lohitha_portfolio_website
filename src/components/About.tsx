import React from 'react'
import { aboutContent } from '../data/portfolioData'
import { GraduationCap, Building2, Calendar, Target, Compass, Sparkles, BookOpen, Quote } from 'lucide-react'

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-50/50 dark:bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-indigo-600 dark:text-indigo-400 uppercase mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Personal Profile</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            {aboutContent.title}
          </h2>
          <div className="w-12 h-1 bg-indigo-600 dark:bg-indigo-400 rounded-full mt-3" />
        </div>

        {/* Editorial Layout: Left Narrative & Right Profile Summary */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Narrative Content */}
          <div className="lg:col-span-7 space-y-5 text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
            <div className="relative pl-6 border-l-2 border-indigo-500/50 dark:border-indigo-400/50 italic text-slate-800 dark:text-slate-200 font-serif text-lg sm:text-xl">
              <Quote className="w-4 h-4 text-indigo-500 absolute -top-1 left-0 -translate-x-1/2 bg-slate-50 dark:bg-slate-900" />
              "{aboutContent.paragraphs[0]}"
            </div>

            <p>{aboutContent.paragraphs[1]}</p>

            <p className="bg-indigo-50/60 dark:bg-indigo-950/30 p-4 rounded-xl border border-indigo-100 dark:border-indigo-900/40 text-slate-800 dark:text-slate-200">
              {aboutContent.paragraphs[2]}
            </p>

            <p>{aboutContent.paragraphs[3]}</p>

            <p className="font-medium text-slate-900 dark:text-white pt-2">
              {aboutContent.paragraphs[4]}
            </p>
          </div>

          {/* Compact Profile Summary Box */}
          <div className="lg:col-span-5">
            <div className="bg-white dark:bg-slate-850 dark:bg-[#111827] border border-slate-200/90 dark:border-slate-800 rounded-2xl p-6 sm:p-7 shadow-xs">
              <div className="flex items-center gap-2.5 pb-5 border-b border-slate-100 dark:border-slate-800">
                <div className="p-2 rounded-lg bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    Quick Profile Summary
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Academic and technical overview
                  </p>
                </div>
              </div>

              <dl className="mt-5 space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <dt className="text-xs font-semibold text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                    <GraduationCap className="w-3.5 h-3.5" />
                    Degree
                  </dt>
                  <dd className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-slate-100 text-right">
                    B.Tech Information Technology
                  </dd>
                </div>

                <div className="flex items-start justify-between gap-4 pt-3 border-t border-slate-100 dark:border-slate-800/60">
                  <dt className="text-xs font-semibold text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5" />
                    Institution
                  </dt>
                  <dd className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-slate-100 text-right max-w-[240px]">
                    Manakula Vinayagar Institute of Technology
                  </dd>
                </div>

                <div className="flex items-start justify-between gap-4 pt-3 border-t border-slate-100 dark:border-slate-800/60">
                  <dt className="text-xs font-semibold text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    Graduation Year
                  </dt>
                  <dd className="text-xs sm:text-sm font-semibold text-indigo-600 dark:text-indigo-400 text-right">
                    2027
                  </dd>
                </div>

                <div className="flex items-start justify-between gap-4 pt-3 border-t border-slate-100 dark:border-slate-800/60">
                  <dt className="text-xs font-semibold text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                    <Target className="w-3.5 h-3.5" />
                    Primary Interest
                  </dt>
                  <dd className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white text-right">
                    <span className="px-2 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300">
                      Cloud Computing & DevOps
                    </span>
                  </dd>
                </div>

                <div className="flex items-start justify-between gap-4 pt-3 border-t border-slate-100 dark:border-slate-800/60">
                  <dt className="text-xs font-semibold text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                    <Compass className="w-3.5 h-3.5" />
                    Additional Interests
                  </dt>
                  <dd className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 text-right">
                    Artificial Intelligence & Cybersecurity
                  </dd>
                </div>

                <div className="flex items-start justify-between gap-4 pt-3 border-t border-slate-100 dark:border-slate-800/60">
                  <dt className="text-xs font-semibold text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5" />
                    Academic Standing
                  </dt>
                  <dd className="text-xs sm:text-sm font-semibold text-emerald-600 dark:text-emerald-400 text-right">
                    CGPA 8.92 / 10 <span className="text-[10px] text-slate-400 block font-normal">(through 6th semester)</span>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
