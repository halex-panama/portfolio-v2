import ReactLenis from "lenis/react";
import {
  About,
  Contact,
  Footer,
  Hero,
  Projects,
  ScrollToTop,
} from "./component";

const App = () => {
  return (
    <ReactLenis root>
      <main className="app bg-primary-bg  relative overflow-hidden">
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
        <ScrollToTop />
      </main>
    </ReactLenis>
  );
};

export default App;
