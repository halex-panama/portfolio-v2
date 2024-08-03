import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { slideIn, scale } from "../utils/animation";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/black-and-white.css";

type Props = {
  imageSrc: string;
  title: string;
  tech: string[];
  demo: string;
  source: string;
  description: string;
  index: number;
  placeholderSrc: string;
};

const ParallaxProject = ({
  description,
  imageSrc,
  tech,
  title,
  demo,
  source,
  index,
  placeholderSrc,
}: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-200%"]);

  const [loaded, setLoaded] = useState(false);

  return (
    <div
      ref={ref}
      className={`lg:min-h-svh flex flex-col lg:flex-row items-center gap-12 px-8 overflow-hidden ${
        index % 2 == 0 ? "lg:flex-row" : "lg:flex-row-reverse"
      }`}
    >
      <motion.div
        variants={scale}
        custom={0.5}
        initial="init"
        whileInView="animate"
        style={{ y }}
        className="min-h-32 sm:min-h-48 min-w-64 md:min-w-[500px] max-w-sm lg:max-w-lg rounded-md mt-2"
      >
        <div
          className={`absolute inset-0 rounded-md  ${
            loaded
              ? "bg-gradient-to-r from-accent-color-1 to-accent-color-2 blur animate-tilt"
              : "bg-transparent"
          }  `}
        />
        <div className="overflow-hidden rounded-md">
          <LazyLoadImage
            src={imageSrc}
            placeholderSrc={placeholderSrc}
            width={"100%"}
            height={"100%"}
            effect="black-and-white"
            className="lazy-img"
            onLoad={() => setLoaded(true)}
          />
        </div>
      </motion.div>
      <motion.div
        variants={slideIn}
        initial={index % 2 == 0 ? "right" : "left"}
        whileInView="animate"
        className="flex flex-col gap-6 max-w-lg"
      >
        <motion.h3 variants={slideIn} className="font-semibold text-2xl">
          {title}
        </motion.h3>
        <motion.p className="text-justify" variants={slideIn}>
          {description}
        </motion.p>
        <motion.div variants={slideIn} className="flex gap-2">
          {tech?.map((item) => (
            <motion.img
              variants={slideIn}
              className="w-8 h-8"
              src={item}
              key={item.toString()}
            />
          ))}
        </motion.div>
        <motion.div variants={slideIn} className="flex items-center gap-2">
          <motion.a
            href={demo}
            variants={slideIn}
            target="_blank"
            className="bg-primary-button text-primary-bg px-4 py-2 rounded-md font-semibold hover:bg-primary-button-700 transition-colors"
          >
            Live demo
          </motion.a>
          <motion.a
            href={source}
            variants={slideIn}
            target="_blank"
            className="text-primary-text"
          >
            <FaGithub size={40} />
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ParallaxProject;
