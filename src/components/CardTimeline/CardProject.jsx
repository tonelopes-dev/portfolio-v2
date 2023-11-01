import React from "react";

const CardTimeline = ({ image, title }) => {
  return (
    <div className="max-w-md  bg-white rounded-xl shadow-md overflow-hidden md:max-w-3xl item">
      <div className="md:flex ">
        <div className="md:shrink-0">
          <img
            className="h-48 w-full object-cover md:h-full md:w-48"
            src={image}
            alt="Modern building architecture"
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold"></div>
          <a
            href="#"
            className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
          >
            {title}
          </a>
          <p className="my-2 text-slate-500">
            <ul className="ml-5">
              <li className="list-disc">Criar Interfaces Atraentes e Visualmente Coerentes.</li>
              <li className="list-disc">Criar Experiências Centradas no Usuário.</li>
              <li className="list-disc">Gestão de Projetos.</li>
              <li className="list-disc">
                Utilizar ferramentas da Adobe ou Figma para criar wireframes e protótipos interativos.{" "}
              </li>
            </ul>
          </p>

          <span class="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
            Photoshop
          </span>
          <span class="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
            Illustrator
          </span>

          <span class="bg-pink-100 text-pink-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-pink-900 dark:text-pink-300">
            Figma
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardTimeline;
