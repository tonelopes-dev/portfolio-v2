import React, { useState } from "react";
import Projects from "./CardProject";
import CardProjects from "./CardProject";

const TabsProject = () => {
  const [activeTab, setActiveTab] = useState("tab1"); // Estado para rastrear a guia ativa

  return (
    <>
      <h2 className="text-2xl font-bold dark:text-white pt-8">Meus Projetos</h2>
      <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
        <ul
          className="flex flex-wrap -mb-px text-sm font-medium text-center"
          id="default-tab"
          data-tabs-toggle="#default-tab-content"
          role="tablist"
        >
          <li
            className="mr-2"
            role="presentation"
          >
            <button
              className="inline-block p-4 border-b-2 rounded-t-lg"
              id="profile-tab"
              data-tabs-target="#profile"
              type="button"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
            >
              Frontend
            </button>
          </li>
          <li
            className="mr-2"
            role="presentation"
          >
            <button
              className="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              id="dashboard-tab"
              data-tabs-target="#dashboard"
              type="button"
              role="tab"
              aria-controls="dashboard"
              aria-selected="false"
            >
              Backend
            </button>
          </li>
          <li
            className="mr-2"
            role="presentation"
          >
            <button
              className="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              id="settings-tab"
              data-tabs-target="#settings"
              type="button"
              role="tab"
              aria-controls="settings"
              aria-selected="false"
            >
              Fullstack
            </button>
          </li>
          <li role="presentation">
            <button
              className="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              id="contacts-tab"
              data-tabs-target="#contacts"
              type="button"
              role="tab"
              aria-controls="contacts"
              aria-selected="false"
            >
              Contacts
            </button>
          </li>
        </ul>
      </div>
      <div id="default-tab-content ">
        <div
          className=" hidden flex flex-wrap gap-3 items-start p-4 rounded-lg bg-gray-50 dark:bg-gray-800 items-stretch"
          id="profile"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          <CardProjects
            imgPath="https://raw.githubusercontent.com/tonelopes-dev/arvore-de-links-mode-dark-and-light-/main/.github/preview.png"
            titleProject="DevLinks"
            description="Minicurso exclusivo e gratuito, promovido pela Rocketseat para ensino de tecnologias WEB."
            linkGithub={"https://github.com/tonelopes-dev/arvore-de-links-mode-dark-and-light-"}
            linkProject={"https://tonelopes-dev.github.io/arvore-de-links-mode-dark-and-light-/"}
          />
          <CardProjects
            imgPath="https://raw.githubusercontent.com/tonelopes-dev/gerador-de-senhas/main/assets/projeto-gerador-de-senha.jpg"
            titleProject="Gerador de Senha"
            description="Minicurso exclusivo e gratuito, promovido pelo Sujeito Programador para ensino de tecnologias WEB."
            linkGithub={"https://github.com/tonelopes-dev/gerador-de-senhas"}
            linkProject={"https://tonelopes-dev.github.io/gerador-de-senhas/"}
          />
          <CardProjects
            imgPath="https://raw.githubusercontent.com/tonelopes-dev/projeto-android/main/imagens/preview.png"
            titleProject="História do Android"
            description='Projeto exclusivo e gratuito, promovido pelo "Curso em Vídeo" para ensino de tecnologias WEB.'
            linkGithub={"https://github.com/tonelopes-dev/projeto-android"}
            linkProject={"https://tonelopes-dev.github.io/projeto-android/"}
          />
        </div>
        <div
          className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800 flex flex-col"
          id="dashboard"
          role="tabpanel"
          aria-labelledby="dashboard-tab"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">
            This is some placeholder content the{" "}
            <strong className="font-medium text-gray-800 dark:text-white">Dashboard tab's associated content</strong>.
            Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes
            to control the content visibility and styling.
          </p>
        </div>
        <div
          className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800 flex flex-col"
          id="settings"
          role="tabpanel"
          aria-labelledby="settings-tab"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">
            This is some placeholder content the{" "}
            <strong className="font-medium text-gray-800 dark:text-white">Settings tab's associated content</strong>.
            Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes
            to control the content visibility and styling.
          </p>
        </div>
        <div
          className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800 flex flex-col"
          id="contacts"
          role="tabpanel"
          aria-labelledby="contacts-tab"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">
            This is some placeholder content the{" "}
            <strong className="font-medium text-gray-800 dark:text-white">Contacts tab's associated content</strong>.
            Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes
            to control the content visibility and styling.
          </p>
        </div>
      </div>
    </>
  );
};

export default TabsProject;
