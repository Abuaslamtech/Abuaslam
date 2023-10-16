import abuaslam from "../assets/abuaslam.png";
import {AiFillGithub} from "react-icons/ai";
import { MdArticle } from "react-icons/md";

const Home = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full h-full justify-center px-4 lg:px-16">
      <div className=" text-light flex flex-col w-full lg:w-[80%] gap-16 h-full justify-center lg:p-16">
        <div className="flex flex-col gap-3 w-[80%] ">
          <h2 className=" text-2xl lg:text-4xl font-bold">HI, I AM ABDULLAHI ISMAIL!</h2>
          <h2 className=" text-xl lg:text-4xl font-bold">
            A CREATIVE <span className="text-secondary">FRONTEND ENGINEER</span>
          </h2>
          <p className="mt-8 text-base lg:text-xl leading-7">
          As a frontend developer, my vision is to create user-centric,
              innovative, and accessible web interfaces that seamlessly merge
              functionality and aesthetics. <br/> <br/>I aspire to inspire teams to build
              immersive and delightful digital experiences, staying at the
              forefront of emerging technologies and fostering inclusivity.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row w-[90%] lg:justify-around mx-auto gap-8 lg:gap-32 ">
          <button className="bg-secondary text-primary hover:bg-primary hover:text-secondary hover:border-[1px] hover:border-secondary w-[80%] py-4 text-xl font-bold">
          <MdArticle className="inline text-primarytext-2xl mr-4" /> Resume
          </button>
          <button className="w-[80%] border-[1px] py-4 text-xl font-bold border-secondary hover:bg-secondary hover:text-primary">
            <AiFillGithub className="inline text-secondarytext-2xl mr-4" /> Github Repo
          </button>
        </div>
      </div>
      <div className=" hidden lg:flex flex-col w-[60%] justify-center items-center m-auto">
          <img src={abuaslam} alt="" />
        </div>
    </div>
  );
};

export default Home;
