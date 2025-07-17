// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/swiper-bundle.css'

// import required modules
import { Pagination, Navigation } from 'swiper/modules'
import CardProjects from './CardProject'

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
                className="mySwiper rounded-b-lg bg-white px-7 py-5"
            >
                <SwiperSlide className="w-full ">
                    <CardProjects
                        imgPath="https://github.com/tonelopes-dev/ecoconecta/blob/main/github/banner-ecoconecta.png?raw=true"
                        titleProject="EcoConecta Reciclagem 🌱"
                        description="Conectando você a pontos de coleta!
Ajude o planeta. Encontre locais para reciclagem e descarte consciente perto de você."
                        linkGithub={
                            'https://github.com/tonelopes-dev/ecoconecta'
                        }
                        linkProject={'https://ecoconecta.vercel.app/'}
                    />
                </SwiperSlide>
                <SwiperSlide className="w-full ">
                    <CardProjects
                        imgPath="https://raw.githubusercontent.com/tonelopes-dev/mylinks/main/assets/img/print-project/projeto-mylinks.jpg"
                        titleProject="Meus links"
                        description="É um projeto que reune todos os links em um só lugar, como um cartão de visitas online."
                        linkGithub={'https://github.com/tonelopes-dev/mylinks'}
                        linkProject={
                            'https://mylinks-tonelopes-projects.vercel.app/'
                        }
                    />
                </SwiperSlide>
                <SwiperSlide className="!important mr-0 w-full">
                    <CardProjects
                        imgPath="https://raw.githubusercontent.com/tonelopes-dev/gerador-de-senhas/main/assets/projeto-gerador-de-senha.jpg"
                        titleProject="Gerador de Senha"
                        description="Cria senhas fortes. Mistura letras, números e símbolos para uma proteção máxima. De 5 até 25 caracteres."
                        linkGithub={
                            'https://github.com/tonelopes-dev/gerador-de-senhas'
                        }
                        linkProject={
                            'https://tonelopes-dev.github.io/gerador-de-senhas/'
                        }
                    />
                </SwiperSlide>
                <SwiperSlide className="w-full ">
                    <CardProjects
                        imgPath="https://raw.githubusercontent.com/tonelopes-dev/projeto-android/main/imagens/preview.png"
                        titleProject="História do Android"
                        description='O projeto da História do Android foi desenvolvido para ensinar as "Tags" mais usadas no HTML5 juntamento com CSS3.'
                        linkGithub={
                            'https://github.com/tonelopes-dev/projeto-android'
                        }
                        linkProject={
                            'https://tonelopes-dev.github.io/projeto-android/'
                        }
                    />
                </SwiperSlide>
                <SwiperSlide className="w-full ">
                    <CardProjects
                        imgPath="https://raw.githubusercontent.com/tonelopes-dev/NLW-Projeto/main/assets/preview.jpg"
                        titleProject="Habits"
                        description="O Habits é um app para ajudar a rastrear os hábitos, promovido pela Rocketseat."
                        linkGithub={
                            'https://github.com/tonelopes-dev/NLW-Projeto'
                        }
                        linkProject={
                            'https://tonelopes-dev.github.io/NLW-Projeto/'
                        }
                    />
                </SwiperSlide>
                <SwiperSlide className="w-full ">
                    <CardProjects
                        imgPath="https://raw.githubusercontent.com/tonelopes-dev/pokenext/main/assets/capa-pokedex.png"
                        titleProject="Pokenext"
                        description="Esse foi um projeto de estudo do Framework Next.JS apredendo sobre Components e Routes."
                        linkGithub={'https://github.com/tonelopes-dev/pokenext'}
                        linkProject={'https://pokedex-nextjs-delta.vercel.app/'}
                    />
                </SwiperSlide>
                <SwiperSlide className="w-full ">
                    <CardProjects
                        imgPath="https://raw.githubusercontent.com/tonelopes-dev/calculadora-rocketseat/main/assets/img/projeto-BoraCodar-calculadora-.jpg"
                        titleProject="Calculadora"
                        description="Para aprender sobre Display CSS Grid, e estruturas HTML para o desenvolvimento WEB."
                        linkGithub={
                            'https://github.com/tonelopes-dev/calculadora-rocketseat'
                        }
                        linkProject={
                            'https://tonelopes.github.io/calculadora-rocketseat/'
                        }
                    />
                </SwiperSlide>

                <SwiperSlide className="w-full ">
                    <CardProjects
                        imgPath="https://raw.githubusercontent.com/tonelopes-dev/explorer-desafio-09-mobile-first/main/assets/capa-grid-animacoes-css.png"
                        titleProject="Space Cream Desktop - Grid com Animações"
                        description="O projeto foi desenvolvido  sobre animações CSS avançadas e o conceito de mobile"
                        linkGithub={
                            'https://github.com/tonelopes-dev/explorer-desafio-09-mobile-first'
                        }
                        linkProject={
                            'https://explorer-desafio-09-mobile-first.vercel.app/'
                        }
                    />
                </SwiperSlide>
                <SwiperSlide className="w-full ">
                    <CardProjects
                        imgPath="https://raw.githubusercontent.com/tonelopes-dev/portfolio/main/assets/img-telas/print-portfolio-tela-dark.jpg"
                        titleProject="Portfolio V1.0"
                        description="Bem-vindo a primeira versão do meu site pessoal! Aqui, você encontrará uma seleção de projetos de front-end."
                        linkGithub={
                            'https://github.com/tonelopes-dev/portfolio'
                        }
                        linkProject={
                            'https://tonelopes-dev.github.io/portfolio/'
                        }
                    />
                </SwiperSlide>

                <SwiperSlide className="w-full ">
                    <CardProjects
                        imgPath="https://raw.githubusercontent.com/tonelopes-dev/jogo-da-memoria/main/images/print-project/projeto-jogo-da-memoria.jpg"
                        titleProject="Jogo da Memória com Animações."
                        description="O Jogo da memória foi desenvolvido pelo Curso ProgramadorBR."
                        linkGithub={
                            'https://github.com/tonelopes-dev/jogo-da-memoria'
                        }
                        linkProject={
                            'https://tonelopes-dev.github.io/jogo-da-memoria/'
                        }
                    />
                </SwiperSlide>
                <SwiperSlide className="w-full ">
                    <CardProjects
                        imgPath="https://raw.githubusercontent.com/tonelopes-dev/snapweather/main/assets/img/projeto-snapweather.jpg"
                        titleProject="Projeto SnapWeather"
                        description="O snapwaether é um aplicação que usa uma API do OpenWeather para verificar o clima das cidades solicitadas."
                        linkGithub={
                            'https://github.com/tonelopes-dev/snapweather'
                        }
                        linkProject={
                            'https://tonelopes-dev.github.io/snapweather/'
                        }
                    />
                </SwiperSlide>
                <SwiperSlide className="w-full ">
                    <CardProjects
                        imgPath="https://raw.githubusercontent.com/tonelopes-dev/To-Do-App/main/img/projeto-todo-app.jpg"
                        titleProject="Projeto To Do App (Tarefas)"
                        description="Este é um aplicativo para criação e organização de tarefas diárias. Conhecido como To-do-List."
                        linkGithub={
                            'https://github.com/tonelopes-dev/To-Do-App'
                        }
                        linkProject={
                            'https://tonelopes-dev.github.io/To-Do-App/'
                        }
                    />
                </SwiperSlide>
                <SwiperSlide className="w-full">
                    <CardProjects
                        imgPath="https://raw.githubusercontent.com/tonelopes-dev/food-peek/main/assets/projeto-LP-Sanduiche.jpg"
                        titleProject="Landing Page Sanduíche"
                        description="A Landing Page Sanduíche foi desenvolvida para estudos de Responsividade usando as tecnologias acima."
                        linkGithub={
                            'https://github.com/tonelopes-dev/food-peek'
                        }
                        linkProject={
                            'https://tonelopes-dev.github.io/food-peek/'
                        }
                    />
                </SwiperSlide>
                <SwiperSlide className="w-auto">
                    <CardProjects
                        imgPath="https://raw.githubusercontent.com/tonelopes-dev/arvore-de-links-mode-dark-and-light-/main/.github/preview.png"
                        titleProject="DevLinks"
                        description="A árvore de links é um projeto que reune todos os links em um só lugar, como um cartão de visitas online.

            "
                        linkGithub={
                            'https://github.com/tonelopes-dev/arvore-de-links-mode-dark-and-light-'
                        }
                        linkProject={
                            'https://tonelopes-dev.github.io/arvore-de-links-mode-dark-and-light-/'
                        }
                    />
                </SwiperSlide>
                <SwiperSlide className="w-full ">
                    <CardProjects
                        imgPath="https://raw.githubusercontent.com/tonelopes-dev/explore-03-treinos-exclusivos/main/images/print-project.png"
                        titleProject="Treinos exclusivos"
                        description="Uma Landing Page para entender as principais Tags HTML e CSS Media Queries"
                        linkGithub={
                            'https://github.com/tonelopes-dev/explore-03-treinos-exclusivos'
                        }
                        linkProject={
                            'https://explore-03-treinos-exclusivos.vercel.app/'
                        }
                    />
                </SwiperSlide>
                <SwiperSlide className="w-full ">
                    <CardProjects
                        imgPath="https://raw.githubusercontent.com/tonelopes-dev/explorer-desafio-04-recriando-layout/main/images/print-project.png"
                        titleProject="Recriando layout"
                        description="Desafio proposto durante o curso Explore da RocketSeat, recriar um layout enviado pelo figma."
                        linkGithub={
                            'https://github.com/tonelopes-dev/explorer-desafio-04-recriando-layout'
                        }
                        linkProject={
                            'https://explorer-desafio-04-recriando-layout.vercel.app/'
                        }
                    />
                </SwiperSlide>
                <SwiperSlide className="w-full ">
                    <CardProjects
                        imgPath="https://raw.githubusercontent.com/tonelopes-dev/explorer-desafio-05-formulario-crie-seu-evento/main/images/print-project.png"
                        titleProject='Formulário: "Crie seu Evento"'
                        description="Entendendo sobre inputs de um formulário para captação de informação e uso do CSS."
                        linkGithub={
                            'https://github.com/tonelopes-dev/explorer-desafio-05-formulario-crie-seu-evento'
                        }
                        linkProject={
                            'https://explorer-desafio-05-formulario-crie-seu-evento.vercel.app/'
                        }
                    />
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default CarouselFront
