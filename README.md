# Lohitha V — Personal Portfolio Website

A modern, responsive, high-performance personal portfolio website for **Lohitha V**, final-year Information Technology student at Manakula Vinayagar Institute of Technology, Puducherry.

Designed and engineered with an authentic, editorial design system highlighting a primary passion for **Cloud Computing & DevOps**, exploratory interests in **Artificial Intelligence & Cybersecurity**, demonstrated academic and full-stack projects, student leadership, and creative pursuits beyond technology.

---

## 🌟 Highlights & Features

- **⚡ Modern Tech Stack**: React 19, TypeScript, Vite, Tailwind CSS v4, Lucide Icons, and semantic accessible HTML.
- **🎨 Custom Editorial Design System**: Warm light theme and deep dark theme with persistent state in `localStorage` and system theme detection.
- **📱 Fully Responsive**: Flawless layout across smartphones, tablets, laptops, and ultra-wide desktop monitors.
- **🛡️ Authentic & Accurate**: Presents real academic standing (CGPA 8.92/10 through 6th semester), verified courseworks, real internships, and student leadership without inflated claims.
- **🚀 Featured Projects**:
  - **TrustGuard**: AI-Driven Dynamic Zero Trust Access Control for Land Records Management (React, FastAPI, Node.js, MongoDB, scikit-learn Isolation Forest, with live demo on Render).
  - **CreativeMinds**: Anytime Learning and Course Registration System.
  - **Technical Learning & Experiments**: Sandboxes for AWS, Docker, Linux, and automation.
- **🎖️ Credly Verified Badges**: Integrated direct link to your official Credly profile (`https://www.credly.com/users/lohitha-vengatesan`) across the Certifications, Contact, and Footer sections.
- **📄 Verified Resume Integration**: Direct download button linked to `public/resume.pdf`.
- **📸 Authentic Portrait Frame**: Displays actual photograph from `public/images/lohitha.jpg` with restrained technical badges.
- **✉️ Functional Contact Section**: Client-side validation with direct mailto fallback addressed to `lohithav05@gmail.com` and one-click copy button.
- **🎨 Beyond the Code**: Curated book reading shelf, art gallery (Mandala, sketches, paintings), music & dance reflection, and self-development Instagram channel.

---

## 📂 Project Structure

```
portfolio/
├── public/
│   ├── favicon.svg             # Monogram branded vector favicon
│   ├── resume.pdf              # Verified resume (through 6th semester)
│   └── images/
│       └── lohitha.jpg         # Authentic professional portrait photograph
├── src/
│   ├── components/
│   │   ├── Navbar.tsx          # Sticky responsive navigation with mobile drawer
│   │   ├── Hero.tsx            # Two-column hero with portrait & tech pills
│   │   ├── About.tsx           # Editorial narrative & profile summary box
│   │   ├── Skills.tsx          # Categorized technical toolkit (A through F)
│   │   ├── LearningJourney.tsx # Roadmap cards for Cloud/DevOps, AI, and Security
│   │   ├── Projects.tsx        # Dynamic project cards with visual previews & links
│   │   ├── EducationExperience.tsx # Academic timeline, internships, & certifications
│   │   ├── Leadership.tsx      # Student representative & club involvement
│   │   ├── HowIWork.tsx        # 8 core work ethic principles
│   │   ├── BeyondTheCode.tsx   # Books shelf, art gallery, music, and development
│   │   ├── Contact.tsx         # Contact form, direct details, & resume download
│   │   ├── Footer.tsx          # Minimal footer with shortcuts & dynamic copyright
│   │   ├── SocialIcons.tsx     # Custom SVG icons (GitHub, LinkedIn, Instagram, Figma)
│   │   └── BackToTop.tsx       # Floating back-to-top button
│   ├── context/
│   │   └── ThemeContext.tsx    # Light/Dark mode state with localStorage persistence
│   ├── data/
│   │   └── portfolioData.ts    # Centralized portfolio data (edit everything here!)
│   ├── types/
│   │   └── portfolio.ts        # TypeScript interface definitions
│   ├── App.tsx                 # Main application root
│   ├── main.tsx                # React DOM entry point
│   └── index.css               # Tailwind CSS v4 root stylesheet
├── package.json
├── tsconfig.json
├── tsconfig.app.json
└── vite.config.ts
```

