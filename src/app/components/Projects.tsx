/* eslint-disable @next/next/no-img-element */
"use client";
import { motion } from "framer-motion";

type Props = {};

export default function Projects({}: Props) {
  const projects = [{ name: "Lorem ipsum dolor sit amet ", img: "" }];
  return (
    <div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projetos
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {projects.map(({ img, name }, i) => (
          <div
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 justify-center items-center p-20 md:p-44 h-screen"
            key={i}
          >
            <motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src={img}
              alt=""
            />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">{name}</h4>
              <p className="text-lg text-center md:text-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus, consequuntur excepturi doloremque ab repellat ad
                veniam ratione eaque dolore tempore blanditiis corrupti? Est
                dolorem, magnam beatae cupiditate cumque dolore cum.
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#f7ab0a]/10 left-0 h-[500px] -skew-y-12" />
    </div>
  );
}
