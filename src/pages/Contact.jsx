import { useState } from "react";
import { MdEmail } from "react-icons/md";
import { PiPhoneCallFill } from "react-icons/pi";
import { RiWhatsappFill, RiSendPlane2Fill } from "react-icons/ri";
import {
  FaGithubSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaFacebookSquare,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });

  const contactMethods = [
    {
      icon: PiPhoneCallFill,
      title: "CALL",
      description: "Click the button to make a Call",
      action: "Call",
      link: "tel:2347035974746",
    },
    {
      icon: RiWhatsappFill,
      title: "WHATSAPP",
      description: "Click the button to send a message",
      action: "WhatsApp",
      link: "https://wa.me/2347035974746",
    },
  ];

  const socialLinks = [
    {
      icon: FaGithubSquare,
      name: "Github",
      link: "https://github.com/abuaslamtech",
    },
    {
      icon: FaLinkedin,
      name: "LinkedIn",
      link: "https://linkedin.com/in/abdullahabuaslam",
    },
    {
      icon: FaTwitterSquare,
      name: "Twitter",
      link: "https://twitter.com/abdul_abuaslam",
    },
    {
      icon: FaFacebookSquare,
      name: "Facebook",
      link: "https://facebook.com/abdullahiabuaslam",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="flex flex-col lg:flex-row w-full justify-center px-4 lg:px-16">
      <div className="pb-8 text-light flex flex-col w-full gap-4 h-full justify-center  py-4">
        <div className="flex items-center gap-3">
          <h2 className="text-secondary font-bold text-xl">CONTACT ME</h2>
        </div>

        <div className="flex flex-col gap-8">
          {/* Contact Methods */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className="bg-lblack p-8 rounded-lg transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-center gap-3">
                    <method.icon className="text-4xl text-secondary" />
                    <h3 className="text-2xl font-bold">{method.title}</h3>
                  </div>
                  <p className="text-center text-gray-300">
                    {method.description}
                  </p>
                  <a
                    href={method.link}
                    className="bg-secondary text-primary w-48 mx-auto font-bold text-center py-3 rounded-lg hover:bg-secondary/90 transition-all duration-300"
                  >
                    {method.action}
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Email and Social */}
          <div className="grid grid-cols-1 lg:grid-cols-[2fr,1fr] gap-8">
            {/* Email Form */}
            <div className="bg-lblack p-8 rounded-lg">
              <div className="flex items-center justify-center gap-3 mb-6">
                <MdEmail className="text-4xl text-secondary" />
                <h3 className="text-2xl font-bold">EMAIL</h3>
              </div>
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-bb p-4 rounded focus:outline-none focus:ring-2 focus:ring-secondary transition-all duration-300"
                  required
                />
                <textarea
                  name="message"
                  placeholder="Write your message here"
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-bb p-4 h-40 rounded focus:outline-none focus:ring-2 focus:ring-secondary transition-all duration-300"
                  required
                ></textarea>
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 bg-secondary text-primary text-lg font-bold p-4 rounded-lg hover:bg-secondary/90 transition-all duration-300 w-full lg:w-48 mx-auto"
                >
                  <RiSendPlane2Fill />
                  Send Message
                </button>
              </form>
            </div>

            {/* Social Links */}
            <div className="bg-lblack p-8 rounded-lg">
              <div className="flex items-center justify-center gap-3 mb-6">
                <h3 className="text-2xl font-bold">SOCIAL</h3>
              </div>
              <div className="flex flex-col gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 border border-tertiary rounded-lg hover:bg-secondary hover:text-primary transition-all duration-300"
                  >
                    <social.icon className="text-2xl" />
                    <span className="font-medium">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