---

## 🚀 Running Locally

### Prerequisites
- Node.js (v18 or higher recommended; v20/v24 supported)
- npm (v9 or higher)

### Installation & Startup

1. **Clone or open the directory**:
   ```bash
   cd portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

4. **Production Build & Test**:
   ```bash
   npm run build
   npm run preview
   ```
   The production build is generated into `dist/`.

---

## 🛠️ How to Customize & Maintain

All information is stored in **`src/data/portfolioData.ts`**, so you never need to touch the layout code to update your details!

### 1. Replacing Your Profile Photo
- Replace the image at `public/images/lohitha.jpg` with any new high-resolution photo.
- Keep the filename `lohitha.jpg` or update the `photoPath` in `src/data/portfolioData.ts`.

### 2. Updating Your Resume PDF
- Whenever you receive updated grades or semester results, drop your new PDF into:
  `public/resume.pdf`
- The navigation button, hero download button, and contact section download card will automatically link to the new PDF.

### 3. Updating Projects or Adding New Projects
Open `src/data/portfolioData.ts` and edit or append to the `projectsData` array:
```typescript
{
  id: 'new-project',
  title: 'Project Name',
  fullTitle: 'Complete Formal Project Title',
  category: 'Cloud / DevOps / Web',
  description: 'Detailed description of your work...',
  features: ['Feature 1', 'Feature 2'],
  tags: ['AWS', 'Docker', 'React', 'Python'],
  liveUrl: 'https://your-demo-url.com',    // Leave empty or omit if not yet hosted
  githubUrl: 'https://github.com/Lohithav05/repo', // Leave empty if private
  previewType: 'experiments',
  featured: true,
}
```
*Note: If `liveUrl` or `githubUrl` is omitted or empty, the button will automatically hide itself to avoid broken links.*

### 4. Updating Social & Contact Links
In `src/data/portfolioData.ts`:
```typescript
export const socialLinks: SocialLinks = {
  email: 'lohithav05@gmail.com',
  phone: '+91 8098508387',
  github: 'https://github.com/Lohithav05',
  githubUser: 'Lohithav05',
  linkedin: 'https://www.linkedin.com/in/lohitha-vengatesan',
  linkedinName: 'Lohitha Vengatesan',
  instagram: 'https://www.instagram.com/your_handle', // Add your actual link here
  instagramHandle: '@your_handle',
}
```

### 5. Adding Real Artwork or Project Screenshots
- Drop your artwork images into `public/images/art/` (e.g. `mandala.jpg`, `sketch.jpg`).
- In `src/data/portfolioData.ts`, reference the path in `artGalleryItems`:
  ```typescript
  {
    id: 'mandala-1',
    title: 'Harmonic Mandala Flow',
    medium: 'Mandala & Fine Line Art',
    description: 'Intricate symmetry and circular patterns...',
    imagePath: '/images/art/mandala.jpg', // When provided
    themeColor: 'from-purple-500/20 to-indigo-500/20',
  }
  ```

---

## 🌐 Deploying to the Web

### Deploying via Vercel (Recommended — Free & 1-Click)
1. Push this project to your GitHub repository (`github.com/Lohithav05/portfolio`).
2. Go to [Vercel](https://vercel.com) and log in with GitHub.
3. Click **"New Project"** and select your `portfolio` repository.
4. Framework preset will automatically detect **Vite**.
5. Click **"Deploy"**. Your website will be live in ~30 seconds with automated HTTPS and global CDN.

### Deploying via GitHub Pages
1. In `vite.config.ts`, set `base: '/portfolio/'` (matching your repository name).
2. Run `npm run build`.
3. Push the `dist` folder to your `gh-pages` branch or configure GitHub Actions.

---

## 📄 License & Attribution

Designed and developed for **Lohitha V**. All personal content, project descriptions, and credentials belong to Lohitha V.
