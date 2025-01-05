import React from "react";
import { FiClock, FiBell } from "react-icons/fi";
import { FaNewspaper } from "react-icons/fa";
import soon from "../assets/soon.svg";

const Blog = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full justify-center px-4 lg:px-16">
      <div className="pb-8 text-light flex flex-col w-full gap-4 h-full justify-center  py-4">
        <div className="flex items-center gap-3 mb-8">
          <FaNewspaper className="text-2xl text-secondary" />
          <h2 className="text-secondary font-bold text-xl">MY BLOG</h2>
        </div>

        <div className="flex flex-col items-center justify-center gap-8 lg:gap-12">
          <div className="relative w-full max-w-2xl mx-auto">
            <img
              src={soon}
              alt="Coming Soon"
              className="w-full h-auto animate-float"
            />
          </div>

          <div className="text-center space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold text-secondary animate-pulse">
              Coming Soon...
            </h1>

            <p className="text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto">
              I'm working on creating valuable content about web development,
              technology trends, and coding tutorials. Stay tuned!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <button className="flex items-center justify-center gap-2 px-6 py-3 bg-secondary text-primary rounded-lg hover:bg-secondary/90 transition-all duration-300">
                <FiBell className="text-xl" />
                <span>Notify Me</span>
              </button>

              <button className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-secondary text-secondary rounded-lg hover:bg-secondary/10 transition-all duration-300">
                <FiClock className="text-xl" />
                <span>Check Later</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 w-full max-w-3xl">
            {["Web Development", "Tech Trends", "Coding Tutorials"].map(
              (topic, index) => (
                <div
                  key={index}
                  className="bg-lblack p-6 rounded-lg text-center hover:transform hover:scale-105 transition-all duration-300"
                >
                  <h3 className="text-secondary font-bold mb-2">{topic}</h3>
                  <p className="text-gray-400">Coming soon</p>
                </div>
              )
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Blog;
