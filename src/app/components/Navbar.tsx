"use client";
import {
  Home,
  Briefcase,
  PenTool,
  MessagesSquare, // Changed from Contact to a more standard icon
  UserSquare2,
  Layers,
  FileText,
  Menu,
  X
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const navItems = [
    { id: "home", path: "/", icon: Home, label: "HOME" },
    { id: "about", path: "/about", icon: UserSquare2, label: "ABOUT ME" },
    { id: "services", path: "/services", icon: Briefcase, label: "SERVICES" },
    { id: "skills", path: "/skills", icon: PenTool, label: "SKILLS" },
    { id: "projects", path: "/projects", icon: Layers, label: "PROJECTS" },
    // { id: "blog", path: "/blog", icon: FileText, label: "BLOG" },
    { id: "contact", path: "/contact", icon: MessagesSquare, label: "CONTACT" },
  ];
  
  const [activeItem, setActiveItem] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    // Set active item based on current path on initial load
    const path = window.location.pathname;
    const currentItem = navItems.find(item => item.path === path)?.id || "home";
    setActiveItem(currentItem);
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`w-4/5 md:w-auto max-w-3xl border border-secondary/10 shadow-md backdrop-blur-md fixed top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ${
        scrolled ? "bg-lblack/90 backdrop-blur-lg shadow-lg" : "bg-lblack/80"
      } rounded-full py-2 px-4 flex justify-between items-center`}
    >
      <div className="mr-4 flex items-center">
        <h2 className="text-xl md:text-2xl text-secondary font-bold bg-tertiary/20 py-2 px-4 rounded-full">
          ABUASLAM
        </h2>
      </div>
      
      {/* Mobile menu button */}
      <div className="md:hidden">
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 rounded-full hover:bg-tertiary/30 text-light"
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
      
      {/* Desktop menu */}
      <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
        {navItems.map(({ id, path, icon: Icon, label }) => (
          <Link key={id} href={path} onClick={() => setActiveItem(id)}>
            <div className="group flex flex-col items-center justify-center">
              <div
                className={`rounded-full transition-all duration-300 ${
                  activeItem === id
                    ? "bg-secondary text-primary"
                    : "hover:bg-tertiary/30 text-light"
                } p-2 lg:p-3`}
              >
                <Icon className="text-lg lg:text-xl" />
              </div>
              <div
                className={`text-xs rounded-lg py-1 px-2 transition-opacity duration-200 ${
                  activeItem === id
                    ? "opacity-100 text-secondary"
                    : "opacity-70 text-light group-hover:opacity-100"
                }`}
              >
                {label}
              </div>
            </div>
          </Link>
        ))}
      </div>
      
      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full mt-2 p-4 bg-lblack/95 backdrop-blur-lg rounded-2xl shadow-lg md:hidden">
          <div className="flex flex-col space-y-3">
            {navItems.map(({ id, path, icon: Icon, label }) => (
              <Link 
                key={id} 
                href={path} 
                onClick={() => {
                  setActiveItem(id);
                  setMobileMenuOpen(false);
                }}
              >
                <div className={`flex items-center space-x-3 p-2 rounded-lg ${
                  activeItem === id
                    ? "bg-secondary/20 text-secondary"
                    : "text-light hover:bg-tertiary/10"
                }`}>
                  <Icon className="text-xl" />
                  <span>{label}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;