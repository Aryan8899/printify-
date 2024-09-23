import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';  // Fix the import with the correct name
import DesignSection from './components/DesignSection';
import CreateSellFulfill from './components/CreateSellFulfill';
import ConnectYourStore from "./components/ConnectYourStore";
import TestimonialsSection from "./components/TestimonialsSection";
import ProfitComponent from "./components/ProfitComponent";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      {/* Now use HeroSection with the correct capitalization */}
      <HeroSection /> 
      <DesignSection />  {/* Add the new design section here */}
      <CreateSellFulfill /> {/* Add the new component here */}
      <ConnectYourStore/>
      <TestimonialsSection/>
      <ProfitComponent/>
      <Footer/>
    </div>
  );
}

export default App;
