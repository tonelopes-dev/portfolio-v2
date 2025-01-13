// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/swiper-bundle.css'

// import required modules
import { Pagination, Navigation } from 'swiper/modules'
import CardProjects from './CardProject'

const CarrouselFullStack = () => {
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
                className="mySwiper rounded-b-lg bg-white px-7 py-5"
            >
                <SwiperSlide className="w-full ">
                    <CardProjects
                        imgPath="/print-mockup-project-fsw-store-m.png"
                        titleProject="FSW Store"
                        description="E-commerce desenvolvido com NextJS(Typescript), TailwindCSS, NextAuth, Prisma, PostgreSQL, Stripe, Shadcn e NeonDB."
                        linkGithub={
                            'https://github.com/tonelopes-dev/fsw-store'
                        }
                        linkProject={'https://fsw-store-xi-eight.vercel.app/'}
                    />
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default CarrouselFullStack
