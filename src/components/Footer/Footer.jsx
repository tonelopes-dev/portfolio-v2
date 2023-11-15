import React from "react";
import Logo from "../comuns/Logo";
import SocialMedia from "../comuns/SocialMedia";

const Footer = () => {
  return (
    <footer className="rounded-lg  dark:bg-gray-800">
      {/* <div className="mx-auto flex w-full max-w-screen-xl justify-center  p-1">
         <ul className="mt-3 flex flex-wrap items-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
          <a href="#" className="me-4 hover:underline md:me-6">
          Sobre mim
            </a>
            </li>
            <li>
            <a href="#" className="me-4 hover:underline md:me-6">
            Privacy Policy
            </a>
            </li>
            <li>
            <a href="#" className="me-4 hover:underline md:me-6">
            Licensing
            </a>
          </li> 
          <li>
          <a href="#contact" className="hover:underline">
          Contato
          </a>
          </li>
          
        </ul>
  </div>*/}
      <SocialMedia />
      <span className="text-sm text-violet-900  sm:text-center">
        © 2023{" "}
        <a href="#" className="font-semibold hover:underline">
          Tone Lopes™
        </a>
        . Todos os Direitos Reservados.
      </span>
    </footer>
  );
};

export default Footer;
