import React from "react";
import ButtonLinkedin from "/src/components/comuns/ButtonLinkedin";
import ButtonGithub from "/src/components/comuns/ButtonGithub";
import ButtonDownloadCV from "/src/components/comuns/ButtonDownloadCV";

const Banner = () => {
  return (
    <div className="lg:h-600 bg-banner flex h-2/4 flex-col-reverse justify-center  bg-gray-50 bg-opacity-90 px-8 pb-4 hover:bg-white md:flex-row">
      <div className=" flex flex-1 flex-col  justify-center">
        <h1 className="lg:text-1xl mb-4 text-left text-3xl font-extrabold text-gray-900 dark:text-white md:text-4xl">
          <span className="bg-gradient-to-r from-blue-800 to-indigo-500 bg-clip-text text-transparent ">
            Desenvolvedor Backend
          </span>
        </h1>
        <p className="mb-10 text-left text-lg font-normal text-gray-500 dark:text-gray-400 lg:text-xl">
          Transformando linhas de código em <strong>soluções poderosas</strong>.
          Explore abaixo para descobrir mais sobre minha jornada e como posso
          contribuir para o sucesso do seu projeto.
        </p>
        <div>
          <div className="flex flex-wrap justify-start">
            <ButtonLinkedin />
            <ButtonGithub />
            <ButtonDownloadCV />
          </div>
        </div>
      </div>
      <div className="h-max-img w-auto  items-center justify-center ">
        <img
          className="mx-auto h-auto w-auto py-4"
          src="https://raw.githubusercontent.com/tonelopes-dev/portfolio-v2/main/src/assets/tone-sobre-sm.png"
          alt="Descrição da imagem"
        />
      </div>
    </div>
  );
};

export default Banner;
