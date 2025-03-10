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
                <SwiperSlide className="w-full ">
                    <CardProjects
                        statusProject={'private'}
                        imgPath="/banner-graninha-app-lp@2x.png"
                        titleProject="Graninha App "
                        description="O Graninha App é uma plataforma de gestão financeira que ajuda você a monitorar suas movimentações e oferece insights personalizados para facilitar o controle do seu orçamento."
                        linkGithub={''}
                        linkProject={'https://www.graninha-app.com.br/login'}
                        landingPage={
                            'https://www.graninha-app.com.br/landing-page'
                        }
                    />
                </SwiperSlide>
                <SwiperSlide className="w-full ">
                    <CardProjects
                        statusProject="" // ou "Em Desenvolvimento", etc.
                        imgPath="/banner-project-mcdonalds.jpg" // ou o caminho correto
                        titleProject="McDonald's Self Checkout"
                        description="Sistema de autoatendimento para pedidos em restaurantes McDonalds." // Descrição correta
                        linkGithub="https://github.com/tonelopes-dev/selfcheckout-mcdonalds" // Se houver
                        linkProject="https://selfcheckout-mcdonalds-mx5x.vercel.app/fsw-donalds" // Link correto
                        landingPage="" // link correto
                    />
                </SwiperSlide>
                <SwiperSlide className="w-full ">
                    <CardProjects
                        statusProject="" // ou "Em Desenvolvimento", etc.
                        imgPath="https://github.com/tonelopes-dev/frontend-api-my-notes/blob/main/public/print-banner.png?raw=true" // ou o caminho correto
                        titleProject="My Notes - Flash Card Notes"
                        description="O aplicativo de anotações rápidas que permite criar e gerenciar flashcards para auxiliar na memorização de conceitos.

                        " // Descrição correta
                        linkGithub="https://github.com/tonelopes-dev/frontend-api-my-notes" // Se houver
                        linkProject="https://frontend-api-my-notes.vercel.app/" // Link correto
                        landingPage="" // link correto
                    />
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default CarrouselFullStack
