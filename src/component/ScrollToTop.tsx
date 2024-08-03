import { useLenis } from "lenis/react";
import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const lenis = useLenis();
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  return (
    <>
      {showTopBtn && (
        <div
          onClick={() => lenis?.scrollTo("top")}
          className="fixed bottom-5 right-5 md:bottom-10 md:right-10 bg-primary-text rounded-full p-2 text-primary-bg h-8 w-8 md:h-10 md:w-10 cursor-pointer"
        >
          <FaArrowUp className="w-full h-full" />
        </div>
      )}
    </>
  );
};
export default ScrollToTop;
