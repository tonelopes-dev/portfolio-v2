import React from "react";

const SocialMedia = () => {
  return (
    <div className=" font mb-5 flex justify-center gap-8 rounded-md border-2 border-blue-200 bg-white  bg-opacity-90 text-lg hover:shadow-sm  hover:shadow-teal-400	">
      <a
        href="https://www.linkedin.com/in/tonelopes-dev/"
        target="_blank"
        className="p-3 text-blue-900 hover:scale-125 hover:text-blue-700"
      >
        <i className="fa-brands fa-linkedin "></i>
      </a>

      {/* <a
        href="https://www.instagram.com/tonelopesm/"
        target="_blank"
        className="p-3 text-blue-900 hover:scale-125 hover:text-blue-700"
      >
        <i className="fa-brands fa-instagram"></i>
      </a> */}
      {/*  <a
        href="#"
        className="p-3 text-blue-900 hover:scale-125 hover:text-blue-700"
      >
        <i className="fa-brands fa-discord"></i>
      </a> */}
      <a
        href="https://github.com/tonelopes-dev"
        target="_blank"
        className="p-3 text-blue-900 hover:scale-125 hover:text-blue-700"
      >
        <i className="fa-brands fa-github"></i>
      </a>
      {/* <a
        href="#"
        className=" text-gray-500 hover:text-gray-900 dark:hover:text-white"
      ></a> */}
    </div>
  );
};

export default SocialMedia;
