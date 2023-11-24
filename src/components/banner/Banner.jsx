import React from "react";
import ButtonGithub from "../Comuns/ButtonGithub";
import ButtonLinkedin from "../Comuns/ButtonLinkedin";

const Banner = () => {
  return (
    <div className="bg-banner  flex  flex-row bg-gray-50 bg-opacity-90 p-5 hover:bg-white">
      <div className="flex  flex-col-reverse justify-center md:mx-5 md:flex-row lg:pt-10 ">
        <div className=" flex flex-col justify-center  md:w-3/6">
          <h1 className="lg:text-1xl mb-4 text-left text-3xl font-extrabold text-gray-900 dark:text-white md:text-4xl">
            <span className="bg-gradient-to-r from-blue-800 to-indigo-500 bg-clip-text text-transparent ">
              Desenvolvedor Backend
            </span>
          </h1>
          <p className="mb-10 text-left text-lg font-normal text-gray-500 dark:text-gray-400 lg:text-xl">
            Transformando linhas de código em{" "}
            <strong>soluções poderosas</strong>. Explore abaixo para descobrir
            mais sobre minha jornada e como posso contribuir para o sucesso do
            seu projeto.
          </p>
          <div className="flex justify-start">
            <ButtonLinkedin />
            <ButtonGithub />
          </div>

          {/* <SocialMedia /> */}
        </div>
        <div className="h-full flex-1 scale-75 items-center justify-center">
          <img
            className=" rounded-full"
            src="./src/assets/tone-sobre.png"
            alt="Descrição da imagem"
          />
        </div>

        {/* <div className=" m-auto flex  w-1/4 content-center items-center justify-center p-2  md:max-w-sm lg:mb-10">
          <img
            className="  rounded-full"
            src="./src/assets/tone-sobre.png"
            alt="image description"
          />
        </div> */}
      </div>
    </div>
  );
};

export default Banner;
