
import Projects from "../components/Projects";
const Portfolio = () => {

  return (
    <div className="flex flex-col lg:flex-row overflow-hidden w-full h-full justify-center px-4 md:px-16">
      <div className="w-full text-light flex flex-col  mt-16 gap-6 h-full justify-center md:p-16">
        <div className="flex flex-col justify-center ">
          <div className="text-secondary">PORTFOLIO</div>
        </div>
        <div className="w-full  overflow-auto py-16">
          <div className="pb-16 lg:relative w-full flex flex-col  justify-center items-center gap-16 text-light">
            <div className="flex flex-col lg:flex-row gap-16">
             <Projects name={"DORMSDEAL"}/>
             <Projects name={"CLASSROOM"}/>
             <Projects name={"XCURRENT"}/>
            </div>
            <div className="flex flex-col lg:flex-row gap-16">
             <Projects name={"ANNAJAT"}/>
             <Projects name={"IMPICS"}/>
             <Projects name={"WATCHIT"}/>
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
