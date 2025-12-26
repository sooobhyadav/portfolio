
export interface Project {
  title: string;
  description: string;
  link: string;
  tech: string[];
  image: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  highlights: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  link: string;
  skills: string[];
}

export interface Socials {
  github: string;
  linkedin: string;
  email: string;
  portfolio: string;
  phone: string;
}

export interface ResumeData {
  name: string;
  summary: string;
  skills: Record<string, string[]>;
  experience: Experience[];
  projects: Project[];
  certifications: Certification[];
  socials: Socials;
}
