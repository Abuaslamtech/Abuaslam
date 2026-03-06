export interface Project {
  id: string;
  name: string;
  tagline: string;
  pic: string;
  demo: string;
  code: string;
  type?: "web" | "mobile";
  platform?: string;
}

export interface Service {
  icon: string;
  title: string;
  desc: string;
}

export interface StackItem {
  icon: string; // key into STACK_ICONS map
  name: string;
  desc: string;
  since: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export interface EducationItem {
  year: string;
  degree: string;
  school: string;
  link: string;
}
