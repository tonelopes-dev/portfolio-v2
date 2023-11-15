import React, { useState } from "react";

import CardProjects from "./CardProject";

const TabsProject = () => {
  const [activeTab, setActiveTab] = useState("tab1"); // Estado para rastrear a guia ativa

  return (
    <div className=" bg-white pt-8">
      <h2 className=" text-2xl font-bold dark:text-white">Meus Projetos</h2>
      <div className=" mb-4 border-b border-gray-200 dark:border-gray-700">
        <ul
          className="-mb-px flex flex-wrap text-center text-sm font-medium"
          id="default-tab"
          data-tabs-toggle="#default-tab-content"
          role="tablist"
        >
          <li className="mr-2" role="presentation">
            <button
              className="inline-block rounded-t-lg border-b-2 p-4"
              id="profile-tab"
              data-tabs-target="#profile"
              type="button"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
            >
              Frontend
            </button>
          </li>
          <li className="mr-2" role="presentation">
            <button
              className="inline-block rounded-t-lg border-b-2 p-4 hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300"
              id="dashboard-tab"
              data-tabs-target="#dashboard"
              type="button"
              role="tab"
              aria-controls="dashboard"
              aria-selected="false"
            >
              Backend
            </button>
          </li>
          <li className="mr-2" role="presentation">
            <button
              className="inline-block rounded-t-lg border-b-2 p-4 hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300"
              id="settings-tab"
              data-tabs-target="#settings"
              type="button"
              role="tab"
              aria-controls="settings"
              aria-selected="false"
            >
              Fullstack
            </button>
          </li>
          <li role="presentation">
            <button
              className="inline-block rounded-t-lg border-b-2 p-4 hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300"
              id="contacts-tab"
              data-tabs-target="#contacts"
              type="button"
              role="tab"
              aria-controls="contacts"
              aria-selected="false"
            >
              Contacts
            </button>
          </li>
        </ul>
      </div>
      <div id="default-tab-content ">
        <div
          className=" flex hidden flex-wrap justify-around  gap-3 rounded-lg bg-gray-50 p-4 dark:bg-gray-800"
          id="profile"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          <CardProjects
            imgPath="https://raw.githubusercontent.com/tonelopes-dev/arvore-de-links-mode-dark-and-light-/main/.github/preview.png"
            titleProject="DevLinks"
            description="Minicurso exclusivo e gratuito, promovido pela Rocketseat para ensino de tecnologias WEB."
            linkGithub={
              "https://github.com/tonelopes-dev/arvore-de-links-mode-dark-and-light-"
            }
            linkProject={
              "https://tonelopes-dev.github.io/arvore-de-links-mode-dark-and-light-/"
            }
          />
          <CardProjects
            imgPath="https://raw.githubusercontent.com/tonelopes-dev/gerador-de-senhas/main/assets/projeto-gerador-de-senha.jpg"
            titleProject="Gerador de Senha"
            description="Minicurso exclusivo e gratuito, promovido pelo Sujeito Programador para ensino de tecnologias WEB."
            linkGithub={"https://github.com/tonelopes-dev/gerador-de-senhas"}
            linkProject={"https://tonelopes-dev.github.io/gerador-de-senhas/"}
          />
          <CardProjects
            imgPath="https://raw.githubusercontent.com/tonelopes-dev/projeto-android/main/imagens/preview.png"
            titleProject="História do Android"
            description='Projeto exclusivo e gratuito, promovido pelo "Curso em Vídeo" para ensino de tecnologias WEB.'
            linkGithub={"https://github.com/tonelopes-dev/projeto-android"}
            linkProject={"https://tonelopes-dev.github.io/projeto-android/"}
          />
          <CardProjects
            imgPath="https://raw.githubusercontent.com/tonelopes-dev/NLW-Projeto/main/assets/preview.jpg"
            titleProject="Habits"
            description="NLW é um evento exclusivo e gratuito, promovido pela Rocketseat para ensino de tecnologias WEB"
            linkGithub={"https://github.com/tonelopes-dev/NLW-Projeto"}
            linkProject={"https://tonelopes-dev.github.io/NLW-Projeto/"}
          />
          <CardProjects
            imgPath="https://raw.githubusercontent.com/tonelopes-dev/pokenext/main/assets/capa-pokedex.png"
            titleProject="Pokenext"
            description="Esse foi um projeto de estudo do Framework Next.JS."
            linkGithub={"https://github.com/tonelopes-dev/pokenext"}
            linkProject={"https://pokedex-nextjs-delta.vercel.app/"}
          />
          <CardProjects
            imgPath="https://raw.githubusercontent.com/tonelopes-dev/calculadora-rocketseat/main/assets/img/projeto-BoraCodar-calculadora-.jpg"
            titleProject="Calculadora"
            description="#boraCodar são desafios semanais, promovido pela Rocketseat para ensino de tecnologias WEB."
            linkGithub={
              "https://github.com/tonelopes-dev/calculadora-rocketseat"
            }
            linkProject={"https://tonelopes.github.io/calculadora-rocketseat/"}
          />
          <CardProjects
            imgPath="https://raw.githubusercontent.com/tonelopes-dev/explore-03-treinos-exclusivos/main/images/print-project.png"
            titleProject="Treinos exclusivos"
            description="Este é um projeto da RocketSeat do programa Explore composto por 20 módulos."
            linkGithub={
              "https://github.com/tonelopes-dev/explore-03-treinos-exclusivos"
            }
            linkProject={"https://explore-03-treinos-exclusivos.vercel.app/"}
          />
          <CardProjects
            imgPath="https://raw.githubusercontent.com/tonelopes-dev/explorer-desafio-04-recriando-layout/main/images/print-project.png"
            titleProject="Desafio avançado - Recriando layout "
            description="Realizei o desafio proposto durante o programa Explore da RocketSeat, que consistia recriar um layout enviado pelo figma."
            linkGithub={
              "https://github.com/tonelopes-dev/explorer-desafio-04-recriando-layout"
            }
            linkProject={
              "https://explorer-desafio-04-recriando-layout.vercel.app/"
            }
          />
          <CardProjects
            imgPath="https://raw.githubusercontent.com/tonelopes-dev/explorer-desafio-05-formulario-crie-seu-evento/main/images/print-project.png"
            titleProject='Projeto de um formulário: "Crie seu Evento"'
            description="Esse projeto foi desenvolvido durante uma aula com o objetivo de aprender sobre todos os campos de entrada de um formulário."
            linkGithub={
              "https://github.com/tonelopes-dev/explorer-desafio-05-formulario-crie-seu-evento"
            }
            linkProject={
              "https://explorer-desafio-05-formulario-crie-seu-evento.vercel.app/"
            }
          />
          <CardProjects
            imgPath="https://raw.githubusercontent.com/tonelopes-dev/explorer-desafio-09-mobile-first/main/assets/capa-grid-animacoes-css.png"
            titleProject="Space Cream Desktop - Grid com Animações"
            description="Esse projeto foi desenvolvido durante uma aula com o objetivo de aprender sobre animações CSS avançadas e o conceito de mobile"
            linkGithub={
              "https://github.com/tonelopes-dev/explorer-desafio-09-mobile-first"
            }
            linkProject={"https://explorer-desafio-09-mobile-first.vercel.app/"}
          />
          <CardProjects
            imgPath="https://raw.githubusercontent.com/tonelopes-dev/portfolio/main/assets/img-telas/print-portfolio-tela-dark.jpg"
            titleProject="Portfolio V1.0"
            description="Bem-vindo a primeira versão do meu site pessoal de desenvolvimento web! Aqui, você encontrará uma seleção de projetos de front-end que desenvolvi utilizando algumas das tecnologias mais recentes e avançadas, tais como HTML, CSS, JavaScript, jQuery, ReactJS e Bootstrap."
            linkGithub={"https://github.com/tonelopes-dev/portfolio"}
            linkProject={"https://tonelopes-dev.github.io/portfolio/"}
          />
          <CardProjects
            imgPath="https://raw.githubusercontent.com/tonelopes-dev/mylinks/main/assets/img/print-project/projeto-mylinks.jpg"
            titleProject="Todos os meus links em um só lugar."
            description="A árvore de links é um projeto que reune todos os links em um só lugar, como um cartão de visitas online."
            linkGithub={"https://github.com/tonelopes-dev/mylinks"}
            linkProject={"https://tonelopes-dev.github.io/mylinks/"}
          />
          <CardProjects
            imgPath="https://raw.githubusercontent.com/tonelopes-dev/jogo-da-memoria/main/images/print-project/projeto-jogo-da-memoria.jpg"
            titleProject="Jogo da Memória com Animações."
            description="O Jogo da memória foi desenvolvido pelo Curso ProgramadorBR para fins educacionais."
            linkGithub={"https://github.com/tonelopes-dev/jogo-da-memoria"}
            linkProject={"https://tonelopes-dev.github.io/jogo-da-memoria/"}
          />
          <CardProjects
            imgPath="https://raw.githubusercontent.com/tonelopes-dev/snapweather/main/assets/img/projeto-snapweather.jpg"
            titleProject="Projeto SnapWeather"
            description="O snapwaether é um aplicação que usa uma API do OpenWeather para verificar o clima das cidades solicitadas."
            linkGithub={"https://github.com/tonelopes-dev/snapweather"}
            linkProject={"https://tonelopes-dev.github.io/snapweather/"}
          />
          <CardProjects
            imgPath="https://raw.githubusercontent.com/tonelopes-dev/To-Do-App/main/img/projeto-todo-app.jpg"
            titleProject="Projeto To Do App (Tarefas)"
            description="Este é um aplicativo para criação e organização de tarefas diárias. Conhecido como To-do-List."
            linkGithub={"https://github.com/tonelopes-dev/To-Do-App"}
            linkProject={"https://tonelopes-dev.github.io/To-Do-App/"}
          />
          <CardProjects
            imgPath="https://raw.githubusercontent.com/tonelopes-dev/food-peek/main/assets/projeto-LP-Sanduiche.jpg"
            titleProject="Landing Page Sanduíche"
            description="A Landing Page Sanduíche foi desenvolvida para estudos de Responsividade usando as tecnologias acima."
            linkGithub={"https://github.com/tonelopes-dev/food-peek"}
            linkProject={"https://tonelopes-dev.github.io/food-peek/"}
          />
        </div>

        <div
          className="flex hidden flex-col rounded-lg bg-gray-50 p-4 dark:bg-gray-800"
          id="dashboard"
          role="tabpanel"
          aria-labelledby="dashboard-tab"
        >
          <p className="mb-5 text-sm text-gray-500 dark:text-gray-400">
            This is some placeholder content the{" "}
            <strong className="font-medium text-gray-800 dark:text-white">
              Dashboard tab's associated content
            </strong>
            . Clicking another tab will toggle the visibility of this one for
            the next. The tab JavaScript swaps classes to control the content
            visibility and styling.
          </p>
        </div>
        <div
          className="flex hidden flex-col rounded-lg bg-gray-50 p-4 dark:bg-gray-800"
          id="settings"
          role="tabpanel"
          aria-labelledby="settings-tab"
        >
          <p className="mb-5 text-sm text-gray-500 dark:text-gray-400">
            This is some placeholder content the{" "}
            <strong className="font-medium text-gray-800 dark:text-white">
              Settings tab's associated content
            </strong>
            . Clicking another tab will toggle the visibility of this one for
            the next. The tab JavaScript swaps classes to control the content
            visibility and styling.
          </p>
        </div>
        <div
          className="flex hidden flex-col rounded-lg bg-gray-50 p-4 dark:bg-gray-800"
          id="contacts"
          role="tabpanel"
          aria-labelledby="contacts-tab"
        >
          <p className="mb-5 text-sm text-gray-500 dark:text-gray-400">
            This is some placeholder content the{" "}
            <strong className="font-medium text-gray-800 dark:text-white">
              Contacts tab's associated content
            </strong>
            . Clicking another tab will toggle the visibility of this one for
            the next. The tab JavaScript swaps classes to control the content
            visibility and styling.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TabsProject;
