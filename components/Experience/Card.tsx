import Image from "next/image";
import React, { FC } from "react";
import { motion } from "framer-motion";
import { Check } from "@mui/icons-material";

interface Props {
  image: string;
  title: string;
  subtitle: string;
  stack: string[];
  start: string;
  finish: string;
  tasks: string[];
}

const Card: FC<Props> = ({
  image,
  title,
  subtitle,
  stack,
  start,
  finish,
  tasks,
}) => (
  <article className="experience__card snap-center overflow-hidden">
    <motion.img
      initial={{
        y: -50,
        opacity: 0,
      }}
      whileInView={{
        y: [-50, 10, 0],
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      alt={`${title} -  ${subtitle} - experience image`}
      src={image}
      className="h-[120px] md:w-[120px] mx-auto"
    />
    <div className="ml-10 md:ml-0">
      <h2 className="text-xl font-bold">{title}</h2>
      <h3>{subtitle}</h3>
    </div>
    <ul className="grid grid-cols-4 md:flex gap-5 justify-center w-auto mx-auto">
      {stack.map((item, i) => (
        <li key={i} className="mx-auto">
          <motion.img
            initial={{
              x: i % 2 === 0 ? -50 : 50,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 1,
            }}
            alt="Technology stack image"
            src={item}
            className="h-[35px] w-auto"
          />
        </li>
      ))}
    </ul>
    <div className="flex gap-5 justify-between mx-10 md:mx-auto">
      <h4>{start}</h4>
      <strong>-</strong>
      <h4>{finish}</h4>
    </div>
    <ul className="mx-auto">
      {tasks.map((task, i) => (
        <li key={i} className="gap-2 my-2">
          <Check color="secondary" />
          <span className="text-xs ml-2">{task}</span>
        </li>
      ))}
    </ul>
  </article>
);

export default Card;
