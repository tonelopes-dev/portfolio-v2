import React from "react";
import SocialMedia from "../comuns/SocialMedia";

const AboutMe = () => (
  <>
    <div className="mt-5 flex-1 justify-center rounded-t bg-violet-200 py-5 text-center">
      <h2 className="pb-3 text-center text-2xl font-bold text-violet-800">
        Sobre mim
      </h2>
    </div>
    <div
      className="mb-5 flex	flex-wrap items-start justify-evenly gap-8 rounded-b bg-white bg-opacity-90 shadow-md"
      id="aboutme"
    >
      <div className="my-3 md:h-screen">
        <img
          className="max-w-64 sticky top-0 max-h-64 rounded-full pt-5 max-md:mt-6"
          src="./src/assets/foto-tone.png"
          alt="image description"
        />
      </div>
      <div className="flex-initial border-x-2  px-8 pt-5 md:w-3/6">
        <p className="mb-10  text-left text-lg font-normal text-gray-700 dark:text-gray-400 lg:text-xl">
          Olá! Sou Tone Lopes, sou{" "}
          <strong className="text-violet-800">desenvolvedor de software</strong>{" "}
          com um histórico único no{" "}
          <strong className="text-violet-800">design gráfico</strong>. Embarquei
          em uma jornada pelo universo dos sites NoCode, mas foi na programação
          que encontrei minha verdadeira vocação.
          <br />
          <br />
          Durante <strong className="text-violet-800">dois anos</strong>,
          mergulhei em{" "}
          <strong className="text-violet-800">bootcamps renomados</strong>,
          aprimorando minhas{" "}
          <strong className="text-violet-800">habilidades técnicas</strong> e
          desenvolvendo uma mentalidade colaborativa.
          <br />
          <br />
          Participei de bootcamps de destaque, incluindo o{" "}
          <strong className="text-violet-800">FullStack da Rocketseat</strong> e
          o Focado em Desenvolvimento{" "}
          <strong className="text-violet-800">Backend da Cubos Academy</strong>.
          Essas experiências foram fundamentais para consolidar meu conhecimento
          e moldar meu perfil como desenvolvedor comprometido.
          <br />
          <br />
          Minhas habilidades abrangem diversas tecnologias, desde linguagens
          como <strong className="text-violet-800">Javascript</strong> e{" "}
          <strong className="text-violet-800">Typescript</strong> até frameworks
          poderosos como <strong className="text-violet-800">Node</strong>,{" "}
          <strong className="text-violet-800">Express</strong>,{" "}
          <strong className="text-violet-800">React</strong>,{" "}
          <strong className="text-violet-800">Next.js</strong> e{" "}
          <strong className="text-violet-800">React Native</strong>. No mundo
          dos <strong className="text-violet-800">bancos de dados</strong>,
          estou familiarizado com{" "}
          <strong className="text-violet-800">PostgreSQL</strong> e{" "}
          <strong className="text-violet-800">SQLite</strong>.
          <br />
          <br />
          Explore mais sobre minhas habilidades, projetos anteriores e como
          posso agregar valor à sua equipe ou empreendimento.
        </p>
        <SocialMedia />
      </div>
    </div>
  </>
);

export default AboutMe;
