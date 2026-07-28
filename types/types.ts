// Shared

export interface ProjectNote {
  note: string;
  hasLink?: string;
}

// Project

export type ProjectStack = "Next" | "React" | "Wordpress" | "Shopify" | "Vanilla" | "Bootstrap" | "MPA";

export type ProjectCategory = "real" | "mockup";

export interface Project {
  id: number;
  order: number;
  title: string;
  image: string;
  description: string;
  myRole: string;
  technologies: string[];
  month: string;
  year: number;
  url: string;
  type: ProjectStack;
  category: ProjectCategory;
  notes: ProjectNote[];
}

// Three.js project

export interface ThreeJsProject {
  id: number;
  order: number;
  title: string;
  image: string;
  description: string;
  myRole?: string;
  technologies: string[];
  month: string;
  year: number;
  url: string;
  notes: ProjectNote[];
}

// Daniel project — the old site's "Bonus" easter-egg project. Kept separate from Project
// since it's missing the "order" field the rest of the Project shape has.

export interface DanielProject {
  id: number;
  title: string;
  image: string;
  description: string;
  myRole: string;
  technologies: string[];
  month: string;
  year: number;
  url: string;
  type: ProjectStack;
  category: ProjectCategory;
  notes: ProjectNote[];
}

// Employment

export interface EmploymentPosition {
  id: number;
  order: number;
  role: string;
  company: string;
  companyUrl: string;
  companyLogo: string;
  companyDescription: string;
  startYear: number;
  // Omitted for the current, still-ongoing position.
  endYear?: number;
  focus: string[];
  contribution: string;
}

// Document

export type DocumentCategory = "resume" | "reference" | "certificate";

// Named "CredentialDocument" (not "Document") to avoid shadowing the global DOM Document type.
export interface CredentialDocument {
  id: number;
  title: string;
  image: string;
  category: DocumentCategory;
  firm: string;
  creator: string;
}

export type CredentialDocumentsByCategory = Record<DocumentCategory, CredentialDocument[]>;

// Skill

export type SkillProficiency = 1 | 2 | 3;

export interface Technology {
  technology: string;
  proficiency: SkillProficiency;
  image: string;
  displayTechnology: boolean;
}

export interface Skill {
  title: string;
  technologies: Technology[];
}

// Language

export interface Language {
  language: string;
  flag: string;
  image: string;
  proficiencies: string;
}
