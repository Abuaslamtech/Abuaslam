export interface Project {
  id: string;
  name: string;
  tagline: string;
  description?: string;
  pic: string;
  demo: string;
  code?: string;
  type: "web" | "mobile";
  platform?: string;
  status?: string;
  badges?: string[];
  tech?: string[];
  playStoreUrl?: string;
  appStoreUrl?: string;
  featured?: boolean;
}

export interface Service {
  icon: string;
  title: string;
  desc: string;
  deliverables?: string[];
}

export interface StackItem {
  icon: string; // key into STACK_ICONS map
  name: string;
  desc: string;
  category?: string;
  since: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company?: string;
}

export interface EducationItem {
  year: string;
  degree: string;
  school: string;
  link?: string;
  certAction?: string;
}

