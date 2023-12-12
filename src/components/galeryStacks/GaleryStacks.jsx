import React, { useState } from "react";
import Marquee from "react-fast-marquee";
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

  return (
    <div className="icon-container bg-galeryStacks  flex flex-row gap-10 border-t bg-gray-50 p-3 py-5  shadow-md sm:rounded-b-lg">
      <Marquee>
        <div className="icon mx-5 flex h-20 w-auto flex-row items-center gap-10  overflow-hidden rounded-lg">
          {icons.map((icon, index) => (
            <Icon
              key={index}
              name={icon.name}
              className="transform-gpu text-center transition-transform hover:scale-105 hover:shadow-md"
              size={icon.size}
            />
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default GaleryStacks;
