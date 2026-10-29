import type { FC } from 'react'
import { educationTimeline, experienceTimeline, certificationsData, socialLinks } from '../data/portfolioData'
import { CredlyIcon } from './SocialIcons'
import {
  GraduationCap,
  Briefcase,
  Award,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react'

export const EducationExperience: FC = () => {
  return (
    <section id="education-experience" className="py-20 bg-slate-50/50 dark:bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-indigo-600 dark:text-indigo-400 uppercase mb-2">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic & Practical Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Education, Internships & Certifications
          </h2>
          <p className="mt-2 text-base text-slate-600 dark:text-slate-400 max-w-2xl font-normal">
            A chronological timeline of academic achievements, technical internships, and recognized training courses.
          </p>
          <div className="w-12 h-1 bg-indigo-600 dark:bg-indigo-400 rounded-full mt-3" />
        </div>

        {/* 2-Column Grid: Education & Experience */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          {/* Column 1: Education */}
          <div className="bg-white dark:bg-[#111827] border border-slate-200/90 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xs">
            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-100 dark:border-slate-800">
              <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Academic Education
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Degree and schooling records
                </p>
              </div>
            </div>

            <div className="space-y-8 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-slate-200 dark:before:bg-slate-800">
              {educationTimeline.map((item, idx) => (
                <div key={idx} className="relative pl-10">
                  {/* Timeline dot */}
                  <div className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full bg-white dark:bg-slate-900 border-2 border-indigo-600 dark:border-indigo-400 -translate-x-1/2" />

                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                    <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 font-mono">
                      {item.period}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                      {item.scoreLabel}: {item.scoreValue}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-slate-900 dark:text-white">
                    {item.degree}
                  </h4>

                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                    {item.institution}
                  </p>

                  {item.description && (
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                      {item.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Internships & Hands-on Training */}
          <div className="bg-white dark:bg-[#111827] border border-slate-200/90 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xs">
            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-100 dark:border-slate-800">
              <div className="p-2.5 rounded-xl bg-sky-50 dark:bg-sky-950 text-sky-600 dark:text-sky-400">
                <Briefcase className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Internships & Training
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Practical industry and program exposure
                </p>
              </div>
            </div>

            <div className="space-y-8 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-slate-200 dark:before:bg-slate-800">
              {experienceTimeline.map((item, idx) => (
                <div key={idx} className="relative pl-10">
                  {/* Timeline dot */}
                  <div className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full bg-white dark:bg-slate-900 border-2 border-sky-600 dark:border-sky-400 -translate-x-1/2" />

                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                    <span className="text-xs font-bold text-sky-600 dark:text-sky-400 font-mono">
                      {item.period}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-sky-50 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800">
                      {item.type}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-slate-900 dark:text-white">
                    {item.role}
                  </h4>

                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                    {item.organization}
                  </p>

                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-2.5 leading-relaxed">
                    "{item.description}"
                  </p>

                  {item.skills && (
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {item.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications Section */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Coursework & Certifications
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Official certificates and completed technical tracks from my resume
                </p>
              </div>
            </div>

            {socialLinks.credly && (
              <a
                href={socialLinks.credly}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-700 dark:text-amber-300 border border-amber-500/30 text-xs font-semibold transition-all self-start sm:self-auto shadow-2xs hover:shadow-xs"
              >
                <CredlyIcon className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                <span>View Verified Badges on Credly</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {certificationsData.map((cert, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-[#111827] border border-slate-200/90 dark:border-slate-800 rounded-2xl p-5 shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                      {cert.type}
                    </span>
                    <span className="text-[11px] font-mono font-medium text-slate-500 dark:text-slate-400">
                      {cert.date}
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-slate-900 dark:text-white tracking-tight mb-1">
                    {cert.title}
                  </h4>

                  <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
                    {cert.issuer}
                  </p>

                  {cert.notes && (
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                      {cert.notes}
                    </p>
                  )}
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 mt-4 flex items-center justify-between text-[11px]">
                  <span className="text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Resume Verified
                  </span>
                  {socialLinks.credly && (
                    <a
                      href={socialLinks.credly}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-600 dark:text-amber-400 hover:underline flex items-center gap-1 font-mono text-[10px]"
                    >
                      Credly &rarr;
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
