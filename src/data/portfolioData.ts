import type {
  ProjectItem,
  SkillCategory,
  LearningCard,
  EducationItem,
  ExperienceItem,
  CertificationItem,
  LeadershipItem,
  WorkQualityItem,
  BookItem,
  ArtGalleryItem,
  SocialLinks,
} from '../types/portfolio'

export const personalInfo = {
  name: 'Lohitha V',
  pronouns: 'She/Her',
  roleTagline: 'Information Technology Student',
  primaryPassion: 'Cloud Computing & DevOps',
  additionalInterests: 'Artificial Intelligence & Cybersecurity',
  institution: 'Manakula Vinayagar Institute of Technology, Puducherry',
  degree: 'Bachelor of Technology in Information Technology',
  period: '2023–2027',
  graduationYear: '2027',
  cgpa: '8.92 / 10',
  cgpaPeriod: 'through the 6th semester',
  statusLine: 'Learning, Building, and Growing Every Day.',
  photoPath: '/images/lohitha.jpg',
  resumePath: '/resume.pdf',
  location: 'Puducherry, India',
}

export const heroContent = {
  greeting: "HELLO, I'M LOHITHA",
  headline: 'Exploring the Cloud. Automating with DevOps. Growing Through Technology.',
  description:
    "I'm a final-year Information Technology student deeply inspired by Cloud Computing and DevOps. I enjoy exploring technology, building practical projects, and continuously learning. I'm also eager to expand my knowledge of Artificial Intelligence and Cybersecurity to understand how smarter and more secure digital systems are built.",
  statusLine: 'Learning, Building, and Growing Every Day.',
  primaryCtaText: 'Explore My Journey',
  secondaryCtaText: 'View My Projects',
  connectLinkText: "Let's Connect",
}

export const aboutContent = {
  title: 'A Little About Me',
  paragraphs: [
    "I'm Lohitha V, a final-year Information Technology student who enjoys exploring technology and discovering how digital systems work behind the scenes.",
    'Cloud Computing and DevOps particularly inspire me because they bring together software development, infrastructure, automation, deployment, and reliability. I want to understand how applications move from development to production and how systems can be made more scalable and dependable.',
    "I'm also curious about Artificial Intelligence and Cybersecurity. I see them as exciting fields to explore as I strengthen my technical foundation.",
    'Beyond technology, I enjoy reading, creating art, singing, dancing, and organizing activities. My academic projects, student involvement, and personal interests help me develop a balanced combination of technical curiosity, creativity, teamwork, and responsibility.',
    'My goal is to keep learning, build useful applications, gain practical experience, and grow into a capable technology professional.',
  ],
  summaryCards: [
    { label: 'Degree', value: 'B.Tech Information Technology' },
    { label: 'Institution', value: 'Manakula Vinayagar Institute of Technology' },
    { label: 'Graduation Year', value: '2027' },
    { label: 'Academic Standing', value: 'CGPA 8.92 / 10 (through 6th Sem)' },
    { label: 'Primary Interest', value: 'Cloud Computing & DevOps' },
    { label: 'Additional Interests', value: 'AI & Cybersecurity' },
  ],
}

