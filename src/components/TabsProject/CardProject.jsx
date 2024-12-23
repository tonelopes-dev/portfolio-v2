const CardProjects = ({
  imgPath,
  titleProject,
  description,
  linkProject,
  linkGithub,
}) => {
  return (
    <div className="mx-15 mb-5 box-border flex h-full max-w-xs flex-col justify-between rounded-lg border border-gray-200 bg-gray-100 shadow-md hover:bg-white hover:shadow">
      <div className="flex w-full flex-grow flex-col items-center">
        <img
          className="max-h-44 w-full max-w-full rounded-t-lg object-cover"
          src={imgPath}
          alt=""
        />

        <div className="flex w-full flex-col p-5 text-center">
          <h5 className="mb-2 text-left text-2xl font-bold tracking-tight text-gray-900">
            {titleProject}
          </h5>
          <p className="font-normal text-gray-700">{description}</p>
        </div>
      </div>
      <div className="mb-3 ml-3 flex w-full flex-row flex-wrap justify-stretch gap-3">
        <a
          href={linkGithub}
          target="blank"
          className="glow-button mb-2 me-2 inline-flex items-center rounded-lg bg-gray-700 bg-gradient-to-r from-gray-500 via-gray-600 to-gray-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-gray-800 hover:bg-gradient-to-br hover:text-yellow-100 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-800"
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
          className="glow-button mb-2 me-2 inline-flex items-center rounded-lg bg-gray-700 bg-gradient-to-r from-gray-500 via-gray-600 to-gray-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-gray-800 hover:bg-gradient-to-br hover:text-yellow-100 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-800"
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
