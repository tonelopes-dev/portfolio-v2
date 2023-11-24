import React from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="rounded-t bg-blue-400 shadow ">
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
          <Link to="/" className="flex items-center">
            <Logo />
            <span className="self-center whitespace-nowrap text-2xl font-bold text-white">
              Tone Lopes
            </span>
          </Link>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200  md:hidden"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-5 w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className="hidden w-full bg-transparent md:block md:w-auto"
            id="navbar-default"
          >
            <ul className="mt-4 flex flex-col items-center rounded-lg border border-gray-100 font-medium dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0">
              <li>
                <Link
                  to="/"
                  className="block rounded py-2 pl-3 pr-4 text-white hover:bg-gray-100  md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 "
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="about"
                  className="block rounded py-2 pl-3 pr-4 text-white hover:bg-gray-100  md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 "
                >
                  Sobre mim
                </Link>
              </li>

              {/*  <li>
                <a
                  href="#"
                  className="block rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                >
                  Contato
                </a>
              </li> */}
              <li>
                <button
                  id="dropdownDividerButton"
                  data-dropdown-toggle="dropdownDivider"
                  className="inline-flex items-center rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  type="button"
                >
                  Projetos
                  <svg
                    className="ml-2.5 h-2.5 w-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>

                <div
                  id="dropdownDivider"
                  className="z-10 hidden w-44 divide-y divide-gray-100 rounded-lg bg-white shadow dark:divide-gray-600 dark:bg-gray-700"
                >
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownDividerButton"
                  >
                    <li>
                      <a
                        href="#profile-tab"
                        data-tabs-target="#profile"
                        type="button"
                        role="tab"
                        aria-controls="profile"
                        aria-selected="false"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        🖼️ Frontend
                      </a>
                    </li>
                    <li>
                      <a
                        href="#profile-tab"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        🧠 Backend
                      </a>
                    </li>
                    <li>
                      <a
                        href="#profile-tab"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        🧑‍🚀 Fullstack
                      </a>
                    </li>
                  </ul>
                  <div className="py-2">
                    <a
                      href="#profile-tab"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      📱 Mobile
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
