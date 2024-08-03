import { FaGithub, FaLinkedin } from "react-icons/fa";
import { profileImg } from "../assets";
import { motion, useScroll, useTransform } from "framer-motion";
import { Skills } from ".";
import { slideIn } from "../utils/animation";
import { useRef } from "react";
import useMediaQuery from "../hooks/useMediaQuery";

const About = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const transformScale = useTransform(scrollYProgress, [0.3, 1], [1, 0.5]);
  const transformOpacity = useTransform(scrollYProgress, [0.3, 1], [1, 0.6]);

  const LgScreen = useMediaQuery("(min-width: 1024px)");

  const styles = {
    transform: {
      opacity: LgScreen ? transformOpacity : "1",
      scale: LgScreen ? transformScale : "1",
    },
  };

  return (
    <motion.section
      id="about"
      ref={ref}
      style={styles.transform}
      className="min-h-svh text-primary-text grid gap-12 place-content-center bg-gradient-to-b from-tree-bg to-primary-bg py-24"
    >
      <div className="flex flex-col-reverse lg:flex-row max-w-screen-xl items-center justify-center px-4 lg:px-10 gap-2 lg:gap-24">
        <motion.div
          variants={slideIn}
          initial="left"
          whileInView="animate"
          className="w-60 h-60 lg:w-80 lg:h-80 grid place-content-center"
        >
          <img src={profileImg} alt="" />
        </motion.div>
        <motion.div
          className="max-w-xl flex flex-col gap-6"
          variants={slideIn}
          initial="right"
          whileInView="animate"
        >
          <motion.h2 variants={slideIn} className="font-bold text-5xl">
            ABOUT ME
          </motion.h2>
          <motion.p variants={slideIn} className="text-justify">
            Hi there I'm Alex, a passionate and creative Frontend Developer. I
            have a solid foundation in web development and I'm interesting in
            building responsive websites or dynamic web applications. Explore my
            portfolio to see my latest projects and let's collaborate to bring
            your vision to the digital world.
          </motion.p>
          <motion.div variants={slideIn} className="flex gap-4">
            <motion.a
              variants={slideIn}
              href="https://www.linkedin.com/in/halexando-panama-putra-0305b1291/"
            >
              <FaLinkedin size={32} />
            </motion.a>
            <motion.a variants={slideIn} href="https://github.com/halex-panama">
              <FaGithub size={32} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
      <Skills />
    </motion.section>
  );
};

export default About;
