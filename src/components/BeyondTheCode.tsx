import type { FC } from 'react'
import { booksList, artGalleryItems, socialLinks } from '../data/portfolioData'
import { InstagramIcon } from './SocialIcons'
import {
  BookOpen,
  Palette,
  Music,
  Sparkles,
  ExternalLink,
} from 'lucide-react'

// Tasteful Original SVG Illustrations for Artwork placeholders
const MandalaSvg: FC = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full text-indigo-500/80 p-6" fill="none" stroke="currentColor">
    <circle cx="50" cy="50" r="45" strokeWidth="1" strokeDasharray="2 2" />
    <circle cx="50" cy="50" r="35" strokeWidth="1.2" />
    <circle cx="50" cy="50" r="25" strokeWidth="1" strokeDasharray="3 3" />
    <circle cx="50" cy="50" r="15" strokeWidth="1.5" />
    <circle cx="50" cy="50" r="5" strokeWidth="2" />
    {/* 8-fold petals */}
    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
      <g key={i} transform={`rotate(${angle} 50 50)`}>
        <path d="M50 15 C55 25, 55 35, 50 45 C45 35, 45 25, 50 15 Z" strokeWidth="1" />
        <circle cx="50" cy="20" r="2" fill="currentColor" opacity="0.6" />
      </g>
    ))}
  </svg>
)

const SketchSvg: FC = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full text-sky-500/80 p-6" fill="none" stroke="currentColor">
    <rect x="20" y="15" width="60" height="70" rx="4" strokeWidth="1.5" />
    <line x1="28" y1="30" x2="72" y2="30" strokeWidth="1" strokeDasharray="3 3" />
    <line x1="28" y1="45" x2="65" y2="45" strokeWidth="1" strokeDasharray="3 3" />
    <line x1="28" y1="60" x2="55" y2="60" strokeWidth="1" strokeDasharray="3 3" />
    <path d="M40 75 L75 40 L80 45 L45 80 Z" strokeWidth="1.2" fill="currentColor" fillOpacity="0.1" />
    <path d="M38 77 L42 79 L40 75 Z" fill="currentColor" />
  </svg>
)

const PaintingSvg: FC = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full text-amber-500/80 p-6" fill="none" stroke="currentColor">
    <path
      d="M20 50 C20 30, 35 20, 55 20 C75 20, 85 35, 80 60 C75 75, 60 85, 40 80 C30 78, 20 70, 20 50 Z"
      strokeWidth="1.5"
    />
    <circle cx="38" cy="35" r="4" fill="currentColor" opacity="0.7" />
    <circle cx="58" cy="35" r="4" fill="currentColor" opacity="0.7" />
    <circle cx="70" cy="50" r="4" fill="currentColor" opacity="0.7" />
    <circle cx="48" cy="65" r="5" fill="none" strokeWidth="1.5" />
  </svg>
)

