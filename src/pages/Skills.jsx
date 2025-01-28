import { useState } from "react";
import { IoIosArrowDropdownCircle } from "react-icons/io";
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
  SiBitbucket,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

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
        // { name: "BitBucket", icon: SiBitbucket, proficiency: 75 },
      ],
    },
  ];

  const [activeCategory, setActiveCategory] = useState("core");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
    setIsMenuOpen(false);
  };

  const SkillBar = ({ name, icon: Icon, proficiency }) => (
    <div className="flex flex-col gap-2 w-full">
      <div className="flex items-center gap-3">
        <Icon className="text-2xl text-secondary" />
        <span className="font-medium">{name}</span>
        <span className="ml-auto text-secondary">{proficiency}%</span>
      </div>
      <div className="w-full bg-primary/20 rounded-full h-2">
        <div
          className="bg-secondary h-full rounded-full transition-all duration-500 ease-out"
          style={{ width: `${proficiency}%` }}
        />
      </div>
    </div>
  );

  return (
    <div className="flex flex-col lg:flex-row h-screen w-full justify-center px-4 lg:px-16">
      <div className="pb-8 text-light flex flex-col w-full gap-4 h-full justify-center  py-4">
        <div className="flex justify-between items-center">
          <div className="text-secondary font-bold text-xl">SKILLS</div>
          <IoIosArrowDropdownCircle
            className="lg:hidden text-secondary text-4xl bg-tertiary p-1 rounded-lg cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden flex flex-col gap-2 ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          {skillCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-secondary text-secondary rounded-lg hover:bg-secondary/10 transition-all duration-300"
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-4">
          {skillCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`p-4 font-bold rounded transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-secondary text-primary"
                  : "bg-primary text-secondary border-[1px] border-secondary"
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Skills Display */}
        <div className="bg-lblack p-8 rounded-lg">
          <div className="grid gap-6">
            {skillCategories
              .find((category) => category.id === activeCategory)
              ?.skills.map((skill, index) => (
                <SkillBar
                  key={index}
                  name={skill.name}
                  icon={skill.icon}
                  proficiency={skill.proficiency}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
