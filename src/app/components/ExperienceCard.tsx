/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
type Props = {};

export default function ExperienceCard({}: Props) {
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
      w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 
    "
    >
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px]
        object-cover object-top"
        src="https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-4.0.
        3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1323&q=80"
        alt="logo"
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Desenvolvedor FullStack</h4>
        <p className="font-bold text-2xl mt-1">Supera Inovação em Tecnologia</p>
        <div className="flex space-x-2 my-2">
          <img
            className="h-10 w-10 rounded-full"
            src="https://skillicons.dev/icons?i=ts"
            alt="typescript-icon"
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://skillicons.dev/icons?i=react"
            alt="react-icon"
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://skillicons.dev/icons?i=nodejs"
            alt="nodejs-icon"
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://skillicons.dev/icons?i=sequelize"
            alt="sequelize-icon"
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://skillicons.dev/icons?i=angular"
            alt="angular-icon"
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://skillicons.dev/icons?i=jest"
            alt="jest-icon"
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://skillicons.dev/icons?i=gitlab"
            alt="gitlab-icon"
          />
        </div>
        <p className="uppercase py-4 text-gray-300">
          Novembro de 2021 até o presente
        </p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>
            <span className="underline decoration-[#f7ab0a]/50 font-bold">
              Daexe, Biosale, Captamed, SIGESP (Projetos):
            </span>{" "}
            Responsável pela criação de componentes/páginas usando React.
          </li>
          <li>
            <span className="underline decoration-[#f7ab0a]/50 font-bold">
              Bristom (Projeto):
            </span>{" "}
            Responsável pela criação de componentes, endpoints, refatoração de
            endpoints, correção de bugs, usando React, React Native e Node.js
            com Sequelize.
          </li>

          <li>
            <span className="underline decoration-[#f7ab0a]/50 font-bold">
              Portal da Transparência (Projeto):
            </span>{" "}
            Implementação de regras de negócio, criação de componentes, montagem
            de tela, integrações com API Rest, usando Angular.
          </li>
        </ul>
      </div>
    </article>
  );
}
