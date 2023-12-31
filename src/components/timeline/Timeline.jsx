import React from "react";
import ListarCursos from "/src/components/timeline/ListarCursos";
import cursos from "../../cursos/dadosDosCursos";

const Timeline = () => {
  return (
    <>
      <div className="mt-5 max-w-7xl rounded ">
        <div className="rounded-t bg-blue-400">
          <h2 className="py-8 text-2xl font-bold text-white ">
            Timeline Cursos
          </h2>
        </div>

        <ListarCursos itens={cursos} />
      </div>
    </>
  );
};

export default Timeline;
