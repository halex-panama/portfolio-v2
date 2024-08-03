import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Navbar } from "./";
import { scale } from "../utils/animation";

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const translateToRight = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "100%"]
  );
  const transfromScale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);

  return (
    <section ref={ref} className="h-svh relative overflow-hidden">
      <Navbar />
      <motion.div
        variants={scale}
        initial="init"
        whileInView="animate"
        custom={0.7}
        className="grid place-content-center h-full text-primary-text z-40 relative"
      >
        <motion.h1
          style={{ y: translateY }}
          className="text-center font-extrabold text-5xl sm:text-7xl"
        >
          Hi I'm Alex
        </motion.h1>
        <motion.h2
          style={{ y: translateY }}
          className="grid place-items-center text-2xl sm:text-3xl"
        >
          Passionate and Creative <span>Frontend Developer</span>
        </motion.h2>
      </motion.div>
      <motion.div
        className="bg-star inset-0 absolute bg-no-repeat bg-cover bg-center"
        style={{ x: translateToRight }}
      />
      <motion.div className="bg-cliffLeft inset-0 absolute bg-no-repeat z-40 bg-cover bg-center" />

      <motion.div
        className="bg-frontTree inset-0 absolute z-30 bg-cover bg-center"
        style={{ scale: transfromScale }}
      />
      <motion.div
        className="bg-backTree inset-0 absolute z-20 bg-cover bg-center"
        style={{ scale: transfromScale }}
      />
    </section>
  );
};

export default Hero;
