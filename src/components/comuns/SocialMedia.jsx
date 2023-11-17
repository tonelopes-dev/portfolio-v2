import React from "react";

const SocialMedia = () => {
  return (
    <div className=" font mb-5 mt-10 flex justify-center  gap-8 rounded-md border-2 border-violet-200  text-lg	">
      <a
        href="#"
        className="p-3 text-violet-900 hover:scale-125 hover:text-violet-700"
      >
        <i className="fa-brands fa-linkedin "></i>
      </a>

      <a
        href="#"
        className="p-3 text-violet-900 hover:scale-125 hover:text-violet-700"
      >
        <i className="fa-brands fa-instagram"></i>
      </a>
      <a
        href="#"
        className="p-3 text-violet-900 hover:scale-125 hover:text-violet-700"
      >
        <i className="fa-brands fa-discord"></i>
      </a>
      <a
        href="#"
        className="p-3 text-violet-900 hover:scale-125 hover:text-violet-700"
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
