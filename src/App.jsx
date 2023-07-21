import { BrowserRouter } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import { BeatLoader } from "react-spinners";

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <BrowserRouter>
      {loading && (
        <div className='fixed inset-0 z-50 flex justify-center items-center flex-col bg-primary'>
          <div>
            <BeatLoader color='#fff' />
          </div>
          <p className='ml-2 text-white'>Loading...</p>
          <p className='text-white text-[12px] absolute bottom-5 mb-2'> This website uses 3D componenets, hence loading may take a while. </p>
        </div>
        
      )}
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        {/* <Feedbacks /> */}
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
