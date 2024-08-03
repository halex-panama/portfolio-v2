import { motion } from "framer-motion";
import skills from "../utils/skills";
import { scale } from "../utils/animation";

const Skills = () => {
  return (
    <div className="flex justify-center">
      <div>
        <motion.ul
          variants={scale}
          custom={0.9}
          viewport={{ margin: "-100px" }}
          initial="init"
          whileInView="animate"
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-2 items-center"
        >
          {skills.map((skill) => (
            <motion.li
              variants={scale}
              key={skill.title}
              className="flex flex-col items-center justify-center gap-1 w-28 h-28 border-primary-button/20 border-2 rounded-md"
            >
              <img className="w-fit h-fit" src={skill.icon} alt="skills-icon" />
              <p className="text-center">{skill.title}</p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
};

export default Skills;
