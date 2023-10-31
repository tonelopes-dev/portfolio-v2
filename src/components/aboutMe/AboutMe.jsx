import React from "react";

const AboutMe = () => {
  return (
    <div className="flex items-center	justify-center flex-wrap gap-16 pt-5 mb-10">
      <div className="flex justify-center ">
        <img
          className="max-h-64 max-w-64 rounded-full max-md:mt-6"
          src="./src/assets/foto-tone.png"
          alt="image description"
        />
      </div>
      <div className="flex-initial md:w-3/6 pr-8">
        <h1 className="text-2xl text-left pb-3 font-extrabold dark:text-white">Olá, eu sou Tone Lopes</h1>

        <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400 text-left">
          Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and
          drive economic growth.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
