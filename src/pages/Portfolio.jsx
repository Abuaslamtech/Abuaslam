import dormsdeal from "../assets/dormsdeal.png";
import classroom from "../assets/classroom.png";
import current from "../assets/current.png"
import annajat from "../assets/annajat.png";
import impics from "../assets/impics.png";
import untitled from "../assets/untitled.png";

import Projects from "../components/Projects";
const Portfolio = () => {
  return (
    <div className="flex flex-col overflow-hidden lg:flex-row  w-full h-full justify-center px-4 lg:px-16">
    <div className="pb-8 text-light flex flex-col w-full  mt-16 gap-6 lg:gap-8 h-full justify-center lg:p-16">
      <div className="flex flex-col justify-center ">
          <div className="text-secondary">PORTFOLIO</div>
        </div>
        <div className="overflow-auto w-full h-full  py-16 ">
          <div className="pb-16 lg:relative w-full flex flex-col  justify-center items-center gap-16 text-light">
            <div className="flex flex-col lg:flex-row gap-16">
              <Projects
                name={"DORMSDEAL"}
                pic={dormsdeal}
                demolink={"https://dormsdeal.netlify.app"}
                codelink={"https://github.com/abuaslamtech/dormsdeal"}
              />
              <Projects
                name={"CLASSROOM"}
                pic={classroom}
                demolink={"https://fudmaclassroom.netlify.app"}
                codelink={"https://github.com/abuaslamtech/classroom"}
              />
              <Projects
                name={"XCURRENT"}
                pic={current}
                demolink={"https://xcurrent.netlify.app"}
                codelink={"https://github.com/abuaslamtech/xcurrent"}
              />
            </div>
            <div className="flex flex-col lg:flex-row gap-16">
              <Projects
                name={"ANNAJAT"}
                pic={annajat}
                demolink={"https://annajatacademy.netlify.app"}
                codelink={"https://github.com/abuaslamtech/annajatacademy"}
              />
              <Projects
                name={"IMPICS"}
                pic={impics}
                demolink={"https://impics.netlify.app"}
                codelink={"https://github.com/abuaslamtech/impics"}
              />
              <Projects
                name={"UNTITLED"}
                pic={untitled}
                demolink={"https://untitled.netlify.app"}
                codelink={"https://github.com/abuaslamtech/untitled"}
              />
            </div>
          </div>

          <button className="mt-16 text-light flex items-center justify-center m-auto border-[1px] border-secondary w-40 p-4 hover:bg-secondary hover:text-primary font-bold">
            Load More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
