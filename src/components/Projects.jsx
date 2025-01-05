import { useState } from "react";

const Projects = ({ name, desc, pic, demolink, codelink }) => {
  const [activeLink, setActiveLink] = useState("demo");

  const links = [
    { id: "demo", url: demolink, label: "Demo" },
    { id: "code", url: codelink, label: "Code" },
  ];

  return (
    <div className="group bg-lblack p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-102 w-full max-w-2xl mx-auto">
      <div className="w-full aspect-video overflow-hidden rounded-lg mb-4">
        <img
          src={pic}
          className="w-full h-full object-cover object-center transform transition-transform duration-500 group-hover:scale-105"
          alt={name}
          loading="lazy"
        />
      </div>

      <div className="space-y-3">
        <h3 className="font-bold text-2xl text-secondary">{name}</h3>
        <p className="text-base text-gray-300">
          {desc || "No description available"}
        </p>
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

export default Projects;
