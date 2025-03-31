'use client'
import { useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";

// Constants
const PROJECTS_PER_PAGE = 6;

// Project data moved to separate file for cleaner structure
// In a real app, this would be in a separate file: data/projects.js
const projectData = [
  {
    id: "climap",
    name: "CLIMAP",
    description: "A health facility locator across Nigeria",
    pic: "/assets/climap.png",
    demolink: "https://cli-map.vercel.app/",
    codelink: "http://github.com/abuaslamtech/climap",
    tags: ["React", "Leaflet", "API"]
  },
  {
    id: "impics",
    name: "IMPICS",
    description: "Image free gallery with AI Generation feature",
    pic: "/assets/impics.png",
    demolink: "https://impics.vercel.app/",
    codelink: "https://github.com/Abuaslamtech/impics",
    tags: ["React", "AI", "Gallery"]
  },
  {
    id: "talkmute",
    name: "TALKMUTE",
    description: "A text to speech to sign language translation software",
    pic: "/assets/talkmute.png",
    demolink: "https://talkmute-project.vercel.app/",
    codelink: "https://github.com/Abuaslamtech/talkmute-project",
    tags: ["React", "Accessibility", "Speech"]
  },
  {
    id: "usersmanager",
    name: "USERS MANAGER",
    description: "A platform for user management of users",
    pic: "/assets/usersmanager.png",
    demolink: "https://usersmanager.vercel.app/",
    codelink: "https://github.com/Abuaslamtech/usermanager",
    tags: ["React", "MongoDB", "Auth"]
  },
  {
    id: "classroom",
    name: "CLASSROOM",
    description: "A web app for educational resource sharing for students",
    pic: "/assets/classroom.png",
    demolink: "https://classroomapp.vercel.app/",
    codelink: "https://github.com/abuaslamtech/classroom",
    tags: ["React", "Education", "Sharing"]
  },
  {
    id: "dormsdeal",
    name: "DORMSDEAL",
    description: "A web app for house rental and accomadation for students",
    pic: "/assets/dormsdeal.png",
    demolink: "https://dormsdeal.netlify.app",
    codelink: "https://github.com/abuaslamtech/dormsdeal",
    tags: ["React", "Housing", "Rental"]
  },
  {
    id: "annajat",
    name: "ANNAJAT",
    description: "A website for Annaajat Academy Zaria",
    pic: "/assets/annajat.png",
    demolink: "https://annajat-academy.vercel.app/",
    codelink: "https://github.com/abuaslamtech/annajatacademy",
    tags: ["React", "Education", "Website"]
  },
  {
    id: "xcurrent",
    name: "XCURRENT",
    description: "A web app for currency conversion and exchange",
    pic: "/assets/current.png",
    demolink: "https://xcurrent.netlify.app",
    codelink: "https://github.com/abuaslamtech/xcurrent",
    tags: ["React", "Finance", "API"]
  },
  {
    id: "untitled",
    name: "UNTITLED",
    description: "A web app for events ticketing and booking",
    pic: "/assets/untitled.png",
    demolink: "https://untitled.netlify.app",
    codelink: "https://github.com/abuaslamtech/untitled",
    tags: ["React", "Events", "Booking"]
  },
];

// CSS Animation styles as a component
const AnimationStyles = () => (
  <style jsx global>{`
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `}</style>
);

// Tag component for better reusability
const Tag = ({ label }) => (
  <span className="bg-tertiary backdrop-blur-md text-xs text-secondary px-2 py-1 rounded-full">
    {label}
  </span>
);

// Filter button component
const FilterButton = ({ tag, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`py-2 px-5 rounded-full transition-all duration-300 ${
      isActive
        ? "bg-secondary text-primary font-medium shadow-lg shadow-secondary/20 transform scale-105"
        : "bg-tertiary/20 text-light hover:bg-tertiary/30"
    }`}
  >
    {tag.charAt(0).toUpperCase() + tag.slice(1)}
  </button>
);

// Project link component
const ProjectLink = ({ url, label, isActive, onClick }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    onClick={onClick}
    className={`
      flex-1 py-2.5 text-center rounded-full transition-all duration-300
      ${
        isActive
          ? "bg-secondary text-primary font-medium shadow-lg shadow-secondary/20 transform -translate-y-1"
          : "bg-tertiary/20 text-light hover:bg-tertiary/30 hover:-translate-y-1"
      }
    `}
  >
    {label}
  </a>
);

// ProjectCard component with cleaner structure
const ProjectCard = ({ project, index }) => {
  const [activeLink, setActiveLink] = useState("demo");
  const [isHovered, setIsHovered] = useState(false);
  const { name, description, pic, demolink, codelink, tags } = project;

  // Links data
  const links = [
    { id: "demo", url: demolink, label: "Live Demo" },
    { id: "code", url: codelink, label: "View Code" },
  ];

  // Animation delay based on column position
  const delayIndex = index % 3;
  const animationDelay = delayIndex * 0.1;

  return (
    <div 
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ 
        opacity: 0, 
        animation: `fadeInUp 0.5s ease-out ${animationDelay + 0.2}s forwards` 
      }}
    >
      <div className="bg-lblack/90 backdrop-blur-md rounded-2xl overflow-hidden border border-tertiary/20 shadow-lg transition-all duration-300 hover:shadow-secondary/10 hover:border-tertiary/40">
        {/* Image container */}
        <div className="relative w-full aspect-video overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-lblack/80 to-transparent opacity-70 z-10"></div>
          <Image
            src={pic}
            className={`w-full h-full object-cover object-center transition-all duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}
            alt={`${name} project preview`}
            fill
            priority
          />
          
          {/* Tags */}
          <div className="absolute top-3 left-3 z-20 flex gap-2 flex-wrap">
            {tags?.map((tag, i) => (
              <Tag key={i} label={tag} />
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <div>
            <h3 className="font-bold text-2xl text-secondary">{name}</h3>
            <p className="text-light/90 mt-2">{description}</p>
          </div>

          <div className="flex gap-4 pt-2">
            {links.map(({ id, url, label }) => (
              <ProjectLink
                key={id}
                url={url}
                label={label}
                isActive={activeLink === id}
                onClick={() => setActiveLink(id)}
              />
            ))}
          </div>
        </div>
        
        {/* Glow effect */}
        {isHovered && (
          <div className="absolute -inset-0.5 bg-gradient-to-r from-secondary/30 to-tertiary/30 rounded-2xl blur opacity-30 -z-10 group-hover:opacity-70 transition-opacity duration-300"></div>
        )}
      </div>
    </div>
  );
};

// Empty state component
const EmptyState = ({ onReset }) => (
  <div className="py-16 text-center bg-lblack/60 backdrop-blur-md rounded-2xl border border-tertiary/20">
    <p className="text-light/80 text-xl">No projects found matching this filter.</p>
    <button
      onClick={onReset}
      className="mt-4 bg-tertiary/30 hover:bg-tertiary/40 text-secondary font-medium rounded-full py-2 px-6 transition-all duration-300"
    >
      View All Projects
    </button>
  </div>
);

// Load more button component
const LoadMoreButton = ({ onClick }) => (
  <button
    onClick={onClick}
    className="bg-tertiary/30 hover:bg-tertiary/40 text-secondary font-medium rounded-full py-3 px-8 transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-tertiary/5 hover:shadow-secondary/10 flex items-center gap-2"
  >
    <span className="inline-block w-2 h-2 rounded-full bg-secondary"></span>
    Load More Projects
  </button>
);

// Main Portfolio component
const Portfolio = () => {
  // State hooks
  const [visibleProjects, setVisibleProjects] = useState(PROJECTS_PER_PAGE);
  const [scrolled, setScrolled] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState(projectData);

  // Generate unique tags from all projects
  const allTags = ["all", ...new Set(projectData.flatMap(project => project.tags || []))];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Filter projects based on selected tag
  useEffect(() => {
    const newFilteredProjects = activeFilter === "all" 
      ? projectData
      : projectData.filter(project => project.tags?.includes(activeFilter));
    
    setFilteredProjects(newFilteredProjects);
    setVisibleProjects(PROJECTS_PER_PAGE);
  }, [activeFilter]);

  // Load more projects
  const showMoreProjects = () => {
    setVisibleProjects(prev => 
      Math.min(prev + PROJECTS_PER_PAGE, filteredProjects.length)
    );
  };

  return (
    <>
    <Navbar />

    <div className="relative min-h-screen flex flex-col w-full justify-center px-4 lg:px-16 pt-24 pb-16">
      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="relative z-10 pb-8 text-light flex flex-col w-full md:w-4/5 lg:w-3/5 gap-6 h-full justify-center py-4 ">
          <div className="space-y-6">
            <div className="inline-block bg-tertiary/20 rounded-lg px-4 py-2 text-secondary text-sm backdrop-blur-sm border border-tertiary/30 shadow-lg transform hover:scale-105 transition-transform">
              What I built
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-light mb-2">
              MY <span className="text-secondary">PROJECTS</span>
            </h2>
            <div className=" h-0.5 w-24 bg-gradient-to-r from-secondary to-transparent"></div>
          </div>
          <p className="text-light/80 mt-8 max-w-2xl">
            Explore my latest web development projects. Each project represents my dedication to creating 
            intuitive, efficient, and visually appealing web applications.
          </p>
        </div>

        {/* Filters Section */}
        <div className="mb-10 overflow-x-auto pb-4">
          <div className="flex gap-3 min-w-max">
            {allTags.map((tag) => (
              <FilterButton 
                key={tag}
                tag={tag}
                isActive={activeFilter === tag}
                onClick={() => setActiveFilter(tag)}
              />
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.slice(0, visibleProjects).map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index}
            />
          ))}
        </div>

        {/* Load More Button */}
        {visibleProjects < filteredProjects.length && (
          <div className="mt-16 flex justify-center">
            <LoadMoreButton onClick={showMoreProjects} />
          </div>
        )}
        
        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <EmptyState onReset={() => setActiveFilter("all")} />
        )}
      </div>
    </div>
    </>
  );
};

export default Portfolio;