"use client";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
type Props = {};

export default function WorkExperience({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center space-y-40"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        experiência
      </h3>
      <div className="w-full flex items-center snap-x justify-center space-x-5 p-10 snap-mandatory">
        <ExperienceCard />
      </div>
    </motion.div>
  );
}
