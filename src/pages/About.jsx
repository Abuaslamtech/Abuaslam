import abuaslam from "../assets/abuaslam.png";
import { FaTreeCity } from "react-icons/fa6";
import { GiBookshelf } from "react-icons/gi";
import { PiCertificateFill } from "react-icons/pi";
import { FaCertificate } from "react-icons/fa";
const About = () => {
  return (
    <div className="flex flex-col lg:flex-row overflow-hidden w-full h-full justify-center px-4 lg:px-16">
      <div className=" text-light flex flex-col w-full lg:w-[80%] mt-16 gap-6 h-full justify-center lg:p-16">
        <div className="flex flex-col justify-center ">
          <div className="text-secondary">ABOUT ME</div>
        </div>
        <div className="flex flex-col gap-8 overflow-auto pb-12">
          <div className="bg-lblack p-4 flex flex-col gap-4">
            <div className="flex flex-row gap-4">
              <FaTreeCity className="text-4xl text-secondary" />
              <h3 className="text-4xl">My Vision</h3>
            </div>

            <p className=" text-base leading-7 lg:text-lg">
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
              <h3 className="text-4xl ">Education</h3>
            </div>
            <p className=" text-base leading-7 lg:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae assumenda voluptatibus nulla velit dolores, ducimus
              ipsum hic? Minus sed perferendis facere rerum eveniet, nostrum ut
              maxime. Cum unde doloremque sapiente?
            </p>
          </div>
          <div className="bg-lblack p-4 flex flex-col gap-4">
            <div className="flex flex-row gap-4">
              <PiCertificateFill className="text-4xl text-secondary" />
              <h3 className="text-4xl">Certifications</h3>
            </div>
            <div className="flex flex-col gap-2 justify-center mx-8">
              <div className="flex flex-row gap-2 items-center ">
                <FaCertificate className="text-secondary" />
                <div className="text-base lg:text-xl">FreeCodeCamp</div>
              </div>
              <div className="flex flex-row gap-2 items-center ">
                <FaCertificate className="text-secondary" />
                <div className="text-base lg:text-xl">
                  John Hompkins University
                </div>
              </div>
              <div className="flex flex-row gap-2 items-center ">
                <FaCertificate className="text-secondary" />
                <div className="text-base lg:text-xl">Coursera</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex flex-col w-[60%] justify-end ">
        <img src={abuaslam} alt="" />
      </div>
    </div>
  );
};

export default About;
