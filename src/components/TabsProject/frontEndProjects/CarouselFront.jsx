import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/swiper-bundle.css";

// import required modules
import { Pagination, Navigation, Scrollbar, A11y } from "swiper/modules";
import CardProjects from "../CardProject";
import { useState } from "react";

const CarouselFront = () => {
  const [swiperRef, setSwiperRef] = useState(null);

  let appendNumber = 4;
  let prependNumber = 1;

  const prepend2 = () => {
    swiperRef.prependSlide([
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
    ]);
  };

  const prepend = () => {
    swiperRef.prependSlide(
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
    );
  };

  const append = () => {
    swiperRef.appendSlide(
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
    );
  };

  const append2 = () => {
    swiperRef.appendSlide([
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
    ]);
  };
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
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="w-full ">
          <CardProjects
            imgPath="https://raw.githubusercontent.com/tonelopes-dev/calculadora-rocketseat/main/assets/img/projeto-BoraCodar-calculadora-.jpg"
            titleProject="Calculadora"
            description="#boraCodar são desafios semanais, promovido pela Rocketseat para ensino de tecnologias WEB."
            linkGithub={
              "https://github.com/tonelopes-dev/calculadora-rocketseat"
            }
            linkProject={"https://tonelopes.github.io/calculadora-rocketseat/"}
          />
        </SwiperSlide>
        <SwiperSlide className="w-full ">
          <CardProjects
            imgPath="https://raw.githubusercontent.com/tonelopes-dev/calculadora-rocketseat/main/assets/img/projeto-BoraCodar-calculadora-.jpg"
            titleProject="Calculadora"
            description="#boraCodar são desafios semanais, promovido pela Rocketseat para ensino de tecnologias WEB."
            linkGithub={
              "https://github.com/tonelopes-dev/calculadora-rocketseat"
            }
            linkProject={"https://tonelopes.github.io/calculadora-rocketseat/"}
          />
        </SwiperSlide>
        <SwiperSlide className="w-full ">
          <CardProjects
            imgPath="https://raw.githubusercontent.com/tonelopes-dev/calculadora-rocketseat/main/assets/img/projeto-BoraCodar-calculadora-.jpg"
            titleProject="Calculadora"
            description="#boraCodar são desafios semanais, promovido pela Rocketseat para ensino de tecnologias WEB."
            linkGithub={
              "https://github.com/tonelopes-dev/calculadora-rocketseat"
            }
            linkProject={"https://tonelopes.github.io/calculadora-rocketseat/"}
          />
        </SwiperSlide>
        <SwiperSlide className="w-full ">
          <CardProjects
            imgPath="https://raw.githubusercontent.com/tonelopes-dev/calculadora-rocketseat/main/assets/img/projeto-BoraCodar-calculadora-.jpg"
            titleProject="Calculadora"
            description="#boraCodar são desafios semanais, promovido pela Rocketseat para ensino de tecnologias WEB."
            linkGithub={
              "https://github.com/tonelopes-dev/calculadora-rocketseat"
            }
            linkProject={"https://tonelopes.github.io/calculadora-rocketseat/"}
          />
        </SwiperSlide>
        <SwiperSlide className="w-full ">
          <CardProjects
            imgPath="https://raw.githubusercontent.com/tonelopes-dev/calculadora-rocketseat/main/assets/img/projeto-BoraCodar-calculadora-.jpg"
            titleProject="Calculadora"
            description="#boraCodar são desafios semanais, promovido pela Rocketseat para ensino de tecnologias WEB."
            linkGithub={
              "https://github.com/tonelopes-dev/calculadora-rocketseat"
            }
            linkProject={"https://tonelopes.github.io/calculadora-rocketseat/"}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default CarouselFront;
