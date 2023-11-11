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
      <div className="flex flex-row gap-10 shadow-md sm:rounded-b-lg  my-5 p-3 icon-container">
        <div className="flex flex-row icon gap-10 h-20 w-auto rounded-lg ">
          <img
            className="h-20 w-20 rounded-lg "
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
          />

          <img
            className="h-20 w-20 rounded-lg "
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
          />

          <img
            className="h-20 w-20 rounded-lg "
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
            alt=""
          />

          <img
            className="h-20 w-20 rounded-lg "
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg"
            alt=""
          />

          <img
            className="h-20 w-20 rounded-lg "
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg"
            alt=""
          />

          <img
            className="h-20 w-20 rounded-lg"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain-wordmark.svg"
            alt=""
          />

          <img
            className="h-20 w-20 rounded-lg "
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg"
            alt=""
          />

          <i className="devicon-javascript-plain colored text-6xl h-20 w-20 "></i>
          <i className="devicon-nextjs-original-wordmark colored text-6xl	"></i>

          <i className="devicon-react-original-wordmark colored text-6xl"></i>
        </div>
      </div>
    </>
  );
};

export default GaleryStacks;

{
  /* <div>
        <img
          className="h-20 w-20 rounded-lg"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg"
        />
      </div> */
}