export const BeyondTheCode: FC = () => {
  return (
    <section id="beyond" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-indigo-600 dark:text-indigo-400 uppercase mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Creative Identity</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Beyond the Code
          </h2>
          <p className="mt-2 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl font-normal">
            Technology fuels my curiosity. Creativity keeps me inspired.
          </p>
          <div className="w-12 h-1 bg-indigo-600 dark:bg-indigo-400 rounded-full mt-3" />
        </div>

        {/* 4 Themed Subsections */}
        <div className="space-y-16">
          {/* Subsection A: Books and Reading Shelf */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Books & Reading
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Mindset, habits, financial literacy, and evocative storytelling
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
              {booksList.map((book, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-[#111827] border border-slate-200/90 dark:border-slate-800 rounded-2xl p-5 shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between group"
                >
                  <div>
                    {/* Book spine decorative indicator */}
                    <div className="w-8 h-1.5 bg-indigo-500 rounded-full mb-4 group-hover:w-12 transition-all" />

                    <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 dark:text-slate-500 block mb-1">
                      {book.category}
                    </span>

                    <h4 className="text-base font-bold text-slate-900 dark:text-white tracking-tight mb-1">
                      {book.title}
                    </h4>

                    <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 mb-3">
                      by {book.author}
                    </p>

                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed italic">
                      "{book.takeaway}"
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800 mt-4 text-[10px] text-slate-400">
                    <span>Personal Reading Shelf</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Subsection B: Art & Creativity Gallery */}
          <div>
            <div className="flex items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-purple-50 dark:bg-purple-950 text-purple-600 dark:text-purple-400">
                  <Palette className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    Art & Creativity
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Drawing, painting, and intricate mandala art
                  </p>
                </div>
              </div>

              <span className="text-[11px] text-slate-500 dark:text-slate-400 font-mono hidden sm:inline-block">
                Original Art Gallery Space
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {artGalleryItems.map((art) => (
                <div
                  key={art.id}
                  className="bg-white dark:bg-[#111827] border border-slate-200/90 dark:border-slate-800 rounded-3xl p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                >
                  {/* Artwork Preview Card */}
                  <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-slate-100 to-indigo-50/50 dark:from-slate-800/80 dark:to-indigo-950/30 border border-slate-200/60 dark:border-slate-700/60 flex items-center justify-center overflow-hidden mb-5">
                    {art.id === 'mandala-1' && <MandalaSvg />}
                    {art.id === 'drawing-1' && <SketchSvg />}
                    {art.id === 'painting-1' && <PaintingSvg />}
                  </div>

                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400 block mb-1">
                      {art.medium}
                    </span>
                    <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                      {art.title}
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {art.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800 mt-4 text-[11px] text-slate-400 flex items-center justify-between">
                    <span>Creative Medium</span>
                    <span className="text-indigo-500">Customizable Gallery</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Subsections C & D: Music & Dance + Personal Development */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Subsection C: Music and Dance */}
            <div className="bg-white dark:bg-[#111827] border border-slate-200/90 dark:border-slate-800 rounded-3xl p-7 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3.5 mb-5 pb-4 border-b border-slate-100 dark:border-slate-800">
                  <div className="p-3 rounded-2xl bg-rose-50 dark:bg-rose-950/70 text-rose-600 dark:text-rose-400">
                    <Music className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      Music & Dance
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Personal expression, singing, and rhythm
                    </p>
                  </div>
                </div>

                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                  I enjoy singing and dancing as forms of authentic personal expression, balance, and joy. Music brings energy and mindfulness to my day, and I have received warm appreciation from peers and family for my singing voice.
                </p>

                <div className="p-4 rounded-2xl bg-rose-50/50 dark:bg-rose-950/20 border border-rose-100 dark:border-rose-900/30 text-xs text-slate-700 dark:text-slate-300">
                  <span className="font-semibold text-rose-700 dark:text-rose-300 block mb-1">
                    Creative Balance:
                  </span>
                  Engaging in creative arts keeps my thinking balanced, bringing intuition and mindfulness to technical problem-solving.
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 mt-6 text-[11px] text-slate-400 font-medium">
                Personal interest reflecting creativity & self-expression
              </div>
            </div>

            {/* Subsection D: Personal Development */}
            <div className="bg-white dark:bg-[#111827] border border-slate-200/90 dark:border-slate-800 rounded-3xl p-7 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3.5 mb-5 pb-4 border-b border-slate-100 dark:border-slate-800">
                  <div className="p-3 rounded-2xl bg-indigo-50 dark:bg-indigo-950/70 text-indigo-600 dark:text-indigo-400">
                    <InstagramIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      Personal Development
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Growth mindset, consistency & sharing ideas
                    </p>
                  </div>
                </div>

                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                  I maintain an Instagram page focused on self-development. It serves as a creative canvas to share reflections on discipline, reading takeaways, daily habits, and positive personal growth.
                </p>

                <div className="p-4 rounded-2xl bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-100 dark:border-indigo-900/30 text-xs text-slate-700 dark:text-slate-300">
                  <span className="font-semibold text-indigo-700 dark:text-indigo-300 block mb-1">
                    Continuous Self-Improvement:
                  </span>
                  Sharing constructive habits and quotes helps reinforce my own discipline and inspires others on their journeys.
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 mt-6 flex items-center justify-between text-xs">
                <span className="text-slate-500 dark:text-slate-400 font-medium">
                  Instagram Channel
                </span>
                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
                >
                  <span>Configurable Profile</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
