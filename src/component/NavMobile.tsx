import { useClickAway } from "react-use";
import { useRef } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { AnimatePresence, motion } from "framer-motion";
import { useLenis } from "lenis/react";

type Props = {
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const NavMobile = ({ isOpen, setOpen }: Props) => {
  const ref = useRef(null);

  useClickAway(ref, () => setOpen(false));

  const lenis = useLenis();

  const handleClick = (href: string) => {
    lenis?.scrollTo(`#${href}`);
    setOpen(false);
  };

  return (
    <div ref={ref} className="lg:hidden text-primary-text">
      <Hamburger toggled={isOpen} size={20} toggle={setOpen} />

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col items-center justify-center gap-8 fixed left-0 right-0 top-[6rem] bg-primary-bg shadow-lg py-8"
            >
              <ul className="flex flex-col gap-4 items-center">
                <motion.li
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: 0.1,
                  }}
                >
                  <a
                    className="hover:underline hover:underline-offset-8 font-medium transition-all text-lg"
                    href="#about"
                    onClick={() => handleClick("about")}
                  >
                    About
                  </a>
                </motion.li>
                <motion.li
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: 0.2,
                  }}
                >
                  <a
                    className="hover:underline hover:underline-offset-8 font-medium transition-all text-lg"
                    href="#projects"
                    onClick={() => handleClick("projects")}
                  >
                    Projects
                  </a>
                </motion.li>
              </ul>
              <motion.li
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: 0.3,
                }}
              >
                <a
                  href="#contact"
                  className="bg-primary-button text-primary-bg px-2 py-2 font-medium rounded-md hover:bg-primary-button-700 transition-colors text-lg"
                  onClick={() => handleClick("contact")}
                >
                  Get in Touch
                </a>
              </motion.li>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavMobile;
