"use client";
import { motion } from "framer-motion";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Sobre
      </h3>
      <motion.img
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src="https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1323&q=80"
        className=" mb-20 md:md-0 flex-shrink-0 h-56 w-56 rounded-full object-cover 
        md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[500px]"
      />

      <div className="space-y-10 px-0 md:px-10">
        <p className="text-xl">
          Eu sou Pedro Mesquita e tenho 22 anos. Atuo como{" "}
          <span className="underline decoration-[#f7ab0a]/50 font-semibold">
            desenvolvedor FullStack, utilizando React e Node
          </span>
          , com mais de um ano de experiência na área. Adquiri uma ampla gama de
          conhecimentos ao longo dos projetos em que participei.
        </p>
      </div>
    </motion.div>
  );
}
