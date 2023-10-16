import { FaLaptopCode } from "react-icons/fa6";
import { CgIfDesign } from "react-icons/cg";
import { MdArticle } from "react-icons/md";
const Services = () => {
  return (
    <div className="flex flex-col lg:flex-row overflow-hidden w-full h-full justify-center px-4 md:px-16">
      <div className="w-full text-light flex flex-col  mt-16 gap-6 h-full justify-center md:p-16">
        <div className="flex flex-col justify-center ">
          <div className="text-secondary">SERVICES</div>
        </div>
        <div className="w-full  overflow-auto py-16">
          <div className=" lg:relative w-full flex flex-col lg:flex-row  justify-center items-center gap-8 text-light">
            <div className="flex bg-lblack  h-[30%] p-8 flex-col justify-around gap-2 hover:animate-pulse">
              <FaLaptopCode className="text-8xl text-secondary" />
              <h3 className="font-bold text-2xl">WEB DESIGN</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis,
                tempore.
              </p>
            </div>
            <div className="lg:relative lg:bottom-20 flex  bg-lblack h-[30%] p-8 flex-col justify-around gap-2 hover:animate-pulse">
              <CgIfDesign className="text-8xl text-secondary" />
              <h3 className="font-bold text-2xl">WEB DESIGN</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis,
                tempore.
              </p>
            </div>
            <div className="flex bg-lblack h-[30%] p-8 flex-col justify-around gap-2 hover:animate-pulse">
              <MdArticle className="text-8xl text-secondary" />
              <h3 className="font-bold text-2xl">WEB DESIGN</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis,
                tempore.
              </p>
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

export default Services;
