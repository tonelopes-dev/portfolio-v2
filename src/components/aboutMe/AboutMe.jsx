import React from "react";
import SocialMedia from "../comuns/SocialMedia";

const AboutMe = () => (
  <div
    className="my-5 flex	flex-wrap items-start justify-center gap-8 rounded-lg bg-white pt-5 shadow-md"
    id="aboutme"
  >
    <div className="my-3 md:h-screen">
      <img
        className="max-w-64 sticky top-0 max-h-64 rounded-full pt-5 max-md:mt-6"
        src="./src/assets/foto-tone.png"
        alt="image description"
      />
    </div>
    <div className="flex-initial px-8 pt-5 md:w-3/6">
      <h2 className="pb-3 text-left text-2xl font-extrabold dark:text-white">
        Sobre mim
      </h2>

      <p className="text-left text-lg font-normal text-gray-700 dark:text-gray-400 lg:text-xl">
        Olá! Sou Tone Lopes, sou <strong>desenvolvedor de software</strong> com
        um histórico único no <strong>design gráfico</strong>. Embarquei em uma
        jornada pelo universo dos sites NoCode, mas foi na programação que
        encontrei minha verdadeira vocação.
        <br />
        <br />
        Durante <strong>dois anos</strong>, mergulhei em{" "}
        <strong>bootcamps renomados</strong>, aprimorando minhas{" "}
        <strong>habilidades técnicas</strong> e desenvolvendo uma mentalidade
        colaborativa.
        <br />
        <br />
        Participei de bootcamps de destaque, incluindo o{" "}
        <strong>FullStack da Rocketseat</strong> e o Focado em Desenvolvimento{" "}
        <strong>Backend da Cubos Academy</strong>. Essas experiências foram
        fundamentais para consolidar meu conhecimento e moldar meu perfil como
        desenvolvedor comprometido.
        <br />
        <br />
        Minhas habilidades abrangem diversas tecnologias, desde linguagens como{" "}
        <strong>Javascript</strong> e <strong>Typescript</strong> até frameworks
        poderosos como <strong>Node</strong>, <strong>Express</strong>,{" "}
        <strong>React</strong>, <strong>Next.js</strong> e{" "}
        <strong>React Native</strong>. No mundo dos{" "}
        <strong>bancos de dados</strong>, estou familiarizado com{" "}
        <strong>PostgreSQL</strong> e <strong>SQLite</strong>.
        <br />
        <br />
        Explore mais sobre minhas habilidades, projetos anteriores e como posso
        agregar valor à sua equipe ou empreendimento.
      </p>
      <SocialMedia />
    </div>
  </div>
);

export default AboutMe;
