import React from "react";

const SocialMedia = () => {
  return (
    <div className=" mb-5 mt-10 flex justify-center gap-8  rounded-md border-2 border-violet-200 px-8 py-4">
      <a
        href="#"
        className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
      >
        <i className="fa-brands fa-linkedin text-violet-900"></i>
      </a>

      <a
        href="#"
        className=" text-gray-500 hover:text-gray-900 dark:hover:text-white"
      >
        <i className="fa-brands fa-instagram text-violet-900"></i>
      </a>
      <a
        href="#"
        className=" text-gray-500 hover:text-gray-900 dark:hover:text-white"
      >
        <i class="fa-brands fa-discord  text-violet-900"></i>
      </a>
      <a
        href="#"
        className=" text-gray-500 hover:text-gray-900 dark:hover:text-white"
      >
        <i class="fa-brands fa-github  text-violet-900"></i>
      </a>
      {/* <a
        href="#"
        className=" text-gray-500 hover:text-gray-900 dark:hover:text-white"
      ></a> */}
    </div>
  );
};

export default SocialMedia;
