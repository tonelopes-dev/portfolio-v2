/* eslint-disable react/prop-types */
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
                    alt={titleProject || 'Imagem do projeto'}
                />

                <div className="flex w-full flex-col p-5 text-center">
                    <h5 className="mb-2 text-left text-lg font-bold tracking-tight text-gray-900">
                        {titleProject}
                    </h5>
                    <p className="font-normal text-sm text-gray-700 text-left">
                        {description}
                    </p>
                </div>
            </div>
            <div className="mb-3 ml-3 flex w-full flex-row flex-wrap justify-stretch gap-3">
                <a
                    href={linkGithub}
                    target="blank"
                    rel="noopener noreferrer"
                    className="glow-button mb-2 me-2 inline-flex items-center rounded-lg bg-teal-700 bg-gradient-to-r from-teal-500 via-teal-600 to-teal-700 px-3 py-2 text-center text-sm font-medium text-amber-400 hover:bg-teal-800 hover:bg-gradient-to-br hover:text-amber-300 focus:outline-none focus:ring-4 focus:ring-teal-300 dark:focus:ring-teal-800"
                >
                    Repósitorio
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
                    rel="noopener noreferrer"
                    className="glow-button mb-2 me-2 inline-flex items-center rounded-lg bg-gray-700 bg-gradient-to-r from-amber-200 via-amber-300 to-amber-400 px-3 py-2 text-center text-sm font-medium text-teal-800 hover:bg-gray-800 hover:bg-gradient-to-br hover:text-teal-500  focus:outline-none focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-800"
                >
                    Projeto Online
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
    )
}

export default CardProjects
