import React from "react";
import Logo from "../comuns/Logo";

const Footer = () => {
  return (
    <footer className="mt-5 rounded-lg bg-white shadow dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://flowbite.com/"
            className="mb-4 flex items-center sm:mb-0"
          >
            <Logo />
            <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
              Tone Lopes
            </span>
          </a>
          <ul className="mb-6 flex flex-wrap items-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:mb-0">
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                Sobre mim
              </a>
            </li>
            {/*  <li>
              <a
                href="#"
                className="mr-4 hover:underline md:mr-6"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="mr-4 hover:underline md:mr-6 "
              >
                Licensing
              </a>
            </li> */}
            <li>
              <a href="#" className="hover:underline">
                Contato
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-gray-500 dark:text-gray-400 sm:text-center">
          © 2023{" "}
          <a href="#" className="hover:underline">
            Tone Lopes.{" "}
          </a>
          Todos os Direitos Reservados.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
