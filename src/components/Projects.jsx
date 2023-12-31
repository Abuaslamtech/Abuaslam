import { FaLaptopCode } from "react-icons/fa6";
import { CgIfDesign } from "react-icons/cg";
import { MdArticle } from "react-icons/md";
import { useState } from "react";

const Projects = ({name, desc, pic, demolink, codelink}) => {
  const [demo, setDemo] = useState(true);
  const [code, setCode] = useState(false);

  const handleClick = (btn) => {
    if (btn == "demo") {
      setDemo(true);
      setCode(false);
    } else {
      setDemo(false);
      setCode(true);
    }
  };
  return (
    <div className="flex bg-lblack   w-full p-8 flex-col justify-around gap-2 hover:animate-pulse">
      <img src={pic} className="text-8xl text-secondary" />
      <h3 className="font-bold text-2xl">{name}</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis,
        tempore.
      </p>
      <div className="flex flex-row justify-around items-center gap-4 w-full mt-4">
        <a href={demolink}
          onClick={() => handleClick("demo")}
          className={`${demo ? "bg-secondary" : "bg-primary"} ${
            demo ? "text-primary" : "text-secondary"
          } ${demo ? "border-none" : "border-[1px]"} ${
            demo ? "border-none" : "border-secondary"
          } p-2 w-[50%] text-center`}
        >
          Demo
        </a>
        <a href={codelink}
          onClick={() => handleClick("code")}
          className={`${code ? "bg-secondary" : "bg-primary"} ${
            code ? "text-primary" : "text-secondary"
          } ${code ? "border-none" : "border-[1px]"} ${
            code ? "border-none" : "border-secondary"
          } p-2 w-[50%] text-center`}
        >
          Code
        </a>
      </div>
    </div>
  );
};

export default Projects;
