import React from "react";

const TimeAndLocal = ({ time, local }) => {
  return (
    <>
      <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
        {local}
      </h3>
      <time className="mb-3 block text-sm font-normal leading-none text-gray-500 dark:text-gray-500">
        {time}
      </time>
    </>
  );
};

export default TimeAndLocal;
