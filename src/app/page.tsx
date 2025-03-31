"use client";
import Navbar from "./components/Navbar";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, FileText, Github, Linkedin } from "lucide-react";
import TypeIt from "typeit-react";
import CountUp from "react-countup";

export default function Home() {
  const [isDownloading, setIsDownloading] = useState(false);
  const [typing, setTyping] = useState({
    text: "",
    isComplete: false,
    currentIndex: 0,
  });
  const fullText = "FULL STACK DEVELOPER SPECIALIZED IN MERN";
  const greeting = "HI, I AM ABDULLAHI ISMAIL";
  const sectionRef = useRef(null);

  const downloadResume = async () => {
    try {
      setIsDownloading(true);
      const response = await fetch("/assets/resume.pdf");
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "AbdullahiIsmail_Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading resume:", error);
    } finally {
      setIsDownloading(false);
    }
  };

  const scrollDown = () => {
    if (sectionRef.current) {
      window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      <Navbar />
      <div
        ref={sectionRef}
        className="relative flex flex-col w-full justify-center items-center pt-8 md:pt-32 bg-bb px-4 lg:px-0"
      >
        {/* Main content */}
        <div className="relative z-10 pb-8 text-light flex flex-col w-full md:w-4/5 lg:w-3/5 gap-6 h-full justify-center py-4 mt-16 lg:mt-0">
          <div className="space-y-6">
            <div className="inline-block bg-tertiary/20 rounded-lg px-4 py-2 text-secondary text-sm backdrop-blur-sm border border-tertiary/30 shadow-lg transform hover:scale-105 transition-transform">
              Welcome to my digital space
            </div>

            <h1 className="text-3xl lg:text-6xl font-bold text-light leading-tight">
              <TypeIt
                options={{
                  waitUntilVisible: true,
                  cursor: false, // Remove cursor when done
                  afterComplete: () => {
                    const element = document.querySelector(".second-typeit");
                    if (element) {
                      (element as HTMLElement).style.visibility = "visible";
                    }
                  },
                }}
              >
                HI, I AM{" "}
                <span className="text-secondary relative inline-block">
                  ABDULLAHI ISMAIL!
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary to-transparent"></span>
                </span>
              </TypeIt>
            </h1>

            <h2
              className="text-2xl lg:text-3xl font-bold text-light/90 relative"
              style={{ visibility: "hidden" }}
            >
              <span className="relative second-typeit">
                <TypeIt
                  options={{
                    waitUntilVisible: true,
                  }}
                >
                  FULL STACK DEVELOPER SPECIALIZED IN MERN
                </TypeIt>
              </span>
            </h2>
          </div>

          <div className="prose prose-lg text-light max-w-full my-6">
            <div className="text-base lg:text-xl leading-relaxed backdrop-blur-md bg-lblack/30 p-6 rounded-lg border-l-4 border-secondary shadow-xl">
              <p className="mb-4">
                I'm a passionate Full Stack Developer with expertise in the MERN
                stack (MongoDB, Express.js, React, Node.js). With a strong
                foundation in frontend development, I create responsive and
                intuitive user interfaces while maintaining robust backend
                architectures.
              </p>
              <p>
                My focus is on building scalable web applications that deliver
                exceptional user experiences through clean code, modern design
                patterns, and performance optimization.
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 w-full max-w-2xl">
            <button
              onClick={downloadResume}
              disabled={isDownloading}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-secondary text-primary rounded-md hover:bg-secondary/90 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-secondary/20"
            >
              <FileText className="text-2xl" />
              {isDownloading ? "Downloading..." : "Download Resume"}
            </button>

            <div className="flex justify-between gap-4">
              <a
                href="https://github.com/abuaslamtech"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 border-2 border-secondary text-secondary rounded-md hover:bg-secondary hover:text-primary transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
              >
                <Github className="text-2xl" />
                GitHub
              </a>

              <a
                href="https://linkedin.com/in/abuaslamtech"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 border-2 border-secondary text-secondary rounded-md hover:bg-secondary hover:text-primary transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
              >
                <Linkedin className="text-2xl" />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Experience indicators */}
          <div className="flex flex-col md:flex-row flex-wrap gap-4 mt-8">
            <div className="bg-black/30 backdrop-blur-md rounded-lg px-4 py-3 border border-white/5 flex items-center">
              <div className="mr-3 w-10 h-10 rounded-full bg-tertiary/20 flex items-center justify-center">
                <span className="text-secondary font-bold">
                  <span
                    className="text-lg inline-block animate-number-drop"
                    style={{
                      animation: "numberDrop 0.8s ease-out forwards",
                    }}
                  >
                    <CountUp start={0} end={4} duration={1} /><span>+</span>
                  </span>
                </span>
              </div>
              <div>
                <p className="text-xs text-light/70">Years of</p>
                <p className="text-sm font-medium">Experience</p>
              </div>
            </div>

            <div className="bg-black/30 backdrop-blur-md rounded-lg px-4 py-3 border border-white/5 flex items-center">
              <div className="mr-3 w-10 h-10 rounded-full bg-tertiary/20 flex items-center justify-center">
              <span className="text-secondary font-bold">
                  <span
                    className="text-lg inline-block animate-number-drop"
                    style={{
                      animation: "numberDrop 0.8s ease-out forwards",
                    }}
                  >
                    <CountUp start={0} end={20} duration={1} /><span>+</span>
                  </span>
                </span>
              </div>
              <div>
                <p className="text-xs text-light/70">Completed</p>
                <p className="text-sm font-medium">Projects</p>
              </div>
            </div>

            <div className="bg-black/30 backdrop-blur-md rounded-lg px-4 py-3 border border-white/5 flex items-center">
              <div className="mr-3 w-10 h-10 rounded-full bg-tertiary/20 flex items-center justify-center">
              <span className="text-secondary font-bold">
                  <span
                    className="text-lg inline-block animate-number-drop"
                    style={{
                      animation: "numberDrop 0.8s ease-out forwards",
                    }}
                  >
                    <CountUp start={0} end={10} duration={1} /><span>+</span>
                  </span>
                </span>
              </div>
              <div>
                <p className="text-xs text-light/70">Satisfied</p>
                <p className="text-sm font-medium">Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
