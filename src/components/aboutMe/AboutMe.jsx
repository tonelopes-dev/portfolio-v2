import SocialMedia from '/src/components/comuns/SocialMedia'
/* import { useTranslation } from "react-i18next"; */

const AboutMe = () => {
    /* const { t } = useTranslation(); */
    return (
        <div id="aboutme">
            <div className=" flex justify-center rounded-t bg-teal-800 py-5 text-center">
                <h2 className="pb-3 text-center text-2xl font-bold text-amber-200">
                    Sobre mim
                </h2>
            </div>
            <div className="bg-aboutme flex	h-max flex-wrap items-start justify-evenly  rounded-b bg-opacity-90 shadow-md">
                <div className="flex flex-1 flex-col gap-2 border-x-2 bg-white p-8 md:w-3/4">
                    <p className="my-auto mb-10 text-left text-lg font-normal text-gray-700 dark:text-gray-400 lg:text-xl">
                        <strong className="text-bold">
                            Participei de bootcamps
                        </strong>{' '}
                        de destaque, incluindo o{' '}
                        <strong className="mb-4 bg-gradient-to-r from-purple-800 to-purple-500 bg-clip-text text-left text-2xl font-extrabold text-gray-900 text-transparent dark:text-white">
                            FullStack da Rocketseat
                        </strong>{' '}
                        e fui selecionado entre{' '}
                        <strong className="text-bold">36 mil candidatos</strong>{' '}
                        para participar do Bootcamp em{' '}
                        <strong className="text-bold">
                            Desenvolvimento Backend
                        </strong>{' '}
                        da{' '}
                        <strong className="mb-4 bg-gradient-to-r from-pink-800 to-pink-500 bg-clip-text text-left text-2xl font-extrabold text-gray-900 text-transparent dark:text-white">
                            Cubos Academy
                        </strong>{' '}
                        patrocinado pelo{' '}
                        <strong className="mb-4 bg-gradient-to-r from-red-800 to-red-500 bg-clip-text text-left text-2xl font-extrabold text-gray-500 text-transparent dark:text-white">
                            iFood
                        </strong>
                        . Essas experiências foram fundamentais para consolidar
                        meu conhecimento e moldar meu perfil como desenvolvedor
                        comprometido.
                        <br />
                        <br />
                        Minhas habilidades abrangem diversas tecnologias, desde
                        linguagens como{' '}
                        <strong className="mb-4 bg-gradient-to-r from-blue-800 to-indigo-500 bg-clip-text text-left text-xl font-bold text-gray-900 text-transparent dark:text-white">
                            JavaScript
                        </strong>{' '}
                        e{' '}
                        <strong className="mb-4 bg-gradient-to-r from-blue-800 to-indigo-500 bg-clip-text text-left text-xl font-bold text-gray-900 text-transparent dark:text-white">
                            TypeScript
                        </strong>{' '}
                        até ferramentas poderosas como o ambiente de tempo de
                        execução{' '}
                        <strong className="mb-4 bg-gradient-to-r from-blue-800 to-indigo-500 bg-clip-text text-left text-xl font-bold text-gray-900 text-transparent dark:text-white">
                            Node.js
                        </strong>
                        . Tenho experiência com frameworks e bibliotecas como{' '}
                        <strong className="mb-4 bg-gradient-to-r from-blue-800 to-indigo-500 bg-clip-text text-left text-xl font-bold text-gray-900 text-transparent dark:text-white">
                            Express
                        </strong>
                        ,{' '}
                        <strong className="mb-4 bg-gradient-to-r from-blue-800 to-indigo-500 bg-clip-text text-left text-xl font-bold text-gray-900 text-transparent dark:text-white">
                            React
                        </strong>
                        ,{' '}
                        <strong className="mb-4 bg-gradient-to-r from-blue-800 to-indigo-500 bg-clip-text text-left text-xl font-bold text-gray-900 text-transparent dark:text-white">
                            Next.js
                        </strong>
                        . Além disso, sou proficiente em ferramentas modernas
                        como{' '}
                        <strong className="mb-4 bg-gradient-to-r from-blue-800 to-indigo-500 bg-clip-text text-left text-xl font-bold text-gray-900 text-transparent dark:text-white">
                            Prisma
                        </strong>
                        ,{' '}
                        <strong className="mb-4 bg-gradient-to-r from-blue-800 to-indigo-500 bg-clip-text text-left text-xl font-bold text-gray-900 text-transparent dark:text-white">
                            MongoDB
                        </strong>
                        ,{' '}
                        <strong className="mb-4 bg-gradient-to-r from-blue-800 to-indigo-500 bg-clip-text text-left text-xl font-bold text-gray-900 text-transparent dark:text-white">
                            Firebase
                        </strong>
                        ,{' '}
                        <strong className="mb-4 bg-gradient-to-r from-blue-800 to-indigo-500 bg-clip-text text-left text-xl font-bold text-gray-900 text-transparent dark:text-white">
                            NeonDB
                        </strong>
                        , e integrações como{' '}
                        <strong className="mb-4 bg-gradient-to-r from-blue-800 to-indigo-500 bg-clip-text text-left text-xl font-bold text-gray-900 text-transparent dark:text-white">
                            Stripe
                        </strong>
                        . No front-end, utilizo{' '}
                        <strong className="mb-4 bg-gradient-to-r from-blue-800 to-indigo-500 bg-clip-text text-left text-xl font-bold text-gray-900 text-transparent dark:text-white">
                            TailwindCSS{' '}
                        </strong>
                        e{' '}
                        <strong className="mb-4 bg-gradient-to-r from-blue-800 to-indigo-500 bg-clip-text text-left text-xl font-bold text-gray-900 text-transparent dark:text-white">
                            Shadcn{' '}
                        </strong>
                        para criar interfaces elegantes e responsivas. No campo
                        de autenticação, trabalho com{' '}
                        <strong className="mb-4 bg-gradient-to-r from-blue-800 to-indigo-500 bg-clip-text text-left text-xl font-bold text-gray-900 text-transparent dark:text-white">
                            NextAuth
                        </strong>{' '}
                        e{' '}
                        <strong className="mb-4 bg-gradient-to-r from-blue-800 to-indigo-500 bg-clip-text text-left text-xl font-bold text-gray-900 text-transparent dark:text-white">
                            Clerk
                        </strong>
                        .
                        <br />
                        <br />
                        Tenho conhecimento em{' '}
                        <strong className="mb-4 bg-gradient-to-r from-blue-800 to-indigo-500 bg-clip-text text-left text-xl font-bold text-gray-900 text-transparent dark:text-white">
                            Docker
                        </strong>{' '}
                        e pipelines de{' '}
                        <strong className="mb-4 bg-gradient-to-r from-blue-800 to-indigo-500 bg-clip-text text-left text-xl font-bold text-gray-900 text-transparent dark:text-white">
                            CI/CD
                        </strong>
                        , garantindo eficiência no desenvolvimento e na entrega
                        de projetos.
                        <br />
                        <br />
                        <strong className="text-bold mb-3">
                            Explore mais sobre minhas habilidades, projetos
                            anteriores e como posso agregar valor à sua equipe
                            ou empreendimento.
                        </strong>
                    </p>

                    <SocialMedia />
                </div>
            </div>
        </div>
    )
}

export default AboutMe
