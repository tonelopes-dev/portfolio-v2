import SocialMedia from '/src/components/comuns/SocialMedia'

const AboutMe = () => {
    return (
        <div id="aboutme">
            <div className="flex justify-center rounded-t bg-teal-800 py-5 text-center">
                <h2 className="pb-3 text-center text-2xl font-bold text-amber-200">
                    Sobre Mim
                </h2>
            </div>
            <div className="bg-aboutme flex h-max flex-wrap items-start justify-evenly rounded-b bg-opacity-90 shadow-md">
                <div className="flex flex-1 flex-col gap-2 border-x-2 bg-white p-8 md:w-3/4">
                    {/* Card */}

                    <div className="flex flex-1 pb-6 gap-6  bg-white   items-center justify-center">
                        <div className="relative w-36 h-36 rounded-full overflow-hidden shadow-md">
                            <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-300 rounded-full p-1">
                                <img
                                    className="w-full h-full object-cover rounded-full"
                                    src="/public/tone-lopes-perfil.png"
                                    alt="Imagem do perfil"
                                />
                            </div>
                        </div>
                        <div className="">
                            <h2 className="text-2xl text-left font-semibold text-gray-800">
                                Tone Lopes
                            </h2>
                            <p className="text-gray-600">
                                Desenvolvedor FullStack Typescript
                            </p>
                        </div>
                    </div>

                    <div
                        className={`my-auto mb-10 text-inherit text-left  text-lg font-normal text-gray-700 dark:text-gray-400 lg:text-xl text-font-inter `}
                    >
                        <p>
                            Participei de bootcamps de destaque, incluindo o{' '}
                            <strong className="mb-4 bg-gradient-to-r from-purple-800 to-purple-500 bg-clip-text text-left text-2xl font-extrabold text-transparent">
                                FullStack da Rocketseat
                            </strong>
                            , onde desenvolvi projetos de ponta a ponta. Essa
                            experiência me proporcionou habilidades técnicas e a
                            capacidade de construir aplicações robustas. Como
                            resultado desse desempenho, fui um dos selecionados
                            entre{' '}
                            <strong className="text-bold">
                                36 mil candidatos
                            </strong>{' '}
                            para participar do Bootcamp em{' '}
                            <strong className="mb-4 bg-gradient-to-r from-pink-800 to-pink-500 bg-clip-text text-left text-2xl font-extrabold text-transparent">
                                Desenvolvimento Back-end da Cubos Academy
                            </strong>{' '}
                            patrocinado pelo{' '}
                            <strong className="mb-4 bg-gradient-to-r from-red-800 to-red-500 bg-clip-text text-left text-2xl font-extrabold text-transparent">
                                iFood
                            </strong>
                            . Essas experiências foram fundamentais para
                            consolidar meu conhecimento e moldar meu perfil como
                            um{' '}
                            <strong className="text-bold">
                                desenvolvedor comprometido e estratégico.
                            </strong>
                        </p>

                        <h3 className="mt-8 mb-4 bg-gradient-to-r from-teal-800 to-teal-500 bg-clip-text text-left text-2xl font-extrabold text-transparent">
                            Experiência no Bootcamp iFood
                        </h3>

                        <p>
                            Durante o{' '}
                            <strong className="text-bold">
                                Bootcamp patrocinado pelo iFood
                            </strong>{' '}
                            , minhas experiências anteriores me proporcionaram
                            uma vantagem competitiva. Tive a oportunidade de{' '}
                            <strong className="text-bold">
                                liderar uma equipe de cinco membros
                            </strong>{' '}
                            no desenvolvimento de uma{' '}
                            <strong className="mb-4 bg-gradient-to-r from-blue-800 to-indigo-500 bg-clip-text text-left text-xl font-bold text-transparent">
                                API RESTful para gerenciamento de transações
                                financeiras
                            </strong>
                            . O projeto foi entregue em três sprints,{' '}
                            <strong className="text-bold">
                                demonstrando minha capacidade de liderança,
                                organização e colaboração.
                            </strong>
                        </p>

                        <h3 className="mt-8 mb-4 bg-gradient-to-r from-teal-800 to-teal-500 bg-clip-text text-left text-2xl font-extrabold text-transparent">
                            Meu Projeto: Graninha App
                        </h3>

                        <p>
                            Atualmente, sou criador do{' '}
                            <strong className="mb-4 bg-gradient-to-r from-blue-800 to-indigo-500 bg-clip-text text-left text-xl font-bold text-transparent">
                                Graninha App
                            </strong>
                            , um aplicativo de{' '}
                            <strong className="text-bold">
                                organização financeira
                            </strong>{' '}
                            que foi desenvolvido para{' '}
                            <strong className="text-bold">
                                otimizar o controle de gastos e receitas.
                            </strong>
                        </p>

                        <p className="mt-4">
                            Além disso, meu portfólio inclui diversos projetos
                            fullstack que abrangem{' '}
                            <strong className="mb-4  bg-clip-text text-left text-xl font-bold ">
                                e-commerce, agendamento de barbearia, gestão
                                financeira, agendamento de hospedagens e
                                sistemas de autoatendimento
                            </strong>
                            . Neles, implementei{' '}
                            <strong className="mb-4  bg-clip-text text-left text-xl font-bold ">
                                micro serviços, autenticação de usuários, envio
                                de e-mails para aumentar a retenção e upload de
                                imagens otimizadas
                            </strong>{' '}
                            para melhor desempenho no front-end.
                        </p>

                        <div className="mt-8 p-4 bg-amber-50 rounded-lg border-l-4 border-amber-300">
                            <p className="text-sm italic text-amber-800">
                                🎙️ Ouça este conteúdo em áudio (Em breve,
                                disponibilizarei uma versão narrada deste
                                conteúdo para facilitar o acesso a quem prefere
                                consumir informações de forma auditiva.)
                            </p>
                        </div>

                        <p className="mt-8 text-lg font-semibold text-teal-800">
                            Explore mais sobre minhas habilidades, projetos
                            anteriores e descubra como posso agregar valor à sua
                            equipe ou empreendimento.
                        </p>
                    </div>

                    <SocialMedia />
                </div>
            </div>
        </div>
    )
}

export default AboutMe
