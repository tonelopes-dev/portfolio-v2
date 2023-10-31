import React from "react";

const Banner = () => {
  return (
    <div className="flex items-center	justify-center flex-wrap pt-10 mb-10  ">
      <div className="flex-initial md:w-3/6 px-8 ">
        <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-4xl lg:text-1xl text-left">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 ">
            Desenvolvedor Backend
          </span>
        </h1>
        <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400 text-left">
          Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and
          drive economic growth.
        </p>
      </div>
      <div className="flex justify-center ">
        <img
          className="max-h-64 max-w-64 rounded-full max-md:mt-6"
          src="./src/assets/foto-tone.png"
          alt="image description"
        />
      </div>
    </div>
  );
};

export default Banner;
