import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Workflow from "./components/Workflox";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";

const App = () => {
  return (
<>
  <Navbar />
  <HeroSection />
  <Services />
  <Workflow />
  <Reviews />
  <Footer />
</>
  );
};

export default App;
