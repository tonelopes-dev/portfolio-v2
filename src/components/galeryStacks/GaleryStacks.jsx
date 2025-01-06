/* eslint-disable react/prop-types */
import Marquee from "react-fast-marquee";

const Icon = ({ name, className, size }) => {
  if (!name) return null;
  return (
    <i className={`devicon-${name} ${className} text-${size}xl colored`}></i>
  );
};

const GaleryStacks = () => {
  const icons = [
    { name: "html5-plain-wordmark", size: 6 },
    { name: "css3-plain-wordmark", size: 6 },
    { name: "javascript-plain", size: 6 },
    { name: "typescript-plain", size: 6 },
    { name: "git-plain-wordmark", size: 6 },
    { name: "github-original-wordmark", size: 6 },
    { name: "bootstrap-plain-wordmark", size: 6 },
    { name: "tailwindcss-original-wordmark", size: 9 },
    { name: "nodejs-plain-wordmark", size: 9 },
    { name: "express-original-wordmark", size: 8 },
    { name: "sqlite-plain-wordmark", size: 8 },
    { name: "postgresql-plain-wordmark", size: 6 },
    { name: "mongodb-plain-wordmark", size: 6 },
    { name: "firebase-plain-wordmark", size: 6 },
    { name: "react-original-wordmark", size: 6 },
    { name: "nextjs-original-wordmark", size: 8 },
    { name: "docker-plain-wordmark", size: 6 },
  ];

  const customIcons = [
    {
      name: "Prisma",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",
    },

    {
      name: "Figma",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    },
    {
      name: "Insomnia",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/insomnia/insomnia-original.svg",
    },
  ];

  return (
    <div className="icon-container bg-galeryStacks flex flex-row gap-10 border-t bg-gray-50 p-3 py-5 shadow-md sm:rounded-b-lg">
      <Marquee>
        <div className="icon mx-5 flex h-20 w-auto flex-row items-center gap-10 overflow-hidden rounded-lg">
          {icons.map((icon, index) => (
            <Icon
              key={index}
              name={icon.name}
              className="transform-gpu text-center transition-transform"
              size={icon.size}
            />
          ))}
          {customIcons.map((icon, index) => (
            <img
              key={index}
              className="w-14"
              src={icon.src}
              alt={icon.name}
              title={icon.name}
            />
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default GaleryStacks;
