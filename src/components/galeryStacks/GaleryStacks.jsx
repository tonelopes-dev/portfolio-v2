import React, { useEffect } from "react";

const GaleryStacks = () => {
  useEffect(() => {
    const iconContainer = document.querySelector(".icon-container");
    const icons = document.querySelectorAll(".icon");

    let iconIndex = 0;

    function resetAnimation() {
      // Mova o ícone 1 para o final após ter sido completamente removido da tela
      iconContainer.appendChild(icons[iconIndex]);
      iconIndex = (iconIndex + 1) % icons.length;
    }

    iconContainer.addEventListener("animationiteration", resetAnimation);

    // Limpe os ouvintes de evento quando o componente é desmontado
    return () => {
      iconContainer.removeEventListener("animationiteration", resetAnimation);
    };
  }, []); // O segundo argumento vazio [] garante que o efeito seja executado apenas uma vez durante o montagem do componente

  return (
    <>
      <div className="icon-container flex flex-row gap-10   bg-white p-3 py-5  shadow-md sm:rounded-b-lg">
        <div
          className="icon flex h-20 w-auto flex-row items-center  gap-10 rounded-lg 
        "
        >
          <i className="devicon-html5-plain-wordmark colored text-6xl"></i>

          <i className="devicon-css3-plain-wordmark colored text-6xl"></i>

          <i className="devicon-javascript-plain colored    text-6xl"></i>

          <i className="devicon-typescript-plain colored  text-6xl "></i>

          <i className="devicon-git-plain-wordmark colored text-6xl"></i>

          <i className="devicon-github-original-wordmark colored text-6xl"></i>

          <i className="devicon-bootstrap-plain-wordmark colored text-6xl"></i>

          <i className="devicon-sass-original colored text-6xl"></i>

          <i className="devicon-tailwindcss-original-wordmark colored text-9xl"></i>

          <i className="devicon-nodejs-plain-wordmark colored text-9xl"></i>

          <i className="devicon-express-original-wordmark colored text-8xl"></i>

          <i className="devicon-sqlite-plain-wordmark colored text-8xl"></i>

          <i className="devicon-postgresql-plain-wordmark colored text-6xl"></i>

          <i className="devicon-mongodb-plain-wordmark colored text-6xl"></i>

          <i className="devicon-firebase-plain-wordmark colored text-6xl"></i>

          <i className="devicon-react-original-wordmark colored text-6xl"></i>

          <i className="devicon-nextjs-original-wordmark colored text-8xl	"></i>

          <i className="devicon-nestjs-plain-wordmark colored text-8xl"></i>
        </div>
      </div>
    </>
  );
};

export default GaleryStacks;
