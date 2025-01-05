import { FaTreeCity } from "react-icons/fa6";
import { GiBookshelf } from "react-icons/gi";
import { PiCertificateFill } from "react-icons/pi";
import { FaCertificate } from "react-icons/fa";

const About = () => {
  const education = [
    {
      institution: "Federal University Dutsin ma",
      program: "BSc. Computer Science",
      year: "2019-2023",
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
      year: "2023",
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

  return (
    <div className="flex flex-col lg:flex-row w-full justify-center px-4 lg:px-16">
      <div className="pb-8 text-light flex flex-col w-full gap-4 h-full justify-center py-4">
        <div className="flex flex-col justify-center">
          <p className="text-secondary font-bold">ABOUT ME</p>
        </div>
        <div className="overflow-auto flex flex-col gap-8 pb-12">
          <div className="bg-lblack p-4 flex flex-col gap-4">
            <div className="flex flex-row gap-4">
              <FaTreeCity className="text-4xl text-secondary" />
              <h3 className="text-4xl">My Vision</h3>
            </div>
            <p className="text-base leading-7 lg:text-lg">
              As a frontend developer, my vision is to create user-centric,
              innovative, and accessible web interfaces that seamlessly merge
              functionality and aesthetics. I aspire to inspire teams to build
              immersive and delightful digital experiences, staying at the
              forefront of emerging technologies and fostering inclusivity.
            </p>
          </div>

          <div className="bg-lblack p-4 flex flex-col gap-4">
            <div className="flex flex-row gap-4">
              <GiBookshelf className="text-4xl text-secondary" />
              <h3 className="text-4xl">Education</h3>
            </div>
            <div className="flex flex-col gap-2 justify-center mx-4">
              {education.map((edu, index) => (
                <a
                  key={index}
                  href={edu.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-row gap-2 items-center hover:text-secondary transition-colors"
                >
                  <FaCertificate className="text-secondary" />
                  <div className="text-base lg:text-xl">
                    {edu.institution} - {edu.program} ({edu.year})
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="bg-lblack p-4 flex flex-col gap-4">
            <div className="flex flex-row gap-4">
              <PiCertificateFill className="text-4xl text-secondary" />
              <h3 className="text-4xl">Certifications</h3>
            </div>
            <div className="flex flex-col gap-2 justify-center mx-4">
              {certifications.map((cert, index) => (
                <a
                  key={index}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-row gap-2 items-center hover:text-secondary transition-colors"
                >
                  <FaCertificate className="text-secondary" />
                  <div className="text-base lg:text-xl">
                    {cert.name} - {cert.issuer} ({cert.year})
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
