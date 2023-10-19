import { useState } from "react";
import Core from "../components/Core";
import Libraries from "../components/Libraries";
import Versions from "../components/Versions";

import {IoIosArrowDropdownCircle} from "react-icons/io"
const Skills = () => {
  const [open, setOpen] = useState({
    core: true,
    lib: false,
    ver: false,
  });
  const [closec, setClosec] = useState(true);
  const [closev, setClosev] = useState(false);
  const [closef, setClosef] = useState(false);

  const reset = () => {
    setClosec(true);
    setClosev(true);
    setClosef(true);
  };
  const handleOpen = (oc) => {
    const newState = { ...open };
    newState[oc] = !newState[oc];
    setOpen(newState);

    if (oc == "core") {
      setClosec(true);
      setClosev(false);
      setClosef(false);
    } else if (oc == "lib") {
      setClosec(false);
      setClosev(false);
      setClosef(true);
    } else {
      setClosec(false);
      setClosev(true);
      setClosef(false);
    }
  };
  return (
    <div className="flex flex-col overflow-hidden lg:flex-row  w-full h-screen justify-center px-4 lg:px-16">
      <div className="pb-8 text-light flex flex-col w-full  mt-16 gap-6 lg:gap-8 h-full justify-center lg:p-16">
        <div className="flex flex-col justify-center ">
          <div className="text-secondary">SKILLS</div>
        </div>
        {/* mobile */}
        <IoIosArrowDropdownCircle
          className="lg:hidden  text-secondary  text-4xl bg-tertiary p-1 rounded-lg ml-auto"
          onClick={reset}
        />
      
    
        <div className="lg:hidden flex flex-col gap-8 w-full mx-auto bg-lblack p-4 rounded-lg ">
          <div
            onClick={() => handleOpen("core")}
            className={`${closec ? "block" : "hidden"}  ${
              closec ? "bg-primary" : "bg-secondary"
            } ${
              closec ? "text-secondary" : "text-primary"
            } border-[1px] border-secondary p-4 font-bold`}
          >
            Core Technologies
          </div>
          <div
            onClick={() => handleOpen("lib")}
            className={`${closef ? "block" : "hidden"}  ${
              closef ? "bg-primary" : "bg-secondary"
            } ${
              closef ? "text-secondary" : "text-primary"
            } border-[1px] border-secondary p-4 font-bold`}
          >
            Libraries & Frameworks
          </div>
          <div
            onClick={() => handleOpen("ver")}
            className={`${closev ? "block" : "hidden"} ${
              closev ? "bg-primary" : "bg-secondary"
            } ${
              closev ? "text-secondary" : "text-primary"
            }  border-[1px] border-secondary  p-4 font-bold`}
          >
            Version Control
          </div>
        </div>
        {/* desktop */}
        <div className="hidden lg:flex flex-row gap-8 w-full mx-auto p-4 rounded-lg ">
          <div
            onClick={() => handleOpen("core")}
            className={`${closec ? "bg-secondary" : "bg-primary"} ${
              closec ? "text-primary" : "text-secondary"
            } ${closec ? "border-none" : "border-[1px]"} ${
              closec ? "border-none" : "border-secondary"
            } p-4 font-bold`}
          >
            Core Technologies
          </div>
          <div
            onClick={() => handleOpen("lib")}
            className={`${closef ? "bg-secondary" : "bg-primary"} ${
              closef ? "text-primary" : "text-secondary"
            } ${closef ? "border-none" : "border-[1px]"} ${
              closef ? "border-none" : "border-secondary"
            } p-4 font-bold`}
          >
            Libraries & Frameworks
          </div>
          <div
            onClick={() => handleOpen("ver")}
            className={`${closev ? "bg-secondary" : "bg-primary"} ${
              closev ? "text-primary" : "text-secondary"
            } ${closev ? "border-none" : "border-[1px]"} ${
              closev ? "border-none" : "border-secondary"
            } p-4 font-bold`}
          >
            Version Control
          </div>
        </div>
        {closec ? (
          <Core />
        ) : closef ? (
          <Libraries />
        ) : closev ? (
          <Versions />
        ) : (
          <Core />
        )}
      </div>
    </div>
  );
};

export default Skills;
