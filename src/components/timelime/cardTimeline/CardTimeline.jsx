import React from "react";
import HardSkillsTimeline from "./HardSkillsTimeline";

const CardTimeline = ({ image, title, skills, item }) => {
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
          {/* <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold"></div> */}
          <a
            href="#"
            className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
          >
            {title}
          </a>
          <div className="my-2 text-slate-500">
            <ul className="ml-5">
              {skills.map((skill) => (
                <li
                  key={skill}
                  className="list-disc"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <HardSkillsTimeline hardskill={item} />
        </div>
      </div>
    </div>
  );
};

export default CardTimeline;
