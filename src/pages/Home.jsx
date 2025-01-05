import { useState } from "react";
import abuaslam from "../assets/abuaslam.png";
import { AiFillGithub } from "react-icons/ai";
import { MdArticle } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

const Home = () => {
  const [isDownloading, setIsDownloading] = useState(false);

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

  return (
    <div className="flex flex-col h-screen w-full justify-center px-4 lg:px-16">
      <div className="pb-8 text-light flex flex-col w-full gap-8 h-full justify-center py-4">
        <div className="space-y-4">
          <h1 className="text-3xl lg:text-5xl font-bold text-light">
            HI, I AM ABDULLAHI ISMAIL!
          </h1>
          <h2 className="text-2xl lg:text-4xl font-bold text-light">
            FULL STACK DEVELOPER
            <span className="text-secondary"> SPECIALIZED IN MERN</span>
          </h2>
        </div>

        <div className="prose prose-lg text-light">
          <p className="text-base lg:text-xl leading-relaxed">
            I'm a passionate Full Stack Developer with expertise in the MERN
            stack (MongoDB, Express.js, React, Node.js). With a strong
            foundation in frontend development, I create responsive and
            intuitive user interfaces while maintaining robust backend
            architectures.
            <br />
            <br />
            My focus is on building scalable web applications that deliver
            exceptional user experiences through clean code, modern design
            patterns, and performance optimization.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 w-full max-w-2xl">
          <button
            onClick={downloadResume}
            disabled={isDownloading}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-secondary text-primary rounded-lg hover:bg-secondary/90 transition-all duration-300"
          >
            <MdArticle className="text-2xl" />
            {isDownloading ? "Downloading..." : "Download Resume"}
          </button>

          <div className="flex gap-4">
            <a
              href="https://github.com/abuaslamtech"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-secondary text-secondary rounded-lg hover:bg-secondary/10 transition-all duration-300"
            >
              <AiFillGithub className="text-2xl" />
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/abdullahabuaslam"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-secondary text-secondary rounded-lg hover:bg-secondary/10 transition-all duration-300"
            >
              <FaLinkedin className="text-2xl" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
