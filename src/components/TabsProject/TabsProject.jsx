import React, { useState } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import CardProjects from "./CardProject";
import CarouselFront from "./CarouselFront";
import CarouselBack from "./CarouselBack";

const TabsProject = () => {
  const [activeTab, setActiveTab] = useState("tab1"); // Estado para rastrear a guia ativa

  return (
    <div className=" rounded-md bg-blue-400  pt-8">
      <h2 className=" text-2xl font-bold text-white ">Meus Projetos</h2>
      <div className="  border-b border-gray-200 dark:border-gray-700">
        <ul
          className="mx-14 flex flex-wrap text-center text-sm font-medium"
          id="default-tab"
          data-tabs-toggle="#default-tab-content"
          role="tablist"
        >
          <li className="mr-2" role="presentation">
            <button
              className="inline-block rounded-t-lg border-b-2 p-4 text-white active:border-blue-800 md:text-lg "
              id="profile-tab"
              data-tabs-target="#profile"
              type="button"
              role="tab"
              aria-controls="profile"
              aria-selected="true"
            >
              Frontend
            </button>
          </li>
          <li className="mr-2" role="presentation">
            <button
              className="inline-block rounded-t-lg border-b-2 p-4 text-white hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300 md:text-lg"
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
          <li className="mr-2" role="presentation">
            <button
              className="inline-block rounded-t-lg border-b-2 p-4 text-white hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300 md:text-lg"
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
              className="inline-block rounded-t-lg border-b-2 p-4 text-white hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300 md:text-lg"
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
      <div id="default-tab-content">
        <div
          className=" flex w-full flex-nowrap gap-32 overflow-x-auto rounded-lg bg-gray-50 bg-opacity-90 p-2 dark:bg-gray-800 sm:gap-8"
          id="profile"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          <CarouselFront className="md:h-full" />
        </div>

        <div
          className="flex  flex-col rounded-lg bg-gray-50 p-4 dark:bg-gray-800"
          id="dashboard"
          role="tabpanel"
          aria-labelledby="dashboard-tab"
        >
          <CarouselBack className="md:h-full" />
        </div>
        <div
          className="flex flex-col rounded-lg bg-gray-50 p-4 dark:bg-gray-800"
          id="settings"
          role="tabpanel"
          aria-labelledby="settings-tab"
        >
          <p className="mb-5 text-sm text-gray-500 dark:text-gray-400">
            This is some placeholder content the{" "}
            <strong className="font-medium text-gray-800 dark:text-white">
              Settings tab's associated content
            </strong>
            . Clicking another tab will toggle the visibility of this one for
            the next. The tab JavaScript swaps classes to control the content
            visibility and styling.
          </p>

          <div
            id="default-carousel"
            className="relative w-full"
            data-carousel="static"
          >
            <div
              className="relative flex h-full w-full flex-nowrap  gap-8 overflow-hidden overflow-x-auto rounded-lg bg-white"
              data-carousel-item
            >
              <div className="relative flex h-full w-auto gap-4 bg-white duration-700 ease-in-out">
                <CardProjects
                  imgPath="https://raw.githubusercontent.com/tonelopes-dev/food-peek/main/assets/projeto-LP-Sanduiche.jpg"
                  titleProject="Landing Page Sanduíche"
                  description="A Landing Page Sanduíche foi desenvolvida para estudos de Responsividade usando as tecnologias acima."
                  linkGithub={"https://github.com/tonelopes-dev/food-peek"}
                  linkProject={"https://tonelopes-dev.github.io/food-peek/"}
                />
              </div>
              <div
                className="relative flex h-full w-full gap-4 bg-white duration-700 ease-in-out"
                data-carousel-item
              >
                <CardProjects
                  imgPath="https://raw.githubusercontent.com/tonelopes-dev/arvore-de-links-mode-dark-and-light-/main/.github/preview.png"
                  titleProject="DevLinks"
                  description="Minicurso exclusivo e gratuito, promovido pela Rocketseat para ensino de tecnologias WEB."
                  linkGithub={
                    "https://github.com/tonelopes-dev/arvore-de-links-mode-dark-and-light-"
                  }
                  linkProject={
                    "https://tonelopes-dev.github.io/arvore-de-links-mode-dark-and-light-/"
                  }
                />
              </div>
            </div>
            <button
              type="button"
              className="group absolute start-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
              data-carousel-prev
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70">
                <svg
                  className="h-4 w-4 text-white rtl:rotate-180 dark:text-gray-800"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 1 1 5l4 4"
                  />
                </svg>
                <span className="sr-only">Previous</span>
              </span>
            </button>
            <button
              type="button"
              className="group absolute end-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
              data-carousel-next
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70">
                <svg
                  className="h-4 w-4 text-white rtl:rotate-180 dark:text-gray-800"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <span className="sr-only">Next</span>
              </span>
            </button>
          </div>
        </div>
        <div
          className=" flex h-full flex-row items-stretch justify-items-stretch rounded-lg bg-gray-50 py-5 pl-5 dark:bg-gray-800"
          id="contacts"
          role="tabpanel"
          aria-labelledby="contacts-tab"
        >
          <CarouselFront className="h-full" />
        </div>
      </div>
    </div>
  );
};

export default TabsProject;
