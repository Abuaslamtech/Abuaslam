import type { Project, Service, StackItem, Testimonial } from "./types";
import rawProjects from "@/data/projects.json";
import rawServices from "@/data/services.json";
import rawStack from "@/data/stack.json";
import rawTestimonials from "@/data/testimonials.json";

/** Simulates an API call — swap body for fetch() to hit a real endpoint later */
export const getProjects = (): Project[] => rawProjects as Project[];
export const getServices = (): Service[] => rawServices as Service[];
export const getStack = (): StackItem[] => rawStack as StackItem[];
export const getTestimonials = (): Testimonial[] =>
  rawTestimonials as Testimonial[];
