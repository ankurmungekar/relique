import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import CoreExpertiseSection from '../components/sections/CoreExpertiseSection';
import AboutSection from '../components/sections/AboutSection';
import SolutionsSection from '../components/sections/SolutionsSection';
import { SEO } from '../components/ui';

const HomePage: React.FC = () => {
  return (
    <>
      <SEO
        title="Relique Consultants - Strategic Business Growth & Digital Transformation"
        description="Your strategic partner for business growth, market expansion, and digital transformation. Expert advisory services in BFSI, IT, and innovative solutions."
        canonical="/"
      />
      <div className="HomePage">
        <HeroSection />
        <CoreExpertiseSection />
        <AboutSection />
        <SolutionsSection />
      </div>
    </>
  );
};

export default HomePage; 