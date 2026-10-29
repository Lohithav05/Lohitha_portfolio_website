import { useState, type FC, type FormEvent } from 'react'
import { socialLinks, personalInfo } from '../data/portfolioData'
import { GithubIcon, LinkedinIcon, CredlyIcon } from './SocialIcons'
import {
  Mail,
  Phone,
  Send,
  CheckCircle2,
  AlertCircle,
  FileDown,
  Copy,
  Check,
} from 'lucide-react'

export const Contact: FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validate = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.name.trim()) newErrors.name = 'Please provide your name.'
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address.'
    }
    if (!formData.subject.trim()) newErrors.subject = 'Please enter a subject.'
    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message.'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long.'
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setIsSubmitting(true)

    // Compose mailto fallback link with URI encoding
    const mailtoSubject = encodeURIComponent(`[Portfolio Contact] ${formData.subject}`)
    const mailtoBody = encodeURIComponent(
      `Hello Lohitha,\n\nMy name is ${formData.name} (${formData.email}).\n\n${formData.message}\n\nBest regards,\n${formData.name}`
    )
    const mailtoUrl = `mailto:${socialLinks.email}?subject=${mailtoSubject}&body=${mailtoBody}`

    // Trigger direct mail client compose
    window.location.href = mailtoUrl

    setTimeout(() => {
      setIsSubmitting(false)
      setFormSubmitted(true)
    }, 600)
  }

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(socialLinks.email)
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2500)
  }

  return (
    <section id="contact" className="py-20 bg-slate-50/50 dark:bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-indigo-600 dark:text-indigo-400 uppercase mb-2">
            <Mail className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Let's Connect
          </h2>
          <p className="mt-2 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl font-normal">
            I'm always interested in learning, collaborating, exploring technology, and connecting with people who enjoy building meaningful things.
          </p>
          <div className="w-12 h-1 bg-indigo-600 dark:bg-indigo-400 rounded-full mt-3" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact Details & Resume Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white dark:bg-[#111827] border border-slate-200/90 dark:border-slate-800 rounded-3xl p-6 sm:p-7 shadow-xs">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                Direct Contact Information
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
                Feel free to reach out via email, phone, or professional networks.
              </p>

              <div className="space-y-4">
                {/* Email Item */}
                <div className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/60">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500 block">
                        Email Address
                      </span>
                      <a
                        href={`mailto:${socialLinks.email}`}
                        className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 break-all"
                      >
                        {socialLinks.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={copyEmailToClipboard}
                    type="button"
                    className="p-2 rounded-lg text-slate-500 hover:text-indigo-600 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                    title="Copy email to clipboard"
                    aria-label="Copy email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone Item */}
                <div className="flex items-center p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/60">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-sky-50 dark:bg-sky-950 text-sky-600 dark:text-sky-400">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500 block">
                        Telephone
                      </span>
                      <a
                        href={`tel:${socialLinks.phone.replace(/\s+/g, '')}`}
                        className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 hover:text-sky-600 dark:hover:text-sky-400"
                      >
                        {socialLinks.phone}
                      </a>
                    </div>
                  </div>
                </div>

                {/* LinkedIn Item */}
                <div className="flex items-center p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/60">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400">
                      <LinkedinIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500 block">
                        LinkedIn Profile
                      </span>
                      <a
                        href={socialLinks.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400"
                      >
                        {socialLinks.linkedinName}
                      </a>
                    </div>
                  </div>
                </div>

                {/* GitHub Item */}
                <div className="flex items-center p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/60">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200">
                      <GithubIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500 block">
                        GitHub Profile
                      </span>
                      <a
                        href={socialLinks.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400"
                      >
                        github.com/{socialLinks.githubUser}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Credly Badges Item */}
                {socialLinks.credly && (
                  <div className="flex items-center p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/60">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950 text-amber-600 dark:text-amber-400">
                        <CredlyIcon className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500 block">
                          Credly Profile
                        </span>
                        <a
                          href={socialLinks.credly}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 hover:text-amber-600 dark:hover:text-amber-400"
                        >
                          credly.com/users/{socialLinks.credlyUser}
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Resume Callout Card */}
            <div className="bg-gradient-to-br from-indigo-900 via-indigo-950 to-slate-900 text-white rounded-3xl p-6 sm:p-7 shadow-md border border-indigo-500/20">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-xl bg-indigo-500/20 text-indigo-300">
                  <FileDown className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">
                    Download Latest Resume
                  </h4>
                  <p className="text-xs text-indigo-200/80">
                    B.Tech IT &bull; CGPA 8.92/10 (through 6th sem)
                  </p>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed mb-5">
                Contains complete academic milestones, AWS Cloud Practitioner coursework, IoT internship details, and full project tech stacks.
              </p>

              <a
                href={personalInfo.resumePath}
                download="Lohitha_V_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 font-semibold text-xs sm:text-sm transition-all shadow-sm focus:outline-hidden focus-visible:ring-2 focus-visible:ring-white"
              >
                <FileDown className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-[#111827] border border-slate-200/90 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xs">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-6 font-normal">
                Fill out the form below. When submitted, it prepares and routes your message directly to my verified email inbox (<span className="font-mono text-indigo-600 dark:text-indigo-400">{socialLinks.email}</span>).
              </p>

              {formSubmitted && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200 text-xs sm:text-sm flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">Email client opened!</p>
                    <p className="text-xs text-emerald-700 dark:text-emerald-300 mt-0.5">
                      Your message has been composed in your default mail app addressed to {socialLinks.email}. Click send in your mail client to complete delivery.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                {/* Name Field */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5"
                  >
                    Your Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Johnson"
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm bg-slate-50/50 dark:bg-slate-800/50 text-slate-900 dark:text-white focus:outline-hidden focus:ring-2 transition-all ${
                      errors.name
                        ? 'border-rose-400 focus:ring-rose-400'
                        : 'border-slate-200 dark:border-slate-700 focus:ring-indigo-500'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-[11px] text-rose-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5"
                  >
                    Your Email <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. alex@example.com"
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm bg-slate-50/50 dark:bg-slate-800/50 text-slate-900 dark:text-white focus:outline-hidden focus:ring-2 transition-all ${
                      errors.email
                        ? 'border-rose-400 focus:ring-rose-400'
                        : 'border-slate-200 dark:border-slate-700 focus:ring-indigo-500'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-[11px] text-rose-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>

                {/* Subject Field */}
                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5"
                  >
                    Subject <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Project Inquiry / Collaboration / Cloud Tech"
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm bg-slate-50/50 dark:bg-slate-800/50 text-slate-900 dark:text-white focus:outline-hidden focus:ring-2 transition-all ${
                      errors.subject
                        ? 'border-rose-400 focus:ring-rose-400'
                        : 'border-slate-200 dark:border-slate-700 focus:ring-indigo-500'
                    }`}
                  />
                  {errors.subject && (
                    <p className="text-[11px] text-rose-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.subject}</span>
                    </p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5"
                  >
                    Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your note or inquiry here..."
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm bg-slate-50/50 dark:bg-slate-800/50 text-slate-900 dark:text-white focus:outline-hidden focus:ring-2 transition-all resize-y ${
                      errors.message
                        ? 'border-rose-400 focus:ring-rose-400'
                        : 'border-slate-200 dark:border-slate-700 focus:ring-indigo-500'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-[11px] text-rose-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-semibold text-sm shadow-sm transition-all focus:outline-hidden focus-visible:ring-2 focus-visible:ring-indigo-500 disabled:opacity-70 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Preparing Email...' : 'Send Message'}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
