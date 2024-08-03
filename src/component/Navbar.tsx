import { useLenis } from "lenis/react";
import NavMobile from "./NavMobile";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  const lenis = useLenis();
  return (
    <nav
      className={`absolute z-[999] flex w-full h-navMobile lg:h-navbar justify-end px-4 md:px-16 items-center ${
        isOpen ? "bg-primary-bg" : "bg-transparent"
      }`}
    >
      <div className="text-primary-text hidden lg:flex gap-4 items-center max-w-screen-lg">
        <ul className="flex gap-4 items-center">
          <li>
            <a
              className="hover:underline hover:underline-offset-8 font-medium transition-all"
              href="#about"
              onClick={() => lenis?.scrollTo("#about")}
            >
              About
            </a>
          </li>
          <li>
            <a
              className="hover:underline hover:underline-offset-8 font-medium transition-all"
              href="#projects"
              onClick={() => lenis?.scrollTo("#projects")}
            >
              Projects
            </a>
          </li>
        </ul>
        <a
          href="#contact"
          className="bg-primary-button text-primary-bg px-4 py-3 font-medium rounded-md hover:bg-primary-button-700 transition-colors"
          onClick={() => lenis?.scrollTo("#contact")}
        >
          Get in Touch
        </a>
      </div>
      <NavMobile isOpen={isOpen} setOpen={setOpen} />
    </nav>
  );
};

export default Navbar;
