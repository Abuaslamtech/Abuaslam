import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Services } from "@/components/sections/Services";
import { Skills } from "@/components/sections/Skills";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

import { getProjects, getServices, getStack, getTestimonials } from "@/lib/api";

export default function Home() {
  const projects = getProjects();
  const services = getServices();
  const stack = getStack();
  const testimonials = getTestimonials();

  return (
    <div className="min-h-screen bg-bg text-ink font-body selection:bg-primary/30 selection:text-ink justify-center items-center">
      <Navbar />

      <main className="flex-1 justify-center justify-self-end items-center">
        <Hero />
        <About />
        <Projects projects={projects} />
        <Services services={services} />
        <Skills stack={stack} />
        <Testimonials testimonials={testimonials} />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
