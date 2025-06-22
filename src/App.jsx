import { BrowserRouter } from "react-router-dom";

import { About, Contact, Hero, Navbar,  Tech, Works,Footer, StarsCanvas } from "./components"; {/* <Feedbacks /> */}{/* <Experience /> */}
// Feedbacks,Experience,
const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        {/* <Experience /> */}
        <Works />
        <Tech />
        {/* <Feedbacks /> */}
        <Contact />
          <StarsCanvas />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;