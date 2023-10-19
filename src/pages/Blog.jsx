import soon from "../assets/soon.svg";

const Blog = () => {
  return (
    <div className="flex flex-col overflow-hidden lg:flex-row  w-full h-screen justify-center px-4 lg:px-16">
      <div className="pb-8 text-light flex flex-col w-full  mt-16 gap-6 lg:gap-8 h-full justify-center lg:p-16">
        <div className="flex flex-col justify-center ">
          <div className="text-secondary">MY BLOG</div>
        </div>
        <div className="flex flex-col gap-8 lg:gap-32 overflow-auto lg:pb-2 pb-32">
            <img src={soon} className="w-[80%]"/>
            <p className="text-4xl text-center">Coming soon...</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
