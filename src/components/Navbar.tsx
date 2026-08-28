"use client";
import { useEffect, useState } from "react";
import { User, Layers, Info, Code, Mail, Menu, X, Smartphone } from "lucide-react";

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
    { id: "home", icon: <User size={15} />, label: "Intro" },
    { id: "about", icon: <Info size={15} />, label: "About" },
    { id: "projects", icon: <Smartphone size={15} />, label: "Apps & Work" },
    { id: "services", icon: <Layers size={15} />, label: "Services" },
    { id: "skills", icon: <Code size={15} />, label: "Toolkit" },
    { id: "contact", icon: <Mail size={15} />, label: "Contact" },
  ];

  const handleClick = (id: string) => {
    setIsOpen(false);
    document.getElementById(id)?.scrollIntoView();
  };

  return (
    <>
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-[#0D1B3E]/85 backdrop-blur-md rounded-full border border-[#1E3A6E] shadow-[0_8px_32px_rgba(0,0,0,0.4)] transition-colors duration-300 md:flex hidden flex-row items-center gap-1 p-2 px-3">
        {navs.map((n) => (
          <button
            key={n.id}
            onClick={() => handleClick(n.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full font-mono text-[11px] tracking-wider uppercase transition-all duration-200 border cursor-pointer select-none ${
              active === n.id
                ? "bg-primary text-white border-primary shadow-[0_0_16px_rgba(37,99,235,0.4)]"
                : "bg-transparent text-muted border-transparent hover:text-white hover:bg-white/5"
            }`}
          >
            {n.icon}
            <span className="hidden lg:inline font-medium">{n.label}</span>
          </button>
        ))}
      </nav>

      <button
        aria-label="Toggle Navigation Menu"
        className="fixed top-5 right-5 z-[60] w-11 h-11 rounded-full bg-[#0D1B3E]/90 backdrop-blur-md border border-edge flex md:hidden items-center justify-center text-ink cursor-pointer shadow-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      <div
        className={`fixed inset-0 z-50 bg-[#070D1D]/98 backdrop-blur-xl flex flex-col justify-center px-8 transition-transform duration-400 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-3 max-w-sm mx-auto w-full">
          {navs.map((n, i) => (
            <button
              key={n.id}
              onClick={() => handleClick(n.id)}
              style={{ transitionDelay: isOpen ? `${i * 40}ms` : "0ms" }}
              className={`flex items-center gap-4 py-4 px-4 rounded-xl border border-edge-subtle text-left w-full transition-all duration-200 text-lg font-semibold ${
                active === n.id
                  ? "bg-primary/20 text-accent border-primary/40"
                  : "bg-surface/50 text-muted hover:text-white hover:bg-surface"
              } ${
                isOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              {n.icon} {n.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

