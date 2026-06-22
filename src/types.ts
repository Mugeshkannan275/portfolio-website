/**
 * Type definitions for C. Mugeshkannan's Portfolio
 */

export interface PersonalDetails {
  name: string;
  degree: string;
  college: string;
  year: string;
  dob: string;
  phone: string;
  email: string;
  address: {
    street: string;
    village: string;
    taluk: string;
    district: string;
    pincode: string;
  };
  careerGoal: string;
  objective: string;
}

export interface NavLink {
  label: string;
  href: string;
  icon?: string;
}

export interface SkillGroup {
  category: string;
  skills: {
    name: string;
    level: number; // percentage out of 100
    iconName: string;
    description: string;
  }[];
}

export interface CompetencyItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  exampleScenario: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  skillsLearned: string[];
  description: string;
}

export interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
}
