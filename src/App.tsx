import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import CoreExpertiseSection from './components/CoreExpertiseSection';
import SolutionsSection from './components/SolutionsSection';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <HeroSection />
        <CoreExpertiseSection />
        <SolutionsSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
