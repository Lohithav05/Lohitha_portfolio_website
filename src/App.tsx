import { ThemeProvider } from './context/ThemeContext'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { LearningJourney } from './components/LearningJourney'
import { Projects } from './components/Projects'
import { EducationExperience } from './components/EducationExperience'
import { Leadership } from './components/Leadership'
import { HowIWork } from './components/HowIWork'
import { BeyondTheCode } from './components/BeyondTheCode'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { BackToTop } from './components/BackToTop'

export function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-[#0b0f19] dark:text-slate-100 flex flex-col selection:bg-indigo-500/20 selection:text-indigo-600 dark:selection:bg-indigo-500/30 dark:selection:text-indigo-300">
        {/* Navigation Bar */}
        <Navbar />

        {/* Main Content Sections */}
        <main className="flex-1">
          <Hero />
          <About />
          <Skills />
          <LearningJourney />
          <Projects />
          <EducationExperience />
          <Leadership />
          <HowIWork />
          <BeyondTheCode />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />

        {/* Floating Quick Action */}
        <BackToTop />
      </div>
    </ThemeProvider>
  )
}

export default App
