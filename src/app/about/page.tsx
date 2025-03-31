"use client";
import {
  TreePalm,
  Building,
  BookOpen,
  Library,
  Award,
  BadgeCheck,
} from "lucide-react";
import { useState } from "react";
import Navbar from "../components/Navbar";

const About = () => {
  const [activeTab, setActiveTab] = useState("vision");

  const education = [
    {
      institution: "Federal University Dutsin ma",
      program: "BSc. Computer Science",
      year: "2024",
      link: "https://fudma.edu.ng/verify/12345", // Replace with actual verification link
    },
    {
      institution: "FreeCodeCamp",
      program: "Web Development",
      year: "2023",
      link: "https://www.freecodecamp.org/certification/yourusername", // Replace with your actual certification link
    },
    {
      institution: "John Hopkins University",
      program: "Web Design Specialization",
      year: "2023",
      link: "https://coursera.org/verify/specialization/xyz", // Replace with actual verification link
    },
    {
      institution: "Coursera",
      program: "Frontend Development",
      year: "2023",
      link: "https://coursera.org/verify/xyz", // Replace with actual verification link
    },
  ];

  const certifications = [
    {
      name: "BSc. Computer Science & IT",
      issuer: "Federal University Dutsin ma",
      year: "2024",
      link: "https://fudma.edu.ng/verify/12345", // Replace with actual verification link
    },
    {
      name: "Web Design & DSA",
      issuer: "FreeCodeCamp",
      year: "2023",
      link: "https://www.freecodecamp.org/certification/yourusername/responsive-web-design", // Replace with actual certification link
    },
    {
      name: "Web Design & Development",
      issuer: "John Hopkins University",
      year: "2023",
      link: "https://coursera.org/verify/xyz", // Replace with actual verification link
    },
    {
      name: "Front-End Development Certification",
      issuer: "Coursera",
      year: "2023",
      link: "https://coursera.org/verify/abc", // Replace with actual verification link
    },
  ];

  const TabItem = ({ id, label, icon: Icon }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`flex items-center gap-2 px-4 py-3 rounded-md transition-all duration-300 ${
        activeTab === id
          ? "bg-secondary text-primary shadow-lg"
          : "bg-lblack/50 hover:bg-lblack text-light"
      }`}
    >
      <Icon
        className={`text-xl ${
          activeTab === id ? "text-primary" : "text-secondary"
        }`}
      />
      <span>{label}</span>
    </button>
  );

  const CardWrapper = ({ children }) => (
    <div className="bg-lblack/80 backdrop-blur-md rounded-xl p-6 shadow-lg border-l-4 border-secondary transform transition-all duration-300 hover:translate-y-1">
      {children}
    </div>
  );

  const CredentialItem = ({ title, subtitle, year, link }) => (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className=" group flex items-start gap-3 p-3 rounded-lg transition-all duration-300 bg-secondary/2 text-secondary/40 hover:bg-secondary/10"
    >
      <Award className="text-secondary text-xl mt-1 group-hover:scale-110 transition-transform" />
      <div className="flex flex-col">
        <div className="text-base lg:text-lg font-medium group-hover:text-secondary transition-colors">
          {title}
        </div>
        <div className="text-sm text-light/80">
          {subtitle} • <span className="text-secondary">{year}</span>
        </div>
      </div>
    </a>
  );

  return (
    <>
      <Navbar />
      <div className="relative min-h-screen flex flex-col w-full justify-center px-4 lg:px-16 pt-24 pb-16">
        <div className="relative z-10 max-w-6xl mx-auto w-full">
          {/* Header */}
          <div className="relative z-10 pb-8 text-light flex flex-col w-full md:w-4/5 lg:w-3/5 gap-6 h-full justify-center py-4 ">
            <div className="space-y-6">
              <div className="inline-block bg-tertiary/20 rounded-lg px-4 py-2 text-secondary text-sm backdrop-blur-sm border border-tertiary/30 shadow-lg transform hover:scale-105 transition-transform">
                My Background
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-light mb-2">
                ABOUT <span className="text-secondary">ME</span>
              </h2>
              <div className=" h-0.5 w-24 bg-gradient-to-r from-secondary to-transparent"></div>
              <p className="text-light/80 max-w-2xl">
                A passionate web developer with expertise in creating intuitive
                user interfaces and robust web applications.
              </p>
            </div>
          </div>

          {/* Tab navigation */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 max-w-md sm:max-w-none mx-auto">
            <TabItem id="vision" label="My Vision" icon={Building} />
            <TabItem id="education" label="Education" icon={Library} />
            <TabItem
              id="certifications"
              label="Certifications"
              icon={BadgeCheck}
            />
          </div>

          {/* Tab content */}
          <div className="transition-all duration-300">
            {activeTab === "vision" && (
              <CardWrapper>
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="bg-tertiary/20 p-6 rounded-full">
                    <TreePalm className="text-4xl md:text-6xl text-secondary" />
                  </div>
                  <h3 className="w-1/2 text-2xl md:text-3xl font-bold mb-4 text-secondary">
                    My Vision
                  </h3>
                  <div>
                    <p className="w-full text-base leading-7 lg:text-lg text-light/90">
                      As a frontend developer, my vision is to create
                      user-centric, innovative, and accessible web interfaces
                      that seamlessly merge functionality and aesthetics. I
                      aspire to inspire teams to build immersive and delightful
                      digital experiences, staying at the forefront of emerging
                      technologies and fostering inclusivity.
                    </p>
                  </div>
                </div>
              </CardWrapper>
            )}

            {activeTab === "education" && (
              <CardWrapper>
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="bg-tertiary/20 p-6 rounded-full">
                    <Library className="text-3xl text-secondary" />
                  </div>
                  <h3 className="w-1/2 text-2xl md:text-3xl font-bold mb-4 text-secondary">
                    Education 
                  </h3>

                  <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
                    {education.map((edu, index) => (
                      <CredentialItem
                        key={index}
                        title={edu.program}
                        subtitle={edu.institution}
                        year={edu.year}
                        link={edu.link}
                      />
                    ))}
                  </div>
                </div>
              </CardWrapper>
            )}

            {activeTab === "certifications" && (
              <CardWrapper>
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="bg-tertiary/20 p-6 rounded-full">
                    <Award className="text-3xl text-secondary" />
                  </div>
                  <h3 className="w-1/2 text-2xl md:text-3xl font-bold text-secondary">
                    Certifications
                  </h3>

                  <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
                    {certifications.map((cert, index) => (
                      <CredentialItem
                        key={index}
                        title={cert.name}
                        subtitle={cert.issuer}
                        year={cert.year}
                        link={cert.link}
                      />
                    ))}
                  </div>
                </div>
              </CardWrapper>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
