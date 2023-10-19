import { RiHome5Line } from "react-icons/ri";
import { BsPersonWorkspace } from "react-icons/bs";
import { RiBriefcase4Fill } from "react-icons/ri";
import { RiPenNibLine } from "react-icons/ri";
import { HiRectangleStack } from "react-icons/hi2";
import { MdArticle } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
    const[clicked, setClicked] = useState({
        home: true,
        about: false,
        services: false,
        skills: false,
        portfolio: false,
        blog: false,
        contact: false,
    });
    const handleClick = (pageName) => {
        const newPages = {...clicked};
        newPages[pageName] = true;
        
     for (const key in newPages){
        if(key !== pageName){
            newPages[key] = false;
        }
     }
     setClicked(newPages)
    }
  return (
    <div className="fixed top-0 w-[20%]  lg:w-[20%]  h-[70%] lg:h-full  flex flex-col rounded-2xl lg:gap-16 bg-lblack">
      <div className="hidden bg-tertiary p-8 lg:flex justify-center items-center">
        <h2 className="text-5xl text-secondary font-bold">ABUASLAM</h2>
      </div>
      <div className="flex flex-col h-[70%] justify-around gap-6  lg:justify-between m-auto lg:m-4">
        <Link to={"/"} onClick={ () => handleClick("home")} >
          <div className="flex flex-row  items-center gap-16 w-[0%] lg:w-[90%] h-10  py-8 bg-bb">
          <div className={ ` rounded-xl ${clicked.home ? 'bg-secondary' : 'bg-tertiary'} ${clicked.home ? 'text-primary' : 'text-light'} p-2 lg-p-4 mx-2  text-4xl`}>
              <RiHome5Line />
            </div>
            <div className="text-light hidden lg:block">HOME</div>
          </div>
        </Link>
        <Link to={"/about"} onClick={ () => handleClick("about")}>
          <div className="flex flex-row  items-center gap-16 w-[0%] lg:w-[90%] h-10  py-8 bg-bb">
            <div className={ `  rounded-xl  ${clicked.about ? 'bg-secondary' : 'bg-tertiary'} ${clicked.about ? 'text-primary' : 'text-light'} p-2 mx-2 text-light text-4xl`}>
              <BsPersonWorkspace />
            </div>
            <div className="text-light hidden lg:block">ABOUT ME</div>
          </div>
        </Link>
        <Link to={"/services"} onClick={ () => handleClick("services")}>
          <div className="flex flex-row  items-center gap-16 w-[0%] lg:w-[90%] h-10  py-8 bg-bb">
          <div className={ `  rounded-xl  ${clicked.services ? 'bg-secondary' : 'bg-tertiary'} ${clicked.services ? 'text-primary' : 'text-light'} p-2 mx-2 text-light text-4xl`}>
              <RiBriefcase4Fill />
            </div>
            <div className="text-light hidden lg:block">SERVICES</div>
          </div>
        </Link>
        <Link to={"/skills"} onClick={ () => handleClick("skills")}>
          <div className="flex flex-row  items-center gap-16 w-[0%] lg:w-[90%] h-10  py-8 bg-bb">
          <div className={ `  rounded-xl  ${clicked.skills ? 'bg-secondary' : 'bg-tertiary'} ${clicked.skills ? 'text-primary' : 'text-light'} p-2 mx-2 text-light text-4xl`}>
              <RiPenNibLine />
            </div>
            <div className="text-light hidden lg:block">SKILLS</div>
          </div>
        </Link>
        <Link to={"/portfolio"} onClick={ () => handleClick("portfolio")}>
          <div className="flex flex-row  items-center gap-16 w-[0%] lg:w-[90%] h-10  py-8 bg-bb">
          <div className={ `  rounded-xl  ${clicked.portfolio ? 'bg-secondary' : 'bg-tertiary'} ${clicked.portfolio ? 'text-primary' : 'text-light'} p-2 mx-2 text-light text-4xl`}>
              <HiRectangleStack />
            </div>
            <div className="text-light hidden lg:block">PORTFOLIO</div>
          </div>
        </Link>
        <Link to={"/blog"} onClick={ () => handleClick("blog")}> 
          <div className="flex flex-row  items-center gap-16 w-[0%] lg:w-[90%] h-10  py-8 bg-bb">
          <div className={ `  rounded-xl  ${clicked.blog ? 'bg-secondary' : 'bg-tertiary'} ${clicked.blog ? 'text-primary' : 'text-light'} p-2 mx-2 text-light text-4xl`}>
              <MdArticle />
            </div>
            <div className="text-light hidden lg:block">BLOG</div>
          </div>
        </Link>
        <Link to={"/contact"} onClick={ () =>  handleClick("contact")}>
          <div className="flex flex-row  items-center gap-16 w-[0%] lg:w-[90%] h-10  py-8 bg-bb">
          <div className={ `  rounded-xl  ${clicked.contact ? 'bg-secondary' : 'bg-tertiary'} ${clicked.contact ? 'text-primary' : 'text-light'} p-2 mx-2 text-light text-4xl`}>
              <RiContactsFill />
            </div>
            <div className="text-light hidden lg:block">CONTACT</div>
          </div>
        </Link>
      </div>
    </div>
  );
};
export default Navbar;
