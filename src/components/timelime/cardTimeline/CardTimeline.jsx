import React from "react";
import colors from "../../../cursos/coresTagsSkills";

const CardTimeline = ({ image, title, softSkills, hardSkills }) => {
  return (
    <div className="md:flex md:max-w-full max-w-md  bg-white rounded-xl shadow-md overflow-hidden  item">
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
          className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
        >
          {title}
        </a>
        <div className="my-2 text-slate-500">
          <ul className="ml-5">
            <>
              {softSkills.map((skill, index) => (
                <li
                  key={index}
                  className="list-disc"
                >
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
              className={`bg-${colors[skill]}-100 text-${colors[skill]}-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-${colors[skill]}-900 dark:text-${colors[skill]}-300 mb-3`}
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
/* const CardTimeline = ({ image, title, softSkills, hardSkills }) => {
  return (
    <div className="max-w-md  bg-white rounded-xl shadow-md overflow-hidden md:max-w-3xl item">
      <div className="md:flex ">
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
            className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
          >
            {title}
          </a>
          <div className="my-2 text-slate-500">
            <ul className="ml-5">
              <>
                {softSkills.map((skill, index) => (
                  <li
                    key={index}
                    className="list-disc"
                  >
                    {skill}
                  </li>
                ))}
              </>
            </ul>
          </div>

          {hardSkills.map((skill) => (
            <span
              key={color.index}
              className={`bg-${skill.color}-100 text-${skill.color}-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-${skill.color}-900 dark:text-${skill.color}-300`}
            >
              {skill.skill} {/* Acesso à habilidade específica em hard associada ao objeto color 
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardTimeline;
*/
