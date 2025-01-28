import { FaLaptopCode, FaServer, FaEthereum } from "react-icons/fa";
import { BiCodeAlt } from "react-icons/bi";
import { TbApi } from "react-icons/tb";
import { SiBlockchaindotcom } from "react-icons/si";

const Services = () => {
  const services = [
    {
      icon: FaLaptopCode,
      title: "FRONTEND DEVELOPMENT",
      description:
        "Building responsive, interactive web applications using React, Next.js, and modern CSS frameworks. Specializing in performance optimization and creating seamless user experiences.",
      skills: ["React", "Next.js", "TailwindCSS", "ES6"],
    },
    {
      icon: TbApi,
      title: "BACKEND DEVELOPMENT",
      description:
        "Designing and implementing RESTful APIs with Node.js and Express. Creating secure endpoints and handling data validation and authentication.",
      skills: ["REST", "NODE", "EXPRESS", "JWT"],
    },
    {
      icon: FaServer,
      title: "FULLSTACK DEVELOPMENT",
      description:
        "End-to-end application development using the MERN stack (MongoDB, Express.js, React, Node.js). Creating scalable APIs and managing database architecture.",
      skills: [
        "REACT",
        "TAILWIND",
        "BOOSTRAP",
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
    <div className="flex flex-col w-full justify-center px-4 lg:px-16">
      <div className="pb-8 text-light flex flex-col w-full gap-8 h-full justify-center py-4">
        <div className="flex flex-col justify-center">
          <p className="text-secondary font-bold text-xl">SERVICES</p>
        </div>
        <div className="w-full overflow-auto py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-lblack p-8 flex flex-col gap-6 rounded-lg hover:transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
              >
                <service.icon className="text-6xl text-secondary" />
                <div className="space-y-4">
                  <h3 className="font-bold text-xl">{service.title}</h3>
                  <p className="text-gray-300 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-4">
                    {service.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-12">
            <button className="border-2 border-secondary px-8 py-3 rounded-lg hover:bg-secondary hover:text-primary transition-all duration-300 font-semibold text-light">
              View All Services
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
