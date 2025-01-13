import { useState } from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import "./styles.css";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  // Função para rolar suavemente até a seção
  const smoothScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <nav className="rounded-t bg-teal-800 shadow">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between  py-4">
        <Logo />
        <span className="self-center whitespace-nowrap text-2xl font-bold text-amber-200">
          Tone Lopes
        </span>
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
          <ul className="my-4 flex flex-col items-center rounded-lg border border-gray-100 py-4 font-medium dark:border-gray-700 dark:bg-teal-800 md:mt-0 md:flex-row md:space-x-8 md:border-0">
            <li>
              <Link
                to="/"
                className="block rounded py-2 pl-3 pr-4 text-white hover:bg-gray-100  md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-amber-200 "
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <a
                href="#aboutme"
                className="block rounded px-3 py-2 text-white hover:bg-gray-100  md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-amber-200 "
                onClick={(e) => smoothScroll(e, "aboutme")}
              >
                Sobre mim
              </a>
            </li>

            <li className="relative">
              <a
                className="text-md inline-flex items-center rounded-lg px-5 py-3 pl-3 pr-4 text-center font-medium text-white hover:bg-blue-800 hover:bg-transparent hover:text-amber-200  focus:outline-none focus:ring-4 focus:ring-blue-300 md:border-0 md:p-0"
                type="button"
                href="#projects"
                onClick={(e) => smoothScroll(e, "projects")}
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
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
