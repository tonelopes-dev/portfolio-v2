// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/swiper-bundle.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import CardProjects from "./CardProject";

const CarouselFront = () => {
  return (
    <>
      <Swiper
        onSwiper={null}
        slidesPerView={1}
        centeredSlides={true}
        spaceBetween={10}
        navigation={true}
        breakpoints={{
          320: {
            centeredSlides: true,
            slidesPerView: 1,
            spaceBetween: 20,
          },

          768: {
            centeredSlides: false,
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1124: {
            centeredSlides: false,
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper bg-white  px-7 py-5"
      >
        <SwiperSlide className="w-auto">
          <CardProjects
            imgPath="https://raw.githubusercontent.com/tonelopes-dev/desafio-modulo-03-backend-bootcamp-cubos-academy/main/print/desafio-03-t06.png"
            titleProject="Desafio Módulo 3 - Backend
            "
            description="O objetivo era construir uma RESTful API capaz de gerenciar transações financeiras de usuários."
            linkGithub={
              "https://github.com/tonelopes-dev/desafio-modulo-03-backend-bootcamp-cubos-academy"
            }
            linkProject={
              "https://github.com/tonelopes-dev/desafio-modulo-03-backend-bootcamp-cubos-academy"
            }
          />
        </SwiperSlide>
        <SwiperSlide className="w-auto">
          <CardProjects
            imgPath="https://raw.githubusercontent.com/tonelopes-dev/desafio-modulo-05-backend-bootcamp-cubos-academy/main/print/print-capa.png"
            titleProject="Desafio NodeNinjas PDV - Backend
            "
            description="Este projeto, concluído em um período de 3 semanas, envolveu o desenvolvimento de uma API robusta para um sistema de Caixa Frontend."
            linkGithub={
              "https://github.com/tonelopes-dev/desafio-modulo-05-backend-bootcamp-cubos-academy"
            }
            linkProject={"https://dark-red-narwhal-kilt.cyclic.cloud/categoria"}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default CarouselFront;
