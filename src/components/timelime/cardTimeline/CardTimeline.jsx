import React from "react";
import colors from "../../../cursos/coresTagsSkills";

const CardTimeline = ({ image, title, softSkills, hardSkills }) => {
  return (
    <div className="item mb-16 max-w-md  overflow-hidden rounded-xl bg-white shadow-md  md:flex md:max-w-full">
      <div className="md:shrink-0">
        <img
          className="h-48 w-full object-cover md:h-full md:w-48"
          src={image}
          alt="Modern building architecture"
        />
      </div>
      <div className="p-8">
        <a
          href="#"
          className="mt-1 block text-lg font-medium leading-tight text-black hover:underline"
        >
          {title}
        </a>
        <div className="my-2 text-slate-500">
          <ul className="ml-5">
            <>
              {softSkills.map((skill, index) => (
                <li key={index} className="list-disc">
                  {skill}
                </li>
              ))}
            </>
          </ul>
        </div>
        <div className="flex flex-wrap ">
          {hardSkills.map((skill, index) => (
            <span
              key={index}
              className={`bg-${colors[skill]}-100 text-${colors[skill]}-800 mr-2 rounded px-2.5 py-0.5 text-xs font-medium dark:bg-${colors[skill]}-900 dark:text-${colors[skill]}-300 mb-3`}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardTimeline;
