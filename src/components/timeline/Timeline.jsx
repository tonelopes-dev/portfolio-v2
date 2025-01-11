import ListarCursos from "/src/components/timeline/ListarCursos";
import cursos from "../../cursos/dadosDosCursos";

const Timeline = () => {
  return (
    <>
      <div className=" max-w-7xl rounded ">
        <div className="rounded-t bg-teal-800">
          <h2 className="py-8 text-2xl font-bold text-amber-200 ">
            Timeline Cursos
          </h2>
        </div>

        <ListarCursos itens={cursos} />
      </div>
    </>
  );
};

export default Timeline;
