import ButtonLinkedin from "/src/components/comuns/ButtonLinkedin";
import ButtonGithub from "/src/components/comuns/ButtonGithub";
import ButtonDownloadCV from "/src/components/comuns/ButtonDownloadCV";
import GaleryStacks from "/src/components/galeryStacks/GaleryStacks";

const Banner = () => {
  return (
    <div className="lg:h-600 bg-banner flex h-2/4 flex-col justify-center  bg-gray-50 bg-opacity-90  hover:bg-white ">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center py-4">
        <div className="h-max-img mt-4 w-auto items-center justify-center sm:pb-2">
          <img
            className="mx-auto h-auto w-auto py-4"
            src="/portfolio-banner-projetos.png"
            alt="Descrição da imagem"
          />
        </div>
        <div className=" flex flex-1 flex-col  justify-center">
          <h1 className="lg:text-1xl mb-4 text-left text-3xl font-extrabold text-gray-900 dark:text-white md:text-4xl">
            <span className="bg-gradient-to-r from-teal-800 to-teal-500 bg-clip-text text-transparent ">
              Desenvolvedor FullStack
            </span>
          </h1>
          <p className="mb-8 text-left text-lg font-normal text-gray-500 dark:text-gray-400 lg:text-xl">
            Transformando linhas de código em{" "}
            <strong>soluções poderosas</strong>. Explore abaixo para descobrir
            mais sobre minha jornada e como posso contribuir para o sucesso do
            seu projeto.
          </p>

          <div>
            <div className="flex flex-wrap justify-start">
              <ButtonLinkedin />
              <ButtonGithub />
              <ButtonDownloadCV />
            </div>
          </div>
        </div>
      </div>
      <GaleryStacks />
    </div>
  );
};

export default Banner;
