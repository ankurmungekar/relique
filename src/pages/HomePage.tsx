import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import CoreExpertiseSection from '../components/sections/CoreExpertiseSection';
import AboutSection from '../components/sections/AboutSection';
import SolutionsSection from '../components/sections/SolutionsSection';

const HomePage: React.FC = () => {
  return (
    <div className="HomePage">
      <HeroSection />
      <CoreExpertiseSection />
      <AboutSection />
      <SolutionsSection />
    </div>
  );
};

export default HomePage; 