export const skillCategories: SkillCategory[] = [
  {
    categoryCode: 'CATEGORY A',
    title: 'PROGRAMMING',
    description: 'Foundational programming language for automation and logic.',
    skills: [
      { name: 'Python', isPrimary: true, iconName: 'Terminal' },
    ],
  },
  {
    categoryCode: 'CATEGORY B',
    title: 'WEB DEVELOPMENT',
    description: 'Core web technologies for building responsive and accessible user interfaces.',
    skills: [
      { name: 'HTML', iconName: 'FileCode' },
      { name: 'CSS', iconName: 'Palette' },
    ],
  },
  {
    categoryCode: 'CATEGORY C',
    title: 'DATABASES',
    description: 'Relational and document databases for structured and scalable storage.',
    skills: [
      { name: 'MySQL', iconName: 'Database' },
      { name: 'MongoDB', iconName: 'Layers' },
    ],
  },
  {
    categoryCode: 'CATEGORY D',
    title: 'CLOUD AND DEVELOPMENT TOOLS',
    description: 'Cloud platform services, containerization, and developer tooling.',
    skills: [
      { name: 'AWS', isPrimary: true, iconName: 'Cloud' },
      { name: 'Docker', isPrimary: true, iconName: 'Box' },
      { name: 'Linux', isPrimary: true, iconName: 'Terminal' },
      { name: 'Git', iconName: 'GitBranch' },
      { name: 'GitHub', iconName: 'Github' },
      { name: 'Windows', iconName: 'Cpu' },
      { name: 'Figma', iconName: 'Figma' },
    ],
  },
  {
    categoryCode: 'CATEGORY E',
    title: 'TECHNOLOGIES USED IN PROJECT WORK',
    description: 'Libraries, frameworks, and algorithms implemented in hands-on academic projects.',
    skills: [
      { name: 'React', iconName: 'Code' },
      { name: 'Node.js', iconName: 'Server' },
      { name: 'Express.js', iconName: 'Radio' },
      { name: 'JWT authentication', iconName: 'Key' },
      { name: 'Python-based machine learning', iconName: 'Brain' },
      { name: 'Isolation Forest', iconName: 'ShieldAlert' },
    ],
  },
  {
    categoryCode: 'CATEGORY F',
    title: 'AREAS I WANT TO EXPLORE',
    description: 'Active learning interests guiding my technical curiosity and future coursework.',
    skills: [
      { name: 'Cloud Computing', isPrimary: true, iconName: 'CloudRain' },
      { name: 'DevOps', isPrimary: true, iconName: 'Workflow' },
      { name: 'Artificial Intelligence', iconName: 'Sparkles' },
      { name: 'Cybersecurity', iconName: 'Shield' },
    ],
  },
]

export const learningRoadmap: LearningCard[] = [
  {
    id: 'cloud-devops',
    title: 'Cloud Computing & DevOps',
    label: 'My Primary Interest',
    badgeVariant: 'primary',
    description:
      'Cloud Computing and DevOps are the fields that inspire me most. I want to understand cloud infrastructure, application deployment, automation, containers, Linux environments, and the practices that help teams deliver reliable software.',
    iconName: 'Cloud',
    topics: [
      'Cloud platforms and cloud fundamentals',
      'AWS services and deployment concepts',
      'Linux and command-line tools',
      'Docker and containerization',
      'CI/CD pipelines',
      'Infrastructure automation',
      'Monitoring and reliability',
      'Deployment workflows',
    ],
  },
  {
    id: 'ai',
    title: 'Artificial Intelligence',
    label: "An Area I'm Eager to Explore",
    badgeVariant: 'explore',
    description:
      "I'm interested in understanding how Artificial Intelligence can be used to solve practical problems and improve digital applications. I want to strengthen my foundational knowledge and develop hands-on experience.",
    iconName: 'Brain',
    topics: [
      'AI fundamentals',
      'Machine-learning concepts',
      'Practical AI applications',
      'Responsible use of AI',
      'Learning through project implementation',
    ],
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    label: 'An Area I Aspire to Learn',
    badgeVariant: 'aspire',
    description:
      "I'm interested in understanding how applications and digital systems can be protected. My project work has introduced me to access control and security-focused design, and I want to continue developing my understanding of cybersecurity.",
    iconName: 'ShieldCheck',
    topics: [
      'Authentication and authorization',
      'Application security fundamentals',
      'Access control',
      'Secure session management',
      'Zero Trust principles',
      'Security awareness',
    ],
  },
]

