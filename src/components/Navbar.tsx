"use client";
import { useEffect, useState } from "react";
import { User, Layers, Info, Code, Mail, Menu, X } from "lucide-react";

export function Navbar() {
  const [active, setActive] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "projects",
        "services",
        "skills",
        "contact",
      ];
      const scrollPos = window.scrollY + window.innerHeight / 3;
      let current = "home";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos) current = id;
      }
      setActive(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navs = [
    { id: "home", icon: <User size={16} />, label: "Intro" },
    { id: "about", icon: <Info size={16} />, label: "About" },
    { id: "projects", icon: <Code size={16} />, label: "Work" },
    { id: "services", icon: <Layers size={16} />, label: "Services" },
    { id: "contact", icon: <Mail size={16} />, label: "Contact" },
  ];

  const handleClick = (id: string) => {
    setIsOpen(false);
    document.getElementById(id)?.scrollIntoView();
  };

  return (
    <>
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-[#1c1916]/80 backdrop-blur-md rounded-full  border border-transparent shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-colors duration-300 md:flex hidden flex-row items-center gap-1 xl:gap-2 p-4">
        {navs.map((n) => (
          <button
            key={n.id}
            onClick={() => handleClick(n.id)}
            className={`flex items-center gap-4 px-8 py-6 rounded-full font-mono text-[11px] tracking-wider uppercase transition-all duration-300 border cursor-pointer select-none ${
              active === n.id
                ? "bg-primary/10 text-primary border-primary/20"
                : "bg-transparent text-subtle border-transparent hover:text-ink hover:bg-white/5"
            }`}
          >
            {n.icon}
            <span className="hidden lg:inline">{n.label}</span>
          </button>
        ))}
      </nav>

      <button
        className="fixed top-5 right-5 z-[60] w-12 h-12 rounded-full bg-[#1c1916]/80 backdrop-blur-md border border-edge flex md:hidden items-center justify-center text-ink cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      <div
        className={`fixed inset-0 z-50 bg-bg/98 backdrop-blur-md flex flex-col justify-center px-8 transition-transform duration-500 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {navs.map((n, i) => (
          <button
            key={n.id}
            onClick={() => handleClick(n.id)}
            style={{ transitionDelay: isOpen ? `${i * 50}ms` : "0ms" }}
            className={`flex items-center gap-4 py-5 font-display text-4xl border-b border-edge-subtle text-left w-full transition-all duration-300 ${
              isOpen
                ? "opacity-100 translate-y-0 text-ink"
                : "opacity-0 translate-y-4 text-subtle"
            }`}
          >
            {n.icon} {n.label}
          </button>
        ))}
      </div>
    </>
  );
}
