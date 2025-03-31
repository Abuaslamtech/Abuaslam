"use client";

import { useState } from "react";
import {
  Phone,
  MessageSquare,
  Mail,
  Send,
  Github,
  Linkedin,
  Twitter,
  Facebook,
  User,
  ArrowRight,
  MapPin,
  Link,
} from "lucide-react";
import Navbar from "../components/Navbar";

// Components for better maintainability
const SectionHeading = ({ children, icon: Icon }) => (
  <div className="flex items-center gap-3 mb-6">
    <div className="bg-tertiary/20 rounded-full py-2 px-4 inline-flex items-center">
      {Icon && <Icon className="text-secondary mr-2 h-5 w-5" />}
      <h2 className="text-secondary font-bold">{children}</h2>
      <span className="inline-block w-2 h-2 rounded-full bg-secondary ml-3"></span>
    </div>
  </div>
);

const ContactCard = ({
  icon: Icon,
  title,
  description,
  actionText,
  actionLink,
}) => (
  <div className="md:w-1/3 bg-lblack/80 backdrop-blur-sm p-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-tertiary/10 border border-tertiary/10 group hover:border-tertiary/30">
    <div className="flex flex-col gap-4 items-center">
      <div className="bg-tertiary/10 p-4 rounded-full group-hover:bg-secondary/20 transition-all duration-300">
        <Icon className="h-7 w-7 text-secondary" />
      </div>
      <h3 className="text-xl font-bold text-secondary">{title}</h3>
      <p className="text-center text-gray-300 text-sm">{description}</p>
      <a
        href={actionLink}
        className="bg-tertiary/30 mt-2 w-full hover:bg-secondary text-light hover:text-primary font-medium text-center py-3 rounded-md transition-all duration-300 text-sm flex items-center justify-center gap-2 group-hover:-translate-y-1"
      >
        {actionText}
        <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0" />
      </a>
    </div>
  </div>
);

const SocialLink = ({ icon: Icon, name, link }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-4 p-3 border border-tertiary/20 rounded-md hover:bg-secondary hover:text-primary transition-all duration-300 group hover:-translate-y-1"
  >
    <div className="bg-tertiary/10 p-2 rounded-full group-hover:bg-primary/20 transition-colors duration-300">
      <Icon className="h-5 w-5" />
    </div>
    <span className="font-medium">{name}</span>
  </a>
);

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      console.log(formData);
      setIsSubmitting(false);
      setSubmitStatus("success");
      // Reset form after successful submission
      setTimeout(() => setSubmitStatus(null), 3000);
    }, 1000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="relative">
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div className="relative">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="bg-tertiary/10 pl-12 p-4 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all duration-300 text-light"
            required
          />
          <div className="absolute left-4 top-1/2 -translate-y-1/2">
            <User className="h-5 w-5 text-secondary/70" />
          </div>
        </div>
        <div className="relative">
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="bg-tertiary/10 pl-12 p-4 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all duration-300 text-light"
            required
          />
          <div className="absolute left-4 top-1/2 -translate-y-1/2">
            <Mail className="h-5 w-5 text-secondary/70" />
          </div>
        </div>
        <textarea
          name="message"
          placeholder="Write your message here"
          value={formData.message}
          onChange={handleChange}
          className="bg-tertiary/10 p-4 h-40 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all duration-300 text-light"
          required
        ></textarea>
        <button
          type="submit"
          disabled={isSubmitting}
          className={`flex items-center justify-center gap-2 bg-tertiary/30 hover:bg-secondary text-light hover:text-primary text-sm font-bold p-4 rounded-md transition-all duration-300 w-full ${
            isSubmitting
              ? "opacity-70 cursor-not-allowed"
              : "hover:-translate-y-1"
          }`}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
          <Send className="h-4 w-4" />
        </button>

        {submitStatus === "success" && (
          <div className="bg-green-500/20 text-green-400 p-3 rounded-md text-center text-sm mt-2 animate-pulse">
            Message sent successfully!
          </div>
        )}
      </form>
    </div>
  );
};

