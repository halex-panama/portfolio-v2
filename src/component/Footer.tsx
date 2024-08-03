import { useLenis } from "lenis/react";

const Footer = () => {
  const lenis = useLenis();
  return (
    <footer className="w-full py-14 text-primary-text bg-light-bg/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <ul className="text-lg flex items-center justify-center flex-col gap-7 md:flex-row md:gap-12 transition-all duration-500 py-4 mb-4 border-b border-gray-200">
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
            <li>
              <a
                className="hover:underline hover:underline-offset-8 font-medium transition-all"
                href="#contact"
                onClick={() => lenis?.scrollTo("#contact")}
              >
                Contact
              </a>
            </li>
          </ul>
          <span className="text-lg text-gray-500 text-center block">
            ©Halexando Panama 2024, All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
