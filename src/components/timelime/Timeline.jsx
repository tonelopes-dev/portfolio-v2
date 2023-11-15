import React from "react";
import cursos from "../../cursos/dadosDosCursos";
import ListarCursos from "./ListarCursos";

const Timeline = () => {
  return (
    <div className="my-5 max-w-7xl rounded bg-white">
      <h2 className="py-8 text-2xl font-bold dark:text-white">
        Timeline Cursos
      </h2>

      <ListarCursos itens={cursos} />
    </div>
  );
};

export default Timeline;
