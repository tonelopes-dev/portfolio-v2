import React from "react";
import cursos from "../../cursos/dadosDosCursos";
import ListarCursos from "./ListarCursos";

const Timeline = () => {
  return (
    <>
      <div className="my-5 max-w-7xl rounded ">
        <div className="rounded-t bg-violet-200">
          <h2 className="py-8 text-2xl font-bold text-violet-800">
            Timeline Cursos
          </h2>
        </div>

        <ListarCursos itens={cursos} />
      </div>
    </>
  );
};

export default Timeline;
