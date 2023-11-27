import React from "react";
import SocialMedia from "../comuns/SocialMedia";


const AboutMe = () => (
  <div id="aboutme">
    <div className="mt-5 flex justify-center rounded-t bg-blue-400 py-5 text-center">
      <h2 className="pb-3 text-center text-2xl font-bold text-white">
        Sobre mim
      </h2>
    </div>
    <div className="bg-aboutme mb-5 flex	h-max flex-wrap items-start justify-evenly  rounded-b bg-opacity-90 shadow-md">
      {/*  <div className="relative h-screen">
        <img
          className="sticky top-0 mx-auto max-w-xs  md:mt-6"
          src="./src/assets/tone-sobre.png"
          alt="image description"
        />
      </div> */}
      <div className="flex-1 border-x-2 bg-white p-8  md:w-3/4">
        <p className="my-auto mb-10  text-left text-lg font-normal text-gray-700 dark:text-gray-400 lg:text-xl">
          Olá! Sou{" "}
          <span className="mb-4 bg-gradient-to-r from-blue-800 to-indigo-500 bg-clip-text text-left text-2xl font-extrabold text-gray-900 text-transparent dark:text-white  ">
            Tone Lopes
          </span>
          , sou{" "}
          <strong className=" mb-4 bg-gradient-to-r from-purple-800 to-purple-500 bg-clip-text text-left text-2xl font-extrabold text-gray-900 text-transparent dark:text-white  ">
            desenvolvedor de software
          </strong>{" "}
          com um histórico único no{" "}
          <strong className=" mb-4 bg-gradient-to-r from-green-800 to-green-500 bg-clip-text text-left text-2xl font-extrabold text-gray-900 text-transparent dark:text-white ">
            design gráfico
          </strong>
          . Embarquei em uma jornada pelo universo dos sites NoCode, mas foi na
          programação que encontrei minha verdadeira vocação.
          <br />
          <br />
          Durante{" "}
          <strong className=" mb-4 bg-gradient-to-r from-blue-800 to-indigo-500 bg-clip-text text-left text-2xl font-extrabold text-gray-900 text-transparent dark:text-white ">
            dois anos
          </strong>
          , mergulhei em{" "}
          <strong className=" mb-4 bg-gradient-to-r from-yellow-800 to-yellow-500 bg-clip-text text-left text-2xl font-extrabold text-gray-900 text-transparent dark:text-white ">
            bootcamps renomados
          </strong>
          , aprimorando minhas{" "}
          <strong className=" mb-4 bg-gradient-to-r from-blue-800 to-indigo-500 bg-clip-text text-left text-2xl font-extrabold text-gray-900 text-transparent dark:text-white ">
            habilidades técnicas
          </strong>{" "}
          e desenvolvendo uma mentalidade colaborativa.
          <br />
          <br />
          <strong className="text-bold">Participei de bootcamps</strong> de
          destaque, incluindo o{" "}
          <strong className=" mb-4 bg-gradient-to-r from-purple-800 to-purple-500 bg-clip-text text-left text-2xl font-extrabold text-gray-900 text-transparent dark:text-white ">
            FullStack da Rocketseat
          </strong>{" "}
          e Fui Selecionado dentro de{" "}
          <strong className="text-bold">36 mil conditados</strong> para
          particiar do Bootcamp em{" "}
          <strong className="text-bold">Desenvolvimento Backend</strong> da{" "}
          <strong className=" mb-4 bg-gradient-to-r from-pink-800 to-pink-500 bg-clip-text text-left text-2xl font-extrabold text-gray-900 text-transparent dark:text-white ">
            Cubos Academy
          </strong>{" "}
          patrocinado pelo{" "}
          <strong className=" mb-4 bg-gradient-to-r from-red-800 to-red-500 bg-clip-text text-left text-2xl font-extrabold text-gray-500 text-transparent dark:text-white ">
            iFood
          </strong>
          . Essas experiências foram fundamentais para consolidar meu
          conhecimento e moldar meu perfil como desenvolvedor comprometido.
          <br />
          <br />
          Minhas habilidades abrangem diversas tecnologias, desde linguagens
          como{" "}
          <strong className=" mb-4 bg-gradient-to-r from-blue-800 to-indigo-500 bg-clip-text text-left text-xl font-bold text-gray-900 text-transparent dark:text-white ">
            Javascript
          </strong>{" "}
          e{" "}
          <strong className=" mb-4 bg-gradient-to-r from-blue-800 to-indigo-500 bg-clip-text text-left text-xl font-bold text-gray-900 text-transparent dark:text-white ">
            Typescript
          </strong>{" "}
          até frameworks poderosos como{" "}
          <strong className=" mb-4 bg-gradient-to-r from-blue-800 to-indigo-500 bg-clip-text text-left text-xl font-bold text-gray-900 text-transparent dark:text-white ">
            Node
          </strong>
          ,{" "}
          <strong className=" mb-4 bg-gradient-to-r from-blue-800 to-indigo-500 bg-clip-text text-left text-xl font-bold text-gray-900 text-transparent dark:text-white ">
            Express
          </strong>
          ,{" "}
          <strong className=" mb-4 bg-gradient-to-r from-blue-800 to-indigo-500 bg-clip-text text-left text-xl font-bold text-gray-900 text-transparent dark:text-white ">
            React
          </strong>
          ,{" "}
          <strong className=" mb-4 bg-gradient-to-r from-blue-800 to-indigo-500 bg-clip-text text-left text-xl font-bold text-gray-900 text-transparent dark:text-white ">
            Next.js
          </strong>{" "}
          e{" "}
          <strong className=" mb-4 bg-gradient-to-r from-blue-800 to-indigo-500 bg-clip-text text-left text-xl font-bold text-gray-900 text-transparent dark:text-white ">
            React Native
          </strong>
          . No mundo dos{" "}
          <strong className=" mb-4 bg-gradient-to-r from-blue-800 to-indigo-500 bg-clip-text text-left text-xl font-bold text-gray-900 text-transparent dark:text-white ">
            bancos de dados
          </strong>
          , estou familiarizado com{" "}
          <strong className=" mb-4 bg-gradient-to-r from-blue-800 to-indigo-500 bg-clip-text text-left text-xl font-bold text-gray-900 text-transparent dark:text-white ">
            PostgreSQL
          </strong>{" "}
          e{" "}
          <strong className=" mb-4 bg-gradient-to-r from-blue-800 to-indigo-500 bg-clip-text text-left text-xl font-bold text-gray-900 text-transparent dark:text-white ">
            SQLite
          </strong>
          .
          <br />
          <br />
          <strong className="text-bold">
            Explore mais sobre minhas habilidades, projetos anteriores e como
            posso agregar valor à sua equipe ou empreendimento.
          </strong>
        </p>
        <SocialMedia />
      </div>
    </div>
  </div>
);

export default AboutMe;
