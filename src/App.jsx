import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Header from "./components/Header";
import Hero from "./components/Hero";
import { Routes, Route } from 'react-router-dom';
import Contactus from './components/Contactus'
// import Collaboration from "./components/Collaboration";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
      <Header />
        <Hero />
        <Benefits />
         {/* <Collaboration />  */}
        <Routes>
        
          <Route path="/Contactus" element={<Contactus />} />
          <Route path="/aboutus" element="" />
          {/* <Route path="/services"element={<Services />} /> */}


        </Routes>
        {/* <Services/> */}

      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
