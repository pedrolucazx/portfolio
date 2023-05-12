"use client";
import { motion } from "framer-motion";

type Props = {
  directionLeft?: boolean;
  img: string;
};

export default function Skill({ directionLeft, img }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src={img}
        className=" rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 
        xl:w-32 xl:h-32 "
      />
    </div>
  );
}
