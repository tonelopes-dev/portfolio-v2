import React from "react";

import CardTimeline from "./cardTimeline/CardTimeline";
import TimeAndLocal from "./cardTimeline/TimeAndLocal";
import IconTimeLine from "./cardTimeline/IconTimeLine";

const ListarCursos = ({ itens }) => {
  return (
    <>
      <ol className="relative rounded-b border-l border-indigo-300 bg-white bg-opacity-90 py-5">
        {itens.map((item) => (
          <li className="mx-6 ml-6 max-w-7xl text-left" key={item.local}>
            <IconTimeLine />
            <TimeAndLocal time={item.data} local={item.local} />
            <CardTimeline
              image={item.image}
              title={item.titleCurse}
              softSkills={item.softSkills}
              hardSkills={item.hardSkills}
            />
          </li>
        ))}
      </ol>
    </>
  );
};

export default ListarCursos;