export const projectsData: ProjectItem[] = [
  {
    id: 'trustguard',
    title: 'TrustGuard',
    fullTitle: 'TrustGuard — AI-Driven Dynamic Zero Trust Access Control for Secure Land Records Management',
    category: 'Security-Focused Full-Stack Application',
    description:
      'TrustGuard is a web-based land records management application designed around Zero Trust principles. It combines role-based access control, dynamic trust-score evaluation, session monitoring, and machine-learning-based anomaly detection to support risk-aware access decisions.',
    features: [
      'Citizen and revenue officer roles',
      'Land record management',
      'Role-based access control (RBAC)',
      'Dynamic trust-score evaluation',
      'Session and device risk evaluation',
      'Isolation Forest anomaly detection',
      'Risk-based access decisions',
      'Simulated security scenarios',
    ],
    tags: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Python', 'FastAPI', 'scikit-learn'],
    liveUrl: 'https://trustguard-2jfi.onrender.com/',
    githubUrl: 'https://github.com/Lohithav05',
    simulatedNote: 'Simulated prototype designed for academic research and access control evaluation; does not host live government records.',
    previewType: 'trustguard',
    featured: true,
  },
  {
    id: 'creativeminds',
    title: 'CreativeMinds',
    fullTitle: 'CreativeMinds — Anytime Learning and Course Registration System',
    category: 'Web-Based Educational Platform',
    description:
      'A web application designed to help students register for courses and access course-specific learning materials through a centralized learning platform.',
    features: [
      'Student authentication and profile management',
      'Course catalog and registration',
      'Course enrollment workflow',
      'Access to course-specific study materials',
      'Self-paced learning support',
    ],
    tags: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
    previewType: 'creativeminds',
    featured: true,
  },
  {
    id: 'tech-experiments',
    title: 'Technical Learning & Experiments',
    fullTitle: 'Hands-on Experiments in Cloud, Automation, and Systems',
    category: 'Ongoing Technical Sandboxes',
    description:
      'A collection of personal learning sandboxes, automation scripts, Docker containerization practices, and system experiments as I deepen my knowledge in cloud architecture and DevOps practices.',
    features: [
      'Docker containerization workflows and Dockerfile crafting',
      'Linux command-line scripting and system administration basics',
      'AWS cloud service exploration and IAM permission configurations',
      'Explorations in API integration and automated deployments',
    ],
    tags: ['AWS', 'Docker', 'Linux', 'Shell Scripting', 'CI/CD Exploration'],
    previewType: 'experiments',
    featured: false,
  },
]

export const educationTimeline: EducationItem[] = [
  {
    degree: 'B.Tech in Information Technology',
    institution: 'Manakula Vinayagar Institute of Technology, Puducherry',
    period: '2023–2027',
    scoreLabel: 'CGPA',
    scoreValue: '8.92 / 10',
    description: 'CGPA: 8.92/10 through the sixth semester, as stated in my latest resume.',
  },
  {
    degree: 'Higher Secondary Certificate (HSC — CBSE)',
    institution: 'Aditya Vidhyashram Residential School, Puducherry',
    period: '2022–2023',
    scoreLabel: 'Percentage',
    scoreValue: '76.2%',
    description: 'Completed senior secondary schooling with a focus on core science and mathematics.',
  },
  {
    degree: 'Secondary School Certificate (SSC — CBSE)',
    institution: 'Sai Ram Vidyalaya, Ulavaikal, Puducherry',
    period: '2020–2021',
    scoreLabel: 'Percentage',
    scoreValue: '89%',
    description: 'Completed secondary schooling with academic distinction.',
  },
]

export const experienceTimeline: ExperienceItem[] = [
  {
    role: 'IoT Intern',
    organization: 'VEI Technologies Inc.',
    period: 'November 2024',
    type: 'Workshop and Internship',
    description:
      'Completed a 21-day workshop and internship focused on IoT system development and sensor integration. Developed a Drainage Level Monitoring System project and gained hands-on experience with real-time data collection, sensor interfacing, and communication protocols.',
    skills: ['IoT Systems', 'Sensor Integration', 'Data Collection', 'Hardware-Software Interfacing', 'Drainage Level Monitoring System'],
  },
  {
    role: 'AI: Transformative Learning with TechSaksham',
    organization: 'Edunet Foundation',
    period: 'February–March 2025',
    type: 'Online Internship',
    description:
      'Participated in hands-on AI training and completed an online internship focused on foundational concepts and real-world applications.',
    skills: ['AI Foundations', 'Practical Machine Learning', 'Problem Solving'],
  },
]

