import {
  RiHome5Line,
  RiBriefcase4Fill,
  RiPenNibLine,
  RiContactsFill,
} from "react-icons/ri";
import { BsPersonWorkspace } from "react-icons/bs";
import { HiRectangleStack } from "react-icons/hi2";
import { MdArticle } from "react-icons/md";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const navItems = [
    { id: "home", path: "/", icon: RiHome5Line, label: "HOME" },
    { id: "about", path: "/about", icon: BsPersonWorkspace, label: "ABOUT ME" },
    {
      id: "services",
      path: "/services",
      icon: RiBriefcase4Fill,
      label: "SERVICES",
    },
    { id: "skills", path: "/skills", icon: RiPenNibLine, label: "SKILLS" },
    {
      id: "portfolio",
      path: "/portfolio",
      icon: HiRectangleStack,
      label: "PORTFOLIO",
    },
    { id: "blog", path: "/blog", icon: MdArticle, label: "BLOG" },
    { id: "contact", path: "/contact", icon: RiContactsFill, label: "CONTACT" },
  ];

  const [activeItem, setActiveItem] = useState("home");

  return (
    <div className="fixed top-0 bottom-0 w-[20%] lg:w-[20%] gap-6 h-full flex flex-col bg-lblack">
      <div className="hidden bg-tertiary p-8 lg:flex justify-center items-center">
        <h2 className="text-4xl text-secondary font-bold">ABUASLAM</h2>
      </div>

      <div className="flex flex-col h-[70%] justify-around gap-4 lg:justify-between m-auto lg:m-4">
        {navItems.map(({ id, path, icon: Icon, label }) => (
          <Link key={id} to={path} onClick={() => setActiveItem(id)}>
            <div className="flex flex-row items-center gap-4 w-[0%] lg:w-full h-10 py-6 pr-9 bg-bb">
              <div
                className={`p-2 mx-2 text-2xl ${
                  activeItem === id
                    ? "bg-secondary text-primary"
                    : "bg-tertiary text-light"
                }`}
              >
                <Icon />
              </div>
              <div className="text-light hidden lg:block">{label}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
