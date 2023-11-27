import React, { useState } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import CarouselFront from "./CarouselFront";
import CarouselBack from "./CarouselBack";

const TabsProject = () => {
  const [activeTab, setActiveTab] = useState("tab1");

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
      </div>
      <div class="border-b border-gray-200 text-center text-sm font-medium text-gray-500 dark:border-gray-700 dark:text-gray-400">
        <ul class="-mb-px flex flex-wrap">
          <li class="me-2">
            <a
              href="#"
              class="inline-block rounded-t-lg border-b-2 border-transparent p-4 hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300"
            >
              Profile
            </a>
          </li>
          <li class="me-2">
            <a
              href="#"
              class="active inline-block rounded-t-lg border-b-2 border-blue-600 p-4 text-blue-600 dark:border-blue-500 dark:text-blue-500"
              aria-current="page"
            >
              Dashboard
            </a>
          </li>
          <li class="me-2">
            <a
              href="#"
              class="inline-block rounded-t-lg border-b-2 border-transparent p-4 hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300"
            >
              Settings
            </a>
          </li>
          <li class="me-2">
            <a
              href="#"
              class="inline-block rounded-t-lg border-b-2 border-transparent p-4 hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300"
            >
              Contacts
            </a>
          </li>
          <li>
            <a class="inline-block cursor-not-allowed rounded-t-lg p-4 text-gray-400 dark:text-gray-500">
              Disabled
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TabsProject;
