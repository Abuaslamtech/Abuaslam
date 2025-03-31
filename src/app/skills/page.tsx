"use client";

import { useState, useEffect } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import Navbar from "../components/Navbar";
import { MenuIcon, X } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      id: "core",
      title: "Core Technologies",
      skills: [
        { name: "HTML5", icon: FaHtml5, proficiency: 90 },
        { name: "CSS3", icon: FaCss3Alt, proficiency: 85 },
        { name: "JavaScript", icon: FaJs, proficiency: 88 },
        { name: "TypeScript", icon: SiTypescript, proficiency: 80 },
      ],
    },
    {
      id: "lib",
      title: "Libraries & Frameworks",
      skills: [
        { name: "React", icon: FaReact, proficiency: 85 },
        { name: "Next.js", icon: TbBrandNextjs, proficiency: 50 },
        { name: "Node.js", icon: FaNodeJs, proficiency: 80 },
        { name: "Express", icon: SiExpress, proficiency: 75 },
        { name: "MongoDB", icon: SiMongodb, proficiency: 78 },
        { name: "TailwindCSS", icon: SiTailwindcss, proficiency: 88 },
      ],
    },
    {
      id: "ver",
      title: "Version Control",
      skills: [
        { name: "Git", icon: FaGitAlt, proficiency: 85 },
        { name: "GitHub", icon: FaGithub, proficiency: 88 },
      ],
    },
  ];

  const [activeCategory, setActiveCategory] = useState("core");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [animateSkills, setAnimateSkills] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    // Trigger animation after component mounts
    setTimeout(() => {
      setAnimateSkills(true);
    }, 300);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Reset animation when category changes
  useEffect(() => {
    setAnimateSkills(false);
    setTimeout(() => {
      setAnimateSkills(true);
    }, 100);
  }, [activeCategory]);

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
    setIsMobileMenuOpen(false);
  };

  // Modern compact skill card component
  const SkillCard = ({ name, icon: Icon, proficiency, index }) => {
    // Determine proficiency level text
    const getProficiencyText = (level) => {
      if (level >= 85) return "Expert";
      if (level >= 70) return "Advanced";
      if (level >= 50) return "Intermediate";
      return "Beginner";
    };

    return (
      <div
        className={`bg-tertiary/10 backdrop-blur-sm rounded-md border border-tertiary/20 p-4 transition-all duration-500 hover:bg-tertiary/20 hover:shadow-md hover:shadow-tertiary/10 ${
          animateSkills
            ? "translate-y-0 opacity-100"
            : "translate-y-8 opacity-0"
        }`}
        style={{ transitionDelay: `${index * 80}ms` }}
      >
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <div className="bg-tertiary/20 p-2 rounded-full">
              <Icon className="text-lg text-secondary" />
            </div>
            <span className="font-medium text-light">{name}</span>
          </div>
          <span className="text-xs rounded-full px-2 py-1 bg-secondary/20 text-secondary">
            {getProficiencyText(proficiency)}
          </span>
        </div>
        <div className="w-full bg-tertiary/20 rounded-full h-1.5">
          <div
            className="bg-gradient-to-r from-secondary to-secondary/60 h-full rounded-full transition-all duration-1000 ease-out"
            style={{
              width: animateSkills ? `${proficiency}%` : "0%",
            }}
          />
        </div>
      </div>
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
                What am good at
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-light mb-2">
                MY <span className="text-secondary">SKILLS</span>
              </h2>
              <div className=" h-0.5 w-24 bg-gradient-to-r from-secondary to-transparent"></div>
              <p className="text-light/80 max-w-2xl">
                Expertise in modern technologies and best practices to turn
                digital ideas into reality with efficient and innovative
                solutions.
              </p>
            </div>

            {/* Mobile Category Toggle */}
            <div className="lg:hidden bg-tertiary/20 p-2 px-4 rounded-md backdrop-blur-sm border border-tertiary/30 flex justify-between items-center">
              <span className="text-light font-medium">
                {skillCategories.find((c) => c.id === activeCategory)?.title}
              </span>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="bg-lblack/90 backdrop-blur-md p-2 rounded-full border border-tertiary/30 text-secondary hover:bg-tertiary/20 transition-all duration-300"
              >
                {isMobileMenuOpen ? <X /> : <MenuIcon />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`lg:hidden transition-all duration-300 overflow-hidden mb-4 ${
              isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="flex flex-col gap-2 p-4 bg-lblack/90 backdrop-blur-md rounded-lg border border-tertiary/30">
              {skillCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id)}
                  className={`flex items-center justify-center gap-2 px-6 py-3 rounded-md transition-all duration-300 ${
                    activeCategory === category.id
                      ? "bg-secondary text-primary font-bold"
                      : "bg-tertiary/20 text-light hover:bg-tertiary/30"
                  }`}
                >
                  {category.title}
                </button>
              ))}
            </div>
          </div>

          {/* Desktop Categories - Transformed to a sleek pill navigation */}
          <div className="hidden lg:flex justify-center mb-6">
            <div className="bg-lblack/70 backdrop-blur-md p-1.5 rounded-full border border-tertiary/20 flex gap-1">
              {skillCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id)}
                  className={`py-2 px-5 font-medium rounded-full text-sm transition-all duration-300 ${
                    activeCategory === category.id
                      ? "bg-secondary text-primary"
                      : "text-light hover:bg-tertiary/20"
                  }`}
                >
                  {category.title}
                </button>
              ))}
            </div>
          </div>

          {/* Skills Grid Layout */}
          <div className="bg-lblack/80 backdrop-blur-md p-6 rounded-lg border border-tertiary/30 shadow-lg shadow-tertiary/5">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {skillCategories
                .find((category) => category.id === activeCategory)
                ?.skills.map((skill, index) => (
                  <SkillCard
                    key={index}
                    name={skill.name}
                    icon={skill.icon}
                    proficiency={skill.proficiency}
                    index={index}
                  />
                ))}
            </div>
          </div>

          {/* Available Button */}
          <div className="flex justify-center mt-6">
            <button className="bg-tertiary/30 hover:bg-tertiary/40 text-secondary font-medium rounded-full py-2 px-6 transition-all duration-300 flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
              Available for projects
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
