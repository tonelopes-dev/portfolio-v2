import React, { useState } from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import classNames from "classnames";
import "./styles.css";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isProjectOpen, setProjectOpen] = useState(false);

  const ListItem = React.forwardRef(
    ({ className, children, title, ...props }, forwardedRef) => (
      <li>
        <NavigationMenu.Link asChild>
          <a
            className={classNames("ListItemLink", className)}
            {...props}
            ref={forwardedRef}
          >
            <div className="ListItemHeading">{title}</div>
            <p className="ListItemText">{children}</p>
          </a>
        </NavigationMenu.Link>
      </li>
    ),
  );

  return (
    <div>
      <nav className="rounded-t bg-blue-400 shadow">
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
          <Link to="/" className="flex items-center">
            <Logo />
            <span className="self-center whitespace-nowrap text-2xl font-bold text-white">
              Tone Lopes
            </span>
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden"
            aria-controls="navbar-default"
            aria-expanded={isMenuOpen}
            onClick={() => setMenuOpen(!isMenuOpen)}
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
            className={`${
              isMenuOpen ? "" : "hidden "
            }w-full bg-transparent md:block md:w-auto`}
            id="navbar-default"
          >
            <ul className="my-4 flex flex-col items-center rounded-lg border border-gray-100 py-4 font-medium dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0">
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
                <a
                  href="#aboutme"
                  className="block rounded px-3 py-2 text-white hover:bg-gray-100  md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 "
                >
                  Sobre mim
                </a>
              </li>

              <li className="relative">
                <button
                  className="text-md inline-flex items-center rounded-lg px-5 py-3 pl-3 pr-4 text-center font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4  focus:ring-blue-300 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700"
                  type="button"
                  onClick={() => setProjectOpen(!isProjectOpen)}
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
                  className={`${
                    isProjectOpen ? "" : "hidden "
                  }z-10 absolute mt-3 w-44 divide-y divide-gray-100 rounded-lg bg-white shadow dark:divide-gray-600 dark:bg-gray-700 md:right-3 md:top-8`}
                >
                  <ul className=" py-2 text-sm text-gray-700 dark:text-gray-200">
                    <li>
                      <a
                        href="#projects"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        🖼️ Frontend
                      </a>
                    </li>
                    <li>
                      <a
                        href="#projects"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        🧠 Backend
                      </a>
                    </li>
                    <li>
                      <a
                        href="##projects"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        🧑‍🚀 Fullstack
                      </a>
                    </li>
                  </ul>
                  <div className="py-2">
                    <a
                      href="#projects"
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
