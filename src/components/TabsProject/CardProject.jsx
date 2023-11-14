import React from "react";

const CardProjects = ({
  imgPath,
  titleProject,
  description,
  linkProject,
  linkGithub,
}) => {
  return (
    <div className="max-h-400 group mb-5 flex max-w-xs flex-col justify-between rounded-lg border  border-gray-200 bg-white shadow hover:bg-gray-100 hover:shadow dark:border-gray-700 dark:bg-gray-600 dark:hover:bg-gray-500">
      <div className="">
        <img
          className="m-auto mb-5 h-56 w-full rounded-t-lg object-cover"
          src={imgPath}
          alt=""
        />

        <div className="p-5">
          <h5 className="mb-2 text-left text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {titleProject}
          </h5>
          <p className="mb-3 text-left font-normal text-gray-700 dark:text-gray-400">
            {description}
          </p>
        </div>
      </div>
      <div className="mb-3 ml-3 flex justify-stretch gap-3">
        <a
          href={linkGithub}
          target="blank"
          className="inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Github
          <svg
            className="ml-2 h-3.5 w-3.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
        <a
          href={linkProject}
          target="blank"
          className="inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Ver projeto
          <svg
            className="ml-2 h-3.5 w-3.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default CardProjects;
