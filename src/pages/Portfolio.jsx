import { useState } from "react";
import dormsdeal from "../assets/dormsdeal.png";
import classroom from "../assets/classroom.png";
import current from "../assets/current.png";
import annajat from "../assets/annajat.png";
import impics from "../assets/impics.png";
import talkmute from "../assets/talkmute.png";
import usersmanager from "../assets/usersmanager.png";
import climap from "../assets/climap.png";
import untitled from "../assets/untitled.png";

const PROJECTS_PER_PAGE = 6;

const projectData = [
    {
    id: "Climap",
    name: "CLIMAP",
    description: "A health facility locator across Nigeria",
    pic: climap,
    demolink: "https://cli-map.vercel.app/",
    codelink: "http://github.com/abuaslamtech/climap",
  },
  {
    id: "impics",
    name: "IMPICS",
    description: "Image free gallery with AI Generation feature",
    pic: impics,
    demolink: "https://impics.vercel.app/",
    codelink: "https://github.com/Abuaslamtech/impics",
  },
  {
    id: "talkmute",
    name: "TALKMUTE",
    description: "A text to speech to sign language translation software",
    pic: talkmute,
    demolink: "https://talkmute-project.vercel.app/",
    codelink: "https://github.com/Abuaslamtech/talkmute-project",
  },
  {
    id: "usersmanager",
    name: "USERS MANAGER",
    description: "A platform for user management of users",
    pic: usersmanager,
    demolink: "https://usersmanager.vercel.app/",
    codelink: "https://github.com/Abuaslamtech/usermanager",
  },
  {
    id: "classroom",
    name: "CLASSROOM",
    description: "A web app for educational resource sharing for students",
    pic: classroom,
    demolink: "https://classroomapp.vercel.app/",
    codelink: "https://github.com/abuaslamtech/classroom",
  },
  {
    id: "dormsdeal",
    name: "DORMSDEAL",
    description: "A web app for house rental and accomadation for students",
    pic: dormsdeal,
    demolink: "https://dormsdeal.netlify.app",
    codelink: "https://github.com/abuaslamtech/dormsdeal",
  },
  {
    id: "annajat",
    name: "ANNAJAT",
    description: "A website for Annaajat Academy Zaria",
    pic: annajat,
    demolink: "hhttps://annajat-academy.vercel.app/",
    codelink: "https://github.com/abuaslamtech/annajatacademy",
  },
  {
    id: "xcurrent",
    name: "XCURRENT",
    description: "A web app for currency conversion and  exchange",
    pic: current,
    demolink: "https://xcurrent.netlify.app",
    codelink: "https://github.com/abuaslamtech/xcurrent",
  },
  {
    id: "untitled",
    name: "UNTITLED",
    description: "A web app for events ticketing and booking",
    pic: untitled,
    demolink: "https://untitled.netlify.app",
    codelink: "https://github.com/abuaslamtech/untitled",
  },
];

const Projects = ({ project }) => {
  const [activeLink, setActiveLink] = useState("demo");
  const { name, description, pic, demolink, codelink } = project;

  const links = [
    { id: "demo", url: demolink, label: "Live Demo" },
    { id: "code", url: codelink, label: "View Code" },
  ];

  return (
    <div className="group bg-lblack p-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105">
      <div className="relative w-full aspect-video overflow-hidden rounded-lg mb-4">
        <img
          src={pic}
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          alt={`${name} project preview`}
          loading="lazy"
        />
      </div>

      <div className="space-y-3">
        <h3 className="font-bold text-2xl text-secondary">{name}</h3>
        <p className="text-gray-300">{description}</p>
      </div>

      <div className="flex gap-4 mt-4">
        {links.map(({ id, url, label }) => (
          <a
            key={id}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setActiveLink(id)}
            className={`
              flex-1 p-3 text-center rounded transition-all duration-200
              hover:transform hover:-translate-y-1
              ${
                activeLink === id
                  ? "bg-secondary text-primary font-semibold shadow-lg"
                  : "bg-primary text-secondary border border-secondary hover:bg-secondary/10"
              }
            `}
          >
            {label}
          </a>
        ))}
      </div>
    </div>
  );
};

const Portfolio = () => {
  const [visibleProjects, setVisibleProjects] = useState(PROJECTS_PER_PAGE);

  const showMoreProjects = () => {
    setVisibleProjects((prev) =>
      Math.min(prev + PROJECTS_PER_PAGE, projectData.length)
    );
  };

  return (
    <div className="container mx-auto px-4 py-8 lg:px-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-secondary mb-2">Portfolio</h1>
        <p className="text-gray-300">
          Explore my latest web development projects
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {projectData.slice(0, visibleProjects).map((project) => (
          <Projects key={project.id} project={project} />
        ))}
      </div>

      {visibleProjects < projectData.length && (
        <button
          onClick={showMoreProjects}
          className="mt-12 mx-auto block px-8 py-3 border border-secondary
                   text-secondary hover:bg-secondary hover:text-primary
                   transition-all duration-300 font-semibold
                   hover:-translate-y-1 focus:outline-none focus:ring-2
                   focus:ring-secondary focus:ring-opacity-50"
        >
          Load More Projects
        </button>
      )}
    </div>
  );
};

export default Portfolio;
