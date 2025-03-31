"use client";

import {
  Laptop2,
  Code2,
  Server,
  Network,
  Blocks,
  CircuitBoard,
} from "lucide-react";
import { useState } from "react";
import Navbar from "../components/Navbar";

const Services = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      icon: Laptop2,
      title: "FRONTEND DEVELOPMENT",
      description:
        "Building responsive, interactive web applications using React, Next.js, and modern CSS frameworks. Specializing in performance optimization and creating seamless user experiences.",
      skills: ["React", "Next.js", "TailwindCSS", "ES6"],
    },
    {
      icon: Code2,
      title: "BACKEND DEVELOPMENT",
      description:
        "Designing and implementing RESTful APIs with Node.js and Express. Creating secure endpoints and handling data validation and authentication.",
      skills: ["REST", "NODE", "EXPRESS", "JWT"],
    },
    {
      icon: Server,
      title: "FULLSTACK DEVELOPMENT",
      description:
        "End-to-end application development using the MERN stack (MongoDB, Express.js, React, Node.js). Creating scalable APIs and managing database architecture.",
      skills: [
        "REACT",
        "TAILWIND",
        "BOOTSTRAP",
        "Node.js",
        "Express",
        "MongoDB",
        "REST APIs",
      ],
    },
    // {
    //   icon: FaEthereum,
    //   title: "WEB3 DEVELOPMENT",
    //   description:
    //     "Developing decentralized applications (dApps) using Ethereum and other blockchain technologies. Smart contract development and integration with frontend applications.",
    //   skills: ["Solidity", "Web3.js", "Smart Contracts", "dApps"],
    // },
    // {
    //   icon: SiBlockchaindotcom,
    //   title: "BLOCKCHAIN INTEGRATION",
    //   description:
    //     "Integrating blockchain technologies with web applications. Implementing wallet connections and smart contract interactions.",
    //   skills: ["MetaMask", "Smart Contracts", "Token Standards", "Web3"],
    // },
  ];

  return (
    <>
      <Navbar />

      <div className="relative min-h-screen flex flex-col w-full justify-center px-4 lg:px-16 pt-24 pb-16">
        <div className="relative z-10 max-w-6xl mx-auto w-full">
          <div className="relative z-10 pb-8 text-light flex flex-col w-full md:w-4/5 lg:w-3/5 gap-6 h-full justify-center py-4 ">
            <div className="space-y-6">
              <div className="inline-block bg-tertiary/20 rounded-lg px-4 py-2 text-secondary text-sm backdrop-blur-sm border border-tertiary/30 shadow-lg transform hover:scale-105 transition-transform">
                What I Offer
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-light mb-2">
                MY <span className="text-secondary">SERVICES</span>
              </h2>
              <div className=" h-0.5 w-24 bg-gradient-to-r from-secondary to-transparent"></div>
              <p className="text-light/80 max-w-2xl">
                Specialized development services to bring your digital vision to
                life with modern technologies and best practices.
              </p>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="relative group bg-lblack/80 backdrop-blur-md p-8 flex flex-col gap-6 rounded-xl overflow-hidden border-t border-secondary/20 transition-all duration-500"
                style={{
                  transform:
                    hoveredCard === index
                      ? "translateY(-10px)"
                      : "translateY(0)",
                  boxShadow:
                    hoveredCard === index
                      ? "0 15px 30px rgba(0, 0, 0, 0.3)"
                      : "0 5px 15px rgba(0, 0, 0, 0.1)",
                }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Glowing background effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/0 to-secondary/0 group-hover:from-secondary/5 group-hover:to-secondary/20 transition-all duration-700"></div>

                {/* Service icon with animated background */}
                <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-lg bg-tertiary/20 group-hover:bg-secondary/20 transition-all duration-300">
                  <service.icon className="text-3xl text-secondary" />
                </div>

                <div className="relative z-10 space-y-4">
                  <h3 className="font-bold text-xl text-light group-hover:text-secondary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-4">
                    {service.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm transition-all duration-300 hover:bg-secondary hover:text-primary"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom border that animates on hover */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-secondary group-hover:w-full transition-all duration-700"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