export const certificationsData: CertificationItem[] = [
  {
    title: 'AWS Cloud Practitioner Essentials',
    issuer: 'AWS Skill Builder',
    date: 'August 2025',
    type: 'Course',
    notes: 'Cloud concepts, security, architecture, pricing, and support models.',
  },
  {
    title: 'Introduction to MongoDB for Students',
    issuer: 'MongoDB',
    date: 'July 2024',
    type: 'Course',
    notes: 'Document databases, schema design, queries, and aggregations.',
  },
  {
    title: 'Networking Basics',
    issuer: 'Cisco',
    date: 'August 2025',
    type: 'Course',
    notes: 'Network protocols, architecture, IP addressing, and connectivity.',
  },
  {
    title: 'Introduction to Graphic Design',
    issuer: 'NPTEL',
    date: 'April 2025',
    type: 'Course',
    notes: 'Visual hierarchy, typography, composition, and digital design.',
  },
  {
    title: 'Minor Courses in AI',
    issuer: 'Academic Curriculum / Partner Programs',
    date: '2024–2025',
    type: 'Specialization Track',
    notes: 'Foundations of Data Science, Foundations of AI, and Applications of AI.',
  },
]

export const leadershipData: LeadershipItem[] = [
  {
    title: 'Class Representative',
    roleType: 'Student Leadership & Representation',
    iconName: 'Users',
    highlights: [
      'Serving as the primary communication bridge between students and faculty.',
      'Coordinating academic schedules, laboratory sessions, and department notices.',
      'Demonstrating responsibility, active listening, and dependable organization.',
      'Facilitating constructive class discussions and resolving logistical challenges.',
    ],
  },
  {
    title: 'Student Association Club Member',
    roleType: 'Campus Engagement & Event Coordination',
    iconName: 'Award',
    highlights: [
      'Active participation in student association planning and cultural events.',
      'Close collaboration with multidisciplinary student teams.',
      'Coordinating logistical arrangements and promoting student engagement.',
      'Fostering strong teamwork, peer support, and inclusive participation.',
    ],
  },
  {
    title: 'IT Department AI Tech Club Member',
    roleType: 'Technical Community & Peer Learning',
    iconName: 'Sparkles',
    highlights: [
      'Active involvement in department technical discussions and workshops.',
      'Exploring emerging topics in AI and cloud systems alongside peers.',
      'Sharing learning resources and collaborating on project brainstorming.',
      'Cultivating curiosity and a continuous learning culture.',
    ],
  },
  {
    title: 'Smart India Hackathon Internal Participation',
    roleType: 'Collaborative Problem-Solving',
    iconName: 'Lightbulb',
    highlights: [
      'Participated in internal institute hackathon selection rounds.',
      'Brainstormed technical approaches to real-world community challenges.',
      'Collaborated within a student team under tight project timeframes.',
      'Gained valuable exposure to agile problem-solving and rapid ideation.',
    ],
  },
]

