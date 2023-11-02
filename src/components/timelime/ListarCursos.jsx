import React from "react";

import CardTimeline from "./cardTimeline/CardTimeline";
import TimeAndLocal from "./cardTimeline/TimeAndLocal";
import IconTimeLine from "./cardTimeline/iconTimeline";

const ListarCursos = ({ itens }) => {
  return (
    <>
      <ol className="relative border-l border-gray-200 dark:border-gray-700">
        {itens.map((item) => (
          <li
            className="ml-6 mb-6 text-left "
            key={item.local}
          >
            <IconTimeLine />
            <TimeAndLocal
              time={item.data}
              local={item.local}
            />
            <CardTimeline
              image={item.image}
              title={item.titleCurse}
              skills={item.softSkills}
              hardSkills={item.hardSkills}
              hardSkillsColor={item.hardSkillsColor}
              itens={item}
            />
          </li>
        ))}
      </ol>
    </>
  );
};

export default ListarCursos;
