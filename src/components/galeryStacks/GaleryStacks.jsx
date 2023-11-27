import React, { useEffect, useState } from "react";

const Icon = ({ name, className, size }) => (
  <i className={`devicon-${name} ${className} text-${size}xl colored`}></i>
);

const GaleryStacks = () => {
  const [icons, setIcons] = useState([
    { name: "html5-plain-wordmark", size: 6 },
    { name: "css3-plain-wordmark", size: 6 },
    { name: "javascript-plain", size: 6 },
    { name: "typescript-plain", size: 6 },
    { name: "git-plain-wordmark", size: 6 },
    { name: "github-original-wordmark", size: 6 },
    { name: "bootstrap-plain-wordmark", size: 6 },
    { name: "sass-original", size: 6 },
    { name: "tailwindcss-original-wordmark", size: 9 },
    { name: "nodejs-plain-wordmark", size: 9 },
    { name: "express-original-wordmark", size: 8 },
    { name: "sqlite-plain-wordmark", size: 8 },
    { name: "postgresql-plain-wordmark", size: 6 },
    { name: "mongodb-plain-wordmark", size: 6 },
    { name: "firebase-plain-wordmark", size: 6 },
    { name: "react-original-wordmark", size: 6 },
    { name: "nextjs-original-wordmark", size: 8 },
    // { name: "nestjs-plain-wordmark", size: 8 },
  ]);

  useEffect(() => {
    const resetAnimation = () => {
      setIcons((prevIcons) => {
        const firstIcon = prevIcons.shift();
        return [...prevIcons, firstIcon];
      });
    };

    const iconContainer = document.querySelector(".icon-container");
    iconContainer.addEventListener("animationend", resetAnimation);

    return () => {
      iconContainer.removeEventListener("animationend", resetAnimation);
    };
  }, []);

  return (
    <div className="icon-container bg-galeryStacks flex flex-row gap-10 border-t bg-gray-50 p-3 py-5  shadow-md sm:rounded-b-lg">
      <div className="icon flex h-20 w-auto flex-row items-center  gap-10 rounded-lg">
        {icons.map((icon, index) => (
          <Icon
            key={index}
            name={icon.name}
            className="transform-gpu text-center transition-transform hover:scale-105 hover:shadow-md"
            size={icon.size}
          />
        ))}
      </div>
    </div>
  );
};

export default GaleryStacks;

/* import React, { useEffect } from "react";

// import required modules

const GaleryStacks = () => {
  useEffect(() => {
    const iconContainer = document.querySelector(".icon-container");
    const icons = document.querySelectorAll(".icon");

    let iconIndex = 0;

    function resetAnimation() {
      // Mova o ícone 1 para o final após a conclusão total da animação
      iconContainer.appendChild(icons[iconIndex]);
      iconIndex = (iconIndex + 1) % icons.length;
    }

    iconContainer.addEventListener("animationend", resetAnimation);

    // Limpe os ouvintes de evento quando o componente é desmontado
    return () => {
      iconContainer.removeEventListener("animationend", resetAnimation);
    };
  }, []); // O segundo argumento vazio [] garante que o efeito seja executado apenas uma vez durante a montagem do componente

  return (
    <>
      <div className="icon-container bg-galeryStacks flex flex-row gap-10 border-t bg-gray-50 p-3 py-5  shadow-md sm:rounded-b-lg">
        <div
          className="icon  flex h-20 w-auto flex-row items-center  gap-10 rounded-lg 
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
 */
