import React from "react";

const IconTimeLine = () => {
  return (
    <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-violet-100 ring-8 ring-white dark:bg-violet-900 dark:ring-gray-900">
      <svg
        className="h-2.5 w-2.5 text-violet-800 dark:text-violet-300"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
      </svg>
    </span>
  );
};

export default IconTimeLine;
