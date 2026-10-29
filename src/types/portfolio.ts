export interface ProjectItem {
  id: string
  title: string
  fullTitle: string
  category: string
  description: string
  features: string[]
  tags: string[]
  liveUrl?: string
  githubUrl?: string
  simulatedNote?: string
  previewType: 'trustguard' | 'creativeminds' | 'experiments' | string
  featured?: boolean
}

export interface SkillCategory {
  categoryCode: string
  title: string
  description?: string
  skills: {
    name: string
    isPrimary?: boolean
    iconName?: string
  }[]
}

export interface LearningCard {
  id: string
  title: string
  label: string
  description: string
  badgeVariant: 'primary' | 'explore' | 'aspire'
  topics: string[]
  iconName: string
}

export interface EducationItem {
  degree: string
  institution: string
  period: string
  scoreLabel: string
  scoreValue: string
  description?: string
}

export interface ExperienceItem {
  role: string
  organization: string
  period: string
  type: string
  description: string
  skills?: string[]
}

export interface CertificationItem {
  title: string
  issuer: string
  date: string
  type: 'Course' | 'Certification' | 'Specialization Track'
  notes?: string
}

export interface LeadershipItem {
  title: string
  roleType: string
  highlights: string[]
  iconName: string
}

export interface WorkQualityItem {
  title: string
  tagline: string
  description: string
  iconName: string
}

export interface BookItem {
  title: string
  author: string
  category: string
  takeaway: string
}

export interface ArtGalleryItem {
  id: string
  title: string
  medium: string
  description: string
  imagePath?: string
  themeColor: string
}

export interface SocialLinks {
  email: string
  phone: string
  github: string
  githubUser: string
  linkedin: string
  linkedinName: string
  credly?: string
  credlyUser?: string
  instagram?: string
  instagramHandle?: string
}