const Contact = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: "Call Me",
      description: "Have a quick question? Reach out directly by phone",
      actionText: "Make a Call",
      actionLink: "tel:2347035974746",
    },
    {
      icon: MessageSquare,
      title: "WhatsApp",
      description: "Send me a message on WhatsApp for a quicker response",
      actionText: "Chat on WhatsApp",
      actionLink: "https://wa.me/2347035974746",
    },
    {
      icon: MapPin,
      title: "Location",
      description:
        "Based in Nigeria, available for remote & international projects",
      actionText: "View on Map",
      actionLink: "#",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      name: "Github",
      link: "https://github.com/abuaslamtech",
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      link: "https://linkedin.com/in/abuaslamtech",
    },
    {
      icon: Twitter,
      name: "Twitter",
      link: "https://twitter.com/abuaslamtech",
    },
    {
      icon: Facebook,
      name: "Facebook",
      link: "https://facebook.com/abuaslamtech",
    },
  ];

  return (
    <>
      <Navbar />

      <div className="relative min-h-screen flex flex-col w-full justify-center px-4 lg:px-16 pt-24 pb-16">
        <div className="relative z-10 max-w-6xl mx-auto w-full">
          <div className="relative z-10 pb-8 text-light flex flex-col w-full  gap-6 h-full justify-center py-4 ">
            <div className="space-y-6">
              <div className="inline-block bg-tertiary/20 rounded-lg px-4 py-2 text-secondary text-sm backdrop-blur-sm border border-tertiary/30 shadow-lg transform hover:scale-105 transition-transform">
                Get in touch
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-light mb-2">
                LET'S <span className="text-secondary">CONNECT</span>
              </h2>
              <div className=" h-0.5 w-24 bg-gradient-to-r from-secondary to-transparent"></div>
              <p className="text-light/80 max-w-2xl">
                Get in touch with me to transform your digital ideas into
                reality. I leverage modern technologies and best practices to
                deliver efficient and innovative solutions tailored to your
                needs.
              </p>
            </div>

            <div className="w-full flex flex-col gap-8 mt-8">
              {/* Main content - left side */}
              <div className="w-full  flex flex-col gap-8">
                {/* Contact Methods */}
                <div className="w-full flex flex-col md:flex-row gap-6">
                  {contactMethods.map((method, index) => (
                    <ContactCard
                      key={index}
                      icon={method.icon}
                      title={method.title}
                      description={method.description}
                      actionText={method.actionText}
                      actionLink={method.actionLink}
                    />
                  ))}
                </div>

                <div className=" w-full flex flex-col md:flex-row justify-between gap-6">
                  {/* Email Form */}
                  <div className="w-full bg-lblack/80 backdrop-blur-sm p-6 lg:p-8 rounded-lg border border-tertiary/10 hover:shadow-lg hover:shadow-tertiary/10 transition-all duration-300">
                    <div className="flex items-center justify-center gap-3 mb-6">
                      <div className="bg-tertiary/10 p-3 rounded-full">
                        <Mail className="h-6 w-6 text-secondary" />
                      </div>
                      <h3 className="text-xl font-bold text-light">
                        SEND EMAIL
                      </h3>
                    </div>
                    <ContactForm />
                  </div>
                  {/* Sidebar - right side */}

                  {/* Social Links */}
                  <div className="w-full bg-lblack/80 backdrop-blur-sm p-6 rounded-lg border border-tertiary/10 hover:shadow-lg hover:shadow-tertiary/10 transition-all duration-300 sticky top-24">
                    <div className="flex items-center justify-center gap-3 mb-6">
                      <div className="bg-tertiary/10 p-3 rounded-full">
                        <Link className="h-6 w-6 text-secondary" />
                      </div>
                      <h3 className="text-xl font-bold text-light">
                        CONNECT WITH ME
                      </h3>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      {socialLinks.map((social, index) => (
                        <SocialLink
                          key={index}
                          icon={social.icon}
                          name={social.name}
                          link={social.link}
                        />
                      ))}
                    </div>

                    {/* Additional contact card */}
                    <div className="mt-8 bg-tertiary/5 p-6 rounded-2xl border border-tertiary/10">
                      <h4 className="text-secondary font-bold mb-2">
                        Contact Hours
                      </h4>
                      <p className="text-light/80 text-sm mb-4">
                        Available Monday to Friday, 9am - 5pm WAT
                      </p>
                      <div className="bg-tertiary/10 p-3 rounded-lg">
                        <p className="text-light/90 text-xs">
                          Priority response for business inquiries
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
