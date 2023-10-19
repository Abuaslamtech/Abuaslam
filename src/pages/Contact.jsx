import { MdEmail } from "react-icons/md";
import { PiPhoneCallFill } from "react-icons/pi";
import { RiWhatsappFill } from "react-icons/ri";
import { RiSendPlane2Fill } from "react-icons/ri";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="flex flex-col overflow-hidden lg:flex-row  w-full h-full justify-center px-4 lg:px-16">
      <div className="pb-8 text-light flex flex-col w-full  mt-16 gap-6 lg:gap-8 h-full justify-center lg:p-16">
        <div className="flex flex-col justify-center ">
          <div className="text-secondary">CONTACT ME</div>
        </div>
        <div className="flex flex-col gap-8 overflow-auto lg:overflow-hidden lg:pb-2 pb-32">
          <div className="flex flex-col lg:flex-row gap-8  w-full">
            <div className="p-6 lg:w-[50%] font-bold flex flex-col gap-2 bg-lblack">
              <div className="text-4xl flex flex-row lg:justify-center  gap-2">
                <PiPhoneCallFill className="text-secondary" />
                <h3>CALL</h3>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-center">Click the button to make a Call</p>
                <a href="tel:2347035974746" className="bg-secondary text-primary w-[50%] m-auto  font-bold text-center py-3 rounded-lg  text-sm">
                  Call
                </a>
              </div>
            </div>
            <div className="p-6 lg:w-[50%] font-bold flex flex-col gap-2 bg-lblack">
              <div className="text-4xl flex flex-row lg:justify-center  gap-2">
                <RiWhatsappFill className="text-secondary" />
                <h3>WHATSAPP</h3>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-center">
                  Click the button to send a message
                </p>
                <a href="https://wa.me/2347035974746" className="bg-secondary text-primary w-[50%] m-auto font-bold text-center py-3 rounded-lg text-sm">
                  Whatsapp
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-[70%] p-6 lg:pb-16 font-bold flex flex-col  gap-4 bg-lblack">
              <div className="text-4xl flex flex-row lg:justify-center  gap-2">
                <MdEmail className="text-secondary" />
                <h3>EMAIL</h3>
              </div>
              <form className="flex flex-col gap-4 lg:gap-8">
                <div className="flex flex-col gap-4">
                  <input
                    type="email"
                    placeholder="Email"
                    className="bg-bb p-4 "
                  />
                  <textarea
                    name="message"
                    placeholder="Write your message here"
                    className="bg-bb p-4 h-40 "
                  ></textarea>
                </div>
                <button className="flex flex-row justify-center lg:w-[40%] lg:m-auto items-center gap-4 bg-secondary text-primary text-xl font-bold p-2">
                  <RiSendPlane2Fill /> Send
                </button>
              </form>
            </div>
            <div className="lg:w-[30%] p-6 lg:pb-16 font-bold flex flex-col  gap-10 bg-lblack">
              <div className="text-4xl flex flex-row lg:justify-center  gap-2">
                <MdEmail className="text-secondary" />
                <h3>SOCIAL</h3>
              </div>
              <div className="flex flex-col justify-center gap-8 ">
                <a href="https://github.com/abuaslamtech" className="flex flex-row items-center gap-8 p-4 border-[1px] border-tertiary rounded-lg hover:bg-secondary hover:text-primary">
                  <FaGithubSquare className="text-2xl" />
                  <div>
                    <p>Github</p>
                  </div>
                </a>
                <a href="https://linkedin.com/in/abdullahiabuaslam" className="flex flex-row items-center gap-8 p-4 border-[1px] border-tertiary rounded-lg hover:bg-secondary hover:text-primary">
                  <FaLinkedin className="text-2xl" />
                  <div>
                    <p>LinkedIn</p>
                  </div>
                </a>
                <a href="https://twitter.com/abdul_abuaslam" className="flex flex-row items-center gap-8 p-4 border-[1px] border-tertiary rounded-lg hover:bg-secondary hover:text-primary">
                  <FaTwitterSquare className="text-2xl" />
                  <div>
                    <p>Twitter</p>
                  </div>
                </a>
                <a href="https://facebook.com/abdullahiabuaslam" className="flex flex-row items-center gap-8 p-4 border-[1px] border-tertiary rounded-lg hover:bg-secondary hover:text-primary">
                  <FaFacebookSquare className="text-2xl" />
                  <div>
                    <p>Facebook</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
