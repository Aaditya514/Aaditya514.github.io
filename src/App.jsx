import { BrowserRouter } from "react-router-dom";
import {
  BlackHoleIntro,
  About,
  Contact,
  Hero,
  Navbar,
  Tech,
  Experience,
  Works,
  Footer,
  StarsCanvas,
  SmoothScroll,
  CustomCursor,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <SmoothScroll>
        {/* Fixed overlay — always on top while visible, zero scroll-height */}
        <BlackHoleIntro />

        <CustomCursor />
        <div className="relative z-0 bg-primary bg-grid-pattern overflow-x-hidden selection:bg-[#915eff] selection:text-white min-h-screen">
          <div className="relative z-10">
            <Navbar />
            <Hero />
          </div>

          <About />
          <Experience />
          <Works />
          <Tech />

          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>

          <Footer />
        </div>
      </SmoothScroll>
    </BrowserRouter>
  );
};

export default App;