export const workQualities: WorkQualityItem[] = [
  {
    title: 'Responsibility & Ownership',
    tagline: 'Reliable follow-through',
    description:
      'Takes pride in fulfilling commitments as a student leader and project teammate, ensuring tasks are carried to completion.',
    iconName: 'CheckCircle2',
  },
  {
    title: 'Organization & Structure',
    tagline: 'Clean methods and clarity',
    description:
      'Approaches academic projects, documentation, and coordination with methodical preparation and neat execution.',
    iconName: 'FolderKanban',
  },
  {
    title: 'Punctuality & Dedication',
    tagline: 'Respect for time and deadlines',
    description:
      'Consistent in attending sessions, meeting deadlines, and maintaining steady academic focus.',
    iconName: 'Clock',
  },
  {
    title: 'Sincerity Toward Work',
    tagline: 'Genuine effort and focus',
    description:
      'Committed to doing work honestly and thoroughly, whether in coursework, coding, or community roles.',
    iconName: 'HeartHandshake',
  },
  {
    title: 'Teamwork & Coordination',
    tagline: 'Supportive team player',
    description:
      'Thrives in collaborative environments, actively listens to diverse perspectives, and helps teams stay aligned.',
    iconName: 'Users2',
  },
  {
    title: 'Curiosity & Continuous Learning',
    tagline: 'Always eager to grow',
    description:
      'Driven by an authentic desire to understand how systems work behind the scenes and explore new technologies.',
    iconName: 'Compass',
  },
  {
    title: 'Creative Problem-Solving',
    tagline: 'Thinking beyond boundaries',
    description:
      'Balances analytical technical reasoning with creative intuition drawn from art, reading, and design.',
    iconName: 'Palette',
  },
  {
    title: 'Leadership Readiness',
    tagline: 'Calm under responsibility',
    description:
      'Comfortable stepping up to guide class initiatives, organize events, and support classmates.',
    iconName: 'ShieldCheck',
  },
]

export const booksList: BookItem[] = [
  {
    title: 'Atomic Habits',
    author: 'James Clear',
    category: 'Habits & Productivity',
    takeaway: 'How tiny 1% improvements compound into remarkable personal and technical growth over time.',
  },
  {
    title: 'Rich Dad Poor Dad',
    author: 'Robert Kiyosaki',
    category: 'Financial Literacy',
    takeaway: 'Developing a mindset of financial awareness, asset building, and lifelong education.',
  },
  {
    title: 'The Psychology of Money',
    author: 'Morgan Housel',
    category: 'Behavioral Finance & Patience',
    takeaway: 'Understanding that patience, humility, and behavior matter just as much as technical calculations.',
  },
  {
    title: 'The Room on the Roof',
    author: 'Ruskin Bond',
    category: 'Literature & Coming of Age',
    takeaway: 'A heartwarming story of freedom, friendship, and discovering one’s identity in the Himalayan hills.',
  },
  {
    title: 'Roads to Mussoorie',
    author: 'Ruskin Bond',
    category: 'Memoir & Travel Essays',
    takeaway: 'Gentle humor, appreciation for nature, and finding quiet beauty in the simple rhythms of life.',
  },
]

export const artGalleryItems: ArtGalleryItem[] = [
  {
    id: 'mandala-1',
    title: 'Harmonic Mandala Flow',
    medium: 'Mandala & Fine Line Art',
    description: 'Intricate symmetry and circular patterns reflecting focus, mindfulness, and patience.',
    themeColor: 'from-purple-500/20 to-indigo-500/20',
  },
  {
    id: 'drawing-1',
    title: 'Pencil Sketches & Forms',
    medium: 'Freehand Drawing',
    description: 'Exploring light, shading, perspective, and natural forms with graphite and paper.',
    themeColor: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    id: 'painting-1',
    title: 'Colors & Expression',
    medium: 'Watercolor & Acrylic Painting',
    description: 'Vibrant color palettes capturing mood, landscapes, and creative visual expression.',
    themeColor: 'from-amber-500/20 to-rose-500/20',
  },
]

export const socialLinks: SocialLinks = {
  email: 'lohithav05@gmail.com',
  phone: '+91 8098508387',
  github: 'https://github.com/Lohithav05',
  githubUser: 'Lohithav05',
  linkedin: 'https://www.linkedin.com/in/lohitha-vengatesan',
  linkedinName: 'Lohitha Vengatesan',
  credly: 'https://www.credly.com/users/lohitha-vengatesan',
  credlyUser: 'lohitha-vengatesan',
  instagram: 'https://www.instagram.com/', // Configurable placeholder for user
  instagramHandle: '@self_development_journey', // Configurable
}

export const footerContent = {
  tagline: 'Learning continuously. Building thoughtfully. Growing with technology.',
  copyNotice: 'Lohitha V. All rights reserved.',
}
