import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Reviews from "./components/Reviews";

const App = () => {
  return (
<>
  <Navbar />
  <HeroSection />
  <Services />
  <Reviews />
</>
  );
};

export default App;
