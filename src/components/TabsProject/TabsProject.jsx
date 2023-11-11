import React, { useState } from "react";
import Projects from "./CardProject";

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
              Profile
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
              Dashboard
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
              Settings
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
          className=" hidden flex flex-col items-center p-4 rounded-lg bg-gray-50 dark:bg-gray-800 "
          id="profile"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-5 text-left">
            This is some placeholder content the{" "}
            <strong className="font-medium text-gray-800 dark:text-white">Profile tab's associated content</strong>.
            Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes
            to control the content visibility and styling.
          </p>
          <Projects />
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
