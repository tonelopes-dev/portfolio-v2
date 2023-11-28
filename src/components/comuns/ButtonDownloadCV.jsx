import React from "react";

const ButtonDownloadCV = () => {
  return (
    <a
      href="https://drive.google.com/file/d/1N6GA_U2Sf1BtYO7Dr5Sz8dJ3QDy3JHVW/view?usp=sharing"
      target="_blank"
    >
      <button
        type="button"
        className="mb-2 me-2 inline-flex   items-center  rounded-lg  bg-blue-700 px-5  py-2.5   text-center text-sm  font-bold  text-white  hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600  dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
      >
        <i className="fa-solid fa-download "></i>
        <span className="ml-3">Download CV</span>
      </button>
    </a>
  );
};

export default ButtonDownloadCV;
