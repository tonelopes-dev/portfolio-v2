import React from "react";
import SocialMedia from "../comuns/SocialMedia";

const Banner = () => {
  return (
    <div className="flex flex-wrap	items-center justify-center bg-white py-10">
      <div className="flex-initial px-8 md:w-3/6 ">
        <h1 className="lg:text-1xl mb-4 text-left text-3xl font-extrabold text-gray-900 dark:text-white md:text-4xl">
          <span className="bg-gradient-to-r from-violet-800 to-indigo-500 bg-clip-text text-transparent ">
            Desenvolvedor Backend
          </span>
        </h1>
        <p className="text-left text-lg font-normal text-gray-500 dark:text-gray-400 lg:text-xl">
          Transformando linhas de código em <strong>soluções poderosas</strong>.
          Explore abaixo para descobrir mais sobre minha jornada e como posso
          contribuir para o sucesso do seu projeto.
        </p>
        <SocialMedia />
      </div>
      <div className="flex justify-center ">
        <img
          className="max-w-64 max-h-64 rounded-full max-md:mt-6"
          src="./src/assets/foto-tone.png"
          alt="image description"
        />
      </div>
    </div>
  );
};

export default Banner;
