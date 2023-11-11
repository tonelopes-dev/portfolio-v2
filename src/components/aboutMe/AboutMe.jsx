import React from "react";

const AboutMe = () => (
  <div
    className="flex items-center	justify-center flex-wrap gap-16 pt-5 mb-10"
    id="aboutme"
  >
    <div className="flex justify-center ">
      <img
        className="max-h-64 max-w-64 rounded-full max-md:mt-6"
        src="./src/assets/foto-tone.png"
        alt="image description"
      />
    </div>
    <div className="flex-initial md:w-3/6 pr-8">
      <h2 className="text-2xl text-left pb-3 font-extrabold dark:text-white">Sobre mim</h2>

      <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400 text-left">
        "Olá! Sou Tone Lopes, um entusiasta do <strong>desenvolvimento de software</strong> com um histórico único no{" "}
        <strong>design gráfico</strong>. Embarquei em uma jornada pelo universo dos sites NoCode, mas foi na programação
        que encontrei minha verdadeira vocação.
        <br />
        <br />
        Durante <strong>dois anos</strong>, mergulhei em <strong>bootcamps renomados</strong>, aprimorando minhas{" "}
        <strong>habilidades técnicas</strong> e desenvolvendo uma mentalidade colaborativa.
        <br />
        <br />
        Participei de bootcamps de destaque, incluindo o <strong>FullStack da Rocketseat</strong> e o Focado em
        Desenvolvimento <strong>Backend da Cubos Academy</strong>. Essas experiências foram fundamentais para consolidar
        meu conhecimento e moldar meu perfil como desenvolvedor comprometido.
        <br />
        <br />
        Minhas habilidades abrangem diversas tecnologias, desde linguagens como <strong>Javascript</strong> e{" "}
        <strong>Typescript</strong> até frameworks poderosos como <strong>Node</strong>, <strong>Express</strong>,{" "}
        <strong>React</strong>, <strong>Next.js</strong> e <strong>React Native</strong>. No mundo dos{" "}
        <strong>bancos de dados</strong>, estou familiarizado com <strong>PostgreSQL</strong> e <strong>SQLite</strong>.
        <br />
        <br />
        Se você busca um desenvolvedor apaixonado, criativo e orientado para resultados, estou aqui para impulsionar o
        sucesso do seu projeto. <br />
        <br />
        Explore mais sobre minhas habilidades, projetos anteriores e como posso agregar valor à sua equipe ou
        empreendimento.
      </p>
    </div>
  </div>
);

export default AboutMe;
