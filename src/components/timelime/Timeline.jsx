import React from "react";
import cursos from "../../cursos/dadosDosCursos";
import ListarCursos from "./ListarCursos";

const Timeline = () => {
  return (
    <div className=" pb-5 mb-5">
      <h2 className="text-2xl font-bold dark:text-white py-8">Timeline Cursos</h2>

      <ListarCursos itens={cursos} />
    </div>
  );
};

export default Timeline;
